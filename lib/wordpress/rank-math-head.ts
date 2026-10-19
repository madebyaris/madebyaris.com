import { decodeHtmlEntities } from '@/lib/seo/utils'

const WP_ORIGIN = 'https://wp.madebyaris.com'

/** Query string nginx uses to bypass its full-page cache (Rank Math head must be fresh). */
export const WP_RANK_MATH_HEAD_NOCACHE_QUERY = 'nocache=1'

export function wpRankMathHeadRequestUrl(slug: string): string {
  return `${WP_ORIGIN}/${encodeURIComponent(slug)}/?${WP_RANK_MATH_HEAD_NOCACHE_QUERY}`
}

export interface WpRankMathHeadFields {
  /** Rank Math SEO description as rendered in `<meta name="description">`. */
  seoDescription?: string
  /** Rank Math Facebook / Open Graph description (`rank_math_facebook_description`). */
  ogDescription?: string
}

export interface WpRankMathHeadCache {
  tags: readonly string[]
  revalidate: number
}

/** Parse attribute pairs from a single `<meta …>` tag (either attribute order). */
export function parseMetaTagAttributes(tag: string): Record<string, string> {
  const attrs: Record<string, string> = {}
  const re = /([a-zA-Z:_-]+)\s*=\s*(["'])([\s\S]*?)\2/g
  let match: RegExpExecArray | null
  while ((match = re.exec(tag))) {
    attrs[match[1].toLowerCase()] = match[3]
  }
  return attrs
}

export function extractMetaTagContent(
  html: string,
  spec: { name?: string; property?: string },
): string | undefined {
  const key = spec.name ? 'name' : 'property'
  const wanted = spec.name ?? spec.property
  if (!wanted) return undefined

  const tags = html.match(/<meta\s[^>]*>/gi) ?? []
  for (const tag of tags) {
    const attrs = parseMetaTagAttributes(tag)
    if (attrs[key]?.toLowerCase() !== wanted.toLowerCase()) continue
    const content = attrs.content?.replace(/\s+/g, ' ').trim()
    if (content) return decodeHtmlEntities(content)
  }
  return undefined
}

/**
 * Public Rank Math description tags from the WordPress front-end URL (not wp-json).
 * Does not read `<title>` or `og:title` (Rank Math "Capitalize Titles" distorts them).
 * Ignores robots and canonical on purpose.
 */
export async function fetchWpRankMathHead(
  slug: string,
  cache: WpRankMathHeadCache,
): Promise<WpRankMathHeadFields> {
  try {
    const response = await fetch(wpRankMathHeadRequestUrl(slug), {
      next: {
        tags: [...cache.tags],
        revalidate: cache.revalidate,
      },
      headers: { Accept: 'text/html' },
    })
    if (!response.ok) return {}

    const html = (await response.text()).slice(0, 120_000)
    return {
      seoDescription: extractMetaTagContent(html, { name: 'description' }),
      ogDescription: extractMetaTagContent(html, { property: 'og:description' }),
    }
  } catch (error) {
    console.error('Failed to fetch WordPress Rank Math head:', error)
    return {}
  }
}
