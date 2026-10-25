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

/** Public URL first segments that map to app/d/[docLang]/(marketing) or blog routes. */
const PUBLIC_DOCUMENT_ROOT_SEGMENTS = new Set([
  'about',
  'blog',
  'contact',
  'cursor-ambassador',
  'guides',
  'minimax-ambassador',
  'privacy-policy',
  'projects',
  'services',
  'spacexai-ambassador',
  'terms-of-service',
])

/** Whether a public pathname should rewrite into /d/{lang}/… (unknown top-level URLs stay public for global-not-found). */
export function shouldRewritePublicPathToDocumentLang(pathname: string): boolean {
  if (pathname === '/') return true
  const segment = pathname.split('/').filter(Boolean)[0]
  if (!segment) return true
  return PUBLIC_DOCUMENT_ROOT_SEGMENTS.has(segment)
}

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

/** Map internal /d/{en|id}/… URLs to public pathnames for 308 redirects (query handled separately). */
export function publicPathFromInternalDocumentPath(pathname: string): string | null {
  if (paginatedBlogPageFromInternalPath(pathname) !== null) {
    return null
  }

  const match = pathname.match(new RegExp(`^${INTERNAL_DOCUMENT_PREFIX}/(en|id)(?:/(.*))?$`))
  if (!match) return null
  const tail = match[2]
  if (!tail) return '/'
  return `/${tail}`
}

/** Page number when pathname is internal paginated blog listing (/d/en/blog/p/N). */
export function paginatedBlogPageFromInternalPath(pathname: string): string | null {
  const paginatedBlogMatch = pathname.match(
    new RegExp(`^${INTERNAL_DOCUMENT_PREFIX}/en/blog/p/(\\d+)/?$`),
  )
  return paginatedBlogMatch?.[1] ?? null
}

function mergeIncomingSearchParams(target: URL, incomingSearchParams?: URLSearchParams) {
  if (!incomingSearchParams) return

  incomingSearchParams.forEach((value, key) => {
    target.searchParams.set(key, value)
  })
}

/** Build the public redirect target for an internal /d/… URL (never encode ? inside pathname). */
export function publicRedirectUrlFromInternalPath(
  pathname: string,
  baseUrl: string,
  incomingSearchParams?: URLSearchParams,
): URL | null {
  const page = paginatedBlogPageFromInternalPath(pathname)
  if (page !== null) {
    const url = new URL(baseUrl)
    url.pathname = '/blog'
    url.search = ''
    url.searchParams.set('page', page)
    if (incomingSearchParams) {
      incomingSearchParams.forEach((value, key) => {
        if (key === 'page') return
        url.searchParams.set(key, value)
      })
    }
    return url
  }

  const publicPath = publicPathFromInternalDocumentPath(pathname)
  if (publicPath === null) return null

  const url = new URL(baseUrl)
  url.pathname = publicPath
  url.search = ''
  mergeIncomingSearchParams(url, incomingSearchParams)
  return url
}

/** Rewrite public paths to /d/en/... or /d/id/blog/... (internal only). Unknown top-level segments stay public for global-not-found. */
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

  if (!shouldRewritePublicPathToDocumentLang(pathname)) {
    return pathname
  }

  return `${INTERNAL_DOCUMENT_PREFIX}/en${pathname}`
}
