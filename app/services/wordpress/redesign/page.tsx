import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Brush,
  CheckCircle2,
  FolderInput,
  Gauge,
  LayoutTemplate,
  LineChart,
  MousePointerClick,
  Palette,
  Plug,
  Route,
  Search,
  Smartphone,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { HeroImage } from '@/components/page/hero-image'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/wordpress/redesign'
const pageTitle = 'WordPress website redesign services'
const pageDescription =
  'WordPress website redesign services that protect your SEO: URLs kept or 301-redirected, titles and schema carried over, and a fast custom theme.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/wordpress.jpg',
  keywords: [
    'WordPress website redesign services',
    'WordPress website redesign',
    'WordPress redesign without losing SEO',
    'redesign WordPress site',
  ],
})

const signs = [
  {
    title: 'Editors avoid the site',
    description:
      'Changing a heading means fighting a page builder or emailing a developer. Content goes stale because updating it is a chore.',
    icon: Brush,
  },
  {
    title: 'It feels cramped on a phone',
    description: 'The layout was designed for desktop first, and mobile visitors get small text and buttons that are hard to tap.',
    icon: Smartphone,
  },
  {
    title: 'The theme is what makes it slow',
    description: 'When a heavy theme or page builder is the bottleneck, caching only hides it. A new theme fixes the cause.',
    icon: Gauge,
  },
  {
    title: 'Your business changed',
    description: 'What you sell or who you sell to moved on, and the pages still describe the old business.',
    icon: Briefcase,
  },
  {
    title: 'Plugins hold the theme together',
    description: 'The theme depends on plugins nobody updates, and every update risks breaking a layout.',
    icon: Plug,
  },
  {
    title: 'Pages lead nowhere',
    description: 'Visitors read a page and leave, because it never tells them what to do next or how to contact you.',
    icon: MousePointerClick,
  },
]

const seoChecklist = [
  'Crawl the current site and export every URL, including posts, categories, and media that get traffic',
  'Pull the pages that bring search traffic from Search Console, so those get the most care',
  'Keep each URL the same where possible, and 301-redirect the ones that must change to the closest new page',
  'Carry over page titles, meta descriptions, and headings on pages that already rank',
  'Keep the structured data the old site had, and add it where it was missing',
  'Point internal links at the final URLs so visitors and Google skip redirect chains',
  'Check the XML sitemap and robots.txt, and remove the staging noindex before launch',
  'Test the full redirect map on staging before the new site goes live',
  'Submit the new sitemap, then watch Search Console for 404s, crawl errors, and ranking drops',
]

const deliverables = [
  {
    title: 'A design for your key pages',
    description: 'Layouts built around what visitors come to find and the next step you want them to take.',
    icon: Palette,
  },
  {
    title: 'A fast custom theme',
    description: 'Built from the design as a WordPress theme editors update with blocks. Light on phones, with no page builder to fight.',
    icon: LayoutTemplate,
  },
  {
    title: 'Your content moved over',
    description: 'Posts, pages, and media carried into the new templates, with the plugins you rely on tested on staging.',
    icon: FolderInput,
  },
  {
    title: 'A redirect map',
    description: 'Every old URL mapped to its new page, tested before launch, and kept in a file you own.',
    icon: Route,
  },
  {
    title: 'SEO carried over',
    description: 'Titles, meta descriptions, schema, and internal links moved into the new templates page by page.',
    icon: Search,
  },
  {
    title: 'A launch watch',
    description: 'After launch I check Search Console for crawl errors and broken URLs, and fix what shows up.',
    icon: LineChart,
  },
]

const goodFit = [
  'Your site ranks for searches that bring customers and you cannot afford to lose them',
  'Editors struggle with a page builder or an old theme',
  'The design no longer matches what your business does',
  'You want to stay on WordPress and keep your content',
]

const poorFit = [
  'You only want new colors or a new logo, which theme settings can handle',
  'Speed is the only problem, and a speed fix is a smaller job',
  'You want a marketplace theme installed as it comes',
]

