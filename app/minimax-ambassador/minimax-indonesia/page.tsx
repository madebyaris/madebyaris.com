import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen, Sparkles, CheckCircle, ExternalLink } from 'lucide-react'

export const revalidate = 86400

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "MiniMax Indonesia untuk Coding | MiniMax AI & M-2.1",
  "description": "Ringkasan MiniMax untuk coding di Indonesia: MiniMax M-2.1, MiniMax Coding Plan, use-case, dan cara memulai.",
  "url": "https://madebyaris.com/minimax-ambassador/minimax-indonesia"
}

export const metadata: Metadata = {
  title: 'MiniMax Indonesia untuk Coding | MiniMax AI & M-2.1',
  description:
    'Ringkasan MiniMax untuk coding di Indonesia: MiniMax M-2.1, MiniMax Coding Plan, use-case, dan cara memulai.',
  alternates: {
    canonical: 'https://madebyaris.com/minimax-ambassador/minimax-indonesia',
  },
  openGraph: {
    title: 'MiniMax Indonesia untuk Coding | MiniMax AI & M-2.1',
    description:
      'Ringkasan MiniMax untuk coding, MiniMax M-2.1, MiniMax Coding Plan, dan langkah awal integrasi API.',
    type: 'article',
    locale: 'id_ID',
  },
}

const whyPoints = [
  'Ngebantu developer ngerapihin workflow coding sehari-hari',
  'Bisa dipakai buat ideasi, debugging, refactor, dan dokumentasi',
  'Cocok buat prototipe cepat tanpa bikin proses ribet',
  'Mudah diintegrasikan lewat MiniMax API'
]

const useCases = [
  'Asisten coding untuk scaffolding dan contoh implementasi',
  'Peringkas commit/PR dan dokumentasi teknis',
  'Checklist test case dan edge-case',
  'Bantu breakdown requirement jadi task yang rapi'
]

const faqItems = [
  {
    question: 'Apa itu MiniMax AI untuk coding?',
    answer:
      'MiniMax AI bisa kamu pakai untuk bantu kerja harian developer: dari ideasi sampai review dan dokumentasi.'
  },
  {
    question: 'Apa itu MiniMax M-2.1?',
    answer:
      'MiniMax M-2.1 adalah salah satu model MiniMax. Di halaman ini saya fokus ke gambaran dan use-case, bukan detail spek.'
  },
  {
    question: 'Apa itu MiniMax Coding Plan?',
    answer:
      'Coding Plan adalah paket/tools yang bantu workflow coding di IDE dengan fitur seperti web search dan image analysis.'
  },
  {
    question: 'Bagaimana cara mulai menggunakan MiniMax API?',
    answer:
      'Mulai dari use-case paling penting, rancang prompt, lalu integrasikan API sesuai kebutuhan produk.'
  },
  {
    question: 'Ada contoh rules atau workflow yang bisa diikuti?',
    answer:
      'Ada. Aku share rules dan workflow di repo GitHub agar bisa dipakai langsung atau jadi referensi.'
  }
]

export default function MiniMaxIndonesiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li>
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <span className="px-2">/</span>
          </li>
          <li>
            <Link href="/minimax-ambassador" className="hover:text-orange-500 transition-colors">
              MiniMax
            </Link>
          </li>
          <li>
            <span className="px-2">/</span>
          </li>
          <li className="text-zinc-900">MiniMax Indonesia</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">MiniMax AI untuk Coding</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          MiniMax
          <span className="block gradient-text-minimax font-light">Model yang cocok untuk developer Indonesia</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Halaman ini Saya buat untuk developer Indonesia yang ingin ngerti MiniMax dengan cara yang simpel:
          apa itu MiniMax M-2.1, gimana MiniMax Coding Plan dipakai, dan langkah awal supaya kamu bisa coba sendiri.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Mulai Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/minimax-ambassador"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">MiniMax Expert</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Why MiniMax */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Kenapa MiniMax AI</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            MiniMax AI untuk workflow <span className="gradient-text">coding</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-2xl mx-auto">
            Fokus ke manfaat praktis buat developer Indonesia, tanpa jargon berlebihan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyPoints.map((point) => (
            <div key={point} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <p className="text-sm text-zinc-700 font-medium">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* M-2.1 Overview */}
      <section className="mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight mb-4">
            Gambaran MiniMax M-2.1
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            MiniMax M-2.1 adalah salah satu model MiniMax yang bisa dipakai buat kebutuhan AI product dan coding assistant.
            Di sini saya fokus ke gambaran umum dan use-case praktis—bukan spesifikasi teknis yang detail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl">
                <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* MiniMax Coding Plan */}
      <section className="mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight mb-4">
            MiniMax Coding Plan (MCP)
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            Coding Plan itu paket + tools yang bikin workflow di IDE lebih nyaman. Contohnya integrasi web search
            dan image analysis langsung dari editor, jadi kamu nggak perlu bolak-balik buka browser.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Aktifkan akses', desc: 'Pakai API key dan host yang sesuai region.' },
              { title: 'Connect ke IDE', desc: 'Hubungkan ke Cursor/IDE pilihan kamu.' },
              { title: 'Gunakan tools', desc: 'Search, analisis gambar, dan workflow coding harian.' },
            ].map((step) => (
              <div key={step.title} className="bg-zinc-50 rounded-xl p-4">
                <h3 className="font-semibold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://platform.minimax.io/docs/api-reference/text-ai-coding-refer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-orange-500 transition-colors"
            >
              Dokumentasi MiniMax Coding
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://mcp.aibase.com/server/1568219637458673776"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-orange-500 transition-colors"
            >
              MiniMax Coding Plan MCP
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Getting started */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Mulai dengan MiniMax API
          </h2>
          <p className="text-sm text-zinc-500 max-w-2xl mx-auto">
            Susun kebutuhan, rancang prompt, lalu integrasikan API sesuai alur produk Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Tentukan use-case', desc: 'Prioritaskan flow coding yang paling butuh asistensi AI.' },
            { title: 'Rancang prompt', desc: 'Buat template prompt, guardrail, dan evaluasi output.' },
            { title: 'Integrasi API', desc: 'Hubungkan MiniMax API ke produk secara aman.' },
          ].map((step) => (
            <div key={step.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
              <h3 className="font-semibold text-zinc-900 mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* FAQ */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            FAQ MiniMax Indonesia
          </h2>
          <p className="text-sm text-zinc-500">Pertanyaan umum seputar MiniMax AI, model, dan API.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.question}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Resources */}
      <section className="mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight mb-4">
            Resources yang bisa langsung dipakai
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            Kalau mau lihat contoh rules dan workflow, saya taruh di repo berikut supaya bisa kamu clone dan pakai.
          </p>
          <a
            href="https://github.com/madebyaris/advance-minimax-m2-cursor-rules"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Advance MiniMax M2 Cursor Rules</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="overflow-hidden min-h-[320px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 min-h-[320px] relative">
          <h2 className="md:text-3xl lg:text-4xl leading-tight text-2xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Siap membangun fitur AI dengan MiniMax?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Saya bisa bantu perencanaan, integrasi, dan validasi use-case agar AI-nya benar-benar berguna.
          </p>

          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Contact me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
