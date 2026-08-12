import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import { ArrowRight, ArrowUpRight, Code2, Globe, Server, Zap, Users, Clock, Award, Home, Sparkles } from 'lucide-react'
import { structuredData } from '@/lib/structured-data'
import { buildPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { HomeContent } from '@/components/home-content'

// Segment Configuration
export const revalidate = 86400 // 24 hours

// Loading fallbacks
const PostsFallback = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="animate-pulse bg-zinc-100 h-80 rounded-2xl" />
    ))}
  </div>
)

const pageTitle = 'Hire a Next.js & AI Developer | Cursor Ambassador | Aris Setiawan'

export async function generateMetadata() {
  const metadata = buildPageMetadata({
    title: 'Hire a Next.js & AI Developer | Cursor Ambassador',
    description:
      'Hire Aris Setiawan to build Next.js, WordPress, and AI products — or level up with Cursor mentoring. 13+ years. Cursor Ambassador Indonesia. Remote worldwide.',
    path: '/',
  })

  return {
    ...metadata,
    title: { absolute: pageTitle },
    openGraph: { ...metadata.openGraph, title: pageTitle },
    twitter: { ...metadata.twitter, title: pageTitle },
    keywords: [
      'Hire Next.js Developer',
      'Hire WordPress Developer',
      'Hire AI Developer',
      'Cursor Ambassador Indonesia',
      'Next.js Developer',
      'WordPress Developer',
      'AI Product Development',
      'Cursor Mentoring',
      'Remote Full-Stack Developer',
      'Headless WordPress',
      'Next.js Developer Indonesia',
      'WordPress Developer Indonesia',
    ],
  }
}

// Optimize Posts component with error handling and fallback
async function Posts() {
  let posts: Awaited<ReturnType<typeof getPosts>> = []
  try {
    posts = await getPosts({
      per_page: 3,
    })
  } catch (error) {
    console.error('Failed to load posts:', error)
  }

  return <HomeContent type="posts" initialData={posts} />
}

// Service card data
const services = [
  {
    icon: Code2,
    title: "Next.js Development",
    description: "Build blazing-fast React applications with server-side rendering, static generation, and modern web architecture.",
    href: "/services/nextjs-development",
    span: 1,
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Custom themes, plugins, and headless WordPress solutions for scalable content management systems.",
    href: "/services/wordpress",
    span: 2,
  },
  {
    icon: Server,
    title: "PHP Development",
    description: "Enterprise-grade PHP applications with Laravel, custom APIs, and database architecture.",
    href: "/services/php-development",
    span: 1,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Audit, analyze, and optimize your web applications for Core Web Vitals and user experience.",
    href: "/services/wordpress/optimization",
    span: 1,
  },
]

// Feature items
const features = [
  {
    icon: Clock,
    text: "13+ years building scalable web products for startups, agencies, and enterprises.",
  },
  {
    icon: Users,
    text: "Named collaborators include Hongkiat, SAB Digital, Raja Kreatif, and Ta-Wan.",
  },
  {
    icon: Award,
    text: "Cursor Ambassador Indonesia and MiniMax Dev Community Expert.",
  },
  {
    icon: Home,
    text: "Remote-first workflow with clear communication and timely delivery.",
  },
]

