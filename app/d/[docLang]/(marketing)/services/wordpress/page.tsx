import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Layout,
  Globe,
  FileCode,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Brush,
  Rocket,
  Zap,
  Server,
  GraduationCap,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Wrench,
  ShoppingCart,
} from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { PageHero } from '@/components/page/hero'
import { HeroImage } from '@/components/page/hero-image'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400

const path = '/services/wordpress'
const pageTitle = 'Hire a WordPress Developer (Headless Too)'
const pageDescription =
  'Hire a WordPress developer with 13+ years of experience for custom themes, plugins, maintenance, migrations, WooCommerce, and headless WordPress.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  image: '/images/services/wordpress.jpg',
  keywords: [
    'hire a WordPress developer',
    'WordPress developer for hire',
    'headless WordPress development services',
    'custom WordPress theme development',
    'custom WordPress plugin development',
    'WordPress speed optimization service',
    'WordPress development services',
    'WordPress maintenance services',
    'remote WordPress developer',
  ],
})

const services = [
  {
    title: 'Custom theme development',
    description: 'A theme built from your design that editors can update with blocks and that stays light on phones.',
    icon: Brush,
    href: '/services/wordpress/theme-development',
    features: ['Block themes', 'Custom post types', 'Editor-friendly'],
  },
  {
    title: 'Custom plugin development',
    description: 'One plugin that does the exact job, from API integrations to custom admin screens.',
    icon: FileCode,
    href: '/services/wordpress/plugin-development',
    features: ['API integrations', 'Admin screens', 'REST endpoints'],
  },
  {
    title: 'Headless WordPress with Next.js',
    description: 'Keep wp-admin for your editors and serve the site from a fast Next.js front end. This site runs that way.',
    icon: Rocket,
    href: '/services/wordpress/headless-development',
    features: ['Next.js front end', 'REST or GraphQL', 'SEO carried over'],
  },
  {
    title: 'Speed and security fixes',
    description: 'Find what is slowing your site down, fix that first, then lock down the admin.',
    icon: Zap,
    href: '/services/wordpress/optimization',
    features: ['Speed audit', 'Caching', 'Security hardening'],
  },
  {
    title: 'Maintenance and support',
    description: 'Updates tested on staging, off-site backups, monitoring, and cleanup if the site gets hacked.',
    icon: Wrench,
    href: '/services/wordpress/maintenance',
    features: ['Monthly plan', 'Backups', 'Malware removal'],
  },
  {
    title: 'Website redesign',
    description: 'A new design on a fast custom theme, with every URL kept or redirected so rankings survive.',
    icon: Layout,
    href: '/services/wordpress/redesign',
    features: ['Custom theme', 'Redirect map', 'Search Console checks'],
  },
  {
    title: 'Migration',
    description: 'Move to a new host or domain, or bring another CMS into WordPress, without losing traffic.',
    icon: Globe,
    href: '/services/wordpress/migration',
    features: ['Host moves', 'Domain changes', 'CMS imports'],
  },
  {
    title: 'WooCommerce development',
    description: 'Custom checkout, payment and shipping integrations, and fixes for stores that got slow.',
    icon: ShoppingCart,
    href: '/services/wordpress/woocommerce',
    features: ['Custom plugins', 'Payment gateways', 'Store speed'],
  },
]

const proof = [
  {
    title: 'This site is the demo',
    description: 'The blog you can read here is written in WordPress and served by Next.js on Vercel. Same setup I build for clients.',
    icon: Server,
    href: '/services/wordpress/headless-development',
    linkLabel: 'See how it runs',
  },
  {
    title: '13+ years shipping web products',
    description: 'Independent since 2015, working remotely with teams worldwide in English or Indonesian.',
    icon: Globe,
    href: '/about',
    linkLabel: 'Read my background',
  },
  {
    title: 'WordPress developer at Hongkiat.com',
    description: 'Built new features and improved site performance on Hongkiat.com using WordPress, PHP, and MySQL.',
    icon: Code2,
    href: '/about',
    linkLabel: 'See my work history',
  },
  {
    title: 'Co-founded Raja Kreatif Asia',
    description: 'We launched Raja Kreatif Class, a WordPress learning platform. Your editors get handover docs in plain language.',
    icon: GraduationCap,
    href: '/about',
    linkLabel: 'More about Raja Kreatif',
  },
]

const goodFit = [
  'Your WordPress site works, but it is slow, fragile, or hard for editors to update',
  'A plugin almost does what you need and you keep fighting it',
  'You have a design and need it built as a real WordPress theme',
  'You want WordPress as the editor and a faster front end in Next.js',
]

const poorFit = [
  'You only need a theme installed and a few settings changed',
  'The job is ongoing content entry or daily site admin',
  'A well-maintained plugin already does the job (I will name it)',
]

