import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  CheckCircle2,
  Clock,
  Code2,
  Users,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/nextjs-development/agency-indonesia'
const pageTitle = 'Next.js agency Indonesia: dipimpin langsung'
const pageDescription =
  'Cari Next.js agency di Indonesia? Proyek dipimpin langsung oleh saya, 13+ tahun pengalaman. Satu kontak dari scope sampai online. Kirim brief proyek kamu.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: [
    'Next.js agency Indonesia',
    'agensi Next.js',
    'Next.js agency',
    'agensi Next.js Indonesia',
    'website perusahaan Next.js',
  ],
})

const goodFit = [
  'Kamu lelah brief proyek terus dioper dari sales ke project manager lalu ke developer junior',
  'Perusahaan kamu butuh website atau dashboard yang dikerjakan langsung oleh engineer berpengalaman',
  'Tim internal butuh developer senior untuk proyek Next.js yang sudah berjalan',
  'Agensi kamu butuh partner developer Next.js untuk proyek klien',
]

const poorFit = [
  'Proyek butuh lima developer bekerja paralel sejak hari pertama',
  'Kamu mencari paket lengkap iklan, konten, dan media sosial',
  'Template siap pakai sudah cukup untuk kebutuhan kamu',
]

const outcomes = [
  {
    title: 'Satu kontak dari awal sampai akhir',
    description: 'Pesan kamu dibalas oleh orang yang menulis kodenya, jadi keputusan teknis tidak tersesat di tengah jalan.',
    icon: Users,
  },
  {
    title: 'Paham cara kerja agensi',
    description: 'Saya pernah bekerja di Hongkiat.com, ikut mendirikan Raja Kreatif Asia, dan jadi senior full-stack di SAB Digital Marketing Agency.',
    icon: Building,
  },
  {
    title: 'Scope dan milestone jelas',
    description: 'Kamu tahu apa yang dikerjakan, kapan bisa dicek, dan berapa harganya sebelum proyek mulai.',
    icon: Clock,
  },
  {
    title: 'Kode yang bisa dilanjutkan',
    description: 'Next.js App Router dan TypeScript di repository kamu, dengan catatan serah terima untuk tim berikutnya.',
    icon: Code2,
  },
]

const services = [
  'Website perusahaan',
  'Toko online dengan Next.js',
  'Modernisasi website lama',
  'Dashboard dan panel admin',
  'Pembuatan dan integrasi API',
  'Percepatan website yang lambat',
  'Migrasi dari WordPress ke Next.js',
  'Pemeliharaan dan dukungan teknis',
]

const processSteps = [
  { step: 1, title: 'Brief', desc: 'Kamu kirim tujuan, sistem yang ada, dan target waktu.' },
  { step: 2, title: 'Scope', desc: 'Saya balas dengan scope tertulis, milestone, dan harga.' },
  { step: 3, title: 'Pengerjaan', desc: 'Progres dicek lewat link preview di setiap milestone.' },
  { step: 4, title: 'Pengujian', desc: 'Dicek di berbagai perangkat dan browser, termasuk SEO dan kecepatan.' },
  { step: 5, title: 'Online', desc: 'Launch, redirect, Search Console, lalu dukungan lanjutan kalau perlu.' },
]

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya proyek Next.js dengan kamu?',
    answer:
      'Harga dihitung per proyek setelah saya membaca brief. Kamu dapat scope tertulis dan harga untuk scope itu sebelum pekerjaan dimulai, jadi angka yang kamu setujui tidak berubah diam-diam.',
  },
  {
    question: 'Bagaimana kalau proyeknya besar?',
    answer:
      'Saya tetap jadi lead developer. AI agent membantu mempercepat pengerjaan kode, dan untuk kebutuhan desain atau QA tambahan saya berkolaborasi dengan partner tepercaya. Kalau proyeknya butuh tim besar sejak awal, saya bilang terus terang supaya kamu bisa memilih agensi yang pas.',
  },
  {
    question: 'Berapa lama proyek Next.js biasanya selesai?',
    answer:
      'Tergantung scope. Perkiraan waktu dan milestone saya tulis di scope sebelum kamu setuju. Website perusahaan beberapa halaman selesai lebih cepat daripada dashboard dengan banyak role pengguna.',
  },
  {
    question: 'Apakah SEO website lama aman saat migrasi ke Next.js?',
    answer:
      'Aman kalau migrasinya direncanakan. Setiap URL lama saya pertahankan atau saya alihkan dengan redirect 301, judul dan deskripsi dibawa, sitemap dibuat ulang, lalu Search Console dipantau setelah launch.',
  },
  {
    question: 'Bisa bekerja bareng tim internal atau agensi lain?',
    answer:
      'Bisa. Saya bisa masuk ke repository yang sudah ada, ikut review kode, atau memegang bagian Next.js sementara tim kamu mengurus desain dan konten. Komunikasi dalam Bahasa Indonesia atau Inggris.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Layanan', path: '/services' },
    { name: 'Next.js Development', path: '/services/nextjs-development' },
    { name: 'Agensi Indonesia', path },
  ],
  service: {
    name: 'Next.js agency Indonesia: dipimpin langsung',
    description: pageDescription,
    serviceType: 'Next.js Web Development',
    areaServed: 'Indonesia',
    offers: services.map((name) => ({ name })),
  },
})

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'

