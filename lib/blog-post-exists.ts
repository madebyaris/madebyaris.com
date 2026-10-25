import { documentLangFromBlogSlug } from '@/lib/document-lang'

const BLOG_POST_PATH = /^\/blog\/([^/]+)\/?$/
const RESERVED_BLOG_SEGMENTS = new Set(['category', 'p', 'not-found'])

function normalizeWpApiUrl(input: string): string {
  const trimmed = input.trim().replace(/\/+$/, '')
  if (trimmed.endsWith('/wp-json')) return trimmed
  return `${trimmed}/wp-json`
}

/** Public `/blog/{slug}` post URLs (not category, pagination, or index). */
export function blogPostSlugFromPublicPath(pathname: string): string | null {
  const match = pathname.match(BLOG_POST_PATH)
  if (!match) return null
  const slug = match[1]
  if (RESERVED_BLOG_SEGMENTS.has(slug)) return null
  return slug
}

/** `false` when WordPress has no published post for the slug; `true` when it exists; `unknown` on API errors. */
export async function wpPublishedPostExists(slug: string): Promise<boolean | 'unknown'> {
  const raw = process.env.NEXT_PUBLIC_WP_API_URL
  if (!raw) return 'unknown'

  const apiBase = normalizeWpApiUrl(raw)
  try {
    const url = `${apiBase}/wp/v2/posts?slug=${encodeURIComponent(slug)}&status=publish&_fields=id`
    const res = await fetch(url, {
      next: { revalidate: 300, tags: ['wp-posts'] },
    })
    if (!res.ok) return 'unknown'
    const data: unknown = await res.json()
    return Array.isArray(data) && data.length > 0
  } catch {
    return 'unknown'
  }
}

export function internalBlogNotFoundPath(slug: string): string {
  const docLang = documentLangFromBlogSlug(slug)
  return `/d/${docLang}/blog/not-found`
}
