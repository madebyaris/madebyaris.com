'use client'

import { usePathname } from 'next/navigation'
import { getRouteChrome, isFullBleedRoute } from '@/lib/chrome-routes'

/**
 * Layout wrapper coordinated with route header chrome:
 * - Full-bleed routes: edge-to-edge Cobalt or Obsidian sections throughout the page.
 * - Inner Cobalt-hero routes (level 2/3 services, specialist pages, guides, categories, ambassador, legal):
 *   seamless full-width Cobalt breadcrumb + PageHero breakout, followed by a unified 1200px body rail.
 * - Light routes (single blog articles & 404): clean 1200px white editorial reading rail.
 */
export function SiteMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (isFullBleedRoute(pathname)) {
    return (
      <main id="main-content" className="flex-1 w-full bg-white relative">
        {children}
      </main>
    )
  }

  if (getRouteChrome(pathname) === 'cobalt') {
    return (
      <main id="main-content" className="flex-1 w-full bg-white relative overflow-x-clip">
        <div className="cobalt-hero-rail max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pb-16 md:pb-24">
          {children}
        </div>
      </main>
    )
  }

  return (
    <main id="main-content" className="flex-1 w-full bg-white relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        {children}
      </div>
    </main>
  )
}
