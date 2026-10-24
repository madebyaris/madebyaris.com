import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Download, FileCode2, History, Info, Scale } from 'lucide-react'
import { CursorIcon } from '@/components/icons/cursor'
import { JsonLd } from '@/components/seo/json-ld'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { CopyButton } from '@/components/copy-button'
import { CursorCostEstimator } from '@/components/cursor-cost-estimator'
import { buildPageGraph, buildPageMetadata, decodeHtmlEntities, stripHtml, type FaqItem } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'
import { blogCategoryPath, cursorHub } from '@/lib/topics'
import { cursorChangelog } from '@/lib/topics/cursor-changelog'
import { cursorComparison } from '@/lib/topics/cursor-comparison'
import { cursorPricing } from '@/lib/topics/cursor-pricing'
import { cursorRulePath, cursorRules } from '@/lib/topics/cursor-rules'
import { getPostsByCategory, type ProcessedPost } from '@/lib/wordpress'

export const revalidate = 604800 // 7 days; webhook refreshes posts on publish

const path = cursorHub.path
const pageTitle = 'Cursor guide for shipping teams: rules, review, cost'
const pageDescription =
  'My Cursor guide from client work: a reading order, project rules you can copy, a review checklist, a cost estimator, and what changed in Cursor lately.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'Cursor guide',
    'Cursor AI tutorial',
    'Cursor project rules',
    'Cursor pricing 2026',
    'Cursor vs Copilot',
    'Cursor for teams',
  ],
})

const usd = (n: number) => `$${n}`

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

const planList = cursorPricing.plans.map((p) => `${p.name} at ${usd(p.monthlyUsd)}`).join(', ')

const faqs: FaqItem[] = [
  {
    question: 'How do I start using Cursor on an existing repo?',
    answer:
      'Write half a page of project rules first: the stack, the folder map, the error shape, naming, and the test command. Then plan the change in chat with real file paths, run the agent on only those files, and review the diff like a person wrote it. The beginner tutorial on this page walks through it.',
  },
  {
    question: 'How much does Cursor cost in 2026?',
    answer: `On ${formatDate(cursorPricing.verifiedAt)} Cursor had a free plan, then ${planList} a month. Teams starts at ${usd(cursorPricing.teamsFromUsdPerSeat)} per seat. Third-party models such as Claude and GPT are billed on top at API list price. The estimator on this page works it out for your team size.`,
  },
  {
    question: 'Is Cursor free?',
    answer:
      'There is a free plan with limited agent and chat requests, which is enough to try it on a side project. Plus only runs Grok models. Premium is the plan Cursor itself recommends for people new to AI coding, and it adds third-party models at API list price.',
  },
  {
    question: 'Do Cursor project rules actually help?',
    answer:
      'Yes, when they are short. Half a page that names the stack, the folders, and “do not create new packages” stops most invented architecture. A 2,000-line style guide gets half-read and drifts from the repo. The rules file I commit is on this page.',
  },
  {
    question: 'Should I use Cursor or Copilot?',
    answer:
      'Split the job. I use Cursor for changes that touch several files and for repos I do not know yet, and Copilot for inline work in an editor the team already uses. The table on this page lists which job goes where.',
  },
  {
    question: 'Is Cursor part of SpaceX now?',
    answer:
      'Yes. SpaceX completed the acquisition on August 14, 2026, and Cursor joined SpaceXAI. Third-party models are still available in Cursor, billed at API list price.',
  },
]

const loop = [
  { step: 'Rules', text: 'Half a page that names the stack, the folders, and what not to touch.', href: '/blog/cursor-project-rules' },
  { step: 'Plan', text: 'Ask chat where the change lives. Real paths, no files written yet.', href: '/blog/how-to-use-cursor-ai-effectively' },
  { step: 'Scoped run', text: 'Point the agent at those files only, with a blast radius in the prompt.', href: '/blog/cursor-agent-for-shipping' },
  { step: 'Review', text: 'Read the diff like you own the on-call. Then test and commit.', href: '/blog/pr-review-checklist-for-ai-generated-code' },
]

function excerpt(post: ProcessedPost): string {
  const text = decodeHtmlEntities(stripHtml(post.excerpt.rendered)).trim()
  return text.length > 150 ? `${text.slice(0, text.lastIndexOf(' ', 147))}…` : text
}

