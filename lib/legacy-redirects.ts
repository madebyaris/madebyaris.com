// Former URLs that still get search impressions and return 404.
// Sitemap entries for the six deleted posts are dropped in app/sitemap.ts.
// Destinations are the closest live page, so the redirect has somewhere real to land.
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/blog/my-experience-using-github-copilot-after-2-months': '/blog/cursor-ai-vs-copilot',
  '/blog/how-to-keep-your-privacy-safe-chapter-1': '/privacy-policy',
  '/blog/when-do-we-need-to-optimize-our-website-server': '/blog/how-to-pick-vps-for-wordpress',
  '/blog/when-we-need-to-optimize-website': '/services/wordpress/optimization',
  '/blog/how-to-optimize-your-website-using-ai': '/services/ai-development',
  '/blog/meet-my-new-ai-writer': '/about',
  '/blog/grok-bot': '/blog/ai-chatbot-development',
  '/blog/grok-bot-for-office-worker': '/blog/ai-chatbot-development',
  '/blog/mengenal-grok-bot': '/blog/ai-chatbot-development',
  '/services/nextjs-developer': '/services/nextjs-development',
  '/services/next-js-development': '/services/nextjs-development',
  '/services/next-js-development/agency-indonesia': '/services/nextjs-development/agency-indonesia',
}

export const LEGACY_SITEMAP_SLUGS = new Set(
  Object.keys(LEGACY_REDIRECTS)
    .filter((path) => path.startsWith('/blog/'))
    .map((path) => path.slice('/blog/'.length)),
)
