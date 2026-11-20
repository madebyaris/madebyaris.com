import type { Metadata } from 'next'
import Link from 'next/link'
import { contactHref } from '@/lib/contact-services'
import { ArrowRight, ArrowUpRight, BookOpen, Users, Sparkles, Code2 } from 'lucide-react'
import { CursorIcon } from '@/components/icons/cursor'
import { JsonLd } from '@/components/seo/json-ld'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400

const path = '/cursor-ambassador'
const spacexAnnouncementUrl = 'https://cursor.com/blog/joining-spacex'
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
      'Yes. Cursor announced on its blog on August 14, 2026 that SpaceX completed the acquisition, after the SpaceXAI partnership that started in April. I am now also a SpaceXAI Ambassador. My Cursor Ambassador work continues on this page.',
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

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function CursorAmbassadorPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li>
            <Link href="/" className="hover:text-[#3A57FC] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Cursor Ambassador</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{
          icon: <CursorIcon className="h-3.5 w-auto" />,
          label: 'First Cursor Ambassador in Indonesia',
        }}
        title="Cursor Ambassador"
        accent="Indonesia"
        actions={
          <>
            <Link
              href="/services/vibe-code-friend"
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Get Cursor mentoring for your team</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/guides/cursor"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>Read the free Cursor guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          I’m Aris Setiawan, the first Cursor Ambassador in Indonesia. I help developers and teams ship real work with Cursor: clear project rules, a repeatable review habit, and code that still looks like your codebase a month later.
        </p>
        <p className="text-sm text-white/80">
          13+ years shipping web products. I use Cursor on client work every week.{' '}
          <a
            href={spacexAnnouncementUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/60 underline-offset-4 hover:decoration-white transition-colors"
          >
            Cursor is now part of SpaceX
          </a>
          , and I’m also a{' '}
          <Link
            href="/spacexai-ambassador"
            className="text-white underline decoration-white/60 underline-offset-4 hover:decoration-white transition-colors"
          >
            SpaceXAI Ambassador
          </Link>
          .
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What a Cursor Ambassador does
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          {faqs[0].answer}
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          In practice that means three things: I teach teams a shipping loop they can repeat, I write guides from real client repos, and I’m blunt about when AI-generated code needs a harder review.
        </p>
      </section>

      {/* Highlights */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Guides */}
      <section id="cursor-guides" className="mb-16 scroll-mt-24">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Code2 className="w-5 h-5 text-[#3A57FC]" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-[#0B0C0E] tracking-tight">
              Free Cursor guides
            </h2>
          </div>
          <p className="text-sm text-[#4B5563] mb-6">
            The questions developers ask me most, answered from real projects. For the full map with rules you can copy, see the{' '}
            <Link href="/guides/cursor" className={`font-medium ${linkClass}`}>
              Cursor guide for shipping teams
            </Link>
            .
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="flex items-start gap-3 p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl hover:border-[#3A57FC] hover:bg-[#EEF2FF] transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 text-[#3A57FC] mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-[#0B0C0E] font-medium group-hover:text-[#3A57FC] transition-colors">
                    {guide.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq id="cursor-faq" title="Cursor Ambassador FAQ" faqs={faqs} />

      <CtaBand
        title="Bought Cursor seats, but the PRs got worse?"
        body="I’ll set up project rules and a review habit on one of your real repos, then help the rest of the team adopt it. English or Indonesian."
        primary={{ href: '/services/vibe-code-friend', label: 'See Cursor mentoring' }}
        secondary={{ href: contactHref('nextjs'), label: 'Or hire me to build it' }}
      />
    </>
  )
}
