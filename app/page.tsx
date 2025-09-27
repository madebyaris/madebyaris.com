import Link from 'next/link'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import dynamic from 'next/dynamic'
import { Code2, Layout, Server, ArrowRight, MessageSquareHeart, Sparkles, Trophy, Zap, MessageSquare } from 'lucide-react'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { techLogos } from '@/components/ui/tech-logos'
import { structuredData } from '@/lib/structured-data'
import { Button } from '@/components/ui/button'
import { ServicesAnimatedGrid } from '@/components/services-animated-grid'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'

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
        {/* Hero section with WordPress VIP inspired design */}
        <Suspense fallback={<HeroFallback />}>
          <ClientHeroLazy 
            badge="12+ Years of Enterprise Experience"
            title="Senior Full-Stack Developer & Web Architecture Specialist"
            description={
              <>
                Hi! I&apos;m <span className="font-bold text-wp-navy dark:text-wp-gold">Aris</span>, architecting{" "}
                <span className="bg-wp-gold text-wp-gold-foreground dark:bg-wp-blue dark:text-wp-blue-foreground px-3 py-1.5 rounded-lg inline-flex items-center font-medium">
                  scalable solutions
                </span>{" "}
                with Next.js, React, and WordPress for enterprise clients.
              </>
            }
          />
        </Suspense>
        
        {/* Case studies section with WordPress VIP styling */}
        <section className="w-full py-20 md:py-24 bg-wp-sage/30 dark:bg-wp-navy/50 cv-auto">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <Suspense fallback={<CaseStudiesFallback />}>
              <CaseStudiesWrapperLazy />
            </Suspense>
          </div>
        </section>
        
        {/* Trusted By Section with WordPress VIP inspired design */}
        <section className="w-full py-20 md:py-24 relative overflow-hidden cv-auto">
          {/* WordPress VIP inspired background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-wp-sage/10 to-wp-blue/5 dark:from-background dark:via-wp-navy/20 dark:to-wp-gold/5"></div>
          
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="flex flex-col items-center">
              {/* Enhanced section heading with WordPress VIP styling */}
              <div className="relative mb-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-blue/10 text-wp-blue dark:bg-wp-gold/10 dark:text-wp-gold mb-6 backdrop-blur-sm">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wider uppercase">Trusted Partnership</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                  <span className="text-wp-navy dark:text-foreground">Our</span>{" "}
                  <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Trusted</span>{" "}
                  <span className="text-wp-navy dark:text-foreground">Clients</span>
                </h2>
                <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
                  Partnering with innovative companies to deliver exceptional digital experiences
                </p>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
              </div>
              
              {/* Enhanced logo carousel with WordPress VIP styling */}
              <div className="w-full max-w-5xl mx-auto p-8 md:p-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <LogoCarousel 
                  columnCount={3}
                  logos={techLogos}
                />
              </div>
              
              {/* Enhanced call to action section */}
              <div className="mt-16 text-center max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-wp-navy/80 dark:text-muted-foreground mb-8 font-light leading-relaxed">
                  Let&apos;s work together to build your next project with modern technologies and best practices.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <Button
                    asChild
                    variant="wp-primary"
                    size="xl"
                    className="shadow-wp-glow hover:shadow-wp-glow"
                  >
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="wp-secondary"
                    size="xl"
                    className="shadow-wp-glow-blue hover:shadow-wp-glow-blue"
                  >
                    <Link href="/services">
                      View Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-20 md:py-24 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900 cv-auto">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            {/* Enhanced section heading */}
            <div className="relative mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wider uppercase">Expert Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-wp-navy-foreground dark:text-foreground">My</span>{" "}
                <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Professional</span>{" "}
                <span className="text-wp-navy-foreground dark:text-foreground">Services</span>
              </h2>
              <p className="text-lg text-wp-navy-foreground/70 dark:text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade solutions tailored to your business needs
              </p>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
            </div>
            
            {/* Enhanced services grid with auto-responsive layout */}
            <ServicesAnimatedGrid />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-24 bg-gradient-to-br from-wp-gold/5 to-wp-blue/5 dark:from-wp-blue/10 dark:to-wp-navy/10">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="relative mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-6 backdrop-blur-sm">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wider uppercase">Client Success</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-wp-navy dark:text-foreground">What Our</span>{" "}
                <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Clients</span>{" "}
                <span className="text-wp-navy dark:text-foreground">Say</span>
              </h2>
              <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
                Real results from real partnerships
              </p>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
            </div>
            
            <TestimonialsCarousel />
            
            {/* Optional CTA */}
            <div className="text-center mt-12">
              <p className="text-lg text-wp-navy/70 dark:text-muted-foreground mb-6">
                Ready to join our satisfied clients?
              </p>
              <Button
                asChild
                variant="wp-primary"
                size="xl"
                className="shadow-wp-glow hover:shadow-wp-glow"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts section with enhanced styling */}
        <section className="w-full py-20 md:py-24 cv-auto">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="relative mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-sage/20 text-wp-sage-foreground dark:bg-wp-navy/20 dark:text-wp-navy-foreground mb-6 backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wider uppercase">Latest Insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-wp-navy dark:text-foreground">Recent</span>{" "}
                <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Blog Posts</span>
              </h2>
              <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
                Technical insights and development best practices
              </p>
            </div>
            
            <Suspense fallback={<PostsFallback />}>
              <Posts />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  )
}
