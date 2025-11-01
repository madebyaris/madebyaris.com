/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Share2, Tag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Suspense } from 'react'
import { TableOfContents } from '@/components/table-of-contents'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Post, Tag as TagType } from '@/lib/types'
import { WordPressContent } from '@/components/wordpress-content'
import { NextImage } from '@/components/ui/next-image'
import { convertBlocks } from 'wp-block-to-html/core'
import { FeaturedImage } from '@/components/featured-image'
import { AuthorImage } from '@/components/author-image'
import { RelatedPostCard } from '@/components/related-post-card'

export const revalidate = 3600 // Revalidate every hour

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const postResponse = await fetch(
      `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?slug=${slug}&_embed=wp:featuredmedia`,
      { next: { revalidate: 3600 } }
    );

    if (!postResponse.ok) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.'
      }
    }

    const posts = await postResponse.json();
    const post = posts[0];
    
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
      description: seo?.description || post.excerpt.rendered.replace(/<[^>]*>/g, ''),
      openGraph: {
        title: seo?.title || post.title.rendered,
        description: seo?.description || post.excerpt.rendered.replace(/<[^>]*>/g, ''),
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.modified,
        authors: ['https://madebyaris.com'],
        images: [{ url: featuredImage || '/og.png' }],
      },
      twitter: {
        card: 'summary_large_image',
        title: seo?.title || post.title.rendered,
        description: seo?.description || post.excerpt.rendered.replace(/<[^>]*>/g, ''),
        images: [featuredImage || '/og.png'],
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
    const postsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?per_page=1`,
      { next: { revalidate: 3600 } }
    );

    if (!postsResponse.ok) {
      console.error('Error fetching posts:', postsResponse.statusText);
      return [];
    }

    const posts = await postsResponse.json();
    return posts.map((post: Post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Helper function to format date
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Helper function to get reading time
function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

interface Heading {
  level: number;
  text: string;
  id: string;
}

// Function to extract headings for table of contents
function extractHeadings(content: string): Heading[] {
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
  const headings: Heading[] = [];
  let match;
  
  try {
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, '');
      // Create a consistent ID that will match what we use in addIdsToHeadings
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      
      headings.push({
        level,
        text,
        id,
      });
    }
  } catch (error) {
    console.error('Error extracting headings:', error);
  }
  
  return headings;
}

// Function to add IDs to headings in content
function addIdsToHeadings(content: string) {
  try {
    return content.replace(
      /<h([2-3])([^>]*)>(.*?)<\/h\1>/g,
      (match, level, attrs, text) => {
        // Extract text without HTML tags for the ID
        const plainText = text.replace(/<[^>]*>/g, '');
        const id = plainText.toLowerCase().replace(/[^\w]+/g, '-');
        
        // Check if there's already an id attribute
        if (attrs.includes('id=')) {
          return match; // Keep existing ID
        }
        
        return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
      }
    );
  } catch (error) {
    console.error('Error adding IDs to headings:', error);
    return content;
  }
}

// Function to transform WordPress images to use NextImage
function transformTheImage(content: string): string {
  // Replace WordPress image markup with Next.js Image component
  return content.replace(
    /<img([^>]*?)src="([^"]*?)"([^>]*?)>/g,
    (match, before, src, after) => {
      // Extract attributes
      const width = before.match(/width="(\d+)"/)?.[1] || '800';
      const height = before.match(/height="(\d+)"/)?.[1] || '600';
      const alt = before.match(/alt="([^"]*)"/)?.[1] || '';
      const classMatch = before.match(/class="([^"]*)"/)?.[1] || '';
      
      // Calculate aspect ratio
      const aspectRatio = (parseInt(height) / parseInt(width)) * 100;
      
      return `
        <div class="img-container relative my-8" style="padding-bottom: ${aspectRatio}%; position: relative; overflow: hidden;">
          <NextImage
            src="${src}"
            alt="${alt}"
            width="${width}"
            height="${height}"
            className="absolute inset-0 w-full h-full object-cover rounded-lg ${classMatch}"
            loading="lazy"
            decoding="async"
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
      `.trim();
    }
  );
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  
  try {
    // Fetch post data directly from WordPress API
    const postResponse = await fetch(
      `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?slug=${slug}&_embed=wp:featuredmedia&_fields=id,date,modified,slug,status,type,link,title,content,excerpt,author,featured_media,categories,tags,blocks`,
      { next: { revalidate: 3600 } }
    );

    if (!postResponse.ok) {
      notFound();
    }

    const posts = await postResponse.json();
    const post = posts[0];

    if (!post) {
      notFound();
    }

    // Fetch featured media data if available
    let featuredImageUrl = '';
    if (post.featured_media) {
      const mediaResponse = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/media/${post.featured_media}`,
        { next: { revalidate: 3600 } }
      );
      
      if (mediaResponse.ok) {
        const mediaData = await mediaResponse.json();
        featuredImageUrl = mediaData.source_url;
      }
    }

    // Get related posts (for now, just get recent posts)
    const relatedPostsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?per_page=6&_embed=wp:featuredmedia`,
      { next: { revalidate: 3600 } }
    );

    if (!relatedPostsResponse.ok) {
      throw new Error('Failed to fetch related posts');
    }

    const allPosts = await relatedPostsResponse.json();
    const relatedPosts = allPosts
      .filter((p: Post) => p.id !== post.id)
      .slice(0, 3);

    // Extract headings for table of contents and transform content on the server
    let headings: Heading[] = [];
    let transformedContent = '';
    
    try {
      // First, process content with wp-block-to-html if available
      if (post.content) {
        // Process blocks with wp-block-to-html
        transformedContent = convertBlocks(post.content, {
          cssFramework: 'tailwind',
          contentHandling: 'hybrid',
          ssrOptions: {
            enabled: true,
            lazyLoadMedia: true,
            preconnect: true,
            criticalPathOnly: true,
            removeDuplicateStyles: true
          }
        }) as string;
        // transform the content to use the NextImage component
      } else {
        // Use rendered content if blocks not available
        transformedContent = post.content.rendered;
      }
      
      // Add IDs to the transformed content
      const contentWithIds = addIdsToHeadings(transformedContent);
      
      // Extract headings for table of contents
      headings = extractHeadings(contentWithIds);
      
      // Save the processed content with IDs
      transformedContent = contentWithIds;
    } catch (error) {
      console.error('Error processing content:', error);
      // Fallback to rendered content with IDs
      transformedContent = addIdsToHeadings(post.content.rendered);
      headings = extractHeadings(transformedContent);
    }

    // Calculate reading time
    const readingTime = getReadingTime(transformedContent);

    // Structured data for the article
    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title.rendered,
      "description": post.excerpt.rendered.replace(/<[^>]*>/g, ''),
      "image": post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://madebyaris.com/og.png",
      "author": {
        "@type": "Person",
        "@id": "https://madebyaris.com/#person",
        "name": "Aris Setiawan",
        "url": "https://madebyaris.com",
        "image": "https://madebyaris.com/aris.png",
        "sameAs": [
          "https://www.linkedin.com/in/arissetia/",
          "https://github.com/madebyaris",
          "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "MadeByAris",
        "logo": {
          "@type": "ImageObject",
          "url": "https://madebyaris.com/logo.png"
        }
      },
      "datePublished": post.date,
      "dateModified": post.modified,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://madebyaris.com/blog/${post.slug}`
      }
    };

    return (
      <>
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
        
        <div className="bg-background py-12 md:py-16">
          <div className="container mx-auto max-w-[1080px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto">
              {/* Breadcrumb Navigation */}
              <nav className="mb-8 text-sm text-muted-foreground">
                <ol className="flex items-center flex-wrap gap-1">
                  <li>
                    <Link href="/" className="hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li className="truncate max-w-[200px] sm:max-w-xs">
                    <span className="text-foreground">
                      {post.title.rendered.replace(/<[^>]*>/g, '')}
                    </span>
                  </li>
                </ol>
              </nav>
              
              <article className="w-full mx-auto bg-background rounded-xl">
                {/* Article Header */}
                <header className="mb-12">
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter mb-8"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{readingTime} min read</span>
                    </div>
                    
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>By Aris Setiawan</span>
                    </div>
                  </div>
                  
                  {/* Social Share Buttons */}
                  <div className="flex items-center gap-2 mb-10">
                    <span className="text-sm font-medium flex items-center">
                      <Share2 className="h-4 w-4 mr-1" /> Share:
                    </span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="rounded-full h-8 w-8 p-0"
                      asChild
                    >
                      <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://madebyaris.com/blog/${post.slug}`)}&text=${encodeURIComponent(post.title.rendered.replace(/<[^>]*>/g, ''))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="rounded-full h-8 w-8 p-0"
                      asChild
                    >
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://madebyaris.com/blog/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="rounded-full h-8 w-8 p-0"
                      asChild
                    >
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://madebyaris.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title.rendered.replace(/<[^>]*>/g, ''))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </div>
                </header>
                
                {/* Featured Image */}
                {featuredImageUrl ? (
                  <FeaturedImage
                    src={featuredImageUrl}
                    alt={post.title.rendered.replace(/<[^>]*>/g, '')}
                    width={800}
                    height={450}
                  />
                ) : (
                  <div className="relative mb-12 overflow-hidden rounded-xl w-full">
                    <div className="aspect-[16/9] bg-muted/20 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">No featured image</span>
                    </div>
                  </div>
                )}
                
                {/* Table of Contents (Mobile) */}
                {headings.length > 0 && <TableOfContents headings={headings} isMobile={true} />}
                
                {/* Content with Table of Contents */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                  {/* Table of Contents (Desktop) */}
                  {headings.length > 0 && (
                    <aside className="hidden lg:block lg:col-span-3">
                      <TableOfContents headings={headings} />
                    </aside>
                  )}
                  
                  {/* Main Content */}
                  <div className={headings.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}>
                    {/* Article Content - Server-rendered with client hydration */}
                    <WordPressContent 
                      content={transformedContent} 
                      estimatedReadTime={readingTime}
                    />
                    
                    {/* Tags */}
                    {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                      <div className="mt-12 pt-8 border-t">
                        <h3 className="text-sm font-medium mb-3 flex items-center">
                          <Tag className="h-4 w-4 mr-2 text-primary" />
                          Tags:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {post.tags
                            .filter((tag: TagType) => typeof tag === 'object' && tag.name)
                            .map((tag: TagType) => {
                              if (typeof tag !== 'object') return null;
                              return (
                                <Link 
                                  key={tag.id} 
                                  href={`/blog?tag=${tag.slug}`}
                                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                                >
                                  {tag.name}
                                </Link>
                              );
                            })
                          }
                        </div>
                      </div>
                    )}
                    
                    {/* Author Bio */}
                    <div className="mt-12 pt-8 border-t">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 bg-muted/30 rounded-xl">
                        <AuthorImage 
                          src="/aris.png" 
                          alt="Aris Setiawan" 
                          width={80}
                          height={80}
                        />
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="font-semibold text-xl mb-2">Aris Setiawan</h3>
                          <p className="text-muted-foreground mb-3">
                            Senior Full Stack Developer specializing in Next.js, React, and WordPress. 
                            I write about web development, performance optimization, and best practices.
                          </p>
                          <div className="flex justify-center sm:justify-start gap-3">
                            <a href="https://twitter.com/arisberikut" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                              </svg>
                              <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://github.com/madebyaris" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                              </svg>
                              <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/arissetia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                              </svg>
                              <span className="sr-only">LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Post Navigation */}
                <div className="mt-12 pt-8 border-t flex justify-between">
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="mt-20">
                  <h2 className="text-2xl font-bold mb-10 flex items-center">
                    <BookOpen className="mr-3 h-5 w-5 text-primary" />
                    Related Articles
                  </h2>
                  <Suspense fallback={
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-[300px] animate-pulse rounded-lg bg-muted" />
                      ))}
                    </div>
                  }>
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                      {relatedPosts.map((relatedPost: Post) => (
                        <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                      ))}
                    </div>
                  </Suspense>
                </section>
              )}
            </div>
          </div>
        </div>
      </>
    )
  } catch (error) {
    console.error('Error rendering blog post:', error);
    notFound()
  }
}