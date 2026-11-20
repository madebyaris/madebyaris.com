import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Cpu,
  Layers,
  MapPin,
  MessageSquare,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { Timeline } from '@/components/ui/timeline'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { UpworkIcon } from '@/components/icons/upwork'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { CtaBand } from '@/components/page/cta-band'
import arisPortrait from '@/public/aris.png'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/architectural-motion'

const timelineCardClass =
  'rounded-2xl border border-[#E5E7EB] bg-white p-6 hover:border-[#3A57FC] transition-colors shadow-xs'

const timelineData = [
  {
    title: '2025 to present',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          Senior AI software engineer and AI consultant
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          Running MadeByAris full time, focused on production AI engineering and full-stack products:<br />
          • Taking AI pilots to production with evals, logging, LLM harnesses, and spend caps<br />
          • Building multi-agent workflows, MCP servers, and AI features inside existing codebases<br />
          • Shipping SaaS, Rust CLI and desktop software, Next.js apps, and high-volume backends<br />
          • Maintaining open-source AI tools (nca, Spec Kit for Cursor, Agent Orchestration, Chaca Scanner, RankMySEO)<br />
          • Coaching engineering teams on Cursor project rules and AI code review
        </p>
      </div>
    ),
  },
  {
    title: '2015 to present',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          Founder, MadeByAris
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          My own independent engineering practice, delivering:<br />
          • AI engineering, full-stack web products, and APIs with <b className="text-[#0B0C0E]">TypeScript</b>, <b className="text-[#0B0C0E]">Next.js</b>, <b className="text-[#0B0C0E]">React</b>, <b className="text-[#0B0C0E]">Rust</b>, and <b className="text-[#0B0C0E]">Laravel</b><br />
          • Database query tuning and speed work on slow production websites<br />
          • Technical SEO architecture, schema, and migration planning<br />
          • Full website redesigns and headless WordPress builds<br />
          • Architecture reviews and hands-on technical consulting<br /><br />
          It started as arisdes.com. I renamed it <b className="text-[#0B0C0E]">madebyaris.com</b> as the work and the stack grew.
        </p>
      </div>
    ),
  },
  {
    title: '2022 to 2025',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          Senior full-stack developer
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          At <b className="text-[#0B0C0E]">SAB Digital Marketing Agency</b> I:<br />
          • Made client websites faster and cleaned up their codebases<br />
          • Built new features and reworked existing ones<br />
          • Worked with designers and SEO specialists on each project through to launch<br />
          • Kept our code in line with current global development standards<br />
          • Delivered multiple enterprise-level projects
        </p>
      </div>
    ),
  },
  {
    title: '2022',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">CEO</h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          Led <b className="text-[#0B0C0E]">Raja Kreatif Asia</b> as CEO, focused on growing the company.<br />
          In that time we added services and reached new markets while keeping the standards our clients hired us for.
        </p>
      </div>
    ),
  },
  {
    title: '2021',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          COO and co-founder
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          As COO at <b className="text-[#0B0C0E]">Raja Kreatif Asia</b>, I:<br />
          • Built business practices that could last, and a better office environment<br />
          • Launched <b className="text-[#0B0C0E]">Raja Kreatif Class</b> (kelas.rajakreatif.com), a WordPress learning platform<br />
          • Added new services:<br />
          &nbsp;&nbsp;◦ Web development, specializing in WordPress<br />
          &nbsp;&nbsp;◦ SEO analysis and specialist services<br />
          &nbsp;&nbsp;◦ Digital marketing<br />
          • Supported every division in meeting its standards and KPIs
        </p>
      </div>
    ),
  },
  {
    title: '2019',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          CMO and co-founder
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          I started at <b className="text-[#0B0C0E]">Raja Kreatif Asia</b> as CMO, where I:<br />
          • Helped small businesses, enterprises, and government agencies with website development, branding, and SEO<br />
          • Was the link between our team and clients, making sure work was delivered as promised<br />
          • Put both team development and client satisfaction first<br />
          • Set our service standards and built long-term client relationships
        </p>
      </div>
    ),
  },
  {
    title: '2016',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          WordPress developer
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          At <b className="text-[#0B0C0E]">Hongkiat.com</b> I built new features and made the site faster using <b className="text-[#0B0C0E]">WordPress</b>, <b className="text-[#0B0C0E]">PHP</b>, <b className="text-[#0B0C0E]">MySQL</b>, <b className="text-[#0B0C0E]">HTML</b>, <b className="text-[#0B0C0E]">CSS</b>, <b className="text-[#0B0C0E]">JavaScript</b>, and <b className="text-[#0B0C0E]">jQuery</b>.
        </p>
      </div>
    ),
  },
  {
    title: '2015',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          Frontend developer
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          At <b className="text-[#0B0C0E]">PT. DheZign Online Solution</b> we designed website and mobile app mockups, turned them into HTML, and built the websites on WordPress.
          Stack: <b className="text-[#0B0C0E]">WordPress</b>, <b className="text-[#0B0C0E]">PHP</b>, <b className="text-[#0B0C0E]">MySQL</b>, <b className="text-[#0B0C0E]">HTML</b>, <b className="text-[#0B0C0E]">CSS</b>, <b className="text-[#0B0C0E]">JavaScript</b>, <b className="text-[#0B0C0E]">jQuery</b>, <b className="text-[#0B0C0E]">Bootstrap</b>, and <b className="text-[#0B0C0E]">CodeIgniter</b>.
        </p>
      </div>
    ),
  },
  {
    title: '2014',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          Junior full-stack developer
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          At <b className="text-[#0B0C0E]">SEREWare</b> I built web applications, designed systems and databases, and made web app animations.<br />
          Stack: <b className="text-[#0B0C0E]">PHP</b> and <b className="text-[#0B0C0E]">MySQL</b>.
        </p>
      </div>
    ),
  },
  {
    title: '2013',
    content: (
      <div className={timelineCardClass}>
        <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2">
          Junior backend developer
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          At <b className="text-[#0B0C0E]">PT. Elkabumi Caraka Daya</b> I built back ends for their clients, made reports with iReport, and designed databases.
          Stack: PHP, MySQL, and JavaScript.
        </p>
      </div>
    ),
  },
]

