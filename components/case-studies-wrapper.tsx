'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CaseStudiesCarousel = dynamic(
  () => import('@/components/case-studies-carousel'),
  { loading: () => <div className="h-[400px] bg-zinc-100/20 dark:bg-zinc-900/20 rounded-lg animate-pulse" /> }
)

export function CaseStudiesWrapper() {
  return (
    <div className="w-full">
      {/* Featured Case Studies */}
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-wp-sage/10 via-transparent to-wp-blue/10 dark:from-wp-navy/20 dark:via-transparent dark:to-wp-gold/10 rounded-3xl"></div>
        
        {/* Glass container for carousel */}
        <div className="relative bg-white/40 dark:bg-wp-navy/30 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-wp-sage/30 dark:border-wp-blue/20">
          {/* Section header inside container */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-6 backdrop-blur-sm border border-wp-gold/20 dark:border-wp-blue/20">
              <Award className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Featured Section</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-wp-navy dark:text-foreground">Featured Case Studies</span>
            </h2>
            <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
              Explore detailed breakdowns of successful projects and the impact they created
            </p>
          </div>
          
          <CaseStudiesCarousel />
          
          {/* View all projects link */}
          <div className="text-center mt-8">
            <Button 
              asChild 
              variant="wp-secondary" 
              size="lg"
              className="shadow-wp-glow-blue hover:shadow-wp-glow-blue group"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add default export for better HMR support
export default CaseStudiesWrapper; 