import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import { ArrowRight, ArrowUpRight, Code2, Globe, Server, Briefcase, Clock, Award, Home, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { HomeContent } from '@/components/home-content'
import { contactHref } from '@/lib/contact-services'

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

const pageTitle = 'Hire a Next.js & AI Developer'
const pageDescription =
  'Hire a Next.js developer with 13+ years of shipping: Aris Setiawan builds Next.js, WordPress, and AI products and trains teams on Cursor. Remote worldwide.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/',
})

const faqs: (FaqItem & { link?: { href: string; label: string } })[] = [
  {
    question: 'How much does it cost to hire a Next.js developer?',
    answer:
      'It depends on scope, so I don’t publish fixed prices. After a short scoping call you get a written plan with milestones and a quote before any code is written. My guide on hiring costs explains what moves the number.',
    link: { href: '/blog/cost-to-hire-nextjs-developer', label: 'Read the cost guide' },
  },
  {
    question: 'How long does a project take?',
    answer:
      'That also depends on scope, and I won’t guess a number before I see the project. The written plan lists milestones and dates up front, and you see a working demo every week.',
  },
  {
    question: 'Can I work with you remotely from outside Indonesia?',
    answer:
      'Yes. I’m based in Sidoarjo, Indonesia, and have worked remotely with teams worldwide since going independent in 2015. I work in English or Indonesian, Monday to Saturday, 9:00 to 17:00 WIB, and we set a weekly check-in time during scoping.',
  },
  {
    question: 'What is the difference between Build and Level up?',
    answer:
      'Build means you hire me to ship it: a Next.js site, a WordPress-to-Next.js migration, or an AI feature. Level up means your developers keep writing the code and I coach them to get reliable results from Cursor, starting on one real repo. If you’re unsure, send the project and I’ll tell you which one fits.',
  },
]

const structuredData = buildPageGraph({
  path: '/',
  name: `${pageTitle} | Aris Setiawan`,
  description: pageDescription,
  faqs: faqs.map(({ question, answer }) => ({ question, answer })),
})

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
    title: "Next.js development",
    description: "New products and WordPress-to-Next.js migrations that load fast on phones and keep their search rankings after launch.",
    href: "/services/nextjs-development",
    span: 1,
  },
  {
    icon: Sparkles,
    title: "AI product development",
    description: "Chatbots, agents, and LLM features that run inside your Next.js product and reach real users.",
    href: "/services/ai-development",
    span: 2,
  },
  {
    icon: Globe,
    title: "WordPress and headless WordPress",
    description: "Editors keep the wp-admin they know. I build custom themes and plugins, or a Next.js front end like the one this site runs on.",
    href: "/services/wordpress",
    span: 1,
  },
  {
    icon: Server,
    title: "PHP development",
    description: "Keep a legacy PHP app running, add an API to it, or plan its move to Laravel one piece at a time.",
    href: "/services/php-development",
    span: 1,
  },
]

