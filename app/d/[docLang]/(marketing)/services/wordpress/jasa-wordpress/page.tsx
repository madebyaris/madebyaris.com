import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Brush,
  Bug,
  CalendarClock,
  CheckCircle2,
  Gauge,
  Layout,
  Paintbrush,
  Plug,
  RefreshCw,
  Server,
  ShieldAlert,
  ShieldCheck,
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

const pagePath = '/services/wordpress/jasa-wordpress'
const pageTitle = 'Jasa pembuatan website WordPress dan perbaikan'
const pageDescription =
  'Jasa pembuatan website WordPress dengan tema custom, plus perbaikan, maintenance, dan migrasi hosting. Dikerjakan langsung oleh saya, developer web 13+ tahun.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/wordpress.jpg',
  locale: 'id_ID',
  keywords: [
    'jasa pembuatan website WordPress',
    'jasa WordPress',
    'jasa website WordPress',
    'jasa perbaikan website',
    'jasa perbaikan website WordPress',
    'jasa maintenance WordPress',
    'jasa optimasi WordPress',
    'harga jasa pembuatan website WordPress',
    'jasa migrasi WordPress',
    'jasa WooCommerce',
  ],
})

const offers = [
  {
    title: 'Website baru dengan tema custom',
    description:
      'Tema saya bangun dari desain kamu. Halaman tetap ringan di HP, dan tim kamu bisa update teks, foto, dan artikel sendiri lewat block editor.',
    icon: Brush,
  },
  {
    title: 'Redesign tanpa kehilangan SEO',
    description:
      'Tampilan baru, URL lama tetap jalan. Kalau ada URL yang harus berubah, saya pasang redirect 301 dan pantau Search Console setelah website online.',
    icon: RefreshCw,
  },
  {
    title: 'Perbaikan dan pembersihan malware',
    description:
      'Website error, layar putih, atau disusupi link spam. Saya cari penyebabnya, bersihkan, lalu tutup celah yang dipakai untuk masuk.',
    icon: ShieldAlert,
  },
  {
    title: 'Maintenance bulanan',
    description:
      'Update core, tema, dan plugin saya coba di staging dulu. Backup disimpan di luar server, dan restore-nya diuji supaya kamu tahu backup itu bisa dipakai.',
    icon: CalendarClock,
  },
  {
    title: 'Migrasi hosting',
    description:
      'Pindah ke hosting atau VPS baru. Website saya salin dan cek di server baru dulu, baru domain diarahkan ke sana.',
    icon: Server,
  },
  {
    title: 'Toko online WooCommerce',
    description:
      'Toko online WordPress dari katalog produk sampai checkout. Setiap ada perubahan, alur checkout saya uji di staging sebelum dipasang di website live.',
    icon: ShoppingCart,
  },
  {
    title: 'Plugin custom',
    description:
      'Satu plugin untuk kebutuhan spesifik bisnis kamu, misalnya integrasi API atau layar admin khusus. Kalau sudah ada plugin bagus yang bisa, saya sebutkan namanya.',
    icon: Plug,
  },
]

const repairProblems = [
  {
    title: 'Website error atau layar putih',
    description:
      'Muncul pesan "There has been a critical error" atau halaman kosong. Penyebabnya sering plugin, tema, atau versi PHP yang tidak cocok.',
    icon: AlertTriangle,
  },
  {
    title: 'Website lambat',
    description:
      'Saya telusuri apakah penyebabnya hosting, plugin, gambar, database, atau tema, lalu perbaiki yang paling berat dulu.',
    icon: Gauge,
  },
  {
    title: 'Kena hack atau malware',
    description:
      'Pengunjung dialihkan ke situs lain, muncul halaman spam di hasil Google, atau ada akun admin yang tidak kamu kenal.',
    icon: Bug,
  },
  {
    title: 'Plugin bentrok',
    description:
      'Form tidak terkirim, checkout macet, atau wp-admin tidak bisa dibuka setelah pasang atau update plugin.',
    icon: Plug,
  },
  {
    title: 'Tampilan rusak setelah update',
    description:
      'Layout berantakan setelah update WordPress, tema, atau page builder. Saya cari bagian yang berubah dan kembalikan tampilannya.',
    icon: Paintbrush,
  },
]

