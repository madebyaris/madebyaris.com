/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/lib/wordpress'
import type { Post } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Blog - MadeByAris',
  description: 'Articles and insights about web development, design, and technology.',
  openGraph: {
    title: 'Blog - MadeByAris',
    description: 'Articles and insights about web development, design, and technology.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Blog - MadeByAris',
    description: 'Articles and insights about web development, design, and technology.',
  },
  alternates: {
    canonical: 'https://madebyaris.com/blog',
  },
}

export default async function BlogPage() {
  let posts: Post[] = []
  
  try {
    posts = await getPosts({ per_page: 12 })
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }

  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts, tutorials, and insights about web development.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]
              const seo = post.rank_math_seo

              return (
                <article
                  key={post.id}
                  className="group relative overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent"
                >
                  {featuredImage && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={featuredImage.source_url}
                        alt={featuredImage.alt_text || ''}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 className="mt-2 text-xl font-semibold group-hover:text-primary">
                      <Link href={`/blog/${post.slug}`}>
                        <span dangerouslySetInnerHTML={{ __html: post.rank_math_title || post.title.rendered }} />
                      </Link>
                    </h2>
                    <div
                      className="mt-2 text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ 
                        __html: post.rank_math_description || post.excerpt.rendered 
                      }}
                    />
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="mt-8 flex min-h-[400px] items-center justify-center rounded-lg border bg-background/50 p-8 text-center">
            <div className="max-w-[500px] space-y-4">
              <h2 className="text-xl font-semibold">No Blog Posts Yet</h2>
              <p className="text-muted-foreground">
                Blog posts will be added soon. Check back later!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
