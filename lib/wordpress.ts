import { Post, Project, Category, Tag } from './types'
import { resolveRankMathSeoTitle } from './seo/rank-math'
import { fetchWpRankMathHead } from './wordpress/rank-math-head'

function normalizeWpApiUrl(input: string): string {
  const trimmed = input.trim().replace(/\/+$/, '')
  if (trimmed.endsWith('/wp-json')) return trimmed
  return `${trimmed}/wp-json`
}

const RAW_WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL

if (!RAW_WP_API_URL) {
  throw new Error(
    'NEXT_PUBLIC_WP_API_URL is not defined. Set it to your WP site base URL (e.g. https://example.com or https://example.com/wp-json).'
  )
}

const WP_API_URL = normalizeWpApiUrl(RAW_WP_API_URL)

export const WP_CACHE_TAGS = {
  posts: 'wp-posts',
  categories: 'wp-categories',
  tags: 'wp-tags',
  project: 'wp-projects',
} as const

type WpEndpoint = keyof typeof WP_CACHE_TAGS

// Safety-net only. Freshness comes from the WordPress webhook
// (`/api/revalidate`), which invalidates these cache tags on publish.
// A short interval rewrites every crawled URL and burns the ISR quota.
export const REVALIDATE_SECONDS = {
  POSTS: 604800,
  CATEGORIES: 604800,
  TAGS: 604800,
  PROJECTS: 604800,
} as const

export interface ProcessedPost extends Omit<Post, 'categories' | 'tags'> {
  categories: Category[]
  tags: Tag[]
}

export interface PaginationParams {
  page?: number
  per_page?: number
  _fields?: string[]
  categories?: number[]
  exclude?: number[]
}

export const BLOG_POSTS_PER_PAGE = 12

const WP_REST_MAX_PER_PAGE = 100

async function fetchAllPaginatedFromWp<T>(
  endpoint: WpEndpoint,
  params: Record<string, string | number> = {},
  revalidateSeconds: number = REVALIDATE_SECONDS.POSTS,
): Promise<T[]> {
  const all: T[] = []
  let page = 1
  let totalPages = 1

  while (page <= totalPages) {
    const result = await fetchAPIPaginated<T>(
      endpoint,
      { ...params, page, per_page: WP_REST_MAX_PER_PAGE },
      revalidateSeconds,
    )
    all.push(...result.data)
    totalPages = Math.max(result.totalPages, 1)
    page += 1
  }

  return all
}

export interface PaginatedResult<T> {
  data: T[]
  total: number
  totalPages: number
}

function buildWpUrl(endpoint: WpEndpoint, params: Record<string, string | number> = {}): string {
  const queryString = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    queryString.append(key, String(value))
  })

  return `${WP_API_URL}/wp/v2/${endpoint}${queryString.toString() ? `?${queryString}` : ''}`
}

async function fetchWpResponse(
  endpoint: WpEndpoint,
  params: Record<string, string | number> = {},
  revalidateSeconds: number = REVALIDATE_SECONDS.POSTS
): Promise<Response> {
  const response = await fetch(buildWpUrl(endpoint, params), {
    next: {
      tags: [WP_CACHE_TAGS[endpoint]],
      revalidate: revalidateSeconds,
    },
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`API Error (${response.status}):`, errorText)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response
}

async function fetchAPI<T>(
  endpoint: WpEndpoint,
  params: Record<string, string | number> = {},
  revalidateSeconds: number = REVALIDATE_SECONDS.POSTS
): Promise<T> {
  const response = await fetchWpResponse(endpoint, params, revalidateSeconds)
  return response.json() as Promise<T>
}

async function fetchAPIPaginated<T>(
  endpoint: WpEndpoint,
  params: Record<string, string | number> = {},
  revalidateSeconds: number = REVALIDATE_SECONDS.POSTS
): Promise<PaginatedResult<T>> {
  const response = await fetchWpResponse(endpoint, params, revalidateSeconds)
  const data = (await response.json()) as T[]

  return {
    data,
    total: Number.parseInt(response.headers.get('X-WP-Total') ?? '0', 10),
    totalPages: Number.parseInt(response.headers.get('X-WP-TotalPages') ?? '0', 10),
  }
}

async function fetchCategoriesByIds(categoryIds: number[]): Promise<Category[]> {
  if (categoryIds.length === 0) return []

  const WP_MAX_PER_PAGE = 100
  const batches: number[][] = []
  for (let i = 0; i < categoryIds.length; i += WP_MAX_PER_PAGE) {
    batches.push(categoryIds.slice(i, i + WP_MAX_PER_PAGE))
  }

  const batchResults = await Promise.all(
    batches.map(async (batch) => {
      const query = new URLSearchParams({
        include: batch.join(','),
        per_page: String(batch.length),
      })
      const url = `${WP_API_URL}/wp/v2/categories?${query}`

      const response = await fetch(url, {
        next: {
          tags: [WP_CACHE_TAGS.categories],
          revalidate: REVALIDATE_SECONDS.CATEGORIES,
        },
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) return []
      return response.json() as Promise<Array<{ id: number; name: string; slug: string }>>
    })
  )

  return batchResults.flat().map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
  }))
}

