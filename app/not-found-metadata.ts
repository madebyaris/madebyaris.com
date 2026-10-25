import type { Metadata } from 'next'

export const notFoundMetadata: Metadata = {
  title: 'Page Not Found | MadeByAris',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: { index: false, follow: true },
}

/** @deprecated Use `notFoundMetadata`; segment files re-export as `metadata`. */
export const metadata = notFoundMetadata
