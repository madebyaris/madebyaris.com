import { Post, Project } from './types'

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL

if (!WP_API_URL) {
  throw new Error('NEXT_PUBLIC_WP_API_URL is not defined')
}

export interface PaginationParams {
  page?: number
  per_page?: number
  _fields?: string[]
}

async function fetchAPI<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T> {
  try {
    const queryString = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      queryString.append(key, String(value))
    })

    const url = `${WP_API_URL}/wp/v2/${endpoint}/${queryString.toString() ? `?${queryString}` : ''}`
    console.log('Fetching URL:', url) // Debug log

    const response = await fetch(url, { 
      next: { 
        revalidate: 3600, // Revalidate every 3600 seconds
        tags: [`wp-${endpoint}`], // Add cache tags for targeted revalidation
      },
      headers: {
        'Accept': 'application/json',
      }
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`API Error (${response.status}):`, errorText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error)
    throw new Error(`Failed to fetch ${endpoint}`)
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const posts = await fetchAPI<Post[]>('posts', {
      slug,
      _embed: '1',
      per_page: 1
    })

    return posts[0] || null
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return null
  }
}

export async function getPosts(params: PaginationParams = {}): Promise<Post[]> {
  try {
    const searchParams = new URLSearchParams()
    
    if (params.per_page) {
      searchParams.set('per_page', params.per_page.toString())
    }
    
    if (params.page) {
      searchParams.set('page', params.page.toString())
    }

    if (params._fields) {
      searchParams.set('_fields', params._fields.join(','))
    }

    searchParams.set('_embed', 'true')

    const response = await fetch(
      `${WP_API_URL}/wp/v2/posts?${searchParams.toString()}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    return response.json()
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return []
  }
}

export async function getProjects(params: PaginationParams = {}): Promise<Project[]> {
  try {
    return await fetchAPI<Project[]>('project', {
      _embed: '1',
      per_page: params.per_page || 9,
      page: params.page || 1
    })
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}