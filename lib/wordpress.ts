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

async function fetchAPI<T>(
  endpoint: WpEndpoint,
  params: Record<string, string | number> = {},
  revalidateSeconds: number = REVALIDATE_SECONDS.POSTS
): Promise<T> {
  const queryString = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    queryString.append(key, String(value))
  })

  const url = `${WP_API_URL}/wp/v2/${endpoint}${queryString.toString() ? `?${queryString}` : ''}`

  const response = await fetch(url, {
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

  return response.json() as Promise<T>
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

export async function getPosts(params: PaginationParams = {}): Promise<ProcessedPost[]> {
  try {
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

    const posts = await fetchAPI<Post[]>('posts', queryParams)
    return Promise.all(posts.map(hydratePost))
  } catch (error) {
    console.error('Failed to fetch posts:', error)
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
