import Link from 'next/link'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import dynamic from 'next/dynamic'
import { Code2, Layout, Server, ArrowRight, MessageSquareHeart, Sparkles, Trophy, Zap } from 'lucide-react'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { techLogos } from '@/components/ui/tech-logos'
import { structuredData } from '@/lib/structured-data'
import { Button } from '@/components/ui/button'

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
              <div className="w-full max-w-5xl mx-auto p-8 md:p-10 card-wp-elevated rounded-2xl shadow-wp-elevated dark:shadow-wp-elevated-dark border border-wp-sage/30 dark:border-wp-blue/20">
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

        {/* Services section with WordPress VIP inspired design */}
        <section className="w-full py-20 md:py-24 bg-gradient-wp-hero-light dark:bg-gradient-wp-hero cv-auto">
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
            
            {/* Enhanced services grid with WordPress VIP styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {/* Next.js Development Card */}
              <div className="group relative">
                <div className="relative h-full p-8 card-wp-elevated rounded-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 to-transparent group-hover:from-wp-blue/10 transition-all duration-300"></div>
                  
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-8 h-8 text-wp-blue" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-blue dark:group-hover:text-wp-gold transition-colors duration-300">
                    Next.js Development
                  </h3>
                  <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed">
                    Modern React applications with server components and optimal performance.
                  </p>
                  
                  {/* Features with enhanced styling */}
                  <ul className="space-y-3 mb-6 relative">
                    <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                      Server Components
                    </li>
                    <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                      Performance Optimization
                    </li>
                  </ul>
                  
                  <Button 
                    asChild 
                    variant="wp-outline" 
                    size="sm" 
                    className="w-full group-hover:bg-wp-blue group-hover:text-wp-blue-foreground group-hover:border-wp-blue transition-all duration-300"
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
                <div className="relative h-full p-8 card-wp-elevated rounded-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-wp-gold/5 to-transparent group-hover:from-wp-gold/10 transition-all duration-300"></div>
                  
                  <div className="relative mb-6 p-4 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Layout className="w-8 h-8 text-wp-gold" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-gold transition-colors duration-300">
                    WordPress Development
                  </h3>
                  <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed">
                    Custom themes, plugins, and headless WordPress solutions.
                  </p>
                  
                  <ul className="space-y-3 mb-6 relative">
                    <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-wp-blue mr-3"></div>
                      Custom Themes
                    </li>
                    <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-wp-blue mr-3"></div>
                      Headless Solutions
                    </li>
                  </ul>
                  
                  <Button 
                    asChild 
                    variant="wp-outline" 
                    size="sm" 
                    className="w-full group-hover:bg-wp-gold group-hover:text-wp-gold-foreground group-hover:border-wp-gold transition-all duration-300"
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
                <div className="relative h-full p-8 card-wp-elevated rounded-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-wp-sage/5 to-transparent group-hover:from-wp-sage/10 transition-all duration-300"></div>
                  
                  <div className="relative mb-6 p-4 bg-wp-sage/20 dark:bg-wp-sage/30 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-8 h-8 text-wp-sage-foreground" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-sage-foreground transition-colors duration-300">
                    PHP Development
                  </h3>
                  <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed">
                    Robust backend solutions and API development with modern PHP.
                  </p>
                  
                  <ul className="space-y-3 mb-6 relative">
                    <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                      API Development
                    </li>
                    <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                      Database Design
                    </li>
                  </ul>
                  
                  <Button 
                    asChild 
                    variant="wp-outline" 
                    size="sm" 
                    className="w-full group-hover:bg-wp-sage group-hover:text-wp-sage-foreground group-hover:border-wp-sage transition-all duration-300"
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
                <div className="relative h-full p-8 card-wp-elevated rounded-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 to-wp-gold/5 group-hover:from-wp-blue/10 group-hover:to-wp-gold/10 transition-all duration-300"></div>
                  
                  <div className="relative mb-6 p-4 bg-gradient-to-br from-wp-blue/10 to-wp-gold/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <MessageSquareHeart className="w-8 h-8 text-wp-blue group-hover:text-wp-gold transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-blue dark:group-hover:text-wp-gold transition-colors duration-300">
                    Vibe Code Friend
                  </h3>
                  <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed">
                    AI-powered coding assistance and infrastructure consulting.
                  </p>
                  
                  <ul className="space-y-3 mb-6 relative">
                    <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                      AI IDE Tutoring
                    </li>
                    <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                      Code Optimization
                    </li>
                  </ul>
                  
                  <Button 
                    asChild 
                    variant="wp-outline" 
                    size="sm" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-wp-blue group-hover:to-wp-gold group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    <Link href="/services/vibe-code-friend">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
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
