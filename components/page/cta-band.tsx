import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import ctaCobaltBg from '@/public/images/cta-cobalt-bg.jpg'

interface CtaLink {
  href: string
  label: string
}

interface CtaBandProps {
  title: string
  body: string
  primary: CtaLink
  secondary?: CtaLink
  badge?: string
  className?: string
}

export function CtaBand({
  title,
  body,
  primary,
  secondary,
  badge = 'Direct founder inquiry · 24h reply',
  className = 'mb-8',
}: CtaBandProps) {
  return (
    <div
      className={`rounded-2xl bg-[#1D35D8] border border-[#3A57FC]/60 shadow-[0_28px_70px_-24px_rgba(30,52,216,0.55)] overflow-hidden relative ${className}`}
    >
      {/* Bespoke architectural electric-cobalt & amber refraction background */}
      <Image
        src={ctaCobaltBg}
        alt=""
        aria-hidden="true"
        fill
        placeholder="blur"
        sizes="(max-width: 1200px) 100vw, 1120px"
        className="object-cover object-center scale-[1.02]"
      />
      {/* Subtle readability gradient scrim preserving optical highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#10208C]/65 via-[#1F3AE0]/45 to-[#0D164F]/70"
      />

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-14 md:px-14 md:py-20">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/25 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
          {badge}
        </span>
        <h2 className="font-display md:text-3xl lg:text-4xl leading-tight text-2xl font-bold text-white tracking-tight mb-4 max-w-2xl">
          {title}
        </h2>
        <p className="text-white/90 mb-8 max-w-xl text-sm md:text-base leading-relaxed">
          {body}
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <Link
            href={primary.href}
            className="group inline-flex items-center gap-2.5 bg-[#FF8800] hover:bg-[#E67600] transition-all hover:-translate-y-0.5 text-white text-sm font-bold rounded-md px-6 py-3.5 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.4)]"
          >
            <span>{primary.label}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="group inline-flex items-center gap-2 border border-white/45 hover:border-white bg-white/10 hover:bg-white/18 backdrop-blur-sm transition-all text-white text-sm font-semibold rounded-md px-6 py-3.5"
            >
              <span>{secondary.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}
