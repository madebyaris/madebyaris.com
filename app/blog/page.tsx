/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import type { Post, Tag, Category } from '@/lib/types'
import { Suspense } from 'react'
import { BlogContent } from '@/components/blog-content'
import { BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 3600;

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://madebyaris.com/blog/#webpage",
  "name": "Web Development Insights & Tutorials",
  "description": "Expert insights on Next.js, React, WordPress, and modern web development practices. Technical tutorials and industry best practices.",
  "url": "https://madebyaris.com/blog",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://madebyaris.com/#website",
    "name": "MadeByAris",
    "url": "https://madebyaris.com"
  },
  "author": {
    "@type": "Person",
    "@id": "https://madebyaris.com/#person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior Full Stack Developer",
    "url": "https://madebyaris.com",
    "image": "https://madebyaris.com/aris.png"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://madebyaris.com/#organization",
    "name": "MadeByAris",
    "url": "https://madebyaris.com"
  },
  "keywords": [
    "Web Development",
    "Next.js",
    "React",
    "WordPress",
    "TypeScript",
    "JavaScript",
    "Full Stack Development"
  ],
  "inLanguage": "en-US"
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Web Development Blog | Next.js, React & WordPress Insights',
    description: 'Expert tutorials and insights on Next.js, React, WordPress, and modern web development practices. Learn from real-world enterprise development experience.',
    keywords: [
      'Web Development Blog',
      'Next.js Tutorials',
      'React Development',
      'WordPress Development',
      'TypeScript Guides',
      'JavaScript Tips',
      'Full Stack Development',
      'Web Performance',
      'Enterprise Solutions',
      'Development Best Practices'
    ],
    openGraph: {
      title: 'Web Development Blog | Next.js, React & WordPress Insights',
      description: 'Expert tutorials and insights on modern web development practices.',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Web Development Blog | Next.js, React & WordPress Insights',
      description: 'Expert tutorials and insights on modern web development practices.',
    },
    alternates: {
      canonical: 'https://madebyaris.com/blog'
    }
  }
}

export default async function BlogPage() {
  let posts: Post[] = []
  let popularTags: Tag[] = []
  
  try {
    // Fetch posts and popular tags in parallel
    const [postsResponse, tagsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?per_page=12&_embed=wp:featuredmedia`, {
        next: {
          revalidate: 3600
        }
      }),
      fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/tags?orderby=count&order=desc&per_page=6`, {
        next: {
          revalidate: 3600
        }
      })
    ]);

    if (!postsResponse.ok || !tagsResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    const [postsData, tagsData] = await Promise.all([
      postsResponse.json(),
      tagsResponse.json()
    ]);

    // Process posts to include full category and tag objects
    const processedPosts = await Promise.all(postsData.map(async (post: Post) => {
      // Fetch categories if they exist
      if (post.categories && Array.isArray(post.categories) && post.categories.length > 0) {
        const categoriesResponse = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/categories?include=${post.categories.join(',')}`,
          { next: { revalidate: 3600 } }
        );
        if (categoriesResponse.ok) {
          const categories = await categoriesResponse.json();
          post.categories = categories;
        }
      } else {
        post.categories = [];
      }
      
      // Fetch tags if they exist
      if (post.tags && Array.isArray(post.tags) && post.tags.length > 0) {
        const tagsResponse = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/tags?include=${post.tags.join(',')}`,
          { next: { revalidate: 3600 } }
        );
        if (tagsResponse.ok) {
          const tags = await tagsResponse.json();
          post.tags = tags;
        }
      } else {
        post.tags = [];
      }
      
      return post;
    }));
    
    posts = processedPosts;
    popularTags = tagsData;
    
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
        {/* Badge */}
        <div 
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
            '--border-radius-before': '9999px'
          }}
        >
          <BookOpen className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Web Development Insights</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Development
          <span className="block gradient-text font-light">Insights</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Expert tutorials and insights on Next.js, React, WordPress, and modern web development practices. 
          Learn from real-world enterprise development experience.
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {['Next.js', 'React', 'WordPress', 'TypeScript'].map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 opacity-60" />

      {/* Blog Content */}
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-[350px] animate-pulse rounded-2xl bg-zinc-100" />
          ))}
        </div>
      }>
        <BlogContent initialPosts={posts} />
      </Suspense>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-16 opacity-60" />

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[350px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[350px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Have a Project in Mind?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Let&apos;s discuss how I can help bring your ideas to life with modern web technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>View Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