// Client logos (using placeholder for now)
const clients = [
  { name: "Hongkiat", logo: "/images/clients/learnislam.png" },
  { name: "SAB Digital", logo: "/images/clients/bacakomik.png" },
  { name: "Raja Kreatif", logo: "/images/clients/cipika.png" },
  { name: "Ta-Wan", logo: "/images/clients/ta-wan.png" },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-8 lg:pb-0 pt-4">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col pt-4 relative justify-center">
          {/* Social Proof Pill */}
          <div 
            className="inline-flex bg-white/60 w-max rounded-full mb-8 py-1.5 pr-5 pl-1.5 shadow-sm backdrop-blur-sm items-center"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
            }}
          >
            <div className="flex -space-x-2 mr-3">
              {clients.slice(0, 3).map((client, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-zinc-100 overflow-hidden">
                  <Image 
                    src={client.logo} 
                    alt={client.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-900 text-white flex items-center justify-center text-[9px] font-bold tracking-tighter">
                50+
              </div>
            </div>
            <span className="text-xs font-medium text-zinc-600 tracking-wide">
              <span className="text-zinc-900">Cursor Ambassador · MiniMax Expert · Available for hire</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="leading-[0.95] lg:text-[5rem] text-5xl font-medium text-zinc-900 tracking-tighter mb-8">
            AI-Optimized
            <span className="block gradient-text font-light">Full-Stack</span>
            <span className="block">Developer</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm text-zinc-500 font-medium max-w-md mb-10 leading-relaxed tracking-wide border-l-2 border-zinc-200 pl-6">
            Hi, I&apos;m <span className="text-zinc-900 font-semibold">Aris Setiawan</span>. Cursor Ambassador in Indonesia. I build Next.js, WordPress, and AI products for teams worldwide — and coach developers on practical Cursor workflows. 13+ years.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:mb-24 mb-16">
            <Link 
              href="/contact"
              className="btn-primary hover:scale-[1.02] transition-all flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center justify-between"
            >
              <span className="text-sm font-medium tracking-tight">Hire me to build</span>
              <span className="flex items-center justify-center rounded-full bg-black/10 px-3 py-1">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
            <Link 
              href="/cursor-ambassador"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{
                boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))',
                '--border-radius-before': '9999px'
              }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">Learn AI workflows</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          </div>

          {/* Footer Stats with Curved Lines */}
          <div className="flex flex-wrap gap-2 md:gap-6 mt-auto items-center">
            {/* Stat 1 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Experience
                </p>
                <p className="text-sm text-zinc-900 font-medium">13+ Years</p>
              </div>
              <div className="curve-separator opacity-60 ml-4 md:ml-8" />
            </div>

            {/* Stat 2 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Projects
                </p>
                <p className="text-sm text-zinc-900 font-medium">50+ Delivered</p>
              </div>
              <div className="curve-separator md:ml-8 opacity-60 ml-4" />
            </div>

            {/* Stat 3 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Location
                </p>
                <p className="text-sm text-zinc-900 font-medium">Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-0 relative group perspective-midrange">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/20 transition-all duration-700 ease-out border border-white/20">
            {/* Background Image */}
            <Image
              src="/aris.png"
              alt="Aris Setiawan - AI-Optimized Full-Stack Developer and Cursor Ambassador Indonesia"
              fill
              className="transition-transform duration-[2s] ease-in-out group-hover:scale-110 object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-zinc-900/10" />

            {/* Overlay Content Container */}
            <div className="flex flex-col p-8 absolute inset-0 justify-between">
              {/* Top Row: Status Badge */}
              <div className="flex items-start justify-between">
                <div 
                  className="flex gap-2 bg-gradient-to-b from-white/10 to-white/0 rounded-full py-1.5 px-3 items-center"
                  style={{
                    position: 'relative',
                    // @ts-expect-error CSS custom properties
                    '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                    '--border-radius-before': '9999px'
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-white tracking-wide">Available to Hire</span>
                </div>
              </div>

              {/* Bottom: Info Card */}
              <div 
                className="self-end transform group-hover:translate-y-0 transition-transform duration-700 ease-out bg-gradient-to-b from-white/10 to-white/0 w-full max-w-[240px] rounded-xl p-4 backdrop-blur translate-y-4"
                style={{
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                  '--border-radius-before': '12px'
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold">
                      A
                    </div>
                    <span className="text-xs text-white font-medium">Aris Setiawan</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Online</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-white/60 uppercase">Specialization</span>
                  <span className="text-sm text-white font-medium">Cursor · Next.js · WordPress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60" />

      {/* Services Bento Grid Section */}
      <section className="flex flex-col gap-10 w-full relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
          <div className="max-w-2xl">
            <h2 className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
              Expert
              <span className="gradient-text"> Development </span>
              Services
            </h2>
            <p className="leading-relaxed text-base font-normal text-zinc-500">
              Next.js, WordPress, AI features, and performance work — shipped to production, remote-friendly.
            </p>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-normal text-zinc-900 pb-1"
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`bento-card group relative overflow-hidden ${service.span === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3 text-zinc-400">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-orange-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60" />

      {/* Level Up Section */}
      <section className="flex flex-col gap-8 w-full relative">
        <div className="bento-card group relative overflow-hidden p-8 md:p-10">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3 text-zinc-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
                Level up with
                <span className="gradient-text"> AI workflows</span>
              </h2>
              <p className="leading-relaxed text-base font-normal text-zinc-500">
                Mentoring, Cursor workflows, and community learning for teams and builders who want to ship faster with AI.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cursor-ambassador"
                className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
                style={{
                  boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))',
                  '--border-radius-before': '9999px'
                }}
              >
                Cursor Ambassador
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/minimax-ambassador"
                className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
                style={{
                  boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))',
                  '--border-radius-before': '9999px'
                }}
              >
                MiniMax Expert
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="https://bootcamp.madebyaris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
                style={{
                  boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))',
                  '--border-radius-before': '9999px'
                }}
              >
                Bootcamp
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60" />

      {/* Features Row */}
      <section className="flex flex-col gap-16 w-full relative">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="text-zinc-900">
                <feature.icon className="w-7 h-7" />
              </div>
              <p className="leading-relaxed text-base font-medium text-zinc-900">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className="overflow-hidden min-h-[500px] lg:min-h-[600px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl">
          {/* Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* Content Container */}
          <div className="flex flex-col p-8 md:p-12 lg:p-16 justify-center min-h-[500px] lg:min-h-[600px] relative">
            <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-8 max-w-3xl">
              Ready to build with modern architecture — or level up your team&apos;s AI workflow?
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link 
                href="/contact"
                className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Hire me to build</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/cursor-ambassador"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Learn AI workflows →
              </Link>
            </div>

            {/* Trusted By */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs text-white/50 uppercase tracking-widest mb-4 font-medium">
                Previously worked with
              </p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                {clients.map((client, i) => (
                  <div key={i} className="h-8 w-20 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-white/80 text-xs font-medium">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60" />

      {/* Recent Blog Posts */}
      <section className="flex flex-col gap-10 w-full relative cv-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
          <div className="max-w-2xl">
            <h2 className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
              Latest
              <span className="gradient-text"> Insights</span>
            </h2>
            <p className="leading-relaxed text-base font-normal text-zinc-500">
              Technical articles, tutorials, and thoughts on web development.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-normal text-zinc-900 pb-1"
          >
            View all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <Suspense fallback={<PostsFallback />}>
          <Posts />
        </Suspense>
      </section>
    </>
  )
}
