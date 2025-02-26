"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Post, Tag as TagType } from '@/lib/types';

// Categories for filtering
const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Next.js', slug: 'nextjs' },
  { name: 'React', slug: 'react' },
  { name: 'WordPress', slug: 'wordpress' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Performance', slug: 'performance' },
];

// Helper function to format date
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Helper function to get reading time
function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

interface BlogContentProps {
  initialPosts: Post[];
  popularTags?: TagType[];
}

export function BlogContent({ initialPosts, popularTags = [] }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTag, setActiveTag] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  
  // Debug: Log the first post to check its structure
  useEffect(() => {
    if (initialPosts.length > 0) {
      console.log('First post structure in component:', initialPosts[0]);
      console.log('Categories in component:', initialPosts[0].categories);
      console.log('Tags in component:', initialPosts[0].tags);
      console.log('Featured media in component:', initialPosts[0]._embedded?.['wp:featuredmedia']);
    }
    console.log('Popular tags in component:', popularTags);
  }, [initialPosts, popularTags]);
  
  // Filter posts based on search query, active category, and active tag
  useEffect(() => {
    let filtered = [...initialPosts];
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => {
        // Check if post has categories and if any category slug matches the active category
        if (post.categories && Array.isArray(post.categories) && post.categories.length > 0) {
          return post.categories.some(cat => 
            cat && typeof cat === 'object' && cat.slug && 
            cat.slug.toLowerCase().includes(activeCategory.toLowerCase())
          );
        }
        // If no categories or no match, check in content/title
        return (
          post.title.rendered.toLowerCase().includes(activeCategory.toLowerCase()) ||
          post.content.rendered.toLowerCase().includes(activeCategory.toLowerCase())
        );
      });
    }
    
    // Filter by tag
    if (activeTag) {
      filtered = filtered.filter(post => {
        // Check if post has tags and if any tag slug matches the active tag
        if (post.tags && Array.isArray(post.tags) && post.tags.length > 0) {
          return post.tags.some(tag => 
            tag && typeof tag === 'object' && tag.slug && 
            tag.slug.toLowerCase() === activeTag.toLowerCase()
          );
        }
        return false;
      });
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.rendered.toLowerCase().includes(query) ||
        post.excerpt.rendered.toLowerCase().includes(query) ||
        post.content.rendered.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchQuery, activeCategory, activeTag, initialPosts]);
  
  // Get filtered featured post and remaining posts
  const filteredFeaturedPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const filteredRemainingPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];
  
  // Reset filters
  const resetFilters = () => {
    setActiveCategory('all');
    setActiveTag('');
    setSearchQuery('');
  };
  
  return (
    <>
      {/* Search and Filters */}
      <div className="mb-12">
        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input 
              type="search" 
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-md bg-background focus:ring-primary focus:border-primary text-sm" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button 
                key={category.slug}
                variant={category.slug === activeCategory ? "default" : "outline"}
                size="sm"
                className="text-xs"
                onClick={() => {
                  setActiveCategory(category.slug);
                  setActiveTag(''); // Reset tag when category changes
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Popular Tags */}
        {popularTags.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-medium">Popular Tags:</h3>
              
              {activeTag && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 px-2 text-xs"
                  onClick={resetFilters}
                >
                  Clear filters
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <span 
                  key={tag.id}
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium cursor-pointer transition-colors ${
                    activeTag === tag.slug 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}
                  onClick={() => setActiveTag(tag.slug === activeTag ? '' : tag.slug)}
                >
                  {tag.name}
                  {tag.count > 0 && <span className="ml-1 text-xs opacity-70">({tag.count})</span>}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Active filters summary */}
        {(activeCategory !== 'all' || activeTag || searchQuery) && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>Filtering by:</span>
            {activeCategory !== 'all' && (
              <span className="bg-primary/10 px-2 py-0.5 rounded-full text-xs">
                Category: {categories.find(c => c.slug === activeCategory)?.name}
              </span>
            )}
            {activeTag && (
              <span className="bg-primary/10 px-2 py-0.5 rounded-full text-xs">
                Tag: {popularTags.find(t => t.slug === activeTag)?.name}
              </span>
            )}
            {searchQuery && (
              <span className="bg-primary/10 px-2 py-0.5 rounded-full text-xs">
                Search: &quot;{searchQuery}&quot;
              </span>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 px-2 text-xs"
              onClick={resetFilters}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      {/* Featured Post */}
      {filteredFeaturedPost && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Featured Article
          </h2>
          
          <Link href={`/blog/${filteredFeaturedPost.slug}`} className="block group">
            <Card className="overflow-hidden border-border hover:border-primary/50 transition-colors duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredFeaturedPost._embedded?.['wp:featuredmedia']?.[0] && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={filteredFeaturedPost._embedded['wp:featuredmedia'][0].source_url}
                      alt={filteredFeaturedPost._embedded['wp:featuredmedia'][0].alt_text || ''}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                )}
                
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <time dateTime={filteredFeaturedPost.date}>{formatDate(filteredFeaturedPost.date)}</time>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {getReadingTime(filteredFeaturedPost.content.rendered)} min read
                      </span>
                    </div>
                    
                    <h3 
                      className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                      dangerouslySetInnerHTML={{ __html: filteredFeaturedPost.title.rendered }}
                    />
                    
                    <div 
                      className="text-muted-foreground mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: filteredFeaturedPost.excerpt.rendered }}
                    />
                    
                    {/* Display tags if available */}
                    {filteredFeaturedPost.tags && Array.isArray(filteredFeaturedPost.tags) && filteredFeaturedPost.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Tag className="h-3 w-3 mr-1" /> Tags:
                        </span>
                        {filteredFeaturedPost.tags
                          .filter(tag => typeof tag === 'object' && tag.name)
                          .map(tag => {
                            if (typeof tag !== 'object') return null;
                            return (
                              <span 
                                key={tag.id} 
                                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveTag(tag.slug);
                                }}
                              >
                                {tag.name}
                              </span>
                            );
                          })
                        }
                      </div>
                    )}
                    
                    {/* Display categories if available */}
                    {filteredFeaturedPost.categories && Array.isArray(filteredFeaturedPost.categories) && filteredFeaturedPost.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Tag className="h-3 w-3 mr-1" /> Categories:
                        </span>
                        {filteredFeaturedPost.categories
                          .filter(cat => typeof cat === 'object' && cat.name)
                          .map(cat => {
                            if (typeof cat !== 'object') return null;
                            return (
                              <span 
                                key={cat.id} 
                                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveCategory(cat.slug);
                                }}
                              >
                                {cat.name}
                              </span>
                            );
                          })
                        }
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary font-medium">
                    Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </section>
      )}

      {/* Latest Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <BookOpen className="mr-2 h-5 w-5 text-primary" />
          {filteredPosts.length === 0 ? 'No Articles Found' : 'Latest Articles'}
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRemainingPosts.length > 0 ? (
            filteredRemainingPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="h-full flex flex-col border rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300 bg-background">
                  {post._embedded?.['wp:featuredmedia']?.[0] && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {getReadingTime(post.content.rendered)} min read
                      </span>
                    </div>
                    
                    <h3 
                      className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    
                    <div 
                      className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    
                    {/* Display tags if available */}
                    {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags
                          .filter(tag => typeof tag === 'object' && tag.name)
                          .slice(0, 3) // Show only first 3 tags
                          .map(tag => {
                            if (typeof tag !== 'object') return null;
                            return (
                              <span 
                                key={tag.id} 
                                className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary cursor-pointer"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveTag(tag.slug);
                                }}
                              >
                                {tag.name}
                              </span>
                            );
                          })
                        }
                      </div>
                    )}
                    
                    <div className="mt-auto pt-2 text-sm font-medium text-primary flex items-center">
                      Read Article <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            filteredPosts.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center rounded-lg border bg-background/50 p-8 text-center">
                <p className="text-lg font-medium">No articles found</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={resetFilters}
                >
                  Reset filters
                </Button>
              </div>
            )
          )}
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="mt-16">
        <Card className="p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to my newsletter to receive the latest articles, tutorials, and insights on web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md border border-border bg-background focus:ring-primary focus:border-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
} 