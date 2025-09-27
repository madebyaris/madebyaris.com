'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Code2, Layout, Server, MessageSquareHeart, ArrowRight } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export function ServicesAnimatedGrid() {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true,
  })

  const animationClass = isIntersecting
    ? 'opacity-100 translate-y-0 scale-100'
    : 'opacity-0 translate-y-10 scale-95'

  return (
    <div
      ref={ref}
      className={`grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto transition-all duration-700 ease-out ${animationClass}`}
    >
      {/* Next.js Development Card */}
      <div className="group relative">
        <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 to-transparent group-hover:from-wp-blue/10 transition-all duration-300"></div>
          
          {/* Icon with enhanced styling */}
          <div className="relative mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
            <Code2 className="w-8 h-8 text-wp-blue" />
          </div>
          
          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-blue dark:group-hover:text-wp-gold transition-colors duration-300">
              Next.js Development
            </h3>
            <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
              Modern React applications with server components and optimal performance.
            </p>
            
            {/* Features with enhanced styling */}
            <ul className="space-y-3 mb-8 relative">
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                Server Components
              </li>
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                Performance Optimization
              </li>
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                SEO Optimization
              </li>
            </ul>
          </div>
          
          <Button 
            asChild 
            variant="wp-outline" 
            size="lg" 
            className="w-full group-hover:bg-wp-blue group-hover:text-wp-blue-foreground group-hover:border-wp-blue transition-all duration-300 mt-auto relative z-10 pointer-events-auto"
          >
            <Link href="/services/nextjs-development">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* WordPress Development Card */}
      <div className="group relative">
        <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-br from-wp-gold/5 to-transparent group-hover:from-wp-gold/10 transition-all duration-300"></div>
          
          <div className="relative mb-6 p-4 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
            <Layout className="w-8 h-8 text-wp-gold" />
          </div>
          
          <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-gold transition-colors duration-300">
              WordPress Development
            </h3>
            <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
              Custom themes, plugins, and headless WordPress solutions.
            </p>
            
            <ul className="space-y-3 mb-8 relative">
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-blue mr-3"></div>
                Custom Themes
              </li>
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-blue mr-3"></div>
                Headless Solutions
              </li>
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-blue mr-3"></div>
                Plugin Development
              </li>
            </ul>
          </div>
          
          <Button 
            asChild 
            variant="wp-outline" 
            size="lg" 
            className="w-full group-hover:bg-wp-gold group-hover:text-wp-gold-foreground group-hover:border-wp-gold transition-all duration-300 mt-auto relative z-10 pointer-events-auto"
          >
            <Link href="/services/wordpress">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* PHP Development Card */}
      <div className="group relative">
        <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-br from-wp-sage/5 to-transparent group-hover:from-wp-sage/10 transition-all duration-300"></div>
          
          <div className="relative mb-6 p-4 bg-wp-sage/20 dark:bg-wp-sage/30 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
            <Server className="w-8 h-8 text-wp-sage-foreground" />
          </div>
          
          <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-sage dark:group-hover:text-wp-sage transition-colors duration-300">
              PHP Development
            </h3>
            <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
              Robust backend solutions and API development with modern PHP.
            </p>
            
            <ul className="space-y-3 mb-8 relative">
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                API Development
              </li>
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                Database Design
              </li>
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                Legacy Modernization
              </li>
            </ul>
          </div>
          
          <Button 
            asChild 
            variant="wp-outline" 
            size="lg" 
            className="w-full group-hover:bg-wp-sage group-hover:text-wp-sage-foreground group-hover:border-wp-sage transition-all duration-300 mt-auto relative z-10 pointer-events-auto"
          >
            <Link href="/services/php-development">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Vibe Code Friend Card */}
      <div className="group relative">
        <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 to-wp-gold/5 group-hover:from-wp-blue/10 group-hover:to-wp-gold/10 transition-all duration-300"></div>
          
          <div className="relative mb-6 p-4 bg-gradient-to-br from-wp-blue/10 to-wp-gold/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
            <MessageSquareHeart className="w-8 h-8 text-wp-blue group-hover:text-wp-gold transition-colors duration-300" />
          </div>
          
          <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-blue dark:group-hover:text-wp-gold transition-colors duration-300">
              Vibe Code Friend
            </h3>
            <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
              AI-powered coding assistance and infrastructure consulting.
            </p>
            
            <ul className="space-y-3 mb-8 relative">
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                AI IDE Tutoring
              </li>
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                Code Optimization
              </li>
              <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                Infrastructure Setup
              </li>
            </ul>
          </div>
          
          <Button 
            asChild 
            variant="wp-outline" 
            size="lg" 
            className="w-full group-hover:bg-gradient-to-r group-hover:from-wp-blue group-hover:to-wp-gold group-hover:text-white group-hover:border-transparent transition-all duration-300 mt-auto relative z-10 pointer-events-auto"
          >
            <Link href="/services/vibe-code-friend">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
