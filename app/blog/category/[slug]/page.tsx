import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, BookOpen, Compass } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { PageHero } from '@/components/page/hero'
import { CtaBand } from '@/components/page/cta-band'
import { RelatedPostCard } from '@/components/related-post-card'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'
import { blogCategories, blogCategoryCopy, blogCategoryPath } from '@/lib/topics'
import { getPostsByCategory } from '@/lib/wordpress'

export const revalidate = 604800 // 7 days; webhook refreshes archives on publish
export const dynamicParams = false

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogCategories.map((category) => ({ slug: category.slug }))
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
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li>
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true" className="px-2">/</li>
          <li>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
          </li>
          <li aria-hidden="true" className="px-2">/</li>
          <li className="text-zinc-900">{copy.heading}</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <BookOpen className="w-4 h-4 text-orange-500" />, label: `${posts.length} posts` }}
        title={copy.heading}
        accent={copy.accent}
      >
        <p>{copy.intro}</p>
      </PageHero>

      {copy.hubPath && (
        <Link
          href={copy.hubPath}
          className="mb-12 flex items-center gap-4 rounded-2xl bg-white/80 p-5 shadow-sm hover:shadow-md transition-all group max-w-3xl mx-auto"
        >
          <span className="p-3 bg-orange-50 rounded-xl">
            <Compass className="h-5 w-5 text-orange-500" />
          </span>
          <span>
            <span className="block font-semibold text-zinc-900">Start with the {copy.heading} guide</span>
            <span className="block text-sm text-zinc-500">A reading order, rules you can copy, and a cost estimate.</span>
          </span>
          <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
        </Link>
      )}

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-12 opacity-60" />

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posts.map((post) => (
            <RelatedPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-zinc-500 mb-16">
          No posts here yet. <Link href="/blog" className="underline underline-offset-4 hover:text-orange-500">Browse the full blog</Link>.
        </p>
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