const hardening = [
  'Update WordPress core, tema, dan plugin, lalu hapus yang tidak dipakai',
  'Cek akun admin dan beri tiap orang role yang memang dia perlukan',
  'Nyalakan login dua langkah untuk akun admin',
  'Matikan file editor di wp-admin',
  'Pasang backup off-site dan uji restore-nya',
]

const buildOptions = [
  {
    title: 'Template atau tema jadi',
    plus: 'Paling cepat online dan biaya awalnya paling kecil. Cocok untuk bisnis yang baru mulai.',
    minus: 'Tampilannya mirip banyak website lain, dan sering membawa fitur yang tidak kamu pakai.',
  },
  {
    title: 'Page builder (Elementor, Divi)',
    plus: 'Kamu bisa mengatur tata letak sendiri dengan drag and drop.',
    minus: 'Builder menambah banyak kode di setiap halaman, jadi lebih berat di HP, dan website terikat ke builder itu.',
  },
  {
    title: 'Tema custom',
    plus: 'Ringan karena hanya memuat yang dipakai. Editor tetap mudah dengan blok yang sudah saya siapkan.',
    minus: 'Biaya awal lebih besar, dan perubahan tata letak yang besar perlu developer.',
  },
]

const goodFit = [
  'Kamu butuh website company profile atau toko online di WordPress dengan tampilan sesuai brand',
  'Website WordPress kamu error, lambat, atau kena malware dan perlu dibereskan',
  'Tim kamu mau update konten sendiri tanpa menunggu developer',
  'Kamu mau redesign atau pindah hosting tanpa kehilangan peringkat Google',
]

const poorFit = [
  'Kamu cuma butuh tema jadi dipasang dan beberapa pengaturan diubah',
  'Yang kamu cari input konten harian atau admin website sehari-hari',
  'Kamu butuh aplikasi dengan banyak logika bisnis, yang lebih cocok dibuat sebagai aplikasi web custom',
]

const processSteps = [
  { step: 1, title: 'Kirim kebutuhan', desc: 'Link website lama kalau ada, tujuan, dan masalahnya' },
  { step: 2, title: 'Scope tertulis', desc: 'Apa yang saya kerjakan, urutannya, dan harganya' },
  { step: 3, title: 'Kerja di staging', desc: 'Website live tetap jalan selama saya bekerja' },
  { step: 4, title: 'Online dan serah terima', desc: 'Plugin dicek, lalu kamu dapat catatan serah terima' },
]

const detailPages = [
  {
    title: 'Detail tema custom (English)',
    description: 'Cara saya membangun tema WordPress dari desain kamu.',
    href: '/services/wordpress/theme-development',
  },
  {
    title: 'Detail plugin custom (English)',
    description: 'Integrasi API, layar admin, dan endpoint REST untuk WordPress.',
    href: '/services/wordpress/plugin-development',
  },
  {
    title: 'Detail maintenance (English)',
    description: 'Apa saja yang saya kerjakan setiap bulan untuk website WordPress kamu.',
    href: '/services/wordpress/maintenance',
  },
  {
    title: 'Detail redesign (English)',
    description: 'Ganti tampilan WordPress tanpa kehilangan URL dan peringkat.',
    href: '/services/wordpress/redesign',
  },
  {
    title: 'Detail migrasi (English)',
    description: 'Jasa migrasi WordPress: pindah hosting, server, atau domain.',
    href: '/services/wordpress/migration',
  },
  {
    title: 'Detail WooCommerce (English)',
    description: 'Jasa WooCommerce untuk toko online WordPress, dari produk sampai checkout.',
    href: '/services/wordpress/woocommerce',
  },
  {
    title: 'Detail optimasi kecepatan (English)',
    description: 'Jasa optimasi WordPress untuk website yang lambat di HP.',
    href: '/services/wordpress/optimization',
  },
  {
    title: 'Detail headless WordPress (English)',
    description: 'Tetap menulis di wp-admin, halaman disajikan oleh Next.js.',
    href: '/services/wordpress/headless-development',
  },
]

