import { absoluteUrl, productionUrl } from '@/lib/seo/config'

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const INDEXNOW_HOST = new URL(productionUrl).host

export function getIndexNowKey(): string | undefined {
  const key = process.env.INDEXNOW_KEY?.trim()
  return key || undefined
}

export function isIndexNowKeyFile(keyFile: string): boolean {
  const key = getIndexNowKey()
  return Boolean(key && keyFile === `${key}.txt`)
}

export function revalidatedItemsToUrls(items: readonly string[]): string[] {
  const urls = items
    .filter((item) => !item.startsWith('tag:'))
    .map((path) => absoluteUrl(path))

  return [...new Set(urls)]
}

export type IndexNowResult = {
  ok: boolean
  status?: number
  submitted?: number
  error?: string
}

export async function notifyIndexNow(urlList: string[]): Promise<IndexNowResult> {
  const key = getIndexNowKey()
  if (!key) {
    return { ok: false, error: 'IndexNow not configured' }
  }

  if (urlList.length === 0) {
    return { ok: true, submitted: 0 }
  }

  const keyLocation = absoluteUrl(`/${key}.txt`)

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key,
        keyLocation,
        urlList,
      }),
    })

    if (response.ok || response.status === 202) {
      return { ok: true, status: response.status, submitted: urlList.length }
    }

    return {
      ok: false,
      status: response.status,
      error: 'IndexNow request failed',
    }
  } catch {
    return { ok: false, error: 'IndexNow request failed' }
  }
}