const processSteps = [
  { step: 1, title: 'Audit', desc: 'The current site, its traffic, and the pages that rank' },
  { step: 2, title: 'Design', desc: 'Layouts for the key pages, agreed before the build' },
  { step: 3, title: 'Build on staging', desc: 'Custom theme, content moved, plugins tested' },
  { step: 4, title: 'Redirect and launch', desc: 'Redirect map tested, then the new site goes live' },
  { step: 5, title: 'Watch Search Console', desc: 'Fix 404s and crawl errors as they show up' },
]

const topics = [
  {
    title: 'Custom WordPress theme development',
    description: 'How I build themes from a design so editors can update pages with blocks.',
    href: '/services/wordpress/theme-development',
  },
  {
    title: 'Headless WordPress with Next.js',
    description: 'Keep wp-admin for your editors and serve the pages from Next.js.',
    href: '/services/wordpress/headless-development',
  },
  {
    title: 'WordPress vs Next.js: when it is worth it',
    description: 'How to decide between a new theme and a headless rebuild.',
    href: '/blog/wordpress-vs-nextjs-when-worth-it',
  },
  {
    title: 'Technical SEO audit checklist',
    description: 'The checks I run before I touch a client site, in the order I run them.',
    href: '/blog/technical-seo-audit-checklist',
  },
  {
    title: 'WordPress migration',
    description: 'Moving hosts or platforms with the same care for URLs and redirects.',
    href: '/services/wordpress/migration',
  },
  {
    title: 'Technical SEO services',
    description: 'Audits, redirects, and Search Console work when the site needs more than a redesign.',
    href: '/services/seo',
  },
]

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much do WordPress website redesign services cost?',
    answer:
      'I price each redesign after a first look at the site. A small brochure site and a large store with many products are different jobs. Send me the URL and what you want changed. I reply with a scope and a price for that scope.',
  },
  {
    question: 'Will I lose rankings after a WordPress redesign?',
    answer:
      'Some movement is normal while Google recrawls the new pages. Lasting drops usually come from changed URLs, lost titles, or broken internal links, and my checklist covers each one. I watch Search Console after launch and fix problems as they show up. Nobody can guarantee rankings, and I will not pretend to.',
  },
  {
    question: 'Can you keep my content and plugins?',
    answer:
      'Yes. Posts, pages, media, and users stay in WordPress, so nothing needs retyping. I keep the plugins you depend on and test them on staging. If a plugin only exists to prop up the old theme, I suggest removing it.',
  },
  {
    question: 'Should I use a page builder or a custom theme?',
    answer:
      'Page builders let you drag layouts around. They also add a lot of front-end code and store content in their own format, which makes leaving hard later. A custom block theme is lighter, and editors still change text, images, and sections with blocks. I usually suggest the custom theme, and I will say so if a builder suits your team better.',
  },
  {
    question: 'Can you redesign a WordPress site built with Elementor or Divi?',
    answer:
      'Yes. I can rebuild the pages as a custom theme and move the content out of the builder. If your team depends on the builder, we can keep it. Moving out takes more work, because the builder stores the layout of each page in its own format.',
  },
  {
    question: 'How long does a WordPress website redesign take?',
    answer:
      'It depends on how many templates the site needs, how much content moves, and how many plugins need testing. The scope I send includes milestones and a timeline before work starts, so you can plan the launch.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'Redesign', path: pagePath },
  ],
  service: {
    name: 'WordPress website redesign services',
    description: pageDescription,
    serviceType: 'WordPress Website Redesign',
    offers: [
      { name: 'Site and traffic audit' },
      { name: 'Design for key pages' },
      { name: 'Custom WordPress theme' },
      { name: 'Content and plugin migration' },
      { name: 'Redirect map and SEO carry-over' },
      { name: 'Post-launch Search Console checks' },
    ],
  },
})

