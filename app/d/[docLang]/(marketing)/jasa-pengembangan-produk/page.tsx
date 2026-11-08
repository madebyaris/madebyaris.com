import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  Cpu,
  Layers,
  Rocket,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/jasa-pengembangan-produk'
const pageTitle = 'Jasa pengembangan produk: SaaS, mobile, Rust, AI'
const pageDescription =
  'Saya memimpin pembuatan SaaS, aplikasi mobile, software Rust, commerce, aplikasi go-to-market, dan fitur AI, dibantu agen AI dan partner. Mulai USD 5.000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/saas.jpg',
  locale: 'id_ID',
  keywords: [
    'jasa pengembangan produk digital',
    'jasa pembuatan aplikasi mobile',
    'jasa pengembangan aplikasi SaaS',
    'jasa pengembangan software Rust',
    'jasa pembuatan aplikasi untuk perusahaan',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const ITECHPOST_URL =
  'https://www.itechpost.com/articles/237732/20261105/x-updates-its-web-app-deliver-faster-website-performance-smoother-experience.htm'

const builds = [
  {
    icon: Layers,
    title: 'SaaS',
    body: 'SaaS yang dibangun supaya biaya jalannya kecil, dengan perkiraan tagihan bulanan tertulis di rencana.',
    href: '/services/saas-development/jasa-pembuatan-aplikasi-web',
    cta: 'Lihat jasa aplikasi web',
  },
  {
    icon: Smartphone,
    title: 'Aplikasi mobile',
    body: 'Aplikasi mobile untuk produk kamu, dibangun dan dirilis oleh tim yang sama dengan yang membangun bagian lainnya.',
  },
  {
    icon: Cpu,
    title: 'Software Rust',
    body: 'Software command-line dan desktop yang cepat, serta back end yang butuh kecepatan dan pemakaian memori hemat. Contoh publik: nca dan Chaca Scanner.',
    href: '#open-source',
    cta: 'Baca kodenya',
  },
  {
    icon: Target,
    title: 'Aplikasi go-to-market',
    body: 'Aplikasi untuk tim go-to-market: alat yang membantu sales dan marketing menemukan, menyaring, dan menjangkau pelanggan.',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce',
    body: 'Toko online dan platform commerce, dengan pembayaran dan checkout yang diuji sebelum rilis.',
    href: '/services/wordpress/jasa-woocommerce',
    cta: 'Lihat jasa WooCommerce',
  },
  {
    icon: Sparkles,
    title: 'AI di dalam produk',
    body: 'Asisten, agent, dan fitur LLM yang berjalan di produk kamu, dengan test case, logging, dan batas biaya.',
    href: '/jasa-implementasi-ai',
    cta: 'Lihat implementasi AI',
  },
]

const speedPoints = [
  {
    title: 'Agen AI mengerjakan banyak bagian pembangunan',
    body: 'Agen menulis dan menguji sebagian besar kode, jadi versi pertama yang berjalan sampai ke kamu lebih awal.',
  },
  {
    title: 'Saya memimpin dan memegang arsitektur',
    body: 'Satu orang memutuskan software, stack, jaringan, dan hosting, supaya semua bagian saling cocok.',
  },
  {
    title: 'Partner tepercaya saat dibutuhkan',
    body: 'Saat proyek butuh lebih banyak tangan, partner yang saya percaya bergabung, dan saya memberi tahu kamu sebelum mulai.',
  },
  {
    title: 'Repo kamu, kode kamu',
    body: 'Hasil kerja masuk ke repositori kamu. Sesuai ketentuan saya, hasil kerja menjadi milik kamu setelah pembayaran lunas.',
  },
]

const stack = ['React', 'Vite', 'Fastify', 'TypeScript', 'Rust', 'Next.js']

const specialties = [
  { href: '/services/jasa-optimasi-react', title: 'Optimasi aplikasi React', body: 'Muat lebih cepat, layar lebih lancar, dan kode yang lebih mudah diubah.' },
  { href: '/services/jasa-vite', title: 'Jasa Vite', body: 'Pindah ke Vite untuk build lebih cepat, atau mulai aplikasi baru di atasnya.' },
  { href: '/services/jasa-fastify', title: 'Jasa Fastify', body: 'API Node.js yang cepat dan tervalidasi, baru atau dipindah dari Express.' },
  { href: '/services/jasa-optimasi-database', title: 'Optimasi database', body: 'Query lambat ditemukan dan diperbaiki, supaya database sanggup mengikuti data yang bertambah.' },
  { href: '/services/jasa-clean-code', title: 'Clean code untuk tim dan AI', body: 'Struktur, aturan, dan pengecekan yang diikuti developer dan AI agent.' },
]

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya membangun produk?',
    answer:
      'Tergantung scope. Proyek mulai dari USD 5.000. Setelah konsultasi singkat, kamu menerima rencana tertulis dengan milestone dan penawaran harga sebelum ada kode yang ditulis.',
  },
  {
    question: 'Siapa yang mengerjakan?',
    answer:
      'Saya memimpin setiap proyek dan membalas pesan kamu sendiri. Agen AI mengerjakan banyak bagian pembangunan, dan partner tepercaya bergabung saat proyek butuh lebih banyak tangan. Saya memberi tahu kamu sebelum mulai.',
  },
  {
    question: 'Stack apa yang dipakai?',
    answer:
      'React, Vite, Fastify, dan TypeScript, yang juga dilaporkan dipakai web app baru x.com, ditambah Rust untuk bagian yang butuh kecepatan dan Next.js untuk situs yang butuh server rendering. Kalau proyek kamu butuh yang lain, ceritakan dan saya bilang apakah saya cocok.',
  },
  {
    question: 'Apakah bisa bekerja dengan perusahaan besar di Indonesia?',
    answer:
      'Bisa. Semua proyek saya berada di bawah NDA. Untuk perusahaan besar, lihat juga halaman implementasi AI untuk perusahaan. Saya tinggal di Sidoarjo dan bekerja Senin sampai Sabtu pukul 9.00 sampai 17.00 WIB, dalam Bahasa Indonesia atau Inggris.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Layanan', path: '/services' },
    { name: 'Pengembangan produk', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'Product engineering',
    areaServed: 'Indonesia',
  },
})

