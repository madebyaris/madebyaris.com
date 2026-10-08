import type { Metadata } from 'next'
import {
  Bot,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Code2,
  MessageSquare,
  Shield,
  Users,
  FileCode,
  TrendingUp,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400

const path = '/services/vibe-code-friend'
const pageTitle = 'Cursor Mentoring and Training for Teams'
const pageDescription =
  'Cursor mentoring for teams whose PRs got messier after buying seats: shared project rules, a review habit for AI code, rolled out over about 30 days.'

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
    question: 'Do you mentor in English and Indonesian?',
    answer:
      'Both. I’m based in Sidoarjo, Indonesia, and mentor teams in Indonesia and remotely worldwide.',
  },
  {
    question: 'Can you build the feature for us instead?',
    answer:
      'Yes. If you want the work shipped more than you want the team trained, hire me to build it. I take Next.js, headless WordPress, and AI feature projects.',
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
    offers: [
      { name: 'Team Cursor rollout over about 30 days' },
      { name: 'Shared Cursor project rules' },
      { name: 'Review habit for AI-generated code' },
      ...formats.map(({ title, description }) => ({ name: title, description })),
    ],
  },
  faqs,
})

export default function VibeCodeFriendPage() {
  return (
    <>
      <JsonLd data={structuredData} />

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
          <TrendingUp className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
            Level up · Cursor · Remote
          </span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-4">
          Cursor mentoring
          <span className="block gradient-text font-light">for developers and teams</span>
        </h1>

        <div className="inline-flex bg-orange-50 rounded-full mb-6 py-1.5 px-4 items-center gap-2">
          <Bot className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wide text-orange-700">
            Also known as Vibe Code Friend
          </span>
        </div>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For engineering leads and developers whose team bought Cursor seats and got messier PRs. I’m the first Cursor Ambassador in Indonesia, and I ship client work in Cursor every week.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          13+ years shipping web products. Sessions in English or Indonesian.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('cursor-mentoring')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Get Cursor mentoring for your team</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/how-teams-should-roll-out-cursor-in-the-first-30-days"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Read the 30-day rollout plan</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What Cursor mentoring looks like
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Cursor mentoring is hands-on coaching on your team’s real code. I start with two or three developers on one repo, write shared project rules with them, and set up a review habit for AI-generated code. Once that loop works, we expand it to the rest of the team over about 30 days. Sessions run remotely, in English or Indonesian.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Project rules are the first thing we set up. Here’s{' '}
          <Link href="/blog/cursor-project-rules" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            how I write Cursor project rules
          </Link>
          .
        </p>
      </section>

      {/* Pain */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Sound familiar?</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cursor AI for teams: <span className="gradient-text">where it goes wrong</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm max-w-3xl mx-auto">
          <ul className="space-y-3">
            {painPoints.map((item) => (
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
            What your team <span className="gradient-text">walks away with</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            The review habit starts from my{' '}
            <Link href="/blog/pr-review-checklist-for-ai-generated-code" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
              PR review checklist for AI-generated code
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the <span className="gradient-text">30-day rollout works</span>
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Formats */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <MessageSquare className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Smaller formats</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Just you, or <span className="gradient-text">one broken repo?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formats.map((format) => (
            <Link key={format.title} href={format.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <format.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {format.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{format.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {format.chips.map((chip) => (
                    <span key={chip} className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="mentoring-faq">
        <h2 id="mentoring-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Cursor mentoring FAQ
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
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Start with one repo and two developers
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Tell me your team size, your stack, and what’s going wrong with Cursor today. I’ll reply with how I’d run the first sessions. If your team doesn’t need mentoring yet, I’ll say so.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('cursor-mentoring')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get Cursor mentoring for your team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/ai-development"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Or hire me to build it</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
