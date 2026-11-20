import type { ReactNode } from 'react'

interface FaqProps {
  id: string
  title: string
  faqs: ReadonlyArray<{ question: string; answer: ReactNode }>
  className?: string
  layout?: 'stacked' | 'split'
  subtitle?: string
}

export function Faq({
  id,
  title,
  faqs,
  className = 'mb-16',
  layout = 'split',
  subtitle,
}: FaqProps) {
  const accordion = (
    <div className="border border-[#E5E7EB] rounded-2xl bg-white divide-y divide-[#E5E7EB] overflow-hidden shadow-xs">
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          className="group p-6 md:p-7 open:bg-[#F8FAFC] transition-colors"
        >
          <summary className="cursor-pointer list-none font-semibold text-[#0B0C0E] flex items-center justify-between gap-4">
            <span className="flex items-baseline gap-3">
              <span className="font-mono text-xs font-bold text-[#3A57FC]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{faq.question}</span>
            </span>
            <span className="text-[#3A57FC] transition-transform duration-200 group-open:rotate-45 text-xl leading-none shrink-0">
              +
            </span>
          </summary>
          <div className="mt-3 pl-7 text-sm text-[#4B5563] leading-relaxed">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  )

  if (layout === 'stacked') {
    return (
      <section className={`${className} max-w-3xl mx-auto`} aria-labelledby={id}>
        <div className="mb-8">
          <span className="section-index block mb-2">FAQ</span>
          <h2
            id={id}
            className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {accordion}
      </section>
    )
  }

  return (
    <section className={className} aria-labelledby={id}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <span className="section-index block mb-2">FAQ</span>
          <h2
            id={id}
            className="font-display text-2xl sm:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="lg:col-span-8">{accordion}</div>
      </div>
    </section>
  )
}
