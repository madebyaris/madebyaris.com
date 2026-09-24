import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Globe, Zap, Search, Settings, CheckCircle2, Code2, HelpCircle } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/nextjs-development/nextjs-indonesia'
const pageTitle = 'Jasa pembuatan website Next.js Indonesia'
const pageDescription =
  'Jasa pembuatan website Next.js dan jasa Next.js developer Indonesia, dikerjakan langsung developer 13+ tahun. Kirim kebutuhanmu, saya balas dengan scope.'

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
  { step: 1, title: 'Diskusi', desc: 'Kamu cerita tujuan website. Saya balas dengan pertanyaan dan scope tertulis.' },
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
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function NextjsIndonesiaPage() {
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
          <li className="text-zinc-900">Next.js Indonesia</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Globe className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Jasa Next.js developer Indonesia</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[3.5rem] text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Jasa pembuatan
          <span className="block gradient-text font-light">website Next.js</span>
          <span className="block">di Indonesia</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Untuk pemilik bisnis, agensi, dan tim marketing yang butuh website cepat dan gampang
          ditemukan di Google. Saya Aris, developer web 13+ tahun dan Cursor Ambassador pertama di
          Indonesia.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('nextjs')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Kirim kebutuhan website kamu</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/jasa-website-company-profile-nextjs-vs-template"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Next.js atau template?</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Apa yang kamu dapat dari jasa pembuatan website Next.js ini
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Satu developer senior mengerjakan website kamu dari awal sampai online. Saya menulis kodenya
          sendiri, memasang SEO teknis sejak awal, lalu menjalankan website di Vercel. Kalau kamu
          pindah dari WordPress, semua URL tetap sama atau dialihkan, supaya peringkat di Google ikut
          terbawa. Harga dihitung per proyek setelah saya tahu kebutuhannya.
        </p>
      </section>

      {/* Next.js adalah */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-semibold text-zinc-900">Next.js adalah apa?</h2>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            Next.js adalah framework React untuk membuat website dan aplikasi web. Halaman bisa
            disiapkan di server sebelum dikirim ke browser, jadi pengunjung langsung melihat isinya dan
            Google mudah membacanya. Website yang sedang kamu buka ini dibuat dengan Next.js, kontennya
            ditulis di WordPress, dan berjalan di Vercel.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Pain */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3 text-center">
          Kapan kamu butuh <span className="gradient-text">jasa Next.js</span>
        </h2>
        <p className="text-sm text-zinc-500 text-center mb-8">
          Biasanya orang menghubungi saya karena salah satu masalah ini.
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {pains.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-zinc-500 mt-4 text-center">
          Sedang menimbang pindah dari WordPress? Baca dulu{' '}
          <Link href="/blog/migrasi-wordpress-ke-nextjs-bisnis" className={linkClass}>
            panduan migrasi WordPress ke Next.js untuk bisnis
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Hasil yang <span className="gradient-text">kamu rasakan</span>
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
        <p className="text-sm text-zinc-500 mt-4 text-center">
          Detail soal SEO teknis ada di halaman{' '}
          <Link href="/services/nextjs-development/nextjs-seo" className={linkClass}>
            Next.js SEO services
          </Link>
          .
        </p>
      </section>

      {/* Services list */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Website yang <span className="gradient-text">bisa saya buatkan</span>
          </h2>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="nextjs-id-faq">
        <h2 id="nextjs-id-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Pertanyaan soal jasa pembuatan website Next.js
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
            Ceritakan website yang kamu butuhkan
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Kirim tujuan website, link website lama kalau ada, dan target waktunya. Saya balas dengan
            pertanyaan atau gambaran scope. Kalau Next.js kurang cocok untuk kebutuhan kamu, saya bilang
            terus terang.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('nextjs')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Kirim kebutuhan website kamu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/nextjs-development/agency-indonesia"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Untuk proyek perusahaan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
