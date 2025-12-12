'use client'

import Link from 'next/link'
import Image from 'next/image'
import { UpworkIcon } from "@/components/icons/upwork"
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { blurDataURLs } from '@/lib/utils'

interface ClientHeroProps {
  badge?: string;
  title?: string;
  description?: ReactNode;
}

export function ClientHero({
  badge = "12+ Years of Enterprise Experience",
  title = "Senior Full-Stack Developer & Web Architecture Specialist",
  description = (
    <>
      Hi! I&apos;m <span className="font-bold text-wp-navy dark:text-wp-gold">Aris</span>, architecting{" "}
      <span className="bg-wp-gold text-wp-gold-foreground dark:bg-wp-blue dark:text-wp-blue-foreground px-3 py-1.5 rounded-lg inline-flex items-center font-medium">
        scalable solutions
      </span>{" "}
      with Next.js, React, and WordPress for enterprise clients.
    </>
  )
}: ClientHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const tiltRef = useRef<HTMLDivElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll progress within hero section
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const total = Math.max(rect.height - 1, 1)
      const visible = Math.min(Math.max(-rect.top, 0), total)
      setScrollProgress(Math.min(Math.max(visible / total, 0), 1))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 3D tilt interaction for avatar card
  const handleTilt = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((y / rect.height) - 0.5) * -10 // rotateX
    const ry = ((x / rect.width) - 0.5) * 10  // rotateY
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`
  }, [])

  const resetTilt = useCallback(() => {
    const el = tiltRef.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
  }, [])

  return (
    <>
      {/* WordPress VIP inspired hero section */}
      <section ref={sectionRef} className="w-full min-h-[calc(100vh-5rem)] relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
        {/* Enhanced background with WordPress VIP styling */}
        <div className="absolute inset-0 -z-10">
          {/* Light mode background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-wp-sage/20 via-transparent to-wp-blue/10 dark:hidden"
            style={{
              contain: "paint",
            }}
          />
          {/* Dark mode background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-wp-blue/20 via-transparent to-wp-gold/10 hidden dark:block"
            style={{
              contain: "paint",
            }}
          />
          
          {/* Decorative elements with WordPress VIP colors */}
          <div className="absolute top-[15%] right-[15%] w-72 h-72 rounded-full bg-wp-blue/10 dark:bg-wp-gold/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-[20%] left-[10%] w-56 h-56 rounded-full bg-wp-gold/15 dark:bg-wp-blue/15 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-[60%] right-[5%] w-40 h-40 rounded-full bg-wp-sage/20 dark:bg-wp-navy/30 blur-2xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            {/* Split-screen layout (3/2) on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
              {/* Content - Takes 3 columns on desktop */}
              <div className="md:col-span-3 flex flex-col gap-6 md:gap-8">
                {/* Professional badge with WordPress VIP styling */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-navy/90 text-wp-navy-foreground dark:bg-wp-gold/90 dark:text-wp-gold-foreground mb-2 md:mb-4 w-fit backdrop-blur-sm shadow-wp-elevated animate-slide-down">
                  <div className="w-2 h-2 rounded-full bg-wp-gold dark:bg-wp-navy animate-pulse" />
                  <span className="text-sm font-semibold tracking-wide">{badge}</span>
                </div>
                
                {/* Main title with gradient text */}
                <h1 className="text-fluid-xl font-bold tracking-tight text-wp-navy dark:text-foreground [text-wrap:balance] animate-slide-up text-depth">
                  <span className="block">Senior Full-Stack</span>
                  <span className="block gradient-text">
                    Developer & Web
                  </span>
                  <span className="block">Architecture Specialist</span>
                </h1>
                
                {/* Description with enhanced styling */}
                <p className="text-lg md:text-xl text-wp-navy/80 dark:text-muted-foreground font-light [text-wrap:balance] leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
                  {description}
                </p>
                
                {/* WordPress VIP inspired CTA buttons */}
                <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6 animate-slide-up animation-delay-400">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-semibold rounded-xl bg-gradient-to-r from-wp-gold to-yellow-500 text-wp-gold-foreground hover:from-wp-gold/90 hover:to-yellow-500/90 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                  >
                    Contact Me
                    <span className="text-2xl">👋</span>
                  </Link>
                  <Link 
                    href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" 
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-semibold rounded-xl bg-wp-blue text-wp-blue-foreground hover:scale-105 shadow-lg hover:shadow-xl transition-transform duration-300 active:scale-95"
                  >
                    <span>UPWORK</span>
                    <UpworkIcon className="w-5 h-5 md:w-6 md:h-6" />
                  </Link>
                </div>
                
                {/* Professional tagline with elegant styling */}
                <div className="flex items-center gap-3 mt-6 md:mt-8 animate-slide-up animation-delay-600">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-px bg-wp-gold"></div>
                    <span className="text-sm font-medium text-wp-blue dark:text-wp-gold tracking-wider uppercase">
                      Next.js Agency Indonesia
                    </span>
                    <div className="w-12 h-px bg-wp-gold"></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced image section with WordPress VIP styling */}
              <div className="md:col-span-2 flex justify-center md:justify-end animate-scale-in animation-delay-800">
                <div
                  className="relative group tilt-3d"
                  ref={tiltRef}
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                >
                  {/* Main image container */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-wp-gold/80 dark:border-wp-blue/80 shadow-wp-elevated hover:shadow-wp-glow transition-all duration-500">
                    <Image
                      src="/aris.png"
                      alt="Aris Setiawan - Senior Full-Stack Developer"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                      quality={95}
                      sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
                      placeholder="blur"
                      blurDataURL={blurDataURLs.avatar}
                    />
                    
                    {/* Professional overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-wp-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Floating elements with WordPress VIP colors */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-wp-gold/20 dark:bg-wp-blue/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-wp-blue/20 dark:bg-wp-gold/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                  
                  {/* Professional badge floating element */}
                  <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-wp-sage/95 dark:bg-wp-navy/95 backdrop-blur-sm rounded-xl border border-wp-sage-foreground/20 dark:border-wp-navy-foreground/20 shadow-wp-elevated">
                    <span className="text-sm font-semibold text-wp-sage-foreground dark:text-wp-navy-foreground">12+ Years of Experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll progress indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[min(640px,90%)]">
              <div className="h-1.5 w-full bg-white/40 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-wp-gold to-wp-blue rounded-full transition-[width] duration-200"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Add default export for better HMR support
export default ClientHero; 