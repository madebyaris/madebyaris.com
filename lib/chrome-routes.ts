export type RouteChrome = 'cobalt' | 'obsidian' | 'light'

const OBSIDIAN_ROUTES = new Set([
  '/ai-implementation',
  '/jasa-implementasi-ai',
  '/product-engineering',
  '/jasa-pengembangan-produk',
])

const FULL_BLEED_COBALT_ROUTES = new Set([
  '/',
  '/about',
  '/services',
  '/projects',
  '/contact',
  '/blog',
  '/services/ai-search-geo-aeo',
  '/services/vibe-code-friend',
  '/guides/cursor',
])

const INNER_COBALT_HERO_ROUTES = new Set([
  '/cursor-ambassador',
  '/minimax-ambassador',
  '/minimax-ambassador/minimax-indonesia',
  '/spacexai-ambassador',
  '/privacy-policy',
  '/terms-of-service',
])

function normalizePathname(pathname: string | null): string {
  if (!pathname) return '/'
  // Strip internal /d/en or /d/id prefix if present in pathname
  const stripped = pathname.replace(/^\/d\/(en|id)(?=\/|$)/, '') || '/'
  return stripped.length > 1 && stripped.endsWith('/') ? stripped.slice(0, -1) : stripped
}

/**
 * Determines top header chrome for each route:
 * - 'obsidian': flagship enterprise AI & product engineering pages
 * - 'cobalt': homepage, core hubs, all level-2/3 service & specialist pages, guides, blog index/categories, ambassador & legal pages
 * - 'light': single blog articles (/blog/[slug]) and 404 pages
 */
export function getRouteChrome(pathname: string | null): RouteChrome {
  const path = normalizePathname(pathname)
  if (OBSIDIAN_ROUTES.has(path)) return 'obsidian'
  if (
    FULL_BLEED_COBALT_ROUTES.has(path) ||
    INNER_COBALT_HERO_ROUTES.has(path) ||
    path.startsWith('/services/') ||
    path.startsWith('/guides/') ||
    path.startsWith('/blog/p/') ||
    path.startsWith('/blog/category/')
  ) {
    return 'cobalt'
  }
  return 'light'
}

/**
 * True for pages whose entire body is composed of full-bleed <section> bands
 * (no SiteMain inner container wrapper).
 */
export function isFullBleedRoute(pathname: string | null): boolean {
  const path = normalizePathname(pathname)
  return (
    OBSIDIAN_ROUTES.has(path) ||
    FULL_BLEED_COBALT_ROUTES.has(path) ||
    path.startsWith('/blog/p/')
  )
}
