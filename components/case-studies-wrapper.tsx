'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Users, Award, Zap } from 'lucide-react'
import { blurDataURLs } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const CaseStudiesCarousel = dynamic(
  () => import('@/components/case-studies-carousel'),
  { loading: () => <div className="h-[400px] bg-zinc-100/20 dark:bg-zinc-900/20 rounded-lg animate-pulse" /> }
)

export function CaseStudiesWrapper() {
  return (
    <div className="w-full">
      {/* Featured Case Studies - Moved to top */}
      <div className="relative mb-16">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-wp-sage/10 via-transparent to-wp-blue/10 dark:from-wp-navy/20 dark:via-transparent dark:to-wp-gold/10 rounded-3xl"></div>
        
        {/* Glass container for carousel */}
        <div className="relative bg-white/40 dark:bg-wp-navy/30 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-wp-sage/30 dark:border-wp-blue/20">
          {/* Section header inside container */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-6 backdrop-blur-sm border border-wp-gold/20 dark:border-wp-blue/20">
              <Award className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Featured Portfolio</span>
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

      {/* Enhanced section heading with modern design */}
      <div className="relative mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-8 backdrop-blur-sm border border-wp-gold/20 dark:border-wp-blue/20">
          <Award className="w-5 h-5" />
          <span className="text-sm font-bold tracking-wider uppercase">Portfolio Overview</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-wp-navy dark:text-foreground">Success</span>{" "}
          <span className="bg-gradient-to-r from-wp-gold via-wp-blue to-wp-gold bg-clip-text text-transparent">Stories</span>
        </h2>
        <p className="text-xl md:text-2xl text-wp-navy/70 dark:text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
          Transforming ideas into exceptional digital experiences that drive real business results
        </p>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-wp-gold via-wp-blue to-wp-gold rounded-full"></div>
      </div>
      
      {/* Statistics cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { icon: <Users className="w-6 h-6" />, number: "50+", label: "Happy Clients" },
          { icon: <Award className="w-6 h-6" />, number: "100+", label: "Projects Delivered" },
          { icon: <Star className="w-6 h-6" />, number: "99%", label: "Client Satisfaction" },
          { icon: <Zap className="w-6 h-6" />, number: "100%", label: "Free-Caffeine" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="group relative p-6 bg-white/60 dark:bg-wp-navy/40 backdrop-blur-xl rounded-2xl border border-wp-sage/30 dark:border-wp-blue/20 hover:border-wp-gold/50 dark:hover:border-wp-gold/40 transition-all duration-300 hover:scale-105 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-wp-gold/5 to-wp-blue/5 dark:from-wp-gold/10 dark:to-wp-blue/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/20 dark:text-wp-blue mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-wp-navy dark:text-wp-gold mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-wp-navy/70 dark:text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Introduction with enhanced design */}
      <div className="w-full max-w-5xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-wp-gold/20 via-wp-blue/20 to-wp-gold/20 rounded-full blur-2xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-wp-gold/30 to-wp-blue/30 rounded-full blur-xl"></div>
            
            {/* Main image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-wp-gold/30 dark:border-wp-blue/30 shadow-2xl">
              <Image
                src="/aris.png"
                alt="Aris Setiawan - Senior Full-Stack Developer"
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL={blurDataURLs.avatar}
              />
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-wp-gold text-wp-gold-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                12+<br/>Years
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-wp-blue text-wp-blue-foreground rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-wp-navy dark:text-foreground mb-6">
            Crafting Digital Excellence
          </h3>
          <div className="space-y-4 text-lg text-wp-navy/80 dark:text-muted-foreground leading-relaxed">
            <p>
              As a <span className="font-semibold text-wp-gold">senior full-stack developer</span> with over 12 years of experience, 
              I specialize in building enterprise-scale applications that combine cutting-edge technology with exceptional user experience.
            </p>
            <p>
              Each project represents a unique journey of <span className="font-semibold text-wp-blue dark:text-wp-gold">innovation, collaboration, and technical excellence</span>, 
              delivering solutions that not only meet today's requirements but scale for tomorrow's growth.
            </p>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            <Button 
              asChild 
              variant="wp-primary" 
              size="lg"
              className="shadow-wp-glow hover:shadow-wp-glow group"
            >
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="wp-outline" 
              size="lg"
              className="hover:bg-wp-blue hover:text-wp-blue-foreground hover:border-wp-blue"
            >
              <Link href="/contact">
                Start a Project
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