/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost } from '@/lib/wordpress'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  try {
    const post = await getPost(params.slug)
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.'
      }
    }

    const seo = post.rank_math_seo
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

    if (seo) {
      return {
        title: seo.title || post.title.rendered,
        description: seo.description || post.excerpt.rendered,
        openGraph: {
          images: [
            {
              url: featuredImage || '/og.png',
            },
          ],
        },
      }
    }

    return {
      title: post.title.rendered,
      description: post.excerpt.rendered,
      openGraph: {
        images: [
          {
            url: featuredImage || '/og.png',
          },
        ],
      },
    }
  } catch (error) {
    return {
      title: 'Error',
      description: 'There was an error loading the blog post.'
    }
  }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  try {
    const post = await getPost(params.slug)

    if (!post) {
      notFound()
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]

    return (
      <article className="container">
        <div className="mx-auto max-w-[780px] py-8 md:py-12 lg:py-24">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to Blog
          </Link>

          <div className="space-y-4">
            <h1
              className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>By Aris</span>
            </div>
          </div>

          {featuredImage && (
            <div className="my-8 overflow-hidden rounded-lg">
              <Image
                src={featuredImage.source_url}
                alt={featuredImage.alt_text || ''}
                width={1200}
                height={630}
                className="w-full"
                priority
              />
            </div>
          )}

          <div
            className="prose prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          <div className="mt-8 flex justify-between border-t pt-8">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm text-primary hover:text-primary/80"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </article>
    )
  } catch (error) {
    notFound()
  }
}