import type { Metadata } from 'next'
import { Layout, Palette, FileCode, Code2, ArrowRight, Brush } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { Card } from '../../../../components/ui/card'
import { ImageResponse } from 'next/og'

const features = [
  {
    title: 'Custom Design Implementation',
    description: 'Pixel-perfect implementation of your design into a fully functional WordPress theme.',
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: 'Responsive & Mobile-First',
    description: 'Themes that look and work perfectly across all devices and screen sizes.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Performance Optimized',
    description: 'Lightweight and fast-loading themes following WordPress coding standards.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Custom Functionality',
    description: 'Integration of custom post types, taxonomies, and theme-specific features.',
    icon: <FileCode className="w-6 h-6" />,
  },
]

const benefits = [
  'Unique Design',
  'Fast Loading',
  'SEO Friendly',
  'Mobile First',
  'Easy Updates',
  'Custom Features',
  'Brand Aligned',
  'Future Proof',
]

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your specific needs, design requirements, and functionality expectations.',
  },
  {
    title: 'Design Integration',
    description: 'Converting your design into a responsive, WordPress-compatible theme structure.',
  },
  {
    title: 'Development & Testing',
    description: 'Building the theme with clean, efficient code and thorough testing across devices.',
  },
  {
    title: 'Optimization & Launch',
    description: 'Performance optimization, security checks, and deployment to your live site.',
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "WordPress Theme Development Services",
  "description": "Professional WordPress theme development services for custom and unique websites. Expert in creating responsive, high-performance WordPress themes.",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "WordPress Theme Developer",
    "url": "https://madebyaris.com"
  },
  "mainEntity": {
    "@type": "Service",
    "name": "WordPress Theme Development",
    "serviceType": "WordPress Theme Development",
    "areaServed": "Worldwide",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "WordPress Theme Developer",
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
      "highPrice": 5000,
      "lowPrice": 1000,
      "offerCount": 4
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "27",
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
          "name": "Marketing Director at RetailBrand"
        },
        "reviewBody": "The WordPress theme developed for our business perfectly captures our brand identity. The attention to detail and performance optimization exceeded our expectations."
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
          "name": "CEO at EducationalPlatform"
        },
        "reviewBody": "Outstanding work on our custom WordPress theme. The performance improvements and modern design have significantly enhanced our user experience."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WordPress Theme Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Theme Development",
            "description": "Fully custom WordPress themes built from scratch"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Theme Customization",
            "description": "Modification and enhancement of existing WordPress themes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Child Theme Development",
            "description": "Custom child themes for extending parent theme functionality"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Theme Optimization",
            "description": "Performance optimization and responsive design implementation"
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
          "@id": "https://madebyaris.com/services/wordpress/theme-development",
          "name": "Theme Development"
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in your WordPress theme development service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our WordPress theme development service includes custom design implementation, responsive layouts, performance optimization, SEO-friendly structure, custom functionality integration, and comprehensive documentation. We also provide post-launch support and maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a custom WordPress theme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The development timeline typically ranges from 4-8 weeks, depending on the complexity of the design and required functionality. We provide a detailed timeline during the initial consultation based on your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support after the theme is launched?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive post-launch support including bug fixes, updates, and maintenance. We also provide documentation and training to help you manage your theme effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Are your WordPress themes optimized for performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All our themes are built with performance in mind, implementing best practices for code optimization, image optimization, caching, and Core Web Vitals compliance."
        }
      }
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "WordPress Theme Development",
    "description": "Professional WordPress theme development services including custom themes, child themes, and theme optimization."
  },
  "keywords": [
    "WordPress Theme Development",
    "Custom WordPress Themes",
    "Theme Customization",
    "WordPress Development",
    "Child Theme Development",
    "WordPress Design",
    "Theme Expert",
    "Custom Design",
    "Theme Optimization",
    "Enterprise WordPress"
  ],
  "url": "https://madebyaris.com/services/wordpress/theme-development",
  "potentialAction": {
    "@type": "CommunicateAction",
    "target": "https://madebyaris.com/contact",
    "name": "Contact for WordPress Theme Development"
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
          WordPress Theme Development
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
          Custom Themes • Modern Design • Performance
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0073AA', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Theme Expert
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Custom Design
          </div>
          <div style={{ background: '#14a800', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Enterprise Grade
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
    title: 'WordPress Theme Development | Custom Design & Development',
    description: 'Professional WordPress theme development services for unique, high-performance websites. Custom themes built with modern best practices and optimal user experience.',
    keywords: [
      'WordPress Theme Development',
      'Custom WordPress Themes',
      'Theme Customization',
      'WordPress Development',
      'Child Theme Development',
      'WordPress Design',
      'Theme Expert',
      'Custom Design',
      'Theme Optimization',
      'Enterprise WordPress'
    ],
    openGraph: {
      title: 'WordPress Theme Development | Custom Solutions',
      description: 'Expert WordPress theme development for unique websites.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'WordPress Theme Development | Custom Solutions',
      description: 'Expert WordPress theme development for unique websites.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/wordpress/theme-development'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

export default function WordPressThemeDevelopmentPage() {
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
                  <Brush className="w-4 h-4" />
                  <span className="text-sm font-medium">WordPress Theme Expert</span>
                </div>
                <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  WordPress Theme Development
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                  Custom WordPress themes that bring your design vision to life. Pixel-perfect implementation with optimal performance.
                </p>
              </div>

              {/* Introduction */}
              <div className="mt-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  My WordPress theme development service focuses on creating custom, high-performance themes 
                  that perfectly match your brand identity and business requirements. I follow WordPress 
                  best practices and coding standards to ensure your theme is maintainable, secure, and scalable.
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
                  Theme Development Process
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
                  Benefits of Custom Theme Development
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
                  Ready to Create Your Custom Theme?
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                  Let&apos;s discuss how I can help you build a beautiful, high-performance WordPress theme that perfectly represents your brand.
                </p>
                <Button size="lg" className="min-w-[200px] group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                  Start Your Theme Project
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