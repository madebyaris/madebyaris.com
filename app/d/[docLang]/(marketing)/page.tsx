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
import { CtaBand } from '@/components/page/cta-band'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // 24 hours

const PostsFallback = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="animate-pulse bg-[#F3F1EB] border border-[#E6E4DD] h-80 rounded-xl" />
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

const proofMetrics = [
  { value: '13+ yrs', label: 'Shipping production software', note: 'Independent since 2015' },
  { value: '480+ ★', label: 'Open-source AI & Rust code', note: 'nca, Spec Kit, Chaca, MCP' },
  { value: '700K → 1.8M', label: 'Client Google impressions / 28d', note: 'Plus RankMySEO built in-house' },
  { value: 'UTC+7', label: 'Direct EU & SG morning overlap', note: 'English & Bahasa Indonesia' },
]

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
      'Build means you hire me to join your team or lead a scoped build: production AI features, agents, MCP tools, SaaS products, apps, or GEO/SEO engineering. Level up means your own engineers keep writing the code and I coach them to ship clean, reviewable work with Cursor on one real repository.',
  },
]

const structuredData = buildPageGraph({
  path: '/',
  name: `${pageTitle} | Aris Setiawan`,
  description: pageDescription,
})

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

const services = [
  {
    code: '01',
    icon: Sparkles,
    title: 'AI engineering and implementation',
    description:
      'Take an AI pilot to production, or ship agents, chatbots, MCP tools, and LLM workflows inside your own repo, with evals, logging, and spend caps.',
    href: '/ai-implementation',
    tag: 'Pilot to production · Retainer',
  },
  {
    code: '02',
    icon: Search,
    title: 'AI search (GEO & AEO) and technical SEO',
    description:
      'Get cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews with schema, llms.txt, and codebase fixes tracked in RankMySEO.',
    href: '/services/ai-search-geo-aeo',
    tag: 'Free RankMySEO AI snapshot',
  },
  {
    code: '03',
    icon: Rocket,
    title: 'Product and app engineering',
    description:
      'SaaS, mobile apps, Rust CLI and desktop tools, commerce, and go-to-market software. I own the architecture and lead every build from scope to launch.',
    href: '/product-engineering',
    tag: 'SaaS · Mobile · Rust',
  },
  {
    code: '04',
    icon: Code2,
    title: 'Full-stack web and APIs',
    description:
      'Next.js, React, Vite, Fastify, PostgreSQL, MySQL, and headless WordPress engineered for fast mobile loads, clean structure, and reliable handoff.',
    href: '/services/nextjs-development',
    tag: 'Next.js · Fastify · Headless WP',
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
    summary: 'Fast interfaces and server-rendered apps that hold Google and AI search visibility.',
    items: ['TypeScript', 'Next.js App Router', 'React & Vite', 'Tailwind CSS', 'Technical SEO & GEO'],
  },
  {
    icon: Cpu,
    title: 'Backend, systems and data',
    summary: 'High-throughput services, native binaries, and databases tuned for real load.',
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
    code: '01',
    icon: Clock,
    text: '13+ years shipping production software, independent since 2015. You work directly with the engineer leading the architecture from scoping to launch.',
  },
  {
    code: '02',
    icon: Award,
    text: 'First Cursor Ambassador in Indonesia, SpaceXAI Ambassador, and MiniMax Dev Community Expert. I build and ship with frontier AI models every week.',
  },
  {
    code: '03',
    icon: Briefcase,
    text: 'Before running my practice full time I worked at Hongkiat.com, co-founded Raja Kreatif Asia, and served as senior full-stack developer at SAB Digital Marketing Agency.',
  },
  {
    code: '04',
    icon: Home,
    text: 'Public proof you can inspect today: open-source Rust and MCP agent tools on GitHub, RankMySEO in production, and this headless WordPress and Next.js site.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Editorial Architectural Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 pt-2 items-stretch">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E6E4DD] bg-white px-3.5 py-1.5 mb-7">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#525660]">
                AI engineer &amp; consultant · Indonesia (UTC+7) · EU &amp; SG overlap
              </span>
            </div>

            <h1 className="font-display leading-[0.98] lg:text-[4.5rem] sm:text-6xl text-[2.75rem] font-semibold text-[#0B0C0E] tracking-[-0.035em] mb-7">
              Senior AI
              {' '}
              <span className="block gradient-text font-normal">Software Engineer</span>
              {' '}
              <span className="block">&amp; Consultant</span>
            </h1>

            <p className="text-base text-[#4A4E57] max-w-xl mb-9 leading-relaxed border-l-2 border-[#D9481E] pl-5">
              Hi, I&apos;m <strong className="text-[#0B0C0E] font-semibold">Aris Setiawan</strong>, an AI engineer and AI developer in Indonesia with 13+ years shipping software. I join European (EU and UK), Singaporean, and Indonesian engineering teams for AI systems, apps, and GEO/SEO work, owning everything from LLM agents and MCP servers to Next.js, React, Fastify, Rust, and databases.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Link
                href={contactHref('ai-implementation')}
                className="btn-primary inline-flex items-center justify-between sm:justify-center gap-3 text-sm font-medium rounded-full py-3.5 px-6 group"
              >
                <span>Send me your AI project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/services/ai-search-geo-aeo"
                className="btn-secondary inline-flex items-center justify-between sm:justify-center gap-2 text-sm font-medium rounded-full py-3.5 px-6 group"
              >
                <span>Request a free AI visibility snapshot</span>
                <ArrowRight className="w-4 h-4 text-[#525660] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <p className="font-mono text-xs text-[#70747D]">
              Direct reply within 24 hours · First Cursor Ambassador in Indonesia
            </p>
          </div>
        </div>

        {/* Right Column: Architectural Portrait + Live Telemetry Strip */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative flex-1 min-h-[420px] rounded-2xl overflow-hidden border border-[#E6E4DD] bg-[#0D0F14] group">
            <Image
              src="/aris.png"
              alt="Aris Setiawan, senior AI software engineer and the first Cursor Ambassador in Indonesia"
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-[#0D0F14]/25 to-transparent" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0D0F14]/80 border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-100 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Taking new projects
                </span>
                <span className="rounded-full bg-[#0D0F14]/80 border border-white/15 px-2.5 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-sm">
                  UTC+7
                </span>
              </div>

              <div className="rounded-xl bg-[#0D0F14]/90 border border-white/15 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">Aris Setiawan</p>
                    <p className="font-mono text-[11px] text-zinc-400">AI Software Engineer · Creator of RankMySEO</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                    EU · SG · ID
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-300">
                  <span className="px-2 py-0.5 rounded bg-white/10">AI Agents</span>
                  <span className="px-2 py-0.5 rounded bg-white/10">MCP</span>
                  <span className="px-2 py-0.5 rounded bg-white/10">Rust</span>
                  <span className="px-2 py-0.5 rounded bg-white/10">Next.js</span>
                  <span className="px-2 py-0.5 rounded bg-white/10">GEO / SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Proof Strip */}
      <section aria-label="Key metrics" className="mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#E6E4DD] rounded-xl bg-white divide-y lg:divide-y-0 divide-x divide-[#E6E4DD] overflow-hidden">
          {proofMetrics.map((item) => (
            <div key={item.label} className="p-5 md:p-6">
              <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-[#0B0C0E] mb-1">
                {item.value}
              </p>
              <p className="text-xs font-medium text-[#0B0C0E] mb-1">{item.label}</p>
              <p className="font-mono text-[11px] text-[#70747D]">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 01 / Services Bento Grid */}
      <section className="flex flex-col gap-8 w-full mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-index block mb-2">01 / Capabilities</span>
            <h2 className="font-display md:text-4xl text-3xl font-medium text-[#0B0C0E] tracking-tight mb-3">
              AI engineering, GEO/SEO and
              <span className="gradient-text"> full-stack builds</span>
            </h2>
            <p className="leading-relaxed text-base text-[#525660]">
              Start where your team is stuck. Each page spells out what you get, how I work, and what it takes to begin.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#0B0C0E] hover:text-[#D9481E] transition-colors pb-1"
          >
            Compare all services
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bento-card group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E6E4DD] text-[#0B0C0E] group-hover:border-[#D9481E] group-hover:text-[#D9481E] transition-colors">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#70747D]">{service.code}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[#0B0C0E] mb-2.5 tracking-tight group-hover:text-[#D9481E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#525660] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E6E4DD]/80">
                <span className="font-mono text-[11px] text-[#70747D]">{service.tag}</span>
                <ArrowUpRight className="w-4 h-4 text-[#70747D] group-hover:text-[#D9481E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 02 / Full-stack skills behind the AI */}
      <section className="flex flex-col gap-8 w-full mb-20" aria-labelledby="home-skills">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-index block mb-2">02 / Technical Depth</span>
            <h2 id="home-skills" className="font-display md:text-4xl text-3xl font-medium text-[#0B0C0E] tracking-tight mb-3">
              Skills across
              <span className="gradient-text"> the production stack</span>
            </h2>
            <p className="leading-relaxed text-base text-[#525660]">
              AI models only become useful once they are wired into auth, databases, APIs, UI, and infrastructure. Here is the toolkit I ship with every week.
            </p>
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#0B0C0E] hover:text-[#D9481E] transition-colors pb-1"
          >
            Read my full background
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillDomains.map((domain) => (
            <div
              key={domain.title}
              className="bg-white border border-[#E6E4DD] rounded-xl p-6 flex flex-col"
            >
              <div className="p-2.5 bg-[#FAF9F6] border border-[#E6E4DD] rounded-lg w-fit mb-4 text-[#0B0C0E]">
                <domain.icon className="w-4 h-4" />
              </div>
              <h3 className="font-display text-base font-semibold text-[#0B0C0E] mb-2 tracking-tight">
                {domain.title}
              </h3>
              <p className="text-sm text-[#525660] leading-relaxed mb-5">
                {domain.summary}
              </p>
              <ul className="flex flex-wrap gap-1.5 mt-auto">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="px-2.5 py-1 bg-[#FAF9F6] border border-[#E6E4DD] rounded-md font-mono text-[11px] text-[#3F434D]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 03 / Open source proof */}
      <OpenSourceProjects
        id="home-open-source"
        title="Open-source AI and developer tools"
        intro="All my client work is under NDA, so my public proof is production code you can inspect on GitHub before you write to me."
      />

      {/* 04 / Level Up Section */}
      <section className="mb-20">
        <div className="rounded-2xl border border-[#E6E4DD] bg-white p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="section-index block mb-2">04 / Team Training</span>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-[#0B0C0E] tracking-tight mb-3">
              Level up: Cursor mentoring
              <span className="gradient-text"> for your engineering team</span>
            </h2>
            <p className="leading-relaxed text-base text-[#525660]">
              Your team bought Cursor seats and the PRs got messier. I set up project rules and a review habit on one real repo, then help the rest of the team adopt it. English or Indonesian.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start lg:items-end shrink-0">
            <Link
              href="/services/vibe-code-friend"
              className="btn-secondary inline-flex items-center gap-2 text-sm font-medium rounded-full py-3 px-6"
            >
              <span>See how Cursor mentoring works</span>
              <ArrowRight className="w-4 h-4 text-[#525660]" />
            </Link>
            <Link
              href="https://bootcamp.madebyaris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-xs text-[#70747D] hover:text-[#D9481E] transition-colors"
            >
              Prefer a structured course? Try the bootcamp
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 / Track Record + FAQ */}
      <section className="flex flex-col gap-12 w-full mb-20">
        <div className="max-w-2xl">
          <span className="section-index block mb-2">05 / Track Record</span>
          <h2 className="font-display md:text-4xl text-3xl font-medium text-[#0B0C0E] tracking-tight mb-3">
            Why teams
            <span className="gradient-text"> hire me</span>
          </h2>
          <p className="leading-relaxed text-base text-[#525660]">
            You work directly with the engineer who designs the architecture and ships the code, from the first scoping call to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div key={feature.code} className="bg-white border border-[#E6E4DD] rounded-xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <feature.icon className="w-5 h-5 text-[#0B0C0E]" />
                <span className="font-mono text-xs text-[#70747D]">{feature.code}</span>
              </div>
              <p className="leading-relaxed text-sm text-[#3F434D]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl w-full" aria-labelledby="home-faq">
          <h2 id="home-faq" className="font-display text-2xl md:text-3xl font-medium text-[#0B0C0E] tracking-tight mb-6">
            Questions before you hire
          </h2>
          <div className="border border-[#E6E4DD] rounded-2xl bg-white divide-y divide-[#E6E4DD] overflow-hidden">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group p-5 md:p-6 open:bg-[#FAF9F6]/60 transition-colors">
                <summary className="cursor-pointer list-none font-medium text-[#0B0C0E] flex items-center justify-between gap-4">
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#70747D]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-[#D9481E] transition-transform group-open:rotate-45 text-xl leading-none shrink-0">+</span>
                </summary>
                <p className="mt-3 pl-7 text-sm text-[#525660] leading-relaxed">{faq.answer}</p>
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="mt-3 pl-7 inline-flex items-center gap-1 text-sm font-medium text-[#D9481E] hover:text-[#B93815]"
                  >
                    {faq.link.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </details>
            ))}
          </div>
        </div>

        <CtaBand
          title="Tell me what you’re building"
          body="A URL, a stalled AI pilot, or two sentences about your stack is enough. I read every request myself, reply within 24 hours, and send a written plan before any code if we go ahead."
          primary={{ href: contactHref('ai-implementation'), label: 'Send me your project' }}
          secondary={{ href: '/services/vibe-code-friend', label: 'Or get Cursor mentoring for your team' }}
        />
      </section>

      {/* 06 / Recent Blog Posts */}
      <section className="flex flex-col gap-8 w-full cv-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-index block mb-2">06 / Writing</span>
            <h2 className="font-display md:text-4xl text-3xl font-medium text-[#0B0C0E] tracking-tight mb-3">
              Latest
              <span className="gradient-text"> engineering notes</span>
            </h2>
            <p className="leading-relaxed text-base text-[#525660]">
              AI agents, Cursor workflows, Next.js, headless WordPress, and technical SEO, written from production work I ship.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#0B0C0E] hover:text-[#D9481E] transition-colors pb-1"
          >
            Read all guides
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <Suspense fallback={<PostsFallback />}>
          <Posts />
        </Suspense>
      </section>
    </>
  )
}