export default function AgencyIndonesiaPage() {
  return (
    <div lang="id">
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#525660]">
          <li>
            <Link href="/services" className="hover:text-[#3A57FC] transition-colors">
              Layanan
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li>
            <Link href="/services/nextjs-development" className="hover:text-[#3A57FC] transition-colors">
              Next.js Development
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li className="text-[#0B0C0E] font-semibold">Agensi Indonesia</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Building className="w-3.5 h-3.5" />, label: 'Dipimpin langsung oleh Aris' }}
        title="Next.js agency"
        accent="Indonesia"
        actions={
          <>
            <Link
              href={contactHref('nextjs')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Kirim brief proyek kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>Kenalan dulu dengan saya</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          Untuk perusahaan dan agensi yang butuh website atau aplikasi Next.js tanpa lapisan account
          manager. Kamu bicara langsung dengan orang yang menulis kodenya: saya, 13+ tahun di web
          development dan co-founder Raja Kreatif Asia.
        </p>
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Model kerja</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Agensi Next.js atau engineer yang memimpin langsung?
        </h2>
        <p className="text-[#374151] leading-relaxed">
          Kalau kamu mencari Next.js agency di Indonesia, di sini kamu bekerja langsung dengan orang yang memimpin proyeknya.
          Saya Aris, developer Next.js di Sidoarjo yang independen sejak 2015. Saya memegang proyek dari
          scope, kode, sampai online di Vercel. AI agent membantu mempercepat pengerjaan teknis, dan
          untuk kebutuhan desain atau QA tambahan saya berkolaborasi dengan partner tepercaya. Saya tetap
          jadi lead developer.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="fit-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Kesesuaian</span>
          <h2 id="fit-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Cocok atau <span className="gradient-text">kurang cocok?</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Saya lebih memilih jujur sejak awal daripada proyek tersendat di tengah jalan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF]/70 p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Cocok kalau</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                  <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Kurang cocok kalau</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                  <XCircle className="w-5 h-5 text-[#64748B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="outcomes-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Yang kamu dapat</span>
          <h2 id="outcomes-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Kerja dengan <span className="gradient-text">Next.js agency</span> yang dipimpin langsung
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="services-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Cakupan proyek</span>
          <h2 id="services-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Pekerjaan yang <span className="gradient-text">saya pegang</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Untuk website bisnis kecil, lihat{' '}
            <Link href="/services/nextjs-development/nextjs-indonesia" className={linkClass}>
              jasa pembuatan website Next.js
            </Link>
            . Mau pindah dari WordPress? Baca{' '}
            <Link href="/blog/migrasi-wordpress-ke-nextjs-bisnis" className={linkClass}>
              panduan migrasi WordPress ke Next.js
            </Link>
            .
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0" />
                <span className="text-sm text-[#1F2937] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="process-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Alur proyek</span>
          <h2 id="process-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Cara <span className="gradient-text">kerja saya</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B0C0E] text-[#FFB866] font-mono text-xs font-bold mb-4">
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-1.5 text-sm">{item.title}</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq id="agency-id-faq" title="Pertanyaan sebelum memilih agensi Next.js" faqs={faqs} />

      <CtaBand
        badge="Diskusi langsung · Balas dalam 24 jam"
        title="Kirim brief, saya balas dengan scope"
        body="Ceritakan tujuan proyek, sistem yang sudah ada, dan target waktunya. Saya balas dengan pertanyaan lanjutan atau gambaran scope. Kalau proyek ini lebih cocok untuk agensi besar, saya akan bilang terus terang."
        primary={{ href: contactHref('nextjs'), label: 'Kirim brief proyek kamu' }}
        secondary={{ href: '/services/nextjs-development', label: 'Versi bahasa Inggris' }}
      />
    </div>
  )
}
