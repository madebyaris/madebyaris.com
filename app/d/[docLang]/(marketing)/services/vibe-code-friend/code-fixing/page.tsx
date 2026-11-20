import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCode,
  Shield,
  Wrench,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/vibe-code-friend/code-fixing'
const pageTitle = 'Fix AI-Generated Code: Vibe Coding Cleanup'
const pageDescription =
  'Your AI-built app broke and nobody can explain the code? I fix AI-generated code, clean up vibe coding messes, and quote a fixed price after I read it.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'fix AI-generated code',
    'vibe coding cleanup',
    'code debugging service',
    'fix Cursor code',
    'AI code cleanup',
  ],
})

const symptoms = [
  'The build fails after a dependency or framework update',
  'The app works on your laptop and breaks after deploy',
  'Every fix the AI suggests breaks something else',
  'Pages got slow and you can’t tell which change did it',
  'An API or third-party integration fails without a clear error',
  'Nobody on the team can explain what the code does anymore',
]

const deliverables = [
  {
    title: 'A working fix in your repo',
    description: 'Delivered as a commit or pull request, with the smallest change that solves the cause.',
    icon: CheckCircle2,
  },
  {
    title: 'A written explanation',
    description: 'What broke, why, and how to spot it next time, so you or your AI editor don’t repeat it.',
    icon: FileCode,
  },
  {
    title: 'Your code stays private',
    description: 'Your code and business logic stay confidential. I can sign an NDA for sensitive projects.',
    icon: Shield,
  },
]

const pricingSteps = [
  { step: 1, title: 'Send the code', desc: 'Repo access or a zip, the error, and what you expected to happen' },
  { step: 2, title: 'I read it', desc: 'I find what I think is wrong and tell you in plain words' },
  { step: 3, title: 'Fixed quote', desc: 'One fixed price for the fix. You decide whether to go ahead' },
  { step: 4, title: 'Fix and explain', desc: 'You get the fix plus a written note on the cause' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does it cost to fix AI-generated code?',
    answer:
      'I look at the code first, then quote a fixed price for the fix. There’s no fixed menu, because a missing environment variable and a broken login flow are very different jobs. You see the price before any work starts.',
  },
  {
    question: 'What do you need from me to start?',
    answer:
      'Repo access or a zip of the code, the exact error message or a screen recording, the steps that trigger the bug, and what you expected to happen. If the app is deployed, tell me where.',
  },
  {
    question: 'Which stacks do you fix?',
    answer:
      'TypeScript and JavaScript apps (Next.js, React, Vite, Fastify, Node.js), Rust and Tauri tools, PostgreSQL and MySQL backends, plus PHP and WordPress. If your stack is outside what I ship daily, I tell you before quoting.',
  },
  {
    question: 'Will I understand the fix afterward?',
    answer:
      'Yes. Every fix comes with a short written explanation of the cause and how to avoid it. If you use Cursor or another AI editor, I’ll note what to add to your project rules so it stops happening.',
  },
  {
    question: 'Is my code kept confidential?',
    answer:
      'Yes. Your code and business logic stay private, and I can sign an NDA before you share the repo.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Cursor mentoring', path: '/services/vibe-code-friend' },
    { name: 'Fix AI-generated code', path },
  ],
  service: {
    name: 'Fix AI-generated code and vibe coding cleanup',
    description: pageDescription,
    serviceType: 'Code Debugging',
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: [
      { name: 'Bug diagnosis in AI-generated code' },
      { name: 'Build and deploy failure fixes' },
      { name: 'Vibe coding cleanup' },
      { name: 'Written explanation of each fix' },
    ],
  },
})

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'
const darkLinkClass =
  'text-[#93A8FF] underline decoration-[#93A8FF]/40 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors font-medium'

export default function CodeFixingPage() {
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
            <Link href="/services/vibe-code-friend" className="hover:text-[#3A57FC] transition-colors">
              Cursor mentoring
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li className="text-[#0B0C0E] font-semibold">Fix AI-generated code</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Wrench className="w-3.5 h-3.5" />, label: 'Level up · Code fixing' }}
        title="Fix AI-generated code"
        accent="that stopped working"
        actions={
          <>
            <Link
              href={contactHref('code-fixing')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Send me the broken repo</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#pricing"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>See how pricing works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For founders and European or Indonesian teams whose app was generated with Cursor, Claude, or ChatGPT and now breaks in ways nobody can explain. I am a senior AI software engineer with 13+ years shipping production codebases.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          Fixed price, quoted after I read your repo · English or Indonesian · CET/GMT morning overlap.
        </p>
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Approach</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          How I fix AI-generated code
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          I read the code before I touch it. I find the real cause of the bug, fix it with the smallest change that holds, and check that nothing around it broke. Then I explain in writing what went wrong, so you or your AI editor don’t repeat it. You get a fixed quote before any work starts.
        </p>
        <p className="text-[#374151] leading-relaxed">
          To catch this kind of bug before it merges, use my{' '}
          <Link href="/blog/pr-review-checklist-for-ai-generated-code" className={linkClass}>
            PR review checklist for AI-generated code
          </Link>
          .
        </p>
      </section>

      <section className="mb-16" aria-labelledby="symptoms">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-10 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
          <div className="max-w-2xl mb-6">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
              Sound familiar?
            </span>
            <h2 id="symptoms" className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
              When you need vibe coding cleanup
            </h2>
            <p className="text-sm text-white/75">
              Baca juga:{' '}
              <Link href="/blog/technical-debt-pada-aplikasi-buatan-ai" className={darkLinkClass}>
                technical debt pada aplikasi buatan AI
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {symptoms.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.04]">
                <AlertCircle className="w-5 h-5 text-[#FFB866] mt-0.5 shrink-0" />
                <p className="text-sm text-white/85 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="deliverables">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Deliverables</span>
          <h2 id="deliverables" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What you <span className="gradient-text">get back</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverables.map((item) => (
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

      <section id="pricing" className="mb-16 scroll-mt-24" aria-labelledby="pricing-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Fixed quote</span>
          <h2 id="pricing-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How <span className="gradient-text">pricing works</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            I look at the code first, then quote a fixed price for the fix. You know the cost before I start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pricingSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B0C0E] text-[#FFB866] font-mono text-xs font-bold mb-4">
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-1.5">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq id="code-fixing-faq" title="Questions about fixing AI-generated code" faqs={faqs} />

      <CtaBand
        title="Send me the code that broke"
        body="You’ll get a fixed quote after I read it, and you decide whether to go ahead. If the code isn’t worth fixing, or a rewrite would cost you less, I’ll tell you."
        primary={{ href: contactHref('code-fixing'), label: 'Send me the broken repo' }}
        secondary={{ href: '/services/vibe-code-friend/ai-ide-tutoring', label: 'Learn Cursor so it breaks less' }}
      />
    </>
  )
}
