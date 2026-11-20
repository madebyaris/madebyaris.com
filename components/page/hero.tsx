import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow?: { icon?: ReactNode; label: string }
  title: ReactNode
  accent?: ReactNode
  children?: ReactNode
  actions?: ReactNode
  variant?: 'card' | 'cobalt' | 'obsidian'
  breadcrumb?: ReactNode
  bottomStrip?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  accent,
  children,
  actions,
  variant = 'card',
  breadcrumb,
  bottomStrip,
}: PageHeroProps) {
  const isObsidian = variant === 'obsidian'
  const isRailBreakout = variant === 'card'

  return (
    <section
      className={`page-hero-band relative overflow-hidden text-white ${
        isObsidian ? 'bg-[#07080C]' : 'bg-[#3A57FC]'
      } ${
        isRailBreakout
          ? 'page-hero-breakout w-[100vw] left-1/2 -translate-x-1/2 mb-14 md:mb-16'
          : 'w-full'
      }`}
    >
      {isObsidian ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.22)_0%,transparent_70%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(58,87,252,0.32)_0%,transparent_70%)] blur-2xl"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.20)_0%,transparent_70%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,transparent_70%)] blur-2xl"
          />
        </>
      )}

      <div className="page-hero-inner relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-14 md:pb-20">
        {breadcrumb && <div className="mb-6">{breadcrumb}</div>}

        {eyebrow && (
          <div
            className={`inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 mb-6 ${
              isObsidian ? 'bg-[#3A57FC] text-white' : 'bg-[#0B0C0E] text-white'
            }`}
          >
            {eyebrow.icon && (
              <span className="[&_svg]:text-[#FFB866] [&_svg]:w-3.5 [&_svg]:h-3.5 flex items-center">
                {eyebrow.icon}
              </span>
            )}
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-white">
              {eyebrow.label}
            </span>
          </div>
        )}

        <h1 className="font-display leading-[1.03] text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white tracking-[-0.03em] mb-7 max-w-4xl">
          {title}
          {accent && (
            <>
              {' '}
              <span
                className={`block mt-1 ${
                  isObsidian ? 'text-[#93A8FF]' : 'text-white/85'
                }`}
              >
                {accent}
              </span>
            </>
          )}
        </h1>

        {(children || actions) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {children && (
              <div className="lg:col-span-7 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#FFB866] [&_strong]:text-white">
                {children}
              </div>
            )}
            {actions && (
              <div className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-3 [&_.btn-secondary]:bg-white/12! [&_.btn-secondary]:text-white! [&_.btn-secondary]:border-white/45! [&_.btn-secondary_span]:text-white! [&_.btn-secondary:hover]:bg-white/20! [&_.btn-secondary:hover]:border-white!">
                {actions}
              </div>
            )}
          </div>
        )}
      </div>

      {bottomStrip && (
        <div
          className={`relative z-10 border-t ${
            isObsidian
              ? 'border-white/10 bg-white/[0.03]'
              : 'border-white/15 bg-[#2944E0]/55'
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-4">
            {bottomStrip}
          </div>
        </div>
      )}
    </section>
  )
}
