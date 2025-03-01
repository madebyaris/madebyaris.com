import type { Metadata } from 'next'
import { Zap, ArrowRight, Shield, Globe, Gauge } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { Card } from '../../../../components/ui/card'
import { ImageResponse } from 'next/og'

export const revalidate = 86400 // Revalidate daily

const features = [
  {
    title: 'Speed Optimization',
    description: 'Comprehensive performance tuning to make your WordPress site lightning fast.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Security Hardening',
    description: 'Advanced security measures to protect your site from threats and vulnerabilities.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'CDN Integration',
    description: 'Global content delivery network setup for faster loading worldwide.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Performance Monitoring',
    description: 'Continuous monitoring and optimization of site performance metrics.',
    icon: <Gauge className="w-6 h-6" />,
  },
]

const benefits = [
  'Faster Loading',
  'Better SEO',
  'Higher Security',
  'Global Reach',
  'Better UX',
  'Lower Bounce Rate',
  'Mobile Optimized',
  'Resource Efficient',
]

const processSteps = [
  {
    title: 'Performance Audit',
    description: 'Comprehensive analysis of current performance metrics and bottlenecks.',
  },
  {
    title: 'Optimization Plan',
    description: 'Detailed strategy for implementing performance improvements.',
  },
  {
    title: 'Implementation',
    description: 'Careful execution of optimization techniques and security measures.',
  },
  {
    title: 'Monitoring & Tuning',
    description: 'Ongoing performance monitoring and continuous optimization.',
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "WordPress Optimization Services",
  "description": "Professional WordPress optimization services for improved performance, speed, and security. Expert solutions for faster loading times and better user experience.",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "WordPress Performance Expert",
    "url": "https://madebyaris.com"
  },
  "mainEntity": {
    "@type": "Service",
    "name": "WordPress Optimization",
    "serviceType": "Website Optimization",
    "areaServed": "Worldwide",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "WordPress Performance Expert",
      "url": "https://madebyaris.com"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional WordPress optimization services",
      "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WordPress Optimization Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Speed Optimization",
            "description": "Comprehensive performance tuning and speed optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Hardening",
            "description": "Advanced security measures and vulnerability protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CDN Integration",
            "description": "Global content delivery network setup and configuration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Monitoring",
            "description": "Continuous monitoring and optimization of performance metrics"
          }
        }
      ]
    }
  },
  "about": {
    "@type": "Thing",
    "name": "WordPress Optimization",
    "description": "Professional WordPress optimization services including speed optimization, security hardening, CDN integration, and performance monitoring."
  },
  "keywords": [
    "WordPress Optimization",
    "Website Speed",
    "Performance Tuning",
    "Security Hardening",
    "WordPress Security",
    "Cache Setup",
    "CDN Integration",
    "Core Web Vitals",
    "WordPress Expert",
    "Site Optimization"
  ],
  "url": "https://madebyaris.com/services/wordpress/optimization",
  "potentialAction": {
    "@type": "LearnAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://madebyaris.com/contact",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "ContactPage",
      "name": "Contact for WordPress Optimization"
    }
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
          WordPress Optimization Services
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
          Performance • Security • Speed • Optimization
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0073AA', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Performance Expert
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Security Hardening
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
    title: 'WordPress Optimization Services | Performance & Security',
    description: 'Expert WordPress optimization services for improved speed, security, and user experience. Comprehensive optimization solutions for WordPress websites.',
    keywords: [
      'WordPress Optimization',
      'Website Speed',
      'Performance Tuning',
      'Security Hardening',
      'WordPress Security',
      'Cache Setup',
      'CDN Integration',
      'Core Web Vitals',
      'WordPress Expert',
      'Site Optimization'
    ],
    openGraph: {
      title: 'WordPress Optimization Services | Better Performance',
      description: 'Expert WordPress optimization services for better performance.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'WordPress Optimization Services | Better Performance',
      description: 'Expert WordPress optimization services for better performance.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/wordpress/optimization'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

export default function WordPressOptimizationPage() {
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
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Performance Expert</span>
                </div>
                <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  WordPress Optimization
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                  Boost your WordPress site&apos;s speed, security, and performance with expert optimization services.
                </p>
              </div>

              {/* Introduction */}
              <div className="mt-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  My WordPress optimization service focuses on enhancing every aspect of your website&apos;s 
                  performance. From speed optimization and security hardening to CDN integration and 
                  caching setup, I implement comprehensive solutions that make your site faster, 
                  more secure, and more efficient.
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

              {/* Optimization Process */}
              <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                  Optimization Process
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
                  Benefits of WordPress Optimization
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
                  Ready to Boost Your Site&apos;s Performance?
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                  Let&apos;s optimize your WordPress site for peak performance and security.
                </p>
                <Button size="lg" className="min-w-[200px] group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                  Start Optimization
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