import type { Metadata } from 'next'
import Link from 'next/link'
import { Layout, Palette, FileCode, Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress Theme Development - Aris Setiawan',
  description: 'Custom WordPress theme development services for unique and performant websites',
}

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

export default function WordPressThemeDevelopmentPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              WordPress Theme Development
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
              Custom WordPress themes that bring your design vision to life
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/10">
            <p className="text-lg leading-relaxed">
              Our WordPress theme development service focuses on creating custom, high-performance themes 
              that perfectly match your brand identity and business requirements. We follow WordPress 
              best practices and coding standards to ensure your theme is maintainable, secure, and scalable.
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

          {/* Process Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Our Development Process</h2>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">1. Requirements Analysis</h3>
                <p className="text-muted-foreground">We begin by understanding your specific needs, design requirements, and functionality expectations.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">2. Design Integration</h3>
                <p className="text-muted-foreground">Converting your design into a responsive, WordPress-compatible theme structure.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">3. Development & Testing</h3>
                <p className="text-muted-foreground">Building the theme with clean, efficient code and thorough testing across devices.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">4. Optimization & Launch</h3>
                <p className="text-muted-foreground">Performance optimization, security checks, and deployment to your live site.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              Start Your Theme Project
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