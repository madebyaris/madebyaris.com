import Link from 'next/link'
import Image from 'next/image'
import { contactHref } from '@/lib/contact-services'
import { ArrowUpRight } from 'lucide-react'
import { LiveClock } from './live-clock'
import logoMark from '@/public/images/logo-mark.png'

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Guides', href: '/guides/cursor' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { name: 'AI Engineering', href: '/ai-implementation' },
  { name: 'AI Integration', href: '/services/ai-development/ai-integration' },
  { name: 'AI MVP Development', href: '/services/ai-development/ai-mvp' },
  { name: 'Product Engineering', href: '/product-engineering' },
  { name: 'Cursor & AI Workflows', href: '/services/vibe-code-friend' },
  { name: 'Next.js Development', href: '/services/nextjs-development' },
  { name: 'SaaS Development', href: '/services/saas-development' },
  { name: 'AI Search (GEO & AEO)', href: '/services/ai-search-geo-aeo' },
  { name: 'Technical SEO', href: '/services/seo' },
  { name: 'WordPress & Headless', href: '/services/wordpress' },
  { name: 'Jasa Implementasi AI', href: '/jasa-implementasi-ai' },
  { name: 'Jasa Pengembangan Produk', href: '/jasa-pengembangan-produk' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/madebyaris' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/arissetia/' },
  { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe' },
  { name: 'RankMySEO', href: 'https://rankmyseo.com' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'llms.txt', href: '/llms.txt' },
  { name: 'Sitemap', href: '/sitemap.xml' },
]

export function Footer() {
  return (
    <footer className="relative w-full bg-[#07080C] text-white overflow-hidden">
      {/* Subtle Cobalt-to-Amber top architectural hairline */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#3A57FC]/20 via-[#3A57FC] to-[#FF8800]"
      />
      {/* Ambient top cobalt wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(55%_60%_at_20%_0%,rgba(58,87,252,0.16),transparent_70%)]"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-16 md:py-20">
        {/* Top Row: Brand Identity + Live Studio Telemetry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 mb-12 border-b border-white/10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FFB866]">
              Founder-Led AI Development Agency · Indonesia (UTC+7)
            </span>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-xl bg-white overflow-hidden ring-1 ring-white/25 shrink-0 shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
                <Image
                  src={logoMark}
                  alt="MadeByAris astronaut logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tighter text-white leading-none">
                  madebyaris
                </h2>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#93A8FF] mt-1">
                  Production AI · Full-Stack · GEO &amp; SEO
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Owned and led by Aris Setiawan, partnering with European, UK, Singaporean, and Indonesian teams on custom AI agents, full-stack products, and AI search engineering.
            </p>
          </div>

          {/* Sleek Dark Glass Live Studio Clock & Availability Card */}
          <div className="lg:col-span-5 lg:justify-self-end w-full lg:max-w-sm">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new builds
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-zinc-400">
                  EU · UK · SG · ID
                </span>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                    Studio local time · WIB (UTC+7)
                  </p>
                  <LiveClock className="text-2xl sm:text-3xl text-white" />
                </div>
                <span className="font-mono text-[11px] text-[#FFB866] pb-0.5">
                  24h reply
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 pb-12">
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-semibold text-[#93A8FF] uppercase tracking-[0.14em] mb-1">
              Navigation
            </h3>
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-semibold text-[#93A8FF] uppercase tracking-[0.14em] mb-1">
              Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-zinc-300 hover:text-white transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-semibold text-[#93A8FF] uppercase tracking-[0.14em] mb-1">
              Profiles
            </h3>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5 group w-fit"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

          <div className="col-span-2 lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-4 h-full justify-between">
              <div>
                <h3 className="font-mono text-[11px] font-semibold text-[#FFB866] uppercase tracking-[0.14em] mb-2">
                  Start a conversation
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Send a URL, a stalled AI pilot, or your team setup. Aris reads every message directly and replies within 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={contactHref('ai-implementation')}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white px-5 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-black/25 group"
                >
                  <span>Book a scoping call</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} MadeByAris · Aris Setiawan · Sidoarjo, Indonesia
          </p>
          <nav
            className="flex flex-wrap items-center gap-6"
            aria-label="Footer legal and machine-readable links"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-xs text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
