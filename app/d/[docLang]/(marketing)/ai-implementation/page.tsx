import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Layers,
  Plug,
  Repeat,
  Rocket,
  Sparkles,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/ai-implementation'
const pageTitle = 'Hire an AI Developer & AI Consultant'
const pageDescription =
  'Hire an AI developer and AI consultant for EU and Indonesian teams. 13+ years shipping AI agents, LLM systems, MCP tools, evals, and full-stack apps.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/ai-integration.jpg',
  keywords: [
    'hire AI developer',
    'AI consultant',
    'AI engineer',
    'AI engineer Indonesia',
    'AI developer',
    'AI development services',
    'AI implementation services',
    'AI agent development',
    'MCP server development',
    'remote AI engineer Europe',
  ],
})

const linkClass =
  'text-[#3A57FC] font-medium underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#2944E0] transition-colors'

const stallReasons = [
  {
    title: 'The data is not ready',
    body: 'The pilot ran on a clean sample. Real inputs are messy, spread across systems, and nobody agreed what a correct answer looks like.',
  },
  {
    title: 'It was never wired into the product',
    body: 'A demo runs on a laptop. Production needs auth, error handling, logging, and a way to switch models without touching every feature.',
  },
  {
    title: 'Nobody owns it after launch',
    body: 'Model updates, cost, and failures land on a team that did not build it and cannot read the code.',
  },
]

const offers = [
  {
    icon: Rocket,
    title: 'Pilot to production',
    body: 'You have an AI pilot that works in a demo. I add eval test cases built from your real inputs, logging, error handling, and spend caps, then hand it over.',
    href: '#project-notes',
    cta: 'Read past AI architectures',
  },
  {
    icon: Plug,
    title: 'AI integration in your existing app',
    body: 'Search, Q&A over your docs, chatbots, reply drafts, or document extraction added directly inside your current repo without a rewrite.',
    href: '/services/ai-development/ai-integration',
    cta: 'See AI integration services',
  },
  {
    icon: Sparkles,
    title: 'AI MVP from idea to launch',
    body: 'Turn a new AI product idea into a launch-ready product with sign-up, payments, the core AI workflow tested on real inputs, and per-user spend caps.',
    href: '/services/ai-development/ai-mvp',
    cta: 'See AI MVP development',
  },
  {
    icon: Bot,
    title: 'AI agents and MCP tools',
    body: 'Multi-step agents and MCP servers that call your internal APIs and tools, where a person approves any step that sends, deletes, or charges.',
    href: '/blog/ai-agent-development',
    cta: 'Read how I scope agents',
  },
  {
    icon: Repeat,
    title: 'Embedded AI engineer for EU & ID teams',
    body: 'Join your European or Indonesian engineering team on a fixed monthly retainer for AI features, app architecture, PR reviews, and production fixes.',
  },
  {
    icon: GraduationCap,
    title: 'Cursor rollout for your engineers',
    body: 'Your team bought Cursor seats and PR quality slipped. I set up project rules and a review habit on one real repo, then coach your team.',
    href: '/services/vibe-code-friend',
    cta: 'See Cursor mentoring',
  },
]

const stackCapabilities = [
  {
    icon: Layers,
    title: 'Web apps and APIs',
    body: 'Next.js App Router, React, Vite, Fastify, Node.js, TypeScript, and Vercel AI SDK. Streaming responses, server-side keys, and clean UI wired straight into your product.',
  },
  {
    icon: Cpu,
    title: 'Systems, databases, and infra',
    body: 'Rust and Tauri for fast CLIs and local agent tooling, PostgreSQL and MySQL query tuning, plus VPS and network architecture built to handle high-volume AI workloads.',
  },
  {
    icon: Plug,
    title: 'Existing CMS and legacy stacks',
    body: 'WordPress, headless WordPress, WooCommerce, and PHP/Laravel apps. I add AI capabilities through clean service layers so you keep the stack that already runs your business.',
  },
]

const projectNotes = [
  {
    title: 'AI SEO that researches, writes, and tests itself',
    problem:
      'Content teams guess which topics and headlines will work, and they learn slowly because every test takes manual effort.',
    built:
      'An AI system that researches a topic on its own, writes the content, runs A/B tests on the versions, and uses each result to choose better next time.',
  },
  {
    title: 'Indonesian legal AI grounded in expert knowledge',
    problem:
      'A general model answers Indonesian legal questions from whatever it remembers. That is not good enough for legal work.',
    built:
      'An AI application trained with input from Indonesian law lecturers and professors, so its answers draw on expert knowledge in addition to the base model’s own.',
  },
  {
    title: 'Full architecture for a high-volume AI product',
    problem:
      'An AI product that works on a handful of items falls over when it has to process a thousand at once.',
    built:
      'The whole architecture: software, stack, network, and VPS, tuned to take a thousand records in one go. I also improved the harness around the LLM, which is the code that handles prompts, tools, and retries.',
  },
]

