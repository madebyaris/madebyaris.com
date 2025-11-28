"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search } from 'lucide-react';
import type { Post, Category } from '@/lib/types';
import { blurDataURLs } from '@/lib/utils';

// Interface for posts with processed categories
interface ProcessedPost extends Omit<Post, 'categories' | 'tags'> {
  categories: Category[];
  tags: { id: number; name: string; slug: string }[];
}

interface BlogContentProps {
  initialPosts: Post[];
}

export function BlogContent({ initialPosts }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  
  // Filter posts based on search query
  useEffect(() => {
    let filtered = [...initialPosts];
    
    // Apply search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.rendered.toLowerCase().includes(searchLower) || 
        post.excerpt.rendered.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchQuery, initialPosts]);
  
  return (
    <div className="w-full">
      {/* Search section */}
      <div className="mb-10 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all text-sm font-medium text-zinc-900 placeholder:text-zinc-400"
          />
        </div>
      </div>

      {/* Posts grid - matching homepage style exactly */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
              <article className="bg-white h-full flex flex-col hover:bg-zinc-50 transition-colors rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg">
                {/* Featured Image */}
                {post._embedded?.['wp:featuredmedia']?.[0] && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
                      width={600}
                      height={400}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL={blurDataURLs.default}
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Categories/Tags */}
                  {Array.isArray(post.categories) && post.categories.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {(post.categories as unknown as Category[]).slice(0, 2).map((category) => (
                        <span
                          key={category.id}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium border border-zinc-200"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2
                    className="text-lg font-semibold mb-2 line-clamp-2 text-zinc-900 group-hover:text-orange-500 transition-colors tracking-tight"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  
                  {/* Excerpt */}
                  <div
                    className="text-sm text-zinc-500 mb-4 line-clamp-2 leading-relaxed flex-grow"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />

                  {/* Read More */}
                  <div className="mt-auto pt-4 border-t border-zinc-100">
                    <span className="inline-flex items-center text-sm font-medium text-zinc-900 group-hover:text-orange-500 transition-colors">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white/50 p-12 text-center">
          <p className="text-lg font-medium text-zinc-900">No articles found</p>
          <p className="mt-2 text-sm text-zinc-500">
            Try adjusting your search query.
          </p>
        </div>
      )}
    </div>
  );
}
