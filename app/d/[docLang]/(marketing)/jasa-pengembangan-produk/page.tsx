import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
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
const pageTitle = 'Jasa Pembuatan Aplikasi Web, Mobile & AI'
const pageDescription =
  'Jasa pembuatan aplikasi web, mobile, SaaS, software Rust, dan fitur AI untuk bisnis Indonesia. Dipimpin langsung AI software engineer senior 13+ tahun.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/saas.jpg',
  locale: 'id_ID',
  keywords: [
    'jasa pembuatan aplikasi',
    'jasa pembuatan aplikasi web',
    'jasa pembuatan aplikasi mobile',
    'jasa pembuatan aplikasi AI',
    'jasa pengembangan produk digital',
    'jasa pengembangan aplikasi SaaS',
    'jasa pengembangan software Rust',
    'AI engineer Indonesia',
  ],
})

const ITECHPOST_URL =
  'https://www.itechpost.com/articles/237732/20261105/x-updates-its-web-app-deliver-faster-website-performance-smoother-experience.htm'

const builds = [
  {
    icon: Layers,
    title: 'SaaS',
    body: 'SaaS yang dirancang agar biaya operasionalnya tetap rendah, lengkap dengan estimasi tagihan bulanan tertulis sejak awal.',
    href: '/services/saas-development/jasa-pembuatan-aplikasi-web',
    cta: 'Lihat jasa aplikasi web',
  },
  {
    icon: Smartphone,
    title: 'Aplikasi mobile',
    body: 'Aplikasi mobile untuk produk kamu, dikerjakan dan dirilis oleh tim yang sama dengan pengembang web dan backend-nya.',
  },
  {
    icon: Cpu,
    title: 'Software Rust',
    body: 'Tool CLI, aplikasi desktop, dan backend performa tinggi dengan penggunaan memori yang hemat. Contoh publik: nca dan Chaca Scanner.',
    href: '#open-source',
    cta: 'Baca kodenya',
  },
  {
    icon: Target,
    title: 'Aplikasi go-to-market',
    body: 'Tool khusus untuk tim sales dan marketing: membantu mencari prospek, menyaring lead, dan menjangkau calon pelanggan.',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce',
    body: 'Toko online dan platform commerce, dengan alur pembayaran dan checkout yang diuji matang sebelum rilis.',
    href: '/services/wordpress/jasa-woocommerce',
    cta: 'Lihat jasa WooCommerce',
  },
  {
    icon: Sparkles,
    title: 'AI di dalam produk',
    body: 'Asisten, AI agent, dan fitur LLM yang berjalan di produk kamu, lengkap dengan test case, logging, dan batas biaya.',
    href: '/jasa-implementasi-ai',
    cta: 'Lihat implementasi AI',
  },
]

const speedPoints = [
  {
    title: 'AI agent mempercepat pengerjaan teknis',
    body: 'AI agent membantu menulis dan menguji sebagian besar kode, sehingga versi pertama yang bisa dicoba hadir lebih cepat.',
  },
  {
    title: 'Saya memimpin dan memegang arsitektur',
    body: 'Satu arsitek utama memegang keputusan software, stack, jaringan, dan hosting agar seluruh sistem menyatu rapi sejak awal.',
  },
  {
    title: 'Partner tepercaya saat dibutuhkan',
    body: 'Saat proyek membutuhkan kapasitas ekstra, engineer partner tepercaya ikut bergabung, dan saya selalu mengabari kamu sebelum pengerjaan dimulai.',
  },
  {
    title: 'Repo kamu, kode kamu',
    body: 'Semua kode langsung masuk ke repository kamu. Setelah pembayaran lunas, seluruh hak milik kode dan aset proyek sepenuhnya milik kamu.',
  },
]

const stack = ['React', 'Vite', 'Fastify', 'TypeScript', 'Rust', 'Next.js']

