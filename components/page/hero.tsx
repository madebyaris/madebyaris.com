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
    <section className="text-center pt-4 pb-14 border-b border-[#E6E4DD] mb-14">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E4DD] bg-white px-3.5 py-1.5 mb-7">
          {eyebrow.icon}
          <span className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[#525660]">
            {eyebrow.label}
          </span>
        </div>
      )}

      <h1 className="font-display leading-[1.02] lg:text-[4rem] text-4xl font-semibold text-[#0B0C0E] tracking-[-0.03em] mb-6 max-w-4xl mx-auto">
        {title}
        {accent && (
          <>
            {' '}
            <span className="block gradient-text font-normal mt-1">{accent}</span>
          </>
        )}
      </h1>

      {children && (
        <div className="text-base md:text-lg text-[#525660] max-w-2xl mx-auto mb-9 leading-relaxed">
          {children}
        </div>
      )}

      {actions && <div className="flex flex-wrap justify-center gap-3">{actions}</div>}
    </section>
  )
}
