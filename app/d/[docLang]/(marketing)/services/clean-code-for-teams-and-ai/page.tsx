import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/clean-code-for-teams-and-ai'
const pageTitle = 'Clean code for your team and AI agents'
const pageDescription =
  'Make your codebase easy for developers and AI agents to read and change: structure, conventions, tests, and Cursor rules. Projects from $5,000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'clean code consulting',
    'AI-ready codebase',
    'AI code cleanup',
    'AGENTS.md',
    'Cursor rules',
    'code review for AI generated code',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much does a codebase cleanup cost?',
    answer:
      'It depends on the size of the codebase and how much is in bad shape. Projects start from $5,000. After a short scoping call you get a written plan and a quote before any code is changed.',
  },
  {
    question: 'How is this different from Cursor mentoring?',
    answer:
      'Cursor mentoring trains your developers on how to work with the tool. This service changes the codebase itself: its structure, its written rules, and its checks.',
  },
  {
    question: 'Do you rewrite our code?',
    answer:
      'No. I tidy the parts that cause the most trouble, add rules and checks, and leave the rest alone. You decide how far to go.',
  },
  {
    question: 'We have a specific mess from AI-written code. Can you fix just that?',
    answer: 'Yes. Ask about the focused repair service for AI-generated code, listed under the related links below.',
  },
]

export default function CleanCodePage() {
  return (
    <SpecialistLanding
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="Codebase cleanup and AI coding standards"
      breadcrumbName="Clean code for teams and AI"
      eyebrow={{ icon: <Sparkles className="w-4 h-4 text-orange-500" />, label: 'Clean code for teams and AI' }}
      title="Clean code that your team"
      accent="and your AI agents can follow"
      intro={
        <p>
          AI coding tools write more code, and messy code makes them worse. I clean up the structure, set conventions that
          your developers and your agents both follow, and add the rules and checks that keep the codebase tidy while you ship
          faster.
        </p>
      }
      signsTitle="Signs your codebase needs this"
      signs={[
        'Pull requests written with AI are hard to review',
        'Agents repeat the same mistakes or invent code that does not exist',
        'Nobody agrees where things should live',
        'Developers are afraid to change old code',
      ]}
      offersTitle="What I do"
      offers={[
        {
          title: 'Map and simplify the structure',
          body: 'A clear folder layout and boundaries, so a person or an agent can find where a change belongs.',
        },
        {
          title: 'Written conventions',
          body: 'An AGENTS.md and project rules that tell your team and your agents how code is written here.',
        },
        {
          title: 'Guardrails',
          body: 'Linting, types, and tests that catch mistakes before review, whether a person or an agent wrote the code.',
        },
        {
          title: 'A review checklist for AI code',
          body: 'A short checklist reviewers use on AI-generated pull requests.',
          href: '/blog/pr-review-checklist-for-ai-generated-code',
          cta: 'Read the checklist',
        },
        {
          title: 'Refactor the worst spots',
          body: 'Tidy the few files that cause most of the trouble and leave the rest as they are.',
        },
        {
          title: 'Train the team',
          body: 'Sessions where your developers learn the new rules on your own repo.',
          href: '/services/vibe-code-friend',
          cta: 'See Cursor mentoring',
        },
      ]}
      proof={{
        title: 'Public work you can read',
        body: (
          <p>
            I publish Cursor rules and a spec-driven toolkit for Cursor in the open:{' '}
            <Link href="https://github.com/madebyaris/spec-kit-command-cursor" className={linkClass}>
              spec-kit-command-cursor
            </Link>
            . For a focused repair of AI-written code, see{' '}
            <Link href="/services/vibe-code-friend/code-fixing" className={linkClass}>
              fixing AI-generated code
            </Link>
            .
          </p>
        ),
      }}
      steps={[
        { title: 'Review', desc: 'I read the codebase and list what slows people and agents down.' },
        { title: 'Agree', desc: 'You pick which fixes are worth doing, and we write the conventions.' },
        { title: 'Apply', desc: 'I tidy the worst spots and add the rules and checks.' },
        { title: 'Hand over', desc: 'Your team keeps the rules, and I show them how they work.' },
      ]}
      faqTitle="Questions about clean code and AI"
      faqs={faqs}
      alternate={{ prefix: 'Dalam Bahasa Indonesia:', label: 'lihat halaman Bahasa Indonesia', href: '/services/jasa-clean-code' }}
      related={[
        { href: '/services/vibe-code-friend', label: 'Cursor mentoring' },
        { href: '/services/vibe-code-friend/code-fixing', label: 'Fix AI-generated code' },
        { href: '/services/react-app-improvement', label: 'React app improvement' },
      ]}
      ctaTitle="Send me your repo"
      ctaBody="Tell me what the codebase is and where it hurts. I reply within 24 hours with questions or a plain answer on what I would clean up first."
      ctaLabel="Send me your repo"
    />
  )
}
