import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Database, Layout, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress Development Services - Aris Setiawan',
  description: 'Professional WordPress development services including custom themes, plugins, and headless solutions',
}

const features = [
  {
    title: 'Custom Theme Development',
    description: 'Tailored WordPress themes that perfectly match your brand identity and requirements.',
    icon: <Layout className="w-6 h-6" />,
    href: '/services/wordpress-development/theme-development',
  },
  {
    title: 'Plugin Development',
    description: 'Custom WordPress plugins to extend your website functionality.',
    icon: <Server className="w-6 h-6" />,
    href: '/services/wordpress-development/plugin-development',
  },
  {
    title: 'Headless WordPress',
    description: 'Modern decoupled WordPress solutions with Next.js frontend.',
    icon: <Code2 className="w-6 h-6" />,
    href: '/services/wordpress-development/headless-development',
  },
  {
    title: 'Performance Optimization',
    description: 'Speed optimization and security enhancements for WordPress sites.',
    icon: <Database className="w-6 h-6" />,
    href: '/services/wordpress-development/optimization',
  },
]

export default function WordPressDevelopmentPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              WordPress Development
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
              Expert WordPress development services for your digital presence
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/10">
            <p className="text-lg leading-relaxed">
              With over a decade of WordPress expertise, we offer comprehensive WordPress development services
              from custom themes and plugins to modern headless implementations. Our solutions are built with
              performance, security, and scalability in mind.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group p-6 bg-secondary/5 rounded-lg border border-secondary/10 hover:bg-secondary/10 transition-colors"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-primary">{feature.icon}</div>
                  <h2 className="text-xl font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              Start Your WordPress Project
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