const processSteps = [
  { step: 1, title: 'Send the site', desc: 'The URL, what is wrong, and what you want' },
  { step: 2, title: 'Scope', desc: 'What I would change, milestones, and a price' },
  { step: 3, title: 'Build on staging', desc: 'Your live site keeps running while I work' },
  { step: 4, title: 'Launch and hand over', desc: 'Go live, test your plugins, leave docs' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does it cost to hire a WordPress developer?',
    answer:
      'I scope every project before quoting, because a speed fix and a custom plugin are very different jobs. Send me the site and what you need, and I will reply with a scope and a price for that scope before you commit to anything.',
  },
  {
    question: 'How long does a WordPress project take?',
    answer:
      'It depends on the scope. A speed fix is a smaller job than a custom theme with new post types. The scope I send includes milestones and a timeline before work starts.',
  },
  {
    question: 'Will you break my existing plugins?',
    answer:
      'I work on a staging copy first and test the plugins you depend on before anything goes live. If a plugin conflicts with a change, I tell you and we decide together whether to replace it, patch around it, or keep it.',
  },
  {
    question: 'Who maintains the site after launch?',
    answer:
      'You own the code. It follows WordPress coding standards and comes with docs, so your team or another developer can maintain it. I can also stay on for updates.',
  },
  {
    question: 'Do you work on Elementor or other page builder sites?',
    answer:
      'Yes, I fix speed and plugin problems on Elementor and Divi sites. For a new build I usually suggest a block theme, because page builders add a lot of front-end code and do not carry over to a headless front end.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path },
  ],
  service: {
    name: 'WordPress development',
    description: pageDescription,
    serviceType: 'WordPress development',
    offers: services.map((service) => ({ name: service.title, description: service.description })),
  },
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function WordPressServicesPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        eyebrow={{ icon: <Layout className="w-3.5 h-3.5" />, label: 'WordPress developer' }}
        title="Hire a WordPress developer"
        accent="who ships"
        actions={
          <>
            <Link
              href={contactHref('wordpress')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Send me your WordPress site</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href={contactHref('headless-wordpress')}
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>Ask about headless WordPress</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For businesses and agencies whose WordPress site needs a custom theme, a plugin, a speed fix, or a headless front end.
        </p>
        <p className="text-sm text-white/80">
          13+ years shipping web products, including WordPress work at Hongkiat.com. This site runs on headless WordPress and Next.js.
        </p>
      </PageHero>

      <HeroImage src="/images/services/wordpress.jpg" alt="Illustration of a WordPress site layout being updated, with a security shield, maintenance tools, and a migration box" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What you get when you hire a WordPress developer like me
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          I read your site, tell you what is actually wrong, and lead the fix. That can mean a custom theme, a custom plugin, a speed and security pass, or moving the front end to Next.js while your team keeps writing in wp-admin. You talk to the person leading the work, and every project starts with a written scope.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          Unsure whether to stay on WordPress at all? Start with{' '}
          <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className={linkClass}>
            WordPress vs Next.js: when it’s worth it
          </Link>
          .
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <Code2 className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">What I build</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            WordPress developer for hire: <span className="gradient-text">pick the job</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) =>
            service.href === '/services/wordpress/woocommerce' ? (
              <div
                key={service.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all h-full flex flex-col justify-between"
              >
                <Link href={service.href} className="group block p-6 md:p-7 pb-3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl group-hover:bg-[#3A57FC] group-hover:text-white transition-colors shrink-0">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-[#0B0C0E] mb-1 group-hover:text-[#3A57FC] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#4B5563] leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-md text-[11px] text-[#4B5563] font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </Link>
                <p className="px-6 md:px-7 pb-6 md:pb-7 text-sm text-[#4B5563]">
                  <Link href="/services/wordpress/jasa-woocommerce" className={linkClass}>
                    Jasa WooCommerce
                  </Link>{' '}
                  (in Indonesian)
                </p>
              </div>
            ) : (
              <Link key={service.title} href={service.href} className="group">
                <div className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl group-hover:bg-[#3A57FC] group-hover:text-white transition-colors shrink-0">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-[#0B0C0E] mb-1 group-hover:text-[#3A57FC] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#4B5563] leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-md text-[11px] text-[#4B5563] font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ),
          )}
        </div>
        <p className="text-sm text-[#4B5563] mt-6 text-center" lang="id">
          Cari jasa pembuatan website WordPress dalam Bahasa Indonesia?{' '}
          <Link href="/services/wordpress/jasa-wordpress" className={linkClass}>
            Baca halaman jasa WordPress
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Proof Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">Proof you can check</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Why trust me with <span className="gradient-text">your WordPress site</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            Each one links to where you can check it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proof.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-4">{item.description}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] transition-colors"
              >
                {item.linkLabel}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Should you <span className="gradient-text">hire me?</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            I would rather say no early than take a job I am the wrong person for.
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

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How a project <span className="gradient-text">runs</span>
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

      <Faq id="wordpress-faq" title="Hiring a WordPress developer: FAQ" faqs={faqs} />

      <CtaBand
        title="Tell me what your WordPress site needs"
        body="Send the URL and what is bothering you. I will reply with what I would do and what it would take, and I will tell you if you do not need me."
        primary={{ href: contactHref('wordpress'), label: 'Send me your WordPress site' }}
        secondary={{ href: '/blog/headless-wordpress-with-nextjs', label: 'Read how this site runs headless' }}
      />
    </>
  )
}