export default function JasaPengembanganProdukPage() {
  return (
    <div lang="id">
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Layanan</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Pengembangan produk</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Rocket className="w-4 h-4 text-orange-500" />, label: 'Pengembangan produk' }}
        title="Bangun produk kamu dengan cepat,"
        accent="bersama tim yang dibantu AI"
        actions={
          <>
            <Link
              href={contactHref('product')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Kirim ide produk kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/jasa-implementasi-ai"
              className="btn-secondary hover:bg-zinc-50 transition-all inline-flex text-sm font-medium text-black/60 rounded-full py-3 px-6 items-center"
            >
              Lihat implementasi AI
            </Link>
          </>
        }
      >
        <p>
          SaaS, aplikasi mobile, software Rust, commerce, dan aplikasi go-to-market. Saya memimpin setiap proyek dan kamu
          berbicara langsung dengan saya. Agen AI mengerjakan banyak bagian pembangunan dan partner tepercaya bergabung saat
          proyek butuh lebih banyak tangan, sehingga kami bisa bergerak cepat.
        </p>
      </PageHero>

      <section className="mb-16" aria-labelledby="yang-kami-bangun">
        <div className="text-center mb-10">
          <h2 id="yang-kami-bangun" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Yang kami bangun
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {builds.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="p-2 bg-zinc-100 rounded-lg inline-flex mb-3">
                <item.icon className="w-4 h-4 text-zinc-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-3">{item.body}</p>
              {item.href && item.cta && (
                <Link href={item.href} className={`${linkClass} text-sm`}>
                  {item.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="cara-cepat">
        <h2 id="cara-cepat" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-8">
          Cara kami bergerak cepat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {speedPoints.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="stack">
        <h2 id="stack" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
          Dibangun di atas stack yang dilaporkan x.com
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed mb-6">
          Stack inti kami sama dengan yang dilaporkan dipakai web app baru x.com: React, Vite, Fastify, dan TypeScript (laporan
          teknik X, diberitakan{' '}
          <a href={ITECHPOST_URL} className={linkClass} target="_blank" rel="noopener noreferrer">
            iTechPost
          </a>
          , 5 November 2026). Kami juga mengerjakan Rust dan Next.js.
        </p>
        <ul className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <li key={item} className="bg-zinc-50 rounded-full px-4 py-2 text-sm font-medium text-zinc-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16" aria-labelledby="spesialisasi">
        <div className="max-w-2xl mb-8">
          <h2 id="spesialisasi" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Pekerjaan spesialis, bisa dipesan sendiri
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Kamu tidak perlu membangun seluruh produk. Masing-masing ini adalah proyek tersendiri.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialties.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <OpenSourceProjects
        title="Open source yang bisa kamu baca"
        intro="Semua proyek klien saya berada di bawah NDA, jadi bukti publiknya adalah kode. Ini proyek yang saya pelihara."
        starsLabel="di GitHub"
      />

      <Faq id="pengembangan-produk-faq" title="Pertanyaan soal pengembangan produk" faqs={faqs} />

      <CtaBand
        title="Kirim ide produk kamu"
        body="Ceritakan apa yang ingin kamu bangun, siapa penggunanya, dan kapan kamu membutuhkannya. Saya balas dalam 24 jam dengan pertanyaan atau jawaban jujur apakah saya cocok."
        primary={{ href: contactHref('product'), label: 'Kirim ide produk kamu' }}
        secondary={{ href: '/product-engineering', label: 'English version' }}
      />
    </div>
  )
}
