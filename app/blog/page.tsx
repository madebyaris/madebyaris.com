/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { getPosts } from '@/lib/wordpress'
import type { Post } from '@/lib/types'
import { ImageResponse } from 'next/og'
import { HomeContent } from '@/components/home-content'
import { Suspense } from 'react'
export const dynamic = 'force-dynamic'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Web Development Insights & Tutorials",
  "description": "Expert insights on Next.js, React, WordPress, and modern web development practices. Technical tutorials and industry best practices.",
  "url": "https://madebyaris.com/blog",
  "author": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior Full Stack Developer",
    "url": "https://madebyaris.com",
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/arissetyawan",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "MadeByAris",
    "url": "https://madebyaris.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://madebyaris.com/logo.png"
    }
  },
  "keywords": [
    "Web Development",
    "Next.js",
    "React",
    "WordPress",
    "TypeScript",
    "JavaScript",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Web Performance"
  ],
  "about": {
    "@type": "Thing",
    "name": "Web Development Blog",
    "description": "Technical blog covering modern web development topics, best practices, and industry insights."
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "MadeByAris",
    "url": "https://madebyaris.com"
  },
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/"
}

// Generate OG Image
export async function generateMetadata(): Promise<Metadata> {
  const ogImage = new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Web Development Insights
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: '#888888',
            marginBottom: '20px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Expert tutorials and insights on Next.js, React, WordPress, and modern web development
        </p>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#007acc', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Next.js
          </div>
          <div style={{ background: '#61dafb', padding: '10px 20px', borderRadius: '20px', color: 'black' }}>
            React
          </div>
          <div style={{ background: '#21759b', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            WordPress
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )

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
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Web Development Blog | Next.js, React & WordPress Insights',
      description: 'Expert tutorials and insights on modern web development practices.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/blog'
    }
  }
}

export default async function BlogPage() {
  let posts: Post[] = []
  
  try {
    posts = await getPosts({ per_page: 12 })
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }

  // Function to generate structured data
  function generateStructuredData() {
    // Combine both schemas into a single object with @graph
    const combinedSchema = {
      "@context": "https://schema.org",
      "@graph": [
        structuredData,
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": posts.map((post, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "BlogPosting",
              "headline": post.title.rendered,
              "description": post.excerpt.rendered.replace(/<[^>]*>/g, ''),
              "url": `https://madebyaris.com/blog/${post.slug}`,
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
              },
              "keywords": post.tags?.map((tag) => tag.name).join(", ") || "",
              "articleSection": post.categories?.map((cat) => cat.name).join(", ") || "Web Development"
            }
          })),
          "numberOfItems": posts.length
        }
      ]
    }

    return {
      __html: JSON.stringify(combinedSchema)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData()}
      />
      <main className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-4">
              Web Development Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Expert tutorials and insights on Next.js, React, WordPress, and modern web development practices.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <Suspense fallback={
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[300px] animate-pulse rounded-lg bg-muted" />
              ))}
            </div>
          }>
            <HomeContent type="posts" initialData={posts} />
          </Suspense>
        </div>
      </main>
    </>
  )
}
