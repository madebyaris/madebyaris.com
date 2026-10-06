import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Layout, Palette, FileCode, Code2, CheckCircle2, XCircle, Brush } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pageTitle = 'Custom WordPress Theme Development'
const pagePath = '/services/wordpress/theme-development'
const pageDescription =
  'Custom WordPress theme development from your design: a block theme your editors can update, light on phones, and clean enough for the next developer.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: [
    'custom WordPress theme development',
    'WordPress theme developer',
    'custom WordPress block theme',
    'Figma to WordPress theme',
    'WordPress full site editing theme',
  ],
})

const outcomes = [
  {
    title: 'Editors change pages without calling a developer',
    description: 'Custom blocks and block patterns match your design, so your team builds new pages from parts that already look right.',
    icon: Palette,
  },
  {
    title: 'Pages stay light on phones',
    description: 'The theme loads only the CSS and JavaScript it needs. No page builder layer and no unused slider library on every page.',
    icon: Layout,
  },
  {
    title: 'Content shaped like your business',
    description: 'Custom post types and taxonomies for products, case studies, or events, so content is structured and easy to filter.',
    icon: FileCode,
  },
  {
    title: 'Code the next developer can read',
    description: 'Built to WordPress coding standards with a short handover doc, so you can switch developers any time.',
    icon: Code2,
  },
]

const goodFit = [
  'You have a design (Figma or similar) and need it built as a real theme',
  'Your current theme is a heavy multipurpose theme and you use a few of its features',
  'Editors keep breaking layouts because every page is built by hand',
  'You need custom post types for content that is more than blog posts',
]

const poorFit = [
  'A well-made premium theme already matches what you need',
  'You want a drag-and-drop page builder for every page',
  'You need a new design created from scratch (I build from a design)',
  'The site is going headless, where a Next.js front end replaces the theme',
]

const deliverables = [
  'Custom block theme built from your design',
  'Custom blocks and block patterns',
  'Custom post types and taxonomies',
  'Responsive layouts tested on phones and desktops',
  'Theme settings in the site editor where it makes sense',
  'SEO basics: clean headings, fast pages, schema-ready markup',
  'Staging review before launch',
  'Handover docs for editors and developers',
]

const processSteps = [
  { step: 1, title: 'Review', desc: 'Go through your design, content types, and the plugins that must keep working' },
  { step: 2, title: 'Scope', desc: 'Agree on templates, blocks, and milestones before code starts' },
  { step: 3, title: 'Build on staging', desc: 'You click through the real theme with your content as it takes shape' },
  { step: 4, title: 'Launch', desc: 'Switch themes, check redirects and plugins, then hand over the docs' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does custom WordPress theme development cost?',
    answer:
      'I price each theme after seeing the design, because the number of templates, custom blocks, and post types sets the size of the job. Send me the design and I will reply with a scope and a price for that scope.',
  },
  {
    question: 'How long does a custom theme take?',
    answer:
      'It depends on how many templates and custom blocks the design needs. The scope includes milestones and a timeline, and you can review progress on a staging site the whole way through.',
  },
  {
    question: 'Will a new theme break my plugins?',
    answer:
      'Most plugins keep working because they do not depend on the theme. The ones that do, like plugins that add their own page layouts or shortcodes, I test on staging first and tell you about any conflict before launch.',
  },
  {
    question: 'Who maintains the theme after launch?',
    answer:
      'You own the theme. It follows WordPress coding standards and comes with docs, so your team or another developer can maintain it. I can also stay on for updates if you prefer.',
  },
  {
    question: 'Can you build the theme for Elementor or another page builder?',
    answer:
      'I build block themes for the WordPress editor, because page builders add a lot of front-end code and make every page a one-off. If your team depends on Elementor, tell me, and I will say honestly whether a custom theme is worth it for you.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'Theme Development', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'WordPress Theme Development',
    offers: deliverables.map((name) => ({ name })),
  },
  faqs,
})

export default function ThemeDevelopmentPage() {
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
          <li className="text-zinc-900">Theme Development</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Palette className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">WordPress theme developer</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Custom WordPress theme
          <span className="block gradient-text font-light">development</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For teams with a design and a WordPress site that should match it. You get a theme your editors can update without breaking the layout.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          13+ years shipping web products, including WordPress work at Hongkiat.com.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('wordpress')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Send me your design</span>
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
          What custom WordPress theme development includes
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Custom WordPress theme development means I turn your design into a theme written for your site alone. It includes the page templates, custom blocks your editors reuse, and post types for your content. There is no multipurpose theme or page builder underneath, so the site carries less code and editors work inside a layout that already matches the design.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Weighing a theme against a full rebuild? Read{' '}
          <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            WordPress vs Next.js: when it’s worth it
          </Link>
          .
        </p>
      </section>

      {/* Outcomes Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Brush className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">What changes for you</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What a WordPress theme developer <span className="gradient-text">should give you</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((item) => (
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
            Do you need a <span className="gradient-text">custom theme?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Sometimes a good premium theme is enough, and I will say so.
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
        <p className="text-sm text-zinc-500 text-center mt-6">
          Going headless instead? See{' '}
          <Link href="/services/wordpress/headless-development" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            headless WordPress with Next.js
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Deliverables Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What you <span className="gradient-text">get</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-zinc-500 text-center mt-6">
          A fast theme still needs decent hosting. Here is{' '}
          <Link href="/blog/how-to-pick-vps-for-wordpress" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            how to pick a VPS for WordPress
          </Link>
          .
        </p>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the theme <span className="gradient-text">gets built</span>
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
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="theme-faq">
        <h2 id="theme-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Custom WordPress theme FAQ
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
            Have a design that needs to become a theme?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send the design and your current site. I will reply with the templates and blocks I would build and a price for that scope, before you commit to anything.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('wordpress')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Send me your design</span>
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
