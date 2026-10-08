import type { Metadata } from 'next'
import { Code, ArrowRight, ArrowUpRight, LucideGitPullRequest, BookOpen, Lightbulb, MessageSquare, Shield, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/vibe-code-friend/ai-ide-tutoring'
const pageTitle = 'Cursor AI Tutoring on Your Own Repo'
const pageDescription =
  'Cursor AI tutoring for developers: learn how to use Cursor AI on your own code, with project rules, agent workflows, and a habit for checking AI output.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'Cursor AI tutoring',
    'how to use Cursor AI',
    'Cursor AI tutorial',
    'cara menggunakan Cursor AI',
    'Cursor tutor',
  ],
})

const stuckPoints = [
  'Cursor writes code that ignores your project’s patterns',
  'An agent run changes many files and you can’t tell which edits matter',
  'You paste the same context into every prompt',
  'Free tutorials use toy apps that look nothing like your repo',
]

const outcomes = [
  {
    title: 'Cursor follows your conventions',
    description: 'Project rules in your repo tell Cursor how your code is written, so you stop correcting the same mistakes.',
    icon: BookOpen,
  },
  {
    title: 'You pick the right mode',
    description: 'You know when to ask in chat, when to hand a task to the agent, and when typing it yourself is faster.',
    icon: MessageSquare,
  },
  {
    title: 'Smaller changes you can review',
    description: 'You split work into tasks Cursor can finish cleanly, which means diffs you can read before you commit.',
    icon: LucideGitPullRequest,
  },
  {
    title: 'Bad AI code gets caught early',
    description: 'A short checking habit for every AI edit, so broken or invented code doesn’t reach production.',
    icon: Shield,
  },
]

const steps = [
  { step: 1, title: 'Tell me your stack', desc: 'Your repo, your tools, and where Cursor lets you down today' },
  { step: 2, title: 'Set up the repo', desc: 'Project rules and settings on your own code, done together' },
  { step: 3, title: 'Work real tickets', desc: 'Screen-shared sessions on tasks you already need to ship' },
  { step: 4, title: 'Review what stuck', desc: 'Look at your recent AI-assisted commits and fix the gaps' },
]

const faqs: FaqItem[] = [
  {
    question: 'What’s the fastest way to learn how to use Cursor AI?',
    answer:
      'Use it on a real project, with project rules set up first. My free Cursor AI tutorial covers the basics. Tutoring adds a second pair of eyes on your own repo, so you fix bad habits while you work.',
  },
  {
    question: 'Who is Cursor AI tutoring for?',
    answer:
      'Developers who already write code and want Cursor to fit their daily work. If you are newer to programming, we go slower and spend more time on reading and checking what Cursor writes.',
  },
  {
    question: 'Can I learn cara menggunakan Cursor AI in Bahasa Indonesia?',
    answer:
      'Yes. I teach in English or Indonesian. I’m based in Sidoarjo and I’m the first Cursor Ambassador in Indonesia, and I also keep a written guide on cara menggunakan Cursor AI.',
  },
  {
    question: 'Do you cover GitHub Copilot or other AI editors?',
    answer:
      'Sessions focus on Cursor, since that’s the editor I ship client work in every week. The habits we build, like project rules, small tasks, and checking output, also apply to other AI editors.',
  },
  {
    question: 'What’s the difference between tutoring and team mentoring?',
    answer:
      'Tutoring is for one developer or a small group who want to get better with Cursor. Team mentoring rolls shared rules and a review habit out to a whole team over about 30 days.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Cursor mentoring', path: '/services/vibe-code-friend' },
    { name: 'Cursor AI tutoring', path },
  ],
  service: {
    name: 'Cursor AI tutoring',
    description: pageDescription,
    serviceType: 'Developer Tutoring',
    offers: outcomes.map(({ title, description }) => ({ name: title, description })),
  },
  faqs,
})

export default function AiIdeTutoringPage() {
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
          <li className="text-zinc-900">Cursor AI tutoring</li>
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
          <Code className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Level up · Tutoring</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Cursor AI tutoring
          <span className="block gradient-text font-light">on your own code</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For developers who installed Cursor and want it to work on real projects. I’m the first Cursor Ambassador in Indonesia, and I ship client work in Cursor every week.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Remote, screen-shared sessions in English or Indonesian.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('cursor-mentoring')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Book Cursor AI tutoring</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/cursor-ai-tutorial-for-beginners"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Start with the free Cursor AI tutorial</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What Cursor AI tutoring covers
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Cursor AI tutoring is live, screen-shared sessions where you learn Cursor on your own project. We set up project rules so Cursor follows your conventions, practice when to use chat and when to use the agent, and build a habit for checking AI-generated code before it ships. You leave with a setup you keep using.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Prefer reading first? Start with{' '}
          <Link href="/blog/cursor-project-rules" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            Cursor project rules
          </Link>{' '}
          or, in Bahasa Indonesia,{' '}
          <Link href="/blog/cara-menggunakan-cursor-ai" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            cara menggunakan Cursor AI
          </Link>
          .
        </p>
      </section>

      {/* Stuck points */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Lightbulb className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Sound familiar?</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Where developers get stuck <span className="gradient-text">with Cursor</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm max-w-3xl mx-auto">
          <ul className="space-y-3">
            {stuckPoints.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How to use Cursor AI <span className="gradient-text">after tutoring</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((topic) => (
            <div
              key={topic.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                  <topic.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1">{topic.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How tutoring <span className="gradient-text">works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((item) => (
            <div key={item.step} className="bg-zinc-50 rounded-2xl p-5 text-center">
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="tutoring-faq">
        <h2 id="tutoring-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Cursor AI tutoring FAQ
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
            Want Cursor to work on your real code?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Tell me your stack and what you want to get better at. I’ll suggest where to start. If one of my free guides already covers it, I’ll send you that first.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('cursor-mentoring')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Book Cursor AI tutoring</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/vibe-code-friend"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>See mentoring for teams</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
