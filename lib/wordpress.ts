import { Post, Project, Category, Tag } from './types'

function normalizeWpApiUrl(input: string): string {
  const trimmed = input.trim().replace(/\/+$/, '')
  // Allow either:
  // - https://example.com
  // - https://example.com/wp-json
  // - https://example.com/wp-json/
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

// In-memory cache for WordPress API responses
const cache = new Map<string, { data: unknown; timestamp: number; ttl: number }>();

// Cache TTL in milliseconds
const CACHE_TTL = {
  POSTS: 5 * 60 * 1000, // 5 minutes
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
        'Cache-Control': `s-maxage=${Math.floor(ttl / 1000)}, stale-while-revalidate=${Math.floor(ttl / 1000)}`
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

async function getCategoriesByIds(categoryIds: number[]): Promise<Category[]> {
  if (!categoryIds || categoryIds.length === 0) return [];

  const uncachedIds: number[] = [];
  const results: (Category | null)[] = [];

  for (const id of categoryIds) {
    const cached = getFromCache<Category>(`category-${id}`);
    if (cached) {
      results.push(cached);
    } else {
      results.push(null);
      uncachedIds.push(id);
    }
  }

  if (uncachedIds.length > 0) {
    try {
      const WP_MAX_PER_PAGE = 100;
      const batches: number[][] = [];
      for (let i = 0; i < uncachedIds.length; i += WP_MAX_PER_PAGE) {
        batches.push(uncachedIds.slice(i, i + WP_MAX_PER_PAGE));
      }

      const batchResults = await Promise.all(batches.map(async (batch) => {
        const response = await fetch(
          `${WP_API_URL}/wp/v2/categories?include=${batch.join(',')}&per_page=${batch.length}`,
          {
            headers: { 'Accept': 'application/json' },
            next: { revalidate: Math.floor(CACHE_TTL.CATEGORIES / 1000) }
          }
        );
        if (!response.ok) return [];
        return response.json() as Promise<Array<{ id: number; name: string; slug: string }>>;
      }));

      const fetchedMap = new Map(
        batchResults.flat().map(c => [c.id, { id: c.id, name: c.name, slug: c.slug }])
      );

      for (const [idx, cat] of results.entries()) {
        if (cat === null) {
          const id = categoryIds[idx];
          const fresh = fetchedMap.get(id) ?? null;
          if (fresh) setCache(`category-${id}`, fresh, CACHE_TTL.CATEGORIES);
          results[idx] = fresh;
        }
      }
    } catch (error) {
      console.error('Failed to batch-fetch categories:', error);
    }
  }

  return results.filter((c): c is Category => c !== null);
}

async function getTagsByIds(tagIds: number[]): Promise<Tag[]> {
  if (!tagIds || tagIds.length === 0) return [];

  const uncachedIds: number[] = [];
  const results: (Tag | null)[] = [];

  for (const id of tagIds) {
    const cached = getFromCache<Tag>(`tag-${id}`);
    if (cached) {
      results.push(cached);
    } else {
      results.push(null);
      uncachedIds.push(id);
    }
  }

  if (uncachedIds.length > 0) {
    try {
      const WP_MAX_PER_PAGE = 100;
      const batches: number[][] = [];
      for (let i = 0; i < uncachedIds.length; i += WP_MAX_PER_PAGE) {
        batches.push(uncachedIds.slice(i, i + WP_MAX_PER_PAGE));
      }

      const batchResults = await Promise.all(batches.map(async (batch) => {
        const response = await fetch(
          `${WP_API_URL}/wp/v2/tags?include=${batch.join(',')}&per_page=${batch.length}`,
          {
            headers: { 'Accept': 'application/json' },
            next: { revalidate: Math.floor(CACHE_TTL.TAGS / 1000) }
          }
        );
        if (!response.ok) return [];
        return response.json() as Promise<Array<{ id: number; name: string; slug: string; count?: number }>>;
      }));

      const fetchedMap = new Map(
        batchResults.flat().map(t => [t.id, { id: t.id, name: t.name, slug: t.slug, count: t.count || 0 }])
      );

      for (const [idx, tag] of results.entries()) {
        if (tag === null) {
          const id = tagIds[idx];
          const fresh = fetchedMap.get(id) ?? null;
          if (fresh) setCache(`tag-${id}`, fresh, CACHE_TTL.TAGS);
          results[idx] = fresh;
        }
      }
    } catch (error) {
      console.error('Failed to batch-fetch tags:', error);
    }
  }

  return results.filter((t): t is Tag => t !== null);
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
    const queryParams: Record<string, string | number> = {
      _embed: 'wp:featuredmedia'
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

    const posts = await fetchAPI<Post[]>('posts', queryParams, CACHE_TTL.POSTS)
    
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
        const categoryIds = post.categories.filter((c): c is number => typeof c === 'number')
        processedPost.categories = await getCategoriesByIds(categoryIds);
      }
      
      // Fetch full tag objects if we have tag IDs
      if (post.tags && Array.isArray(post.tags) && post.tags.length > 0) {
        const tagIds = post.tags.filter((t): t is number => typeof t === 'number')
        processedPost.tags = await getTagsByIds(tagIds);
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