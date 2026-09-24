import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Building, Users, Briefcase, Clock, Code2, CheckCircle2, XCircle } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/nextjs-development/agency-indonesia'
const pageTitle = 'Next.js agency Indonesia: spesialis solo'
const pageDescription =
  'Cari Next.js agency di Indonesia? Saya spesialis Next.js solo, 13+ tahun pengalaman. Satu kontak dari scope sampai online. Kirim brief proyek kamu.'

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
  'Kamu capek brief dioper dari sales ke project manager lalu ke developer junior',
  'Perusahaan kamu butuh website atau dashboard yang dikerjakan orang berpengalaman',
  'Tim internal butuh developer senior untuk proyek Next.js yang sudah berjalan',
  'Agensi kamu butuh developer Next.js untuk proyek klien',
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
    question: 'Kamu kerja sendiri. Bagaimana kalau proyeknya besar?',
    answer:
      'Saya tetap jadi lead developer. Untuk desain atau QA tambahan, saya kolaborasi dengan partner tepercaya. Kalau proyeknya butuh tim besar sejak awal, saya bilang terus terang supaya kamu bisa cari agensi yang pas.',
  },
  {
    question: 'Berapa lama proyek Next.js biasanya selesai?',
    answer:
      'Tergantung scope. Perkiraan waktu dan milestone saya tulis di scope sebelum kamu setuju. Website perusahaan beberapa halaman selesai lebih cepat daripada dashboard dengan banyak peran pengguna.',
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
    name: 'Next.js agency Indonesia: spesialis solo',
    description: pageDescription,
    serviceType: 'Next.js Web Development',
    areaServed: 'Indonesia',
    offers: services.map((name) => ({ name })),
  },
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function AgencyIndonesiaPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Layanan</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/nextjs-development" className="hover:text-orange-500 transition-colors">Next.js Development</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Agensi Indonesia</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Building className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Spesialis Next.js solo</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[3.5rem] text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Next.js agency
          <span className="block gradient-text font-light">Indonesia</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Untuk perusahaan dan agensi yang butuh website atau aplikasi Next.js tanpa lapisan account
          manager. Kamu bicara langsung dengan orang yang menulis kodenya: saya, 13+ tahun di web
          development dan co-founder Raja Kreatif Asia.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('nextjs')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Kirim brief proyek kamu</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Kenalan dulu dengan saya</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Agensi Next.js atau spesialis solo?
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Kalau kamu mencari Next.js agency di Indonesia, di sini kamu bekerja dengan satu spesialis.
          Saya Aris, developer Next.js di Sidoarjo yang independen sejak 2015. Saya memegang proyek dari
          scope, kode, sampai online di Vercel. Untuk kebutuhan desain atau QA tambahan, saya
          kolaborasi dengan partner tepercaya dan tetap jadi lead developer.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cocok atau <span className="gradient-text">kurang cocok?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Saya lebih suka jujur di awal daripada menyesal di tengah proyek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Cocok kalau</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Kurang cocok kalau</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <XCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Yang kamu dapat</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Kerja dengan <span className="gradient-text">Next.js agency</span> satu orang
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services list */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Pekerjaan yang <span className="gradient-text">saya pegang</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
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

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cara <span className="gradient-text">kerja saya</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="agency-id-faq">
        <h2 id="agency-id-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Pertanyaan sebelum memilih agensi Next.js
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

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Kirim brief, saya balas dengan scope
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Ceritakan tujuan proyek, sistem yang sudah ada, dan target waktunya. Saya balas dengan
            pertanyaan atau gambaran scope. Kalau proyek ini lebih cocok untuk agensi besar, saya akan
            bilang.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('nextjs')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Kirim brief proyek kamu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/nextjs-development"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Versi bahasa Inggris</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
