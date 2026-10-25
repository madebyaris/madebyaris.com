import Link from 'next/link'
import { ArrowRight, FileQuestion } from 'lucide-react'
import { getPosts, type ProcessedPost } from '@/lib/wordpress'

const MAIN_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

function plainTitle(post: ProcessedPost): string {
  return post.title.rendered.replace(/<[^>]*>/g, '')
}

export async function NotFoundPage() {
  let recentPosts: ProcessedPost[] = []
  try {
    recentPosts = await getPosts({ per_page: 3 })
  } catch {
    recentPosts = []
  }

  return (
    <div className="py-10 md:py-16 max-w-3xl mx-auto">
      <div className="flex items-start gap-4 mb-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
          <FileQuestion className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <p className="text-sm font-medium text-zinc-500 mb-1">404</p>
          <h1 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tight">
            This page is not here
          </h1>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            The link may be outdated or the URL might be mistyped. Try one of the main sections below,
            or read a recent post from the blog.
          </p>
        </div>
      </div>

      <nav aria-label="Main sections" className="mb-10">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {MAIN_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-medium text-zinc-800 shadow-sm hover:border-orange-200 hover:text-orange-600 transition-colors"
              >
                {label}
                <ArrowRight className="h-4 w-4 text-zinc-400" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {recentPosts.length > 0 && (
        <section aria-labelledby="recent-posts-heading">
          <h2 id="recent-posts-heading" className="text-lg font-medium text-zinc-900 mb-4">
            Recent from the blog
          </h2>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 shadow-sm hover:border-orange-200 transition-colors group"
                >
                  <span
                    className="font-medium text-zinc-900 group-hover:text-orange-600 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <span className="mt-1 block text-xs text-zinc-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-orange-600 hover:text-orange-500"
          >
            View all posts
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </section>
      )}
    </div>
  )
}
