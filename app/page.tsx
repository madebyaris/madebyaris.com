import Link from 'next/link'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import dynamic from 'next/dynamic'
import { Code2, Layout, Server, FileCode, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { techLogos } from '@/components/ui/tech-logos'
import { structuredData } from '@/lib/structured-data'

export const revalidate = 3600


// Dynamically import heavy components
const ClientHeroLazy = dynamic(() => import('@/components/client-hero').then(mod => ({ default: mod.ClientHero })), { ssr: true })
const CaseStudiesWrapperLazy = dynamic(() => import('@/components/case-studies-wrapper').then(mod => ({ default: mod.CaseStudiesWrapper })), { ssr: true })

// Dynamically import HomeContent for Posts
const HomeContentLazy = dynamic(() => import('@/components/home-content').then(mod => ({ default: mod.HomeContent })), { ssr: true })

export const metadata = {
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

// Optimize Posts component
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
        <Suspense fallback={<div className="h-[calc(100vh-4rem)]" />}>
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
        
        <section className="w-full py-3 ">
          <div className="w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="h-[300px]" />}>
              <CaseStudiesWrapperLazy />
            </Suspense>
          </div>
        </section>
        
        <section className="w-full h-[500px]" />

        {/* Trusted By Section */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/80 to-transparent dark:via-zinc-900/10 backdrop-blur-xl" />
          <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full blur-3xl" />
          <div className="w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
              Our Trusted Clients
            </h2>
            <div className="flex justify-center">
              <LogoCarousel 
                columnCount={3}
                logos={techLogos}
              />
            </div>
            <p className="text-center text-zinc-600 dark:text-zinc-400 mt-12">
              Let&apos;s work together to build your next project
            </p>
            <div className="flex justify-center mt-8">
              <Link href="/contact">
                <Button className="bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-300 px-8 py-6">
                  <span className="text-lg font-medium text-white dark:text-zinc-900">Contact Me</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-24">
          <div className="w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
              Expert Services I Offer
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 text-center max-w-[700px] mx-auto mb-12">
              Comprehensive development solutions tailored for enterprise needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/services/nextjs-development" className="group">
                <Card className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Next.js Development</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Modern web applications built with Next.js for optimal performance and scalability.</p>
                    <Button variant="link" className="p-0 h-auto text-zinc-900 dark:text-zinc-50 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
              <Link href="/services/wordpress" className="group">
                <Card className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50">
                      <Layout className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">WordPress Solutions</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Expert WordPress development including custom themes, plugins, and headless solutions.</p>
                    <Button variant="link" className="p-0 h-auto text-zinc-900 dark:text-zinc-50 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
              <Link href="/services/php-development" className="group">
                <Card className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50">
                      <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">PHP Development</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Custom PHP applications and solutions built with modern practices and robust architecture.</p>
                    <Button variant="link" className="p-0 h-auto text-zinc-900 dark:text-zinc-50 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
              <Link href="/services/wordpress/headless-development" className="group">
                <Card className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50">
                      <FileCode className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Headless CMS</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Modern headless WordPress solutions with Next.js frontends for superior performance.</p>
                    <Button variant="link" className="p-0 h-auto text-zinc-900 dark:text-zinc-50 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full max-w-[980px] px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-24 mx-auto">
          <section>
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                  Latest Posts
                </h2>
                <p className="mt-1 text-muted-foreground">
                  My recent thoughts and insights
                </p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                View All →
              </Link>
            </div>
            <Suspense fallback={
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-[300px] animate-pulse rounded-lg bg-muted" />
                ))}
              </div>
            }>
              <Posts />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  )
}
