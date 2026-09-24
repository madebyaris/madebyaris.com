import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Zap, Shield, Gauge, CheckCircle2, XCircle, Server, Image as ImageIcon, Database, Plug } from 'lucide-react'
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
  faqs,
})

export default function WordPressOptimizationPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/wordpress" className="hover:text-orange-500 transition-colors">WordPress</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Optimization</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Zap className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Slow WordPress site?</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          WordPress speed
          <span className="block gradient-text font-light">optimization service</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For site owners whose WordPress site is slow on phones or failing Core Web Vitals. I find the real cause, fix it, and lock down the admin while I am in there.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          13+ years shipping web products, including WordPress performance work at Hongkiat.com.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('wordpress')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Find out why my site is slow</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/wordpress"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">See all WordPress services</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What a WordPress speed optimization service does
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          A WordPress speed optimization service finds why your pages load slowly and fixes those causes first. I measure your key pages, trace the delay to hosting, plugins, images, the database, or the theme, and fix it on a staging copy. Then I push the changes live and show you the before and after numbers. Installing another caching plugin is rarely enough on its own.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          If hosting is the bottleneck, read{' '}
          <Link href="/blog/how-to-pick-vps-for-wordpress" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            how to pick a VPS for WordPress
          </Link>
          .
        </p>
      </section>

      {/* Causes Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Gauge className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Common causes</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Why your WordPress site <span className="gradient-text">is slow</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Most slow sites have one or two of these. I fix the one that costs you the most first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {causes.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group">
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

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Is a speed fix <span className="gradient-text">worth it for you?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Sometimes the honest answer is a rebuild. See{' '}
            <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
              WordPress vs Next.js: when it’s worth it
            </Link>
            .
          </p>
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Security hardening */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-zinc-100 rounded-xl">
            <Shield className="w-5 h-5 text-orange-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            WordPress security hardening
          </h2>
        </div>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Outdated plugins and weak admin logins are the most common ways into a WordPress site. While I am working on speed, I close those gaps so a break-in is much harder:
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {hardening.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the speed fix <span className="gradient-text">works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
        <p className="text-sm text-zinc-500 text-center mt-6">
          Still slow after all of it? A{' '}
          <Link href="/services/wordpress/headless-development" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            headless WordPress front end
          </Link>
          {' '}keeps your editor and serves pages from Next.js. Here is{' '}
          <Link href="/blog/headless-wordpress-with-nextjs" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            how this site does it
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="optimization-faq">
        <h2 id="optimization-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          WordPress speed optimization FAQ
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
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Want to know why your site is slow?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send me the URL. I will reply with what I think is slowing it down and what fixing it would take, and I will tell you if the fix is outside what a speed pass can do.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('wordpress')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Find out why my site is slow</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/wordpress" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Other WordPress services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
