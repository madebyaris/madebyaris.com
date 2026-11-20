import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  FileText,
  HardDrive,
  LifeBuoy,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Wrench,
  CheckCircle2,
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

const pagePath = '/services/wordpress/maintenance'
const pageTitle = 'WordPress maintenance services and support'
const pageDescription =
  'WordPress maintenance services from a developer: updates tested on staging, off-site backups, security monitoring, malware cleanup, and a monthly report.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/wordpress.jpg',
  keywords: [
    'WordPress maintenance services',
    'WordPress support services',
    'WordPress maintenance plan',
    'WordPress website maintenance',
    'WordPress malware removal service',
  ],
})

const planTasks = [
  {
    title: 'Updates tested on staging',
    description:
      'Core, theme, and plugin updates go to a staging copy first. If an update breaks a page or a form, I fix it there before your visitors see it.',
    icon: RefreshCw,
  },
  {
    title: 'Off-site backups and a restore test',
    description:
      'Backups are stored away from your host, so a server problem cannot take them too. I test a restore, because a backup nobody has restored is a guess.',
    icon: HardDrive,
  },
  {
    title: 'Uptime and security monitoring',
    description:
      'I get an alert when the site goes down or its files change without a reason. That way I hear about a problem early and can start on it.',
    icon: Activity,
  },
  {
    title: 'Security hardening',
    description:
      'Unused plugins removed, admin accounts and roles reviewed, two-factor login on, and file editing in wp-admin turned off.',
    icon: ShieldCheck,
  },
  {
    title: 'Small content and plugin fixes',
    description:
      'A broken form, a layout that shifted after an update, a new page that needs a block. Small fixes like these are part of the plan.',
    icon: Wrench,
  },
  {
    title: 'A short monthly report',
    description:
      'What I updated, what I fixed, and anything you need to decide on. Written in plain language, so you can read it in a few minutes.',
    icon: FileText,
  },
]

const outOfScope = [
  'A redesign or a new theme',
  'New features or a custom plugin',
  'A full speed fix when the theme or host is the bottleneck',
  'Writing content or daily content entry',
  'Moving the site to a new host or platform',
]

const cleanupSteps = [
  {
    title: 'Contain it',
    desc: 'I take a full copy of the site as it is, change passwords and keys, and take the site offline if it sends visitors to spam.',
  },
  {
    title: 'Clean the files and database',
    desc: 'I compare core, theme, and plugin files against clean copies, remove injected code and unknown admin users, and search the database for spam links.',
  },
  {
    title: 'Close the hole',
    desc: 'I find how the attacker got in, often an outdated plugin or a weak login. Then I update, replace, or remove it and apply the hardening list.',
  },
  {
    title: 'Restore from backup if it is cleaner',
    desc: 'If a clean backup from before the hack exists, restoring it can be safer than cleaning by hand. I still close the hole first, or it happens again.',
  },
  {
    title: 'Ask Google to remove the warning',
    desc: 'If Google flagged the site, I check the Security issues report in Search Console and request a review once the site is clean.',
  },
]

const goodFit = [
  'Your site brings in leads or sales and a broken update would cost you',
  'Nobody on your team wants to own updates and backups',
  'The developer who built the site is no longer around',
  'The site was hacked and you want it cleaned and locked down',
]

const poorFit = [
  'Your site rarely changes and you are happy to run updates yourself',
  'The site needs a redesign or rebuild, which maintenance will only delay',
  'You need someone for daily content entry or site admin',
]

const processSteps = [
  { step: 1, title: 'Send the site', desc: 'The URL, who hosts it, and what worries you' },
  { step: 2, title: 'First look', desc: 'Versions, plugins, backups, and security checked, then a scope and price' },
  { step: 3, title: 'Clean up', desc: 'Fix what the first look found on staging, set up backups and monitoring' },
  { step: 4, title: 'Monthly care', desc: 'Tested updates, small fixes, and a short report each month' },
]