const howIWork = [
  {
    question: 'Who does the work?',
    answer:
      'I lead every project and you talk to me directly. Trusted partners join when a project needs more hands, and AI agents do much of the build, which is how we ship fast.',
  },
  {
    question: 'What can I check before I hire you?',
    answer:
      'All my client work is under NDA, so I show it as the project notes above, with details generalized. For code you can read, see the open-source projects below and this site, which runs on headless WordPress and Next.js.',
  },
  {
    question: 'How do we know it works?',
    answer:
      'In scoping we agree which data the model may see and what a good answer looks like. Test cases built from your own inputs live in your repo.',
  },
  {
    question: 'Who owns the code?',
    answer:
      'The code, prompts, and test cases live in your repository. Under my terms you own the deliverables made for your project once you have paid in full.',
  },
  {
    question: 'What happens after I stop working with you?',
    answer:
      'You get notes on how it fits together, in code your team can read and extend. A retainer for model updates and fixes is optional.',
  },
  {
    question: 'What about cost and risk?',
    answer:
      'Logging and spend limits go in with the first release, so you can see what each feature costs and cap it. Risky steps wait for a person.',
  },
]

const goodFit = [
  'You have a working product or a pilot and want one AI feature real users touch',
  'A support bot or internal assistant needs to answer from your own docs or data',
  'A repetitive step like triage, tagging, or drafting replies should run as an agent with a human check',
  'Your pilot works in a demo and now has to hold up with real users',
]

const poorFit = [
  'You need a model trained from scratch, or ML research',
  'There is no product or data yet, only a plan to add AI',
  'You need an on-site team in your office',
  'Your budget is under $5,000',
]

const faqs: FaqItem[] = [
  {
    question: 'How much does it cost to hire an AI engineer for implementation?',
    answer:
      'It depends on the use case, the data, and how many systems it touches. Projects start from $5,000. After a short scoping call you get a written plan with milestones and a quote before any code is written.',
  },
  {
    question: 'Can you work inside our existing codebase?',
    answer:
      'Yes, that is the usual case. I work inside your repo, most often Next.js, React, TypeScript, Node.js, WordPress, or PHP/Laravel, and add the AI feature next to your current code without a rewrite.',
  },
  {
    question: 'Which AI models and providers do you work with?',
    answer:
      'OpenAI, Anthropic, MiniMax, or any compatible API, behind one clean server layer. I am a MiniMax Dev Community Expert and pick the model for your task and budget so switching later stays cheap.',
  },
  {
    question: 'Do you join European engineering teams remotely?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia (UTC+7) and partner directly with engineering teams across Europe (EU and UK) as well as Indonesia and Asia. I work Monday to Saturday, 9:00 to 17:00 WIB, in English or Indonesian, which overlaps with European mornings in CET and GMT for standups and reviews.',
  },
  {
    question: 'Who will I be working with?',
    answer:
      'Me. I lead every project and answer your messages myself. When a project needs more hands, trusted partners join, and I tell you before we start. AI agents do much of the build. Who can access your code and data, including partners and AI tools, is agreed in writing before work starts.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'AI engineering', path: pagePath },
  ],
  service: {
    name: 'AI engineering, consulting, and production implementation',
    description: pageDescription,
    serviceType: 'AI Engineering and Implementation',
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: [
      { name: 'AI pilot to production' },
      { name: 'AI integration in existing products' },
      { name: 'AI agent and MCP server development' },
      { name: 'AI chatbot development' },
      { name: 'AI MVP development' },
      { name: 'AI engineering retainer' },
    ],
  },
})

