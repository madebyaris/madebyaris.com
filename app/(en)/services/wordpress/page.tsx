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
} from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400

const path = '/services/wordpress'
const pageTitle = 'Hire a WordPress Developer (Headless Too)'
const pageDescription =
  'Hire a WordPress developer with 13+ years of experience for custom themes, plugins, speed fixes, and headless WordPress with Next.js. Remote worldwide.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'hire a WordPress developer',
    'WordPress developer for hire',
    'headless WordPress development services',
    'custom WordPress theme development',
    'custom WordPress plugin development',
    'WordPress speed optimization service',
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
  faqs,
})

export default function WordPressServicesPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Layout className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">WordPress developer</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Hire a WordPress developer
          <span className="block gradient-text font-light">who ships</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For businesses and agencies whose WordPress site needs a custom theme, a plugin, a speed fix, or a headless front end.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          13+ years shipping web products, including WordPress work at Hongkiat.com. This site runs on headless WordPress and Next.js.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('wordpress')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Send me your WordPress site</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href={contactHref('headless-wordpress')}
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Ask about headless WordPress</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What you get when you hire a WordPress developer like me
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          You get one senior developer who reads your site, tells you what is actually wrong, and fixes it. That can mean a custom theme, a custom plugin, a speed and security pass, or moving the front end to Next.js while your team keeps writing in wp-admin. You talk to the person writing the code, and every project starts with a written scope.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Unsure whether to stay on WordPress at all? Start with{' '}
          <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            WordPress vs Next.js: when it’s worth it
          </Link>
          .
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Code2 className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">What I build</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            WordPress developer for hire: <span className="gradient-text">pick the job</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <service.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Proof Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Proof you can check</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Why trust me with <span className="gradient-text">your WordPress site</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Each one links to where you can check it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {proof.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-3">{item.description}</p>
              <Link href={item.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:text-orange-500 transition-colors">
                {item.linkLabel}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Should you <span className="gradient-text">hire me?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            I would rather say no early than take a job I am the wrong person for.
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

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How a project <span className="gradient-text">runs</span>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="wordpress-faq">
        <h2 id="wordpress-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Hiring a WordPress developer: FAQ
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
          <Globe className="w-8 h-8 text-orange-400 mb-6" />
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Tell me what your WordPress site needs
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send the URL and what is bothering you. I will reply with what I would do and what it would take, and I will tell you if you do not need me.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('wordpress')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Send me your WordPress site</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/blog/headless-wordpress-with-nextjs" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Read how this site runs headless</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
