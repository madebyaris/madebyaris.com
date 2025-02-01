import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Database, Server, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PHP Development Services - Aris Setiawan',
  description: 'Professional PHP development services for custom web applications and solutions',
}

const features = [
  {
    title: 'Custom Web Applications',
    description: 'Develop tailored PHP applications that meet your specific business requirements.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'API Development',
    description: 'Create robust RESTful APIs and web services using modern PHP frameworks.',
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'Database Solutions',
    description: 'Design and implement efficient database architectures for your applications.',
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Security Implementation',
    description: 'Implement secure coding practices and robust authentication systems.',
    icon: <Shield className="w-6 h-6" />,
  },
]

export default function PhpDevelopmentPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              PHP Development
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
              Custom PHP solutions for your business needs
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/10">
            <p className="text-lg leading-relaxed">
              Our PHP development service focuses on creating robust, scalable web applications 
              and solutions. Whether you need a custom web application, API integration, or 
              database solution, we have the expertise to deliver high-quality results.
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

          {/* Development Process */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Our Development Process</h2>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">1. Requirements Analysis</h3>
                <p className="text-muted-foreground">Understanding your business needs and planning the technical architecture.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">2. Development</h3>
                <p className="text-muted-foreground">Writing clean, efficient code following PHP best practices and modern standards.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">3. Testing & Security</h3>
                <p className="text-muted-foreground">Comprehensive testing and security auditing to ensure robust performance.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">4. Deployment & Support</h3>
                <p className="text-muted-foreground">Smooth deployment process and ongoing technical support.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              Start Your PHP Project
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