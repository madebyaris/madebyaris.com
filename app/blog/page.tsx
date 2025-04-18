/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import type { Post, Tag, Category } from '@/lib/types'
import { ImageResponse } from 'next/og'
import { Suspense } from 'react'
import { BlogContent } from '@/components/blog-content'

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
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://madebyaris.com",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://madebyaris.com/blog",
          "name": "Blog"
        }
      }
    ]
  },
  "author": {
    "@type": "Person",
    "@id": "https://madebyaris.com/#person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior Full Stack Developer",
    "url": "https://madebyaris.com",
    "image": "https://madebyaris.com/astro.png",
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/madebyaris",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://madebyaris.com/#organization",
    "name": "MadeByAris",
    "url": "https://madebyaris.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://madebyaris.com/logo.png",
      "width": "180",
      "height": "180"
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
    "Web Performance",
    "Enterprise Solutions",
    "System Architecture",
    "Technical Leadership"
  ],
  "about": {
    "@type": "Thing",
    "name": "Web Development Blog",
    "description": "Technical blog covering modern web development topics, best practices, and industry insights. Focus on enterprise solutions and scalable architectures."
  },
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 12,
    "itemListElement": []  // This will be populated dynamically with blog posts
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "@id": "https://madebyaris.com/#organization"
    }
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Developers",
    "geographicArea": {
      "@type": "AdministrativeArea",
      "name": "Worldwide"
    }
  }
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

  const postsResponse = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?per_page=12&_embed=wp:featuredmedia`, { next: { revalidate: 3600 } });
  const posts = await postsResponse.json() as Post[];

  // Fetch categories for processing
  const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/categories`, { next: { revalidate: 3600 } });
  const categories: Category[] = await categoriesResponse.json();

  // Generate combined schema for structured data
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      structuredData,
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": posts.map((post, index) => {
          // Process categories and tags
          const categoryNames = Array.isArray(post.categories) 
            ? post.categories
                .map(catId => {
                  const category = categories.find(c => c.id === catId);
                  return category?.name || '';
                })
                .filter(Boolean)
                .join(", ")
            : "Web Development";

          const tagNames = Array.isArray(post.tags)
            ? post.tags
                .map(tag => {
                  if (typeof tag === 'number') {
                    return ''; // Skip numeric tag IDs
                  }
                  return tag.name;
                })
                .filter(Boolean)
                .join(", ")
            : "";

          return {
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
              "keywords": tagNames,
              "articleSection": categoryNames
            }
          };
        }),
        "numberOfItems": posts.length
      }
    ]
  };

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
    },
    other: {
      'structured-data': JSON.stringify(combinedSchema)
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
      {/* Hero Section with improved design and animated gradient */}
      <section className="relative py-8 md:py-10 overflow-hidden animated-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(120,119,198,0.1),transparent_70%)]"></div>
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-3 backdrop-blur-sm">
              Web Development Insights
            </div>
            
            {/* Critical LCP element - enhanced heading */}
            <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter lg:text-4xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
              Web Development Insights
            </h1>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-2xl mx-auto">
              Expert tutorials and insights on Next.js, React, WordPress, and modern web development practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <div className="px-3 py-1 text-xs rounded-full bg-[#007acc] text-white">
                Next.js
              </div>
              <div className="px-3 py-1 text-xs rounded-full bg-[#61dafb] text-black">
                React
              </div>
              <div className="px-3 py-1 text-xs rounded-full bg-[#21759b] text-white">
                WordPress
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section with improved layout */}
      <section className="py-4 md:py-6">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <Suspense fallback={
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[300px] animate-pulse rounded-xl bg-muted" />
              ))}
            </div>
          }>
            <BlogContent initialPosts={posts} />
          </Suspense>
        </div>
      </section>
    </>
  )
}
