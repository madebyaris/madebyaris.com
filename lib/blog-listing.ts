import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { buildPageMetadata } from '@/lib/seo'
import { BLOG_POSTS_PER_PAGE, getAllTags, getPostsPaginated } from '@/lib/wordpress'

const BLOG_TITLE = 'Next.js, Cursor & WordPress Blog'
const BLOG_DESCRIPTION =
  'Guides on Next.js, Cursor, headless WordPress, and AI features from 13+ years of client work: costs, workflows, migrations, and SEO that holds up.'

export function parseBlogPageNumber(pageParam?: string): number {
  if (!pageParam) return 1

  const parsedPage = Number.parseInt(pageParam, 10)
  if (!Number.isFinite(parsedPage)) return 1

  return parsedPage
}

export function getBlogCanonicalPath(currentPage: number): string {
  return currentPage <= 1 ? '/blog' : `/blog?page=${currentPage}`
}

export function getBlogTitle(currentPage: number): string {
  return currentPage > 1 ? `${BLOG_TITLE} (Page ${currentPage})` : BLOG_TITLE
}

export function getBlogMetaDescription(currentPage: number): string {
  if (currentPage <= 1) return BLOG_DESCRIPTION
  return `Next.js, Cursor and WordPress guides from 13+ years of client work. Page ${currentPage} of the blog lists older posts on costs, workflows, migrations and SEO.`
}

export function buildBlogListingMetadata(currentPage: number): Metadata {
  return buildPageMetadata({
    title: getBlogTitle(currentPage),
    description: getBlogMetaDescription(currentPage),
    path: getBlogCanonicalPath(currentPage),
    keywords: [
      'Next.js blog',
      'Next.js tutorials',
      'Cursor AI guides',
      'Cursor AI pricing',
      'headless WordPress with Next.js',
      'AI integration',
      'Next.js SEO',
      'Next.js App Router',
    ],
  })
}

export async function fetchBlogListingData(requestedPage: number) {
  if (requestedPage < 1) {
    redirect('/blog')
  }

  let posts: Awaited<ReturnType<typeof getPostsPaginated>>['data'] = []
  let totalPages = 0

  try {
    const [, paginatedPosts] = await Promise.all([
      getAllTags(6),
      getPostsPaginated({
        per_page: BLOG_POSTS_PER_PAGE,
        page: requestedPage,
      }),
    ])

    posts = paginatedPosts.data
    totalPages = paginatedPosts.totalPages
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }

  if (requestedPage > 1 && totalPages > 0 && requestedPage > totalPages) {
    redirect('/blog')
  }

  return { posts, totalPages, currentPage: requestedPage }
}

export async function getBlogIndexTotalPages(): Promise<number> {
  try {
    const { totalPages } = await getPostsPaginated({
      per_page: BLOG_POSTS_PER_PAGE,
      page: 1,
    })
    return totalPages
  } catch {
    return 1
  }
}

export { BLOG_DESCRIPTION, BLOG_TITLE }
