import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Code2,
  FileSearch,
  LineChart,
  Search,
  Sparkles,
  Wrench,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/ai-search-geo-aeo'
const pageTitle = 'AI SEO, GEO & AEO Services: Built in Code'
const pageDescription =
  'AI search optimization (GEO, AEO, and technical SEO) from a senior AI software engineer who built RankMySEO. Free AI visibility benchmark for qualifying teams.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/seo.jpg',
  keywords: [
    'AI SEO agency',
    'GEO agency',
    'AEO agency',
    'GEO SEO',
    'AI search optimization',
    'Generative Engine Optimization',
    'Answer Engine Optimization',
    'AI visibility audit',
    'GEO consultant Indonesia',
    'GEO agency Singapore',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const pillars = [
  {
    icon: Sparkles,
    badge: 'GEO',
    title: 'Generative Engine Optimization',
    body: 'Earn mentions and citations inside ChatGPT, Gemini, Claude, Perplexity, and Copilot. I align your entity schema, public corroboration, and answer-first pages so models recognize your brand as a reliable source.',
  },
  {
    icon: Bot,
    badge: 'AEO',
    title: 'Answer Engine Optimization',
    body: 'Win cited spots inside Google AI Overviews and AI Mode. Google grounds those answers in pages it already trusts, so I structure key pages with clear definitions, tables, and direct answers crawlers can extract cleanly.',
  },
  {
    icon: Wrench,
    badge: 'SEO',
    title: 'Technical SEO underneath both',
    body: 'GEO and AEO fail when crawlers hit thin client-side shells, broken canonicals, or blocked bots. I fix rendering, robots.txt AI crawler rules, llms.txt, sitemaps, and Core Web Vitals directly in your repository.',
  },
]

const snapshotIncludes = [
  {
    title: '10 buyer prompts benchmarked',
    body: 'We test the questions your buyers ask across ChatGPT, Gemini, Perplexity, and Google AI Overviews against up to three named competitors.',
  },
  {
    title: 'Technical and AI-crawler check',
    body: 'Run through RankMySEO and a manual code check: crawl errors, AI crawler permissions in robots.txt, llms.txt, JSON-LD entities, and mobile speed.',
  },
  {
    title: 'Prioritized engineering roadmap',
    body: 'A clear list of the schema, codebase, and page updates to ship first, walked through on a 30-minute call. Free for qualifying teams; I review every request.',
  },
]

const comparisonRows = [
  {
    aspect: 'Code and schema fixes',
    mine: 'Pull requests merged directly in Next.js, React, WordPress, or PHP',
    geoOnly: 'Slide decks and PDFs; your developers have to implement everything',
    classicSeo: 'Basic CMS plugins and checklists',
  },
  {
    aspect: 'AI visibility measurement',
    mine: 'Tracked in RankMySEO (the rank and AI visibility platform I built)',
    geoOnly: 'Manual prompt screenshots or third-party exports',
    classicSeo: 'Classic Google rankings only',
  },
  {
    aspect: 'Entity and AI crawler setup',
    mine: 'Unified @id JSON-LD graphs, llms.txt, llms-full.txt, and server-rendered HTML',
    geoOnly: 'Content briefs with limited engineering depth',
    classicSeo: 'Default plugin schema without entity links',
  },
  {
    aspect: 'AI product and agent builds',
    mine: 'Can also ship your production AI features, MCP tools, and chatbots',
    geoOnly: 'Out of scope',
    classicSeo: 'Out of scope',
  },
  {
    aspect: 'Who does the work',
    mine: 'Senior AI software engineer directly (UTC+7, SG/ID/EU morning overlap)',
    geoOnly: 'Account manager with rotating analysts',
    classicSeo: 'Junior agency team',
  },
]

const deliverables = [
  {
    icon: FileSearch,
    title: 'AI visibility audit and prompt tracking',
    description:
      'Benchmark where your brand is named, cited, or omitted across major AI assistants, then track changes alongside Search Console and daily ranks in RankMySEO.',
  },
  {
    icon: Code2,
    title: 'Entity architecture, JSON-LD, and llms.txt',
    description:
      'Clean Organization, Person, Service, and Article graphs tied together with stable @ids, explicit AI crawler rules in robots.txt, and maintained llms.txt endpoints.',
  },
  {
    icon: Search,
    title: 'Citation-ready commercial and guide pages',
    description:
      'Pages structured with answer-first openings, clear comparisons, verified facts, and internal links so both Google and generative models can quote you accurately.',
  },
  {
    icon: LineChart,
    title: 'Technical SEO fixes shipped in code',
    description:
      'Server-side rendering checks, redirect maps, canonical cleanup, dynamic sitemaps, and Core Web Vitals tuning delivered as reviewable pull requests.',
  },
]

const goodFit = [
  'Competitors show up in ChatGPT, Perplexity, or Google AI Overviews while your brand is missing',
  'Your marketing team has SEO or GEO recommendations sitting unimplemented because engineering is busy',
  'You operate in Singapore, Indonesia, or Europe and want technical SEO, GEO, and AEO handled by one engineer',
  'You want transparent tracking in RankMySEO and Search Console alongside real code fixes',
]

const poorFit = [
  'You want guaranteed #1 mentions inside ChatGPT or Google by a fixed date',
  'You are looking for bulk PBN backlinks or auto-generated doorway pages',
  'You have no working website or product positioning yet',
]

const faqs: FaqItem[] = [
  {
    question: 'What is the difference between SEO, GEO, and AEO?',
    answer:
      'SEO earns rankings in classic Google search results. AEO (Answer Engine Optimization) focuses on getting your pages cited in Google AI Overviews and AI Mode. GEO (Generative Engine Optimization) focuses on being named and cited in assistants such as ChatGPT, Gemini, Perplexity, and Claude. All three depend on crawlable HTML, clean structured data, and credible pages.',
  },
  {
    question: 'How does the free AI visibility snapshot work?',
    answer:
      'Send your domain, your target market (Singapore, Indonesia, or Europe), and up to three competitors. If your site is a good fit, I benchmark 10 buyer prompts across major AI assistants and check your technical crawl health with RankMySEO, then walk you through the findings in 30 minutes.',
  },
  {
    question: 'Do we still need technical SEO if we want GEO and AEO?',
    answer:
      'Yes. Google AI Overviews cite pages that already rank and parse cleanly, and assistants like ChatGPT and Copilot rely on search indexes and clean HTML to ground answers. Fixing crawlability, schema, and site speed first is what makes GEO and AEO work.',
  },
  {
    question: 'How do you measure AI search results?',
    answer:
      'I combine prompt tracking in RankMySEO (mentions and citations across AI assistants), Google Search Console impressions and clicks, and daily organic rank history. You see which pages earn citations and what technical or content change moved the needle.',
  },
  {
    question: 'How much do AI SEO, GEO, and AEO services cost?',
    answer:
      'Scope depends on site size, tech stack, and whether you need a one-off technical implementation sprint or ongoing monthly tracking and iteration. After the snapshot and scoping call, you receive a written plan and fixed quote before work starts.',
  },
  {
    question: 'Do you work with teams in Singapore, Indonesia, and Europe?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia (UTC+7), sharing the business day with Singapore and Indonesia and overlapping European mornings (CET and GMT) for standups, reviews, and walkthroughs in English or Indonesian.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'AI Search (GEO & AEO)', path: pagePath },
  ],
  service: {
    name: 'AI SEO, GEO, and AEO services',
    description: pageDescription,
    serviceType: 'AI Search Optimization (GEO and AEO)',
    areaServed: ['Singapore', 'Indonesia', 'Europe', 'Worldwide'],
    offers: [
      { name: 'Free AI visibility snapshot and technical check' },
      { name: 'Generative Engine Optimization (GEO)' },
      { name: 'Answer Engine Optimization (AEO)' },
      { name: 'Entity schema, robots.txt, and llms.txt engineering' },
      { name: 'Monthly AI visibility and rank tracking in RankMySEO' },
    ],
  },
})