const specialties = [
  { href: '/services/jasa-optimasi-react', title: 'Optimasi aplikasi React', body: 'Loading lebih cepat, interaksi UI lebih mulus, dan struktur kode yang lebih mudah dirawat.' },
  { href: '/services/jasa-vite', title: 'Jasa Vite', body: 'Pindah ke Vite untuk build lebih cepat, atau bangun aplikasi baru di atasnya.' },
  { href: '/services/jasa-fastify', title: 'Jasa Fastify', body: 'API Node.js yang cepat dan tervalidasi, bangun dari nol atau migrasi dari Express.' },
  { href: '/services/jasa-optimasi-database', title: 'Optimasi database', body: 'Menemukan dan memperbaiki query lambat agar database tetap kencang seiring data terus tumbuh.' },
  { href: '/services/jasa-clean-code', title: 'Clean code untuk tim dan AI', body: 'Struktur, aturan, dan pengecekan otomatis yang diikuti developer maupun AI agent.' },
]

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya membangun produk?',
    answer:
      'Tergantung scope. Proyek mulai dari USD 5.000. Setelah konsultasi singkat, kamu akan menerima rencana kerja tertulis lengkap dengan milestone dan penawaran harga sebelum satu baris kode pun ditulis.',
  },
  {
    question: 'Siapa yang mengerjakan?',
    answer:
      'Saya memimpin setiap proyek dan membalas pesan kamu langsung. AI agent membantu mempercepat pengerjaan teknis, dan engineer partner tepercaya ikut bergabung saat proyek membutuhkan kapasitas tambahan. Saya selalu mengabari kamu sebelum pengerjaan dimulai.',
  },
  {
    question: 'Stack apa yang dipakai?',
    answer:
      'React, Vite, Fastify, dan TypeScript, yang juga dipakai web app terbaru x.com, ditambah Rust untuk sistem yang butuh performa tinggi dan Next.js untuk situs yang butuh server rendering. Kalau proyek kamu butuh stack lain, ceritakan saja dan saya akan beri tahu terus terang apakah saya orang yang tepat.',
  },
  {
    question: 'Apakah bisa bekerja dengan perusahaan besar di Indonesia?',
    answer:
      'Bisa. Semua proyek saya berjalan di bawah NDA. Untuk kebutuhan korporasi, lihat juga halaman implementasi AI untuk perusahaan. Saya berdomisili di Sidoarjo dan bekerja Senin sampai Sabtu pukul 09.00 sampai 17.00 WIB, dalam Bahasa Indonesia atau Inggris.',
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

      <PageHero
        variant="obsidian"
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-white/65">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Layanan
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/35">/</li>
              <li className="text-white">Pengembangan produk</li>
            </ol>
          </nav>
        }
        eyebrow={{ icon: <Rocket className="w-3.5 h-3.5" />, label: 'Jasa pembuatan aplikasi · SaaS · AI · Rust' }}
        title="Jasa pembuatan aplikasi"
        accent="web, mobile, SaaS dan AI"
        actions={
          <>
            <Link
              href={contactHref('product')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 group"
            >
              <span>Kirim ide aplikasi kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/jasa-implementasi-ai"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/45 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all"
            >
              <span>Lihat jasa pembuatan AI</span>
            </Link>
          </>
        }
        bottomStrip={
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs text-white/75">
            <span>React · Vite · Fastify · TypeScript · Rust · Next.js · Mulai dari USD 5.000</span>
            <Link
              href="/product-engineering"
              className="text-[#FFB866] hover:text-white underline decoration-[#FFB866]/40 underline-offset-4 transition-colors"
            >
              English version
            </Link>
          </div>
        }
      >
        <p>
          Jasa pembuatan aplikasi SaaS, mobile, software Rust, commerce, dan fitur AI yang siap dipakai di produksi. Saya Aris Setiawan, AI software engineer di Indonesia dengan pengalaman 13+ tahun. Saya memimpin arsitektur setiap proyek, didukung AI agent dan partner tepercaya agar rilis lebih cepat dengan kualitas kode yang tetap terjaga.
        </p>
      </PageHero>

      {/* Band 1: White: Produk yang kami bangun */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="yang-kami-bangun">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">01 / Produk digital</span>
            <h2
              id="yang-kami-bangun"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              Produk yang kami bangun
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all flex flex-col"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-5 flex-grow">{item.body}</p>
                {item.href && item.cta && (
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] transition-colors mt-auto pt-4 border-t border-[#E5E7EB]"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 2: Dark Proof Band: Cara kami bergerak cepat & stack */}
      <section className="w-full ahrefs-dark-band text-white py-16 md:py-24" aria-labelledby="cara-cepat">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
              02 / Cara pengerjaan
            </span>
            <h2
              id="cara-cepat"
              className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3"
            >
              Cara kami bekerja lebih cepat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speedPoints.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#3A57FC]/70 p-6 md:p-7 transition-all"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-2.5">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10" aria-labelledby="stack">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#93A8FF] block mb-2">
                  Stack inti
                </span>
                <h2 id="stack" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Dibangun di atas stack produksi yang juga dipakai x.com
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Stack inti kami sama dengan yang dipakai web app terbaru x.com: React, Vite, Fastify, dan TypeScript (laporan teknik X, diberitakan{' '}
                  <a
                    href={ITECHPOST_URL}
                    className="text-[#FFB866] underline decoration-[#FFB866]/40 underline-offset-4 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iTechPost
                  </a>
                  , 5 November 2026). Kami juga membangun sistem dengan Rust dan Next.js.
                </p>
              </div>
              <div className="lg:col-span-5">
                <ul className="flex flex-wrap gap-2.5 lg:justify-end">
                  {stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 font-mono text-xs font-semibold text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band 3: Subtle Gray: Layanan spesialis */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24" aria-labelledby="spesialisasi">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">03 / Layanan terpisah</span>
            <h2
              id="spesialisasi"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              Layanan spesialis yang bisa dipesan terpisah
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Kamu tidak harus membangun produk dari nol. Setiap layanan di bawah ini bisa diambil sebagai proyek terpisah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight group-hover:text-[#3A57FC] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#3A57FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Band 4: White: Open source */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <OpenSourceProjects
            eyebrow="Open Source · Kode Publik"
            title="Proyek open source yang bisa kamu cek"
            intro="Semua proyek klien saya terikat NDA, jadi bukti publiknya ada pada kode. Berikut beberapa repository yang aktif saya kelola."
            starsLabel="di GitHub"
            reposLabel="repo publik"
            className="mb-0"
          />
        </div>
      </section>

      {/* Band 5: Subtle Gray: FAQ */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Faq
            id="pengembangan-produk-faq"
            title="Pertanyaan soal pengembangan produk"
            faqs={faqs}
            className="mb-0"
          />
        </div>
      </section>

      {/* Band 6: White: CTA Band */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            badge="Diskusi langsung · Balas dalam 24 jam"
            title="Diskusikan ide produk kamu"
            body="Ceritakan produk yang ingin kamu bangun, siapa penggunanya, dan target waktunya. Saya balas dalam 24 jam dengan beberapa pertanyaan lanjutan, atau jawaban jujur jika proyek ini kurang pas saya kerjakan."
            primary={{ href: contactHref('product'), label: 'Kirim ide produk kamu' }}
            secondary={{ href: '/product-engineering', label: 'English version' }}
          />
        </div>
      </section>
    </div>
  )
}
