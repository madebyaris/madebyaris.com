import { Post, Project, Category, Tag } from './types'

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL

if (!WP_API_URL) {
  throw new Error('NEXT_PUBLIC_WP_API_URL is not defined')
}

// In-memory cache for WordPress API responses
const cache = new Map<string, { data: unknown; timestamp: number; ttl: number }>();

// Cache TTL in milliseconds
const CACHE_TTL = {
  POSTS: 10 * 60 * 1000, // 10 minutes
  CATEGORIES: 30 * 60 * 1000, // 30 minutes
  TAGS: 30 * 60 * 1000, // 30 minutes
  PROJECTS: 15 * 60 * 1000, // 15 minutes
}

// Cache utility functions
function getCacheKey(endpoint: string, params: Record<string, string | number>): string {
  const paramString = Object.entries(params)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `${endpoint}${paramString ? `?${paramString}` : ''}`;
}

function getFromCache<T>(key: string): T | null {
  const cached = cache.get(key);
  if (!cached) return null;
  
  // Check if cache has expired
  if (Date.now() - cached.timestamp > cached.ttl) {
    cache.delete(key);
    return null;
  }
  
  return cached.data as T;
}

function setCache<T>(key: string, data: T, ttl: number): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
    ttl
  });
  
  // Clean up old cache entries periodically
  if (cache.size > 100) {
    const now = Date.now();
    for (const [cacheKey, entry] of cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        cache.delete(cacheKey);
      }
    }
  }
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


async function fetchAPI<T>(endpoint: string, params: Record<string, string | number> = {}, ttl: number = CACHE_TTL.POSTS): Promise<T> {
  try {
    // Check cache first
    const cacheKey = getCacheKey(endpoint, params);
    const cachedData = getFromCache<T>(cacheKey);
    
    if (cachedData) {
      console.log(`[Cache] Cache hit for ${endpoint}`);
      return cachedData;
    }

    const queryString = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      queryString.append(key, String(value))
    })

    const url = `${WP_API_URL}/wp/v2/${endpoint}/${queryString.toString() ? `?${queryString}` : ''}`
    console.log('Fetching URL:', url) // Debug log

    const response = await fetch(url, { 
      next: { 
        tags: [`wp-${endpoint}`], // Add cache tags for targeted revalidation
        revalidate: Math.floor(ttl / 1000) // Convert to seconds for Next.js
      },
      headers: {
        'Accept': 'application/json',
        'Cache-Control': `s-maxage=${Math.floor(ttl / 1000)}, stale-while-revalidate`
      }
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`API Error (${response.status}):`, errorText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    // Cache the successful response
    setCache(cacheKey, data, ttl);
    console.log(`[Cache] Cache set for ${endpoint}`);
    
    return data as T
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error)
    
    // Try to return stale cache data if available
    const cacheKey = getCacheKey(endpoint, params);
    const staleData = cache.get(cacheKey);
    if (staleData) {
      console.log(`[Cache] Returning stale data for ${endpoint}`);
      return staleData.data as T;
    }
    
    throw new Error(`Failed to fetch ${endpoint}`)
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const posts = await fetchAPI<Post[]>('posts', {
      slug,
      _embed: 'wp:featuredmedia,wp:term',
      per_page: 1
    }, CACHE_TTL.POSTS)

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
    const categoryPromises = categoryIds.map(async id => {
      const cacheKey = `category-${id}`;
      const cached = getFromCache<Category>(cacheKey);
      
      if (cached) {
        return cached;
      }
      
      try {
        const response = await fetch(`${WP_API_URL}/wp/v2/categories/${id}`, {
          headers: { 'Accept': 'application/json' },
          next: { revalidate: Math.floor(CACHE_TTL.CATEGORIES / 1000) }
        });
        
        if (!response.ok) return null;
        
        const cat = await response.json();
        const category = {
          id: cat.id,
          name: cat.name,
          slug: cat.slug
        };
        
        setCache(cacheKey, category, CACHE_TTL.CATEGORIES);
        return category;
      } catch (err) {
        console.error(`Failed to fetch category ${id}:`, err);
        return null;
      }
    });
    
    const categories = await Promise.all(categoryPromises);
    return categories.filter(cat => cat !== null) as Category[];
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

// Function to fetch tags by IDs
async function getTagsByIds(tagIds: number[]): Promise<Tag[]> {
  if (!tagIds || tagIds.length === 0) return [];
  
  try {
    const tagPromises = tagIds.map(async id => {
      const cacheKey = `tag-${id}`;
      const cached = getFromCache<Tag>(cacheKey);
      
      if (cached) {
        return cached;
      }
      
      try {
        const response = await fetch(`${WP_API_URL}/wp/v2/tags/${id}`, {
          headers: { 'Accept': 'application/json' },
          next: { revalidate: Math.floor(CACHE_TTL.TAGS / 1000) }
        });
        
        if (!response.ok) return null;
        
        const tag = await response.json();
        const tagObj = {
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
          count: tag.count || 0
        };
        
        setCache(cacheKey, tagObj, CACHE_TTL.TAGS);
        return tagObj;
      } catch (err) {
        console.error(`Failed to fetch tag ${id}:`, err);
        return null;
      }
    });
    
    const tags = await Promise.all(tagPromises);
    return tags.filter(Boolean) as Tag[];
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return [];
  }
}

// Function to get all tags sorted by popularity (count)
export async function getAllTags(limit: number = 10): Promise<Tag[]> {
  try {
    const tags = await fetchAPI<Array<{ id: number; name: string; slug: string; count?: number }>>('tags', {
      orderby: 'count',
      order: 'desc',
      per_page: limit
    }, CACHE_TTL.TAGS);
    
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