const howIWork = [
  {
    step: '01',
    title: 'You deal with me directly',
    desc: 'I scope the architecture, lead the build, and answer your messages myself, from the first call to launch.',
  },
  {
    step: '02',
    title: 'A written plan before code',
    desc: 'After a short scoping call you get milestones and the trade-offs I’d make, in writing, before I start.',
  },
  {
    step: '03',
    title: 'Progress every week',
    desc: 'A working demo or a coaching session every week, so you always know where the work stands.',
  },
  {
    step: '04',
    title: 'A handoff your team can use',
    desc: 'Readable code, evals, and docs your team can extend without me, plus optional support afterwards.',
  },
]

const skillGroups = [
  {
    code: '01',
    icon: Sparkles,
    title: 'AI and LLM engineering',
    description: 'Turning prototypes into production features that stay accurate and within budget.',
    skills: [
      'OpenAI, Anthropic & MiniMax APIs',
      'Vercel AI SDK',
      'AI agents & tool calling',
      'MCP server architecture',
      'RAG & document Q&A',
      'LLM harnesses, evals & spend caps',
    ],
  },
  {
    code: '02',
    icon: Layers,
    title: 'Frontend and web products',
    description: 'Fast web apps and marketing surfaces engineered for real users and search engines.',
    skills: [
      'TypeScript & JavaScript',
      'Next.js App Router',
      'React & Vite',
      'Tailwind CSS',
      'Core Web Vitals tuning',
      'Technical SEO & JSON-LD schema',
    ],
  },
  {
    code: '03',
    icon: Cpu,
    title: 'Backend, systems and data',
    description: 'Fast APIs, native binaries, and databases tuned for throughput and low hosting cost.',
    skills: [
      'Rust & Tauri (CLI and desktop)',
      'Node.js & Fastify',
      'PHP & Laravel',
      'PostgreSQL & MySQL tuning',
      'VPS, Linux & network setup',
      'Vercel & scale-from-zero hosting',
    ],
  },
  {
    code: '04',
    icon: Wrench,
    title: 'CMS and AI dev workflows',
    description: 'Connecting modern front ends and AI tools to existing editorial and engineering workflows.',
    skills: [
      'Headless WordPress + Next.js',
      'Custom WordPress themes & plugins',
      'WooCommerce integrations',
      'Cursor project rules (.mdc)',
      'AI-assisted PR review workflows',
      'Legacy codebase modernization',
    ],
  },
]

