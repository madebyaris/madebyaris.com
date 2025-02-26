'use client'

import Link from 'next/link'
import { UpworkIcon } from "@/components/icons/upwork"
import Image from "next/image"
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
      <section className="w-full min-h-[calc(100vh-5rem)] relative mb-12 overflow-hidden">
        {/* Background gradient with subtle animation */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 via-blue-50/30 to-zinc-100/50 dark:from-zinc-900/50 dark:via-blue-900/10 dark:to-zinc-900/50 will-change-opacity"
            style={{
              contain: "paint",
            }}
          />
          <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-blue-200/20 dark:bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full bg-purple-200/20 dark:bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <div className="w-full max-w-[1100px] px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              {/* Content - Takes 3 columns on desktop */}
              <div className="md:col-span-3 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 text-white dark:bg-white/90 dark:text-black mb-4 w-fit backdrop-blur-sm">
                  <span className="text-sm font-medium">{badge}</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white [text-wrap:balance]">
                  {title}
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-light [text-wrap:balance] leading-relaxed">
                  {description}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link 
                    href="/contact" 
                    className="bg-black dark:bg-white rounded-full text-white dark:text-black px-8 py-4 text-lg font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    Contact Me 👋
                  </Link>
                  <Link 
                    href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" 
                    target="_blank"
                    rel="noopener"
                    className="bg-[#14a800] hover:bg-[#14a800]/90 rounded-full text-white px-8 py-4 text-lg font-medium flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    <span>UPWORK</span>
                    <UpworkIcon className="w-5 h-5" />
                  </Link>
                </div>
                
                {/* Subtle tag line */}
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
                  Nextjs Agency Indonesia
                </p>
              </div>
              
              {/* Image - Takes 2 columns on desktop */}
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-black/80 dark:border-white/80 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/astro.png"
                    alt="Aris"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QOQvhAAAAABJRU5ErkJggg=="
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
              <svg className="w-6 h-6 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 