const topics = [
  {
    title: 'What a website maintenance plan should cover',
    description: 'The tasks to expect from a monthly plan and the questions to ask before you pay for one.',
    href: '/blog/website-maintenance-cost',
  },
  {
    title: 'WordPress speed optimization',
    description: 'When the site works but is slow on phones or failing Core Web Vitals.',
    href: '/services/wordpress/optimization',
  },
  {
    title: 'WooCommerce stores',
    description: 'Store work that goes beyond routine updates gets its own scope.',
    href: '/services/wordpress/woocommerce',
  },
  {
    title: 'WordPress migration',
    description: 'Moving to a new host or platform without losing pages or search traffic.',
    href: '/services/wordpress/migration',
  },
  {
    title: 'Custom plugin development',
    description: 'When a fix needs new code instead of another plugin from the directory.',
    href: '/services/wordpress/plugin-development',
  },
  {
    title: 'How to pick a VPS for WordPress',
    description: 'What to look for when the host is the reason the site keeps going down.',
    href: '/blog/how-to-pick-vps-for-wordpress',
  },
]

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much do WordPress maintenance services cost?',
    answer:
      'I price each plan after a first look at the site. A small brochure site and a WooCommerce store with many plugins are different work. Send me the URL and I reply with what I found and a monthly price. My post on website maintenance cost explains what a plan should cover.',
  },
  {
    question: 'What happens if an update breaks my site?',
    answer:
      'Updates go to staging first, so most breakage shows up there and I fix it before anything goes live. If a problem still reaches the live site, I restore the backup from before the update. Then I fix the cause on staging and update again.',
  },
  {
    question: 'Can you take over a site another developer built?',
    answer:
      'Yes. I start with a first look at the theme, plugins, hosting, and backups, and I tell you what I found, including anything risky. I build WordPress themes and plugins myself, so I can read and fix custom code someone else wrote.',
  },
  {
    question: 'Do you offer a WordPress malware removal service?',
    answer:
      'Yes. I take a copy of the hacked site, clean the files and database, find how the attacker got in, and close that hole. If Google shows a warning, I request a review in Search Console once the site is clean. I do not promise a time, because it depends on the damage and the backups.',
  },
  {
    question: 'Do you maintain WooCommerce sites?',
    answer:
      'Yes. WooCommerce updates need extra care, because a broken checkout stops sales. I test the cart, checkout, and order emails on staging before an update goes live.',
  },
  {
    question: 'What is the difference between WordPress maintenance and support services?',
    answer:
      'Maintenance is the routine work: updates, backups, monitoring, and the monthly report. Support is help when something breaks or you need a small change. My plans cover both, and larger jobs like a redesign get their own scope.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'Maintenance', path: pagePath },
  ],
  service: {
    name: 'WordPress maintenance services',
    description: pageDescription,
    serviceType: 'WordPress Maintenance',
    offers: [
      { name: 'WordPress updates tested on staging' },
      { name: 'Off-site backups and restore tests' },
      { name: 'Uptime and security monitoring' },
      { name: 'WordPress security hardening' },
      { name: 'WordPress malware removal' },
      { name: 'Small fixes and a monthly report' },
    ],
  },
})

