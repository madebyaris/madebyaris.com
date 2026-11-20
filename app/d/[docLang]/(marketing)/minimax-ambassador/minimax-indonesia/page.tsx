import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen, Sparkles, CheckCircle, ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
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
      'MiniMax AI adalah model dari MiniMax yang membantu kerja harian developer: mulai dari ideasi, scaffolding, debugging, review, sampai dokumentasi. Kamu bisa memakainya lewat MiniMax API di produk kamu sendiri, atau lewat MiniMax Coding Plan yang tersambung ke IDE.',
  },
  {
    question: 'Apa itu MiniMax M-2.1?',
    answer:
      'MiniMax M-2.1 adalah salah satu model MiniMax untuk fitur AI di produk dan asisten coding. Halaman ini membahas use-case praktisnya. Spesifikasi teknis lengkap ada di dokumentasi resmi MiniMax.',
  },
  {
    question: 'Apa itu MiniMax Coding Plan?',
    answer:
      'Coding Plan adalah paket dan tools untuk workflow coding di IDE, dengan fitur seperti web search dan image analysis. Kamu aktifkan dengan API key, lalu sambungkan ke Cursor atau IDE pilihan kamu.',
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
      'Bisa. Ceritakan fitur yang kamu butuhkan dan stack produk kamu saat ini. Saya bantu rencanakan, integrasikan, dan uji use-case-nya, dan saya akan bilang terus terang kalau AI kurang cocok untuk masalah itu.',
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
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function MiniMaxIndonesiaPage() {
  return (
    <div lang="id">
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li>
            <Link href="/" className="hover:text-[#3A57FC] transition-colors">
              Beranda
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li>
            <Link href="/minimax-ambassador" className="hover:text-[#3A57FC] transition-colors">
              MiniMax
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">MiniMax Indonesia</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Sparkles className="w-3.5 h-3.5" />, label: 'MiniMax AI untuk coding' }}
        title="MiniMax Indonesia"
        accent="panduan coding untuk developer"
        actions={
          <>
            <Link
              href={contactHref('ai')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Diskusikan fitur AI kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="https://github.com/madebyaris/advance-minimax-m2-cursor-rules"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>Ambil rules MiniMax gratis</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          Untuk developer Indonesia yang ingin mencoba MiniMax tanpa menebak-nebak. Saya rangkum apa itu MiniMax M-2.1, cara pakai MiniMax Coding Plan, dan langkah awal supaya kamu bisa mencobanya sendiri.
        </p>
        <p className="text-sm text-white/80">
          Saya Aris Setiawan,{' '}
          <Link
            href="/minimax-ambassador"
            className="text-white underline decoration-white/60 underline-offset-4 hover:decoration-white transition-colors"
          >
            MiniMax Dev Community Expert
          </Link>
          {' '}dan Cursor Ambassador pertama di Indonesia, dengan pengalaman 13+ tahun membangun produk web.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          {faqItems[0].question}
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">{faqItems[0].answer}</p>
        <p className="text-[#4B5563] leading-relaxed">
          Di halaman ini saya fokus ke use-case praktis. Untuk spesifikasi model, cek dokumentasi resmi MiniMax yang saya tautkan di bagian Coding Plan.
        </p>
      </section>

      {/* Why MiniMax */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#FE604A]/25 bg-[#FEF2F2] px-3 py-1 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#F6433D]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#DC0F12]">Kenapa MiniMax AI</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            MiniMax AI untuk workflow <span className="gradient-text-minimax">coding</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-2xl mx-auto">
            Manfaat praktis yang langsung terasa di kerja harian developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyPoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#3A57FC] mt-0.5 shrink-0" />
                <p className="text-sm text-[#0B0C0E] font-medium leading-relaxed">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* M-2.1 Overview */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-[#0B0C0E] tracking-tight mb-4">
            Gambaran MiniMax M-2.1
          </h2>
          <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
            MiniMax M-2.1 adalah salah satu model MiniMax yang bisa dipakai untuk fitur AI di produk dan sebagai asisten coding. Berikut empat skenario yang paling pas untuk dicoba lebih dulu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
                <ArrowRight className="w-4 h-4 text-[#3A57FC] mt-0.5 shrink-0" />
                <span className="text-sm text-[#0B0C0E] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* MiniMax Coding Plan */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-[#0B0C0E] tracking-tight mb-4">
            MiniMax Coding Plan dan MCP
          </h2>
          <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
            Coding Plan adalah paket dan tools yang membuat workflow di IDE lebih nyaman. Contohnya web search dan image analysis langsung dari editor, jadi kamu tidak perlu bolak-balik buka browser.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Aktifkan akses', desc: 'Pakai API key dan host yang sesuai region kamu.' },
              { title: 'Sambungkan ke IDE', desc: 'Hubungkan ke Cursor atau IDE pilihan kamu.' },
              { title: 'Pakai tools-nya', desc: 'Gunakan web search, analisis gambar, dan bantuan coding harian langsung di editor.' },
            ].map((step, index) => (
              <div key={step.title} className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-5">
                <span className="font-mono text-xs font-bold text-[#3A57FC] block mb-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-semibold text-[#0B0C0E] mb-1.5">{step.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#4B5563]">
            Belum pernah pakai Cursor? Baca dulu{' '}
            <Link href="/blog/cara-menggunakan-cursor-ai" className={linkClass}>cara menggunakan Cursor AI</Link>.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://platform.minimax.io/docs/api-reference/text-ai-coding-refer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] transition-colors"
            >
              Dokumentasi MiniMax Coding
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://mcp.aibase.com/server/1568219637458673776"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] transition-colors"
            >
              MiniMax Coding Plan MCP
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Getting started */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Mulai dengan MiniMax API
          </h2>
          <p className="text-sm text-[#4B5563] max-w-2xl mx-auto">
            Tiga langkah awal sebelum fitur AI masuk ke produksi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Tentukan use-case', desc: 'Pilih satu alur yang paling butuh bantuan AI, lalu mulai dari situ.' },
            { title: 'Rancang prompt', desc: 'Buat template prompt, batasan, dan cara menilai output-nya.' },
            { title: 'Integrasikan API', desc: 'Panggil MiniMax API dari server, dengan API key yang tidak bocor ke browser.' },
          ].map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] font-mono font-bold text-sm flex items-center justify-center mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-2">{step.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq
        id="minimax-indonesia-faq"
        title="FAQ MiniMax Indonesia"
        subtitle="Pertanyaan umum soal MiniMax AI, model, dan API."
        faqs={faqItems}
      />

      {/* Resources */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-[#0B0C0E] tracking-tight mb-2">
              Rules yang bisa langsung kamu pakai
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-2xl">
              Contoh rules dan workflow MiniMax M2 untuk Cursor ada di repo ini. Clone, sesuaikan dengan project kamu, lalu pakai.
            </p>
          </div>
          <a
            href="https://github.com/madebyaris/advance-minimax-m2-cursor-rules"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-semibold shrink-0"
          >
            <span>Advance MiniMax M2 Cursor Rules</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      <CtaBand
        badge="Diskusi langsung · Balas dalam 24 jam"
        title="Mau membangun fitur AI dengan MiniMax?"
        body="Ceritakan use-case kamu. Saya balas dengan rencana integrasi dan hal yang perlu diuji dulu, sebelum kamu memutuskan apa pun."
        primary={{ href: contactHref('ai'), label: 'Diskusikan fitur AI kamu' }}
        secondary={{ href: '/minimax-ambassador', label: 'Tentang peran saya di MiniMax' }}
      />
    </div>
  )
}
