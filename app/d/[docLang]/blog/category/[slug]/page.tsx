import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, BookOpen, Compass } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { PageHero } from '@/components/page/hero'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, decodeHtmlEntities, isIndonesianSlug, stripHtml } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'
import { blogCategoryCopy, blogCategoryPath } from '@/lib/topics'
import { getAllCategories, getPostsByCategory } from '@/lib/wordpress'
import { blurDataURLs } from '@/lib/utils'
import blogDefaultCover from '@/public/images/blog-default-cover.jpg'

export const revalidate = 604800 // 7 days; webhook refreshes archives on publish
export const dynamicParams = false

interface CategoryPageProps {
  params: Promise<{ docLang: string; slug: string }>
}

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories
    .filter((category) => blogCategoryCopy(category.slug))
    .map((category) => ({ docLang: 'en', slug: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const copy = blogCategoryCopy(slug)
  if (!copy) return {}

  return buildPageMetadata({
    title: copy.title,
    description: copy.description,
    path: blogCategoryPath(slug),
  })
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const copy = blogCategoryCopy(slug)
  if (!copy) notFound()

  const posts = await getPostsByCategory(slug)
  const path = blogCategoryPath(slug)

  const structuredData = buildPageGraph({
    path,
    name: copy.title,
    description: copy.description,
    type: 'CollectionPage',
    breadcrumbs: [
      { name: 'Blog', path: '/blog' },
      { name: copy.heading, path },
    ],
    items: posts.map((post) => ({ name: post.title.rendered, path: `/blog/${post.slug}` })),
  })

  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-[#525660]">
          <li>
            <Link href="/" className="hover:text-[#3A57FC] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="px-1.5 text-[#9CA3AF]">/</li>
          <li>
            <Link href="/blog" className="hover:text-[#3A57FC] transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true" className="px-1.5 text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]">{copy.heading}</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{
          icon: <BookOpen className="w-4 h-4" />,
          label: `${posts.length} ${posts.length === 1 ? 'post' : 'posts'}`,
        }}
        title={copy.heading}
        accent={copy.accent}
      >
        <p>{copy.intro}</p>
      </PageHero>

      {copy.hubPath && (
        <Link
          href={copy.hubPath}
          className="mb-12 flex items-center gap-4 rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF] p-5 hover:border-[#3A57FC] hover:shadow-[0_14px_34px_-18px_rgba(58,87,252,0.35)] transition-all group max-w-3xl mx-auto"
        >
          <span className="p-3 bg-[#3A57FC] text-white rounded-xl shrink-0">
            <Compass className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-display font-bold text-[#0B0C0E]">
              Start with the {copy.heading} guide
            </span>
            <span className="block text-sm text-[#4B5563]">
              A reading order, rules you can copy, and a cost estimate.
            </span>
          </span>
          <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-[#3A57FC] group-hover:text-[#FF8800] group-hover:translate-x-0.5 transition-all" />
        </Link>
      )}

      <div className="w-full h-px bg-[#E5E7EB] mb-12" />

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posts.map((post, index) => {
            const isIndo = isIndonesianSlug(post.slug)
            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
            const hasFeaturedImage = Boolean(featuredMedia?.source_url)
            const postCategories = post.categories.filter((c) => c && c.name && c.slug !== 'tech')
            const badgeCategory = postCategories[0]?.name ?? copy.heading

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.28)] overflow-hidden transition-all"
              >
                <article className="h-full flex flex-col">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E5E7EB] bg-[#0B0C0E]">
                    {hasFeaturedImage && featuredMedia ? (
                      <Image
                        src={featuredMedia.source_url}
                        alt={decodeHtmlEntities(stripHtml(featuredMedia.alt_text || post.title.rendered))}
                        fill
                        priority={index === 0}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        placeholder="blur"
                        blurDataURL={blurDataURLs.default}
                      />
                    ) : (
                      <>
                        <Image
                          src={blogDefaultCover}
                          alt={decodeHtmlEntities(stripHtml(post.title.rendered))}
                          fill
                          priority={index === 0}
                          placeholder="blur"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/80 via-[#0B0C0E]/15 to-transparent"
                        />
                        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B0C0E]/80 backdrop-blur-md border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                            {badgeCategory}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                            madebyaris
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#0B0C0E] text-white font-mono text-[10px] font-semibold uppercase tracking-wider">
                        {isIndo ? 'ID' : 'EN'}
                      </span>
                      {postCategories.slice(0, 2).map((category) => (
                        <span
                          key={category.id}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-md border border-[#DDE4FF] bg-[#F3F5FF] font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[#2944E0]"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>

                    <h2
                      className="font-display text-lg font-bold mb-2.5 line-clamp-2 text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors tracking-tight leading-snug"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div
                      className="text-sm text-[#4B5563] mb-6 line-clamp-2 leading-relaxed flex-grow"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    <div className="mt-auto pt-4 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B0C0E]">
                      <span className="group-hover:text-[#3A57FC] transition-colors">
                        Read article
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#3A57FC] group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-12 text-center mb-16">
          <p className="text-[#4B5563]">
            No posts here yet.{' '}
            <Link
              href="/blog"
              className="font-semibold text-[#3A57FC] underline underline-offset-4 hover:text-[#2944E0] transition-colors"
            >
              Browse the full blog
            </Link>
            .
          </p>
        </div>
      )}

      <CtaBand
        title="Rather have me do it?"
        body="Hire me to build it, or bring me in to coach your team on Cursor. I reply within 24 hours and tell you plainly whether I’m the right fit."
        primary={{ href: contactHref('nextjs'), label: 'Send me your project' }}
        secondary={{ href: '/services/vibe-code-friend', label: 'Get Cursor mentoring for your team' }}
      />
    </>
  )
}
