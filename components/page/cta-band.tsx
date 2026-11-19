import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface CtaLink {
  href: string
  label: string
}

interface CtaBandProps {
  title: string
  body: string
  primary: CtaLink
  secondary?: CtaLink
}

export function CtaBand({ title, body, primary, secondary }: CtaBandProps) {
  return (
    <section className="blueprint-surface overflow-hidden rounded-2xl border border-[#232732] relative mb-8">
      <div className="flex flex-col items-center justify-center text-center px-6 py-12 md:px-14 md:py-16 relative">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#E8714A] mb-4">
          Direct engineering inquiry · 24h reply
        </span>
        <h2 className="font-display md:text-3xl lg:text-4xl leading-tight text-2xl font-medium text-white tracking-tight mb-4 max-w-2xl">
          {title}
        </h2>
        <p className="text-zinc-400 mb-8 max-w-xl text-sm md:text-base leading-relaxed">{body}</p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={primary.href}
            className="group inline-flex items-center gap-2.5 bg-[#FAF9F6] hover:bg-[#D9481E] transition-colors text-[#0B0C0E] hover:text-white text-sm font-medium rounded-full px-6 py-3"
          >
            <span>{primary.label}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="group inline-flex items-center gap-2 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>{secondary.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
