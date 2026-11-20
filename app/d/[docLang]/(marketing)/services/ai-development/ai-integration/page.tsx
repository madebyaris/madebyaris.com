import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  Gauge,
  Layers,
  LineChart,
  MessageSquare,
  Plug,
  Search,
  Tags,
  Workflow,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { HeroImage } from '@/components/page/hero-image'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/ai-development/ai-integration'
const pageTitle = 'AI Integration Services for Existing Apps'
const pageDescription =
  'AI integration services for EU and Indonesian teams: docs Q&A, support drafts, data extraction, and AI agents inside your existing codebase with spend caps.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/ai-integration.jpg',
  keywords: [
    'AI integration services',
    'generative AI integration services',
    'add AI to an existing app',
    'AI features for business',
    'integrate ChatGPT into a website',
    'AI chatbot for business',
    'AI agents',
    'AI developer Europe',
  ],
})

const examples = [
  {
    title: 'Search and Q&A over your own docs',
    description:
      'Staff or customers ask a question and get an answer drawn from your docs, policies, or product pages, with a link to the source.',
    icon: Search,
  },
  {
    title: 'Drafted replies for support',
    description:
      'The model reads the ticket and your help content, then drafts a reply. A person edits it and presses send.',
    icon: MessageSquare,
  },
  {
    title: 'Summaries and tags on records',
    description:
      'Long notes, calls, or tickets get a short summary and consistent tags, so your lists are easier to filter and report on.',
    icon: Tags,
  },
  {
    title: 'Data pulled from documents and invoices',
    description:
      'Names, dates, totals, and line items come out of PDFs and scans into your database. Rows the model is unsure about get flagged for review.',
    icon: FileText,
  },
  {
    title: 'An assistant inside your dashboard',
    description:
      'Users ask about their own data in plain language. The assistant answers only from what their account is allowed to see.',
    icon: Bot,
  },
  {
    title: 'An agent that runs a workflow',
    description:
      'It works through a multi-step task with your tools and APIs. Anything that sends, deletes, or charges waits for a person to approve it.',
    icon: Workflow,
  },
]

const stacks = [
  {
    title: 'Next.js and React',
    description:
      'The usual case. I add the feature inside your repo, often with the Vercel AI SDK, and stream answers into your existing UI.',
    href: '/services/nextjs-development',
    linkLabel: 'Next.js development',
  },
  {
    title: 'WordPress',
    description:
      'A plugin or a headless front end calls the model from the server. The API key never reaches the browser, and answers can come from your posts.',
    href: '/services/wordpress',
    linkLabel: 'WordPress development',
  },
  {
    title: 'PHP and Laravel',
    description:
      'A service class or API route in your PHP app handles the model calls. Your existing auth and database stay as they are.',
    href: '/services/php-development/api-development',
    linkLabel: 'PHP API development',
  },
  {
    title: 'Any app with an API',
    description:
      'If your system has an API, I build the AI feature as a small service that talks to it. Your main app needs few or no changes.',
  },
]

const costLevers = [
  {
    title: 'Cache repeated answers',
    description: 'Questions that repeat get the stored answer back, with no new model call.',
    icon: Database,
  },
  {
    title: 'Small models for simple steps',
    description: 'Tagging, routing, and short extractions run on a small model. The larger one handles the step where quality shows.',
    icon: Layers,
  },
  {
    title: 'Spend caps',
    description: 'Each feature and each user gets a limit, so a bug or one heavy user cannot run up the bill.',
    icon: Gauge,
  },
  {
    title: 'Cost per action, measured',
    description: 'Every call is logged with its feature. You see what one answer, one draft, or one extracted invoice costs.',
    icon: LineChart,
  },
]

const goodFit = [
  'One repetitive task eats hours, like answering the same questions or copying data out of documents',
  'Your docs, records, or tickets already hold the answers your users need',
  'You run a working app on Next.js, WordPress, PHP, or anything with an API',
  'You want to try the feature with a few users before everyone gets it',
]

const poorFit = [
  'There is no product or data yet (an AI MVP is the better place to start)',
  'You need a model trained from scratch or ML research',
  'You want AI on every page with no task in mind',
  'You want your own developers to learn to build with Cursor (that is Cursor mentoring)',
]

const processSteps = [
  { step: 1, title: 'Pick one workflow', desc: 'One task with an outcome we can measure, like time per ticket' },
  { step: 2, title: 'Prototype on your data', desc: 'A working slice on your real records, so you judge it by using it' },
  { step: 3, title: 'Ship behind a flag', desc: 'Live for a few users while everyone else sees the current app' },
  { step: 4, title: 'Measure', desc: 'Answer quality, cost per action, and whether people keep using it' },
  { step: 5, title: 'Roll out', desc: 'Open it to everyone, or change course before more money goes in' },
]

