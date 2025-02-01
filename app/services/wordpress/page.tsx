import type { Metadata } from 'next'
import { Layout, Globe, FileCode, Code2, ArrowRight, Brush, Rocket, Zap } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WordPress Development Services - Aris Setiawan',
  description: 'Expert WordPress development services including custom themes, plugins, headless CMS, and optimization solutions.',
}

const services = [
  {
    title: 'Theme Development',
    description: 'Custom WordPress themes that perfectly align with your brand identity. From design to deployment, I create themes that stand out.',
    icon: <Brush className="w-6 h-6" />,
    href: '/services/wordpress/theme-development',
    features: ['Custom Design', 'Mobile-First', 'SEO Optimized', 'Fast Loading'],
  },
  {
    title: 'Plugin Development',
    description: 'Extend WordPress functionality with custom plugins that deliver exactly what your business needs.',
    icon: <FileCode className="w-6 h-6" />,
    href: '/services/wordpress/plugin-development',
    features: ['Custom Features', 'API Integration', 'Secure Code', 'Scalable'],
  },
  {
    title: 'Headless WordPress',
    description: 'Modern headless WordPress implementations with Next.js frontend for superior performance and flexibility.',
    icon: <Rocket className="w-6 h-6" />,
    href: '/services/wordpress/headless-development',
    features: ['Next.js Frontend', 'API-Driven', 'Better Performance', 'Modern Stack'],
  },
  {
    title: 'Performance Optimization',
    description: 'Boost your WordPress site&apos;s speed and security with comprehensive optimization services.',
    icon: <Zap className="w-6 h-6" />,
    href: '/services/wordpress/optimization',
    features: ['Speed Optimization', 'Security Hardening', 'CDN Setup', 'Caching'],
  },
]

const benefits = [
  {
    title: 'Expert Development',
    description: 'Years of experience in WordPress development, ensuring high-quality solutions.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored WordPress solutions that match your specific business needs.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Modern Approach',
    description: 'Using the latest WordPress technologies and development practices.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Global Standards',
    description: 'Following WordPress coding standards and best practices.',
    icon: <Globe className="w-6 h-6" />,
  },
]

export default function WordPressPage() {
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
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">WordPress Expert</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                WordPress Development
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                From custom themes to headless implementations, I provide comprehensive WordPress development services to help you get the most out of your website.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {services.map((service, index) => (
                <Link 
                  key={service.title} 
                  href={service.href}
                  className="group animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform group-hover:scale-110 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-900">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{service.title}</h2>
                      <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 pt-0 mt-auto">
                      <Button className="w-full group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-900 transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-24 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Why Choose My WordPress Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="text-center"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{benefit.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-2xl p-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                Let&apos;s discuss your WordPress project and create a solution that perfectly matches your needs.
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