import { isIndonesianSlug } from '@/lib/seo/metadata'

/** Request header set by `proxy.ts` so the root layout can set `<html lang>` without prop drilling. */
export const DOCUMENT_LANG_HEADER = 'x-mba-document-lang'

export type DocumentLang = 'en' | 'id'

export function documentLangFromPathname(pathname: string): DocumentLang {
  const match = pathname.match(/^\/blog\/([^/]+)\/?$/)
  if (match && isIndonesianSlug(match[1])) {
    return 'id'
  }
  return 'en'
}

export function parseDocumentLangHeader(value: string | null): DocumentLang {
  return value === 'id' ? 'id' : 'en'
}
