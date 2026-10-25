import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | MadeByAris',
  description: 'The page you are looking for does not exist or has been moved.',
  // Next injects a single noindex meta for notFound(); avoid duplicating via layout/page robots.
  robots: null,
}
