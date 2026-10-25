import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogListingView } from '@/components/blog-listing-view'
import {
  buildBlogListingMetadata,
  fetchBlogListingData,
  getBlogIndexTotalPages,
  parseBlogPageNumber,
} from '@/lib/blog-listing'
import { isDocumentLang } from '@/lib/document-lang'

export const revalidate = 604800 // 7 days; webhook refreshes the index on publish
export const dynamicParams = true

interface BlogPaginatedPageProps {
  params: Promise<{ docLang: string; page: string }>
}

export async function generateStaticParams() {
  const totalPages = await getBlogIndexTotalPages()
  const params: Array<{ docLang: 'en'; page: string }> = []

  for (let page = 2; page <= totalPages; page += 1) {
    params.push({ docLang: 'en', page: String(page) })
  }

  return params
}

export async function generateMetadata({ params }: BlogPaginatedPageProps): Promise<Metadata> {
  const { page: pageParam } = await params
  const currentPage = parseBlogPageNumber(pageParam)
  return buildBlogListingMetadata(currentPage)
}

export default async function BlogPaginatedPage({ params }: BlogPaginatedPageProps) {
  const { docLang, page: pageParam } = await params

  if (!isDocumentLang(docLang) || docLang !== 'en') {
    notFound()
  }

  const currentPage = parseBlogPageNumber(pageParam)
  if (currentPage <= 1) {
    notFound()
  }

  const { posts, totalPages } = await fetchBlogListingData(currentPage)

  return <BlogListingView posts={posts} currentPage={currentPage} totalPages={totalPages} />
}
