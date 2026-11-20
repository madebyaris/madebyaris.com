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

const linkClass =
  'text-[#3A57FC] font-medium underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#2944E0] transition-colors'

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

const jumpLinks = [
  { href: '#loop', label: 'The loop' },
  { href: '#reading-order', label: 'Reading order' },
  { href: '#rules', label: 'Project rules' },
  { href: '#comparison', label: 'Cursor vs Copilot' },
  { href: '#cost', label: 'Cost estimator' },
  { href: '#changelog', label: 'Changelog' },
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

      <PageHero
        variant="cobalt"
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li className="text-white">Cursor guide</li>
            </ol>
          </nav>
        }
        eyebrow={{ icon: <CursorIcon className="h-3.5 w-auto" />, label: 'From the first Cursor Ambassador in Indonesia' }}
        title="Cursor guide"
        accent="for teams that ship"
        actions={
          <>
            {startHere && (
              <Link
                href={`/blog/${startHere.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 group"
              >
                <span>Start with the beginner tutorial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
            <a
              href="#rules"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/45 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all"
            >
              <span>Copy my project rules</span>
              <FileCode2 className="w-4 h-4" />
            </a>
          </>
        }
        bottomStrip={
          <nav aria-label="On this page" className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs">
            <span className="text-white/60 uppercase tracking-[0.12em]">Jump to</span>
            {jumpLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-[#FFB866] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        }
      >
        <p>
          Cursor works on a real repo when three things are in place: half a page of project rules, a plan in chat before the
          agent writes anything, and a human review of every diff. This page puts my posts on each step in order, with the rules
          I commit and a cost estimate for your team.
        </p>
      </PageHero>

      {/* Band 1: White: The loop */}
      <section className="w-full bg-white py-16 md:py-24 scroll-mt-24" id="loop" aria-labelledby="loop-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">01 / Daily workflow</span>
            <h2
              id="loop-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              The loop I run on client work
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loop.map((item, index) => (
              <li key={item.step}>
                <Link
                  href={item.href}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-md bg-[#EEF2FF] border border-[#DDE4FF] px-2.5 py-1 font-mono text-xs font-bold text-[#3A57FC]">
                        Step 0{index + 1}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#3A57FC] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2 group-hover:text-[#3A57FC] transition-colors">
                      {item.step}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{item.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Band 2: Subtle Gray: Reading order */}
      <section
        id="reading-order"
        className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24 scroll-mt-24"
        aria-labelledby="reading-order-heading"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">02 / Curated index</span>
            <h2
              id="reading-order-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              Reading order
            </h2>
            <p className="text-base text-[#4B5563]">
              {posts.length} posts, grouped by where you are.{' '}
              <Link href={blogCategoryPath(cursorHub.categorySlug)} className={linkClass}>
                See them newest first
              </Link>
              .
            </p>
          </div>

          <div className="space-y-12">
            {groups.map((group) => (
              <div key={group.title} lang={group.title === 'Bahasa Indonesia' ? 'id' : undefined}>
                <div className="mb-5">
                  <h3 className="font-display text-xl font-bold text-[#0B0C0E] tracking-tight mb-1">
                    {group.title}
                  </h3>
                  <p className="text-sm text-[#4B5563]">{group.summary}</p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.posts.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex h-full items-start gap-3.5 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 transition-all"
                      >
                        <ArrowRight className="w-4 h-4 text-[#3A57FC] mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        <span>
                          <span className="block font-display text-base font-bold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors">
                            {decodeHtmlEntities(stripHtml(post.title.rendered))}
                          </span>
                          <span className="block text-sm text-[#4B5563] mt-1.5 leading-relaxed">{excerpt(post)}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 3: White: Rules you can copy */}
      <section id="rules" className="w-full bg-white py-16 md:py-24 scroll-mt-24" aria-labelledby="rules-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">03 / Copy-paste rules</span>
            <h2 id="rules-heading" className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
              Rules you can copy
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Drop these into{' '}
              <code className="font-mono text-sm bg-[#EEF2FF] text-[#2944E0] border border-[#DDE4FF] rounded px-1.5 py-0.5">
                .cursor/rules/
              </code>{' '}
              and edit the paths to match your repo. Each one comes from a post that explains why every line is there.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cursorRules.map((rule) => (
              <article
                key={rule.file}
                className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight">
                    {rule.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#6B7280] bg-[#F8FAFC] border border-[#E5E7EB] rounded px-2 py-0.5 shrink-0">
                    {rule.file}
                  </span>
                </div>
                <p className="text-sm text-[#4B5563] mb-4 leading-relaxed">{rule.summary}</p>
                <pre className="flex-1 overflow-x-auto rounded-xl bg-[#0B0C0E] border border-[#232732] p-4 font-mono text-xs leading-relaxed text-zinc-100 max-h-80">
                  <code>{rule.body}</code>
                </pre>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <CopyButton text={rule.body} label={`Copy ${rule.file}`} />
                  <a
                    href={cursorRulePath(rule.file)}
                    download={rule.file}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-2 text-xs font-semibold text-[#0B0C0E] hover:border-[#3A57FC] hover:text-[#3A57FC] transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </a>
                  <Link href={rule.sourcePath} className={`${linkClass} text-xs`}>
                    Why each line is there
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Band 4: Subtle Gray: Cursor vs Copilot */}
      <section
        id="comparison"
        className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24 scroll-mt-24"
        aria-labelledby="comparison-heading"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">04 / Tool split</span>
            <div className="flex items-center gap-2.5 mb-3">
              <Scale className="w-6 h-6 text-[#3A57FC] shrink-0" />
              <h2
                id="comparison-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight"
              >
                Cursor or Copilot: which job goes where
              </h2>
            </div>
            <p className="text-base text-[#4B5563] leading-relaxed">
              I pick the tool for the job in front of me. This is the split I use on client work.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] bg-white shadow-xs">
            <table className="w-full text-sm text-left">
              <thead className="font-mono text-xs uppercase tracking-[0.08em] text-[#6B7280] bg-[#F8FAFC] border-b border-[#E5E7EB]">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">The job</th>
                  <th scope="col" className="px-5 py-4 font-semibold">I use</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {cursorComparison.picks.map((row) => (
                  <tr key={row.job}>
                    <th scope="row" className="px-5 py-4 font-semibold text-[#0B0C0E] align-top">
                      {row.job}
                    </th>
                    <td className="px-5 py-4 align-top">
                      <span
                        className={`inline-flex rounded-md px-2.5 py-0.5 font-mono text-xs font-semibold ${
                          row.pick === 'Cursor'
                            ? 'bg-[#3A57FC] text-white'
                            : 'bg-[#F8FAFC] border border-[#E5E7EB] text-[#4B5563]'
                        }`}
                      >
                        {row.pick}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[#4B5563] leading-relaxed align-top">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 flex items-start gap-2.5 text-xs text-[#6B7280] max-w-3xl leading-relaxed">
            <Info className="h-4 w-4 shrink-0 text-[#3A57FC] mt-0.5" />
            <span>
              Disclosure: I am the Cursor Ambassador for Indonesia and a SpaceXAI Ambassador, and SpaceX owns Cursor. Weigh my
              picks with that in mind. Based on client work, written up on{' '}
              <time dateTime={cursorComparison.testedOn}>{formatDate(cursorComparison.testedOn)}</time>.{' '}
              <Link href={cursorComparison.sourcePath} className={linkClass}>
                Read the full comparison
              </Link>
              .
            </span>
          </p>
        </div>
      </section>

      {/* Band 5: White: Cost Estimator */}
      <section id="cost" className="w-full bg-white py-16 md:py-24 scroll-mt-24" aria-labelledby="cost-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">05 / Pricing calculator</span>
            <h2 id="cost-heading" className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
              What Cursor will cost your team
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Pick a team size and how hard people lean on agents. The estimate uses Cursor’s current plans and tells you the date I
              last checked them. For what each plan includes and why third-party models cost extra,{' '}
              <Link href="/blog/cursor-ai-pricing" className={linkClass}>
                read my Cursor pricing breakdown
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden">
            <CursorCostEstimator />
          </div>
        </div>
      </section>

      {/* Band 6: Dark Proof Band: Changelog */}
      <section
        id="changelog"
        className="w-full ahrefs-dark-band text-white py-16 md:py-24 scroll-mt-24"
        aria-labelledby="changelog-heading"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
              06 / Release log
            </span>
            <div className="flex items-center gap-2.5 mb-3">
              <History className="w-6 h-6 text-[#93A8FF] shrink-0" />
              <h2
                id="changelog-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
              >
                What changed in Cursor lately
              </h2>
            </div>
            <p className="text-base text-zinc-300 leading-relaxed">
              The releases that matter for shipping teams, with a link to each source.
            </p>
          </div>

          <ol className="relative border-l border-white/15 ml-2 space-y-6">
            {cursorChangelog.map((entry) => (
              <li
                key={`${entry.date}-${entry.cursorChange}`}
                className="pl-7 relative"
              >
                <span
                  className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-[#FF8800] ring-4 ring-[#0B0C0E]"
                  aria-hidden="true"
                />
                <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                  <time
                    dateTime={entry.date}
                    className="font-mono text-xs font-semibold text-[#FFB866] tracking-[0.1em] uppercase"
                  >
                    {formatDate(entry.date)}
                  </time>
                  <p className="text-white font-medium mt-2 leading-relaxed">{entry.cursorChange}</p>
                  {entry.myWorkflowChange && (
                    <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                      <span className="font-semibold text-[#93A8FF]">What I changed: </span>
                      {entry.myWorkflowChange}
                    </p>
                  )}
                  <a
                    href={entry.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400 hover:text-[#FFB866] transition-colors mt-3"
                  >
                    Source
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Band 7: White: FAQ */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Faq id="cursor-guide-faq" title="Cursor questions I get most" faqs={faqs} className="mb-0" />
        </div>
      </section>

      {/* Band 8: Subtle Gray: Who wrote this + CTA Band */}
      <section className="w-full bg-[#F8FAFC] border-t border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="mb-10 rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] shrink-0">
              <CursorIcon className="h-6 w-auto" />
            </div>
            <div>
              <span className="section-index block mb-1">Author</span>
              <h2 className="font-display font-bold text-xl text-[#0B0C0E] tracking-tight mb-2">
                Who wrote this
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-4 max-w-3xl">
                I’m Aris Setiawan, the first Cursor Ambassador in Indonesia, with 13+ years of client work. The loop, the rules, and
                the tool picks on this page come from client repos I ship. Prices and release notes link to Cursor’s own pages.
              </p>
              <Link
                href="/cursor-ambassador"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] transition-colors"
              >
                <span>What a Cursor Ambassador does</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <CtaBand
            className="mb-0"
            title="Want this loop running on your team’s repo?"
            body="I set up project rules and a review habit on one of your real repos, then help the rest of the team adopt it. English or Indonesian."
            primary={{ href: '/services/vibe-code-friend', label: 'Get Cursor mentoring for your team' }}
            secondary={{ href: contactHref('cursor-mentoring'), label: 'Send me your repo' }}
          />
        </div>
      </section>
    </>
  )
}
