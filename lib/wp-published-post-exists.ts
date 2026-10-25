import { WP_CACHE_TAGS } from '@/lib/wordpress'

const LOOKUP_TIMEOUT_MS = 1500
/** Short cache for proxy slug probes only (unknown slugs). */
export const PROXY_SLUG_LOOKUP_REVALIDATE_SECONDS = 300

function normalizeWpApiUrl(input: string): string {
  const trimmed = input.trim().replace(/\/+$/, '')
  if (trimmed.endsWith('/wp-json')) return trimmed
  return `${trimmed}/wp-json`
}

export type WpPublishedPostExistsResult = boolean | 'unknown'

/**
 * Whether WordPress has a published post for `slug`.
 * `unknown` = timeout, network error, or missing API URL — callers should fail open.
 */
export async function wpPublishedPostExists(slug: string): Promise<WpPublishedPostExistsResult> {
  const testMode = process.env.BLOG_PROXY_WP_LOOKUP_TEST
  if (testMode === 'timeout') {
    return 'unknown'
  }
  if (testMode === 'fail') {
    return 'unknown'
  }

  const raw = process.env.NEXT_PUBLIC_WP_API_URL
  if (!raw) {
    return 'unknown'
  }

  const apiBase = normalizeWpApiUrl(raw)
  const url = `${apiBase}/wp/v2/posts?slug=${encodeURIComponent(slug)}&status=publish&_fields=id`

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(LOOKUP_TIMEOUT_MS),
      next: {
        revalidate: PROXY_SLUG_LOOKUP_REVALIDATE_SECONDS,
        tags: [WP_CACHE_TAGS.posts],
      },
    })
    if (!res.ok) {
      return 'unknown'
    }
    const data: unknown = await res.json()
    return Array.isArray(data) && data.length > 0
  } catch {
    return 'unknown'
  }
}
