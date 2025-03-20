import { Post, Project, Category, Tag } from './types'

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL

if (!WP_API_URL) {
  throw new Error('NEXT_PUBLIC_WP_API_URL is not defined')
}

// Interface for posts with processed categories and tags
interface ProcessedPost extends Omit<Post, 'categories' | 'tags'> {
  categories: Category[];
  tags: Tag[];
}

export interface PaginationParams {
  page?: number
  per_page?: number
  _fields?: string[]
}
export const fetchCache = 'force-no-store';


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
      _embed: 'wp:featuredmedia,wp:term',
      per_page: 1
    })

    return posts[0] || null
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return null
  }
}

// Function to fetch categories by IDs
async function getCategoriesByIds(categoryIds: number[]): Promise<Category[]> {
  if (!categoryIds || categoryIds.length === 0) return [];
  
  try {
    const categoryPromises = categoryIds.map(id => 
      fetch(`${WP_API_URL}/wp/v2/categories/${id}`)
        .then(res => res.ok ? res.json() : null)
        .catch(err => {
          console.error(`Failed to fetch category ${id}:`, err);
          return null;
        })
    );
    
    const categories = await Promise.all(categoryPromises);
    return categories
      .filter(cat => cat !== null) // Ensure we only process non-null categories
      .map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug
      }));
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

// Function to fetch tags by IDs
async function getTagsByIds(tagIds: number[]): Promise<Tag[]> {
  if (!tagIds || tagIds.length === 0) return [];
  
  try {
    const tagPromises = tagIds.map(id => 
      fetch(`${WP_API_URL}/wp/v2/tags/${id}`)
        .then(res => res.ok ? res.json() : null)
        .catch(err => {
          console.error(`Failed to fetch tag ${id}:`, err);
          return null;
        })
    );
    
    const tags = await Promise.all(tagPromises);
    return tags.filter(Boolean).map(tag => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      count: tag.count || 0
    }));
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return [];
  }
}

// Function to get all tags sorted by popularity (count)
export async function getAllTags(limit: number = 10): Promise<Tag[]> {
  try {
    const searchParams = new URLSearchParams();
    searchParams.set('orderby', 'count');
    searchParams.set('order', 'desc');
    searchParams.set('per_page', limit.toString());
    
    const response = await fetch(
      `${WP_API_URL}/wp/v2/tags?${searchParams.toString()}`,
      { next: { } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch tags');
    }
    
    const tags = await response.json();
    
    return tags.map((tag: { id: number; name: string; slug: string; count?: number }) => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      count: tag.count || 0
    }));
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return [];
  }
}

export async function getPosts(params: PaginationParams = {}): Promise<ProcessedPost[]> {
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

    // Ensure we get featured media in the response
    searchParams.set('_embed', 'wp:featuredmedia')

    const response = await fetch(
      `${WP_API_URL}/wp/v2/posts?${searchParams.toString()}`,
      { next: { } }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    const posts = await response.json() as Post[];
    
    // Process posts to fetch and add full category and tag objects
    const processedPosts = await Promise.all(posts.map(async (post) => {
      // Create a new object with the processed data
      const processedPost: ProcessedPost = {
        ...post,
        categories: [],
        tags: []
      };

      // Fetch full category objects if we have category IDs
      if (post.categories && Array.isArray(post.categories) && post.categories.length > 0) {
        processedPost.categories = await getCategoriesByIds(post.categories);
      }
      
      // Fetch full tag objects if we have tag IDs
      if (post.tags && Array.isArray(post.tags) && post.tags.length > 0) {
        processedPost.tags = await getTagsByIds(post.tags as unknown as number[]);
      }
      
      return processedPost;
    }));
    
    return processedPosts;
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