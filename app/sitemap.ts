import type { MetadataRoute } from 'next'


export const dynamic = 'force-dynamic'

// Define types directly instead of importing
interface Post {
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  categories?: Array<{ id: number; name: string; slug: string }>;
  tags?: Array<{ id: number; name: string; slug: string; count?: number }>;
}

export const revalidate = 3600 // Revalidate hourly instead of daily

// Define route groups for better organization
const mainRoutes = [
  { path: '', priority: 1.0, changeFreq: 'monthly' },
  { path: 'about', priority: 0.8, changeFreq: 'monthly' },
  { path: 'blog', priority: 0.8, changeFreq: 'weekly' },
  { path: 'projects', priority: 0.8, changeFreq: 'weekly' },
  { path: 'contact', priority: 0.8, changeFreq: 'monthly' },
]

const serviceRoutes = [
  { path: 'services', priority: 0.9, changeFreq: 'weekly' },
  { path: 'services/nextjs-development', priority: 1.0, changeFreq: 'daily' },
  { path: 'services/nextjs-development/vercel', priority: 0.9, changeFreq: 'weekly' },
  { path: 'services/nextjs-development/nextjs-indonesia', priority: 1.0, changeFreq: 'daily' },
  { path: 'services/nextjs-development/nextjs-seo', priority: 0.9, changeFreq: 'weekly' },
  { path: 'services/nextjs-development/agency-indonesia', priority: 1.0, changeFreq: 'daily' },
  { path: 'nextjs-development-indonesia', priority: 1.0, changeFreq: 'daily' },
]

const wordpressRoutes = [
  { path: 'services/wordpress', priority: 0.8, changeFreq: 'monthly' },
  { path: 'services/wordpress/theme-development', priority: 0.7, changeFreq: 'monthly' },
  { path: 'services/wordpress/plugin-development', priority: 0.7, changeFreq: 'monthly' },
  { path: 'services/wordpress/headless-development', priority: 0.7, changeFreq: 'monthly' },
  { path: 'services/wordpress/optimization', priority: 0.7, changeFreq: 'monthly' },
]

const phpRoutes = [
  { path: 'services/php-development', priority: 0.8, changeFreq: 'monthly' },
]

const legalRoutes = [
  { path: 'privacy-policy', priority: 0.5, changeFreq: 'yearly' },
  { path: 'terms-of-service', priority: 0.5, changeFreq: 'yearly' },
]

// Helper function to create sitemap entries
function createSitemapEntry(baseUrl: string, route: { path: string; priority: number; changeFreq: string }) {
  return {
    url: `${baseUrl}/${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: route.priority,
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Create static route entries
  const staticRoutes = [
    ...mainRoutes,
    ...serviceRoutes,
    ...wordpressRoutes,
    ...phpRoutes,
    ...legalRoutes,
  ].map(route => createSitemapEntry(baseUrl, route))

  try {
    // Fetch dynamic content with direct fetch calls and proper revalidation
    const [postsResponse, projectsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?per_page=100`, {
        next: { revalidate: 3600 }
      }).catch(error => {
        console.error('Failed to fetch posts:', error)
        return new Response(JSON.stringify([]), { status: 200 })
      }),
      fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/project?per_page=100`, {
        next: { revalidate: 3600 }
      }).catch(error => {
        console.error('Failed to fetch projects:', error)
        return new Response(JSON.stringify([]), { status: 200 })
      }),
    ])

    if (!postsResponse.ok || !projectsResponse.ok) {
      throw new Error('Failed to fetch data for sitemap')
    }

    // Parse responses
    const posts = await postsResponse.json() as Post[]

    // Create dynamic route entries with proper date handling
    const postRoutes = posts.map((post: Post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

    // Combine all routes and sort by priority
    const allRoutes = [...staticRoutes, ...postRoutes]
    return allRoutes.sort((a, b) => (b.priority || 0) - (a.priority || 0))

  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    // Return static routes if dynamic content fails
    return staticRoutes
  }
}