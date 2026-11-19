import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Clock,
  Code2,
  Cpu,
  Home,
  Layers,
  Rocket,
  Search,
  Sparkles,
  Wrench,
} from 'lucide-react'
import type { Metadata } from 'next'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { HomeContent } from '@/components/home-content'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
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

const pageTitle = 'AI Engineer & Consultant: Indonesia & EU'
const pageDescription =
  'Senior AI software engineer and AI consultant in Indonesia working with EU and local teams. 13+ years shipping AI agents, LLM systems, Rust, Next.js, and apps.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/',
  keywords: [
    'AI engineer',
    'AI engineer Indonesia',
    'AI consultant',
    'AI software engineer',
    'AI developer',
    'hire AI developer',
    'remote AI engineer Europe',
    'Aris Setiawan',
  ],
})

const faqs: (FaqItem & { link?: { href: string; label: string } })[] = [
  {
    question: 'Why hire an AI engineer who also builds across the full stack?',
    answer:
      'Most AI pilots stall on data pipelines, auth, latency, database bottlenecks, and infrastructure. Because I have 13+ years shipping production web apps, APIs, databases, and Rust tooling, I wire the LLM harness directly into your real system and hand over code your team can maintain.',
    link: { href: '/ai-implementation', label: 'See how AI implementation works' },
  },
  {
    question: 'How much does it cost to work with you?',
    answer:
      'Scope drives the price, so I do not publish flat packages. AI implementation and full product builds start from $5,000. After a short scoping call you receive a written plan with milestones, trade-offs, and a clear quote before any code is written.',
    link: { href: '/blog/cost-to-hire-nextjs-developer', label: 'Read what drives project cost' },
  },
  {
    question: 'Can you join a European or Indonesian engineering team remotely?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia (UTC+7) and work directly inside European (EU and UK) and Indonesian engineering teams in English or Indonesian. My working hours (Monday to Saturday, 9:00 to 17:00 WIB) overlap with European mornings in CET and GMT for standups, PR reviews, and pairing.',
  },
  {
    question: 'What is the difference between Build and Level up?',
    answer:
      'Build means you hire me to join your team or lead a scoped build: production AI features, agents, MCP tools, SaaS products, apps, or migrations. Level up means your own engineers keep writing the code and I coach them to ship clean, reviewable work with Cursor on one real repository.',
  },
]

