import type { Metadata } from 'next'
import { Server, ArrowRight, CheckCircle2, Code2, Shield, Zap } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import Link from 'next/link'
import { ImageResponse } from 'next/og'

export const revalidate = 86400 // Revalidate daily

const features = [
  {
    title: 'RESTful APIs',
    description: 'Build modern, standards-compliant REST APIs with comprehensive documentation.',
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'GraphQL APIs',
    description: 'Implement flexible GraphQL APIs for more efficient data querying and manipulation.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'API Security',
    description: 'Implement robust authentication, authorization, and data protection measures.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'High Performance',
    description: 'Optimize API performance with caching, rate limiting, and efficient data handling.',
    icon: <Zap className="w-6 h-6" />,
  },
]

const deliverables = [
  'API Design & Architecture',
  'RESTful API Development',
  'GraphQL Implementation',
  'API Documentation',
  'Authentication & Authorization',
  'Rate Limiting',
  'Response Caching',
  'API Versioning',
  'Error Handling',
  'Performance Monitoring',
]

const technologies = [
  'PHP 8.x',
  'Laravel/Lumen',
  'Symfony',
  'GraphQL',
  'OAuth 2.0',
  'JWT',
  'Swagger/OpenAPI',
  'Redis',
  'Docker',
  'CI/CD Pipeline',
]

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "PHP API Development Services",
  "description": "Professional PHP API development services for RESTful and GraphQL APIs. Build secure, scalable, and high-performance APIs for your applications.",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior PHP Developer",
    "url": "https://madebyaris.com"
  },
  "serviceType": "API Development",
  "areaServed": "Worldwide",
  "offers": {
    "@type": "Offer",
    "description": "PHP API development services"
  },
  "keywords": [
    "PHP API development",
    "RESTful API",
    "GraphQL API",
    "API security",
    "API documentation",
    "PHP programmer",
    "Laravel API",
    "Symfony API"
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  const ogImage = new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #4F46E5, #7C3AED)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000',
            opacity: 0.2,
          }}
        />
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          PHP API Development
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: '#E5E7EB',
            marginBottom: '40px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Modern REST & GraphQL APIs
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )

  return {
    title: 'PHP API Development Services | REST & GraphQL Solutions',
    description: 'Expert PHP API development services. Build secure, scalable, and well-documented REST & GraphQL APIs using modern PHP frameworks and best practices.',
    keywords: [
      'PHP API development',
      'REST API development',
      'GraphQL API',
      'API integration',
      'secure APIs',
      'API documentation',
      'Laravel API',
      'Symfony API',
      'PHP development',
      'web services'
    ],
    openGraph: {
      title: 'PHP API Development Services',
      description: 'Build secure and scalable APIs with PHP.',
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PHP API Development Services',
      description: 'Build secure and scalable APIs with PHP.',
      images: [ogImage],
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/php-development/api-development'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

export default function ApiDevelopmentPage() {
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

        <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><Link href="/services" className="hover:text-indigo-600 dark:hover:text-indigo-400">Services</Link></li>
                <li><span className="px-2">/</span></li>
                <li><Link href="/services/php-development" className="hover:text-indigo-600 dark:hover:text-indigo-400">PHP Development</Link></li>
                <li><span className="px-2">/</span></li>
                <li className="text-zinc-900 dark:text-zinc-100">API Development</li>
              </ol>
            </nav>

            {/* Hero Section */}
            <header className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 mb-4">
                <Server className="w-4 h-4" />
                <span className="text-sm font-medium">API Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-purple-400 mb-6 tracking-tight">
                PHP API Development
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Build robust, secure, and scalable APIs using modern PHP frameworks and best practices. 
                From RESTful services to GraphQL endpoints, we create APIs that power your applications.
              </p>
            </header>

            {/* Main Features */}
            <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-lg"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </section>

            {/* What You Get */}
            <section className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                What You Get
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-2xl p-8 md:p-12 shadow-lg border border-indigo-100 dark:border-indigo-900/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Ready to Build Your API?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss your API requirements and create a robust solution that powers your applications.
              </p>
              <Link href="/contact">
                <Button size="lg" className="min-w-[200px] group bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105 transition-all duration-300 rounded-full">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  )
} 