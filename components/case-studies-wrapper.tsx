'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'

const CaseStudiesCarousel = dynamic(
  () => import('@/components/case-studies-carousel'),
  { loading: () => <div className="h-[400px] bg-zinc-100/20 dark:bg-zinc-900/20 rounded-lg animate-pulse" /> }
)

export function CaseStudiesWrapper() {
  return (
    <div className="w-full">
      {/* Section heading with decorative elements */}
      <div className="relative mb-8 md:mb-12 text-center">
        <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
          Case Studies
        </h2>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500/50 rounded-full"></div>
      </div>
      
      {/* Introduction with photo and explanation */}
      <div className="w-full max-w-4xl mx-auto mb-10 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-xl">
            <Image
              src="/aris.png"
              alt="Aris Setiawan"
              fill
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 ring-4 ring-emerald-500/20 rounded-full"></div>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-3 md:mb-4">
            Crafting Digital Experiences
          </h3>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 mb-3 md:mb-4 leading-relaxed">
            As a senior full-stack developer, I&apos;ve had the privilege of working on diverse projects that solve complex problems. 
            These case studies showcase my approach to building scalable, performant, and user-friendly applications.
          </p>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Each project represents a unique challenge that was addressed through thoughtful architecture, 
            modern technologies, and close collaboration with stakeholders.
          </p>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="relative">
        {/* Glass container for carousel */}
        <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
          <CaseStudiesCarousel />
        </div>
      </div>
    </div>
  )
}

// Add default export for better HMR support
export default CaseStudiesWrapper; 