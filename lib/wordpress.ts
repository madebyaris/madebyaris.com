import { Post, Project, Category, Tag } from './types'

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

const REVALIDATE_SECONDS = {
  POSTS: 300,
  CATEGORIES: 1800,
  TAGS: 1800,
  PROJECTS: 900,
} as const

export interface ProcessedPost extends Omit<Post, 'categories' | 'tags'> {
  categories: Category[]
  tags: Tag[]
}

export interface PaginationParams {
  page?: number
  per_page?: number
  _fields?: string[]
}

export const BLOG_POSTS_PER_PAGE = 12

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

    return hydratePost(post)
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

  return queryParams
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

export async function getPostsForSitemap(): Promise<Array<{ slug: string; date: string; modified: string }>> {
  try {
    return await fetchAPI<Array<{ slug: string; date: string; modified: string }>>('posts', {
      per_page: 100,
      _fields: 'slug,date,modified',
    })
  } catch (error) {
    console.error('Failed to fetch posts for sitemap:', error)
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
