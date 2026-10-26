/**
 * Stable lastmod for App Router pages in sitemap.xml (not build time).
 * Each date is the author date of the latest git commit touching that route's page file.
 */
export const SITEMAP_STATIC_LASTMOD: Readonly<Record<string, string>> = {
  '': '2026-10-14T16:29:34+07:00',
  about: '2026-10-14T16:29:34+07:00',
  blog: '2026-10-14T16:29:34+07:00',
  'blog/category/ai': '2026-10-14T16:29:34+07:00',
  'blog/category/cursor': '2026-10-14T16:29:34+07:00',
  'blog/category/nextjs': '2026-10-14T16:29:34+07:00',
  'blog/category/wordpress': '2026-10-14T16:29:34+07:00',
  contact: '2026-10-14T16:29:34+07:00',
  'cursor-ambassador': '2026-10-14T16:29:34+07:00',
  'guides/cursor': '2026-10-14T16:29:34+07:00',
  'minimax-ambassador': '2026-10-14T16:29:34+07:00',
  'minimax-ambassador/minimax-indonesia': '2026-10-14T16:29:34+07:00',
  'privacy-policy': '2026-10-14T16:29:34+07:00',
  projects: '2025-03-12T10:55:55+07:00',
  services: '2026-10-14T16:29:34+07:00',
  'services/ai-development': '2026-10-14T16:29:34+07:00',
  'services/ai-development/ai-integration': '2026-10-14T16:29:34+07:00',
  'services/ai-development/ai-mvp': '2026-10-14T16:29:34+07:00',
  'services/nextjs-development': '2026-10-14T16:29:34+07:00',
  'services/nextjs-development/agency-indonesia': '2026-10-14T16:29:34+07:00',
  'services/nextjs-development/nextjs-indonesia': '2026-10-14T16:29:34+07:00',
  'services/nextjs-development/nextjs-seo': '2026-10-14T16:29:34+07:00',
  'services/nextjs-development/vercel': '2026-10-14T16:29:34+07:00',
  'services/php-development': '2026-10-14T16:29:34+07:00',
  'services/php-development/api-development': '2026-10-14T16:29:34+07:00',
  'services/php-development/custom-applications': '2026-10-14T16:29:34+07:00',
  'services/php-development/database-solutions': '2026-10-14T16:29:34+07:00',
  'services/php-development/modernization': '2026-10-14T16:29:34+07:00',
  'services/saas-development': '2026-10-14T16:29:34+07:00',
  'services/saas-development/jasa-pembuatan-aplikasi-web': '2026-10-14T16:29:34+07:00',
  'services/seo': '2026-10-14T16:29:34+07:00',
  'services/seo/jasa-seo': '2026-10-14T16:29:34+07:00',
  'services/vibe-code-friend': '2026-10-14T16:29:34+07:00',
  'services/vibe-code-friend/ai-ide-tutoring': '2026-10-14T16:29:34+07:00',
  'services/vibe-code-friend/code-fixing': '2026-10-14T16:29:34+07:00',
  'services/wordpress': '2026-10-14T16:29:34+07:00',
  'services/wordpress/headless-development': '2026-10-14T16:29:34+07:00',
  'services/wordpress/jasa-wordpress': '2026-10-14T16:29:34+07:00',
  'services/wordpress/jasa-woocommerce': '2026-10-26T03:00:00Z',
  'services/wordpress/maintenance': '2026-10-14T16:29:34+07:00',
  'services/wordpress/migration': '2026-10-14T16:29:34+07:00',
  'services/wordpress/optimization': '2026-10-14T16:29:34+07:00',
  'services/wordpress/plugin-development': '2026-10-14T16:29:34+07:00',
  'services/wordpress/redesign': '2026-10-14T16:29:34+07:00',
  'services/wordpress/theme-development': '2026-10-14T16:29:34+07:00',
  'services/wordpress/woocommerce': '2026-10-14T16:29:34+07:00',
  'spacexai-ambassador': '2026-10-14T16:29:34+07:00',
  'terms-of-service': '2026-10-14T16:29:34+07:00',
}

export function staticRouteLastModified(path: string): Date | undefined {
  const iso = SITEMAP_STATIC_LASTMOD[path]
  if (!iso) return undefined
  const parsed = new Date(iso)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed
}

/** WordPress `modified_gmt` is UTC without a Z suffix. */
export function wpModifiedGmtToDate(modifiedGmt: string): Date {
  return new Date(`${modifiedGmt.replace(/\.\d+$/, '')}Z`)
}
