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

/** Map internal /d/{en|id}/… URLs to public paths for 308 redirects (never expose /d/ externally). */
export function publicPathFromInternalDocumentPath(pathname: string): string | null {
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
