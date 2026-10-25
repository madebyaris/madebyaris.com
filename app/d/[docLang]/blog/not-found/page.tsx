import type { Metadata } from 'next'
import { notFoundMetadata } from '@/app/not-found-metadata'
export { NotFoundPage as default } from '@/components/not-found-page'

export const metadata: Metadata = {
  ...notFoundMetadata,
  robots: { index: false, follow: true },
}
