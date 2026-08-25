import { notFound } from 'next/navigation'
import { getIndexNowKey, isIndexNowKeyFile } from '@/lib/indexnow'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ keyFile: string }> }
) {
  const { keyFile } = await params
  const key = getIndexNowKey()

  if (!key || !keyFile.endsWith('.txt') || !isIndexNowKeyFile(keyFile)) {
    notFound()
  }

  return new Response(key, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
