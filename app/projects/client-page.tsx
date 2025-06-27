'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase, ShoppingCart, Film, Home, Globe, Music, Factory, Wrench, Utensils, Car, Zap, Trophy } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import { SectionWrapper } from '@/components/ui/section-wrapper'
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
      {/* Hero Section with new PageHero component */}
      <PageHero
        variant="default"
        badge={{ text: "Enterprise Solutions", icon: Trophy }}
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Client Projects</span>{" "}
            <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Portfolio</span>
          </>
        }
        description="Explore our showcase of enterprise-level web development solutions, delivering exceptional results for clients worldwide."
      >
        <Button asChild variant="wp-primary" size="xl">
          <Link href="/contact">
            Start a Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </PageHero>

      {/* Projects Grid Section */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Portfolio", icon: Briefcase }}
        title="Featured Projects"
        description="A collection of successful web development projects across various industries"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white/50 dark:bg-wp-navy/30 rounded-lg shadow-md h-96 animate-pulse"></div>
            ))
          )}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper
        variant="gradient"
        padding="large"
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Ready to Build Your</span>{" "}
            <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Next Project?</span>
          </>
        }
        description="Let's collaborate to create a high-performance, visually stunning solution that meets your business needs and exceeds your expectations."
      >
        <div className="text-center">
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
      </SectionWrapper>
    </div>
  )
} 