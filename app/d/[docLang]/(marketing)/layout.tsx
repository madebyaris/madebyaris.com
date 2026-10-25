import type { Metadata } from 'next'
import { layoutRobotsMetadata } from '@/lib/seo/layout-robots-metadata'

/** Default robots for marketing pages; 404 and blog routes skip this layout. */
export const metadata: Metadata = {
  robots: layoutRobotsMetadata,
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}