const relatedPages = [
  {
    title: 'Jasa SEO',
    description: 'Audit SEO, riset keyword, dan perbaikan teknis di kode website kamu.',
    href: '/services/seo/jasa-seo',
  },
  {
    title: 'Jasa pembuatan website Next.js',
    description: 'Kalau kamu sedang menimbang pindah dari WordPress ke Next.js.',
    href: '/services/nextjs-development/nextjs-indonesia',
  },
  {
    title: 'Jasa pembuatan aplikasi web',
    description: 'Untuk kebutuhan dengan login, dashboard, dan logika bisnis yang banyak.',
    href: '/services/saas-development/jasa-pembuatan-aplikasi-web',
  },
  {
    title: 'Migrasi WordPress ke Next.js untuk bisnis',
    description: 'Artikel: kapan pindah masuk akal dan cara menjaga trafik Google.',
    href: '/blog/migrasi-wordpress-ke-nextjs-bisnis',
  },
  {
    title: 'Memilih VPS untuk WordPress (English)',
    description: 'Artikel: kalau hosting yang jadi penyebab website lambat.',
    href: '/blog/how-to-pick-vps-for-wordpress',
  },
  {
    title: 'Biaya maintenance website (English)',
    description: 'Artikel: apa saja yang menentukan biaya perawatan website.',
    href: '/blog/website-maintenance-cost',
  },
  {
    title: 'WordPress atau Next.js (English)',
    description: 'Artikel: kapan tetap di WordPress dan kapan pindah layak dibayar.',
    href: '/blog/wordpress-vs-nextjs-when-worth-it',
  },
]

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Berapa harga jasa pembuatan website WordPress?',
    answer:
      'Harga dihitung per proyek setelah saya lihat kebutuhannya. Yang membuat harga naik: banyaknya jenis halaman yang berbeda, desain yang perlu dibuat dari nol, fitur seperti toko online atau integrasi API, dan migrasi konten dari website lama. Harga turun kalau desain dan konten sudah siap, atau kalau tema jadi yang bagus ternyata sudah cukup. Kalau memang begitu, saya bilang.',
  },
  {
    question: 'Website saya error atau kena hack. Bisa langsung diperbaiki?',
    answer:
      'Kirim link dan gejalanya lewat form kontak. Saya cek dulu, lalu bilang perkiraan penyebab dan apa yang perlu dikerjakan sebelum mulai. Kondisi website saya backup dulu, jadi kalau ada yang salah saat perbaikan, kita bisa kembali ke titik awal.',
  },
  {
    question: 'Apa saja yang termasuk jasa maintenance WordPress?',
    answer:
      'Update core, tema, dan plugin yang dicoba di staging dulu, backup off-site dengan uji restore, cek akun admin, dan perbaikan kecil kalau ada yang rusak. Isi persisnya kita sepakati di awal, supaya kamu tahu apa yang dikerjakan setiap bulan.',
  },
  {
    question: 'Kalau pindah hosting, website saya mati dan SEO turun?',
    answer:
      'Website saya salin ke server baru dan cek di sana dulu. Domain baru diarahkan setelah semuanya jalan, jadi website lama tetap melayani pengunjung selama proses itu. URL tidak berubah, sehingga peringkat Google tidak perlu dibangun ulang.',
  },
  {
    question: 'Website saya pakai Elementor. Bisa diperbaiki atau harus dibuat ulang?',
    answer:
      'Bisa diperbaiki. Saya rapikan widget dan script yang tidak dipakai, perbaiki gambar dan cache, lalu cek lagi di HP. Kalau builder itu sendiri yang membuat website berat, saya bilang terus terang, dan kita bisa bahas pindah ke tema custom.',
  },
  {
    question: 'Saya kerja langsung dengan kamu? Bisa pakai Bahasa Indonesia?',
    answer:
      'Langsung dengan saya. Saya yang menulis kodenya dan saya juga yang membalas pesan kamu. Saya tinggal di Sidoarjo, Jawa Timur, dan kerja remote dengan klien di Indonesia dan luar negeri, dalam Bahasa Indonesia atau Inggris.',
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
    { name: 'Jasa WordPress', path: pagePath },
  ],
  service: {
    name: 'Jasa pembuatan website WordPress',
    description: pageDescription,
    serviceType: 'WordPress Development',
    areaServed: 'Indonesia',
    offers: offers.map((item) => ({ name: item.title, description: item.description })),
  },
})

