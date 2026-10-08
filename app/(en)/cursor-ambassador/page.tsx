import type { Metadata } from 'next'
import Link from 'next/link'
import { contactHref } from '@/lib/contact-services'
import { ArrowRight, ArrowUpRight, BookOpen, Users, Sparkles, Code2 } from 'lucide-react'
import { CursorIcon } from '@/components/icons/cursor'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400

const path = '/cursor-ambassador'
const pageTitle = 'Cursor Ambassador Indonesia: Learn Cursor Faster'
const pageDescription =
  'Aris Setiawan, the first Cursor Ambassador in Indonesia. What the role is, how I help teams ship with Cursor, and free guides on pricing, rules, and workflows.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
})

const faqs: FaqItem[] = [
  {
    question: 'What is a Cursor Ambassador?',
    answer:
      'Cursor runs an ambassador program for community members who help developers in their region learn and use Cursor, the AI code editor. As the first Cursor Ambassador in Indonesia, I teach practical Cursor workflows, answer questions from local and remote builders, and share guides based on client work I ship in Cursor every week.',
  },
  {
    question: 'Is Cursor part of SpaceX now?',
    answer:
      'Yes. In August 2026 Cursor announced it is part of SpaceX, continuing the SpaceXAI partnership. I am now also a SpaceXAI Ambassador. My Cursor Ambassador work continues on this page.',
  },
  {
    question: 'How much does Cursor cost?',
    answer:
      'You pay a monthly plan fee, you get a pool of included model usage, and you can pay on-demand once that pool runs out. The plan price alone is not your real bill. My Cursor AI pricing guide breaks down what teams actually pay.',
  },
  {
    question: 'Can you train my team to use Cursor?',
    answer:
      'Yes. Level up mentoring starts with two or three developers on one real repo, shared project rules, and a review habit for AI-generated code, then expands to the rest of the team over about 30 days.',
  },
  {
    question: 'Do you mentor in Indonesian and English?',
    answer:
      'Both. I am based in Sidoarjo, Indonesia, and work with teams in Indonesia and remotely worldwide.',
  },
  {
    question: 'How do I become a Cursor Ambassador?',
    answer:
      'Cursor runs the program and decides who joins, so check Cursor’s official community channels for current openings. The best preparation is helping other developers use Cursor well in public: write guides, answer questions, and run small community sessions.',
  },
]

const structuredData = buildPageGraph({
  path,
  type: 'ProfilePage',
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [{ name: 'Cursor Ambassador', path }],
  faqs,
})

const highlights = [
  {
    title: 'A shipping loop your team repeats',
    description:
      'One repo, one set of project rules, one review habit. Teams leave able to ship with Cursor on Monday without me in the room.',
    icon: Users,
  },
  {
    title: 'Guides from real client work',
    description:
      'Every guide comes from repos I ship in Cursor: monorepos, legacy code, and folders you must not touch.',
    icon: BookOpen,
  },
  {
    title: 'Honest about limits',
    description:
      'When Cursor saves hours, when it creates technical debt, and how to review AI-generated code before it reaches production.',
    icon: Sparkles,
  },
]

const guides = [
  { title: 'Cursor AI pricing in plain English', href: '/blog/cursor-ai-pricing' },
  { title: 'Cursor Chat vs Composer: what I open first', href: '/blog/chat-vs-composer-in-cursor' },
  { title: 'A Cursor tutorial for developers who already ship', href: '/blog/cursor-ai-tutorial-for-beginners' },
  { title: 'How to use Cursor effectively on a real repo', href: '/blog/how-to-use-cursor-ai-effectively' },
  { title: 'Project rules that stop Cursor inventing bad code', href: '/blog/cursor-project-rules' },
  { title: 'How teams should roll out Cursor in 30 days', href: '/blog/how-teams-should-roll-out-cursor-in-the-first-30-days' },
  { title: 'Apa itu Cursor AI? (Bahasa Indonesia)', href: '/blog/apa-itu-cursor-ai' },
  { title: 'Apakah Cursor AI gratis? (Bahasa Indonesia)', href: '/blog/apakah-cursor-ai-gratis' },
]

export default function CursorAmbassadorPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li>
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <span className="px-2">/</span>
          </li>
          <li className="text-zinc-900">Cursor Ambassador</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <CursorIcon className="h-4 w-auto text-zinc-900" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">First Cursor Ambassador in Indonesia</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Cursor Ambassador
          <span className="block gradient-text font-light">Indonesia</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          I’m Aris Setiawan, the first Cursor Ambassador in Indonesia. I help developers and teams ship real work with Cursor: clear project rules, a repeatable review habit, and code that still looks like your codebase a month later.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          13+ years shipping web products. I use Cursor on client work every week. Cursor is now part of SpaceX, and I’m also a{' '}
          <Link href="/spacexai-ambassador" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            SpaceXAI Ambassador
          </Link>
          .
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/services/vibe-code-friend"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Get Cursor mentoring for your team</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="#cursor-guides"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Read the free Cursor guides</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What a Cursor Ambassador does
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {faqs[0].answer}
        </p>
        <p className="text-zinc-600 leading-relaxed">
          In practice that means three things: I teach teams a shipping loop they can repeat, I write guides from real client repos, and I’m blunt about when AI-generated code needs a harder review.
        </p>
      </section>

      {/* Highlights */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
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

      {/* Guides */}
      <section id="cursor-guides" className="mb-16 scroll-mt-24">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight">
              Free Cursor guides
            </h2>
          </div>
          <p className="text-sm text-zinc-500 mb-6">
            The questions developers ask me most, answered from real projects.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl hover:bg-orange-50 transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-zinc-700 font-medium group-hover:text-zinc-900">{guide.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="cursor-faq">
        <h2 id="cursor-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Cursor Ambassador FAQ
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

      {/* CTA */}
      <section className="overflow-hidden min-h-[320px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 min-h-[320px] relative">
          <h2 className="md:text-3xl lg:text-4xl leading-tight text-2xl font-normal text-white tracking-tight mb-4 max-w-2xl">
            Bought Cursor seats, but the PRs got worse?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            I’ll set up project rules and a review habit on one of your real repos, then help the rest of the team adopt it. English or Indonesian.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/services/vibe-code-friend"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>See Cursor mentoring</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={contactHref('nextjs')}
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
