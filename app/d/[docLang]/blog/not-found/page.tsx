import type { Metadata } from 'next'
import { notFoundMetadata } from '@/app/not-found-metadata'
import type { DocumentLang } from '@/lib/document-lang'
export { NotFoundPage as default } from '@/components/not-found-page'

export async function generateStaticParams(): Promise<{ docLang: DocumentLang }[]> {
  return [{ docLang: 'en' }, { docLang: 'id' }]
}

export const metadata: Metadata = {
  ...notFoundMetadata,
  robots: { index: false, follow: true },
}
