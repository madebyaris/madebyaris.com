import type { Metadata } from 'next'
import { Wrench, ArrowRight, ArrowUpRight, CheckCircle2, AlertCircle, Shield, FileCode, Receipt } from 'lucide-react'
import Link from 'next/link'
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
      'Mostly JavaScript and TypeScript apps (React, Next.js, Node.js), plus PHP and WordPress. If your stack is outside what I know well, I’ll tell you after I look, before I quote.',
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
    offers: [
      { name: 'Bug diagnosis in AI-generated code' },
      { name: 'Build and deploy failure fixes' },
      { name: 'Vibe coding cleanup' },
      { name: 'Written explanation of each fix' },
    ],
  },
  faqs,
})

export default function CodeFixingPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/vibe-code-friend" className="hover:text-orange-500 transition-colors">Cursor mentoring</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Fix AI-generated code</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
            '--border-radius-before': '9999px'
          }}
        >
          <Wrench className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Level up · Code fixing</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Fix AI-generated code
          <span className="block gradient-text font-light">that stopped working</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For founders and developers whose app was built with Cursor, Claude, or ChatGPT and now breaks in ways nobody can explain. I’ve shipped web products for 13+ years and I write client code in Cursor every week.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Fixed price, quoted after I read your code.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('code-fixing')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Send me the broken repo</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="#pricing"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">See how pricing works</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          How I fix AI-generated code
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          I read the code before I touch it. I find the real cause of the bug, fix it with the smallest change that holds, and check that nothing around it broke. Then I explain in writing what went wrong, so you or your AI editor don’t repeat it. You get a fixed quote before any work starts.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          To catch this kind of bug before it merges, use my{' '}
          <Link href="/blog/pr-review-checklist-for-ai-generated-code" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            PR review checklist for AI-generated code
          </Link>
          .
        </p>
      </section>

      {/* Symptoms */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Sound familiar?</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            When you need <span className="gradient-text">vibe coding cleanup</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Baca juga:{' '}
            <Link href="/blog/technical-debt-pada-aplikasi-buatan-ai" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
              technical debt pada aplikasi buatan AI
            </Link>
            .
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {symptoms.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <p className="text-sm text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Deliverables */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What you <span className="gradient-text">get back</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {deliverables.map((item) => (
            <div key={item.title} className="bg-zinc-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <item.icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-semibold text-zinc-900">{item.title}</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How pricing works */}
      <section id="pricing" className="mb-16 scroll-mt-24">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Receipt className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Fixed quote</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How <span className="gradient-text">pricing works</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            I look at the code first, then quote a fixed price for the fix. You know the cost before I start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {pricingSteps.map((item) => (
            <div key={item.step} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 text-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="code-fixing-faq">
        <h2 id="code-fixing-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Questions about fixing AI-generated code
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm open:shadow-md">
              <summary className="cursor-pointer list-none font-semibold text-zinc-900 flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-orange-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Send me the code that broke
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            You’ll get a fixed quote after I read it, and you decide whether to go ahead. If the code isn’t worth fixing, or a rewrite would cost you less, I’ll tell you.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('code-fixing')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send me the broken repo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/vibe-code-friend/ai-ide-tutoring"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Learn Cursor so it breaks less</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
