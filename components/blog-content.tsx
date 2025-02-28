"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
  
  // Reset filters function
  const resetFilters = () => {
    setSearchQuery('');
  };
  
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
  }, [initialPosts, searchQuery]);
  
  // Highlight search matches in text
  const highlightSearchMatch = (text: string) => {
    if (!searchQuery || !text) return text;
    
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  };
  
  // Get filtered featured post and remaining posts
  const filteredFeaturedPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const filteredRemainingPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];
  
  return (
    <>
      {/* Search and Filters - simplified */}
      <div className="mb-6">
        {/* Search Bar only - full width */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="relative w-full">
            <input 
              type="search" 
              className="search-input block w-full px-8 pl-4 py-4 border border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <Button 
                  variant="ghost" 
                  className="h-9 px-4 text-sm"
                  onClick={resetFilters}
                >
                  Clear
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Results count */}
        {searchQuery && (
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-3 mb-4">
            <div className="text-sm font-medium">
              Found <span className="text-primary">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'} matching &quot;<span className="text-primary">{searchQuery}</span>&quot;
            </div>
          </div>
        )}
        
        {!searchQuery && (
          <div className="text-sm text-muted-foreground mb-4">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </div>
        )}
      </div>

      {/* Featured Post - conditionally show based on search */}
      {filteredFeaturedPost && !searchQuery && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <BookOpen className="mr-2 h-4 w-4 text-primary" />
            Featured Article
          </h2>
          
          <Link href={`/blog/${filteredFeaturedPost.slug}`} className="block group">
            <Card className="blog-card overflow-hidden border-border hover:border-primary/50 transition-colors duration-300 shadow-sm">
              <div className="grid md:grid-cols-[40%_60%] gap-4">
                {filteredFeaturedPost._embedded?.['wp:featuredmedia']?.[0] && (
                  <div className="featured-post-image relative aspect-[4/3] overflow-hidden rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg bg-black/5">
                    <Image
                      src={filteredFeaturedPost._embedded['wp:featuredmedia'][0].source_url}
                      alt={filteredFeaturedPost._embedded['wp:featuredmedia'][0].alt_text || ''}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                      priority
                      quality={95}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                    />
                  </div>
                )}
                
                <div className="p-4 md:p-5 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <time dateTime={filteredFeaturedPost.date} className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatDate(filteredFeaturedPost.date)}
                    </time>
                    <span className="flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {getReadingTime(filteredFeaturedPost.content.rendered)} min read
                    </span>
                  </div>
                  
                  <h3 
                    className="text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                    dangerouslySetInnerHTML={{ __html: highlightSearchMatch(filteredFeaturedPost.title.rendered) }}
                  />
                  
                  <div 
                    className="text-sm text-muted-foreground mb-3 line-clamp-2"
                    dangerouslySetInnerHTML={{ 
                      __html: highlightSearchMatch(filteredFeaturedPost.excerpt.rendered.replace(/<[^>]*>/g, '')) 
                    }}
                  />
                  
                  <div className="mt-auto pt-1">
                    <Button variant="ghost" size="sm" className="group/btn text-primary font-medium text-xs h-7 px-2">
                      Read Article 
                      <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </section>
      )}
      
      {/* All Posts - with different layout when searching */}
      <section>
        {!searchQuery && filteredRemainingPosts.length > 0 && (
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <BookOpen className="mr-2 h-4 w-4 text-primary" />
            Latest Articles
          </h2>
        )}
        
        {filteredPosts.length > 0 ? (
          <div className={`grid gap-4 ${searchQuery ? 'search-active' : 'sm:grid-cols-2 lg:grid-cols-3'} blog-grid`}>
            {(searchQuery ? filteredPosts : filteredRemainingPosts).map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <Card className={`blog-card h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors duration-300 shadow-sm ${searchQuery ? 'search-result' : ''}`}>
                  {post._embedded?.['wp:featuredmedia']?.[0] && (
                    <div className="featured-post-image relative aspect-[16/9] overflow-hidden bg-black/5">
                      <Image
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                        loading="lazy"
                        quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                      />
                    </div>
                  )}
                  
                  <div className="p-3 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <time dateTime={post.date} className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatDate(post.date)}
                      </time>
                      <span className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {getReadingTime(post.content.rendered)} min
                      </span>
                    </div>
                    
                    <h3 
                      className={`text-base font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors ${searchQuery ? 'text-primary' : ''}`}
                      dangerouslySetInnerHTML={{ __html: highlightSearchMatch(post.title.rendered) }}
                    />
                    
                    <div 
                      className="text-xs text-muted-foreground mb-2 line-clamp-2"
                      dangerouslySetInnerHTML={{ 
                        __html: highlightSearchMatch(post.excerpt.rendered.replace(/<[^>]*>/g, '')) 
                      }}
                    />
                    
                    <div className="mt-auto pt-1 text-xs font-medium text-primary flex items-center">
                      Read Article <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No articles found</h3>
            <p className="text-sm text-muted-foreground mb-4">
              No articles match your search. Try different keywords.
            </p>
            <Button onClick={resetFilters} size="sm">
              Clear Search
            </Button>
          </div>
        )}
      </section>
    </>
  );
} 