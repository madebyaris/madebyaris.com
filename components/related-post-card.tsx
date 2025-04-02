'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { NextImage } from '@/components/ui/next-image'
import { Post } from '@/lib/types'

interface RelatedPostCardProps {
  post: Post
}

export function RelatedPostCard({ post }: RelatedPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors duration-300 shadow-sm">
        {post._embedded?.['wp:featuredmedia']?.[0] && (
          <div className="relative aspect-video overflow-hidden">
            <NextImage
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
              width={800}
              height={450}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              fallback="/images/placeholder.png"
              onError={(error) => {
                console.error('Related post image failed to load:', error)
              }}
            />
          </div>
        )}
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</time>
          </div>
          
          <h3 
            className="text-base font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          
          <div className="mt-auto pt-2 text-sm font-medium text-primary flex items-center">
            Read Article <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  )
} 