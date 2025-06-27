'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, Search, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { EnhancedCard } from '@/components/ui/enhanced-card'

// Remove metadata export since it can't be used in client components
// Metadata must be defined in a separate metadata.ts file or in layout.tsx

export default function NotFound() {
  return (
    <SectionWrapper variant="default" padding="large">
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
        {/* Background decorations with WordPress VIP colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-wp-navy/5 via-transparent to-wp-blue/5 dark:from-wp-navy/10 dark:to-wp-blue/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-wp-gold/5 via-transparent to-wp-sage/5 dark:from-wp-gold/10 dark:to-wp-sage/10"></div>
        
        {/* Animated glitch effect for 404 with WordPress VIP colors */}
        <div className="relative mb-12">
          <h1 className="text-[150px] md:text-[200px] font-bold text-wp-navy/10 dark:text-wp-blue/10 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[150px] md:text-[200px] font-bold text-wp-blue/20 animate-pulse select-none">404</h1>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 
              className="text-[150px] md:text-[200px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-wp-blue via-wp-sage to-wp-gold select-none"
              style={{
                position: 'relative',
                animation: 'glitch 1s infinite',
              }}
            >
              404
            </h1>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wp-gold/10 dark:bg-wp-gold/20 text-wp-gold rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-wp-gold/20">
            <AlertCircle className="w-4 h-4" />
            <span>Page Not Found</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wp-navy dark:text-foreground">
            Oops! This page seems to have wandered off
          </h2>
          
          <p className="text-wp-navy/70 dark:text-muted-foreground text-lg leading-relaxed mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable. Let's get you back on track!
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button asChild variant="wp-primary" size="lg">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild variant="wp-secondary" size="lg">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Visit Blog
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-wp-navy/20 hover:bg-wp-navy/5 dark:border-wp-blue/20 dark:hover:bg-wp-blue/10">
            <Link href="/contact">
              <Search className="h-4 w-4 mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>
        
        {/* Enhanced code snippet with WordPress VIP styling */}
        <EnhancedCard variant="glass" className="w-full max-w-md">
          <div className="bg-wp-navy/95 dark:bg-wp-navy/90 rounded-lg p-6 font-mono text-xs text-wp-sage shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-wp-navy/60 dark:text-gray-400 text-xs ml-2">Terminal</span>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <p 
                className="mb-2"
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  animation: 'typing 0.5s forwards',
                  animationDelay: '0.2s',
                }}
              >
                <span className="text-wp-blue">$</span> find / -name &quot;<span className="text-wp-gold">requested-page</span>&quot;
              </p>
              <p 
                className="mb-2 text-red-400"
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  animation: 'typing 0.5s forwards',
                  animationDelay: '1.2s',
                }}
              >
                Error: File not found in directory
              </p>
              <p 
                className="mb-2"
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  animation: 'typing 0.5s forwards',
                  animationDelay: '2.2s',
                }}
              >
                <span className="text-wp-blue">$</span> cd /home/user/recovery
              </p>
              <p 
                className="mb-2"
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  animation: 'typing 0.5s forwards',
                  animationDelay: '3.2s',
                }}
              >
                <span className="text-wp-blue">$</span> ./redirect --to=homepage
              </p>
              <p 
                className="text-wp-sage"
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  animation: 'typing 0.5s forwards',
                  animationDelay: '4.2s',
                }}
              >
                Redirecting to homepage... <span className="animate-pulse">▌</span>
              </p>
            </div>
          </div>
        </EnhancedCard>

        {/* Helpful links section */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold mb-4 text-wp-navy dark:text-foreground">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-wp-blue hover:text-wp-blue/80 transition-colors text-sm">
              Services
            </Link>
            <Link href="/projects" className="text-wp-blue hover:text-wp-blue/80 transition-colors text-sm">
              Projects
            </Link>
            <Link href="/about" className="text-wp-blue hover:text-wp-blue/80 transition-colors text-sm">
              About
            </Link>
            <Link href="/blog" className="text-wp-blue hover:text-wp-blue/80 transition-colors text-sm">
              Blog
            </Link>
          </div>
        </div>

        {/* Add keyframes for animations */}
        <style jsx global>{`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          
          @keyframes typing {
            from { width: 0; opacity: 1; }
            to { width: 100%; opacity: 1; }
          }
        `}</style>
      </div>
    </SectionWrapper>
  )
} 