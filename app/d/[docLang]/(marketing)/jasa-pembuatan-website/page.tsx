import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe,
  LayoutDashboard,
  ShoppingCart,
  TrendingUp,
  XCircle,
  Zap,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/jasa-pembuatan-website'
const pageTitle = 'Jasa pembuatan website untuk bisnis di Indonesia'
const pageDescription =
  'Jasa pembuatan website company profile, toko online, dan aplikasi web, dikerjakan langsung oleh saya, developer 13+ tahun di Sidoarjo. Kirim kebutuhanmu.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  locale: 'id_ID',
  keywords: [
    'jasa pembuatan website',
    'jasa pembuatan website profesional',
    'jasa pembuatan website company profile',
    'jasa pembuatan website surabaya',
    'jasa pembuatan website sidoarjo',
    'jasa pembuatan website umkm',
    'jasa pembuatan toko online',
    'jasa pembuatan aplikasi web',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const websiteTypes = [
  {
    icon: Building2,
    title: 'Website company profile dan bisnis',
    body: 'Website perusahaan atau usaha yang bisa kamu dan timmu ubah sendiri. Tema dibuat dari desain kamu, dan setiap perubahan dicoba di staging dulu.',
    href: '/services/wordpress/jasa-wordpress',
    cta: 'Lihat jasa WordPress',
  },
  {
    icon: ShoppingCart,
    title: 'Toko online',
    body: 'Katalog produk, checkout, payment gateway, dan kurir lokal. Pembayaran dites dengan pesanan uji sebelum toko live.',
    href: '/services/wordpress/jasa-woocommerce',
    cta: 'Lihat jasa WooCommerce',
  },
  {
    icon: Zap,
    title: 'Website cepat dengan Next.js',
    body: 'Untuk website yang harus cepat dibuka di HP, rapi untuk Google, dan punya fitur di luar kemampuan plugin.',
    href: '/services/nextjs-development/nextjs-indonesia',
    cta: 'Lihat jasa Next.js',
  },
  {
    icon: LayoutDashboard,
    title: 'Aplikasi web dan dashboard',
    body: 'Aplikasi dengan login, data, dan alur kerja khusus bisnis kamu, dibangun supaya biaya jalannya tetap masuk akal.',
    href: '/services/saas-development/jasa-pembuatan-aplikasi-web',
    cta: 'Lihat jasa aplikasi web',
  },
  {
    icon: TrendingUp,
    title: 'SEO setelah website jadi',
    body: 'Audit teknis, riset kata kunci, dan perbaikan halaman supaya website mudah ditemukan orang yang mencarinya.',
    href: '/services/seo/jasa-seo',
    cta: 'Lihat jasa SEO',
  },
  {
    icon: Globe,
    title: 'Perawatan setelah live',
    body: 'Update tema dan plugin yang dicoba di staging, backup di luar server, dan pengecekan keamanan. Halaman ini berbahasa Inggris.',
    href: '/services/wordpress/maintenance',
    cta: 'Lihat maintenance WordPress',
  },
]

const processSteps = [
  { step: 1, title: 'Konsultasi', desc: 'kamu ceritakan bisnis, tujuan website, dan siapa yang akan memakainya.' },
  { step: 2, title: 'Scope tertulis', desc: 'apa yang saya kerjakan, cara saya mengujinya, dan harganya.' },
  { step: 3, title: 'Desain dan build', desc: 'dikerjakan di staging, jadi kamu bisa lihat hasilnya sebelum live.' },
  { step: 4, title: 'Tes di HP dan SEO dasar', desc: 'halaman penting dicek di layar kecil, dan metadata disiapkan.' },
  { step: 5, title: 'Launch', desc: 'website live, dengan bantuan saya saat launch.' },
]

const goodFit = [
  'Kamu butuh website baru yang dikerjakan satu orang, dari konsultasi sampai live',
  'Website lama lambat, rusak, atau susah diubah, dan kamu ingin developer yang bisa membaca kodenya',
  'Kamu butuh toko online, aplikasi, atau fitur yang tidak ada di template jadi',
  'Kamu ingin tahu scope dan harga tertulis sebelum pekerjaan dimulai',
]

const poorFit = [
  'Kamu mencari paket website murah dengan harga tetap dan template jadi',
  'Kamu butuh banyak orang mengerjakan banyak hal sekaligus dengan satu tenggat ketat',
  'Kamu butuh orang yang mengisi konten dan mengurus website setiap hari',
]

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya jasa pembuatan website?',
    answer:
      'Biayanya tergantung scope: jumlah halaman, desain yang dibuat dari nol atau memakai tema, fitur seperti toko online atau login, dan konten yang perlu dipindah dari website lama. Saya tidak punya paket harga tetap. Harga saya berikan setelah konsultasi, bersama scope tertulis.',
  },
  {
    question: 'Berapa lama pembuatan website?',
    answer:
      'Lamanya tergantung jumlah halaman dan fitur, dan juga seberapa cepat desain serta konten dari sisi kamu siap. Perkiraannya saya tulis di scope sebelum kita mulai, jadi kamu tahu apa yang bisa diharapkan.',
  },
  {
    question: 'WordPress atau Next.js, mana yang cocok untuk website saya?',
    answer:
      'WordPress cocok kalau kamu atau timmu ingin mengedit halaman, artikel, dan produk sendiri. Next.js cocok kalau kecepatan, SEO teknis, atau fitur custom jadi prioritas. Ada juga jalan tengah: konten tetap ditulis di WordPress, tampilannya dibuat dengan Next.js. Ceritakan kebutuhanmu, dan saya bilang terus terang mana yang lebih ringan untuk kamu.',
  },
  {
    question: 'Apakah saya bisa mengubah isi website sendiri setelah jadi?',
    answer:
      'Bisa. Kalau websitenya WordPress, kamu mengubah teks, gambar, dan artikel lewat dashboard seperti biasa. Kalau memakai Next.js dengan WordPress sebagai editor, kamu tetap menulis di WordPress.',
  },
  {
    question: 'Apakah bisa bertemu langsung?',
    answer:
      'Bisa diatur. Saya tinggal di Sidoarjo, sebelah Surabaya, jadi bertemu di Surabaya atau Sidoarjo masuk akal kalau memang perlu. Pekerjaannya sendiri berjalan remote, dan saya bekerja dalam Bahasa Indonesia atau Inggris.',
  },
  {
    question: 'Apakah ada perawatan setelah website live?',
    answer:
      'Ada. Isi perawatan kita sepakati di awal: update yang dicoba di staging dulu, backup di luar server, dan pengecekan keamanan. Detailnya ada di halaman maintenance WordPress.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Layanan', path: '/services' },
    { name: 'Jasa pembuatan website', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'Web development',
    areaServed: 'Indonesia',
  },
})

