import type { MetadataRoute } from 'next'
import { getPostsForSitemap } from '@/lib/wordpress'
import { productionUrl } from '@/lib/seo/config'

export const revalidate = 604800 // 7 days; webhook calls revalidatePath('/sitemap.xml')

const mainRoutes = [
  { path: '', priority: 1.0, changeFreq: 'monthly' },
  { path: 'about', priority: 0.8, changeFreq: 'monthly' },
  { path: 'blog', priority: 0.8, changeFreq: 'weekly' },
  { path: 'projects', priority: 0.8, changeFreq: 'weekly' },
  { path: 'contact', priority: 0.8, changeFreq: 'monthly' },
  { path: 'cursor-ambassador', priority: 0.7, changeFreq: 'monthly' },
  { path: 'spacexai-ambassador', priority: 0.7, changeFreq: 'monthly' },
  { path: 'minimax-ambassador', priority: 0.7, changeFreq: 'monthly' },
  { path: 'minimax-ambassador/minimax-indonesia', priority: 0.7, changeFreq: 'monthly' },
]

const serviceRoutes = [
  { path: 'services', priority: 0.9, changeFreq: 'weekly' },
  { path: 'services/nextjs-development', priority: 1.0, changeFreq: 'daily' },
  { path: 'services/ai-development', priority: 0.9, changeFreq: 'weekly' },
  { path: 'services/vibe-code-friend', priority: 0.8, changeFreq: 'weekly' },
  { path: 'services/vibe-code-friend/ai-ide-tutoring', priority: 0.7, changeFreq: 'monthly' },
  { path: 'services/vibe-code-friend/code-fixing', priority: 0.7, changeFreq: 'monthly' },
  { path: 'services/nextjs-development/vercel', priority: 0.9, changeFreq: 'weekly' },
  { path: 'services/nextjs-development/nextjs-indonesia', priority: 1.0, changeFreq: 'daily' },
  { path: 'services/nextjs-development/nextjs-seo', priority: 0.9, changeFreq: 'weekly' },
  { path: 'services/nextjs-development/agency-indonesia', priority: 1.0, changeFreq: 'daily' },
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
  { path: 'services/php-development/api-development', priority: 0.6, changeFreq: 'monthly' },
  { path: 'services/php-development/custom-applications', priority: 0.6, changeFreq: 'monthly' },
  { path: 'services/php-development/database-solutions', priority: 0.6, changeFreq: 'monthly' },
  { path: 'services/php-development/modernization', priority: 0.6, changeFreq: 'monthly' },
]

const legalRoutes = [
  { path: 'privacy-policy', priority: 0.5, changeFreq: 'yearly' },
  { path: 'terms-of-service', priority: 0.5, changeFreq: 'yearly' },
]

// Static pages have no per-page edit date, so they omit lastmod rather than
// claim they changed on every sitemap fetch.
function createSitemapEntry(baseUrl: string, route: { path: string; priority: number; changeFreq: string }) {
  return {
    url: route.path ? `${baseUrl}/${route.path}` : baseUrl,
    changeFrequency: route.changeFreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: route.priority,
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = productionUrl

  const staticRoutes = [
    ...mainRoutes,
    ...serviceRoutes,
    ...wordpressRoutes,
    ...phpRoutes,
    ...legalRoutes,
  ].map(route => createSitemapEntry(baseUrl, route))

  try {
    const posts = await getPostsForSitemap()

    const postRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

    const allRoutes = [...staticRoutes, ...postRoutes]
    return allRoutes.sort((a, b) => (b.priority || 0) - (a.priority || 0))
  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    return staticRoutes
  }
}
