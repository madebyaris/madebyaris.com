import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  LayoutDashboard,
  Plug,
  Repeat,
  Sparkles,
  Users,
  FileText,
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

const pagePath = '/services/saas-development/jasa-pembuatan-aplikasi-web'
const pageTitle = 'Jasa pembuatan aplikasi web hemat biaya'
const pageDescription =
  'Jasa pembuatan aplikasi web dan SaaS oleh developer 13+ tahun. Biaya server dirancang kecil sejak awal, perkiraan biaya bulanan ditulis di rencana kerja.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/saas.jpg',
  locale: 'id_ID',
  keywords: [
    'jasa pembuatan aplikasi web',
    'jasa pembuatan aplikasi berbasis web',
    'jasa pembuatan aplikasi website',
    'jasa pembuatan aplikasi',
    'jasa pembuatan SaaS',
    'biaya server aplikasi',
    'aplikasi web dengan AI',
  ],
})

const appTypes = [
  {
    title: 'Dashboard internal',
    description: 'Satu tempat untuk tim melihat data penjualan, pesanan, atau pekerjaan yang biasanya tersebar di banyak spreadsheet.',
    icon: LayoutDashboard,
  },
  {
    title: 'Sistem informasi',
    description: 'Pencatatan data operasional dengan hak akses per peran, jadi setiap orang hanya melihat bagian yang menjadi tugasnya.',
    icon: FileText,
  },
  {
    title: 'Portal pelanggan',
    description: 'Pelanggan login untuk cek status pesanan, unduh invoice, atau kirim permintaan, tanpa harus chat admin dulu.',
    icon: Users,
  },
  {
    title: 'Aplikasi SaaS berlangganan',
    description: 'Produk yang dijual per bulan atau per tahun, lengkap dengan paket, pembayaran, dan data terpisah untuk tiap pelanggan.',
    icon: Repeat,
  },
  {
    title: 'Sistem booking',
    description: 'Jadwal, reservasi, dan pengingat otomatis lewat email, supaya slot tidak bentrok dan admin tidak mencatat manual.',
    icon: CalendarCheck,
  },
  {
    title: 'Aplikasi web dengan AI',
    description: 'Fitur seperti ringkasan dokumen, pencarian cerdas, atau asisten chat yang dipasang di dalam aplikasi kamu.',
    icon: Bot,
  },
]

const costAreas = [
  {
    title: 'Server dan CPU',
    description:
      'Setiap halaman yang dirender dan setiap API yang dipanggil memakai CPU. Halaman yang sama untuk semua pengunjung saya simpan di cache, dan pekerjaan berat saya pindahkan ke background job.',
    icon: Cpu,
  },
  {
    title: 'Database',
    description:
      'Query yang lambat membuat server bekerja lebih lama dan memaksa kamu naik ke paket database yang lebih mahal. Saya pasang index untuk query yang benar-benar dipakai aplikasi.',
    icon: Database,
  },
  {
    title: 'Token AI',
    description:
      'Model AI dibayar per token, jadi satu fitur yang boros bisa lebih mahal dari hosting. Jawaban yang berulang saya cache, tugas ringan pakai model kecil, dan pemakaian per pengguna dibatasi.',
    icon: Sparkles,
  },
  {
    title: 'Layanan pihak ketiga',
    description:
      'Login, email, pencarian, dan monitoring masing-masing menambah tagihan bulanan. Saya pilih layanan yang harganya masuk akal untuk trafik awal, dan saya catat mana yang bisa diganti nanti.',
    icon: Plug,
  },
]

const setup = [
  'Aplikasi web di hosting serverless seperti Vercel, yang turun ke nol saat tidak ada yang memakai',
  'Postgres terkelola dengan ukuran sesuai beban sekarang, dan mudah dinaikkan saat perlu',
  'Worker untuk pekerjaan rutin di VPS kecil, kalau itu lebih murah daripada menjalankannya sebagai function',
  'Panggilan AI lewat cache dan batas per pengguna, supaya biaya AI tidak melebihi harga langganan',
]

const goodFit = [
  'Kamu punya ide aplikasi dan mau satu orang yang bertanggung jawab dari rencana sampai online',
  'Kamu mau tahu perkiraan biaya server bulanan sebelum pengerjaan dimulai',
  'Aplikasi kamu sekarang punya tagihan hosting atau AI yang naik lebih cepat dari pendapatan',
  'Kamu mau kode tersimpan di repository kamu dan bisa dilanjutkan developer lain',
]

