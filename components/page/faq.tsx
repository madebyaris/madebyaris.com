import type { ReactNode } from 'react'

interface FaqProps {
  id: string
  title: string
  faqs: ReadonlyArray<{ question: string; answer: ReactNode }>
}

export function Faq({ id, title, faqs }: FaqProps) {
  return (
    <section className="mb-16 max-w-3xl mx-auto" aria-labelledby={id}>
      <h2 id={id} className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm open:shadow-md">
            <summary className="cursor-pointer list-none font-semibold text-zinc-900 flex items-center justify-between gap-4">
              {faq.question}
              <span className="text-orange-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