async function fetchTagsByIds(tagIds: number[]): Promise<Tag[]> {
  if (tagIds.length === 0) return []

  const WP_MAX_PER_PAGE = 100
  const batches: number[][] = []
  for (let i = 0; i < tagIds.length; i += WP_MAX_PER_PAGE) {
    batches.push(tagIds.slice(i, i + WP_MAX_PER_PAGE))
  }

  const batchResults = await Promise.all(
    batches.map(async (batch) => {
      const query = new URLSearchParams({
        include: batch.join(','),
        per_page: String(batch.length),
      })
      const url = `${WP_API_URL}/wp/v2/tags?${query}`

      const response = await fetch(url, {
        next: {
          tags: [WP_CACHE_TAGS.tags],
          revalidate: REVALIDATE_SECONDS.TAGS,
        },
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) return []
      return response.json() as Promise<
        Array<{ id: number; name: string; slug: string; count?: number }>
      >
    })
  )

  return batchResults.flat().map((tag) => ({
    id: tag.id,
    name: tag.name,
    slug: tag.slug,
    count: tag.count || 0,
  }))
}

async function fetchRankMathRestFields(
  postId: number,
): Promise<
  Pick<Post, 'rank_math_title' | 'rank_math_description' | 'rank_math_facebook_description'>
> {
  try {
    const query = new URLSearchParams({
      _fields: 'rank_math_title,rank_math_description,rank_math_facebook_description',
    })
    const url = `${WP_API_URL}/wp/v2/posts/${postId}?${query}`
    const response = await fetch(url, {
      next: {
        tags: [WP_CACHE_TAGS.posts],
        revalidate: REVALIDATE_SECONDS.POSTS,
      },
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) return {}

    const data = (await response.json()) as {
      rank_math_title?: string
      rank_math_description?: string
      rank_math_facebook_description?: string
    }

    return {
      rank_math_title: data.rank_math_title,
      rank_math_description: data.rank_math_description,
      rank_math_facebook_description: data.rank_math_facebook_description,
    }
  } catch (error) {
    console.error('Failed to fetch Rank Math REST fields:', error)
    return {}
  }
}

async function hydratePost(post: Post): Promise<ProcessedPost> {
  const processedPost: ProcessedPost = {
    ...post,
    categories: [],
    tags: [],
  }

  if (post.categories && Array.isArray(post.categories) && post.categories.length > 0) {
    const categoryIds = post.categories.filter((c): c is number => typeof c === 'number')
    processedPost.categories = await fetchCategoriesByIds(categoryIds)
  }

  if (post.tags && Array.isArray(post.tags) && post.tags.length > 0) {
    const tagIds = post.tags.filter((t): t is number => typeof t === 'number')
    processedPost.tags = await fetchTagsByIds(tagIds)
  }

  return processedPost
}

export async function getPost(slug: string): Promise<ProcessedPost | null> {
  try {
    const posts = await fetchAPI<Post[]>('posts', {
      slug,
      _embed: 'wp:featuredmedia,wp:term',
      per_page: 1,
    })

    const post = posts[0]
    if (!post) return null

    const [rankMathFields, rankMathHead] = await Promise.all([
      fetchRankMathRestFields(post.id),
      fetchWpRankMathHead(post.slug, {
        tags: [WP_CACHE_TAGS.posts],
        revalidate: REVALIDATE_SECONDS.POSTS,
      }),
    ])
    const rankMathTitleFromHead = resolveRankMathSeoTitle(rankMathHead.seoTitle)
    const mergedPost: Post = {
      ...post,
      rank_math_title:
        post.rank_math_title?.trim() ||
        rankMathFields.rank_math_title?.trim() ||
        rankMathTitleFromHead,
      rank_math_description:
        post.rank_math_description?.trim() ||
        rankMathFields.rank_math_description ||
        rankMathHead.seoDescription,
      rank_math_facebook_description:
        post.rank_math_facebook_description?.trim() ||
        rankMathFields.rank_math_facebook_description ||
        rankMathHead.ogDescription,
    }

    return hydratePost(mergedPost)
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return null
  }
}

export async function getAllTags(limit: number = 10): Promise<Tag[]> {
  try {
    const tags = await fetchAPI<Array<{ id: number; name: string; slug: string; count?: number }>>(
      'tags',
      {
        orderby: 'count',
        order: 'desc',
        per_page: limit,
      },
      REVALIDATE_SECONDS.TAGS
    )

    return tags.map((tag) => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      count: tag.count || 0,
    }))
  } catch (error) {
    console.error('Failed to fetch tags:', error)
    return []
  }
}

