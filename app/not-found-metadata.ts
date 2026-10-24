import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | MadeByAris',
  description: 'The page you are looking for does not exist or has been moved.',
  // Clear root layout index/follow; 404 uses Next's single injected `noindex` meta (NonIndex / notFound).
  robots: null,
}
