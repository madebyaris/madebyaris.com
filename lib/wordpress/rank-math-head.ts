import { decodeHtmlEntities } from '@/lib/seo/utils'

const WP_ORIGIN = 'https://wp.madebyaris.com'

export interface WpRankMathHeadFields {
  /** Rank Math SEO description as rendered in `<meta name="description">`. */
  seoDescription?: string
  /** Rank Math Facebook / Open Graph description (`rank_math_facebook_description`). */
  ogDescription?: string
}

function extractMetaContent(html: string, pattern: RegExp): string | undefined {
  const match = html.match(pattern)
  if (!match?.[1]) return undefined
  return decodeHtmlEntities(match[1].replace(/\s+/g, ' ').trim()) || undefined
}

/**
 * Public Rank Math head tags from the WordPress front-end URL (not wp-json).
 * Reads only SEO and OG descriptions; ignores robots and canonical on purpose.
 */
export async function fetchWpRankMathHead(slug: string): Promise<WpRankMathHeadFields> {
  try {
    const response = await fetch(`${WP_ORIGIN}/${slug}/`, {
      next: { revalidate: 604800 },
      headers: { Accept: 'text/html' },
    })
    if (!response.ok) return {}

    const html = (await response.text()).slice(0, 120_000)
    return {
      seoDescription: extractMetaContent(
        html,
        /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i,
      ),
      ogDescription: extractMetaContent(
        html,
        /<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i,
      ),
    }
  } catch (error) {
    console.error('Failed to fetch WordPress Rank Math head:', error)
    return {}
  }
}
