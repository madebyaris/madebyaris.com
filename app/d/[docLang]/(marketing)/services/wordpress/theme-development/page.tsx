import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Layout, Palette, FileCode, Code2, CheckCircle2, XCircle, Brush } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
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
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function ThemeDevelopmentPage() {
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
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Theme Development</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Palette className="w-3.5 h-3.5" />, label: 'WordPress theme developer' }}
        title="Custom WordPress theme"
        accent="development"
        actions={
          <>
            <Link
              href={contactHref('wordpress')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Send me your design</span>
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
          For teams with a design and a WordPress site that should match it. You get a theme your editors can update without breaking the layout.
        </p>
        <p className="text-sm text-white/80">
          13+ years shipping web products, including WordPress work at Hongkiat.com.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What custom WordPress theme development includes
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          Custom WordPress theme development means I turn your design into a theme written for your site alone. It includes the page templates, custom blocks your editors reuse, and post types for your content. There is no multipurpose theme or page builder underneath, so the site carries less code and editors work inside a layout that already matches the design.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          Weighing a theme against a full rebuild? Read{' '}
          <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className={linkClass}>
            WordPress vs Next.js: when it’s worth it
          </Link>
          .
        </p>
      </section>

      {/* Outcomes Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <Brush className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">What changes for you</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What a WordPress theme developer <span className="gradient-text">should give you</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((item) => (
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
            Do you need a <span className="gradient-text">custom theme?</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            Sometimes a good premium theme is enough, and I will say so.
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
        <p className="text-sm text-[#4B5563] text-center mt-6">
          Going headless instead? See{' '}
          <Link href="/services/wordpress/headless-development" className={linkClass}>
            headless WordPress with Next.js
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Deliverables Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What you <span className="gradient-text">get</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0" />
                <span className="text-sm text-[#0B0C0E] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-[#4B5563] text-center mt-6">
          A fast theme still needs decent hosting. Here is{' '}
          <Link href="/blog/how-to-pick-vps-for-wordpress" className={linkClass}>
            how to pick a VPS for WordPress
          </Link>
          .
        </p>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How the theme <span className="gradient-text">gets built</span>
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
      </section>

      <Faq id="theme-faq" title="Custom WordPress theme FAQ" faqs={faqs} />

      <CtaBand
        title="Have a design that needs to become a theme?"
        body="Send the design and your current site. I will reply with the templates and blocks I would build and a price for that scope, before you commit to anything."
        primary={{ href: contactHref('wordpress'), label: 'Send me your design' }}
        secondary={{ href: '/services/wordpress', label: 'Other WordPress services' }}
      />
    </>
  )
}