export default function WordPressMaintenancePage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li><Link href="/services" className="hover:text-[#3A57FC] transition-colors">Services</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li><Link href="/services/wordpress" className="hover:text-[#3A57FC] transition-colors">WordPress</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Maintenance</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <LifeBuoy className="w-3.5 h-3.5" />, label: 'WordPress care and support' }}
        title="WordPress maintenance services"
        accent="with every update tested first"
        actions={
          <>
            <Link
              href={contactHref('wordpress-care')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Send me your site</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#hacked"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>See how I clean a hacked site</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For site owners who want WordPress kept updated, backed up, and secure without thinking about it every month. I
          test updates on staging, keep backups off-site, and fix what breaks.
        </p>
        <p className="text-sm text-white/80">
          13+ years shipping web products, including WordPress performance work at Hongkiat.com. I build themes and plugins, so I can fix the code too.
        </p>
      </PageHero>

      <HeroImage src="/images/services/wordpress.jpg" alt="Illustration of WordPress maintenance workflow showing staging updates, off-site backups, and security monitoring" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What my WordPress maintenance services cover
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          WordPress maintenance services keep a site updated, backed up, secure, and working after every change. I test
          core, theme, and plugin updates on a staging copy before they go live. I keep off-site backups, test a restore,
          and watch uptime and security. Each month you get a short report of what changed.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          Clicking update is the easy part. The hard part is the update that breaks a template or a checkout, and that is
          where a developer helps. I build WordPress themes and plugins, so I can read the code behind the error and fix it.
        </p>
      </section>

      <section id="plan" className="mb-16 scroll-mt-32" aria-labelledby="plan-heading">
        <div className="text-center mb-10">
          <h2 id="plan-heading" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What a WordPress maintenance plan <span className="gradient-text">includes</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            These are the recurring tasks I run on a site I look after.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planTasks.map((item) => (
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

        <p className="text-sm text-[#4B5563] text-center mt-6 max-w-2xl mx-auto">
          Comparing plans from different developers? I wrote down{' '}
          <Link href="/blog/website-maintenance-cost" className={linkClass}>
            what a website maintenance plan should cover
          </Link>{' '}
          and what to ask before you pay for one.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="scope">
        <h2 id="scope" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Where WordPress website maintenance stops
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-6">
          A maintenance plan keeps the site you have healthy. Bigger jobs get their own scope and price, so the monthly plan
          stays predictable. These sit outside it:
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7 mb-6">
          <ul className="space-y-3">
            {outOfScope.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563]">
                <XCircle className="w-5 h-5 text-[#9CA3AF] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[#4B5563] leading-relaxed">
          When one of these comes up, I quote it separately. See{' '}
          <Link href="/services/wordpress/redesign" className={linkClass}>WordPress redesign</Link>,{' '}
          <Link href="/services/wordpress/plugin-development" className={linkClass}>custom plugins</Link>,{' '}
          <Link href="/services/wordpress/optimization" className={linkClass}>speed optimization</Link>, and{' '}
          <Link href="/services/wordpress/migration" className={linkClass}>migration</Link>.
        </p>
      </section>

      <section id="hacked" className="mb-16 max-w-3xl mx-auto scroll-mt-32" aria-labelledby="malware">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h2 id="malware" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight">
            WordPress malware removal service
          </h2>
        </div>
        <p className="text-[#4B5563] leading-relaxed mb-6">
          A hacked site can redirect visitors to spam, send junk email, or show a red warning in Google. Here is what I do,
          in order. I do not promise a finish time, because a cleanup depends on how deep the infection goes and what backups
          exist.
        </p>
        <ol className="space-y-4">
          {cleanupSteps.map((item, index) => (
            <li
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-display font-semibold text-[#0B0C0E] mb-1">{item.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[#4B5563] leading-relaxed mt-6">
          Google decides when a warning comes off, so that last step is out of my hands. After the cleanup, the site can move
          onto a maintenance plan, or you get the hardening notes to follow yourself.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <h2 id="fit" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Do you need <span className="gradient-text">WordPress support services?</span>
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

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <h2 id="process" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How I take over <span className="gradient-text">your site</span>
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
            Related guides <span className="gradient-text">and WordPress services</span>
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

      <Faq id="maintenance-faq" title="WordPress maintenance services FAQ" faqs={faqs} />

      <CtaBand
        title="Want someone to look after your WordPress site?"
        body="Send me the URL and what worries you. I reply with what I found on a first look and a monthly price. If the site was hacked, say so and I start with the cleanup."
        primary={{ href: contactHref('wordpress-care'), label: 'Send me your site' }}
        secondary={{ href: '/services/wordpress', label: 'Other WordPress services' }}
      />
    </>
  )
}