export default function JasaPembuatanWebsitePage() {
  return (
    <div lang="id">
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Layanan</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Jasa pembuatan website</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Globe className="w-4 h-4 text-orange-500" />, label: 'Jasa pembuatan website Indonesia' }}
        title="Jasa pembuatan website untuk bisnis,"
        accent="dikerjakan langsung oleh developernya"
        actions={
          <Link
            href={contactHref('other')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Ceritakan website yang kamu butuhkan</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        }
      >
        <p className="mb-4">
          Untuk pemilik usaha, perusahaan, dan tim yang butuh website company profile, toko online, atau aplikasi web. Saya Aris,
          developer web 13+ tahun yang bekerja mandiri sejak 2015 dan tinggal di Sidoarjo. Kamu berbicara langsung dengan saya,
          dari konsultasi sampai website live. Tidak ada brief yang dioper dari sales ke developer lain.
        </p>
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Pilih jenis website yang kamu butuhkan
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Jenis websitenya menentukan alat yang saya pakai dan harganya. Pilih yang paling dekat dengan kebutuhanmu, atau
          ceritakan lewat form kontak kalau kamu belum yakin.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="jenis-website">
        <h2 id="jenis-website" className="sr-only">Jenis website yang saya buat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {websiteTypes.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="p-2 bg-zinc-100 rounded-lg inline-flex mb-3">
                <item.icon className="w-4 h-4 text-zinc-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-3">{item.body}</p>
              <Link href={item.href} className={`${linkClass} text-sm`}>
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="langkah-pembuatan">
        <div className="text-center mb-10">
          <h2 id="langkah-pembuatan" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Dari konsultasi sampai website live
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="lokasi">
        <h2 id="lokasi" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Dari Sidoarjo, untuk klien di mana saja
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Saya tinggal di Sidoarjo, sebelah Surabaya. Kalau perlu bertemu, Surabaya dan Sidoarjo masuk akal. Pengerjaannya
          tetap berjalan remote, jadi kamu di kota lain pun bisa bekerja sama dengan saya dalam Bahasa Indonesia atau Inggris.
          Untuk kebutuhan SEO setelah website jadi, lihat{' '}
          <Link href="/services/seo/jasa-seo" className={linkClass}>
            jasa SEO
          </Link>
          .
        </p>
      </section>

      <section className="mb-16" aria-labelledby="cocok">
        <div className="text-center mb-10">
          <h2 id="cocok" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cocok dan kurang cocok
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Cocok kalau:</h3>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Kurang cocok kalau:</h3>
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

      <Faq id="jasa-pembuatan-website-faq" title="Pertanyaan soal jasa pembuatan website" faqs={faqs} />

      <CtaBand
        title="Ceritakan website yang kamu butuhkan"
        body="Kirim link website lama atau ceritakan website yang ingin kamu buat. Saya balas dengan pertanyaan atau jawaban jujur apakah saya cocok untuk proyek ini."
        primary={{ href: contactHref('other'), label: 'Kirim kebutuhan website kamu' }}
      />
    </div>
  )
}
