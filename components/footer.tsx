import Link from 'next/link'
import { contactHref } from '@/lib/contact-services'
import { ArrowUpRight } from 'lucide-react'
import { LiveClock } from './live-clock'

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
    <footer className="w-full border-t border-[#E6E4DD] bg-[#0D0F14] text-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-14 py-14 md:py-16">
        {/* Top Row: Architectural Brand + Live Time Zone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 mb-12 border-b border-white/10">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#E8714A]">
              Aris Setiawan · Indonesia (UTC+7)
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white leading-none">
              MadeByAris
            </h2>
            <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed mt-1">
              Senior AI software engineer and AI consultant joining European, Singaporean, and Indonesian teams for AI systems, apps, and GEO/AEO engineering.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col lg:items-end justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-zinc-200 w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available · EU &amp; SG morning overlap</span>
            </div>
            <div className="lg:text-right">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 mb-1">
                Local time · Indonesia (WIB / UTC+7)
              </p>
              <div className="text-zinc-200 font-mono text-sm">
                <LiveClock />
              </div>
            </div>
          </div>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 pb-12">
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.14em] mb-1">
              Navigation
            </h3>
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.14em] mb-1">
              Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.14em] mb-1">
              Profiles
            </h3>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          <div className="col-span-2 lg:col-span-4 flex flex-col gap-4 lg:pl-6 lg:border-l lg:border-white/10">
            <h3 className="font-mono text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.14em]">
              Start a conversation
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Send a URL, a stalled AI pilot, or your team setup. I read every message myself and reply within 24 hours.
            </p>
            <Link
              href={contactHref('ai-implementation')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FAF9F6] hover:bg-[#D9481E] text-[#0B0C0E] hover:text-white px-5 py-2.5 text-sm font-medium transition-colors w-fit"
            >
              <span>Send me your project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} MadeByAris · Aris Setiawan
          </p>
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer legal and machine-readable links">
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
