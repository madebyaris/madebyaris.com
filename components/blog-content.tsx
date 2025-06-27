"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Search } from 'lucide-react';
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
  const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
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
  
  // Highlight search matches in text
  const highlightSearchMatch = (text: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };
  
  return (
    <div className="w-full">
      {/* Search and filter section */}
      <div className="mb-12 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wp-navy/60 dark:text-muted-foreground" size={20} />
          <input 
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wp-blue/50 focus:border-wp-blue transition-all duration-300 shadow-sm hover:shadow-md"
          />
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
        {filteredPosts.map((post) => (
          <div key={post.id} className="group relative">
            <div className="relative h-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-video">
                  <NextImage
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
                    alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                    width={800}
                    height={450}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 text-wp-navy dark:text-foreground group-hover:text-wp-blue dark:group-hover:text-wp-gold transition-colors duration-300">
                    {highlightSearchMatch(post.title.rendered)}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-wp-navy/60 dark:text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{getReadingTime(post.content.rendered)} min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
          </div>
          </div>
  );
} 