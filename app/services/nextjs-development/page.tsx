import type { Metadata } from 'next'
import { Code2, Layout, FileCode, Server, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { AuroraBackground } from '../../../components/ui/aurora-background'

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

const benefits = [
  'Improved Performance',
  'Better SEO',
  'Enhanced User Experience',
  'Faster Development',
  'Scalable Architecture',
  'Modern Development Stack',
  'Optimized Loading',
  'Enterprise-Ready',
]

export default function NextJsDevelopmentPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <AuroraBackground className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute inset-0" />
      </AuroraBackground>
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/90 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background/90" />
      </div>

      <div className="container relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Next.js Expert</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Next.js Development
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                Building modern, performant web applications with Next.js and React. Let&apos;s create something exceptional together.
              </p>
            </div>

            {/* Introduction */}
            <div className="mt-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Next.js is the leading React framework for production-ready applications. 
                I specialize in building high-performance web applications using Next.js, 
                leveraging its powerful features like Server Components, static site generation, 
                and API routes to deliver exceptional user experiences.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform hover:scale-110">
                      {feature.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{feature.title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Why Choose Next.js?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit}
                    className="p-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 text-center text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-2xl p-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Ready to Build Your Next.js Project?
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                Let&apos;s discuss how we can create a fast, modern, and user-friendly web application for your business.
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