import type { Metadata } from 'next'
import Link from 'next/link'
import { Rocket, Shield, Database, Gauge } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress Optimization Services - Aris Setiawan',
  description: 'Professional WordPress optimization services for improved performance and security',
}

const features = [
  {
    title: 'Performance Optimization',
    description: 'Comprehensive speed optimization to improve Core Web Vitals and user experience.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Security Hardening',
    description: 'Implementation of security best practices and vulnerability protection.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Database Optimization',
    description: 'Database cleanup, optimization, and performance tuning.',
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Load Time Reduction',
    description: 'Advanced caching, CDN integration, and asset optimization.',
    icon: <Gauge className="w-6 h-6" />,
  },
]

export default function WordPressOptimizationPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              WordPress Optimization
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
              Enhance your WordPress site&apos;s performance and security
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/10">
            <p className="text-lg leading-relaxed">
              Our WordPress optimization service focuses on improving your website&apos;s performance, 
              security, and overall user experience. We implement industry best practices and 
              cutting-edge optimization techniques to ensure your site runs at its best.
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

          {/* Optimization Process */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Our Optimization Process</h2>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">1. Performance Audit</h3>
                <p className="text-muted-foreground">Comprehensive analysis of your site&apos;s current performance metrics and security status.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">2. Optimization Implementation</h3>
                <p className="text-muted-foreground">Applying performance improvements and security measures based on audit findings.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">3. Testing & Monitoring</h3>
                <p className="text-muted-foreground">Thorough testing of optimizations and implementation of monitoring solutions.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">4. Maintenance & Updates</h3>
                <p className="text-muted-foreground">Ongoing maintenance to ensure continued optimal performance and security.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              Optimize Your WordPress Site
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