'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase, ShoppingCart, Film, Home, Globe } from 'lucide-react'
import { Sparkles } from '@/components/ui/sparkles'
import dynamic from 'next/dynamic'
import { projects } from './server-page'

// Import ProjectCard as a client component
const ProjectCard = dynamic(() => import('@/components/project-card'), { ssr: true })

// Define category colors with improved icons
const categoryColors: Record<string, { bg: string, text: string, icon: React.ReactNode, hoverBg: string }> = {
  "Education": { 
    bg: "bg-blue-100 dark:bg-blue-900/30", 
    text: "text-blue-800 dark:text-blue-300",
    icon: <Globe className="w-4 h-4" />,
    hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-800/50"
  },
  "Agency": { 
    bg: "bg-purple-100 dark:bg-purple-900/30", 
    text: "text-purple-800 dark:text-purple-300",
    icon: <Briefcase className="w-4 h-4" />,
    hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800/50"
  },
  "Marketplace": { 
    bg: "bg-emerald-100 dark:bg-emerald-900/30", 
    text: "text-emerald-800 dark:text-emerald-300",
    icon: <Globe className="w-4 h-4" />,
    hoverBg: "hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
  },
  "E-commerce": { 
    bg: "bg-amber-100 dark:bg-amber-900/30", 
    text: "text-amber-800 dark:text-amber-300",
    icon: <ShoppingCart className="w-4 h-4" />,
    hoverBg: "hover:bg-amber-200 dark:hover:bg-amber-800/50"
  },
  "Entertainment": { 
    bg: "bg-pink-100 dark:bg-pink-900/30", 
    text: "text-pink-800 dark:text-pink-300",
    icon: <Film className="w-4 h-4" />,
    hoverBg: "hover:bg-pink-200 dark:hover:bg-pink-800/50"
  },
  "Real Estate": { 
    bg: "bg-indigo-100 dark:bg-indigo-900/30", 
    text: "text-indigo-800 dark:text-indigo-300",
    icon: <Home className="w-4 h-4" />,
    hoverBg: "hover:bg-indigo-200 dark:hover:bg-indigo-800/50"
  }
}

export default function ClientProjectsPage() {
  return (
    <>
      {/* Hero Section with enhanced design */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_60%)]"></div>
        <div className="absolute w-[800px] h-[800px] -right-40 -top-40 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] -left-20 -bottom-20 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Enterprise Solutions
            </div>
            <Sparkles>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
                  Client Projects Portfolio
                </span>
              </h1>
            </Sparkles>
            <div className="max-w-[700px] mx-auto bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
              <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                Explore our showcase of enterprise-level web development solutions, 
                delivering exceptional results for clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid with enhanced cards */}
      <section className="py-8">
        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
                categoryColors={categoryColors}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with fixed button contrast */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-950 dark:to-zinc-900/50"></div>
        <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create a high-performance, visually stunning solution that meets your business needs and exceeds your expectations.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 dark:bg-primary dark:text-black dark:hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 