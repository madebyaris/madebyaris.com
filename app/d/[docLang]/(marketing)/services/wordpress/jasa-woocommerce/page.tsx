import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  CheckCircle2,
  ShoppingCart,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { HeroImage } from '@/components/page/hero-image'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/wordpress/jasa-woocommerce'
const pageTitle = 'Jasa pembuatan website ecommerce WooCommerce'
const pageDescription =
  'WooCommerce untuk toko online bisnis: katalog produk, checkout, payment gateway dan kurir lokal, dan setiap perubahan dites di staging dulu.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/wordpress.jpg',
  locale: 'id_ID',
  keywords: [
    'jasa pembuatan website ecommerce WooCommerce',
    'jasa WooCommerce',
    'jasa pembuatan toko online WooCommerce',
    'developer WooCommerce Indonesia',
    'jasa WooCommerce Indonesia',
    'payment gateway WooCommerce',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const workItems = [
  {
    title: 'Toko baru dari nol',
    body: 'Setup WooCommerce, tema dan desain, katalog produk, pembayaran, pengiriman, SEO dasar, sampai toko live. Semua bagian ini saya kerjakan sendiri.',
  },
  {
    title: 'Fitur dan plugin custom',
    body: (
      <>
        Plugin WooCommerce custom untuk aturan khusus toko kamu, misalnya harga khusus atau opsi produk. Lihat juga{' '}
        <Link href="/services/wordpress/plugin-development" className={linkClass}>
          pembuatan plugin WordPress
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Checkout dan halaman produk',
    body: 'Field checkout yang ditambah atau dihapus, tanggal pengiriman, dan aturan bersyarat.',
  },
  {
    title: 'Integrasi pembayaran dan pengiriman',
    body: 'Payment gateway dan kurir lokal untuk toko di Indonesia, dipasang dan dites dalam mode sandbox.',
  },
  {
    title: 'Kecepatan dan database toko',
    body: 'Perbaikan toko yang lambat, termasuk tuning database WooCommerce.',
  },
  {
    title: 'Migrasi toko',
    body: (
      <>
        Pindah toko ke hosting baru dengan produk, pelanggan, dan pesanan ikut pindah. Lihat{' '}
        <Link href="/services/wordpress/migration" className={linkClass}>
          migrasi WordPress
        </Link>
        .
      </>
    ),
  },
]

const processSteps = [
  { step: 1, title: 'Konsultasi', desc: 'kamu ceritakan produk, cara jualan, dan kebutuhan toko.' },
  { step: 2, title: 'Scope tertulis', desc: 'apa yang saya kerjakan, cara saya mengujinya, dan harganya.' },
  { step: 3, title: 'Setup dan desain', desc: 'WooCommerce, tema, dan tampilan toko di staging.' },
  { step: 4, title: 'Katalog produk', desc: 'produk, kategori, dan halaman produk.' },
  { step: 5, title: 'Pembayaran dan pengiriman', desc: 'payment gateway dan kurir lokal, dites dengan pesanan uji.' },
  { step: 6, title: 'Kecepatan dan SEO dasar', desc: 'halaman toko, produk, dan checkout dicek sebelum live.' },
  { step: 7, title: 'Launch', desc: 'toko live, dengan bantuan saat launch.' },
]

const speedChecks = [
  'Database: autoloaded options, tabel sisa plugin lama, dan query produk yang lambat',
  'Cart fragments: request refresh cart di halaman yang tidak menampilkan cart',
  'Object cache: Redis atau Memcached, kalau hosting kamu menyediakannya',
  'Gambar: foto produk dibuat sesuai ukuran yang dipakai tema',
  'Plugin: script yang dimuat di semua halaman padahal hanya dibutuhkan di toko atau checkout',
]

const liveStoreSteps = [
  'Setiap perubahan masuk ke salinan staging dulu',
  'Email ke pelanggan asli dimatikan di staging',
  'Pembayaran berjalan di mode test atau sandbox, dan saya buat pesanan uji dari cart sampai konfirmasi',
  'Perubahan naik ke live di jam paling sepi, dengan backup tepat sebelumnya',
]

const goodFit = [
  'Kamu butuh toko online baru di WooCommerce, dari nol sampai live',
  'Plugin hampir sesuai kebutuhan toko, tapi pengaturannya terus bermasalah',
  'Toko makin lambat saat produk dan pesanan bertambah',
  'Toko dibuat orang lain, dan kamu butuh developer yang bisa membaca kodenya',
]

const poorFit = [
  'Kamu butuh orang untuk upload produk atau memproses pesanan setiap hari',
  'Kamu ingin toko tanpa urusan hosting, update, dan keamanan',
]

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya jasa pembuatan website ecommerce WooCommerce?',
    answer:
      'Biayanya tergantung scope: jumlah produk, aturan checkout, dan integrasi yang dibutuhkan. Saya tidak punya paket harga tetap. Harga saya berikan setelah konsultasi, bersama scope tertulis.',
  },
  {
    question: 'Apakah toko tetap bisa menerima pesanan selama dikerjakan?',
    answer:
      'Bisa. Saya bekerja di salinan staging, dan toko live hanya saya baca sampai perubahan lolos tes. Perubahan naik ke live di jam sepi, setelah pesanan uji berhasil.',
  },
  {
    question: 'Payment gateway apa saja yang bisa dipasang?',
    answer:
      'Saya pasang payment gateway dan kurir lokal yang sesuai dengan toko kamu. Setiap status pembayaran saya tes di mode sandbox dulu.',
  },
  {
    question: 'Apakah toko WooCommerce yang sudah lambat bisa dipercepat?',
    answer:
      'Bisa. Saya ukur halaman toko, produk, dan checkout, lalu cari penyebabnya di database, plugin, cart fragments, gambar, atau hosting. Kalau hosting yang jadi batasnya, saya bilang sebelum kamu bayar untuk hal lain.',
  },
  {
    question: 'Kapan sebaiknya pindah dari WooCommerce?',
    answer:
      'WooCommerce masuk akal kalau kamu ingin memiliki kodenya, butuh aturan khusus, atau sudah memakai WordPress. Kamu juga jadi bertanggung jawab atas hosting, update, dan keamanan, atau membayar orang untuk mengurusnya. Kalau katalog kamu kecil dan sederhana, dan tidak ada orang di tim yang mau mengurus hosting, update, dan keamanan, platform toko online yang sudah jadi bisa lebih ringan. Saya akan bilang terus terang kalau itu kondisi kamu.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Layanan', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'Jasa WooCommerce', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'WooCommerce development',
    areaServed: 'Indonesia',
  },
})

