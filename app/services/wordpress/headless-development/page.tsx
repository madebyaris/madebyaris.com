import type { Metadata } from 'next'
import { Rocket, ArrowRight, Globe, Zap, Code2 } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { Card } from '../../../../components/ui/card'
import { ImageResponse } from 'next/og'

export const revalidate = 86400 // Revalidate daily

const features = [
  {
    title: 'Next.js Integration',
    description: 'Modern frontend development using Next.js for optimal performance and SEO.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'API Development',
    description: 'Custom REST API endpoints and GraphQL schema development.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Global Performance',
    description: 'Lightning-fast content delivery through edge caching and CDNs.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Optimized Backend',
    description: 'WordPress backend optimization for headless architecture.',
    icon: <Zap className="w-6 h-6" />,
  },
]

const benefits = [
  'Better Performance',
  'Enhanced Security',
  'Modern Stack',
  'API-First',
  'Scalable Design',
  'SEO Optimized',
  'Fast Loading',
  'Future Proof',
]

const processSteps = [
  {
    title: 'Architecture Planning',
    description: 'Designing the optimal headless WordPress architecture for your needs.',
  },
  {
    title: 'API Development',
    description: 'Building robust APIs to connect WordPress with the Next.js frontend.',
  },
  {
    title: 'Frontend Creation',
    description: 'Developing a fast, modern frontend using Next.js and React.',
  },
  {
    title: 'Deployment & Testing',
    description: 'Comprehensive testing and optimized deployment setup.',
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Headless WordPress Development Services",
  "description": "Expert headless WordPress development services using Next.js. Build fast, secure, and scalable web applications with modern technology stack.",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Headless WordPress Developer",
    "url": "https://madebyaris.com"
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Headless WordPress Development",
    "serviceType": "Headless WordPress Development",
    "areaServed": "Worldwide",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Headless WordPress Developer",
      "url": "https://madebyaris.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "Contact for pricing",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": true
      },
      "availability": "https://schema.org/InStock",
      "highPrice": 2000,
      "lowPrice": 500,
      "offerCount": 4
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "18",
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
          "name": "Digital Agency Owner"
        },
        "reviewBody": "The headless WordPress solution delivered exceptional performance and flexibility for our client's e-commerce platform."
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
          "name": "Marketing Director"
        },
        "reviewBody": "Our content team loves the WordPress backend while our developers appreciate the modern Next.js frontend. Best of both worlds!"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Headless WordPress Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Integration",
            "description": "Seamless integration of Next.js with WordPress"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Development",
            "description": "Custom REST API and GraphQL endpoint development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Optimization",
            "description": "Speed optimization and caching implementation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deployment Setup",
            "description": "Server configuration and deployment automation"
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
          "@id": "https://madebyaris.com/services/wordpress",
          "name": "WordPress Development"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@id": "https://madebyaris.com/services/wordpress/headless-development",
          "name": "Headless Development"
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is headless WordPress development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Headless WordPress development separates the frontend (Next.js) from the backend (WordPress), allowing for faster performance, better security, and more flexibility in content delivery while maintaining WordPress's familiar admin interface."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Next.js for headless WordPress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Next.js offers superior performance through static site generation and server-side rendering, better SEO capabilities, improved security, and a modern development experience while leveraging WordPress as a powerful content management system."
        }
      },
      {
        "@type": "Question",
        "name": "How does headless WordPress improve performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Headless WordPress with Next.js delivers faster page loads through static generation, efficient caching, and optimized asset delivery. This architecture also reduces server load and improves overall application responsiveness."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support for headless WordPress sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive support including performance monitoring, security updates, content delivery optimization, and technical maintenance for both the WordPress backend and Next.js frontend."
        }
      }
    ]
  }
}

// Generate Metadata and Structured Data
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
          Headless WordPress Development
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: '#888888',
            marginBottom: '40px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Next.js • WordPress API • Modern Architecture
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0073AA', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Headless Expert
          </div>
          <div style={{ background: '#0070F3', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Next.js Frontend
          </div>
          <div style={{ background: '#14a800', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Enterprise Solutions
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
    title: 'Headless WordPress Development | Modern Web Solutions',
    description: 'Expert headless WordPress development services combining the power of WordPress CMS with modern frontend technologies like Next.js.',
    keywords: [
      'Headless WordPress',
      'WordPress Development',
      'Next.js WordPress',
      'Decoupled WordPress',
      'WordPress API',
      'Modern WordPress',
      'JAMstack WordPress',
      'WordPress REST API',
      'WordPress Frontend',
      'WordPress Architecture'
    ],
    openGraph: {
      title: 'Headless WordPress Development | Modern Solutions',
      description: 'Expert headless WordPress development services.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Headless WordPress Development | Modern Solutions',
      description: 'Expert headless WordPress development services.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/wordpress/headless-development'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

export default function HeadlessWordPressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative min-h-screen">
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
        </div>

        <div className="container relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16 lg:py-24">
            <div className="flex flex-col gap-12">
              {/* Hero Section */}
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 mb-4">
                  <Rocket className="w-4 h-4" />
                  <span className="text-sm font-medium">Headless WordPress Expert</span>
                </div>
                <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  Headless WordPress Development
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                  Modern headless WordPress solutions with Next.js frontend for superior performance, flexibility, and user experience.
                </p>
              </div>

              {/* Introduction */}
              <div className="mt-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  My headless WordPress development service combines the power of WordPress as a backend 
                  with modern frontend technologies like Next.js. This approach delivers exceptional 
                  performance, enhanced security, and a superior development experience while maintaining 
                  the ease of content management that WordPress provides.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {features.map((feature, index) => (
                  <Card 
                    key={feature.title}
                    className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-in fade-in slide-in-from-bottom duration-1000"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform hover:scale-110">
                        {feature.icon}
                      </div>
                      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{feature.title}</h2>
                      <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Development Process */}
              <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                  Headless Development Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {processSteps.map((step, index) => (
                    <div 
                      key={step.title}
                      className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg"
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 font-semibold">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{step.title}</h3>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                  Benefits of Headless WordPress
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={benefit}
                      className="p-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 text-center text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-24 text-center bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-2xl p-12 animate-in fade-in slide-in-from-bottom duration-1000">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                  Ready to Go Headless?
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                  Let&apos;s discuss how a headless WordPress setup can transform your website&apos;s performance and capabilities.
                </p>
                <Button size="lg" className="min-w-[200px] group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                  Start Your Headless Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}