const poorFit = [
  'Kamu butuh tim besar yang bekerja paralel sejak minggu pertama',
  'Kamu mau harga pasti hanya dari deskripsi satu kalimat',
  'Yang kamu butuhkan aplikasi Android atau iOS native',
]

const processSteps = [
  { step: 1, title: 'Diskusi', desc: 'Kamu cerita masalah yang mau diselesaikan dan siapa yang akan memakai aplikasinya.' },
  { step: 2, title: 'Rencana tertulis', desc: 'Stack, fitur, harga pengerjaan, dan perkiraan biaya server per bulan.' },
  { step: 3, title: 'Pengerjaan', desc: 'Demo lewat link preview setiap minggu, jadi arah bisa diubah sejak awal.' },
  { step: 4, title: 'Online', desc: 'Domain, pembayaran, email, dan monitoring dinyalakan untuk pengguna sungguhan.' },
  { step: 5, title: 'Serah terima', desc: 'Dokumentasi dan walkthrough untuk tim kamu, atau saya lanjut mendampingi.' },
]

const topics = [
  {
    title: 'Next.js di VPS murah',
    description: 'Kapan VPS kecil lebih masuk akal daripada hosting serverless.',
    href: '/blog/next-js-pada-vps-murah',
  },
  {
    title: 'Technical debt pada aplikasi buatan AI',
    description: 'Kenapa kode yang ditulis AI tetap perlu direview manusia.',
    href: '/blog/technical-debt-pada-aplikasi-buatan-ai',
  },
  {
    title: 'Jasa pembuatan website Next.js',
    description: 'Untuk website bisnis, company profile, dan toko online.',
    href: '/services/nextjs-development/nextjs-indonesia',
  },
  {
    title: 'RankMySEO: SaaS atau open source',
    description: 'Perbandingan versi hosted dan toolkit open source. Ditulis dalam Bahasa Inggris.',
    href: '/blog/rankmyseo-saas-vs-open-source',
  },
]

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya jasa pembuatan aplikasi web?',
    answer:
      'Harga dihitung per proyek setelah kita diskusi, karena dashboard sederhana dan aplikasi SaaS dengan pembayaran itu beda pekerjaan. Rencana tertulis berisi harga pengerjaan dan perkiraan biaya server bulanan. Kamu lihat keduanya sebelum saya mulai coding.',
  },
  {
    question: 'Berapa biaya server aplikasi setelah online?',
    answer:
      'Tergantung trafik dan seberapa berat kerja tiap request. Karena itu saya bandingkan beberapa pilihan hosting untuk aplikasi kamu dan menulis perkiraan biaya bulanannya di rencana. Saat pengguna masih sedikit, hosting serverless membuat tagihan mengikuti pemakaian.',
  },
  {
    question: 'Apa beda jasa pembuatan aplikasi website dengan pembuatan website biasa?',
    answer:
      'Website biasa terutama menampilkan informasi, seperti company profile atau blog. Aplikasi website punya login, menyimpan data, dan menjalankan proses, misalnya pemesanan atau laporan. Kalau yang kamu butuhkan website bisnis, saya juga mengerjakannya lewat jasa pembuatan website Next.js.',
  },
  {
    question: 'Apakah kamu juga menerima jasa pembuatan SaaS?',
    answer:
      'Ya. Saya membangun aplikasi SaaS berlangganan lengkap dengan login, paket, pembayaran, dan data terpisah per pelanggan. Saya sendiri menjalankan RankMySEO, sebuah SaaS rank tracker, jadi saya paham apa yang dibutuhkan setelah aplikasi online.',
  },
  {
    question: 'Dikerjakan pakai AI, apakah kodenya tetap mudah dirawat?',
    answer:
      'Saya memakai Cursor untuk mempercepat bagian kode yang rutin. Setiap perubahan tetap saya baca dan review sendiri sebelum masuk, supaya struktur kodenya rapi dan developer lain bisa melanjutkan.',
  },
  {
    question: 'Kode dan datanya jadi milik siapa?',
    answer:
      'Milik kamu. Kode disimpan di repository kamu sejak commit pertama, dan akun hosting serta database atas nama kamu. Kalau suatu saat kamu pindah developer, semuanya bisa dilanjutkan.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Layanan', path: '/services' },
    { name: 'SaaS development', path: '/services/saas-development' },
    { name: 'Jasa pembuatan aplikasi web', path: pagePath },
  ],
  service: {
    name: 'Jasa pembuatan aplikasi web',
    description: pageDescription,
    serviceType: 'SaaS Development',
    areaServed: 'Indonesia',
    offers: appTypes.map((item) => ({ name: item.title })),
  },
  faqs,
})