export default function AiImplementationPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        variant="obsidian"
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-white/65">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/35">/</li>
              <li className="text-white">AI engineering</li>
            </ol>
          </nav>
        }
        eyebrow={{ icon: <Rocket className="w-3.5 h-3.5" />, label: 'AI development services · Build · Remote' }}
        title="Hire an AI developer"
        accent="who ships production AI"
        actions={
          <>
            <Link
              href={contactHref('ai-implementation')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 group"
            >
              <span>Send me your AI project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#open-source"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/45 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all"
            >
              <span>Read the code I maintain</span>
            </Link>
          </>
        }
        bottomStrip={
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs text-white/75">
            <span>
              Independent since 2015 · First Cursor Ambassador in Indonesia · MiniMax Dev Community Expert · Reply within 24 hours
            </span>
            <Link
              href="/jasa-implementasi-ai"
              className="text-[#FFB866] hover:text-white underline decoration-[#FFB866]/40 underline-offset-4 transition-colors"
            >
              Bahasa Indonesia
            </Link>
          </div>
        }
      >
        <p>
          For European (EU and UK) and Indonesian engineering teams looking to hire an AI developer or AI consultant to join their AI and app builds, take a pilot to production, or ship agents, chatbots, and MCP tools inside an existing repo. I am Aris Setiawan, with 13+ years shipping TypeScript, Next.js, Rust, databases, and infrastructure.
        </p>
      </PageHero>

      {/* Band 1: Dark Proof Band: Project notes */}
      <section className="w-full ahrefs-dark-band text-white py-16 md:py-24" aria-labelledby="project-notes">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
              01 / Production notes
            </span>
            <h2 id="project-notes" className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Project notes
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              All my client work is under NDA. These notes are generalized: no client names, sectors, or figures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectNotes.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#3A57FC]/70 p-6 md:p-7 transition-all flex flex-col"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] mb-3">
                  Note {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-5">
                  {item.title}
                </h3>
                <div className="space-y-4 mt-auto">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#93A8FF] mb-1.5">
                      The problem
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{item.problem}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-400 mb-1.5">
                      What I built
                    </p>
                    <p className="text-sm text-zinc-200 leading-relaxed">{item.built}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Band 2: White: Why AI pilots stall */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="why-pilots-stall">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-10 md:mb-12">
            <span className="section-index block mb-2">02 / The failure modes</span>
            <h2 id="why-pilots-stall" className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-4">
              Why AI pilots stall before production
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              In an RSM survey of middle-market companies (July 2026, as summarized by{' '}
              <a
                href="https://dkstudio.ai/insights/ai-implementation-partner"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                DK Studio
              </a>
              ), data quality and integration were the top blockers among teams with limited pilot success. Both are software engineering problems, and they are the work I do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stallReasons.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all"
              >
                <span className="inline-flex items-center justify-center rounded-md bg-[#EEF2FF] border border-[#DDE4FF] px-2.5 py-1 font-mono text-xs font-bold text-[#3A57FC] mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 3: Subtle Gray: What I build */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24" aria-labelledby="what-i-do">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">03 / Scope options</span>
            <h2 id="what-i-do" className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
              What I build
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Pick the shape that fits your stage, or send me your repo and I will tell you which one saves you the most time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all flex flex-col"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-5 flex-grow">{item.body}</p>
                {item.href && item.cta && (
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] transition-colors mt-auto pt-4 border-t border-[#E5E7EB]"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 4: White: Full-stack skills */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="stack-behind-ai">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">04 / Engineering stack</span>
            <h2 id="stack-behind-ai" className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
              Full-stack skills behind every AI build
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              An LLM wrapper is easy. Shipping AI inside real auth, billing, databases, and legacy apps takes years of production engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stackCapabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 5: Subtle Gray: How I work */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24" aria-labelledby="how-i-work">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">05 / Buyer answers</span>
            <h2 id="how-i-work" className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
              How I work, in plain answers
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              These are the questions a careful buyer asks before choosing an AI engineering partner.
            </p>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howIWork.map((item, idx) => (
              <div
                key={item.question}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all"
              >
                <span className="font-mono text-xs font-bold text-[#3A57FC] block mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <dt className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2">
                  {item.question}
                </dt>
                <dd className="text-sm text-[#4B5563] leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Band 6: White: Open source projects */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <OpenSourceProjects className="mb-0" />
        </div>
      </section>

      {/* Band 7: Subtle Gray: Good fit & poor fit */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24" aria-labelledby="fit">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">06 / Qualification</span>
            <h2 id="fit" className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
              Good fit and poor fit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#DDE4FF] bg-white p-6 md:p-7 shadow-xs">
              <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-4">Good fit if:</h3>
              <ul className="space-y-3.5">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563] leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
              <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-4">Poor fit if:</h3>
              <ul className="space-y-3.5">
                {poorFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563] leading-relaxed">
                    <XCircle className="w-5 h-5 text-[#6B7280] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Band 8: White: FAQ */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Faq
            id="ai-implementation-faq"
            title="Questions about hiring an AI engineer"
            faqs={faqs}
            className="mb-0"
          />
        </div>
      </section>

      {/* Band 9: Subtle Gray: CTA Band */}
      <section className="w-full bg-[#F8FAFC] border-t border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Send me your AI project"
            body="Tell me what the pilot or feature needs to do, where your data lives, and who will use it. I reply within 24 hours with questions or a plain answer on whether I am the right fit."
            primary={{ href: contactHref('ai-implementation'), label: 'Send me your AI project' }}
            secondary={{ href: '/services/ai-development/ai-mvp', label: 'Build a new AI MVP instead' }}
          />

          <p className="text-center text-sm text-[#4B5563] mt-8 max-w-lg mx-auto">
            Perusahaan besar di Indonesia? Lihat{' '}
            <Link href="/jasa-implementasi-ai" className={linkClass}>
              implementasi AI untuk perusahaan
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
