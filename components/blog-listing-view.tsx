import { Suspense } from 'react'
import Link from 'next/link'
import { BlogContent } from '@/components/blog-content'
import { CtaBand } from '@/components/page/cta-band'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph } from '@/lib/seo'
import { blogCategories, blogCategoryPath } from '@/lib/topics'
import type { ProcessedPost } from '@/lib/wordpress'
import {
  BLOG_DESCRIPTION,
  getBlogCanonicalPath,
  getBlogTitle,
} from '@/lib/blog-listing'

interface BlogListingViewProps {
  posts: ProcessedPost[]
  currentPage: number
  totalPages: number
}

export function BlogListingView({ posts, currentPage, totalPages }: BlogListingViewProps) {
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

      {/* Full-bleed Electric Cobalt Hero (Ahrefs Blog-inspired) */}
      <section className="relative w-full overflow-hidden bg-[#3A57FC] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.22)_0%,transparent_70%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-2xl"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-12 md:pb-16">
          <div className="inline-flex items-center gap-2.5 rounded-md bg-[#0B0C0E] px-3.5 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              Engineering journal · Guides from production
            </span>
          </div>

          <h1 className="font-display leading-[1.03] text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white tracking-[-0.03em] mb-6 max-w-4xl">
            AI engineering, Cursor
            {' '}
            <span className="block text-white/85 mt-1">and full-stack guides</span>
          </h1>

          <p className="text-base sm:text-lg text-white/90 max-w-2xl mb-8 leading-relaxed">
            Field notes from 13+ years of shipping production software. Read how I wire AI agents
            and LLM features into existing apps, set up Cursor rules so AI-written code passes
            review, and ship fast Next.js, WordPress, and API stacks with clean SEO.
          </p>

          <nav aria-label="Blog topics" className="flex flex-wrap gap-2">
            <Link
              href="/guides/cursor"
              className="px-3.5 py-1.5 rounded-md bg-[#0B0C0E] border border-white/15 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#FF8800] hover:border-[#FF8800] transition-colors"
            >
              Cursor guide
            </Link>
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={blogCategoryPath(category.slug)}
                className="px-3.5 py-1.5 rounded-md border border-white/25 bg-white/12 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-white/22 hover:border-white/55 transition-colors"
              >
                {category.slug === 'ai' ? 'AI' : category.heading}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative z-10 bg-[#2944E0]/60 border-t border-white/15">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-4">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2.5 font-mono text-xs font-medium text-white/90">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                13+ years shipping
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                English &amp; Indonesian
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                Written from production code
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Directory Band */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-[360px] animate-pulse rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC]"
                  />
                ))}
              </div>
            }
          >
            <BlogContent initialPosts={posts} currentPage={currentPage} totalPages={totalPages} />
          </Suspense>
        </div>
      </section>

      {/* Full-bleed Slate Band + Electric Cobalt CTA */}
      <section className="w-full bg-[#F8FAFC] border-t border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Rather have me do it?"
            body="Hire me to build it, or bring me in to coach your team on Cursor. I reply within 24 hours and tell you plainly whether I'm the right fit."
            primary={{ href: contactHref('ai-implementation'), label: 'Send me your project' }}
            secondary={{ href: '/services/vibe-code-friend', label: 'Or get Cursor mentoring' }}
          />
        </div>
      </section>
    </>
  )
}
