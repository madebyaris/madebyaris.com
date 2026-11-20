import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Globe,
  HelpCircle,
  Search,
  Settings,
  Zap,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/nextjs-development/nextjs-indonesia'
const pageTitle = 'Jasa pembuatan website Next.js Indonesia'
const pageDescription =
  'Jasa pembuatan website Next.js dan developer Next.js Indonesia, dikerjakan langsung engineer 13+ tahun. Kirim kebutuhan kamu, saya balas dengan scope.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: [
    'jasa pembuatan website Next.js',
    'jasa Next.js',
    'jasa Next.js developer Indonesia',
    'Next.js adalah',
    'jasa pembuatan website Indonesia',
    'migrasi WordPress ke Next.js',
  ],
})

const pains = [
  'Website lama lambat dibuka di HP, pengunjung keburu pergi',
  'Developer sebelumnya susah dihubungi saat proyek baru setengah jalan',
  'Mau pindah dari WordPress, tapi takut trafik Google turun',
  'Setiap ganti teks atau foto harus menunggu developer',
]

const outcomes = [
  {
    title: 'Cepat dibuka di HP',
    description: 'Halaman disiapkan di server dan disimpan di cache, jadi pengunjung tidak lama menunggu walau sinyal pas-pasan.',
    icon: Zap,
  },
  {
    title: 'Mudah ditemukan di Google',
    description: 'Judul, deskripsi, sitemap, dan schema dipasang sejak awal, sebelum website online.',
    icon: Search,
  },
  {
    title: 'Konten bisa diubah sendiri',
    description: 'Tim kamu update teks, foto, dan artikel lewat panel admin yang simpel, tanpa perlu bantuan developer.',
    icon: Settings,
  },
  {
    title: 'Kode jadi milik kamu',
    description: 'Kode disimpan di repository kamu, lengkap dengan catatan serah terima, jadi developer lain bisa melanjutkan.',
    icon: Code2,
  },
]

const services = [
  'Website bisnis dan company profile',
  'Website portofolio',
  'Toko online',
  'Landing page untuk iklan atau kampanye',
  'Blog dan website konten',
  'Aplikasi web dengan login dan dashboard',
  'Migrasi dari WordPress atau platform lain ke Next.js',
]

const processSteps = [
  { step: 1, title: 'Diskusi', desc: 'Kamu ceritakan tujuan website. Saya balas dengan pertanyaan lanjutan dan scope tertulis.' },
  { step: 2, title: 'Desain', desc: 'Tampilan disusun sesuai brand kamu dan disetujui sebelum coding.' },
  { step: 3, title: 'Pengerjaan', desc: 'Progres bisa kamu cek lewat link preview selama pengerjaan.' },
  { step: 4, title: 'Pengujian', desc: 'Dicek di HP, tablet, dan desktop, termasuk kecepatan dan SEO.' },
  { step: 5, title: 'Online', desc: 'Domain, redirect, dan Search Console dipasang. Dukungan lanjutan bisa diatur.' },
]

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya jasa pembuatan website Next.js?',
    answer:
      'Harga dihitung per proyek, tergantung jumlah halaman, fitur, dan ada tidaknya migrasi. Kirim kebutuhan kamu, lalu saya balas dengan scope tertulis dan harga untuk scope itu. Kalau ternyata template biasa sudah cukup, saya akan bilang.',
  },
  {
    question: 'Berapa lama pengerjaannya?',
    answer:
      'Tergantung scope. Perkiraan waktu saya tulis di scope sebelum kamu setuju, jadi kamu tahu dari awal. Company profile sederhana tentu lebih cepat selesai daripada aplikasi dengan login dan pembayaran.',
  },
  {
    question: 'Kalau pindah dari WordPress, SEO saya aman?',
    answer:
      'Aman kalau migrasinya direncanakan. Semua URL saya pertahankan atau saya alihkan dengan redirect 301, judul dan deskripsi ikut dibawa, sitemap dibuat ulang, lalu Search Console saya pantau setelah website online.',
  },
  {
    question: 'Saya kerja dengan tim atau langsung dengan kamu?',
    answer:
      'Langsung dengan saya. Saya yang menulis kodenya dan saya juga yang membalas pesan kamu, jadi tidak ada informasi yang hilang di tengah jalan.',
  },
  {
    question: 'Bisa diskusi dalam Bahasa Indonesia?',
    answer:
      'Bisa. Saya tinggal di Sidoarjo, Jawa Timur, dan kerja remote dengan klien di seluruh Indonesia dan luar negeri. Diskusi bisa dalam Bahasa Indonesia atau Inggris, lewat tulisan atau call.',
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
    { name: 'Next.js Indonesia', path },
  ],
  service: {
    name: 'Jasa pembuatan website Next.js Indonesia',
    description: pageDescription,
    serviceType: 'Next.js Web Development',
    areaServed: 'Indonesia',
    offers: services.map((name) => ({ name })),
  },
})

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'

