import { buildLlmsFullTxt } from '@/lib/seo'
import { getPostsWithContent } from '@/lib/wordpress'

export const revalidate = 604800 // 7 days; webhook revalidates on publish

export async function GET() {
  const posts = await getPostsWithContent()

  return new Response(buildLlmsFullTxt(posts), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
