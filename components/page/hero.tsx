import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow?: { icon?: ReactNode; label: string }
  title: ReactNode
  accent?: ReactNode
  children?: ReactNode
  actions?: ReactNode
}

export function PageHero({ eyebrow, title, accent, children, actions }: PageHeroProps) {
  return (
    <section className="text-center pt-4 pb-16">
      {eyebrow && (
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          {eyebrow.icon}
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">{eyebrow.label}</span>
        </div>
      )}

      <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
        {title}
        {accent && (
          <>
            {' '}
            <span className="block gradient-text font-light">{accent}</span>
          </>
        )}
      </h1>

      {children && (
        <div className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          {children}
        </div>
      )}

      {actions && <div className="flex flex-wrap justify-center gap-3">{actions}</div>}
    </section>
  )
}