export default function NextjsIndonesiaPage() {
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
          <li className="text-[#0B0C0E] font-semibold">Next.js Indonesia</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Globe className="w-3.5 h-3.5" />, label: 'Jasa Next.js developer Indonesia' }}
        title="Jasa pembuatan website Next.js"
        accent="di Indonesia"
        actions={
          <>
            <Link
              href={contactHref('nextjs')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Kirim kebutuhan website kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/jasa-website-company-profile-nextjs-vs-template"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>Next.js atau template?</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          Untuk pemilik bisnis, agensi, dan tim marketing yang butuh website cepat dan gampang
          ditemukan di Google. Saya Aris, developer web 13+ tahun dan Cursor Ambassador pertama di
          Indonesia.
        </p>
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Ringkasan</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Apa yang kamu dapat dari jasa pembuatan website Next.js ini
        </h2>
        <p className="text-[#374151] leading-relaxed">
          Satu developer senior mengerjakan website kamu dari awal sampai online. Saya menulis kodenya
          sendiri, memasang SEO teknis sejak awal, lalu menjalankan website di Vercel. Kalau kamu
          pindah dari WordPress, semua URL tetap sama atau dialihkan, supaya peringkat di Google ikut
          terbawa. Harga dihitung per proyek setelah saya tahu kebutuhannya.
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-8 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
          <div className="flex items-center gap-2.5 mb-3">
            <HelpCircle className="w-5 h-5 text-[#FFB866]" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">Apa itu Next.js?</h2>
          </div>
          <p className="text-sm md:text-base text-white/85 leading-relaxed">
            Next.js adalah framework React untuk membuat website dan aplikasi web. Halaman bisa
            disiapkan di server sebelum dikirim ke browser, jadi pengunjung langsung melihat isinya dan
            Google mudah membacanya. Website yang sedang kamu buka ini dibuat dengan Next.js, kontennya
            ditulis di WordPress, dan berjalan di Vercel.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="section-index block mb-2">Kapan cocok</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Kapan kamu butuh <span className="gradient-text">jasa Next.js</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563]">
            Biasanya orang menghubungi saya karena salah satu masalah ini.
          </p>
        </div>
        <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF]/70 p-6 md:p-7">
          <ul className="space-y-3.5">
            {pains.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-[#4B5563] mt-5 text-center">
          Sedang menimbang pindah dari WordPress? Baca dulu{' '}
          <Link href="/blog/migrasi-wordpress-ke-nextjs-bisnis" className={linkClass}>
            panduan migrasi WordPress ke Next.js untuk bisnis
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="outcomes-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Hasil utama</span>
          <h2 id="outcomes-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Hasil yang <span className="gradient-text">kamu rasakan</span>
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
        <p className="text-sm text-[#4B5563] mt-6 text-center">
          Detail soal SEO teknis ada di halaman{' '}
          <Link href="/services/nextjs-development/nextjs-seo" className={linkClass}>
            layanan Next.js SEO (bahasa Inggris)
          </Link>
          .
        </p>
      </section>

      <section className="mb-16" aria-labelledby="services-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Jenis website</span>
          <h2 id="services-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Website yang <span className="gradient-text">bisa saya buatkan</span>
          </h2>
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
          <span className="section-index block mb-2">Alur kerja</span>
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

      <Faq id="nextjs-id-faq" title="Pertanyaan soal jasa pembuatan website Next.js" faqs={faqs} />

      <CtaBand
        badge="Diskusi langsung · Balas dalam 24 jam"
        title="Ceritakan website yang kamu butuhkan"
        body="Kirim tujuan website, link website lama kalau ada, dan target waktunya. Saya balas dengan pertanyaan lanjutan atau gambaran scope. Kalau Next.js kurang cocok untuk kebutuhan kamu, saya bilang terus terang."
        primary={{ href: contactHref('nextjs'), label: 'Kirim kebutuhan website kamu' }}
        secondary={{ href: '/services/nextjs-development/agency-indonesia', label: 'Untuk proyek perusahaan' }}
      />
    </div>
  )
}
