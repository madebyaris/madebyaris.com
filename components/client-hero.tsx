'use client'

import Link from 'next/link'
import Image from 'next/image'
import { UpworkIcon } from "@/components/icons/upwork"
import { ReactNode } from 'react'

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
      Hi! I&apos;m <span className="font-bold dark:text-white text-black">Aris</span>, architecting{" "}
      <span className="bg-neutral-800 text-white dark:bg-white dark:text-black px-2 py-1 rounded-md inline-flex items-center">
        scalable solutions
      </span>{" "}
      with Next.js, React, and WordPress for enterprise clients.
    </>
  )
}: ClientHeroProps) {
  return (
    <>
      {/* Modern hero section with improved visual design */}
      <section className="w-full min-h-[calc(100vh-5rem)] relative overflow-hidden">
        {/* Background gradient with subtle animation */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 via-blue-50/30 to-zinc-100/50 dark:from-zinc-900/50 dark:via-blue-900/10 dark:to-zinc-900/50 will-change-opacity"
            style={{
              contain: "paint",
            }}
          />
          <div className="absolute top-[10%] right-[10%] w-full max-w-[300px] aspect-square rounded-full bg-blue-200/20 dark:bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-[10%] left-[10%] w-full max-w-[200px] aspect-square rounded-full bg-purple-200/20 dark:bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
              {/* Content - Takes 3 columns on desktop */}
              <div className="md:col-span-3 flex flex-col gap-4 md:gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 text-white dark:bg-white/90 dark:text-black mb-2 md:mb-4 w-fit backdrop-blur-sm">
                  <span className="text-sm font-medium">{badge}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white [text-wrap:balance]">
                  {title}
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 font-light [text-wrap:balance] leading-relaxed">
                  {description}
                </p>
                
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
                  <Link 
                    href="/contact" 
                    className="bg-black dark:bg-white rounded-full text-white dark:text-black px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    Contact Me 👋
                  </Link>
                  <Link 
                    href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" 
                    target="_blank"
                    rel="noopener"
                    className="bg-[#14a800] hover:bg-[#14a800]/90 rounded-full text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    <span>UPWORK</span>
                    <UpworkIcon className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
                
                {/* Subtle tag line */}
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 md:mt-4">
                  Nextjs Agency Indonesia
                </p>
              </div>
              
              {/* Image - Takes 2 columns on desktop */}
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-black/80 dark:border-white/80 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/astro.png"
                    alt="Aris Setiawan - Senior Full-Stack Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 224px, (max-width: 1200px) 288px, 320px"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-xl"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Scroll</span>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Add default export for better HMR support
export default ClientHero; 