export default function WordPressRedesignPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/wordpress" className="hover:text-orange-500 transition-colors">WordPress</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Redesign</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Palette className="w-4 h-4 text-orange-500" />, label: 'WordPress redesign' }}
        title="WordPress website redesign services"
        accent="that protect your SEO"
        actions={
          <>
            <Link
              href={contactHref('wordpress')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Send me the site you want redesigned</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#seo"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">See how I protect SEO</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For businesses whose WordPress site looks dated or is hard to edit, and who cannot afford to lose search traffic.
          I keep your URLs, carry over what Google already ranks, and build a custom theme your editors can update.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          13+ years shipping web products. I build WordPress themes and plugins and do technical SEO, from redirects to Search Console.
        </p>
      </PageHero>

      <HeroImage src="/images/services/wordpress.jpg" alt="Illustration of a WordPress site layout being updated, with a security shield, maintenance tools, and a migration box" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What my WordPress website redesign services include
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          WordPress website redesign services give your site a new design and an easier editor while keeping the search
          traffic you already have. I audit the current site and its traffic, design the key pages, and build a fast custom
          theme on staging. Before launch, every old URL stays the same or gets a 301 redirect. After launch, I watch Search
          Console for errors.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Most redesigns lose traffic for boring reasons. URLs change, titles get rewritten, and internal links point to pages
          that no longer exist. Each one tells Google that a page it ranked is gone, so I plan for all three before the first
          design file.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="signs">
        <div className="text-center mb-10">
          <h2 id="signs" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Signs you should <span className="gradient-text">redesign your WordPress site</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            One of these is a reason to look closer. Three or more usually means the theme has run its course.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signs.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-zinc-500 text-center mt-6 max-w-2xl mx-auto">
          If speed is the only complaint, try a{' '}
          <Link href="/services/wordpress/optimization" className={linkClass}>
            WordPress speed fix
          </Link>{' '}
          first. It is a smaller job, and it tells us whether the theme is really the problem.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section id="seo" className="mb-16 max-w-3xl mx-auto scroll-mt-32" aria-labelledby="seo-heading">
        <h2 id="seo-heading" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          WordPress redesign without losing SEO: my checklist
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Nobody can promise rankings stay exactly where they are after a redesign. These steps remove the usual reasons they
          drop, and I run all of them before and after launch.
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm mb-6">
          <ul className="space-y-3">
            {seoChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-zinc-600 leading-relaxed">
          The full set of checks is in my{' '}
          <Link href="/blog/technical-seo-audit-checklist" className={linkClass}>
            technical SEO audit checklist
          </Link>
          . If the site needs SEO work beyond the redesign, see my{' '}
          <Link href="/services/seo" className={linkClass}>
            technical SEO services
          </Link>
          .
        </p>
      </section>

      <section className="mb-16" aria-labelledby="deliverables">
        <div className="text-center mb-10">
          <h2 id="deliverables" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What you get from <span className="gradient-text">a WordPress website redesign</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-zinc-500 text-center mt-6 max-w-2xl mx-auto">
          More on how I build themes on the{' '}
          <Link href="/services/wordpress/theme-development" className={linkClass}>
            custom WordPress theme development
          </Link>{' '}
          page.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="headless">
        <h2 id="headless" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          When a redesign should become a headless rebuild
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Sometimes a new theme is the wrong fix. If the site needs app-like features or your team already works in React,
          a{' '}
          <Link href="/services/wordpress/headless-development" className={linkClass}>
            headless WordPress rebuild
          </Link>{' '}
          may fit better. Editors keep wp-admin, and Next.js serves the pages. This site runs that way.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Headless means two systems to build and run, and plugins that change the front end stop working there. For most
          content sites a custom theme is enough, and I will tell you if yours is one. I wrote up how I decide in{' '}
          <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className={linkClass}>
            WordPress vs Next.js: when it is worth it
          </Link>
          .
        </p>
      </section>

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <h2 id="fit" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Is a WordPress redesign <span className="gradient-text">right for you?</span>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Probably not worth it</h3>
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

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <h2 id="process" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How a WordPress redesign <span className="gradient-text">runs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((item) => (
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

      <section className="mb-16" aria-labelledby="topics">
        <div className="text-center mb-10">
          <h2 id="topics" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Related guides <span className="gradient-text">and WordPress services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <h3 className="font-semibold text-zinc-900 mb-1 flex items-center justify-between gap-3">
                {item.title}
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="redesign-faq" title="WordPress website redesign FAQ" faqs={faqs} />

      <CtaBand
        title="Planning a redesign and worried about your rankings?"
        body="Send me the URL and what you want changed. I reply with what I would keep, what I would change, and a price. If a speed fix or new content would do the job, I will tell you."
        primary={{ href: contactHref('wordpress'), label: 'Send me the site you want redesigned' }}
        secondary={{ href: '/services/wordpress/headless-development', label: 'Compare a headless rebuild' }}
      />
    </>
  )
}
