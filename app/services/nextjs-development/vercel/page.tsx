import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Rocket, Globe, Zap, Shield, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const revalidate = 86400 // Revalidate daily

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Vercel Deployment Services for Next.js | Expert Deployment Solutions",
  "description": "Professional Vercel deployment services for Next.js applications. Optimize your deployment pipeline with edge functions, analytics, and enterprise-grade infrastructure.",
  "url": "https://madebyaris.com/services/nextjs-development/vercel",
  "keywords": [
    "Vercel Deployment",
    "Next.js Deployment",
    "Edge Functions",
    "Serverless Deployment",
    "CI/CD Pipeline",
    "Web Vitals Monitoring",
    "Performance Analytics",
    "Enterprise Deployment",
    "Global CDN",
    "Deployment Optimization"
  ],
  "mainEntity": {
    "@type": "Service",
    "name": "Vercel Deployment Services for Next.js",
    "serviceType": "Web Deployment",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Senior Full-Stack Developer",
      "url": "https://madebyaris.com"
    },
    "areaServed": "Worldwide",
    "description": "Expert Vercel deployment services for Next.js applications, optimizing performance, reliability, and global availability with enterprise-grade infrastructure.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    }
  }
}

// Generate Metadata
export function generateMetadata(): Metadata {
  return {
    title: 'Vercel Deployment Services for Next.js | Expert Solutions',
    description: 'Professional Vercel deployment services for Next.js applications. Optimize your deployment pipeline with edge functions, analytics, and enterprise-grade infrastructure.',
    keywords: [
      'Vercel Deployment',
      'Next.js Deployment',
      'Edge Functions',
      'Serverless Deployment',
      'CI/CD Pipeline',
      'Web Vitals Monitoring',
      'Performance Analytics',
      'Enterprise Deployment',
      'Global CDN',
      'Deployment Optimization'
    ],
    openGraph: {
      title: 'Vercel Deployment Services for Next.js | Expert Solutions',
      description: 'Professional Vercel deployment services for Next.js applications. Optimize your deployment pipeline with edge functions, analytics, and enterprise-grade infrastructure.',
      type: 'website',
      locale: 'en_US',
      siteName: 'Made by Aris'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Vercel Deployment Services for Next.js | Expert Solutions',
      description: 'Professional Vercel deployment services for Next.js applications. Optimize your deployment pipeline with edge functions, analytics, and enterprise-grade infrastructure.',
      creator: '@madebyaris'
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development/vercel'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

const features = [
  {
    title: 'Global Edge Network',
    description: 'Deploy your Next.js application to Vercel&apos;s global edge network for optimal performance worldwide.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Serverless Functions',
    description: 'Implement and optimize serverless functions for backend operations without managing infrastructure.',
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Set up continuous integration and deployment pipelines for automated testing and deployment.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Performance Analytics',
    description: 'Monitor and optimize your application&apos;s performance with Vercel&apos;s built-in analytics.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Security Configuration',
    description: 'Implement security best practices including headers, CSP, and environment variable management.',
    icon: <Shield className="w-6 h-6" />,
  },
]

const deliverables = [
  'Optimized Vercel deployment configuration',
  'Environment variable setup and management',
  'Custom domain configuration',
  'CI/CD pipeline implementation',
  'Performance monitoring and analytics',
  'Security hardening and best practices',
  'Deployment documentation and training',
  'Ongoing deployment support'
]

export default function VercelDeploymentPage() {
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
              <li className="text-foreground font-medium">Vercel Deployment</li>
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
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Vercel Expert</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400 mb-6">
              Vercel Deployment Services
            </h1>
            <div className="max-w-[700px] mx-auto">
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                Optimize your Next.js application deployment with Vercel&apos;s powerful platform.
                <span className="inline-block">Global edge network, serverless functions, and enterprise-grade infrastructure.</span>
              </p>
            </div>
          </header>

          {/* Introduction */}
          <article className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              My Vercel deployment service ensures your Next.js application is deployed with optimal 
              configuration for performance, reliability, and global availability. As a Vercel deployment 
              expert, I&apos;ll set up your project with best practices for continuous integration, environment 
              management, and performance monitoring.
            </p>
          </article>

          {/* Key Features Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="features-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Key Features
              </span>
              <h2 id="features-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Vercel Deployment Expertise
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

          {/* Why Choose Vercel Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="why-vercel-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                Benefits
              </span>
              <h2 id="why-vercel-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Why Choose Vercel for Next.js
              </h2>
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Built for Next.js</h3>
                  <p className="text-muted-foreground">Vercel is created by the same team behind Next.js, ensuring perfect compatibility and optimal performance for your Next.js applications.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Edge Network</h3>
                  <p className="text-muted-foreground">Deploy your application to a global edge network that ensures fast loading times for users worldwide, with automatic CDN configuration.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Preview Deployments</h3>
                  <p className="text-muted-foreground">Every pull request gets its own preview deployment, making it easy to review changes before they go to production.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                  <p className="text-muted-foreground">Built-in analytics for monitoring Core Web Vitals and user experience metrics to continuously improve your application.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Deploy Your Next.js App on Vercel?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let&apos;s optimize your deployment pipeline and ensure your application performs at its best on Vercel&apos;s platform.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Your Vercel Project
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