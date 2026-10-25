import { documentLangFromBlogSlug } from '@/lib/document-lang'

const BLOG_POST_PATH = /^\/blog\/([^/]+)\/?$/
const RESERVED_BLOG_SEGMENTS = new Set(['category', 'p', 'not-found'])

/** Public `/blog/{slug}` post URLs (not category, pagination, or index). */
export function blogPostSlugFromPublicPath(pathname: string): string | null {
  const match = pathname.match(BLOG_POST_PATH)
  if (!match) return null
  const slug = match[1]
  if (RESERVED_BLOG_SEGMENTS.has(slug)) return null
  return slug
}

export function internalBlogNotFoundPath(slug: string): string {
  const docLang = documentLangFromBlogSlug(slug)
  return `/d/${docLang}/blog/not-found`
}
