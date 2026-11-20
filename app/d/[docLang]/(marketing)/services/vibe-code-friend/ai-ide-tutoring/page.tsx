import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code,
  LucideGitPullRequest,
  MessageSquare,
  Shield,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
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
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: outcomes.map(({ title, description }) => ({ name: title, description })),
  },
})

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'

export default function AiIdeTutoringPage() {
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
          <li className="text-[#0B0C0E] font-semibold">Cursor AI tutoring</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Code className="w-3.5 h-3.5" />, label: 'Level up · Tutoring' }}
        title="Cursor AI tutoring"
        accent="on your own code"
        actions={
          <>
            <Link
              href={contactHref('cursor-mentoring')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Book Cursor AI tutoring</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/cursor-ai-tutorial-for-beginners"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>Start with the free Cursor AI tutorial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For engineers who installed Cursor and want reliable results on production repositories. I am a senior AI software engineer, the first Cursor Ambassador in Indonesia, and author of Spec Kit for Cursor.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          Remote, screen-shared sessions in English or Indonesian · Overlap with European mornings (CET/GMT).
        </p>
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Overview</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What Cursor AI tutoring covers
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          Cursor AI tutoring is live, screen-shared sessions where you learn Cursor on your own project. We set up project rules so Cursor follows your conventions, practice when to use chat and when to use the agent, and build a habit for checking AI-generated code before it ships. You leave with a setup you keep using.
        </p>
        <p className="text-[#374151] leading-relaxed">
          Prefer reading first? Start with{' '}
          <Link href="/blog/cursor-project-rules" className={linkClass}>
            Cursor project rules
          </Link>{' '}
          or, in Bahasa Indonesia,{' '}
          <Link href="/blog/cara-menggunakan-cursor-ai" className={linkClass}>
            cara menggunakan Cursor AI
          </Link>
          .
        </p>
      </section>

      <section className="mb-16" aria-labelledby="stuck-points">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-10 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)] max-w-4xl mx-auto">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
            Sound familiar?
          </span>
          <h2 id="stuck-points" className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
            Where developers get stuck with Cursor
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stuckPoints.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/85 leading-relaxed"
              >
                <AlertCircle className="w-5 h-5 text-[#FFB866] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="outcomes">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Outcomes</span>
          <h2 id="outcomes" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How to use Cursor AI <span className="gradient-text">after tutoring</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl group-hover:bg-[#3A57FC] group-hover:text-white transition-colors shrink-0">
                  <topic.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-1.5">{topic.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="how-it-works">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Session format</span>
          <h2 id="how-it-works" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How tutoring <span className="gradient-text">works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item) => (
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

      <Faq id="tutoring-faq" title="Cursor AI tutoring FAQ" faqs={faqs} />

      <CtaBand
        title="Want Cursor to work on your real code?"
        body="Tell me your stack and what you want to get better at. I’ll suggest where to start. If one of my free guides already covers it, I’ll send you that first."
        primary={{ href: contactHref('cursor-mentoring'), label: 'Book Cursor AI tutoring' }}
        secondary={{ href: '/services/vibe-code-friend', label: 'See mentoring for teams' }}
      />
    </>
  )
}
