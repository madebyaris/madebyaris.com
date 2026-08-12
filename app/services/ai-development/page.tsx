import type { Metadata } from 'next'
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Bot,
  MessageSquare,
  Workflow,
  Plug,
  Rocket,
  Briefcase,
  Calendar,
  Users,
  Code2,
} from 'lucide-react'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

const pageTitle = 'Hire an AI Developer | Agents, Chatbots & Integrations | Aris Setiawan'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://madebyaris.com/services/ai-development/#webpage',
  name: pageTitle,
  description:
    'Hire an AI developer for product features, agents, chatbots, and AI integrations on modern Next.js stacks. Remote-friendly. Practical delivery — not slide decks.',
  url: 'https://madebyaris.com/services/ai-development',
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = buildPageMetadata({
    title: 'Hire an AI Developer | Agents, Chatbots & Integrations',
    description:
      'Hire an AI developer for product features, agents, chatbots, and AI integrations on modern Next.js stacks. Remote-friendly. Practical delivery — not slide decks.',
    path: '/services/ai-development',
  })

  return {
    ...metadata,
    title: { absolute: pageTitle },
    openGraph: { ...metadata.openGraph, title: pageTitle },
    twitter: { ...metadata.twitter, title: pageTitle },
    keywords: [
      'Hire AI Developer',
      'AI Product Development',
      'AI Chatbot Developer',
      'LLM Integration',
      'Agentic Workflows',
      'Next.js AI Developer',
      'OpenAI Integration',
      'Remote AI Developer',
    ],
  }
}

const helpWith = [
  {
    title: 'AI features in existing apps',
    description: 'Add summarization, search, or smart forms to a product you already run.',
    icon: Sparkles,
  },
  {
    title: 'Chatbots & assistants',
    description: 'Customer support bots, internal copilots, and guided workflows users actually use.',
    icon: MessageSquare,
  },
  {
    title: 'Agentic workflows',
    description: 'Multi-step agents that call tools, APIs, and your own data — with guardrails.',
    icon: Workflow,
  },
  {
    title: 'API & LLM integrations',
    description: 'OpenAI, Anthropic, or compatible APIs wired cleanly into your backend.',
    icon: Plug,
  },
  {
    title: 'AI-assisted product MVPs',
    description: 'Ship a focused AI slice fast — then harden it for production.',
    icon: Rocket,
  },
]

const engagementOptions = [
  {
    title: 'Fixed-scope feature',
    description: 'One chatbot, one integration, or one AI-powered flow with a clear deliverable.',
  },
  {
    title: 'Product sprint',
    description: '2–4 weeks to add AI capabilities to an existing app or launch an AI MVP.',
  },
  {
    title: 'Retainer',
    description: 'Ongoing AI feature work, model updates, and iteration after launch.',
  },
]

const processSteps = [
  { title: 'Scope', description: 'Use case, data boundaries, and what “good” looks like.' },
  { title: 'Prototype', description: 'Working slice early — not a months-long research phase.' },
  { title: 'Integrate', description: 'Production wiring, auth, logging, and cost controls.' },
  { title: 'Ship', description: 'Launch, monitor, and hand off docs your team can extend.' },
]

const stackItems = [
  'Next.js',
  'TypeScript',
  'React',
  'Node.js',
  'OpenAI / compatible APIs',
  'Vercel AI SDK',
  'Vercel',
  'PostgreSQL',
  'Vector search (when needed)',
]

const faqs = [
  {
    question: 'Do you work remotely with US / EU / Asia teams?',
    answer: 'Yes. Async-first with overlap hours by agreement.',
  },
  {
    question: 'Can you work in an existing codebase?',
    answer: 'Yes — that’s the usual case. I add AI features without rewriting your whole app.',
  },
  {
    question: 'Is this the same as Cursor mentoring?',
    answer:
      'No. This page is Build — shipping AI into products. For coaching and workflows, see Level up (Vibe Code Friend).',
    link: '/services/vibe-code-friend',
  },
  {
    question: 'Indonesia-based — worldwide clients?',
    answer:
      'Based in Indonesia, clients anywhere. Bahasa-friendly pages available if your team prefers it.',
  },
]

export default function AiDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
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
          <span className="block gradient-text font-light">for real product work</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          I help startups and teams add AI to production apps — agents, chatbots, workflow automation,
          and LLM integrations — usually on Next.js/TypeScript stacks.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Hire me to build</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/nextjs-development"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow:
                '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient':
                'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
              '--border-radius-before': '9999px',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Next.js builds</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>

        <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed">
          13+ years · Cursor Ambassador Indonesia · MiniMax Dev Community Expert · Full-stack product
          engineer, not an ML research lab
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* What I help with */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Services
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What I <span className="gradient-text">help with</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {helpWith.map((item) => (
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

      {/* How this is different */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Bot className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Approach
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How this is <span className="gradient-text">different</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-medium text-center">
            I&apos;m a full-stack product engineer who ships AI into apps — not a pure ML research shop
            selling experiments. I use Cursor and modern AI tooling daily (Cursor Ambassador) to move
            faster while keeping code reviewable and maintainable.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Engagement options */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Engagements
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Engagement <span className="gradient-text">options</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {engagementOptions.map((option, index) => (
            <div key={option.title} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{option.title}</h3>
              <p className="text-sm text-zinc-500">{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Stack */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Stack I use <span className="gradient-text">most</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-2xl mx-auto font-medium">
            Honest tooling — what fits your product, not buzzword bingo.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {stackItems.map((tech) => (
              <div
                key={tech}
                className="p-3 bg-zinc-50 rounded-xl text-center text-xs font-medium text-zinc-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            <span className="gradient-text">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Common <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white/80 backdrop-blur-sm rounded-xl p-5">
              <h3 className="font-semibold text-zinc-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {faq.answer}
                {'link' in faq && faq.link && (
                  <>
                    {' '}
                    <Link href={faq.link} className="text-orange-500 hover:underline">
                      Level up (Vibe Code Friend) →
                    </Link>
                  </>
                )}
              </p>
            </div>
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
            Ready to add AI to your product?
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/nextjs-development"
              className="group flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition-all text-white text-sm font-medium rounded-full px-6 py-3 border border-zinc-700 hover:-translate-y-0.5"
            >
              <Code2 className="w-4 h-4" />
              <span>Next.js development</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
