import type { Metadata } from 'next'
import { BlogListingView } from '@/components/blog-listing-view'
import { buildBlogListingMetadata, fetchBlogListingData } from '@/lib/blog-listing'

export const revalidate = 604800 // 7 days; webhook refreshes the index on publish

export async function generateStaticParams() {
  return [{ docLang: 'en' }]
}

export function generateMetadata(): Metadata {
  return buildBlogListingMetadata(1)
}

export default async function BlogPage() {
  const { posts, totalPages, currentPage } = await fetchBlogListingData(1)

  return <BlogListingView posts={posts} currentPage={currentPage} totalPages={totalPages} />
}