const features = [
  {
    icon: Clock,
    text: "13+ years shipping web products, independent since 2015. You work with me directly from the first call to launch.",
  },
  {
    icon: Briefcase,
    text: "Before going independent I worked at Hongkiat.com, co-founded Raja Kreatif Asia, and was a senior full-stack developer at SAB Digital Marketing Agency.",
  },
  {
    icon: Award,
    text: "First Cursor Ambassador in Indonesia, SpaceXAI Ambassador, and MiniMax Dev Community Expert. I use Cursor on client work every week.",
  },
  {
    icon: Home,
    text: "This site runs on headless WordPress and Next.js on Vercel, so you can check how I build before you write to me.",
  },
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
            <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center mr-3">
              <Award className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-medium text-zinc-600 tracking-wide">
              <span className="text-zinc-900">First Cursor Ambassador in Indonesia · Taking new projects</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="leading-[0.95] lg:text-[5rem] text-5xl font-medium text-zinc-900 tracking-tighter mb-8">
            Next.js &amp; AI
            <span className="block gradient-text font-light">Product</span>
            <span className="block">Developer</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm text-zinc-500 font-medium max-w-md mb-10 leading-relaxed tracking-wide border-l-2 border-zinc-200 pl-6">
            Hi, I&apos;m <span className="text-zinc-900 font-semibold">Aris Setiawan</span>. Hire me to build your Next.js, headless WordPress, or AI product, or bring me in to coach your developers on Cursor so AI-written code passes review. 13+ years shipping, working remotely from Indonesia.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Link 
              href={contactHref('nextjs')}
              className="btn-primary hover:scale-[1.02] transition-all flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center justify-between"
            >
              <span className="text-sm font-medium tracking-tight">Send me your project</span>
              <span className="flex items-center justify-center rounded-full bg-black/10 px-3 py-1">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
            <Link 
              href="/services/vibe-code-friend"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{
                boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))',
                '--border-radius-before': '9999px'
              }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">Get Cursor mentoring for your team</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          </div>
          <p className="text-xs text-zinc-500 font-medium lg:mb-20 mb-12">
            I reply within 24 hours and tell you plainly whether I&apos;m the right fit.
          </p>

          {/* Footer Stats with Curved Lines */}
          <div className="flex flex-wrap gap-2 md:gap-6 mt-auto items-center">
            {/* Stat 1 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Experience
                </p>
                <p className="text-sm text-zinc-900 font-medium">13+ years</p>
              </div>
              <div className="curve-separator opacity-60 ml-4 md:ml-8" />
            </div>

            {/* Stat 2 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Independent
                </p>
                <p className="text-sm text-zinc-900 font-medium">Since 2015</p>
              </div>
              <div className="curve-separator md:ml-8 opacity-60 ml-4" />
            </div>

            {/* Stat 3 */}
            <div className="flex items-center group cursor-default">
              <div className="px-1 text-center">
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                  Location
                </p>
                <p className="text-sm text-zinc-900 font-medium">Sidoarjo, remote worldwide</p>
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
              alt="Aris Setiawan, Next.js and AI developer and the first Cursor Ambassador in Indonesia"
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
                  <span className="text-[10px] uppercase font-semibold text-white tracking-wide">Taking new projects</span>
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
                  <span className="text-[10px] text-emerald-400 font-mono">Remote</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-white/60 uppercase">Builds with</span>
                  <span className="text-sm text-white font-medium">Next.js · WordPress · Cursor</span>
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
              Hire a Next.js
              <span className="gradient-text"> and AI developer</span>
            </h2>
            <p className="leading-relaxed text-base font-normal text-zinc-500">
              Pick the closest fit. Each page shows what you get, how I work, and what it takes to start.
            </p>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-normal text-zinc-900 pb-1"
          >
            Compare all services
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
                Level up: Cursor mentoring
                <span className="gradient-text"> for your team</span>
              </h2>
              <p className="leading-relaxed text-base font-normal text-zinc-500">
                Your team bought Cursor seats and the PRs got messier. I set up project rules and a review habit on one real repo, then help the rest of the team adopt it. English or Indonesian.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start lg:items-end">
              <Link
                href="/services/vibe-code-friend"
                className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
                style={{
                  boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))',
                  '--border-radius-before': '9999px'
                }}
              >
                See how Cursor mentoring works
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="https://bootcamp.madebyaris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-orange-500 transition-colors"
              >
                Prefer a structured course? Try the bootcamp
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60" />

      {/* Features Row */}
      <section className="flex flex-col gap-16 w-full relative">
        <div className="max-w-2xl px-1 -mb-6">
          <h2 className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
            Why teams
            <span className="gradient-text"> hire me</span>
          </h2>
          <p className="leading-relaxed text-base font-normal text-zinc-500">
            You get one senior developer who scopes the work, writes the code, and answers your messages.
          </p>
        </div>

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

        {/* FAQ */}
        <div className="max-w-3xl w-full" aria-labelledby="home-faq">
          <h2 id="home-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
            Questions before you hire
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm open:shadow-md">
                <summary className="cursor-pointer list-none font-semibold text-zinc-900 flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-orange-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{faq.answer}</p>
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-500 hover:text-orange-600"
                  >
                    {faq.link.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </details>
            ))}
          </div>
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
            <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-3xl">
              Tell me what you&apos;re building
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl font-medium">
              A URL and two sentences is enough. I read every request myself, reply within 24 hours, and send a written plan before any code if we go ahead.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link 
                href={contactHref('nextjs')}
                className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Send me your project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services/vibe-code-friend"
                className="group flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Or get Cursor mentoring for your team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
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
              <span className="gradient-text"> guides</span>
            </h2>
            <p className="leading-relaxed text-base font-normal text-zinc-500">
              Next.js, Cursor, headless WordPress, and AI features, written from client work I ship.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-normal text-zinc-900 pb-1"
          >
            Read all guides
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
