import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Code2,
  FileCode,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400

const path = '/services/vibe-code-friend'
const pageTitle = 'Cursor Mentoring and Training for Teams'
const pageDescription =
  'Cursor mentoring for EU and Indonesian engineering teams: shared project rules, AI PR review habits, and a 30-day rollout led by a senior AI software engineer.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'Cursor mentoring',
    'Cursor training for teams',
    'Cursor AI for teams',
    'AI coding workflow',
    'Cursor Ambassador Indonesia',
    'Vibe Code Friend',
  ],
})

const linkClass =
  'text-[#3A57FC] font-medium underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#2944E0] transition-colors'

const painPoints = [
  'Everyone prompts Cursor differently, so the same feature comes back in five styles',
  'PRs got bigger and nobody can explain half the diff',
  'Senior developers spend review time rewriting AI output',
  'The team tried Cursor for a week, then drifted back to old habits',
]

const outcomes = [
  {
    title: 'Code that looks like your codebase',
    description:
      'Shared project rules live in the repo, so Cursor follows your conventions and new code matches the old.',
    icon: FileCode,
  },
  {
    title: 'PRs your reviewers can explain',
    description:
      'Reviewers know what to check in an AI-written diff, which means fewer surprises after merge.',
    icon: Shield,
  },
  {
    title: 'A workflow people keep using',
    description:
      'Developers know when to use chat, when to hand a task to the agent, and when to type it themselves.',
    icon: Zap,
  },
  {
    title: 'A setup the whole team can copy',
    description:
      'The first small group proves the setup on real work, then it becomes the template for everyone else.',
    icon: Users,
  },
]

const formats = [
  {
    title: 'Cursor AI tutoring',
    description: 'Live sessions on your own repo for a developer or small group learning Cursor.',
    icon: Code2,
    href: '/services/vibe-code-friend/ai-ide-tutoring',
    chips: ['Cursor setup', 'Project rules', 'Agent workflow', 'Reviewing AI code'],
  },
  {
    title: 'Fix AI-generated code',
    description: 'Send me the repo that broke. I find the cause, fix it, and explain what went wrong.',
    icon: Zap,
    href: '/services/vibe-code-friend/code-fixing',
    chips: ['Bug diagnosis', 'Build failures', 'Cleanup', 'Written explanation'],
  },
]

const steps = [
  { step: 1, title: 'Pick one repo', desc: 'Two or three developers start on a real repo with real tickets' },
  { step: 2, title: 'Write the rules', desc: 'Shared project rules that match how your team already codes' },
  { step: 3, title: 'Add a review habit', desc: 'A short checklist for AI-generated code in every PR' },
  { step: 4, title: 'Expand', desc: 'Roll the setup out to the rest of the team over about 30 days' },
]

const faqs: FaqItem[] = [
  {
    question: 'What does Cursor training for teams cover?',
    answer:
      'Three things your team keeps after I leave: shared project rules in the repo, a clear way to split work between chat, the agent, and plain typing, and a review habit for AI-generated code. We build all three on one of your real repos.',
  },
  {
    question: 'Is this a tour of Cursor features?',
    answer:
      'No. Every session happens on your repo and your planned tickets. I ship client work in Cursor every week, so we spend the time on the problems that come up in real work: messy context, oversized diffs, and code that ignores your conventions.',
  },
  {
    question: 'How long does Cursor mentoring take?',
    answer:
      'A team rollout runs over about 30 days. It starts with two or three developers on one repo, then expands to the rest of the team once the rules and review habit work. Solo developers can book tutoring sessions at their own pace.',
  },
  {
    question: 'Do you mentor European and Indonesian teams in English and Indonesian?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia (UTC+7) and coach engineering teams across Europe (EU and UK) and Indonesia in English or Indonesian. My working hours overlap with European mornings in CET and GMT for live pairing and PR reviews.',
  },
  {
    question: 'Can you join our team or build the AI feature for us instead?',
    answer:
      'Yes. If you want a senior AI software engineer to build the system or join your team directly, hire me through AI engineering and product builds across AI agents, Next.js, React, Fastify, Rust, and WordPress.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Cursor mentoring', path },
  ],
  service: {
    name: 'Cursor mentoring for developers and teams (Vibe Code Friend)',
    description: pageDescription,
    serviceType: 'Developer Mentoring',
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: [
      { name: 'Team Cursor rollout over about 30 days' },
      { name: 'Shared Cursor project rules' },
      { name: 'Review habit for AI-generated code' },
      ...formats.map(({ title, description }) => ({ name: title, description })),
    ],
  },
})

