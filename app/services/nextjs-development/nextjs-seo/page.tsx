import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Search, BarChart, Zap, Globe, LineChart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const revalidate = 86400 // Revalidate daily

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Next.js SEO | Technical Search Optimization",
  "description": "Boost your Next.js application's search visibility with expert SEO implementation. Get higher rankings and more organic traffic through technical optimization and performance tuning. Based in Indonesia, serving worldwide.",
  "url": "https://madebyaris.com/services/nextjs-development/nextjs-seo",
  "keywords": [
    "Next.js SEO",
    "Next.js Search Engine Optimization",
    "SEO for Next.js",
    "Next.js SEO Expert",
    "Technical SEO Next.js",
    "Server-Side Rendering SEO",
    "Static Site Generation SEO",
    "Core Web Vitals",
    "SEO Performance",
    "Search Rankings",
    "Organic Traffic",
    "SEO Monitoring",
    "Next.js Metadata",
    "Structured Data",
    "Indonesian Developer"
  ],
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Full-Stack Developer & SEO Specialist",
    "url": "https://madebyaris.com"
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Next.js SEO Solutions",
    "serviceType": "Search Engine Optimization",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Full-Stack Developer & SEO Specialist",
      "url": "https://madebyaris.com"
    },
    "areaServed": "Worldwide",
    "description": "I help businesses improve their search visibility through technical SEO optimization of Next.js applications. My approach combines deep technical knowledge with proven SEO strategies to boost rankings and organic traffic. From metadata optimization to Core Web Vitals, I ensure your Next.js app meets all modern SEO requirements.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "Contact for custom pricing",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": true
      },
      "availability": "https://schema.org/InStock",
      "highPrice": 4000,
      "lowPrice": 1000,
      "offerCount": 4
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "21",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marketing Director at Online Marketplace"
        },
        "reviewBody": "Aris's SEO expertise transformed our Next.js application's search performance. Our organic traffic increased by 150% within three months, and we now rank on page one for our main keywords. His technical approach to SEO made a real difference."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "CEO of Digital Agency"
        },
        "reviewBody": "Working with Aris on our Next.js SEO was eye-opening. His deep understanding of both technical SEO and Next.js helped us achieve perfect Core Web Vitals scores and significantly improved our search rankings. The detailed reporting and recommendations were invaluable."
      }
    ],
    "serviceOutput": [
      {
        "@type": "Service",
        "name": "Technical SEO Implementation",
        "description": "Comprehensive technical SEO setup including metadata optimization, structured data, and server-side rendering configuration."
      },
      {
        "@type": "Service",
        "name": "Performance Optimization",
        "description": "Core Web Vitals optimization and performance tuning for better search rankings and user experience."
      },
      {
        "@type": "Service",
        "name": "Content Strategy",
        "description": "SEO-driven content structure and optimization strategies specific to Next.js applications."
      },
      {
        "@type": "Service",
        "name": "Analytics & Monitoring",
        "description": "Detailed SEO performance tracking, reporting, and continuous optimization recommendations."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Next.js SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO Audit",
            "description": "In-depth analysis of your Next.js application's SEO performance, including technical issues, Core Web Vitals, and ranking factors."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Implementation",
            "description": "Full technical SEO setup including metadata, structured data, sitemaps, and robots.txt configuration optimized for Next.js."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Optimization",
            "description": "Core Web Vitals optimization, server-side rendering configuration, and performance tuning for better rankings."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Monitoring",
            "description": "Ongoing performance tracking, ranking analysis, and optimization updates to maintain and improve search visibility."
          }
        }
      ]
    }
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
          "@id": "https://madebyaris.com/services",
          "name": "Services"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://madebyaris.com/services/nextjs-development",
          "name": "Next.js Development"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@id": "https://madebyaris.com/services/nextjs-development/nextjs-seo",
          "name": "Next.js SEO"
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is Next.js SEO different from regular SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Next.js offers unique SEO advantages through its server-side rendering and static generation capabilities. This means search engines can crawl and index your content more effectively, leading to better rankings. I leverage these features along with Next.js's built-in performance optimizations to give your site a competitive edge in search results."
        }
      },
      {
        "@type": "Question",
        "name": "What improvements can I expect from Next.js SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper Next.js SEO implementation, you can expect faster page load times, improved Core Web Vitals scores, better search engine crawling, and higher rankings. My clients typically see significant increases in organic traffic within 2-3 months. I'll provide regular reports showing your progress in these areas."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your Next.js SEO service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My service includes a comprehensive technical SEO audit, metadata optimization, structured data implementation, Core Web Vitals optimization, and ongoing performance monitoring. I'll also provide recommendations for content structure and internal linking specific to your Next.js application."
        }
      },
      {
        "@type": "Question",
        "name": "How do you track and report SEO progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I use a combination of tools to track your SEO performance, including Google Search Console, Analytics, and specialized SEO software. You'll receive monthly reports showing ranking changes, organic traffic growth, Core Web Vitals scores, and specific recommendations for further improvements."
        }
      }
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "Next.js SEO Expertise",
    "description": "Specialized in technical SEO optimization for Next.js applications, focusing on performance, search visibility, and organic traffic growth through modern SEO strategies."
  },
  "potentialAction": {
    "@type": "CommunicateAction",
    "name": "Discuss Your Next.js SEO",
    "target": "https://madebyaris.com/contact"
  }
}