const sectionAnchors = [
  { href: '#stack', code: '01', label: 'Engineering stack' },
  { href: '#open-source', code: '02', label: 'Open source' },
  { href: '#process', code: '03', label: 'How I work' },
  { href: '#history', code: '04', label: 'Career history' },
]

const path = '/about'
const pageTitle = 'About Aris Setiawan: AI Engineer Indonesia & EU'
const pageDescription =
  'Aris Setiawan is a senior AI software engineer and AI consultant in Indonesia partnering with EU and local teams: AI agents, Rust, Next.js, apps, and Cursor.'

const structuredData = buildPageGraph({
  path,
  type: 'AboutPage',
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [{ name: 'About', path }],
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  brand: false,
  keywords: [
    'Aris Setiawan',
    'AI engineer Indonesia',
    'AI software engineer',
    'AI consultant',
    'remote AI engineer Europe',
    'Cursor Ambassador Indonesia',
    'full stack AI engineer',
  ],
})

export default function AboutPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* ================================================================
          BAND 1: FULL-BLEED ELECTRIC COBALT FOUNDER HERO
          ================================================================ */}
      <section className="w-full bg-[#3A57FC] text-white pt-10 sm:pt-14 pb-16 md:pb-24 overflow-x-clip">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Founder Bio & Actions */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#0B0C0E] border border-white/15 px-3.5 py-1.5 w-max mb-6">
                <span className="h-2 w-2 rounded-full bg-[#FF8800]" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  ABOUT ARIS · FOUNDER &amp; OWNER
                </span>
              </div>

              <h1 className="font-display leading-[1.02] lg:text-[3.85rem] sm:text-5xl text-4xl font-bold text-white tracking-[-0.03em] mb-6">
                Aris Setiawan
                <span className="block text-[#DBE4FF] font-medium text-2xl sm:text-3xl lg:text-[2.1rem] mt-2 leading-tight">
                  Senior AI software engineer and AI consultant
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/95 max-w-xl mb-4 leading-relaxed">
                I&apos;m Aris Setiawan, a senior AI software engineer and AI consultant in Indonesia with 13+ years
                of shipping production software and my own practice since 2015. I join European (EU and UK)
                and Indonesian engineering teams on AI and app projects, owning everything from the LLM
                harness and agents to the web app, API, database, and hosting.
              </p>
              <p className="text-sm sm:text-base text-white/85 max-w-xl mb-4 leading-relaxed">
                You can work with me in two ways.{' '}
                <strong className="font-semibold text-white">Build</strong>: I lead and ship your
                production AI system, agent workflow, Rust tool, or full-stack web product.{' '}
                <strong className="font-semibold text-white">Level up</strong>: your engineers keep
                writing the code, and I teach them a Cursor workflow and review habit that holds up.
              </p>
              <p className="text-sm text-white/80 max-w-xl mb-7 leading-relaxed">
                I was the{' '}
                <Link
                  href="/cursor-ambassador"
                  className="text-white underline decoration-white/45 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors"
                >
                  first Cursor Ambassador in Indonesia
                </Link>
                , I’m a{' '}
                <Link
                  href="/spacexai-ambassador"
                  className="text-white underline decoration-white/45 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors"
                >
                  SpaceXAI Ambassador
                </Link>
                , and a{' '}
                <Link
                  href="/minimax-ambassador"
                  className="text-white underline decoration-white/45 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors"
                >
                  MiniMax Dev Community Expert
                </Link>
                . Earlier in my career I worked at Hongkiat.com, co-founded Raja Kreatif Asia, and served as a senior full-stack developer at SAB Digital Marketing Agency. In public, I maintain open-source Rust and MCP agent tools on GitHub and run RankMySEO.
              </p>

              {/* Quick Info Rail */}
              <div className="flex flex-wrap gap-x-5 gap-y-2.5 mb-8 py-3.5 border-y border-white/20 font-mono text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FFB866]" />
                  <span>Indonesia (UTC+7) · EU morning overlap</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#FFB866]" />
                  <span>13+ years shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#FFB866]" />
                  <span>English and Indonesian</span>
                </div>
              </div>

              {/* Action Row & Profiles */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href={contactHref('ai-implementation')}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 group"
                >
                  <span>Tell me what you need</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all"
                >
                  <span>See open source and projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 sm:pl-2">
                  <Link
                    href="https://www.linkedin.com/in/arissetia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aris Setiawan on LinkedIn"
                    className="p-2.5 rounded-md border border-white/25 bg-white/10 hover:bg-white text-white hover:text-[#0B0C0E] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://github.com/madebyaris"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aris Setiawan on GitHub"
                    className="p-2.5 rounded-md border border-white/25 bg-white/10 hover:bg-white text-white hover:text-[#0B0C0E] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aris Setiawan on Upwork"
                    className="p-2.5 rounded-md border border-white/25 bg-white/10 hover:bg-white text-white hover:text-[#0B0C0E] transition-colors"
                  >
                    <UpworkIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Unobstructed Founder Portrait Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-[#0B0C0E] shadow-[0_28px_70px_-24px_rgba(11,12,14,0.55)]">
                <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-[#0B0C0E]">
                  <Image
                    src={arisPortrait}
                    alt="Aris Setiawan, senior AI software engineer and AI consultant in Sidoarjo, Indonesia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[50%_20%]"
                    priority
                    placeholder="blur"
                  />
                </div>

                {/* Clean Obsidian Caption Bar Below Image (never covers portrait) */}
                <div className="p-5 sm:p-6 border-t border-white/10 bg-[#0B0C0E]">
                  <div className="flex items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-white/10">
                    <div>
                      <p className="font-display text-base font-bold text-white">Aris Setiawan</p>
                      <p className="font-mono text-[11px] text-zinc-400">
                        Founder · MadeByAris (since 2015)
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-emerald-400 shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Available
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10.5px] text-zinc-200">
                    <span className="px-2.5 py-1 rounded bg-white/10">AI Agents</span>
                    <span className="px-2.5 py-1 rounded bg-white/10">MCP</span>
                    <span className="px-2.5 py-1 rounded bg-white/10">Rust</span>
                    <span className="px-2.5 py-1 rounded bg-white/10">Next.js</span>
                    <span className="px-2.5 py-1 rounded bg-white/10">GEO / SEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Hero Anchor Strip */}
          <nav
            aria-label="About page sections"
            className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
              On this page
            </span>
            <div className="flex flex-wrap gap-2">
              {sectionAnchors.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 hover:bg-white hover:text-[#0B0C0E] px-3.5 py-1.5 font-mono text-xs text-white transition-colors"
                >
                  <span className="opacity-75">{item.code}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* ================================================================
          BAND 2: PULL QUOTE & ENGINEERING STACK (CRISP WHITE)
          ================================================================ */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="about-skills">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          {/* Founder Motto Banner */}
          <Reveal className="mb-16 md:mb-20">
            <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF] px-6 py-10 md:px-12 md:py-12 text-center">
              <blockquote className="font-display text-2xl md:text-3xl font-semibold text-[#0B0C0E] italic leading-relaxed tracking-tight mb-3">
                &ldquo;The greatest purpose&rdquo;
              </blockquote>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3A57FC]">
                The line I work by
              </p>
            </div>
          </Reveal>

          {/* Engineering Stack */}
          <div id="stack" className="scroll-mt-24">
            <Reveal>
              <div className="max-w-2xl mb-10 md:mb-12">
                <span className="section-index block mb-2">01 / Engineering Stack</span>
                <h2
                  id="about-skills"
                  className="font-display text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
                >
                  The skills I <span className="gradient-text">ship with in production</span>
                </h2>
                <p className="text-base text-[#4B5563] leading-relaxed">
                  Shipping AI features reliably requires understanding every layer around the model. These are the tools and systems I work in directly.
                </p>
              </div>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillGroups.map((group) => (
                <StaggerItem key={group.title} className="h-full">
                  <div className="h-full rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7 hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-[#EEF2FF] border border-[#DDE4FF] rounded-lg text-[#3A57FC]">
                          <group.icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-[#0B0C0E]">
                          {group.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#3A57FC]">{group.code}</span>
                    </div>
                    <p className="text-sm text-[#4B5563] leading-relaxed mb-5">
                      {group.description}
                    </p>
                    <ul className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#E5E7EB]">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="px-2.5 py-1 rounded-md border border-[#E5E7EB] bg-[#F8FAFC] font-mono text-[11px] text-[#1F2937]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 3: OPEN-SOURCE PROOF (SLATE)
          ================================================================ */}
      <section
        id="open-source"
        className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24 scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <OpenSourceProjects
            id="about-open-source"
            className="mb-0"
            title="Open-source AI and developer tools"
            intro="All my client work is under NDA, so my public engineering proof is code you can inspect directly on GitHub."
          />
        </div>
      </section>

      {/* ================================================================
          BAND 4: OPERATING PROCESS (OBSIDIAN DARK BAND)
          ================================================================ */}
      <section
        id="process"
        className="w-full ahrefs-dark-band text-white py-16 md:py-24 scroll-mt-24"
        aria-labelledby="about-process"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-10 md:mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2.5">
                03 / Operating Process
              </span>
              <h2
                id="about-process"
                className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-3"
              >
                How I <span className="text-[#93A8FF]">work</span>
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed">
                The same four steps whether I build for you or coach your team. If something isn&apos;t
                worth building, I&apos;ll say so before you pay for it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/12 rounded-2xl bg-white/[0.04] divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden">
            {howIWork.map((item) => (
              <div key={item.step} className="p-6 md:p-7 hover:bg-white/[0.04] transition-colors">
                <span className="font-mono text-xs font-semibold text-[#FFB866] block mb-4">
                  STEP {item.step}
                </span>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 5: CAREER HISTORY TIMELINE (WHITE)
          ================================================================ */}
      <section
        id="history"
        className="w-full bg-white py-16 md:py-24 scroll-mt-24"
        aria-labelledby="about-history"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-10">
              <span className="section-index block mb-2">04 / Career History</span>
              <h2
                id="about-history"
                className="font-display text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
              >
                Where I&apos;ve <span className="gradient-text">worked since 2013</span>
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Every role, newest first. Some overlap because I&apos;ve run MadeByAris alongside other jobs since 2015.
              </p>
            </div>
          </Reveal>

          <Timeline data={timelineData} />
        </div>
      </section>

      {/* ================================================================
          BAND 6: FINAL CTA BAND (SLATE)
          ================================================================ */}
      <section className="w-full bg-[#F8FAFC] border-t border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Need an AI engineer who can own the whole build?"
            body="Send a few lines about the system, your stack, or your team. I read every request myself, reply within 24 hours, and tell you plainly whether I'm the right fit. English or Indonesian."
            primary={{ href: contactHref('ai-implementation'), label: 'Send me your project' }}
            secondary={{ href: '/services', label: 'Compare services first' }}
          />
        </div>
      </section>
    </>
  )
}