export default function JasaWordPressPage() {
  return (
    <div lang="id">
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Layanan</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/wordpress" className="hover:text-orange-500 transition-colors">WordPress</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Jasa WordPress</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Layout className="w-4 h-4 text-orange-500" />, label: 'Jasa WordPress developer Indonesia' }}
        title="Jasa pembuatan website WordPress"
        accent="yang ringan dan gampang diurus"
        actions={
          <>
            <Link
              href={contactHref('wordpress')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Kirim kebutuhan website kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#perbaikan"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">Website saya sedang bermasalah</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          Untuk pemilik bisnis dan agensi yang butuh website WordPress baru, atau punya website lama yang perlu dibereskan.
          Saya Aris, developer web 13+ tahun dan independen sejak 2015.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          Saya membuat tema dan plugin WordPress custom, dan pernah mengerjakan performa WordPress di Hongkiat.com. Website
          ini sendiri berjalan di headless WordPress plus Next.js.
        </p>
      </PageHero>

      <HeroImage src="/images/services/wordpress.jpg" alt="Ilustrasi tata letak website WordPress yang sedang diperbarui, dengan perisai keamanan, alat perawatan, dan kotak migrasi" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Apa yang kamu dapat dari jasa pembuatan website WordPress ini
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Jasa pembuatan website WordPress ini saya kerjakan sendiri, dari tema custom sampai website online. Tema saya bangun
          dari desain kamu supaya halaman tetap ringan di HP, dan tim kamu bisa update konten lewat wp-admin tanpa menunggu
          developer. Kalau website kamu sudah ada tapi error, lambat, atau kena malware, saya juga yang memperbaikinya. Harga
          dihitung per proyek setelah saya lihat kebutuhannya.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Semua perubahan saya coba di staging dulu, jadi website live kamu tetap jalan selama saya bekerja. Kamu bicara
          langsung dengan orang yang menulis kodenya, dan setiap proyek dimulai dengan scope tertulis.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="layanan">
        <div className="text-center mb-10">
          <h2 id="layanan" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Layanan jasa WordPress <span className="gradient-text">yang saya kerjakan</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Pilih satu, atau gabungkan. Kalau belum yakin butuh yang mana, ceritakan masalahnya dan saya bantu pilih.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section id="perbaikan" className="mb-16 scroll-mt-32" aria-labelledby="perbaikan-title">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 id="perbaikan-title" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Jasa perbaikan website WordPress <span className="gradient-text">yang error, lambat, atau kena hack</span>
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            Jasa perbaikan website ini untuk WordPress yang sudah online tapi bermasalah. Kirim link dan gejalanya. Saya cek
            dulu dan bilang perkiraan penyebabnya sebelum mulai kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {repairProblems.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm mb-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              <h3 className="font-semibold text-zinc-900">Setelah diperbaiki, celahnya saya tutup</h3>
            </div>
            <ul className="space-y-3">
              {hardening.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Saya tidak bisa menjamin website kamu tidak akan pernah kena hack lagi. Yang bisa saya lakukan: menutup jalan masuk
            yang paling sering dipakai, yaitu plugin usang dan login admin yang lemah, lalu memastikan ada backup yang bisa
            dipulihkan.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Supaya masalah yang sama tidak balik lagi, jasa maintenance WordPress bulanan menjalankan update dan backup ini secara
            rutin. Kalau masalah utamanya lambat, lihat juga{' '}
            <Link href="/services/wordpress/optimization" className={linkClass}>
              jasa optimasi WordPress (English)
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={contactHref('wordpress-care')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Kirim link website yang bermasalah</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services/wordpress/maintenance"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">Detail maintenance (English)</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="tema">
        <div className="text-center mb-10">
          <h2 id="tema" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Tema custom, template, <span className="gradient-text">atau page builder?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Ketiganya bisa dipakai untuk jasa website WordPress. Masing-masing punya untung dan ruginya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {buildOptions.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-4">{item.title}</h3>
              <p className="flex items-start gap-3 text-sm text-zinc-700 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                {item.plus}
              </p>
              <p className="flex items-start gap-3 text-sm text-zinc-700">
                <XCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                {item.minus}
              </p>
            </div>
          ))}
        </div>

        <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto">
          Untuk website yang jadi sumber pelanggan utama, saya biasanya menyarankan tema custom. Kalau kamu baru mulai dan butuh
          online cepat, template yang bagus sering sudah cukup, dan saya akan bilang begitu. Perbandingan lengkapnya ada di{' '}
          <Link href="/blog/jasa-website-company-profile-nextjs-vs-template" className={linkClass}>
            artikel soal website company profile: Next.js atau template
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="cocok">
        <div className="text-center mb-10">
          <h2 id="cocok" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Jasa website WordPress ini <span className="gradient-text">cocok untuk siapa?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Lebih baik saya bilang tidak dari awal daripada mengambil pekerjaan yang kurang pas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Cocok</h3>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Kurang cocok</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <XCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-500 mt-4">
              Untuk yang terakhir, lihat{' '}
              <Link href="/services/saas-development/jasa-pembuatan-aplikasi-web" className={linkClass}>
                jasa pembuatan aplikasi web
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="cara-kerja">
        <div className="text-center mb-10">
          <h2 id="cara-kerja" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cara <span className="gradient-text">kerja saya</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="detail">
        <div className="text-center mb-10">
          <h2 id="detail" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Detail tiap layanan <span className="gradient-text">dan bacaan terkait</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Halaman detail layanan WordPress ditulis dalam Bahasa Inggris. Yang lain di bawah ini dalam Bahasa Indonesia, kecuali
            yang ditandai.
          </p>
        </div>

        <h3 className="font-semibold text-zinc-900 mb-4">Detail layanan WordPress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {detailPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <span className="font-semibold text-zinc-900 mb-1 flex items-center justify-between gap-3">
                {item.title}
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </span>
              <span className="block text-sm text-zinc-500 leading-relaxed">{item.description}</span>
            </Link>
          ))}
        </div>

        <h3 className="font-semibold text-zinc-900 mb-4">Layanan dan artikel terkait</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <span className="font-semibold text-zinc-900 mb-1 flex items-center justify-between gap-3">
                {item.title}
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </span>
              <span className="block text-sm text-zinc-500 leading-relaxed">{item.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="jasa-wordpress-faq" title="Pertanyaan soal jasa WordPress" faqs={faqs} />

      <CtaBand
        title="Ceritakan website WordPress yang kamu butuhkan"
        body="Kirim tujuan website, link website lama kalau ada, dan apa yang mengganggu kamu. Saya balas dengan pertanyaan atau gambaran scope. Kalau tema jadi sudah cukup untuk kebutuhan kamu, saya bilang terus terang."
        primary={{ href: contactHref('wordpress'), label: 'Kirim kebutuhan website kamu' }}
        secondary={{ href: '/services/wordpress', label: 'Layanan WordPress (English)' }}
      />
    </div>
  )
}
