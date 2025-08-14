'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase, ShoppingCart, Film, Home, Globe, Music, Factory, Wrench, Utensils, Car, Zap, Trophy } from 'lucide-react'
import dynamic from 'next/dynamic'
import { projects } from './server-page'

// Import ProjectCard as a client component
const ProjectCard = dynamic(() => import('@/components/project-card'), { 
  ssr: true,
  loading: () => <div className="bg-white/50 dark:bg-wp-navy/30 rounded-lg shadow-md h-96 animate-pulse"></div>
})

// Define category colors with improved icons using WordPress VIP colors
const categoryColors: Record<string, { bg: string, text: string, icon: React.ReactNode, hoverBg: string }> = {
  "Education": { 
    bg: "bg-wp-blue/10 dark:bg-wp-blue/20", 
    text: "text-wp-blue",
    icon: <Globe className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-blue/20"
  },
  "Agency": { 
    bg: "bg-wp-gold/10 dark:bg-wp-gold/20", 
    text: "text-wp-gold dark:text-wp-gold",
    icon: <Briefcase className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-gold/20"
  },
  "Marketplace": { 
    bg: "bg-wp-sage/10 dark:bg-wp-sage/20", 
    text: "text-wp-sage dark:text-wp-sage",
    icon: <Globe className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-sage/20"
  },
  "E-commerce": { 
    bg: "bg-wp-gold/10 dark:bg-wp-gold/20", 
    text: "text-wp-gold dark:text-wp-gold",
    icon: <ShoppingCart className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-gold/20"
  },
  "Entertainment": { 
    bg: "bg-wp-blue/10 dark:bg-wp-blue/20", 
    text: "text-wp-blue",
    icon: <Film className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-blue/20"
  },
  "Real Estate": { 
    bg: "bg-wp-sage/10 dark:bg-wp-sage/20", 
    text: "text-wp-sage dark:text-wp-sage",
    icon: <Home className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-sage/20"
  },
  "Industrial Supply": { 
    bg: "bg-wp-gold/10 dark:bg-wp-gold/20", 
    text: "text-wp-gold dark:text-wp-gold",
    icon: <Wrench className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-gold/20"
  },
  "Industrial": { 
    bg: "bg-wp-blue/10 dark:bg-wp-blue/20", 
    text: "text-wp-blue",
    icon: <Factory className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-blue/20"
  },
  "Music Publishing": { 
    bg: "bg-wp-sage/10 dark:bg-wp-sage/20", 
    text: "text-wp-sage dark:text-wp-sage",
    icon: <Music className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-sage/20"
  },
  "Music Industry": { 
    bg: "bg-wp-gold/10 dark:bg-wp-gold/20", 
    text: "text-wp-gold dark:text-wp-gold",
    icon: <Music className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-gold/20"
  },
  "Food & Beverage": { 
    bg: "bg-wp-blue/10 dark:bg-wp-blue/20", 
    text: "text-wp-blue",
    icon: <Utensils className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-blue/20"
  },
  "Rental Services": { 
    bg: "bg-wp-sage/10 dark:bg-wp-sage/20", 
    text: "text-wp-sage dark:text-wp-sage",
    icon: <Car className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-sage/20"
  },
  "Energy": { 
    bg: "bg-wp-gold/10 dark:bg-wp-gold/20", 
    text: "text-wp-gold dark:text-wp-gold",
    icon: <Zap className="w-4 h-4" />,
    hoverBg: "hover:bg-wp-gold/20"
  }
}

export default function ClientProjectsPage() {
  // Use state to control client-side rendering
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div suppressHydrationWarning>
      {/* Enhanced Projects Section */}
      <section className="w-full py-24 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Enhanced section heading matching homepage style */}
          <div className="relative mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-6 backdrop-blur-sm">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Enterprise Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-wp-navy dark:text-foreground">Client Projects</span>{" "}
              <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-wp-navy/70 dark:text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our showcase of enterprise-level web development solutions, delivering exceptional results for clients across various industries worldwide.
            </p>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
            
            {/* CTA Button */}
            <div className="mt-12">
              <Button asChild variant="wp-primary" size="xl" className="shadow-lg hover:shadow-xl">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {isClient ? projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
                categoryColors={categoryColors}
              />
            )) : (
              // Skeleton loading placeholders for server-side rendering
              Array.from({ length: 6 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="bg-white/50 dark:bg-wp-navy/30 rounded-lg shadow-md h-96 animate-pulse"></div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-gradient-to-br from-wp-blue/5 via-transparent to-wp-gold/5 dark:from-wp-blue/10 dark:to-wp-gold/10">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-wp-navy dark:text-foreground">Ready to Build Your</span>{" "}
              <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Next Project?</span>
            </h2>
            <p className="text-lg text-wp-navy/70 dark:text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let&apos;s collaborate to create a high-performance, visually stunning solution that meets your business needs and exceeds your expectations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Button asChild variant="wp-primary" size="xl">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="wp-secondary" size="xl">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 