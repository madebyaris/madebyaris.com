"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Search, ArrowUpRight } from 'lucide-react';
import { NextImage } from '@/components/ui/next-image';
import type { Post } from '@/lib/types';

// Helper function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

// Helper function to get reading time
function getReadingTime(content: string) {
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  return readingTime < 1 ? 1 : readingTime;
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
            className="w-full pl-11 pr-4 py-3 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all text-sm font-medium text-zinc-900 placeholder:text-zinc-400"
          />
        </div>
      </div>

      {/* Posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-200/60 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                {/* Featured Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <NextImage
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
                    alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                    width={800}
                    height={500}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full">
                      <ArrowUpRight className="w-4 h-4 text-zinc-900" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{getReadingTime(post.content.rendered)} min read</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 
                    className="text-lg font-semibold text-zinc-900 line-clamp-2 group-hover:text-orange-500 transition-colors tracking-tight"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  
                  {/* Excerpt */}
                  <p 
                    className="text-sm text-zinc-500 line-clamp-2 mt-2 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 100) + '...' }}
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">No articles found</h3>
          <p className="text-sm text-zinc-500">Try adjusting your search query</p>
        </div>
      )}
    </div>
  );
}
