import type { Metadata } from 'next'
import { Rocket, ArrowRight, Globe, Zap, Code2 } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { Card } from '../../../../components/ui/card'
import { ImageResponse } from 'next/og'

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
  "@type": "Service",
  "name": "Headless WordPress Development Services",
  "description": "Expert headless WordPress development with Next.js. Modern, fast, and secure web applications using WordPress as a headless CMS.",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior Headless WordPress Developer",
    "url": "https://madebyaris.com"
  },
  "serviceType": "Headless WordPress Development",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Headless WordPress Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Next.js Frontend",
        "description": "Modern React-based frontends"
      },
      {
        "@type": "Offer",
        "name": "WordPress API Development",
        "description": "Custom REST API endpoints"
      },
      {
        "@type": "Offer",
        "name": "Performance Optimization",
        "description": "Optimized headless setup"
      },
      {
        "@type": "Offer",
        "name": "Content Architecture",
        "description": "Structured content modeling"
      }
    ]
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
    title: 'Headless WordPress Development | Next.js & Modern Architecture',
    description: 'Expert headless WordPress development services combining WordPress CMS with Next.js frontend. Fast, secure, and modern web applications.',
    keywords: [
      'Headless WordPress',
      'Next.js WordPress',
      'WordPress API Development',
      'Modern WordPress',
      'Jamstack WordPress',
      'Headless CMS',
      'WordPress REST API',
      'React WordPress',
      'Enterprise WordPress',
      'Content Architecture'
    ],
    openGraph: {
      title: 'Headless WordPress Development | Modern Solutions',
      description: 'Expert headless WordPress development with Next.js frontend.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Headless WordPress Development | Modern Solutions',
      description: 'Expert headless WordPress development with Next.js frontend.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/wordpress/headless-development'
    }
  }
}

// Add script tag for structured data
export function generateStructuredData() {
  return {
    __html: JSON.stringify(structuredData)
  }
}

export default function HeadlessWordPressPage() {
  return (
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
  )
}