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

const INTERNAL_PREFIX = '/d'

/** Rewrite public paths to /d/en/... or /d/id/blog/... (internal only; avoids [keyFile] clash). */
export function rewritePathnameWithDocumentLang(pathname: string): string {
  if (pathname.startsWith(`${INTERNAL_PREFIX}/`)) {
    return pathname
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/)
  if (blogMatch) {
    const docLang = documentLangFromBlogSlug(blogMatch[1])
    return `${INTERNAL_PREFIX}/${docLang}${pathname}`
  }

  if (pathname === '/') {
    return `${INTERNAL_PREFIX}/en`
  }

  return `${INTERNAL_PREFIX}/en${pathname}`
}
