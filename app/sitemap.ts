import { getPosts, getProjects } from '@/lib/wordpress'
import type { MetadataRoute } from 'next'

export const revalidate = 86400 // Revalidate daily

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
    // Fetch dynamic content with error handling and timeouts
    const [posts, projects] = await Promise.all([
      getPosts({ per_page: 100 }).catch(error => {
        console.error('Failed to fetch posts:', error)
        return []
      }),
      getProjects({ per_page: 100 }).catch(error => {
        console.error('Failed to fetch projects:', error)
        return []
      }),
    ])

    // Create dynamic route entries with proper date handling
    const postRoutes = posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    const projectRoutes = projects.map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.modified || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    // Combine all routes and sort by priority
    const allRoutes = [...staticRoutes, ...postRoutes, ...projectRoutes]
    return allRoutes.sort((a, b) => (b.priority || 0) - (a.priority || 0))

  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    // Return static routes if dynamic content fails
    return staticRoutes
  }
}