const topics = [
  {
    title: 'How AI integration works, step by step',
    description: 'My longer guide to AI integration and what each step involves.',
    href: '/blog/ai-integration-services',
  },
  {
    title: 'Building an AI chatbot for business',
    description: 'A chatbot that answers from your content and hands off to a person.',
    href: '/blog/ai-chatbot-development',
  },
  {
    title: 'AI agent development',
    description: 'Agents that call your tools and ask before risky steps.',
    href: '/blog/ai-agent-development',
  },
  {
    title: 'Machine learning in a Next.js product',
    description: 'How a model fits into a Next.js app you already run.',
    href: '/blog/integrate-machine-learning-into-nextjs-product',
  },
  {
    title: 'AI engineering and implementation',
    description: 'Take an AI pilot to production with evals, logging, and spend caps.',
    href: '/ai-implementation',
  },
  {
    title: 'AI MVP development',
    description: 'A new AI product built from your idea to launch.',
    href: '/services/ai-development/ai-mvp',
  },
  {
    title: 'Fix AI-written code',
    description: 'For an app or prototype written with AI tools that now breaks.',
    href: '/services/vibe-code-friend/code-fixing',
  },
  {
    title: 'PR review checklist for AI-generated code',
    description: 'The checks I run on code written with AI tools before it merges.',
    href: '/blog/pr-review-checklist-for-ai-generated-code',
  },
]

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'

const faqs: FaqItem[] = [
  {
    question: 'How much do AI integration services cost?',
    answer:
      'I scope and price each feature after a call, because a docs search and an agent that touches billing are different work. Send me the task and where your data lives. I reply with how I would build it and a price for that scope. Model usage is billed by your provider, and I measure it per action before rollout.',
  },
  {
    question: 'Which AI model or provider do you use?',
    answer:
      'I pick the model per task, and I am not tied to one provider. That usually means OpenAI, Anthropic, MiniMax, or another compatible API, behind one server layer. You can switch providers later without rewriting the feature.',
  },
  {
    question: 'Is my data safe with an AI integration?',
    answer:
      'The model only sees the fields a task needs, and the API key stays on your server. I choose provider settings that keep your data out of model training where the provider allows it. Sensitive fields can be masked before the call.',
  },
  {
    question: 'Can you add AI to WordPress?',
    answer:
      'Yes. I build WordPress plugins and headless WordPress sites, so the AI feature can live in a plugin or in a Next.js front end. Either way the model call runs on the server, and answers can come from your posts and pages.',
  },
  {
    question: 'What if the AI gives wrong answers?',
    answer:
      'It will sometimes, so I plan for it. I test against a set of real cases before launch and show the source with each answer. When the model is unsure, it hands off to a person. Actions that send, delete, or charge wait for approval.',
  },
  {
    question: 'Can my team maintain it after you finish?',
    answer:
      'Yes. The code, prompts, and test cases live in your repo, written in the same style as the rest of your app. I hand over notes on how it fits together, and I can stay on a retainer for model updates and fixes.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'AI engineering', path: '/ai-implementation' },
    { name: 'AI integration', path: pagePath },
  ],
  service: {
    name: 'AI integration services',
    description: pageDescription,
    serviceType: 'AI Integration',
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: [
      { name: 'Search and Q&A over your own docs' },
      { name: 'AI support reply drafting' },
      { name: 'Document and invoice data extraction' },
      { name: 'In-app AI assistant' },
      { name: 'AI agents with human approval' },
      { name: 'AI cost logging and spend caps' },
    ],
  },
})