export default function JasaWooCommercePage() {
  return (
    <div lang="id">
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Layanan</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/wordpress" className="hover:text-orange-500 transition-colors">WordPress</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Jasa WooCommerce</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <ShoppingCart className="w-4 h-4 text-orange-500" />, label: 'Jasa WooCommerce developer Indonesia' }}
        title="Jasa pembuatan website ecommerce dengan WooCommerce,"
        accent="dites di staging dulu"
        actions={
          <Link
            href={contactHref('wordpress')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Ceritakan toko online yang kamu butuhkan</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        }
      >
        <p className="mb-4">
          Untuk pemilik bisnis yang butuh toko online WooCommerce baru, atau punya toko yang perlu diperbaiki dan dipercepat.
          Saya Aris, developer yang mengerjakan toko WooCommerce sendiri dari nol sampai live: setup, tema dan desain, katalog
          produk, pembayaran, pengiriman, kecepatan, SEO dasar, dan bantuan saat launch. Setiap perubahan saya coba di staging
          dengan pesanan uji, jadi toko kamu tetap menerima pesanan selama saya bekerja.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          Versi bahasa Inggris:{' '}
          <Link href="/services/wordpress/woocommerce" className={linkClass}>
            WooCommerce developer
          </Link>{' '}
          (bahasa Inggris)
        </p>
      </PageHero>

      <HeroImage
        src="/images/services/wordpress.jpg"
        alt="Ilustrasi tata letak toko online WooCommerce yang sedang disiapkan, dengan ikon keranjang belanja dan checkout"
      />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Kapan toko online kamu butuh developer WooCommerce
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Kamu butuh developer saat plugin hampir cocok tapi belum pas, checkout harus bekerja dengan cara lain, atau toko makin
          lambat saat katalog bertambah. Saya baca kodenya, cari penyebabnya, lalu perbaiki di salinan staging. WooCommerce
          berjalan di atas WordPress. Untuk pekerjaan di luar toko, lihat{' '}
          <Link href="/services/wordpress/jasa-wordpress" className={linkClass}>
            jasa WordPress
          </Link>
          .
        </p>
      </section>

      <section className="mb-16" aria-labelledby="yang-saya-kerjakan">
        <div className="text-center mb-10">
          <h2 id="yang-saya-kerjakan" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Yang saya kerjakan di WooCommerce
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {workItems.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <div className="text-sm text-zinc-500 leading-relaxed">{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="langkah-pembuatan">
        <div className="text-center mb-10">
          <h2 id="langkah-pembuatan" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Dari nol sampai live: langkah pembuatan toko
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="toko-lambat">
        <h2 id="toko-lambat" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Toko WooCommerce lambat: yang saya cek dulu
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Halaman cart, checkout, dan akun berubah untuk setiap pembeli, jadi page cache tidak bisa membantu di sana. Halaman itu
          bergantung pada PHP dan database yang cepat. Berikut yang saya cek dulu:
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm mb-6">
          <ul className="space-y-3">
            {speedChecks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-zinc-600 leading-relaxed">
          Untuk kecepatan bagian lain website, lihat{' '}
          <Link href="/services/wordpress/optimization" className={linkClass}>
            optimasi kecepatan WordPress
          </Link>
          .
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="cara-bekerja">
        <h2 id="cara-bekerja" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Cara saya bekerja di toko yang sedang jalan
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {liveStoreSteps.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Contoh toko yang pernah saya kerjakan
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Sebagian besar proyek WooCommerce saya terikat NDA, jadi nama klien tidak saya tampilkan. Salah satunya adalah sebuah
          toko perlengkapan bayi.
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

      <Faq id="jasa-woocommerce-faq" title="Pertanyaan soal jasa WooCommerce" faqs={faqs} />

      <CtaBand
        title="Ceritakan toko online yang kamu butuhkan"
        body="Kirim link toko atau ceritakan toko yang ingin kamu buat. Setelah konsultasi gratis, saya balas dengan scope, cara saya mengujinya, dan harganya."
        primary={{ href: contactHref('wordpress'), label: 'Kirim kebutuhan toko kamu' }}
      />

      <p className="text-center text-sm text-zinc-600 mb-16 max-w-lg mx-auto">
        Butuh perawatan rutin setelah toko live? Lihat{' '}
        <Link href="/services/wordpress/maintenance" className={linkClass}>
          maintenance WordPress
        </Link>
        .
      </p>
    </div>
  )
}
