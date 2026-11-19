import type { ReactNode } from 'react'

interface FaqProps {
  id: string
  title: string
  faqs: ReadonlyArray<{ question: string; answer: ReactNode }>
}

export function Faq({ id, title, faqs }: FaqProps) {
  return (
    <section className="mb-16 max-w-3xl mx-auto" aria-labelledby={id}>
      <div className="mb-6">
        <span className="section-index block mb-2">FAQ</span>
        <h2 id={id} className="font-display text-2xl md:text-3xl font-medium text-[#0B0C0E] tracking-tight">
          {title}
        </h2>
      </div>
      <div className="border border-[#E6E4DD] rounded-2xl bg-white divide-y divide-[#E6E4DD] overflow-hidden">
        {faqs.map((faq, index) => (
          <details key={faq.question} className="group p-5 md:p-6 open:bg-[#FAF9F6]/60 transition-colors">
            <summary className="cursor-pointer list-none font-medium text-[#0B0C0E] flex items-center justify-between gap-4">
              <span className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#70747D]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{faq.question}</span>
              </span>
              <span className="text-[#D9481E] transition-transform group-open:rotate-45 text-xl leading-none shrink-0">
                +
              </span>
            </summary>
            <p className="mt-3 pl-7 text-sm text-[#525660] leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
