'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NextImage } from '@/components/ui/next-image'
import { Post, Category } from '@/lib/types'

interface RelatedPostCardProps {
  post: Post
}

export function RelatedPostCard({ post }: RelatedPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="bg-white h-full flex flex-col hover:bg-zinc-50 transition-colors rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg">
        {post._embedded?.['wp:featuredmedia']?.[0] && (
          <div className="relative aspect-video overflow-hidden">
            <NextImage
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
              width={800}
              height={450}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              fallback="/images/placeholder.png"
              onError={(error) => {
                console.error('Related post image failed to load:', error)
              }}
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          {Array.isArray(post.categories) && post.categories.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {(post.categories as unknown as Category[]).slice(0, 2).map((category) => (
                <span
                  key={category.id}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#EEF2FF] text-[#3A57FC] text-xs font-medium border border-[#DDE4FF]"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          <h3
            className="text-lg font-semibold mb-2 line-clamp-2 text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors tracking-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div
            className="text-sm text-[#4B5563] mb-4 line-clamp-2 leading-relaxed flex-grow"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />

          <div className="mt-auto pt-4 border-t border-[#E5E7EB]">
            <span className="inline-flex items-center text-sm font-semibold text-[#3A57FC] group-hover:text-[#2944E0] transition-colors">
              Read Article
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
} 