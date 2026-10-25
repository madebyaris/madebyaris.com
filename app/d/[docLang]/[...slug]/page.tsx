import { notFound } from 'next/navigation'

/** Unmatched paths under /d/{lang}/… use docLang layout + not-found (proxy rewrites public 404s here). */
export default function UnmatchedDocumentPath() {
  notFound()
}