export default function VibeCodeFriendPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        variant="cobalt"
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-white/75">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li className="text-white">Cursor mentoring</li>
            </ol>
          </nav>
        }
        eyebrow={{ icon: <TrendingUp className="w-3.5 h-3.5" />, label: 'Level up · Cursor · Also known as Vibe Code Friend' }}
        title="Cursor mentoring"
        accent="for developers and teams"
        actions={
          <>
            <Link
              href={contactHref('cursor-mentoring')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 group"
            >
              <span>Get Cursor mentoring for your team</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/how-teams-should-roll-out-cursor-in-the-first-30-days"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/45 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all group"
            >
              <span>Read the 30-day rollout plan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
        bottomStrip={
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs text-white/85">
            <span>
              13+ years shipping production software · First Cursor Ambassador in Indonesia · English or Indonesian · Direct overlap with European mornings (CET/GMT)
            </span>
            <Link
              href="/guides/cursor"
              className="text-[#FFB866] hover:text-white underline decoration-[#FFB866]/45 underline-offset-4 transition-colors"
            >
              Open the free Cursor guide
            </Link>
          </div>
        }
      >
        <p>
          For European (EU and UK) and Indonesian engineering teams whose PRs got messier after adopting Cursor. I am a senior AI software engineer, Indonesia&apos;s first Cursor Ambassador, and maintainer of open-source Cursor and agent tooling.
        </p>
      </PageHero>

      {/* Band 1: White: Answer first */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="what-mentoring-looks-like">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="section-index block mb-2">01 / Overview</span>
              <h2
                id="what-mentoring-looks-like"
                className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-5"
              >
                What Cursor mentoring looks like
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed mb-4">
                Cursor mentoring is hands-on coaching on your team’s real code. I start with two or three developers on one repo, write shared project rules with them, and set up a review habit for AI-generated code. Once that loop works, we expand it to the rest of the team over about 30 days. Sessions run remotely, in English or Indonesian.
              </p>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Project rules are the first thing we set up. Here’s{' '}
                <Link href="/blog/cursor-project-rules" className={linkClass}>
                  how I write Cursor project rules
                </Link>
                , and the{' '}
                <Link href="/guides/cursor" className={linkClass}>
                  free Cursor guide
                </Link>{' '}
                has the rules file I commit, a review checklist, and a cost estimate for your team.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF] p-6 md:p-7">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2944E0] block mb-3">
                Sound familiar?
              </span>
              <h3 className="font-display text-xl font-bold text-[#0B0C0E] tracking-tight mb-4">
                Cursor AI for teams: where it goes wrong
              </h3>
              <ul className="space-y-3.5">
                {painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563] leading-relaxed">
                    <AlertCircle className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Band 2: Subtle Gray: Outcomes */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24" aria-labelledby="outcomes-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">02 / Outcomes</span>
            <h2
              id="outcomes-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              What your team <span className="gradient-text">walks away with</span>
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              The review habit starts from my{' '}
              <Link href="/blog/pr-review-checklist-for-ai-generated-code" className={linkClass}>
                PR review checklist for AI-generated code
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item) => (
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
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 3: Dark Proof Band: 30-day rollout */}
      <section className="w-full ahrefs-dark-band text-white py-16 md:py-24" aria-labelledby="rollout-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
              03 / Rollout cadence
            </span>
            <h2
              id="rollout-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3"
            >
              How the 30-day rollout works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/12 bg-white/[0.04] hover:border-[#3A57FC]/70 p-6 md:p-7 transition-all"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF8800] text-white font-mono text-sm font-bold mb-4">
                  0{item.step}
                </span>
                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 4: Subtle Gray: Smaller formats */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24" aria-labelledby="formats-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">04 / Smaller formats</span>
            <h2
              id="formats-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              Just you, or <span className="gradient-text">one broken repo?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map((format) => (
              <Link
                key={format.title}
                href={format.href}
                className="group rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] shrink-0">
                      <format.icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#3A57FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0B0C0E] tracking-tight mb-2 group-hover:text-[#3A57FC] transition-colors">
                    {format.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-5">{format.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5E7EB]">
                  {format.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-md bg-[#F3F5FF] border border-[#DDE4FF] px-2.5 py-1 font-mono text-[11px] font-medium text-[#2944E0]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Band 5: White: FAQ */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Faq id="mentoring-faq" title="Cursor mentoring FAQ" faqs={faqs} className="mb-0" />
        </div>
      </section>

      {/* Band 6: Subtle Gray: CTA Band */}
      <section className="w-full bg-[#F8FAFC] border-t border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Start with one repo and two developers"
            body="Tell me your team size, your stack, and what’s going wrong with Cursor today. I’ll reply with how I’d run the first sessions. If your team doesn’t need mentoring yet, I’ll say so."
            primary={{ href: contactHref('cursor-mentoring'), label: 'Get Cursor mentoring for your team' }}
            secondary={{ href: '/ai-implementation', label: 'Or hire me to build it' }}
          />
        </div>
      </section>
    </>
  )
}
