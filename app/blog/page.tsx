import type { Metadata } from 'next'
import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { BlogContent } from '@/components/blog-content'
import { BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { BLOG_POSTS_PER_PAGE, getAllTags, getPostsPaginated } from '@/lib/wordpress'

export const revalidate = 604800 // 7 days; webhook refreshes the index on publish

const BLOG_TITLE = 'Next.js, Cursor & WordPress Blog'
const BLOG_DESCRIPTION =
  'Guides on Next.js, Cursor, headless WordPress, and AI features from 13+ years of client work: costs, workflows, migrations, and SEO that holds up.'

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>
}

function parseBlogPageParam(pageParam?: string): number {
  if (!pageParam) return 1

  const parsedPage = Number.parseInt(pageParam, 10)
  if (!Number.isFinite(parsedPage)) return 1

  return parsedPage
}

function getBlogCanonicalPath(currentPage: number): string {
  return currentPage <= 1 ? '/blog' : `/blog?page=${currentPage}`
}

function getBlogTitle(currentPage: number): string {
  return currentPage > 1 ? `${BLOG_TITLE} (Page ${currentPage})` : BLOG_TITLE
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const { page: pageParam } = await searchParams
  const currentPage = parseBlogPageParam(pageParam)
  const canonicalPath = getBlogCanonicalPath(currentPage)

  return buildPageMetadata({
    title: getBlogTitle(currentPage),
    description: BLOG_DESCRIPTION,
    path: canonicalPath,
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

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: pageParam } = await searchParams
  const requestedPage = parseBlogPageParam(pageParam)

  if (requestedPage < 1 || (pageParam === '1')) {
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

  const currentPage = requestedPage

  const structuredData = buildPageGraph({
    path: getBlogCanonicalPath(currentPage),
    name: getBlogTitle(currentPage),
    description: BLOG_DESCRIPTION,
    type: 'CollectionPage',
    breadcrumbs: [{ name: 'Blog', path: '/blog' }],
    items: posts.map((post) => ({ name: post.title.rendered, path: `/blog/${post.slug}` })),
  })

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="text-center pt-8 pb-16">
        <div
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
            '--border-radius-before': '9999px',
          }}
        >
          <BookOpen className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
            Guides from client work
          </span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Next.js, Cursor
          <span className="block gradient-text font-light">and WordPress guides</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          What I learn shipping client projects, written up so you can use it. Read how to set up
          Cursor so AI-written code passes review, when a WordPress site should move to Next.js,
          what a Next.js developer costs, and how to keep your SEO through a migration.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {['Next.js', 'Cursor', 'Headless WordPress', 'AI features'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 opacity-60" />

      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[350px] animate-pulse rounded-2xl bg-zinc-100" />
            ))}
          </div>
        }
      >
        <BlogContent
          initialPosts={posts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-16 opacity-60" />

      <section className="overflow-hidden min-h-[350px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[350px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Rather have me do it?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Hire me to build it, or bring me in to coach your team on Cursor. I reply within 24 hours
            and tell you plainly whether I&apos;m the right fit.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('nextjs')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send me your project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/vibe-code-friend"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Get Cursor mentoring for your team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
