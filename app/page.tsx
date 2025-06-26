import Link from 'next/link'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import dynamic from 'next/dynamic'
import { Code2, Layout, Server, ArrowRight } from 'lucide-react'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { techLogos } from '@/components/ui/tech-logos'
import { structuredData } from '@/lib/structured-data'

// Segment Configuration
export const revalidate = 86400 // 24 hours

import { 
  HeroSkeleton, 
  CaseStudiesSkeleton, 
  BlogGridSkeleton 
} from '@/components/ui/skeleton-loaders'

// Loading fallbacks with proper skeleton loaders
const HeroFallback = () => <HeroSkeleton />
const CaseStudiesFallback = () => <CaseStudiesSkeleton />
const PostsFallback = () => <BlogGridSkeleton count={3} />

// Dynamically import heavy components with optimized loading
const ClientHeroLazy = dynamic(() => import('@/components/client-hero'), {
  loading: () => <HeroFallback />
})

const CaseStudiesWrapperLazy = dynamic(() => import('@/components/case-studies-wrapper'), {
  loading: () => <CaseStudiesFallback />
})

// Dynamically import HomeContent for Posts
const HomeContentLazy = dynamic(() => import('@/components/home-content'), {
  loading: () => <PostsFallback />
})

export async function generateMetadata() {
  return {
    title: 'Senior Full-Stack Developer | Next.js, React & WordPress Architect | Aris Setiawan',
    description: 'Senior Full-Stack Developer with 12+ years of experience in Next.js, React, WordPress, and PHP. Specializing in enterprise-scale web applications and headless CMS architecture.',
    keywords: [
      'Senior Next.js Developer',
      'Headless WordPress Expert',
      'Enterprise React Architect',
      'Full-Stack PHP Developer',
      'Web Architecture Specialist',
      'Senior Software Engineer',
    ],
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

// Optimize Posts component with error handling and fallback
async function Posts() {
  try {
    const posts = await getPosts({ 
      per_page: 3
    })
    return <HomeContentLazy type="posts" initialData={posts} />
  } catch (error) {
    console.error('Failed to load posts:', error)
    return <HomeContentLazy type="posts" initialData={[]} />
  }
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="flex flex-col w-full">
        {/* Hero section with optimized loading */}
        <Suspense fallback={<HeroFallback />}>
          <ClientHeroLazy 
            badge="12+ Years of Enterprise Experience"
            title="Senior Full-Stack Developer & Web Architecture Specialist"
            description={
              <>
                Hi! I&apos;m <span className="font-bold dark:text-white text-black">Aris</span>, architecting{" "}
                <span className="bg-neutral-800 text-white dark:bg-white dark:text-black px-2 py-1 rounded-md inline-flex items-center">
                  scalable solutions
                </span>{" "}
                with Next.js, React, and WordPress for enterprise clients.
              </>
            }
          />
        </Suspense>
        
        {/* Case studies section with enhanced design and performance optimization */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-950 dark:to-zinc-900/50 cv-auto">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <Suspense fallback={<CaseStudiesFallback />}>
              <CaseStudiesWrapperLazy />
            </Suspense>
          </div>
        </section>
        
        {/* Trusted By Section with optimized rendering */}
        <section className="w-full py-16 md:py-20 relative overflow-hidden cv-auto">
          {/* Enhanced background with subtle patterns */}
          
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="flex flex-col items-center">
              {/* Section heading with decorative elements */}
              <div className="relative mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                  Our Trusted Clients
                </h2>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500/50 rounded-full"></div>
              </div>
              
              {/* Logo carousel with enhanced styling */}
              <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md rounded-2xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
                <LogoCarousel 
                  columnCount={3}
                  logos={techLogos}
                />
              </div>
              
              {/* Testimonial or call to action */}
              <div className="mt-12 text-center max-w-2xl mx-auto">
                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-6">
                  Let&apos;s work together to build your next project with modern technologies and best practices.
                </p>
                <Link 
                  href="/contact" 
                  className="bg-black dark:bg-white rounded-full text-white dark:text-black px-6 py-3 text-base md:text-lg font-medium inline-flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  Contact Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services section with optimized rendering */}
        <section className="w-full py-16 md:py-20 cv-auto">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            {/* Section heading with decorative elements */}
            <div className="relative mb-12 text-center">
              <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Expert Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                My Services
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500/50 rounded-full"></div>
            </div>
            
            {/* Services grid with enhanced cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Web Development Card */}
              <div className="group">
                <div className="relative h-full p-6 md:p-8 bg-white dark:bg-zinc-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden">
                  {/* Card decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl w-fit">
                    <Layout className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-zinc-900 dark:text-white relative">
                    Web Development
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-6 relative">
                    Custom web applications built with Next.js, React, and modern web technologies for optimal performance and user experience.
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2 mb-6 relative">
                    <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Responsive Design
                    </li>
                    <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Performance Optimization
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Headless CMS Card */}
              <div className="group">
                <div className="relative h-full p-6 md:p-8 bg-white dark:bg-zinc-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden">
                  {/* Card decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 dark:bg-purple-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl w-fit">
                    <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-zinc-900 dark:text-white relative">
                    Headless CMS
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-6 relative">
                    Headless WordPress solutions with custom API endpoints and content delivery for maximum flexibility and performance.
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2 mb-6 relative">
                    <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Custom API Development
                    </li>
                    <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Content Modeling
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* API Development Card */}
              <div className="group">
                <div className="relative h-full p-6 md:p-8 bg-white dark:bg-zinc-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden">
                  {/* Card decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 dark:bg-green-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-xl w-fit">
                    <Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-zinc-900 dark:text-white relative">
                    API Development
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-6 relative">
                    Custom API development and integration with third-party services for seamless data flow and functionality.
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2 mb-6 relative">
                    <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      RESTful API Design
                    </li>
                    <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Third-party Integrations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* View all services button */}
            <div className="mt-12 text-center">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Blog section with optimized loading */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 cv-auto">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            {/* Section heading with decorative elements */}
            <div className="relative mb-12 text-center">
              <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                From My Blog
              </span>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Latest Articles
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500/50 rounded-full"></div>
            </div>
            
            {/* Blog posts with enhanced styling */}
            <div className="relative">
              {/* Decorative elements */}
              
              {/* Posts container with glass effect */}
              <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
                <Suspense fallback={<PostsFallback />}>
                  <Posts />
                </Suspense>
              </div>
            </div>
            
            {/* View all articles button */}
            <div className="mt-12 text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all hover:shadow-lg"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
