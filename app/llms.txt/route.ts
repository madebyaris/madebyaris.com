import { buildLlmsTxt } from '@/lib/seo'
import { getPostsForLlms } from '@/lib/wordpress'

export const revalidate = 604800 // 7 days; webhook revalidates on publish

export async function GET() {
  const posts = await getPostsForLlms()

  return new Response(buildLlmsTxt(posts), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
