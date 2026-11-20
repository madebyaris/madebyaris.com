import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, FileQuestion } from 'lucide-react'
import { notFoundMetadata } from '@/app/not-found-metadata'
import type { DocumentLang } from '@/lib/document-lang'
import { getPosts, type ProcessedPost } from '@/lib/wordpress'
import { NotFoundRunnerMount } from '@/components/not-found-runner-mount'
import { blurDataURLs } from '@/lib/utils'
import blogDefaultCover from '@/public/images/blog-default-cover.jpg'

const MAIN_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/guides/cursor', label: 'Cursor guide' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export async function generateStaticParams(): Promise<{ docLang: DocumentLang }[]> {
  return [{ docLang: 'en' }, { docLang: 'id' }]
}

export const metadata: Metadata = {
  ...notFoundMetadata,
  robots: { index: false, follow: true },
}

export default async function BlogNotFoundPage() {
  let recentPosts: ProcessedPost[] = []
  try {
    recentPosts = await getPosts({ per_page: 3 })
  } catch {
    recentPosts = []
  }

  return (
    <div className="py-6 md:py-12 max-w-3xl mx-auto">
      <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 sm:p-8 mb-10">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3A57FC] text-white shadow-[0_10px_24px_-10px_rgba(58,87,252,0.55)]">
            <FileQuestion className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <span className="inline-flex items-center gap-2 rounded-md bg-[#0B0C0E] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
              404 · Page not found
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#0B0C0E] tracking-tight">
              This page is not here
            </h1>
            <p className="mt-3 text-base text-[#4B5563] leading-relaxed">
              The link may be outdated or the URL might be mistyped. Try one of the main sections
              below, or read a recent post from the blog.
            </p>
          </div>
        </div>
      </div>

      <nav aria-label="Main sections" className="mb-10">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {MAIN_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#0B0C0E] hover:border-[#3A57FC] hover:bg-[#F3F5FF] hover:text-[#3A57FC] transition-colors group"
              >
                {label}
                <ArrowRight
                  className="h-4 w-4 text-[#6B7280] group-hover:text-[#FF8800] group-hover:translate-x-0.5 transition-all"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {recentPosts.length > 0 && (
        <section aria-labelledby="recent-posts-heading" className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2
              id="recent-posts-heading"
              className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight"
            >
              Recent from the blog
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#3A57FC] hover:text-[#FF8800] transition-colors"
            >
              Browse all posts
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <ul className="space-y-3">
            {recentPosts.map((post) => {
              const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
              const plainTitle = post.title.rendered.replace(/<[^>]*>/g, '')

              return (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-white p-3.5 hover:border-[#3A57FC] hover:shadow-[0_14px_32px_-20px_rgba(58,87,252,0.35)] transition-all group"
                  >
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#0B0C0E]">
                      {featuredMedia?.source_url ? (
                        <Image
                          src={featuredMedia.source_url}
                          alt={featuredMedia.alt_text || plainTitle}
                          fill
                          sizes="96px"
                          placeholder="blur"
                          blurDataURL={blurDataURLs.default}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <Image
                          src={blogDefaultCover}
                          alt={plainTitle}
                          fill
                          sizes="96px"
                          placeholder="blur"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span
                        className="font-display font-bold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors line-clamp-2 leading-snug"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <span className="mt-1 block font-mono text-[11px] text-[#6B7280]">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-[#3A57FC] group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      aria-hidden
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      <section
        aria-labelledby="not-found-runner-heading"
        className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-5 sm:p-6"
      >
        <h2
          id="not-found-runner-heading"
          className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#525660] mb-3"
        >
          While you are here
        </h2>
        <div className="min-h-[188px] w-full max-w-xl mx-auto">
          <NotFoundRunnerMount />
        </div>
      </section>
    </div>
  )
}