export default function JasaPembuatanAplikasiWebPage() {
  return (
    <div lang="id">
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Layanan</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/saas-development" className="hover:text-orange-500 transition-colors">SaaS development</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Jasa pembuatan aplikasi web</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Globe className="w-4 h-4 text-orange-500" />, label: 'Jasa pembuatan aplikasi berbasis web' }}
        title="Jasa pembuatan aplikasi web"
        accent="yang hemat biaya server"
        actions={
          <>
            <Link
              href={contactHref('saas')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Kirim ide aplikasi kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#biaya-server"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">Lihat cara saya menekan biaya server</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          Untuk pemilik bisnis dan founder yang butuh aplikasi web dengan tagihan server kecil selama penggunanya masih
          sedikit. Saya rancang, saya bangun, lalu kodenya saya serahkan ke kamu.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          Developer web 13+ tahun dan Cursor Ambassador pertama di Indonesia. Saya membangun dan menjalankan RankMySEO, sebuah SaaS rank tracker.
        </p>
      </PageHero>

      <HeroImage src="/images/services/saas.jpg" alt="Ilustrasi dashboard aplikasi web di atas server kecil, dengan indikator pemakaian CPU yang rendah" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Jasa pembuatan aplikasi web, dikerjakan langsung oleh saya
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Jasa pembuatan aplikasi web ini dikerjakan oleh satu developer senior, yaitu saya. Saya menyusun rencana, menulis
          kodenya, dan meluncurkan aplikasinya sendiri. Sejak awal aplikasi dibuat supaya biaya server tetap kecil walau
          penggunanya masih sedikit. Perkiraan biaya bulanannya saya tulis di rencana sebelum coding dimulai.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Kalau kamu sedang mencari jasa pembuatan aplikasi secara umum, halaman ini fokus ke aplikasi berbasis web. Aplikasi
          seperti ini dibuka lewat browser di HP atau laptop, tanpa perlu install dari Play Store.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="jenis-aplikasi">
        <div className="text-center mb-10">
          <h2 id="jenis-aplikasi" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Aplikasi berbasis web <span className="gradient-text">yang bisa saya buatkan</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Contoh jenis aplikasi yang paling sering ditanyakan. Kalau kebutuhan kamu berbeda, ceritakan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appTypes.map((item) => (
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

      <section id="biaya-server" className="mb-16 scroll-mt-32" aria-labelledby="biaya">
        <div className="text-center mb-10">
          <h2 id="biaya" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Ke mana perginya <span className="gradient-text">biaya server aplikasi</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Tagihan bulanan aplikasi web biasanya datang dari empat pos ini. Begini cara saya menjaga masing-masing tetap kecil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {costAreas.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-zinc-500 mt-4 text-center">
          Cache memegang peran terbesar. Cara kerjanya saya jelaskan di{' '}
          <Link href="/blog/nextjs-cache-on-vercel" className={linkClass}>
            Next.js caching on Vercel
          </Link>{' '}
          (Bahasa Inggris).
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="mulai-dari-nol">
        <h2 id="mulai-dari-nol" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Mulai dari nol pengguna, tanpa sewa server besar
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Banyak aplikasi baru langsung menyewa server besar untuk pengguna yang belum datang. Saya memulai dari hosting
          yang bisa turun ke nol. Selama penggunanya masih sedikit, tagihan mengikuti pemakaian. Saat trafik naik, kapasitas
          bertambah sendiri tanpa perlu menulis ulang kode.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Pekerjaan yang jalan terus sepanjang hari lain cerita. Worker seperti itu sering lebih murah di VPS kecil, jadi
          saya pisahkan kalau hitungannya masuk. Pilihan biaya hosting murah untuk aplikasi kamu saya bandingkan dulu, lalu
          perkiraannya saya tulis di rencana.
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-zinc-900 mb-4">Susunan yang biasanya saya pakai</h3>
          <ul className="space-y-3">
            {setup.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-zinc-500 mt-4">
          Baca juga{' '}
          <Link href="/blog/next-js-pada-vps-murah" className={linkClass}>
            Next.js di VPS murah
          </Link>{' '}
          dan cara saya menjaga{' '}
          <Link href="/services/nextjs-development/vercel" className={linkClass}>
            tagihan Next.js di Vercel
          </Link>{' '}
          tetap terkendali.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="ai-hemat">
        <h2 id="ai-hemat" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Aplikasi web dengan AI yang hemat token
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Fitur AI berguna kalau menghemat waktu pengguna, tapi setiap panggilan model dibayar per token. Saya panggil model
          hanya saat fitur memang membutuhkannya, dan sisanya dikerjakan kode biasa. Jawaban yang sering ditanyakan saya
          simpan di cache, jadi kamu cukup membayarnya sekali.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Tugas ringan saya arahkan ke model kecil yang lebih murah. Pemakaian AI juga dibatasi per pengguna dan per paket,
          supaya satu akun yang sangat aktif tidak menghabiskan keuntungan dari langganannya. Detailnya ada di halaman{' '}
          <Link href="/services/ai-development/ai-integration" className={linkClass}>
            AI integration
          </Link>
          .
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="cursor">
        <h2 id="cursor" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Dikerjakan dengan Cursor, direview manual
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Saya Cursor Ambassador pertama di Indonesia dan memakai AI untuk mempercepat bagian kode yang rutin. Waktu
          pengerjaan jadi lebih singkat. Setiap perubahan tetap saya review sendiri, karena kode AI yang dibiarkan tanpa
          review cepat menumpuk jadi{' '}
          <Link href="/blog/technical-debt-pada-aplikasi-buatan-ai" className={linkClass}>
            technical debt
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="bukti">
        <h2 id="bukti" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Bukti: SaaS yang saya bangun dan jalankan sendiri
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-zinc-900 mb-2">RankMySEO</h3>
          <p className="text-sm text-zinc-600 leading-relaxed mb-3">
            <a href="https://rankmyseo.com" className={linkClass} target="_blank" rel="noopener noreferrer">
              RankMySEO
            </a>{' '}
            adalah rank tracker hosted yang menyimpan riwayat peringkat Google setiap hari. Ada tampilan Overview, Keywords,
            Competitors, dan Insights. Pengecekan peringkat berjalan sebagai background job, jadi dashboard tetap responsif.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Sistemnya saya uji lewat demo diurusin.id, lalu beta publik dibuka pada 31 Agustus 2026. Ada juga{' '}
            <a href="https://github.com/madebyaris/rankmyseo" className={linkClass} target="_blank" rel="noopener noreferrer">
              toolkit open source
            </a>{' '}
            yang bisa kamu lihat kodenya. Ceritanya ada di{' '}
            <Link href="/blog/introducing-rankmyseo-saas" className={linkClass}>
              Introducing RankMySEO
            </Link>{' '}
            (Bahasa Inggris).
          </p>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="cocok">
        <div className="text-center mb-10">
          <h2 id="cocok" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cocok atau <span className="gradient-text">kurang cocok?</span>
          </h2>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Cari developer lain kalau</h3>
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

      <section className="mb-16" aria-labelledby="cara-kerja">
        <div className="text-center mb-10">
          <h2 id="cara-kerja" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cara kerja <span className="gradient-text">dari diskusi sampai online</span>
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

      <section className="mb-16" aria-labelledby="bacaan">
        <div className="text-center mb-10">
          <h2 id="bacaan" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Bacaan <span className="gradient-text">dan layanan terkait</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <h3 className="font-semibold text-zinc-900 mb-1 flex items-center justify-between gap-3">
                {item.title}
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="aplikasi-web-faq" title="Pertanyaan soal jasa pembuatan aplikasi web" faqs={faqs} />

      <CtaBand
        title="Ceritakan aplikasi yang kamu butuhkan"
        body="Kirim gambaran singkat: masalah yang mau diselesaikan, siapa penggunanya, dan target waktunya. Saya balas dengan pertanyaan atau gambaran awal stack dan biaya servernya. Kalau aplikasi siap pakai yang sudah ada ternyata cukup, saya bilang terus terang."
        primary={{ href: contactHref('saas'), label: 'Kirim ide aplikasi kamu' }}
        secondary={{ href: '/services/saas-development', label: 'SaaS development (English)' }}
      />
    </div>
  )
}
