import { isIndonesianSlug } from '@/lib/seo/metadata'

export type DocumentLang = 'en' | 'id'

const DOCUMENT_LANGS: DocumentLang[] = ['en', 'id']

export function isDocumentLang(value: string): value is DocumentLang {
  return DOCUMENT_LANGS.includes(value as DocumentLang)
}

/** Internal path prefix for static `<html lang>` (public URLs stay unprefixed via proxy rewrite). */
export function documentLangFromBlogSlug(slug: string): DocumentLang {
  return isIndonesianSlug(slug) ? 'id' : 'en'
}

export function documentLangFromPathname(pathname: string): DocumentLang {
  const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/)
  if (blogMatch) {
    return documentLangFromBlogSlug(blogMatch[1])
  }
  return 'en'
}

export const INTERNAL_DOCUMENT_PREFIX = '/d'

/** Paths that must not be rewritten to /d/{lang}/… (metadata routes, APIs, static assets). */
export function shouldSkipDocumentLangProxy(pathname: string): boolean {
  if (pathname.startsWith('/api/') || pathname.startsWith('/_next/')) return true
  if (
    pathname === '/favicon.ico' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/feed.xml' ||
    pathname === '/llms.txt' ||
    pathname === '/llms-full.txt'
  ) {
    return true
  }
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return true
  if (/(^|\/)(opengraph-image|twitter-image|icon|apple-icon|manifest)(\.|$)/.test(pathname)) {
    return true
  }
  return false
}

/** Map internal /d/{en|id}/… URLs to public paths for 308 redirects (never expose /d/ externally). */
export function publicPathFromInternalDocumentPath(pathname: string): string | null {
  const paginatedBlogMatch = pathname.match(
    new RegExp(`^${INTERNAL_DOCUMENT_PREFIX}/en/blog/p/(\\d+)/?$`),
  )
  if (paginatedBlogMatch) {
    return `/blog?page=${paginatedBlogMatch[1]}`
  }

  const match = pathname.match(new RegExp(`^${INTERNAL_DOCUMENT_PREFIX}/(en|id)(?:/(.*))?$`))
  if (!match) return null
  const tail = match[2]
  if (!tail) return '/'
  return `/${tail}`
}

/** Rewrite public paths to /d/en/... or /d/id/blog/... (internal only; avoids [keyFile] clash). */
export function rewritePathnameWithDocumentLang(pathname: string): string {
  if (pathname.startsWith(`${INTERNAL_DOCUMENT_PREFIX}/`)) {
    return pathname
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/)
  if (blogMatch) {
    const docLang = documentLangFromBlogSlug(blogMatch[1])
    return `${INTERNAL_DOCUMENT_PREFIX}/${docLang}${pathname}`
  }

  if (pathname === '/') {
    return `${INTERNAL_DOCUMENT_PREFIX}/en`
  }

  return `${INTERNAL_DOCUMENT_PREFIX}/en${pathname}`
}
