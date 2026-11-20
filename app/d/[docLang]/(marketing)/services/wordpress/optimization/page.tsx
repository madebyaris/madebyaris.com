import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Zap, Shield, Gauge, CheckCircle2, XCircle, Server, Image as ImageIcon, Database, Plug } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pageTitle = 'WordPress Speed Optimization Service'
const pagePath = '/services/wordpress/optimization'
const pageDescription =
  'WordPress speed optimization service for slow sites. I find the cause (hosting, plugins, images, or database), fix it on staging, and harden security.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: [
    'WordPress speed optimization service',
    'slow WordPress site',
    'WordPress security hardening',
    'WordPress Core Web Vitals',
    'WordPress caching',
  ],
})

const causes = [
  {
    title: 'Slow hosting',
    description: 'If the server is slow to send the first byte, nothing on the page can fix it. Sometimes the answer is a better host.',
    icon: Server,
  },
  {
    title: 'Plugins loading everywhere',
    description: 'Many plugins load their scripts and styles on every page, even pages that never use them.',
    icon: Plug,
  },
  {
    title: 'Heavy images',
    description: 'Full-size photos served without modern formats or sizes that fit the screen.',
    icon: ImageIcon,
  },
  {
    title: 'A bloated database',
    description: 'Years of revisions, expired transients, and autoloaded options from old plugins slow down every uncached request.',
    icon: Database,
  },
  {
    title: 'No page caching',
    description: 'Without a page cache, WordPress runs PHP and database queries for every visitor.',
    icon: Gauge,
  },
  {
    title: 'Page builder markup',
    description: 'Builders like Elementor wrap content in many nested elements and extra CSS, which phones feel first.',
    icon: Zap,
  },
]

const goodFit = [
  'Your site feels slow on phones and PageSpeed Insights agrees',
  'Search Console flags Core Web Vitals problems on your key pages',
  'You installed a caching plugin and it barely helped',
  'You are worried about outdated plugins or who has admin access',
]

const poorFit = [
  'The site is fast already and you only want a higher score',
  'The host is the whole problem and you are unwilling to move',
  'The site needs a rebuild, which a speed pass will only delay',
]

const hardening = [
  'Update WordPress core, themes, and plugins, and remove the ones you do not use',
  'Review admin accounts and give each person only the role they need',
  'Turn on two-factor login for admin accounts',
  'Disable file editing inside wp-admin',
  'Set up off-site backups and test a restore',
]

