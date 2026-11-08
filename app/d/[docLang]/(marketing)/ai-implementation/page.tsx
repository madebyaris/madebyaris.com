import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  GraduationCap,
  Plug,
  Repeat,
  Rocket,
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
const pageTitle = 'AI implementation for engineering teams'
const pageDescription =
  'Take your AI pilot to production, or ship an AI feature in your own repo, with test cases, logging, and spend caps. Independent senior engineer, 13+ years.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/ai-integration.jpg',
  keywords: [
    'AI implementation services',
    'AI implementation partner',
    'AI pilot to production',
    'AI integration services',
    'AI agent development',
    'hire an AI engineer',
    'independent AI engineer',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

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
    body: 'You have a pilot that works in a demo. I add test cases built from your own inputs, logging, error handling, and spend caps, then hand it over.',
    href: '/services/ai-development/ai-integration',
    cta: 'See AI integration',
  },
  {
    icon: Plug,
    title: 'An AI feature inside your product',
    body: 'Search, summaries, an assistant that answers from your data, or smart forms, added next to your current code. No rewrite.',
    href: '/services/ai-development',
    cta: 'See AI development',
  },
  {
    icon: Bot,
    title: 'Agents and MCP tools',
    body: 'Agents that call your tools and APIs, where a person approves anything that sends, deletes, or charges.',
    href: '/blog/ai-agent-development',
    cta: 'Read how I scope agents',
  },
  {
    icon: Repeat,
    title: 'Engineering retainer',
    body: 'A fixed monthly block for AI feature work, model updates, and fixes after launch.',
  },
  {
    icon: GraduationCap,
    title: 'Cursor rollout for your engineers',
    body: 'Your team bought seats and the PRs got messier. I set up project rules and a review habit on one real repo.',
    href: '/services/vibe-code-friend',
    cta: 'See Cursor mentoring',
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
    question: 'How much does AI implementation cost?',
    answer:
      'It depends on the use case, the data, and how many systems it touches. Most projects start from $5,000. After a short scoping call you get a written plan with milestones and a quote before any code is written.',
  },
  {
    question: 'Can you work inside our existing codebase?',
    answer:
      'Yes, that is the usual case. I work in your repo, most often Next.js and TypeScript, and add the AI feature next to your current code. You do not need a rewrite.',
  },
  {
    question: 'Which models do you use?',
    answer:
      'OpenAI, Anthropic, or a compatible API, behind one server layer. That way you can switch models later without touching every feature.',
  },
  {
    question: 'Do you work with teams outside Indonesia?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia (UTC+7) and work with startups and teams in Europe, Asia, the US, and the Middle East. I work Monday to Saturday, 9:00 to 17:00 WIB, in English or Indonesian, and we set a weekly check-in time during scoping.',
  },
  {
    question: 'Who will I be working with?',
    answer:
      'Me. I lead every project and answer your messages myself. When a project needs more hands, trusted partners join, and I tell you before we start. AI agents do much of the build.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'AI implementation', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'AI implementation',
    areaServed: 'Worldwide',
  },
})

export default function AiImplementationPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">AI implementation</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Rocket className="w-4 h-4 text-orange-500" />, label: 'AI implementation' }}
        title="Take your AI pilot to production,"
        accent="inside your own repo"
        actions={
          <>
            <Link
              href={contactHref('ai-implementation')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Send me your AI project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#open-source"
              className="btn-secondary hover:bg-zinc-50 transition-all inline-flex text-sm font-medium text-black/60 rounded-full py-3 px-6 items-center"
            >
              Read the code I maintain
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For founders, CTOs, and product leads at small and mid-sized companies in Europe, Asia, and beyond, whose AI pilot
          works in a demo and stalls before real users. I am Aris Setiawan, with 13+ years shipping web products. I work inside
          your codebase, so you end up with code your team can read and extend.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          I reply within 24 hours and tell you plainly whether I am the right fit.
        </p>
      </PageHero>

      <section className="mb-16" aria-labelledby="project-notes">
        <div className="max-w-2xl mb-8">
          <h2 id="project-notes" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Project notes
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            All my client work is under NDA. These notes are generalized: no client names, sectors, or figures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectNotes.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-4">{item.title}</h3>
              <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">The problem</p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">{item.problem}</p>
              <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">What I built</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.built}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="why-pilots-stall">
        <h2 id="why-pilots-stall" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Why AI pilots stall
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          In an RSM survey of middle-market companies (July 2026), data quality and integration were the top blockers among
          teams with limited pilot success. Both are implementation problems, and they are the work I do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stallReasons.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="what-i-do">
        <div className="text-center mb-10">
          <h2 id="what-i-do" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What I do
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {offers.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="p-2 bg-zinc-100 rounded-lg inline-flex mb-3">
                <item.icon className="w-4 h-4 text-zinc-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-3">{item.body}</p>
              {item.href && item.cta && (
                <Link href={item.href} className={`${linkClass} text-sm`}>
                  {item.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="how-i-work">
        <h2 id="how-i-work" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
          How I work, in plain answers
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed mb-8">
          These are the questions a careful buyer asks before choosing an AI partner.
        </p>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {howIWork.map((item) => (
            <div key={item.question} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <dt className="font-semibold text-zinc-900 mb-2">{item.question}</dt>
              <dd className="text-sm text-zinc-600 leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <OpenSourceProjects />

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <h2 id="fit" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Good fit and poor fit
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Good fit if:</h3>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Poor fit if:</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <XCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq id="ai-implementation-faq" title="Questions about AI implementation" faqs={faqs} />

      <CtaBand
        title="Send me your AI project"
        body="Tell me what the pilot does today, where it stalls, and who will use it. I reply with questions or a plain answer on whether I am the right fit."
        primary={{ href: contactHref('ai-implementation'), label: 'Send me your AI project' }}
        secondary={{ href: '/services/ai-development', label: 'See AI development' }}
      />

      <p className="text-center text-sm text-zinc-600 mb-16 max-w-lg mx-auto">
        Perusahaan besar di Indonesia? Lihat{' '}
        <Link href="/jasa-implementasi-ai" className={linkClass}>
          implementasi AI untuk perusahaan
        </Link>
        .
      </p>
    </>
  )
}
