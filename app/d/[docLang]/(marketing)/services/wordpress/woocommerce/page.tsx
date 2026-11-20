import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Gauge,
  Plug,
  Puzzle,
  ShieldCheck,
  ShoppingCart,
  Truck,
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

const pagePath = '/services/wordpress/woocommerce'
const pageTitle = 'Hire a WooCommerce developer for your store'
const pageDescription =
  'Hire a WooCommerce developer for custom plugins, checkout changes, payment gateway integration, and fixing a slow store. Every change is tested on staging.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/wordpress.jpg',
  keywords: [
    'hire a WooCommerce developer',
    'WooCommerce developer',
    'WooCommerce development services',
    'custom WooCommerce plugin',
    'slow WooCommerce store',
    'WooCommerce payment gateway integration',
    'WooCommerce checkout customization',
  ],
})

const offers = [
  {
    title: 'Custom features and plugins',
    description:
      'A custom WooCommerce plugin for the rule your store needs, like special pricing, product options, or B2B order steps. It hooks into WooCommerce, so updates leave it alone.',
    icon: Puzzle,
  },
  {
    title: 'Checkout and product pages',
    description:
      'WooCommerce checkout customization: fields added or removed, delivery dates, and conditional rules. I check first whether you run the block checkout or the classic one, because they change differently.',
    icon: ShoppingCart,
  },
  {
    title: 'Payment and shipping integrations',
    description:
      'WooCommerce payment gateway integration with Stripe, PayPal, or local gateways such as Midtrans or Xendit for Indonesian stores. Shipping rates from a courier API or your own rules.',
    icon: CreditCard,
  },
  {
    title: 'Speed for large catalogs',
    description:
      'Stores with many products slow down in the database, cart fragments, a missing object cache, or oversized images. I measure the shop, product, and checkout pages, then fix the biggest cause first.',
    icon: Gauge,
  },
  {
    title: 'Store migrations',
    description:
      'Moving a store to a new host or into WooCommerce, with products, customers, and orders carried over and the old URLs redirected.',
    icon: Truck,
  },
  {
    title: 'ERP, inventory, and app connections',
    description:
      'Connect WooCommerce to an ERP, an inventory system, or a mobile app through the REST API or a custom endpoint. Stock and orders stay in sync.',
    icon: Plug,
  },
]

const speedChecks = [
  'Database: autoloaded options, tables left by old plugins, and slow product queries',
  'Order storage: switching to High-Performance Order Storage when your plugins support it',
  'Cart fragments: stopping the cart refresh request on pages that do not show a cart',
  'Object cache: Redis or Memcached, where your host offers it, so repeat queries skip the database',
  'Images: product photos generated at the sizes your theme actually shows',
  'Plugins: scripts that load on every page when only the shop or checkout needs them',
]

const safetySteps = [
  'Every change goes to a staging copy of the store first',
  'Emails to real customers are turned off on staging, so nobody gets a test order email',
  'Payments run in test or sandbox mode, and I place test orders from cart to confirmation',
  'Stock levels and order emails are checked after each test order',
  'Changes go live in your quietest hour, with a backup taken right before',
  'Cart, checkout, and my account pages always stay out of page caching',
]

const goodFit = [
  'A plugin almost does what your store needs and you keep fighting its settings',
  'Checkout needs fields, rules, or a payment method your current setup cannot handle',
  'The store got slower as products and orders piled up',
  'Someone else built the store and you need a developer who can read their code',
]

const poorFit = [
  'You need someone to upload products or process orders every day',
  'A well-maintained plugin already does the job (I will name it)',
  'You want a store with no hosting, updates, or security to think about',
]

const processSteps = [
  { step: 1, title: 'Send the store', desc: 'The URL, what is wrong, and what you want it to do' },
  { step: 2, title: 'Scope', desc: 'What I would change, how I would test it, and a price' },
  { step: 3, title: 'Build on staging', desc: 'Test orders through every payment and shipping path' },
  { step: 4, title: 'Go live and hand over', desc: 'Deployed in a quiet hour, with notes on what changed' },
]

