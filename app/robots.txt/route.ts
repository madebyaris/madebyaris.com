import { productionUrl } from '@/lib/seo/config'

// Search engines and AI answer engines that we want crawling and citing the
// site. A crawler matched by a named group ignores the `*` group, so every
// group must repeat the full rule set.
const CRAWLERS = [
  'Googlebot',
  'Bingbot',
  'Applebot',
  'DuckDuckBot',
  'YandexBot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'DuckAssistBot',
  'Amazonbot',
  'meta-externalagent',
  'MistralAI-User',
  'cohere-ai',
  'CCBot',
  '*',
]

// `/_next/static` and `/_next/image` stay crawlable: Google and Bing render
// pages with them, and image search indexes `/_next/image` URLs.
const RULES = [
  'Allow: /',
  'Allow: /_next/static/',
  'Allow: /_next/image',
  'Disallow: /api/',
  'Disallow: /_next/data/',
  'Disallow: /*?_rsc=',
]

export function GET() {
  const groups = CRAWLERS.map((agent) => [`User-agent: ${agent}`, ...RULES].join('\n'))

  const robotsTxt = [
    '# https://www.robotstxt.org/robotstxt.html',
    ...groups,
    `# AI-readable site summary: ${productionUrl}/llms.txt`,
    `Sitemap: ${productionUrl}/sitemap.xml`,
    '',
  ].join('\n\n')

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
