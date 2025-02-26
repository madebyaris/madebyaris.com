/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts } from '@/lib/wordpress'
import { transformWordPressContent } from '@/lib/utils'
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Share2, Tag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Suspense } from 'react'
import type { Category } from '@/lib/types'

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
    const posts = await getPosts({ per_page: 20 });
    return posts.map((post) => ({
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
      /<h([2-3])[^>]*>(.*?)<\/h\1>/g,
      (match, level, text) => {
        const id = text.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^\w]+/g, '-');
        return `<h${level} id="${id}" class="scroll-mt-20">${text}</h${level}>`;
      }
    );
  } catch (error) {
    console.error('Error adding IDs to headings:', error);
    return content;
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  
  try {
    const post = await getPost(slug)
    
    if (!post) {
      notFound()
    }

    // Get related posts (for now, just get recent posts)
    const allPosts = await getPosts({ per_page: 6 });
    const relatedPosts = allPosts
      .filter(p => p.id !== post.id)
      .slice(0, 3);

    // Extract headings for table of contents
    let headings: Heading[] = [];
    let transformedContent = '';
    
    try {
      // Extract headings for table of contents
      headings = extractHeadings(post.content.rendered);
      
      // Add IDs to headings in content
      const contentWithIds = addIdsToHeadings(post.content.rendered);
      
      // Transform content with styles
      transformedContent = transformWordPressContent(contentWithIds);
    } catch (error) {
      console.error('Error processing content:', error);
      transformedContent = transformWordPressContent(post.content.rendered);
    }
    
    // Calculate reading time
    const readingTime = getReadingTime(post.content.rendered);

    // Structured data for the article
    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title.rendered,
      "description": post.excerpt.rendered.replace(/<[^>]*>/g, ''),
      "image": post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://madebyaris.com/og.png",
      "author": {
        "@type": "Person",
        "name": "Aris Setiawan",
        "url": "https://madebyaris.com"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
        
        <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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
              <header className="mb-10">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter mb-6"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
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
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-sm font-medium flex items-center">
                    <Share2 className="h-4 w-4 mr-1" /> Share:
                  </span>
                  <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </header>
              
              {/* Featured Image */}
              {post._embedded?.['wp:featuredmedia']?.[0] && (
                <div className="relative mb-10 overflow-hidden rounded-xl aspect-[16/9] w-full shadow-md">
                  <Image
                    src={post._embedded?.['wp:featuredmedia']?.[0].source_url}
                    alt={post._embedded?.['wp:featuredmedia']?.[0].alt_text || post.title.rendered.replace(/<[^>]*>/g, '')}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 800px"
                    className="object-cover"
                    priority
                    loading="eager"
                    quality={90}
                  />
                </div>
              )}
              
              {/* Table of Contents (Mobile) */}
              {headings.length > 0 && (
                <div className="lg:hidden mb-8">
                  <details className="bg-muted/50 rounded-xl p-4 border shadow-sm">
                    <summary className="text-sm font-semibold cursor-pointer flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-primary" />
                      Table of Contents
                    </summary>
                    <nav className="mt-4">
                      <ul className="space-y-3 text-sm">
                        {headings.map((heading, index) => (
                          <li 
                            key={index} 
                            className={`${heading.level === 3 ? 'ml-4' : ''}`}
                          >
                            <a 
                              href={`#${heading.id}`} 
                              className="text-muted-foreground hover:text-primary transition-colors line-clamp-1"
                            >
                              {heading.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </details>
                </div>
              )}
              
              {/* Content with Table of Contents */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Table of Contents (Desktop) */}
                {headings.length > 0 && (
                  <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-24">
                      <div className="bg-muted/50 rounded-xl p-5 border shadow-sm">
                        <h2 className="text-sm font-semibold mb-4 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-primary" />
                          Table of Contents
                        </h2>
                        <nav>
                          <ul className="space-y-3 text-sm">
                            {headings.map((heading, index) => (
                              <li 
                                key={index} 
                                className={`${heading.level === 3 ? 'ml-4' : ''}`}
                              >
                                <a 
                                  href={`#${heading.id}`} 
                                  className="text-muted-foreground hover:text-primary transition-colors line-clamp-1"
                                >
                                  {heading.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Main Content */}
                <div className={`${headings.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
                  {/* Article Content */}
                  <div
                    className="prose prose-zinc dark:prose-invert max-w-none overflow-hidden prose-img:rounded-lg prose-img:w-full prose-pre:overflow-x-auto prose-pre:max-w-full"
                    dangerouslySetInnerHTML={{ __html: transformedContent }}
                  />
                  
                  {/* Tags */}
                  {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                    <div className="mt-10 pt-6 border-t">
                      <h3 className="text-sm font-medium mb-3 flex items-center">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        Tags:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags
                          .filter(tag => typeof tag === 'object' && tag.name)
                          .map(tag => {
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
                  <div className="mt-10 pt-6 border-t">
                    <div className="flex items-start gap-5 p-5 bg-muted/30 rounded-xl">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden shadow-sm">
                        <Image 
                          src="/aris.jpg" 
                          alt="Aris Setiawan" 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Aris Setiawan</h3>
                        <p className="text-muted-foreground">
                          Senior Full Stack Developer specializing in Next.js, React, and WordPress. 
                          I write about web development, performance optimization, and best practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Post Navigation */}
              <div className="mt-10 pt-6 border-t flex justify-between">
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
              <section className="mt-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <BookOpen className="mr-3 h-5 w-5 text-primary" />
                  Related Articles
                </h2>
                <Suspense fallback={
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-[300px] animate-pulse rounded-lg bg-muted" />
                    ))}
                  </div>
                }>
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {relatedPosts.map((relatedPost) => (
                      <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group">
                        <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors duration-300 shadow-sm">
                          {relatedPost._embedded?.['wp:featuredmedia']?.[0] && (
                            <div className="relative aspect-video overflow-hidden">
                              <Image
                                src={relatedPost._embedded['wp:featuredmedia'][0].source_url}
                                alt={relatedPost._embedded['wp:featuredmedia'][0].alt_text || ''}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                          )}
                          
                          <div className="p-5 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                              <time dateTime={relatedPost.date}>{formatDate(relatedPost.date)}</time>
                            </div>
                            
                            <h3 
                              className="text-base font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors"
                              dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                            />
                            
                            <div className="mt-auto pt-2 text-sm font-medium text-primary flex items-center">
                              Read Article <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </Suspense>
              </section>
            )}
          </div>
        </div>
      </>
    )
  } catch (error) {
    console.error('Error rendering blog post:', error);
    return (
      <div className="container mx-auto max-w-[980px] px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Error Loading Article</h1>
        <p className="text-muted-foreground mb-6">
          There was an error loading this article. Please try again later.
        </p>
        <Link href="/blog">
          <Button>Return to Blog</Button>
        </Link>
      </div>
    );
  }
}