// Generate Metadata
export function generateMetadata(): Metadata {
  return {
    title: 'Next.js SEO Services | Search Engine Optimization for Next.js',
    description: 'Professional Next.js SEO services to optimize your web application for search engines. Improve rankings, visibility, and organic traffic with Next.js-specific SEO strategies.',
    keywords: [
      'Next.js SEO',
      'Next.js Search Engine Optimization',
      'SEO for Next.js',
      'Next.js SEO Services',
      'Next.js SEO Expert',
      'Jasa SEO Next.js',
      'Next.js Optimization',
      'Technical SEO Next.js',
      'Server-Side Rendering SEO',
      'Static Site Generation SEO'
    ],
    openGraph: {
      title: 'Next.js SEO Services | Search Engine Optimization for Next.js',
      description: 'Professional Next.js SEO services to optimize your web application for search engines. Improve rankings, visibility, and organic traffic with Next.js-specific SEO strategies.',
      type: 'website',
      locale: 'en_US',
      siteName: 'Made by Aris'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Next.js SEO Services | Search Engine Optimization for Next.js',
      description: 'Professional Next.js SEO services to optimize your web application for search engines. Improve rankings, visibility, and organic traffic with Next.js-specific SEO strategies.',
      creator: '@madebyaris'
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development/nextjs-seo'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

const features = [
  {
    title: 'Technical SEO Audit',
    description: 'Comprehensive analysis of your Next.js application to identify and fix SEO issues.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Server-Side Rendering Optimization',
    description: 'Optimize SSR for search engines to ensure complete indexing of your content.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Metadata Implementation',
    description: 'Implement proper metadata, structured data, and Open Graph tags for better visibility.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Performance Optimization',
    description: 'Improve Core Web Vitals and page speed for better search rankings.',
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    title: 'SEO Monitoring',
    description: 'Track your SEO performance with detailed analytics and reporting.',
    icon: <LineChart className="w-6 h-6" />,
  },
]

const deliverables = [
  'Comprehensive Next.js SEO audit',
  'Technical SEO implementation',
  'Metadata and structured data setup',
  'Core Web Vitals optimization',
  'Server-side rendering configuration for SEO',
  'Image optimization for SEO',
  'SEO-friendly routing implementation',
  'Search performance monitoring dashboard'
]

export default function NextjsSeoPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/nextjs-development" className="hover:text-foreground transition-colors">
                  Next.js Development
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">Next.js SEO</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <header className="text-center max-w-3xl mx-auto">
            <Link href="/services/nextjs-development">
              <Button variant="ghost" size="sm" className="mb-4 -ml-4 text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Next.js Services
              </Button>
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 mb-4">
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">SEO Expert</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400 mb-6">
              Next.js SEO Services
            </h1>
            <div className="max-w-[700px] mx-auto">
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                Optimize your Next.js application for search engines and improve your rankings.
                <span className="inline-block">Specialized SEO strategies for Next.js applications.</span>
              </p>
            </div>
          </header>

          {/* Introduction */}
          <article className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              My Next.js SEO service leverages the unique capabilities of Next.js for optimal search engine 
              visibility. By utilizing server-side rendering, static generation, and metadata optimization, 
              I help your Next.js application rank higher in search results and attract more organic traffic.
            </p>
          </article>

          {/* Key Features Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="features-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Key Features
              </span>
              <h2 id="features-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Next.js SEO Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mb-4 p-2 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* What You Get Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="deliverables-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                Deliverables
              </span>
              <h2 id="deliverables-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                What You Get
              </h2>
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Why Next.js SEO is Different Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="why-nextjs-seo-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                Benefits
              </span>
              <h2 id="why-nextjs-seo-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Why Next.js SEO is Different
              </h2>
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Server-Side Rendering Advantage</h3>
                  <p className="text-muted-foreground">Next.js server-side rendering ensures search engines can fully index your content, unlike client-side rendered applications that may have indexing issues.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Built-in Performance Features</h3>
                  <p className="text-muted-foreground">Next.js includes built-in performance optimizations that directly impact Core Web Vitals, a key ranking factor for search engines.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Metadata API</h3>
                  <p className="text-muted-foreground">Next.js provides a powerful Metadata API that allows for dynamic and static metadata generation, crucial for proper SEO implementation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Image Optimization</h3>
                  <p className="text-muted-foreground">The Next.js Image component automatically optimizes images for better performance and Core Web Vitals scores, improving SEO rankings.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Improve Your Next.js SEO?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let&apos;s optimize your Next.js application for search engines and increase your organic traffic.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Your SEO Project
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 