function buildPostsQueryParams(params: PaginationParams = {}): Record<string, string | number> {
  const queryParams: Record<string, string | number> = {
    _embed: 'wp:featuredmedia',
  }

  if (params.per_page) {
    queryParams.per_page = params.per_page
  }

  if (params.page) {
    queryParams.page = params.page
  }

  if (params._fields) {
    queryParams._fields = params._fields.join(',')
  }

  if (params.categories?.length) {
    queryParams.categories = params.categories.join(',')
  }

  if (params.exclude?.length) {
    queryParams.exclude = params.exclude.join(',')
  }

  return queryParams
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const categories = await fetchAllPaginatedFromWp<
      { id: number; name: string; slug: string; count: number; description?: string }
    >(
      'categories',
      { hide_empty: 'true', _fields: 'id,name,slug,count,description' },
      REVALIDATE_SECONDS.CATEGORIES,
    )
    return categories
      .filter((category) => category.slug !== 'uncategorized')
      .map((category) => ({ id: category.id, name: category.name, slug: category.slug, count: category.count }))
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    return []
  }
}

export async function getAllPublishedPostSlugs(): Promise<Array<{ slug: string }>> {
  try {
    return await fetchAllPaginatedFromWp<{ slug: string }>('posts', {
      _fields: 'slug',
    })
  } catch (error) {
    console.error('Failed to fetch all post slugs:', error)
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getAllCategories()
  return categories.find((category) => category.slug === slug) ?? null
}

export async function getPostsByCategory(slug: string, perPage: number = 100): Promise<ProcessedPost[]> {
  const category = await getCategoryBySlug(slug)
  if (!category) return []
  return getPosts({ categories: [category.id], per_page: perPage })
}

export async function getPostsPaginated(
  params: PaginationParams = {}
): Promise<PaginatedResult<ProcessedPost>> {
  try {
    const result = await fetchAPIPaginated<Post>('posts', buildPostsQueryParams(params))
    const posts = await Promise.all(result.data.map(hydratePost))

    return {
      data: posts,
      total: result.total,
      totalPages: result.totalPages,
    }
  } catch (error) {
    if (params.page && params.page > 1) {
      try {
        const totals = await fetchAPIPaginated<Post>('posts', buildPostsQueryParams({
          per_page: params.per_page,
          page: 1,
        }))

        return {
          data: [],
          total: totals.total,
          totalPages: totals.totalPages,
        }
      } catch (totalsError) {
        console.error('Failed to fetch post totals after pagination error:', totalsError)
      }
    }

    console.error('Failed to fetch posts:', error)
    return { data: [], total: 0, totalPages: 0 }
  }
}

export async function getPosts(params: PaginationParams = {}): Promise<ProcessedPost[]> {
  const result = await getPostsPaginated(params)
  return result.data
}

export async function getPostsForSitemap(): Promise<
  Array<{ slug: string; date: string; modified: string; modified_gmt: string }>
> {
  try {
    return await fetchAllPaginatedFromWp<{ slug: string; date: string; modified: string; modified_gmt: string }>(
      'posts',
      { _fields: 'slug,date,modified,modified_gmt' },
    )
  } catch (error) {
    console.error('Failed to fetch posts for sitemap:', error)
    return []
  }
}

export async function getPostsForLlms(): Promise<Array<{ slug: string; title: string; excerpt: string }>> {
  try {
    const posts = await fetchAPI<Array<{ slug: string; title: { rendered: string }; excerpt: { rendered: string } }>>('posts', {
      per_page: 100,
      _fields: 'slug,title,excerpt',
    })
    return posts.map((post) => ({ slug: post.slug, title: post.title.rendered, excerpt: post.excerpt.rendered }))
  } catch (error) {
    console.error('Failed to fetch posts for llms.txt:', error)
    return []
  }
}

export interface PostText {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  modified: string
}

// One request with `content` included. Feeds and llms-full.txt use it, so the
// payload is large but cached for a week and refreshed by the webhook.
export async function getPostsWithContent(limit: number = 100): Promise<PostText[]> {
  try {
    const posts = await fetchAPI<
      Array<{ slug: string; date: string; modified: string; title: { rendered: string }; excerpt: { rendered: string }; content: { rendered: string } }>
    >('posts', {
      per_page: limit,
      _fields: 'slug,date,modified,title,excerpt,content',
    })
    return posts.map((post) => ({
      slug: post.slug,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      modified: post.modified,
    }))
  } catch (error) {
    console.error('Failed to fetch posts with content:', error)
    return []
  }
}

export async function getProjects(params: PaginationParams = {}): Promise<Project[]> {
  try {
    return await fetchAPI<Project[]>(
      'project',
      {
        _embed: '1',
        per_page: params.per_page || 9,
        page: params.page || 1,
      },
      REVALIDATE_SECONDS.PROJECTS
    )
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}
