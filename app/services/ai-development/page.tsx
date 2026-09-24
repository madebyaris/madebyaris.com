import type { Metadata } from 'next'
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Bot,
  MessageSquare,
  Workflow,
  Plug,
  Gauge,
  CheckCircle2,
  XCircle,
  Code2,
} from 'lucide-react'
import Link from 'next/link'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400

const path = '/services/ai-development'
const pageTitle = 'Hire an AI Developer for Agents and Chatbots'
const pageDescription =
  'Hire an AI developer to ship agents, chatbots, and LLM features inside your existing Next.js app, with logging and spend limits from day one.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'hire an AI developer',
    'AI integration services',
    'AI chatbot development',
    'AI agent development',
    'Next.js AI developer',
    'LLM integration',
  ],
})

const outcomes = [
  {
    title: 'AI inside the app you already run',
    description:
      'Summaries, search, or smart forms added to your current product, so users get the feature without you funding a rewrite.',
    icon: Sparkles,
  },
  {
    title: 'A chatbot that answers from your content',
    description:
      'Customers or staff get answers from your own docs and data, with a clear handoff to a person when the bot doesn’t know.',
    icon: MessageSquare,
  },
  {
    title: 'Agents that ask before risky steps',
    description:
      'Multi-step agents call your tools and APIs, and a person approves anything that sends, deletes, or charges.',
    icon: Workflow,
  },
  {
    title: 'One clean model layer',
    description:
      'OpenAI, Anthropic, or a compatible API sits behind one server layer, which means you can switch models later without touching every feature.',
    icon: Plug,
  },
  {
    title: 'No surprise model bill',
    description:
      'Logging and spend limits go in with the first release, so you can see what each feature costs and cap it.',
    icon: Gauge,
  },
]

const goodFit = [
  'You have a working product and want one AI feature users will actually touch',
  'A support bot or internal assistant needs to answer from your own docs or data',
  'A repetitive step like triage, tagging, or drafting replies should run as an agent with a human check',
  'A demo works on a laptop and now has to hold up with real users',
]

const poorFit = [
  'You need a model trained from scratch or ML research',
  'There’s no product or data yet, only a plan to “add AI”',
  'You want your own developers to learn Cursor (that’s Cursor mentoring)',
]

const processSteps = [
  { title: 'Scope', description: 'The use case, which data the model may see, and what a good answer looks like.' },
  { title: 'Prototype', description: 'A working slice on your real data early, so you judge it by using it.' },
  { title: 'Integrate', description: 'Auth, logging, error handling, and spend limits wired into your app.' },
  { title: 'Ship', description: 'Launch, watch real usage, and hand over docs your team can extend.' },
]

const engagementOptions = [
  { title: 'Fixed-scope feature', description: 'One chatbot, one integration, or one AI flow with a clear deliverable.' },
  { title: 'Product sprint', description: 'A focused block of work to add AI to an existing app or launch an AI MVP.' },
  { title: 'Retainer', description: 'Ongoing AI feature work, model updates, and fixes after launch.' },
]

const faqs: FaqItem[] = [
  {
    question: 'Can you add AI to our existing codebase?',
    answer:
      'Yes, that’s the usual case. I work inside your repo, most often Next.js and TypeScript, and add the AI feature next to your current code. You don’t need a rewrite to get a chatbot, an agent, or an LLM-powered search.',
  },
  {
    question: 'Which AI models and providers do you use?',
    answer:
      'OpenAI, Anthropic, or any compatible API, often through the Vercel AI SDK on Next.js. I’m also a MiniMax Dev Community Expert. I pick the model for the task and your budget, and keep the provider behind one layer so switching later stays cheap.',
  },
  {
    question: 'How do you keep AI costs and wrong answers under control?',
    answer:
      'Every call is logged, each feature gets a spend limit, and I test prompts against a set of real questions before launch. For agents, anything that sends, deletes, or charges waits for a person to approve it.',
  },
  {
    question: 'Do you work remotely with US, EU, and Asia teams?',
    answer:
      'Yes. I’m based in Sidoarjo, Indonesia, and work remotely worldwide in English or Indonesian. Work is async-first, with overlap hours agreed at the start.',
  },
  {
    question: 'Is this the same as Cursor mentoring?',
    answer:
      'No. This page is for hiring me to build the AI feature. If you want your own developers to ship faster with Cursor, that’s Cursor mentoring, which I run as a separate service.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'AI Development', path },
  ],
  service: {
    name: 'AI development: agents, chatbots, and LLM integration',
    description: pageDescription,
    serviceType: 'AI Development',
    offers: [
      { name: 'AI features in existing apps' },
      { name: 'AI chatbot development' },
      { name: 'AI agent development' },
      { name: 'LLM and AI API integration' },
      { name: 'AI cost logging and spend limits' },
    ],
  },
  faqs,
})

export default function AiDevelopmentPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">AI development</li>
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
            '--border-radius-before': '9999px',
          }}
        >
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
            Build · AI · Remote
          </span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Hire an AI developer
          <span className="block gradient-text font-light">to ship it inside your app</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For founders and product teams who want an agent, chatbot, or LLM feature running in the product they already have. I’m a full-stack developer with 13+ years shipping web products, mostly on Next.js and TypeScript.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Independent since 2015 · Cursor Ambassador Indonesia · MiniMax Dev Community Expert
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('ai')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Scope my AI feature</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/ai-agent-development"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Read how I build AI agents</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What you get when you hire an AI developer from me
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          You get one senior full-stack developer who scopes, builds, and ships the AI feature into your existing product. That covers the model API calls, the prompts, the connection to your data, auth, logging, and a cap on model spend. I work inside your codebase and hand over code your team can read and extend.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I build product features on top of existing models. If you need a model trained from scratch, you need an ML research team.
        </p>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Is AI worth adding <span className="gradient-text">to your product?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            I’ll tell you if a plain feature would do the job better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Probably not a fit</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <XCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-500 mt-4">
              Want your team to learn it instead?{' '}
              <Link href="/services/vibe-code-friend" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
                See Cursor mentoring
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Bot className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">What changes for you</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            AI integration, chatbots, <span className="gradient-text">and agents</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            More detail in my guides to{' '}
            <Link href="/blog/ai-integration-services" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
              AI integration services
            </Link>{' '}
            and{' '}
            <Link href="/blog/ai-chatbot-development" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
              AI chatbot development
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the <span className="gradient-text">project runs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{step.title}</h3>
              <p className="text-sm text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-zinc-900 mb-4">Ways to work together</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {engagementOptions.map((option) => (
              <div key={option.title} className="p-4 bg-zinc-50 rounded-xl">
                <p className="text-sm font-semibold text-zinc-900 mb-1">{option.title}</p>
                <p className="text-sm text-zinc-500">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="ai-faq">
        <h2 id="ai-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Questions before you hire an AI developer
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

      {/* Closing CTA */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Have an AI feature in mind?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send me a few sentences on what it should do and where your data lives. I’ll reply with how I’d build it and a first scope. If a simpler feature without AI would work better, I’ll say so.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('ai')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Scope my AI feature</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/nextjs-development"
              className="group flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition-all text-white text-sm font-medium rounded-full px-6 py-3 border border-zinc-700 hover:-translate-y-0.5"
            >
              <Code2 className="w-4 h-4" />
              <span>See Next.js development</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
