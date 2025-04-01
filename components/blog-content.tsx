"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
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
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative aspect-video">
                <NextImage
                  src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
                  alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {highlightSearchMatch(post.title.rendered)}
                </h2>
                <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
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
          </Card>
        ))}
      </div>
    </div>
  );
} 