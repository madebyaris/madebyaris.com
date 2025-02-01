import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Database, Layout, Globe, FileCode, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Aris Setiawan',
  description: 'Professional web development services including Next.js, WordPress, and PHP development',
}

const services = [
  {
    title: 'Next.js Development',
    description: 'Modern web applications built with React and Next.js for optimal performance and SEO.',
    icon: <Code2 className="w-6 h-6" />,
    href: '/services/nextjs-development',
  },
  {
    title: 'WordPress Development',
    description: 'Comprehensive WordPress solutions from custom themes to headless implementations.',
    icon: <Globe className="w-6 h-6" />,
    href: '/services/wordpress-development',
  },
  {
    title: 'PHP Development',
    description: 'Custom PHP applications and solutions for your business needs.',
    icon: <FileCode className="w-6 h-6" />,
    href: '/services/php-development',
  },
]

const wordPressServices = [
  {
    title: 'Theme Development',
    description: 'Custom WordPress themes tailored to your brand and requirements.',
    icon: <Layout className="w-6 h-6" />,
    href: '/services/wordpress-development/theme-development',
  },
  {
    title: 'Plugin Development',
    description: 'Custom WordPress plugins to extend your site\'s functionality.',
    icon: <Server className="w-6 h-6" />,
    href: '/services/wordpress-development/plugin-development',
  },
  {
    title: 'Headless WordPress',
    description: 'Modern headless WordPress implementations with Next.js frontend.',
    icon: <Code2 className="w-6 h-6" />,
    href: '/services/wordpress-development/headless-development',
  },
  {
    title: 'WordPress Optimization',
    description: 'Performance optimization and security enhancements for WordPress sites.',
    icon: <Database className="w-6 h-6" />,
    href: '/services/wordpress-development/optimization',
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Development Services
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
              Professional web development services tailored to your needs
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-primary">{service.icon}</div>
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* WordPress Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">WordPress Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wordPressServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group p-6 bg-secondary/5 rounded-lg border border-secondary/10 hover:bg-secondary/10 transition-colors"
                >
                  <div className="flex flex-col gap-4">
                    <div className="text-primary">{service.icon}</div>
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}