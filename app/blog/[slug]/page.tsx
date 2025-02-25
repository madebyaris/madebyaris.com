/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts } from '@/lib/wordpress'
import { transformWordPressContent } from '@/lib/utils'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.'
      }
    }

    const seo = post.rank_math_seo
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

    return {
      title: seo?.title || post.title.rendered,
      description: seo?.description || post.excerpt.rendered,
      openGraph: {
        images: [{ url: featuredImage || '/og.png' }],
      },
    }
  } catch (error) {
    return {
      title: 'Error',
      description: 'There was an error loading the blog post.'
    }
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getPosts({ per_page: 20 });
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    notFound()
  }

  const transformedContent = transformWordPressContent(post.content.rendered)

  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <article className="py-8 md:py-12 lg:py-24">
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

        {post._embedded?.['wp:featuredmedia']?.[0] && (
          <div className="relative my-8 overflow-hidden rounded-lg aspect-[16/9]">
            <Image
              src={post._embedded?.['wp:featuredmedia']?.[0].source_url}
              alt={post._embedded?.['wp:featuredmedia']?.[0].alt_text || ''}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 980px, 980px"
              className="object-cover"
              priority
              loading="eager"
              quality={90}
            />
          </div>
        )}

        <div
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: transformedContent }}
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
      </article>
    </div>
  )
}