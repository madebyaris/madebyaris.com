import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Layout, FileCode, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Next.js Development Services - Aris Setiawan',
  description: 'Professional Next.js development services for high-performance web applications',
}

const features = [
  {
    title: 'Server Components',
    description: 'Leverage React Server Components for optimal performance and reduced client-side JavaScript.',
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'Static Site Generation',
    description: 'Build blazing-fast static sites with incremental static regeneration.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Full Stack Solutions',
    description: 'End-to-end Next.js applications with integrated API routes and database connectivity.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'TypeScript Integration',
    description: 'Type-safe development with full TypeScript support.',
    icon: <FileCode className="w-6 h-6" />,
  },
]

export default function NextJsDevelopmentPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Next.js Development
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
              Building modern, performant web applications with Next.js
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/10">
            <p className="text-lg leading-relaxed">
              Next.js is the leading React framework for production-ready applications. 
              We specialize in building high-performance web applications using Next.js, 
              leveraging its powerful features like Server Components, static site generation, 
              and API routes to deliver exceptional user experiences.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 bg-secondary/5 rounded-lg border border-secondary/10"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-primary">{feature.icon}</div>
                  <h2 className="text-xl font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              Start Your Next.js Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}