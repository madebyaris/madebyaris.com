import type { Metadata } from 'next'
import { Code2, ArrowRight, Rocket, Globe, Zap } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { ImageResponse } from 'next/og'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Next.js Development Services",
  "description": "Professional Next.js development services for modern web applications",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "url": "https://madebyaris.com"
  },
  "serviceType": "Web Development",
  "areaServed": "Worldwide"
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
          Next.js Development Services
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
          Modern Web Apps • React • TypeScript • Enterprise Solutions
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0070F3', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Next.js Expert
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Full-Stack Development
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
    title: 'Next.js Development Services | Modern Web Applications',
    description: 'Expert Next.js development services for modern web applications. Full-stack solutions with React, TypeScript, and enterprise-grade architecture.',
    keywords: [
      'Next.js Development',
      'React Development',
      'TypeScript Development',
      'Full Stack Development',
      'Enterprise Web Apps',
      'Modern Web Development',
      'Next.js Expert',
      'React Applications',
      'SSR Applications',
      'JAMstack Development'
    ],
    openGraph: {
      title: 'Next.js Development Services | Modern Web Apps',
      description: 'Expert Next.js development services for modern web applications.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Next.js Development Services | Modern Web Apps',
      description: 'Expert Next.js development services for modern web applications.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

const features = [
  {
    title: 'Modern Development',
    description: 'Building fast, modern web applications using the latest Next.js features and best practices.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Performance Focus',
    description: 'Optimized for speed with server-side rendering and static site generation.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Global Deployment',
    description: 'Seamless deployment to edge networks for optimal global performance.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'API Integration',
    description: 'Building robust API routes and integrating with external services.',
    icon: <Zap className="w-6 h-6" />,
  },
]

const benefits = [
  'Fast Loading',
  'SEO Optimized',
  'Type Safe',
  'Modern Stack',
  'Edge Ready',
  'API Routes',
  'SSR Support',
  'Easy Scaling',
]

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your needs and planning the optimal Next.js architecture.',
  },
  {
    title: 'Development',
    description: 'Building your application with clean, efficient, and maintainable code.',
  },
  {
    title: 'Testing & Optimization',
    description: 'Comprehensive testing and performance optimization.',
  },
  {
    title: 'Deployment & Support',
    description: 'Setting up CI/CD and providing ongoing maintenance support.',
  },
]

export default function NextjsDevelopmentPage() {
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
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">Next.js Expert</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Next.js Development
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                Modern web applications built with Next.js. Optimized for performance, SEO, and exceptional user experience.
              </p>
            </div>

            {/* Introduction */}
            <div className="mt-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                My Next.js development service focuses on creating modern, high-performance web 
                applications. Using the latest features and best practices, I build solutions that 
                are not only fast and reliable but also maintainable and scalable for future growth.
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
                Development Process
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
                Benefits of Next.js Development
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
                Ready to Build Your Next.js Project?
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                Let&apos;s discuss how Next.js can help you build a faster, more efficient web application.
              </p>
              <Button size="lg" className="min-w-[200px] group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}