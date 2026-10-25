import { getIndexNowKey } from '@/lib/indexnow'

export async function GET() {
  const key = getIndexNowKey()
  if (!key) {
    return new Response('Not Found', { status: 404 })
  }

  return new Response(key, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