const structuredData = buildPageGraph({
  path: '/',
  name: `${pageTitle} | Aris Setiawan`,
  description: pageDescription,
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

// Flagship service cards
const services = [
  {
    icon: Sparkles,
    title: 'AI engineering and implementation',
    description:
      'Take an AI pilot to production, or ship agents, chatbots, MCP tools, and LLM workflows inside your own repo, with evals, logging, and spend caps.',
    href: '/ai-implementation',
  },
  {
    icon: Rocket,
    title: 'Product engineering',
    description:
      'SaaS, mobile apps, Rust CLI and desktop tools, commerce, and go-to-market software. I own the architecture and lead every build from scope to launch.',
    href: '/product-engineering',
  },
  {
    icon: Code2,
    title: 'Full-stack web and APIs',
    description:
      'Next.js, React, Vite, Fastify, PostgreSQL, MySQL, and headless WordPress engineered for fast mobile loads, clean structure, and reliable handoff.',
    href: '/services/nextjs-development',
  },
  {
    icon: Search,
    title: 'Technical SEO and performance',
    description:
      'Technical audits, structured data, Core Web Vitals fixes written directly in your codebase, and ongoing rank tracking powered by RankMySEO.',
    href: '/services/seo',
  },
]

const skillDomains = [
  {
    icon: Sparkles,
    title: 'AI and agent systems',
    summary: 'Production LLM harnesses, evals, and guardrails built for real user traffic.',
    items: ['OpenAI, Anthropic, MiniMax', 'Vercel AI SDK', 'AI agents & RAG', 'MCP servers', 'Evals & spend caps'],
  },
  {
    icon: Layers,
    title: 'Frontend and web architecture',
    summary: 'Fast interfaces and server-rendered apps that hold their search rankings.',
    items: ['TypeScript', 'Next.js App Router', 'React & Vite', 'Tailwind CSS', 'Technical SEO'],
  },
  {
    icon: Cpu,
    title: 'Backend, systems and data',
    summary: 'High-throughput services, native tooling, and databases tuned for real load.',
    items: ['Rust & Tauri', 'Node.js & Fastify', 'PHP & Laravel', 'PostgreSQL & MySQL', 'VPS & Vercel'],
  },
  {
    icon: Wrench,
    title: 'CMS and AI dev workflows',
    summary: 'Editorial systems teams already know, plus clean AI-assisted codebases.',
    items: ['Headless WordPress', 'Custom themes & plugins', 'WooCommerce', 'Cursor project rules', 'AI PR review'],
  },
]

const features = [
  {
    icon: Clock,
    text: '13+ years shipping production software, independent since 2015. You work directly with the engineer leading the architecture from scoping to launch.',
  },
  {
    icon: Award,
    text: 'First Cursor Ambassador in Indonesia, SpaceXAI Ambassador, and MiniMax Dev Community Expert. I build and ship with frontier AI models every week.',
  },
  {
    icon: Briefcase,
    text: 'Before going full-time independent I worked at Hongkiat.com, co-founded Raja Kreatif Asia, and served as senior full-stack developer at SAB Digital Marketing Agency.',
  },
  {
    icon: Home,
    text: 'Public proof you can inspect today: open-source Rust and MCP agent tools on GitHub, RankMySEO in production, and this headless WordPress and Next.js site.',
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
            className="inline-flex bg-white/60 max-w-full rounded-2xl sm:rounded-full mb-8 py-1.5 pr-5 pl-1.5 shadow-sm backdrop-blur-sm items-center"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <div className="w-6 h-6 shrink-0 rounded-full bg-zinc-900 text-white flex items-center justify-center mr-3">
              <Award className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-medium text-zinc-600 tracking-wide">
              <span className="text-zinc-900">
                AI engineer &amp; consultant · First Cursor Ambassador in Indonesia · Open for EU &amp; ID teams
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="leading-[0.95] lg:text-[5rem] text-5xl font-medium text-zinc-900 tracking-tighter mb-8">
            Senior AI
            {' '}
            <span className="block gradient-text font-light">Software Engineer</span>
            {' '}
            <span className="block">&amp; Consultant</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm text-zinc-500 font-medium max-w-lg mb-10 leading-relaxed tracking-wide border-l-2 border-zinc-200 pl-6">
            Hi, I&apos;m <span className="text-zinc-900 font-semibold">Aris Setiawan</span>, an AI engineer and AI developer in Indonesia with 13+ years shipping software. I join European (EU and UK) and Indonesian engineering teams for AI and app projects, owning everything from LLM agents and MCP servers to Next.js, React, Fastify, Rust, and databases.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Link
              href={contactHref('ai-implementation')}
              className="btn-primary hover:scale-[1.02] transition-all flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center justify-between"
            >
              <span className="text-sm font-medium tracking-tight">Send me your AI project</span>
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
                '--border-radius-before': '9999px',
              }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">Get Cursor mentoring for your team</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          </div>
          <p className="text-xs text-zinc-500 font-medium lg:mb-14 mb-10">
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
                  Time zone
                </p>
                <p className="text-sm text-zinc-900 font-medium">Indonesia (UTC+7) · EU morning overlap</p>
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
              alt="Aris Setiawan, senior AI software engineer and the first Cursor Ambassador in Indonesia"
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
                    '--border-radius-before': '9999px',
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
                className="self-end transform group-hover:translate-y-0 transition-transform duration-700 ease-out bg-gradient-to-b from-white/10 to-white/0 w-full max-w-[260px] rounded-xl p-4 backdrop-blur translate-y-4"
                style={{
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                  '--border-radius-before': '12px',
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
                  <span className="text-[9px] text-white/60 uppercase">Ships with</span>
                  <span className="text-sm text-white font-medium">AI Agents · Rust · Next.js · Cursor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-12 lg:my-16 opacity-60" />

      {/* Services Bento Grid Section */}
      <section className="flex flex-col gap-10 w-full relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
          <div className="max-w-2xl">
            <h2 className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
              AI engineering and
              <span className="gradient-text"> full-stack builds</span>
            </h2>
            <p className="leading-relaxed text-base font-normal text-zinc-500">
              Start where your team is stuck. Each page spells out what you get, how I work, and what it takes to begin.
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
        <div className="bento-grid grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bento-card group relative overflow-hidden"
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-12 lg:my-16 opacity-60" />

      {/* Full-stack skills behind the AI */}
      <section className="flex flex-col gap-10 w-full relative" aria-labelledby="home-skills">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
          <div className="max-w-2xl">
            <h2 id="home-skills" className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
              Skills across
              <span className="gradient-text"> the production stack</span>
            </h2>
            <p className="leading-relaxed text-base font-normal text-zinc-500">
              AI models only become useful once they are wired into auth, databases, APIs, UI, and infrastructure. Here is the toolkit I ship with every week.
            </p>
          </div>
          <Link
            href="/about"
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-normal text-zinc-900 pb-1"
          >
            Read my full background
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillDomains.map((domain) => (
            <div
              key={domain.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm flex flex-col"
            >
              <div className="p-2.5 bg-zinc-100 rounded-xl w-fit mb-4 text-zinc-700">
                <domain.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-tight">
                {domain.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                {domain.summary}
              </p>
              <ul className="flex flex-wrap gap-1.5 mt-auto">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="px-2.5 py-1 bg-zinc-100 rounded-full text-xs text-zinc-700 font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-12 lg:my-16 opacity-60" />

      {/* Open source proof */}
      <OpenSourceProjects
        id="home-open-source"
        title="Open-source AI and developer tools"
        intro="All my client work is under NDA, so my public proof is production code you can inspect on GitHub before you write to me."
      />

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-12 lg:my-16 opacity-60" />

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
                <span className="gradient-text"> for your engineering team</span>
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
                  '--border-radius-before': '9999px',
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-12 lg:my-16 opacity-60" />

      {/* Features Row */}
      <section className="flex flex-col gap-16 w-full relative">
        <div className="max-w-2xl px-1 -mb-6">
          <h2 className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
            Why teams
            <span className="gradient-text"> hire me</span>
          </h2>
          <p className="leading-relaxed text-base font-normal text-zinc-500">
            You work directly with the engineer who designs the architecture and ships the code, from the first scoping call to launch.
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
              backgroundSize: '40px 40px',
            }}
          />

          {/* Content Container */}
          <div className="flex flex-col p-8 md:p-12 lg:p-16 justify-center min-h-[500px] lg:min-h-[600px] relative">
            <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-3xl">
              Tell me what you&apos;re building
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl font-medium">
              A URL, a stalled AI pilot, or two sentences about your stack is enough. I read every request myself, reply within 24 hours, and send a written plan before any code if we go ahead.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href={contactHref('ai-implementation')}
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-12 lg:my-16 opacity-60" />

      {/* Recent Blog Posts */}
      <section className="flex flex-col gap-10 w-full relative cv-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
          <div className="max-w-2xl">
            <h2 className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
              Latest
              <span className="gradient-text"> engineering notes</span>
            </h2>
            <p className="leading-relaxed text-base font-normal text-zinc-500">
              AI agents, Cursor workflows, Next.js, headless WordPress, and technical SEO, written from production work I ship.
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