const processSteps = [
  { step: 1, title: 'Measure', desc: 'PageSpeed Insights and Search Console data on your key pages' },
  { step: 2, title: 'Find the cause', desc: 'Hosting, plugins, images, database, or theme' },
  { step: 3, title: 'Fix on staging', desc: 'Check that forms, checkout, and plugins still work' },
  { step: 4, title: 'Ship and report', desc: 'Go live and show you the before and after' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does a WordPress speed optimization service cost?',
    answer:
      'I scope it after a first look at your site, because a caching fix and a page builder problem are very different jobs. Send me the URL and I will reply with the likely cause and a price for fixing it.',
  },
  {
    question: 'How long does it take to speed up a WordPress site?',
    answer:
      'It depends on the cause. Caching and image fixes are usually small jobs. Replacing a heavy theme or moving hosts takes longer. The scope I send lists each fix with a timeline, so you can choose what to do first.',
  },
  {
    question: 'Will speed fixes break my plugins or checkout?',
    answer:
      'Caching and script changes can break forms or carts when they are applied blindly. I make every change on staging first, test the pages that matter to you, and exclude pages like checkout from caching where needed.',
  },
  {
    question: 'Who keeps the site fast after the fixes?',
    answer:
      'You get a short list of what I changed and what to avoid, like plugins that load on every page. Your team can follow the notes, or I can check in after updates.',
  },
  {
    question: 'Can you speed up a site built with Elementor?',
    answer:
      'Yes, within limits. I cut unused widgets and scripts, fix images and caching, and tune Elementor settings. If the builder itself is the bottleneck, I will say so and we can talk about a lighter theme.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'Optimization', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'WordPress Optimization',
    offers: [
      { name: 'WordPress speed audit' },
      { name: 'Caching and CDN setup' },
      { name: 'Image and asset fixes' },
      { name: 'Database cleanup' },
      { name: 'Plugin and theme performance fixes' },
      { name: 'WordPress security hardening' },
    ],
  },
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function WordPressOptimizationPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li><Link href="/services" className="hover:text-[#3A57FC] transition-colors">Services</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li><Link href="/services/wordpress" className="hover:text-[#3A57FC] transition-colors">WordPress</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Optimization</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Zap className="w-3.5 h-3.5" />, label: 'Slow WordPress site?' }}
        title="WordPress speed"
        accent="optimization service"
        actions={
          <>
            <Link
              href={contactHref('wordpress')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Find out why my site is slow</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services/wordpress"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>See all WordPress services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For site owners whose WordPress site is slow on phones or failing Core Web Vitals. I find the real cause, fix it, and lock down the admin while I am in there.
        </p>
        <p className="text-sm text-white/80">
          13+ years shipping web products, including WordPress performance work at Hongkiat.com.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What a WordPress speed optimization service does
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          A WordPress speed optimization service finds why your pages load slowly and fixes those causes first. I measure your key pages, trace the delay to hosting, plugins, images, the database, or the theme, and fix it on a staging copy. Then I push the changes live and show you the before and after numbers. Installing another caching plugin is rarely enough on its own.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          If hosting is the bottleneck, read{' '}
          <Link href="/blog/how-to-pick-vps-for-wordpress" className={linkClass}>
            how to pick a VPS for WordPress
          </Link>
          .
        </p>
      </section>

      {/* Causes Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <Gauge className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">Common causes</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Why your WordPress site <span className="gradient-text">is slow</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            Most slow sites have one or two of these. I fix the one that costs you the most first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((item) => (
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

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Is a speed fix <span className="gradient-text">worth it for you?</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            Sometimes the honest answer is a rebuild. See{' '}
            <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className={linkClass}>
              WordPress vs Next.js: when it’s worth it
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Probably not worth it</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <XCircle className="w-5 h-5 text-[#9CA3AF] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Security hardening */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl">
            <Shield className="w-5 h-5" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight">
            WordPress security hardening
          </h2>
        </div>
        <p className="text-[#4B5563] leading-relaxed mb-6">
          Outdated plugins and weak admin logins are the most common ways into a WordPress site. While I am working on speed, I close those gaps so a break-in is much harder:
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <ul className="space-y-3">
            {hardening.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563]">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How the speed fix <span className="gradient-text">works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#3A57FC] transition-colors p-6 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] font-mono font-bold text-sm flex items-center justify-center mx-auto mb-4">
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-1.5">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#4B5563] text-center mt-6">
          Still slow after all of it? A{' '}
          <Link href="/services/wordpress/headless-development" className={linkClass}>
            headless WordPress front end
          </Link>
          {' '}keeps your editor and serves pages from Next.js. Here is{' '}
          <Link href="/blog/headless-wordpress-with-nextjs" className={linkClass}>
            how this site does it
          </Link>
          .
        </p>
      </section>

      <Faq id="optimization-faq" title="WordPress speed optimization FAQ" faqs={faqs} />

      <CtaBand
        title="Want to know why your site is slow?"
        body="Send me the URL. I will reply with what I think is slowing it down and what fixing it would take, and I will tell you if the fix is outside what a speed pass can do."
        primary={{ href: contactHref('wordpress'), label: 'Find out why my site is slow' }}
        secondary={{ href: '/services/wordpress', label: 'Other WordPress services' }}
      />
    </>
  )
}