export default async function CursorGuidePage() {
  const posts = await getPostsByCategory(cursorHub.categorySlug)
  const bySlug = new Map(posts.map((post) => [post.slug, post]))
  const listed = new Set(cursorHub.groups.flatMap((g) => g.slugs))

  const groups = [
    ...cursorHub.groups.map((group) => ({
      ...group,
      posts: group.slugs.flatMap((slug) => bySlug.get(slug) ?? []),
    })),
    {
      title: 'More Cursor posts',
      summary: 'Newer posts that have not been placed in a section yet.',
      slugs: [],
      posts: posts.filter((post) => !listed.has(post.slug)),
    },
  ].filter((group) => group.posts.length > 0)

  const startHere = groups[0]?.posts[0]

  const structuredData = buildPageGraph({
    path,
    name: pageTitle,
    description: pageDescription,
    type: 'CollectionPage',
    breadcrumbs: [{ name: 'Cursor guide', path }],
    items: groups.flatMap((group) => group.posts).map((post) => ({ name: post.title.rendered, path: `/blog/${post.slug}` })),
  })

  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li>
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true" className="px-2">/</li>
          <li className="text-zinc-900">Cursor guide</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <CursorIcon className="h-4 w-auto text-zinc-900" />, label: 'From the first Cursor Ambassador in Indonesia' }}
        title="Cursor guide"
        accent="for teams that ship"
        actions={
          <>
            {startHere && (
              <Link
                href={`/blog/${startHere.slug}`}
                className="btn-primary hover:-translate-y-0.5 transition-all inline-flex group text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
              >
                <span>Start with the beginner tutorial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
            <a
              href="#rules"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center text-zinc-700"
            >
              <span>Copy my project rules</span>
              <FileCode2 className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p>
          Cursor works on a real repo when three things are in place: half a page of project rules, a plan in chat before the
          agent writes anything, and a human review of every diff. This page puts my posts on each step in order, with the rules
          I commit and a cost estimate for your team.
        </p>
      </PageHero>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="loop">
        <h2 id="loop" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6 text-center">
          The loop I run on client work
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {loop.map((item, index) => (
            <li key={item.step}>
              <Link href={item.href} className="block h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
                <span className="text-xs font-semibold text-orange-500 tracking-wider uppercase">Step {index + 1}</span>
                <h3 className="font-semibold text-zinc-900 mt-1 mb-2 group-hover:text-orange-500 transition-colors">{item.step}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.text}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16 space-y-10" aria-labelledby="reading-order">
        <div className="text-center">
          <h2 id="reading-order" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
            Reading order
          </h2>
          <p className="text-zinc-500">
            {posts.length} posts, grouped by where you are.{' '}
            <Link href={blogCategoryPath(cursorHub.categorySlug)} className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500">
              See them newest first
            </Link>
            .
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.title} lang={group.title === 'Bahasa Indonesia' ? 'id' : undefined}>
            <h3 className="text-lg font-semibold text-zinc-900 mb-1">{group.title}</h3>
            <p className="text-sm text-zinc-500 mb-4">{group.summary}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {group.posts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-full items-start gap-3 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md hover:bg-orange-50/60 transition-all group"
                  >
                    <ArrowRight className="w-4 h-4 text-orange-500 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>
                      <span className="block font-medium text-zinc-900 group-hover:text-zinc-950">
                        {decodeHtmlEntities(stripHtml(post.title.rendered))}
                      </span>
                      <span className="block text-sm text-zinc-500 mt-1 leading-relaxed">{excerpt(post)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section id="rules" className="mb-16 scroll-mt-24" aria-labelledby="rules-heading">
        <h2 id="rules-heading" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
          Rules you can copy
        </h2>
        <p className="text-zinc-500 mb-6 max-w-2xl">
          Drop these into <code className="text-sm bg-zinc-100 rounded px-1.5 py-0.5">.cursor/rules/</code> and edit the paths to
          match your repo. Each one comes from a post that explains why every line is there.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {cursorRules.map((rule) => (
            <article key={rule.file} className="flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-1">{rule.title}</h3>
              <p className="text-sm text-zinc-500 mb-4">{rule.summary}</p>
              <pre className="flex-1 overflow-x-auto rounded-xl bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-100 max-h-80">
                <code>{rule.body}</code>
              </pre>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <CopyButton text={rule.body} label={`Copy ${rule.file}`} />
                <a
                  href={cursorRulePath(rule.file)}
                  download={rule.file}
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
                <Link href={rule.sourcePath} className="text-xs font-medium text-zinc-500 hover:text-orange-500 transition-colors">
                  Why each line is there
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="comparison">
        <div className="flex items-center gap-2 mb-2">
          <Scale className="w-5 h-5 text-orange-500" />
          <h2 id="comparison" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Cursor or Copilot: which job goes where
          </h2>
        </div>
        <p className="text-zinc-500 mb-6 max-w-2xl">
          I pick the tool for the job in front of me. This is the split I use on client work.
        </p>
        <div className="overflow-x-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase tracking-wider text-zinc-500 border-b border-zinc-200">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">The job</th>
                <th scope="col" className="px-5 py-3 font-semibold">I use</th>
                <th scope="col" className="px-5 py-3 font-semibold">Why</th>
              </tr>
            </thead>
            <tbody>
              {cursorComparison.picks.map((row) => (
                <tr key={row.job} className="border-b border-zinc-100 last:border-0">
                  <th scope="row" className="px-5 py-4 font-medium text-zinc-900">{row.job}</th>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${row.pick === 'Cursor' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700'}`}>
                      {row.pick}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-zinc-600">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 flex items-start gap-2 text-xs text-zinc-500 max-w-3xl">
          <Info className="h-4 w-4 shrink-0 text-zinc-400" />
          <span>
            Disclosure: I am the Cursor Ambassador for Indonesia and a SpaceXAI Ambassador, and SpaceX owns Cursor. Weigh my
            picks with that in mind. Based on client work, written up on{' '}
            <time dateTime={cursorComparison.testedOn}>{formatDate(cursorComparison.testedOn)}</time>.{' '}
            <Link href={cursorComparison.sourcePath} className="underline underline-offset-4 hover:text-orange-500">
              Read the full comparison
            </Link>
            .
          </span>
        </p>
      </section>

      <section id="cost" className="mb-16 scroll-mt-24" aria-labelledby="cost-heading">
        <h2 id="cost-heading" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
          What Cursor will cost your team
        </h2>
        <p className="text-zinc-500 mb-6 max-w-2xl">
          Pick a team size and how hard people lean on agents. The estimate uses Cursor’s current plans and tells you the date I
          last checked them. For what each plan includes and why third-party models cost extra,{' '}
          <Link href="/blog/cursor-ai-pricing" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500">
            read my Cursor pricing breakdown
          </Link>
          .
        </p>
        <CursorCostEstimator />
      </section>

      <section className="mb-16" aria-labelledby="changelog">
        <div className="flex items-center gap-2 mb-2">
          <History className="w-5 h-5 text-orange-500" />
          <h2 id="changelog" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            What changed in Cursor lately
          </h2>
        </div>
        <p className="text-zinc-500 mb-6 max-w-2xl">The releases that matter for shipping teams, with a link to each source.</p>
        <ol className="relative border-l border-zinc-200 ml-2 space-y-6">
          {cursorChangelog.map((entry) => (
            <li key={`${entry.date}-${entry.cursorChange}`} className="pl-6 relative">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-500" aria-hidden="true" />
              <time dateTime={entry.date} className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                {formatDate(entry.date)}
              </time>
              <p className="text-zinc-900 mt-1">{entry.cursorChange}</p>
              {entry.myWorkflowChange && (
                <p className="text-sm text-zinc-600 mt-1">
                  <span className="font-medium text-zinc-900">What I changed: </span>
                  {entry.myWorkflowChange}
                </p>
              )}
              <a
                href={entry.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-orange-500 mt-1"
              >
                Source
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </li>
          ))}
        </ol>
      </section>

      <Faq id="cursor-guide-faq" title="Cursor questions I get most" faqs={faqs} />

      <section className="mb-16 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
        <div className="p-3 bg-zinc-100 rounded-xl">
          <CursorIcon className="h-6 w-auto text-zinc-900" />
        </div>
        <div>
          <h2 className="font-semibold text-lg text-zinc-900 mb-2">Who wrote this</h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-3">
            I’m Aris Setiawan, the first Cursor Ambassador in Indonesia, with 13+ years of client work. The loop, the rules, and
            the tool picks on this page come from client repos I ship. Prices and release notes link to Cursor’s own pages.
          </p>
          <Link href="/cursor-ambassador" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-orange-500 transition-colors">
            What a Cursor Ambassador does
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand
        title="Want this loop running on your team’s repo?"
        body="I set up project rules and a review habit on one of your real repos, then help the rest of the team adopt it. English or Indonesian."
        primary={{ href: '/services/vibe-code-friend', label: 'Get Cursor mentoring for your team' }}
        secondary={{ href: contactHref('cursor-mentoring'), label: 'Send me your repo' }}
      />
    </>
  )
}
