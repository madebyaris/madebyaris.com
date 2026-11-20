import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from 'lucide-react'
import type { Metadata } from 'next'
import heroProofEmblem from '@/public/images/hero-proof-emblem.png'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { HomeContent } from '@/components/home-content'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { CtaBand } from '@/components/page/cta-band'
import { contactHref } from '@/lib/contact-services'
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/architectural-motion'
import { TimezoneOverlap } from '@/components/interactive/timezone-overlap'
import { AgencyHeroVisual, HeroStagger } from '@/components/interactive/agency-hero-visual'
import { AgencyCapabilityShowcase } from '@/components/interactive/agency-capability-showcase'

export const revalidate = 86400 // 24 hours

const PostsFallback = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="animate-pulse bg-[#F3F4F6] border border-[#E5E7EB] h-80 rounded-xl" />
    ))}
  </div>
)

const pageTitle = 'AI Development Agency & Engineering | MadeByAris'
const pageDescription =
  'Founder-led AI development agency in Indonesia for EU, UK, Singapore, and local teams. Custom AI agents, LLM systems, Next.js, Rust, and GEO/SEO engineering.'

const faqs: (FaqItem & { link?: { href: string; label: string } })[] = [
  {
    question: 'How is MadeByAris different from a traditional software agency?',
    answer:
      'Most agencies pitch you with a senior partner and hand the code to junior developers. MadeByAris is founder-led: Aris Setiawan (13+ years shipping software, First Cursor Ambassador in Indonesia) designs the architecture, leads every repository, and reviews every pull request alongside vetted senior specialists when a project needs parallel tracks.',
    link: { href: '/about', label: 'Meet the founder and review track record' },
  },
  {
    question: 'What does an AI project cost, and how fast can we start?',
    answer:
      'Focused AI production sprints (taking an AI pilot live, shipping an agent, RAG pipeline, or MCP tool with evals and spend caps) start from $2,000 and run 2 to 4 weeks. Full AI SaaS or product builds run 4 to 12 weeks with fixed written milestones. After a 20-minute scoping call, you receive a written architecture plan and quote within 48 hours.',
    link: { href: '/blog/custom-web-app-development-cost', label: 'Read what drives project cost' },
  },
  {
    question: 'How do you keep AI features accurate, secure, and within API budget?',
    answer:
      'Every production AI system ships with golden eval test cases running in CI, structured trace logging, fallback model routing, and hard per-tenant or daily token spend ceilings. We work under NDA, use zero-data-retention API configurations where required, and transfer 100% of IP and repository ownership to your team from day one.',
    link: { href: '/ai-implementation', label: 'See our production AI engineering process' },
  },
  {
    question: 'Can your agency work smoothly with European, UK, Singapore, and Indonesian teams?',
    answer:
      'Yes. We operate from Indonesia (WIB / UTC+7), giving full-day overlap with Singapore and Indonesia plus direct morning overlap (08:00 to 12:00 CET / 07:00 to 11:00 UK) with European engineering teams. We join your Slack, Linear, and GitHub workflows directly in English or Bahasa Indonesia.',
  },
]

const structuredData = buildPageGraph({
  path: '/',
  name: pageTitle,
  description: pageDescription,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/',
  brand: false,
  keywords: [
    'AI development agency',
    'AI software development company',
    'custom AI development services',
    'hire AI developer',
    'hire AI engineer',
    'AI agent development agency',
    'AI implementation partner',
    'AI consultant Europe',
    'AI SEO agency GEO AEO',
    'Next.js agency Indonesia',
    'Cursor team training',
  ],
})

