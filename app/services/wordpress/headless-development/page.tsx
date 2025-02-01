import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Globe, Server, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Headless WordPress Development - Aris Setiawan',
  description: 'Modern headless WordPress development services with Next.js frontend integration',
}

const features = [
  {
    title: 'Next.js Integration',
    description: 'Seamless integration of WordPress backend with Next.js frontend for optimal performance.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'API Development',
    description: 'Custom WordPress REST API endpoints and GraphQL schema development.',
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'Global Performance',
    description: 'Lightning-fast content delivery through static generation and edge caching.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Headless CMS Setup',
    description: 'Complete WordPress configuration as a headless CMS with custom admin experience.',
    icon: <Globe className="w-6 h-6" />,
  },
]

export default function HeadlessWordPressPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Headless WordPress Development
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
              Modern decoupled WordPress solutions with Next.js frontend
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/10">
            <p className="text-lg leading-relaxed">
              Our headless WordPress development service combines the power of WordPress as a backend CMS 
              with modern frontend technologies like Next.js. This approach delivers exceptional performance, 
              superior user experiences, and maximum flexibility for your digital projects.
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

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Benefits of Headless WordPress</h2>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">Enhanced Performance</h3>
                <p className="text-muted-foreground">Faster page loads and better Core Web Vitals through static generation and edge caching.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">Improved Security</h3>
                <p className="text-muted-foreground">Reduced attack surface by separating the frontend from the WordPress backend.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">Better Scalability</h3>
                <p className="text-muted-foreground">Independent scaling of frontend and backend resources for optimal performance.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">Modern Development</h3>
                <p className="text-muted-foreground">Leverage modern frontend technologies while maintaining familiar WordPress backend.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              Start Your Headless WordPress Project
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