const topics = [
  {
    title: 'Custom WordPress plugin development',
    description: 'Plugins for jobs outside the store, from API integrations to admin screens.',
    href: '/services/wordpress/plugin-development',
  },
  {
    title: 'WordPress speed optimization',
    description: 'Hosting, caching, and theme fixes for the rest of the site.',
    href: '/services/wordpress/optimization',
  },
  {
    title: 'WordPress migration',
    description: 'Moving a store to a new host or domain with redirects and Search Console checks.',
    href: '/services/wordpress/migration',
  },
  {
    title: 'PHP app and API development',
    description: 'When the store has to talk to a system that has no WooCommerce plugin.',
    href: '/services/php-development',
  },
  {
    title: 'How to pick a VPS for WordPress',
    description: 'What to compare when shared hosting cannot keep up with the store.',
    href: '/blog/how-to-pick-vps-for-wordpress',
  },
  {
    title: 'WordPress maintenance',
    description: 'Plugin updates, backups, and checks so the store keeps taking orders.',
    href: '/services/wordpress/maintenance',
  },
]

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much does it cost to hire a WooCommerce developer?',
    answer:
      'I price each job after a first look, because a new checkout field and a stock sync with an ERP are very different work. Send me the store URL and what you need changed. I reply with a scope and a price before you commit to anything.',
  },
  {
    question: 'Can you fix a slow WooCommerce store?',
    answer:
      'Yes. I measure the shop, product, and checkout pages, then trace the delay to the database, plugins, cart fragments, images, or hosting. Fixes go on staging first and get checked with test orders. If the host is the limit, I tell you before you pay for anything else.',
  },
  {
    question: 'Can you take over a store someone else built?',
    answer:
      'Yes. I start with a full backup, then read the theme and custom plugins and check which plugins are out of date. You get a short list of the risks I found before I change anything. Then we decide together whether to clean up the old code or replace it one piece at a time.',
  },
  {
    question: 'Can you build a custom WooCommerce plugin?',
    answer:
      'Yes. I write custom plugins in PHP on top of WooCommerce hooks and the REST API. Your feature lives in its own plugin, so a WooCommerce update does not overwrite it. If an existing plugin already does the job well, I will name it and save you the build.',
  },
  {
    question: 'Can you integrate my local payment gateway?',
    answer:
      'Yes, I can integrate local gateways such as Midtrans or Xendit for Indonesian stores, as well as Stripe and PayPal. If the gateway has an official WooCommerce plugin, I set it up and test it. If it only offers an API, I write the integration and test each payment status in sandbox mode first.',
  },
  {
    question: 'Will my checkout break while you work on it?',
    answer:
      'I build on a staging copy, so your live checkout keeps running while I work. Changes go live in a quiet hour after the test orders pass, with a backup taken right before. Cart and checkout pages stay out of page caching, because a cached cart shows one shopper the wrong items.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'WooCommerce', path: pagePath },
  ],
  service: {
    name: 'WooCommerce development services',
    description: pageDescription,
    serviceType: 'WooCommerce Development',
    offers: offers.map((offer) => ({ name: offer.title, description: offer.description })),
  },
})

export default function WooCommerceDevelopmentPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        breadcrumb={
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-white/75">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/40">/</li>
                <li>
                  <Link href="/services/wordpress" className="hover:text-white transition-colors">
                    WordPress
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/40">/</li>
                <li className="font-semibold text-white" aria-current="page">
                  WooCommerce
                </li>
              </ol>
            </nav>

            <p className="text-xs font-mono text-white/80">
              <Link
                href="/services/wordpress/jasa-woocommerce"
                className="underline decoration-white/50 underline-offset-4 hover:text-[#FFB866] transition-colors"
              >
                Jasa WooCommerce
              </Link>{' '}
              (in Indonesian)
            </p>
          </div>
        }
        eyebrow={{ icon: <ShoppingCart className="w-3.5 h-3.5" />, label: 'WooCommerce developer' }}
        title="Hire a WooCommerce developer"
        accent="who tests on staging first"
        actions={
          <>
            <Link
              href={contactHref('wordpress')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Send me your store</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#hire"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>See what you can hire me for</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For store owners whose WooCommerce store needs a custom feature, a checkout change, a payment integration, or a
          speed fix. I write the PHP myself and test every change with test orders.
        </p>
        <p className="text-sm text-white/80">
          13+ years building WordPress themes, plugins, and PHP apps, including WordPress performance work at Hongkiat.com.
        </p>
      </PageHero>

      <HeroImage src="/images/services/wordpress.jpg" alt="Illustration of a custom WooCommerce storefront with product catalog, checkout flow, and staging safety checks" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          When to hire a WooCommerce developer
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          Hire a WooCommerce developer when a plugin almost fits, checkout has to work differently, or the store slows
          down as the catalog grows. I read the code, find what is actually wrong, and fix it on a
          staging copy. You talk to the person writing the PHP, and every job starts with a written scope.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          WooCommerce is WordPress underneath, so the work is custom plugins, theme templates, MySQL, and the REST API.
          For jobs outside the store, see my{' '}
          <Link href="/services/wordpress" className={linkClass}>
            WordPress development services
          </Link>
          .
        </p>
      </section>

      <section id="hire" className="mb-16 scroll-mt-32" aria-labelledby="offers">
        <div className="text-center mb-10">
          <h2 id="offers" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            WooCommerce development services <span className="gradient-text">you can hire me for</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            You may only need one of these. The scope says which, and in what order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((item) => (
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

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="speed">
        <h2 id="speed" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Fixing a slow WooCommerce store
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-6">
          Cart, checkout, and account pages change for every shopper, so a page cache cannot help them. They depend on
          fast PHP and a fast database, which is where I look first. For speed work on the rest of the site, see my{' '}
          <Link href="/services/wordpress/optimization" className={linkClass}>
            WordPress speed service
          </Link>
          .
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <ul className="space-y-3">
            {speedChecks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563]">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="live-store">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 id="live-store" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight">
            How I work on a live WooCommerce store
          </h2>
        </div>
        <p className="text-[#4B5563] leading-relaxed mb-6">
          Your store keeps taking orders while I work on it. I treat the live site as read only until a change has passed
          on staging.
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <ul className="space-y-3">
            {safetySteps.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563]">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="wrong-fit">
        <h2 id="wrong-fit" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          When to move off WooCommerce
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          WooCommerce makes sense when you want to own the code, need custom rules, or already run on WordPress. It also
          makes you responsible for hosting, updates, and security, or for paying someone to handle them. If you sell a
          small, simple catalog and nobody on your team wants that job, Shopify may be less work. I will tell you if that
          is your situation.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          A{' '}
          <Link href="/services/wordpress/headless-development" className={linkClass}>
            headless front end in Next.js
          </Link>{' '}
          can make a large catalog feel faster, though it adds a second codebase to maintain. Cart and checkout also have
          to be rebuilt or left on WordPress. I suggest it only after speed fixes have run out, and{' '}
          <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className={linkClass}>
            WordPress vs Next.js: when it’s worth it
          </Link>{' '}
          explains the trade-off.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <h2 id="fit" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Am I the right WooCommerce developer <span className="gradient-text">for your store?</span>
          </h2>
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
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Look elsewhere</h3>
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

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <h2 id="process" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How a WooCommerce job <span className="gradient-text">runs</span>
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

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="topics">
        <div className="text-center mb-10">
          <h2 id="topics" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Related services <span className="gradient-text">and guides</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <h3 className="font-display font-semibold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors mb-1.5 flex items-center justify-between gap-3">
                {item.title}
                <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#3A57FC] group-hover:translate-x-0.5 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="woocommerce-faq" title="Hiring a WooCommerce developer: FAQ" faqs={faqs} />

      <CtaBand
        title="Tell me what your store needs"
        body="Send the store URL and what is going wrong. I reply with what I would change, how I would test it, and a price. If a plugin you can install today does the job, I will name it."
        primary={{ href: contactHref('wordpress'), label: 'Send me your store' }}
        secondary={{ href: '/services/wordpress/plugin-development', label: 'See custom plugin work' }}
      />
    </>
  )
}
