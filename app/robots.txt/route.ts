import { headers } from 'next/headers'

export async function GET() {
  const headersList = await headers()
  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const host = headersList.get('host') || 'localhost:3000'
  const baseUrl = `${protocol}://${host}`

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /*.json$
Disallow: /*?*
Disallow: /actions/

# Allow Google to index everything
User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow Bing to index everything
User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow AI crawlers with specific permissions
User-agent: GPTBot
Allow: /
Allow: /services/nextjs-development*
Allow: /nextjs-development-indonesia
Allow: /blog
Disallow: /api/
Disallow: /_next/
Disallow: /static/

User-agent: ChatGPT-User
Allow: /
Allow: /services/nextjs-development*
Allow: /nextjs-development-indonesia
Allow: /blog
Disallow: /api/
Disallow: /_next/
Disallow: /static/

User-agent: Google-Extended
Allow: /
Allow: /services/nextjs-development*
Allow: /nextjs-development-indonesia
Allow: /blog
Disallow: /api/
Disallow: /_next/
Disallow: /static/

User-agent: CCBot
Allow: /
Allow: /services/nextjs-development*
Allow: /nextjs-development-indonesia
Allow: /blog
Disallow: /api/
Disallow: /_next/
Disallow: /static/

User-agent: anthropic-ai
Allow: /
Allow: /services/nextjs-development*
Allow: /nextjs-development-indonesia
Allow: /blog
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Crawl-delay
Crawl-delay: 1

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=43200, s-maxage=43200', // Cache for 12 hours
    },
  })
}
