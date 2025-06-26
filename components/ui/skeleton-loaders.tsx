import { cn } from '@/lib/utils'

// Base skeleton component with better animations
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 bg-[length:200%_100%] animate-shimmer rounded-md",
        className
      )}
      style={{
        animation: 'shimmer 2s infinite',
        backgroundSize: '200% 100%',
        backgroundPosition: '-200% 0'
      }}
      {...props}
    />
  )
}

// Hero section skeleton with exact dimensions
export function HeroSkeleton() {
  return (
    <section className="w-full min-h-[calc(100vh-5rem)] relative overflow-hidden">
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
            {/* Content skeleton - 3 columns */}
            <div className="md:col-span-3 flex flex-col gap-4 md:gap-6">
              <Skeleton className="w-64 h-8 mb-2 md:mb-4" />
              <Skeleton className="w-full h-16 md:h-20" />
              <Skeleton className="w-full h-12 md:h-16" />
              <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
                <Skeleton className="w-36 h-12 md:h-16 rounded-full" />
                <Skeleton className="w-32 h-12 md:h-16 rounded-full" />
              </div>
              <Skeleton className="w-48 h-4 mt-2 md:mt-4" />
            </div>
            
            {/* Image skeleton - 2 columns */}
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <Skeleton className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Case studies skeleton
export function CaseStudiesSkeleton() {
  return (
    <div className="w-full">
      {/* Header skeleton */}
      <div className="relative mb-8 md:mb-12 text-center">
        <Skeleton className="w-32 h-6 mx-auto mb-4" />
        <Skeleton className="w-48 h-10 mx-auto" />
      </div>
      
      {/* Introduction skeleton */}
      <div className="w-full max-w-4xl mx-auto mb-10 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Skeleton className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full" />
        </div>
        <div className="md:col-span-2 space-y-3">
          <Skeleton className="w-64 h-6" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-2/3 h-4" />
        </div>
      </div>
      
      {/* Carousel skeleton */}
      <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
        <Skeleton className="w-full aspect-[16/9] rounded-xl" />
      </div>
    </div>
  )
}

// Blog post card skeleton
export function BlogPostSkeleton() {
  return (
    <article className="group relative overflow-hidden rounded-lg border bg-background h-full">
      <Skeleton className="aspect-video w-full" />
      <div className="p-3 md:p-4 space-y-3">
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3">
          <Skeleton className="w-16 h-6 rounded-full" />
          <Skeleton className="w-20 h-6 rounded-full" />
        </div>
        <Skeleton className="w-24 h-4 mt-3" />
      </div>
    </article>
  )
}

// Project card skeleton
export function ProjectCardSkeleton() {
  return (
    <article className="group relative overflow-hidden rounded-lg border bg-background h-full">
      <Skeleton className="aspect-video w-full" />
      <div className="p-3 md:p-4 space-y-3">
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-2/3 h-4" />
        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3">
          <Skeleton className="w-12 h-5 rounded-full" />
          <Skeleton className="w-16 h-5 rounded-full" />
          <Skeleton className="w-14 h-5 rounded-full" />
        </div>
        <div className="flex gap-3 md:gap-4 mt-3">
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-24 h-4" />
        </div>
      </div>
    </article>
  )
}

// Grid of blog posts skeleton
export function BlogGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <BlogPostSkeleton key={i} />
      ))}
    </div>
  )
}

// Grid of projects skeleton
export function ProjectGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  )
}

// Services section skeleton
export function ServicesSkeleton() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="relative mb-12 text-center">
          <Skeleton className="w-32 h-6 mx-auto mb-4" />
          <Skeleton className="w-48 h-10 mx-auto" />
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-full p-6 md:p-8 bg-white dark:bg-zinc-800/60 rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50">
              <Skeleton className="w-16 h-16 rounded-xl mb-6" />
              <Skeleton className="w-full h-6 mb-4" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-3/4 h-4 mb-6" />
              <div className="space-y-2">
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-2/3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Trusted clients section skeleton
export function TrustedClientsSkeleton() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-12">
            <Skeleton className="w-48 h-10 mx-auto" />
          </div>
          
          <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50">
            <div className="grid grid-cols-3 gap-8 items-center">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-12 rounded-lg" />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <Skeleton className="w-full h-6 mb-6" />
            <Skeleton className="w-32 h-12 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Add shimmer animation to global CSS
export const shimmerCSS = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
` 