export default function AiIntegrationPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#525660]">
          <li>
            <Link href="/services" className="hover:text-[#3A57FC] transition-colors">
              Services
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li>
            <Link href="/ai-implementation" className="hover:text-[#3A57FC] transition-colors">
              AI engineering
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li className="text-[#0B0C0E] font-semibold">AI integration</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Plug className="w-3.5 h-3.5" />, label: 'AI features for an existing product' }}
        title="AI integration services"
        accent="for the product you already run"
        actions={
          <>
            <Link
              href={contactHref('ai')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Scope my AI feature</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#examples"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>See AI features I can add</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For European (EU and UK) and Indonesian product teams who want production AI features wired directly into the
          app, API, or tools they already run. I work inside your existing repo with evals, spend caps, and morning
          overlap in CET and GMT.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          Senior AI software engineer · 13+ years shipping TypeScript, Next.js, React, Fastify, Rust, PHP, and WordPress ·
          First Cursor Ambassador in Indonesia · MiniMax Dev Community Expert.
        </p>
      </PageHero>

      <HeroImage src="/images/services/ai-integration.jpg" alt="Illustration of an AI module plugging into an existing business dashboard, with documents flowing into it" />

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Overview</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What my AI integration services cover
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          AI integration services add a model-powered feature to software you already run. I pick one workflow, connect a
          model to your data through your own server, and ship it with logging, spend caps, and tested answers. You keep your
          current app, and your team gets code they can read.
        </p>
        <p className="text-[#374151] leading-relaxed">
          This page is about hiring me to do the work. For the technical walk-through, read{' '}
          <Link href="/blog/ai-integration-services" className={linkClass}>
            how AI integration works, step by step
          </Link>
          . If you have an idea and no product yet, start with{' '}
          <Link href="/services/ai-development/ai-mvp" className={linkClass}>
            AI MVP development
          </Link>
          .
        </p>
      </section>

      <section id="examples" className="mb-16 scroll-mt-32" aria-labelledby="examples-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Use cases</span>
          <h2 id="examples-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            AI features for business <span className="gradient-text">I can add</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Most requests fall into one of these. The details are in my guides to{' '}
            <Link href="/blog/ai-chatbot-development" className={linkClass}>
              building an AI chatbot for business
            </Link>{' '}
            and{' '}
            <Link href="/blog/ai-agent-development" className={linkClass}>
              AI agents
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="stacks">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Compatibility</span>
          <h2 id="stacks" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Add AI to an existing app <span className="gradient-text">without a rewrite</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            A common request is to integrate ChatGPT into a website. I build it so the model call runs on your server,
            answers come from your content, and each user has a usage cap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7"
            >
              <h3 className="font-display font-bold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
              {item.href && (
                <Link href={item.href} className={`inline-flex items-center gap-1.5 text-sm mt-4 ${linkClass}`}>
                  {item.linkLabel}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="privacy">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-10 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)] max-w-4xl mx-auto">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
            Security &amp; governance
          </span>
          <h2 id="privacy" className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            Data privacy and model training
          </h2>
          <p className="text-white/85 leading-relaxed mb-4">
            Before I connect anything, we agree on which data the model may see. I send it only the fields a task needs. Names,
            emails, or account numbers can be masked before the call.
          </p>
          <p className="text-white/80 leading-relaxed">
            I check each provider&apos;s data terms and choose settings that keep your data out of model training, where the
            provider allows it. The API key stays on your server. The logs of prompts and answers go to your own database.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="cost">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Unit economics</span>
          <h2 id="cost" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Cost control for <span className="gradient-text">generative AI integration</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Generative AI integration services get expensive when every click calls a model. Plain code handles what it can,
            and the model runs only on the step that needs it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {costLevers.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="evaluation">
        <span className="section-index block mb-2">Quality gates</span>
        <h2 id="evaluation" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Testing AI answers before launch
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          Before launch, I build a set of real cases from your data: questions, tickets, or documents with the answer you
          expect. Every prompt or model change runs against that set. We see whether it got better or worse before users do.
        </p>
        <p className="text-[#374151] leading-relaxed">
          When the model is unsure, or the question falls outside your content, the feature says so and hands off to a
          person. Wrong answers still happen sometimes. That is why risky actions wait for a person to approve them.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Delivery process</span>
          <h2 id="process" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How an AI integration <span className="gradient-text">rolls out</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Small first, so you find out whether the feature pays for itself before every user has it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B0C0E] text-[#FFB866] font-mono text-xs font-bold mb-4">
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-1.5 text-sm">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Qualification</span>
          <h2 id="fit" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Is adding AI worth it <span className="gradient-text">for your business?</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            If a plain feature would do the job better, I will tell you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF]/70 p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                  <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Look elsewhere</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                  <XCircle className="w-5 h-5 text-[#64748B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#4B5563] mt-5 pt-4 border-t border-[#E5E7EB]">
              Starting from an idea?{' '}
              <Link href="/services/ai-development/ai-mvp" className={linkClass}>
                See AI MVP development
              </Link>
              . Want your team to learn it?{' '}
              <Link href="/services/vibe-code-friend" className={linkClass}>
                See Cursor mentoring
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="topics">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Further reading</span>
          <h2 id="topics" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            AI integration guides <span className="gradient-text">and related services</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            What I have written about AI features, next to the services that put it into practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 group"
            >
              <h3 className="font-display font-bold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors mb-1.5 flex items-center justify-between gap-3">
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#3A57FC] group-hover:translate-x-1 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq
        id="ai-integration-faq"
        title="AI integration services FAQ"
        faqs={faqs.map((faq) =>
          faq.question === 'Can you add AI to WordPress?'
            ? {
                ...faq,
                answer: (
                  <>
                    Yes. I build{' '}
                    <Link href="/services/wordpress/plugin-development" className={linkClass}>
                      WordPress plugins
                    </Link>{' '}
                    and headless WordPress sites, so the AI feature can live in a plugin or in a Next.js front end. Either way the model call runs on the server, and answers can come from your posts and pages.
                  </>
                ),
              }
            : faq,
        )}
      />

      <CtaBand
        title="Have one task you want AI to handle?"
        body="Send me the task, the app it lives in, and where the data is. I reply with how I would build it and how we would test it. If plain code would do the job better, I will tell you."
        primary={{ href: contactHref('ai'), label: 'Scope my AI feature' }}
        secondary={{ href: '/services/ai-development/ai-mvp', label: 'Build a new AI product instead' }}
      />
    </>
  )
}
