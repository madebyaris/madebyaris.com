import { unstable_cache } from 'next/cache'
import { resolveSitemap } from 'next/dist/build/webpack/loaders/metadata/resolve-route-data'
import { getSitemapEntries } from '@/lib/seo/sitemap-entries'
import { WP_CACHE_TAGS } from '@/lib/wordpress'

// app/sitemap.ts is frozen at build time despite revalidate; use a route handler until
// https://github.com/vercel/next.js/issues/99055 is fixed (PR https://github.com/vercel/next.js/pull/99056).
// force-dynamic so the route is not baked into .next/server/app/sitemap.xml.body at build
// (metadata sitemap.ts bug: vercel/next.js#99055). ISR TTL lives on unstable_cache below.
export const dynamic = 'force-dynamic'

const SITEMAP_CACHE_TAGS = [
  WP_CACHE_TAGS.posts,
  WP_CACHE_TAGS.categories,
  WP_CACHE_TAGS.tags,
] as const

const getSitemapXml = unstable_cache(
  async () => {
    const entries = await getSitemapEntries()
    return resolveSitemap(entries)
  },
  ['sitemap-xml'],
  {
    revalidate: 604800,
    tags: [...SITEMAP_CACHE_TAGS],
  },
)

export async function GET() {
  const body = await getSitemapXml()

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