export default function AiSearchGeoAeoPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/seo" className="hover:text-orange-500 transition-colors">SEO</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">AI Search (GEO &amp; AEO)</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Sparkles className="w-4 h-4 text-orange-500" />, label: 'GEO · AEO · Technical SEO · SG, ID & EU' }}
        title="AI search optimization"
        accent="engineered in your codebase"
        actions={
          <>
            <Link
              href={contactHref('geo-aeo')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Request a free AI visibility snapshot</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#comparison"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">Compare with GEO agencies</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For B2B, SaaS, and digital teams in Singapore, Indonesia, and Europe who want their brand cited in ChatGPT,
          Gemini, Perplexity, Claude, and Google AI Overviews. I am Aris Setiawan, a senior AI software engineer and
          creator of RankMySEO. I audit your AI visibility, ship the schema and code fixes directly in your repo, and
          track every prompt and keyword.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          13+ years shipping software · Built RankMySEO · English or Indonesian · Direct overlap with SG, ID, and EU mornings.
        </p>
      </PageHero>

      <section className="mb-16" aria-labelledby="geo-aeo-seo">
        <div className="max-w-2xl mb-8">
          <h2 id="geo-aeo-seo" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            GEO, AEO, and SEO <span className="gradient-text">in one engineering practice</span>
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Read my full breakdown in{' '}
            <Link href="/blog/seo-for-ai-vs-geo" className={linkClass}>
              SEO for AI search vs GEO
            </Link>{' '}
            and{' '}
            <Link href="/blog/what-is-google-ai-mode" className={linkClass}>
              Google AI Mode SEO
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-zinc-100 rounded-xl text-zinc-700">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 bg-orange-50 text-orange-600 rounded-full text-xs font-semibold">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="snapshot" className="mb-16 scroll-mt-24" aria-labelledby="snapshot-heading">
        <div className="bg-zinc-900 text-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-zinc-900/20">
          <div className="max-w-2xl mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-orange-300 mb-4">
              Free benchmark for qualifying teams
            </span>
            <h2 id="snapshot-heading" className="text-2xl md:text-3xl font-medium tracking-tight mb-3">
              See where your brand stands in AI answers before you spend a dollar
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Send your URL and up to three competitors. I run your site through RankMySEO and test real buyer prompts
              so you see exactly who gets cited today and what is blocking you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {snapshotIncludes.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <Link
            href={contactHref('geo-aeo')}
            className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg"
          >
            <span>Request my free AI visibility snapshot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section id="comparison" className="mb-16 scroll-mt-24" aria-labelledby="comparison-heading">
        <div className="max-w-2xl mb-8">
          <h2 id="comparison-heading" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            AI engineer + RankMySEO <span className="gradient-text">vs agencies</span>
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            GEO-only consultancies hand over slide decks that stall in your backlog. Traditional SEO agencies rarely
            touch AI architectures or modern TypeScript stacks. I ship both the search layer and the code.
          </p>
        </div>

        <div className="overflow-x-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500">
                <th className="p-4 font-semibold">Area</th>
                <th className="p-4 font-semibold text-zinc-900 bg-orange-50/60">MadeByAris (AI Engineer + RankMySEO)</th>
                <th className="p-4 font-semibold">GEO-only consultancy</th>
                <th className="p-4 font-semibold">Traditional SEO agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {comparisonRows.map((row) => (
                <tr key={row.aspect}>
                  <td className="p-4 font-semibold text-zinc-900 align-top">{row.aspect}</td>
                  <td className="p-4 text-zinc-800 bg-orange-50/40 font-medium align-top">{row.mine}</td>
                  <td className="p-4 text-zinc-500 align-top">{row.geoOnly}</td>
                  <td className="p-4 text-zinc-500 align-top">{row.classicSeo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="deliverables-heading">
        <div className="text-center mb-10">
          <h2 id="deliverables-heading" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What I ship <span className="gradient-text">for your site</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deliverables.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 text-zinc-700">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="geo-proof">
        <h2 id="geo-proof" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Proof you can inspect before we talk
        </h2>
        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">RankMySEO: the platform I built</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              I built and operate{' '}
              <a href="https://rankmyseo.com" className={linkClass} target="_blank" rel="noopener noreferrer">
                RankMySEO
              </a>{' '}
              (with its{' '}
              <a href="https://github.com/madebyaris/rankmyseo" className={linkClass} target="_blank" rel="noopener noreferrer">
                open-source toolkit on GitHub
              </a>
              ) to track daily Google rankings, on-page crawl health, Search Console queries, and AI assistant mentions in one place.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">Client search lift (anonymized under NDA)</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Grew one high-traffic content site from 700K to 1.8M Google impressions per 28 days while cutting page load
              time from about 4 seconds to under 1 second, and grew an international industrial brand serving Singapore,
              China, Italy, Germany, and the US from 2K to 20K impressions with CTR rising from 0.1% to 1%.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">View source on this site</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Every page on madebyaris.com ships with one unified JSON-LD entity graph, explicit AI crawler rules in{' '}
              <a href="/robots.txt" className={linkClass}>robots.txt</a>, a live{' '}
              <a href="/sitemap.xml" className={linkClass}>sitemap.xml</a>, and AI-readable endpoints at{' '}
              <a href="/llms.txt" className={linkClass}>llms.txt</a> and{' '}
              <a href="/llms-full.txt" className={linkClass}>llms-full.txt</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="fit-heading">
        <div className="text-center mb-10">
          <h2 id="fit-heading" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Good fit and <span className="gradient-text">poor fit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Good fit</h3>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Look elsewhere</h3>
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

      <Faq id="geo-aeo-faq" title="AI search (GEO & AEO) FAQ" faqs={faqs} />

      <CtaBand
        title="Find out who AI assistants recommend instead of you"
        body="Send your domain, your market, and up to three competitors. I reply within 24 hours with next steps for your free AI visibility snapshot or a plain answer if classic technical SEO should come first."
        primary={{ href: contactHref('geo-aeo'), label: 'Request a free AI visibility snapshot' }}
        secondary={{ href: '/services/seo', label: 'See technical SEO services' }}
      />
    </>
  )
}
