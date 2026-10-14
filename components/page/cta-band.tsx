import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
    <section className="overflow-hidden shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="flex flex-col items-center justify-center text-center px-6 py-12 md:px-12 md:py-14 relative">
        <h2 className="md:text-3xl lg:text-4xl leading-tight text-2xl font-normal text-white tracking-tight mb-4 max-w-2xl">
          {title}
        </h2>
        <p className="text-zinc-400 mb-8 max-w-lg font-medium">{body}</p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={primary.href}
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>{primary.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
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
