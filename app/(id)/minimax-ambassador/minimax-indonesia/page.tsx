import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen, Sparkles, CheckCircle, ExternalLink } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400

const pageTitle = 'MiniMax Indonesia: Panduan AI untuk Coding'
const pagePath = '/minimax-ambassador/minimax-indonesia'
const pageDescription =
  'Panduan MiniMax Indonesia untuk developer: apa itu MiniMax AI dan M-2.1, cara pakai MiniMax Coding Plan di IDE, dan langkah awal dengan MiniMax API.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  locale: 'id_ID',
  keywords: ['MiniMax Indonesia', 'MiniMax AI', 'MiniMax coding plan', 'MiniMax M-2.1', 'MiniMax API'],
})

const whyPoints = [
  'Merapikan workflow coding harian, dari task kecil sampai refactor',
  'Bisa dipakai untuk ideasi, debugging, refactor, dan dokumentasi',
  'Cocok untuk prototipe cepat tanpa setup yang ribet',
  'Bisa diintegrasikan ke produk kamu lewat MiniMax API',
]

const useCases = [
  'Asisten coding untuk scaffolding dan contoh implementasi',
  'Meringkas commit, PR, dan dokumentasi teknis',
  'Menyusun checklist test case dan edge case',
  'Memecah requirement jadi task yang rapi',
]

const faqItems: FaqItem[] = [
  {
    question: 'Apa itu MiniMax AI untuk coding?',
    answer:
      'MiniMax AI adalah model dari MiniMax yang bisa membantu kerja harian developer: ideasi, scaffolding, debugging, review, sampai dokumentasi. Kamu bisa memakainya lewat MiniMax API di produkmu sendiri, atau lewat MiniMax Coding Plan yang tersambung ke IDE.',
  },
  {
    question: 'Apa itu MiniMax M-2.1?',
    answer:
      'MiniMax M-2.1 adalah salah satu model MiniMax untuk fitur AI di produk dan asisten coding. Halaman ini membahas use-case praktisnya. Spesifikasi teknis lengkap ada di dokumentasi resmi MiniMax.',
  },
  {
    question: 'Apa itu MiniMax Coding Plan?',
    answer:
      'Coding Plan adalah paket dan tools untuk workflow coding di IDE, dengan fitur seperti web search dan image analysis. Kamu aktifkan dengan API key, lalu sambungkan ke Cursor atau IDE pilihanmu.',
  },
  {
    question: 'Bagaimana cara mulai menggunakan MiniMax API?',
    answer:
      'Pilih satu use-case yang paling penting, buat template prompt dan cara menilai output-nya, lalu integrasikan API ke produk dengan API key yang disimpan aman di server.',
  },
  {
    question: 'Ada contoh rules atau workflow yang bisa diikuti?',
    answer:
      'Ada. Saya membagikan rules dan workflow MiniMax M2 untuk Cursor di repo GitHub advance-minimax-m2-cursor-rules. Kamu bisa clone dan pakai langsung, atau jadikan referensi.',
  },
  {
    question: 'Bisa bantu integrasi MiniMax ke produk saya?',
    answer:
      'Bisa. Ceritakan fitur yang kamu mau dan di mana produkmu berjalan. Saya bantu rencanakan, integrasikan, dan uji use-case-nya, dan saya akan bilang terus terang kalau AI kurang cocok untuk masalah itu.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'MiniMax', path: '/minimax-ambassador' },
    { name: 'MiniMax Indonesia', path: pagePath },
  ],
  faqs: faqItems,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function MiniMaxIndonesiaPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
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
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">MiniMax AI untuk coding</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          MiniMax Indonesia
          <span className="block gradient-text-minimax font-light">panduan coding untuk developer</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          Untuk developer Indonesia yang ingin mencoba MiniMax tanpa menebak-nebak. Saya rangkum apa itu MiniMax M-2.1, cara pakai MiniMax Coding Plan, dan langkah awal supaya kamu bisa mencobanya sendiri.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Saya Aris Setiawan,{' '}
          <Link href="/minimax-ambassador" className={linkClass}>MiniMax Dev Community Expert</Link>
          {' '}dan Cursor Ambassador pertama di Indonesia, dengan pengalaman 13+ tahun membangun produk web.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('ai')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Diskusikan fitur AI kamu</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href="https://github.com/madebyaris/advance-minimax-m2-cursor-rules"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Ambil rules MiniMax gratis</span>
            <ExternalLink className="w-4 h-4 text-zinc-500" />
          </a>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          {faqItems[0].question}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">{faqItems[0].answer}</p>
        <p className="text-zinc-600 leading-relaxed">
          Di halaman ini saya fokus ke use-case praktis. Untuk spesifikasi model, cek dokumentasi resmi MiniMax yang saya tautkan di bagian Coding Plan.
        </p>
      </section>

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
            Manfaat praktis yang langsung terasa di kerja harian developer.
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
            MiniMax M-2.1 adalah salah satu model MiniMax yang bisa dipakai untuk fitur AI di produk dan sebagai asisten coding. Ini empat pekerjaan yang paling cocok untuk dicoba duluan.
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
            MiniMax Coding Plan dan MCP
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            Coding Plan adalah paket dan tools yang membuat workflow di IDE lebih nyaman. Contohnya web search dan image analysis langsung dari editor, jadi kamu tidak perlu bolak-balik buka browser.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Aktifkan akses', desc: 'Pakai API key dan host yang sesuai region kamu.' },
              { title: 'Sambungkan ke IDE', desc: 'Hubungkan ke Cursor atau IDE pilihan kamu.' },
              { title: 'Pakai tools-nya', desc: 'Search, analisis gambar, dan workflow coding harian.' },
            ].map((step) => (
              <div key={step.title} className="bg-zinc-50 rounded-xl p-4">
                <h3 className="font-semibold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            Belum pernah pakai Cursor? Baca dulu{' '}
            <Link href="/blog/cara-menggunakan-cursor-ai" className={linkClass}>cara menggunakan Cursor AI</Link>.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
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
            Tiga langkah awal sebelum fitur AI masuk ke produksi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Tentukan use-case', desc: 'Pilih satu alur yang paling butuh bantuan AI, lalu mulai dari situ.' },
            { title: 'Rancang prompt', desc: 'Buat template prompt, batasan, dan cara menilai output-nya.' },
            { title: 'Integrasikan API', desc: 'Panggil MiniMax API dari server, dengan API key yang tidak bocor ke browser.' },
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="minimax-indonesia-faq">
        <h2 id="minimax-indonesia-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
          FAQ MiniMax Indonesia
        </h2>
        <p className="text-sm text-zinc-500 mb-6">Pertanyaan umum soal MiniMax AI, model, dan API.</p>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.question} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm open:shadow-md">
              <summary className="cursor-pointer list-none font-semibold text-zinc-900 flex items-center justify-between gap-4">
                {item.question}
                <span className="text-orange-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight mb-4">
            Rules yang bisa langsung kamu pakai
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            Contoh rules dan workflow MiniMax M2 untuk Cursor ada di repo ini. Clone, sesuaikan dengan project kamu, lalu pakai.
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
            Mau membangun fitur AI dengan MiniMax?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Ceritakan use-case kamu. Saya balas dengan rencana integrasi dan hal yang perlu diuji dulu, sebelum kamu memutuskan apa pun.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('ai')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Diskusikan fitur AI kamu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/minimax-ambassador"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Tentang peran saya di MiniMax</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