async function Posts() {
  let posts: Awaited<ReturnType<typeof getPosts>> = []
  try {
    posts = await getPosts({ per_page: 3 })
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
  return <HomeContent type="posts" initialData={posts} />
}

const heroTrustStack = [
  'Next.js 16',
  'Rust & Tauri',
  'OpenAI & Anthropic',
  'MCP Servers',
  'Fastify & Postgres',
  'RankMySEO',
  'Cursor Rules',
]

const proofMetrics = [
  {
    value: '13+ yrs',
    label: 'Production engineering',
    note: 'Founder-led studio since 2015',
  },
  {
    value: '515+ ★',
    label: 'Public AI, Rust & SEO code',
    note: 'nca, Spec Kit, rankmyseo/skills',
  },
  {
    value: '700K → 1.8M',
    label: 'Client search impressions',
    note: 'Per 28 days + RankMySEO in-house',
  },
  {
    value: '100% IP',
    label: 'Client code ownership',
    note: 'NDA, evals & spend caps built in',
  },
]

const caseOutcomes = [
  {
    code: 'CASE 01',
    tag: 'SEO & GEO ENGINEERING',
    metric: '700K → 1.8M',
    metricNote: 'Google impressions / 28 days',
    title: 'Technical SEO & AI Search Overhaul',
    summary:
      'Rebuilt site architecture, structured entity schema, and page performance directly in code, lifting organic search visibility by 2.5x and preparing pages for AI citation.',
    stack: ['Next.js', 'JSON-LD', 'rankmyseo/skills'],
    href: '/services/ai-search-geo-aeo',
  },
  {
    code: 'CASE 02',
    tag: 'HIGH-VOLUME AI HARNESS',
    metric: '1,000+ / run',
    metricNote: 'Parallel LLM records processed',
    title: 'Production Batch AI Pipeline (NDA)',
    summary:
      'Replaced a fragile prototype that stalled at 20 items with a resilient queue, retry harness, VPS topology, and per-run token ceilings built for real client load.',
    stack: ['LLM Harness', 'Fastify', 'PostgreSQL'],
    href: '/ai-implementation',
  },
  {
    code: 'CASE 03',
    tag: 'PROPRIETARY AI & RUST SUITE',
    metric: '515+ Stars',
    metricNote: 'Public GitHub repositories',
    title: 'Open-Source AI Agents & RankMySEO',
    summary:
      'Because client builds sit under NDA, inspect our production engineering directly in our Rust agent CLI (nca), multi-agent MCP server, security scanner, and live SaaS.',
    stack: ['Rust', 'MCP', 'TypeScript'],
    href: '/projects',
  },
]

const engagementModels = [
  {
    code: '01',
    badge: 'FASTEST START',
    name: 'AI Production Sprint',
    price: 'From $2,000',
    timeline: '2 to 4 weeks · Fixed scope',
    summary:
      'Best for taking a stalled AI pilot live or shipping one high-impact AI agent, RAG search, or MCP integration into an existing product.',
    deliverables: [
      'Written architecture spec & model trade-offs in 48h',
      'Production feature merged directly into your repo',
      'Golden eval suite in CI + token spend caps',
      'Full team handoff & runbook documentation',
    ],
    ctaLabel: 'Scope an AI sprint',
    href: contactHref('ai-implementation'),
    featured: false,
  },
  {
    code: '02',
    badge: 'MOST POPULAR',
    name: 'Dedicated AI & Product Build',
    price: 'Custom milestone quote',
    timeline: '4 to 12 weeks · Founder-led',
    summary:
      'End-to-end engineering for AI SaaS platforms, custom web or Rust apps, and Next.js + GEO/SEO rebuilds led directly by Aris plus vetted specialists.',
    deliverables: [
      'Complete system architecture, auth, billing & AI layer',
      'Weekly production demos on live staging links',
      'Technical SEO, JSON-LD schema & Core Web Vitals',
      '100% client IP ownership & zero vendor lock-in',
    ],
    ctaLabel: 'Start a product build',
    href: contactHref('product'),
    featured: true,
  },
  {
    code: '03',
    badge: 'FOR IN-HOUSE TEAMS',
    name: 'Embedded Partner & Cursor Enablement',
    price: 'Monthly retainer',
    timeline: 'Ongoing · EU / UK / SG / ID',
    summary:
      'Add senior AI architecture capacity directly inside your Slack and GitHub, or level up your engineers with repo-specific Cursor rules and AI PR review.',
    deliverables: [
      'Direct senior engineering inside your weekly sprints',
      'Custom .cursor/rules/*.mdc & Spec Kit setup',
      'AI PR review standards that prevent regressions',
      'Coaching available in English or Bahasa Indonesia',
    ],
    ctaLabel: 'Discuss a retainer',
    href: contactHref('cursor-mentoring'),
    featured: false,
  },
]

const engineeringStandards = [
  {
    code: '01',
    title: 'Written spec before code',
    detail: 'Milestones, risks, and expected cloud bills agreed upfront.',
  },
  {
    code: '02',
    title: 'Evals & spend caps built in',
    detail: 'CI regression gates and hard token budgets on every LLM feature.',
  },
  {
    code: '03',
    title: '100% IP & NDA ready',
    detail: 'Your repo, your cloud account, zero proprietary lock-in.',
  },
  {
    code: '04',
    title: 'Founder-led engineering',
    detail: 'Direct architecture and code review from scoping call to production deploy.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* ================================================================
          BAND 1: SIGNATURE FULL-BLEED ELECTRIC COBALT HERO (Ahrefs Style)
          ================================================================ */}
      <section className="w-full bg-[#3A57FC] text-white pt-12 sm:pt-16 pb-16 md:pb-24 overflow-x-clip">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          {/* Editorial Hero Copy Block */}
          <div className="max-w-4xl">
            <HeroStagger delay={0}>
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/12 border border-white/20 px-3.5 py-1 mb-6">
                <span className="h-2 w-2 rounded-full bg-[#FF8800] animate-pulse" />
                <h1
                  style={{ fontFamily: 'var(--font-mono)' }}
                  className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/95"
                >
                  AI Developer Agency Indonesia
                </h1>
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/75">
                  · EU · UK · SG
                </span>
              </div>
            </HeroStagger>

            <HeroStagger delay={0.05}>
              <p className="font-display text-[2.5rem] sm:text-5xl lg:text-[4.25rem] font-bold leading-[1.03] tracking-[-0.03em] text-white mb-6">
                AI Development Agency
                <br />
                for production software,
                <br />
                agents, and AI search{' '}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 44 40"
                  fill="none"
                  className="inline-block w-8 h-8 sm:w-11 sm:h-11 align-baseline -mt-2 ml-0.5"
                >
                  <path
                    d="M27.5 3L30.4 13.6L41 16.5L30.4 19.4L27.5 30L24.6 19.4L14 16.5L24.6 13.6L27.5 3Z"
                    fill="#67E8F9"
                  />
                  <path
                    d="M11 21L12.7 27.3L19 29L12.7 30.7L11 37L9.3 30.7L3 29L9.3 27.3L11 21Z"
                    fill="#A5F3FC"
                  />
                </svg>
              </p>
            </HeroStagger>

            <HeroStagger delay={0.1}>
              <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                MadeByAris is an AI software development agency owned by{' '}
                <strong className="text-white font-semibold">Aris Setiawan</strong> (13+ years shipping software, First Cursor Ambassador in Indonesia). We build custom AI agents, LLM systems, Next.js &amp; Rust products, and GEO/SEO engineering directly with senior engineers from scoping to launch.
              </p>
            </HeroStagger>

            {/* Signature Ahrefs Action Row: Orange Primary + Ghost White Secondary + Custom 3D Emblem Proof */}
            <HeroStagger delay={0.15}>
              <div className="flex flex-wrap items-center gap-3.5 mb-10 md:mb-12">
                <Link
                  href={contactHref('ai-implementation')}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm sm:text-[15px] px-5 sm:px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 group"
                >
                  <span>Book a project scoping call</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/services/ai-search-geo-aeo"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 hover:border-white bg-white/8 hover:bg-white/15 text-white font-bold text-sm sm:text-[15px] px-5 sm:px-6 py-3.5 transition-all"
                >
                  <span>Get a free AI &amp; GEO audit</span>
                </Link>

                {/* Custom Glossy 3D Amber Emblem + Crisp Owner Proof */}
                <div className="flex items-center gap-2.5 pl-1">
                  <Image
                    src={heroProofEmblem}
                    alt=""
                    aria-hidden="true"
                    width={38}
                    height={38}
                    priority
                    className="h-9 w-9 object-contain shrink-0 drop-shadow-[0_6px_14px_rgba(11,12,14,0.28)]"
                  />
                  <div className="text-xs leading-tight text-white/90">
                    <p className="font-semibold text-white">Direct owner reply in 24h</p>
                    <p className="text-white/80">515+ GitHub stars · 100% client IP</p>
                  </div>
                </div>
              </div>
            </HeroStagger>
          </div>

          {/* Centered Floating Signature Gradient-Bezel Interactive Agency Control Center */}
          <AgencyHeroVisual />

          {/* Bottom Monochrome Trust & Stack Strip Inside Cobalt Hero */}
          <div className="mt-10 md:mt-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mb-3">
              {heroTrustStack.map((item) => (
                <span
                  key={item}
                  className="font-display text-sm sm:text-base font-bold tracking-tight text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-white/75">
              Partnering with engineering leaders across Europe (EU &amp; UK), Singapore, and Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 2: AHREFS PITCH-BLACK FRAME + CRISP WHITE CAPABILITY SHEET
          ================================================================ */}
      <section
        className="w-full bg-[#050608] py-14 md:py-20"
        aria-labelledby="home-capabilities"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="rounded-2xl bg-white text-[#0B0C0E] p-6 sm:p-8 md:p-12 shadow-2xl">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12 pb-8 border-b border-[#E5E7EB]">
                <div className="max-w-2xl">
                  <span className="section-index block mb-2">01 / Agency Capabilities</span>
                  <h2
                    id="home-capabilities"
                    className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-[#0B0C0E]"
                  >
                    Your AI engineering agency
                    <br />
                    built for production and search
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#3A57FC] hover:text-[#FF8800] transition-colors shrink-0"
                >
                  <span>Compare all services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            <AgencyCapabilityShowcase />
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 3: DEEP MIDNIGHT-TO-COBALT OUTCOMES & TIMEZONE OVERLAP
          ================================================================ */}
      <section
        className="w-full ahrefs-dark-band text-white py-16 md:py-24"
        aria-labelledby="home-outcomes"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
              <div className="max-w-2xl">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2.5">
                  02 / Proven Delivery
                </span>
                <h2
                  id="home-outcomes"
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-white mb-4"
                >
                  AI engineering that creates results
                  <span className="block text-[#93A8FF]">under real production traffic</span>
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Buyers hire MadeByAris because prototypes are easy and production reliability is hard. Inspect real metrics shipped under client traffic and public code.
                </p>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#FFB866] hover:text-white transition-colors shrink-0"
              >
                <span>View portfolio &amp; GitHub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* 3 Case Outcome Cards */}
          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {caseOutcomes.map((item) => (
              <StaggerItem key={item.code} className="h-full">
                <Link
                  href={item.href}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#3A57FC]/70 p-6 md:p-7 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FFB866]">
                        {item.code} · {item.tag}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <div className="pb-4 mb-4 border-b border-white/10">
                      <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
                        {item.metric}
                      </p>
                      <p className="font-mono text-[11px] text-zinc-400 mt-1">
                        {item.metricNote}
                      </p>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#93A8FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-white/10 font-mono text-[10px] text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* 4-Column Proof Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-white/12 bg-white/[0.04] divide-y lg:divide-y-0 divide-x divide-white/10 overflow-hidden mb-8">
            {proofMetrics.map((item) => (
              <div key={item.label} className="p-5 md:p-6">
                <p className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-1 tabular-nums">
                  {item.value}
                </p>
                <p className="text-xs font-semibold text-[#93A8FF] mb-1">{item.label}</p>
                <p className="font-mono text-[11px] text-zinc-400">{item.note}</p>
              </div>
            ))}
          </div>

          {/* Live Timezone Sync (Native dark glass card integrated into the dark gradient band) */}
          <Reveal delay={0.04}>
            <TimezoneOverlap theme="dark" />
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          BAND 4: CRISP WHITE ENGAGEMENT MODELS & ENGINEERING STANDARD
          ================================================================ */}
      <section
        className="w-full bg-white py-16 md:py-24"
        aria-labelledby="home-engagement"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-10 md:mb-12">
              <span className="section-index block mb-2">03 / How We Engage</span>
              <h2
                id="home-engagement"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0C0E] tracking-tight mb-3"
              >
                Clear agency engagement models,{' '}
                <span className="gradient-text">zero guesswork</span>
              </h2>
              <p className="leading-relaxed text-base text-[#4B5563]">
                Pick the track that matches your roadmap. Every engagement starts with a written architecture plan and fixed deliverables before any code is billed.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-8">
            {engagementModels.map((model) => (
              <StaggerItem key={model.code} className="h-full">
                <div
                  className={`h-full rounded-2xl border p-6 md:p-7 flex flex-col justify-between transition-all ${
                    model.featured
                      ? 'bg-[#3A57FC] border-[#2944E0] text-white shadow-[0_24px_60px_-20px_rgba(58,87,252,0.45)]'
                      : 'bg-white border-[#E5E7EB] text-[#0B0C0E] hover:border-[#3A57FC]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span
                        className={`font-mono text-xs font-semibold ${
                          model.featured ? 'text-[#FFB866]' : 'text-[#3A57FC]'
                        }`}
                      >
                        TRACK {model.code}
                      </span>
                      <span
                        className={`rounded-md px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] ${
                          model.featured
                            ? 'bg-white/15 text-white border border-white/25'
                            : 'bg-[#F3F5FF] text-[#3A57FC] border border-[#DDE4FF]'
                        }`}
                      >
                        {model.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight mb-1">
                      {model.name}
                    </h3>
                    <p
                      className={`font-display text-2xl sm:text-3xl font-bold tracking-tight mb-1 ${
                        model.featured ? 'text-white' : 'text-[#0B0C0E]'
                      }`}
                    >
                      {model.price}
                    </p>
                    <p
                      className={`font-mono text-[11px] mb-5 ${
                        model.featured ? 'text-white/75' : 'text-[#6B7280]'
                      }`}
                    >
                      {model.timeline}
                    </p>

                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        model.featured ? 'text-white/90' : 'text-[#4B5563]'
                      }`}
                    >
                      {model.summary}
                    </p>

                    <ul
                      className={`space-y-2.5 pt-5 border-t mb-8 ${
                        model.featured ? 'border-white/20' : 'border-[#E5E7EB]'
                      }`}
                    >
                      {model.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                          <Check
                            strokeWidth={2.5}
                            className={`h-4 w-4 shrink-0 mt-0.5 ${
                              model.featured ? 'text-[#FFB866]' : 'text-[#3A57FC]'
                            }`}
                          />
                          <span className={model.featured ? 'text-white/95' : 'text-[#1F2937]'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={model.href}
                    className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-bold transition-all group ${
                      model.featured
                        ? 'bg-[#FF8800] hover:bg-[#E67600] text-white shadow-lg shadow-black/15'
                        : 'bg-[#0B0C0E] hover:bg-[#3A57FC] text-white'
                    }`}
                  >
                    <span>{model.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* 4-Pillar Engineering Standard Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB] overflow-hidden">
            {engineeringStandards.map((item) => (
              <div key={item.title} className="p-5 md:p-6 flex items-start gap-3.5">
                <span className="font-mono text-xs font-bold text-[#3A57FC] bg-[#EEF2FF] border border-[#DDE4FF] rounded-md px-2 py-1 shrink-0">
                  {item.code}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-[#0B0C0E]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#4B5563] leading-relaxed mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 5: PUBLIC OPEN-SOURCE CODE & CURSOR TEAM ENABLEMENT
          ================================================================ */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <OpenSourceProjects
            id="home-open-source"
            title="Open-source AI and developer tools"
            intro="Client work stays under NDA, so our public proof is real production code you can audit on GitHub before booking a scoping call."
            className="mb-0"
          />

          {/* Team Training Highlight Card */}
          <Reveal className="mt-12 md:mt-16">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C0E] text-white p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(58,87,252,0.38)_0%,transparent_70%)] blur-2xl"
              />
              <div className="relative z-10 max-w-2xl">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2.5">
                  04 / Team Enablement
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Level up: Cursor mentoring{' '}
                  <span className="text-[#93A8FF]">for your engineering team</span>
                </h2>
                <p className="leading-relaxed text-sm sm:text-base text-zinc-300">
                  Your team bought Cursor seats and the PRs got messier. We set up project rules and an AI review habit on one real repo, then help your engineers adopt it. English or Indonesian.
                </p>
              </div>
              <div className="relative z-10 flex flex-col gap-3 items-start lg:items-end shrink-0">
                <Link
                  href="/services/vibe-code-friend"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-semibold text-sm py-3 px-6 shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 group"
                >
                  <span>See how Cursor mentoring works</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="https://bootcamp.madebyaris.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-mono text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Prefer a structured course? Try the bootcamp
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          BAND 6: BUYER FAQ (12-COLUMN BALANCED LAYOUT)
          ================================================================ */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="home-faq">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <span className="section-index block mb-2">05 / Buyer FAQ</span>
                <h2
                  id="home-faq"
                  className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-4"
                >
                  Questions CTOs and founders ask before hiring
                </h2>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6">
                  Clear answers on ownership, pricing, AI safety controls, and timezone collaboration before we jump on a call.
                </p>
                <Link
                  href={contactHref('ai-implementation')}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#3A57FC] hover:text-[#FF8800] transition-colors"
                >
                  <span>Ask Aris directly</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="lg:col-span-8 rounded-2xl border border-[#E5E7EB] bg-white divide-y divide-[#E5E7EB] overflow-hidden shadow-xs">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group p-6 md:p-7 open:bg-[#F8FAFC] transition-colors"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-[#0B0C0E] flex items-center justify-between gap-4">
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-xs font-bold text-[#3A57FC]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                      <span className="text-[#3A57FC] transition-transform duration-200 group-open:rotate-45 text-xl leading-none shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pl-7 text-sm text-[#4B5563] leading-relaxed">
                      {faq.answer}
                    </p>
                    {faq.link && (
                      <Link
                        href={faq.link.href}
                        className="mt-3 pl-7 inline-flex items-center gap-1 text-sm font-semibold text-[#3A57FC] hover:text-[#FF8800] transition-colors"
                      >
                        {faq.link.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          BAND 7: FINAL COBALT CTA BAND
          ================================================================ */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Ready to take your AI system or product to production?"
            body="Send a URL, a stalled AI pilot, or two sentences about your stack. Aris reads every inquiry directly, replies within 24 hours, and sends a written architecture plan before any code."
            primary={{ href: contactHref('ai-implementation'), label: 'Book a scoping call' }}
            secondary={{ href: '/services/ai-search-geo-aeo', label: 'Or request a free AI & GEO audit' }}
          />
        </div>
      </section>

      {/* ================================================================
          BAND 8: ENGINEERING JOURNAL
          ================================================================ */}
      <section className="w-full bg-white py-16 md:py-24 cv-auto">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
            <div className="max-w-2xl">
              <span className="section-index block mb-2">06 / Engineering Journal</span>
              <h2 className="font-display md:text-4xl text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
                Latest <span className="gradient-text">engineering notes</span>
              </h2>
              <p className="leading-relaxed text-base text-[#4B5563]">
                AI agents, Cursor workflows, Next.js, headless WordPress, and technical SEO, written from production systems we ship.
              </p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#3A57FC] hover:text-[#FF8800] transition-colors shrink-0"
            >
              <span>Read all guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Suspense fallback={<PostsFallback />}>
            <Posts />
          </Suspense>
        </div>
      </section>
    </>
  )
}
