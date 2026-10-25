export { metadata } from '../../../../not-found-metadata'
import { getPosts, type ProcessedPost } from '@/lib/wordpress'
import { NotFoundPageContent } from '@/components/not-found-page'

export default async function BlogPostNotFound() {
  let recentPosts: ProcessedPost[] = []
  try {
    recentPosts = await getPosts({ per_page: 3 })
  } catch {
    recentPosts = []
  }

  return <NotFoundPageContent recentPosts={recentPosts} runner="interactive" />
}
