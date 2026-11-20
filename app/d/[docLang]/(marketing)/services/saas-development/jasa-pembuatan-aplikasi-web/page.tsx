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
const pageTitle = 'Jasa Pembuatan Aplikasi Web & SaaS Hemat Biaya'
const pageDescription =
  'Jasa pembuatan aplikasi web, dashboard, dan SaaS AI oleh AI software engineer senior 13+ tahun. Biaya server dan token AI dirancang kecil sejak awal.'

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
    description: 'Pencatatan data operasional dengan hak akses per role, jadi setiap anggota tim hanya melihat bagian yang menjadi tugasnya.',
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
  'Aplikasi web di hosting serverless seperti Vercel, di mana biaya komputasi otomatis turun ke nol saat tidak ada trafik',
  'Managed PostgreSQL dengan kapasitas sesuai beban saat ini, dan mudah di-upgrade saat dibutuhkan',
  'Worker untuk pekerjaan rutin di VPS kecil, kalau itu lebih hemat daripada menjalankannya sebagai serverless function',
  'Panggilan AI lewat cache dan batas pemakaian per pengguna, supaya biaya AI tidak melebihi harga langganan',
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
  { step: 1, title: 'Diskusi', desc: 'Kamu ceritakan masalah yang mau diselesaikan dan siapa yang akan memakai aplikasinya.' },
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

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'
const darkLinkClass =
  'text-[#93A8FF] underline decoration-[#93A8FF]/40 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors font-medium'

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya jasa pembuatan aplikasi web?',
    answer:
      'Harga dihitung per proyek setelah kita diskusi, karena kompleksitas dashboard sederhana dan aplikasi SaaS berlangganan tentu berbeda. Rencana tertulis berisi harga pengerjaan dan perkiraan biaya server bulanan. Kamu lihat keduanya sebelum saya mulai coding.',
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
})

export default function JasaPembuatanAplikasiWebPage() {
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
            <Link href="/services/saas-development" className="hover:text-[#3A57FC] transition-colors">
              SaaS development
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li className="text-[#0B0C0E] font-semibold">Jasa pembuatan aplikasi web</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Globe className="w-3.5 h-3.5" />, label: 'Jasa pembuatan aplikasi berbasis web' }}
        title="Jasa pembuatan aplikasi web"
        accent="yang hemat biaya server"
        actions={
          <>
            <Link
              href={contactHref('saas')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Kirim ide aplikasi kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#biaya-server"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>Lihat cara saya menekan biaya server</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          Untuk pemilik bisnis dan founder di Indonesia yang butuh aplikasi web, dashboard, atau SaaS dengan tagihan server kecil dan siap dipasangi fitur AI. Saya rancang arsitekturnya, saya pimpin pengerjaannya, lalu kodenya saya serahkan ke repo kamu.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          AI software engineer senior 13+ tahun · First Cursor Ambassador in Indonesia · Pembuat RankMySEO.
        </p>
      </PageHero>

      <HeroImage src="/images/services/saas.jpg" alt="Ilustrasi dashboard aplikasi web di atas server kecil, dengan indikator pemakaian CPU yang rendah" />

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Ringkasan</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Jasa pembuatan aplikasi web, dipimpin langsung oleh saya
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          Jasa pembuatan aplikasi web ini saya pimpin langsung, dari rencana, kode, sampai peluncuran. AI agent membantu
          mempercepat pengerjaan teknis, dan engineer partner tepercaya ikut bergabung saat proyek membutuhkan kapasitas tambahan. Sejak awal aplikasi dirancang agar biaya server tetap rendah walau
          penggunanya masih sedikit. Perkiraan biaya bulanannya saya tulis di rencana sebelum coding dimulai.
        </p>
        <p className="text-[#374151] leading-relaxed">
          Kalau kamu sedang mencari jasa pembuatan aplikasi secara umum, halaman ini fokus ke aplikasi berbasis web. Aplikasi
          seperti ini dibuka lewat browser di HP atau laptop, tanpa perlu install dari Play Store.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="jenis-aplikasi">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Jenis aplikasi</span>
          <h2 id="jenis-aplikasi" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Aplikasi berbasis web <span className="gradient-text">yang bisa saya buatkan</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Contoh jenis aplikasi yang paling sering ditanyakan. Kalau kebutuhan kamu berbeda, ceritakan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appTypes.map((item) => (
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

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section id="biaya-server" className="mb-16 scroll-mt-32" aria-labelledby="biaya">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Efisiensi infrastruktur</span>
          <h2 id="biaya" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Ke mana perginya <span className="gradient-text">biaya server aplikasi</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Tagihan bulanan aplikasi web biasanya datang dari empat pos ini. Begini cara saya menjaga masing-masing tetap kecil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {costAreas.map((item) => (
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
          Cache memegang peran terbesar. Cara kerjanya saya jelaskan di{' '}
          <Link href="/blog/nextjs-cache-on-vercel" className={linkClass}>
            Next.js caching on Vercel
          </Link>{' '}
          (Bahasa Inggris).
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="mulai-dari-nol">
        <span className="section-index block mb-2">Arsitektur hemat biaya</span>
        <h2 id="mulai-dari-nol" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Mulai dari nol pengguna, tanpa sewa server besar
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          Banyak aplikasi baru langsung menyewa server besar untuk pengguna yang belum datang. Saya memulai dari hosting
          serverless yang biayanya bisa turun ke nol saat idle. Selama penggunanya masih sedikit, tagihan mengikuti pemakaian. Saat trafik naik, kapasitas
          bertambah sendiri tanpa perlu menulis ulang kode.
        </p>
        <p className="text-[#374151] leading-relaxed mb-6">
          Pekerjaan yang jalan terus sepanjang hari lain cerita. Worker seperti itu sering lebih murah di VPS kecil, jadi
          saya pisahkan kalau hitungannya masuk. Pilihan biaya hosting murah untuk aplikasi kamu saya bandingkan dulu, lalu
          perkiraannya saya tulis di rencana.
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Susunan yang biasanya saya pakai</h3>
          <ul className="space-y-3">
            {setup.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-[#4B5563] mt-4">
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

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="ai-hemat">
        <span className="section-index block mb-2">Kontrol token AI</span>
        <h2 id="ai-hemat" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Aplikasi web dengan AI yang hemat token
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          Fitur AI berguna kalau menghemat waktu pengguna, tapi setiap panggilan model dibayar per token. Saya panggil model
          hanya saat fitur memang membutuhkannya, dan sisanya dikerjakan kode biasa. Jawaban yang sering ditanyakan saya
          simpan di cache, jadi kamu cukup membayarnya sekali.
        </p>
        <p className="text-[#374151] leading-relaxed">
          Tugas ringan saya arahkan ke model kecil yang lebih murah. Pemakaian AI juga dibatasi per pengguna dan per paket,
          supaya satu akun yang sangat aktif tidak menghabiskan keuntungan dari langganannya. Detailnya ada di halaman{' '}
          <Link href="/services/ai-development/ai-integration" className={linkClass}>
            AI integration
          </Link>
          .
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="cursor">
        <span className="section-index block mb-2">Kualitas kode</span>
        <h2 id="cursor" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Dikerjakan dengan Cursor, direview manual
        </h2>
        <p className="text-[#374151] leading-relaxed">
          Saya Cursor Ambassador pertama di Indonesia dan memakai AI untuk mempercepat bagian kode yang rutin. Waktu
          pengerjaan jadi lebih singkat. Setiap perubahan tetap saya review sendiri, karena kode AI yang dibiarkan tanpa
          review cepat menumpuk jadi{' '}
          <Link href="/blog/technical-debt-pada-aplikasi-buatan-ai" className={linkClass}>
            technical debt
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="bukti">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-8 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
            Bukti nyata
          </span>
          <h2 id="bukti" className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            Bukti: SaaS yang saya bangun dan jalankan sendiri
          </h2>
          <h3 className="font-display font-bold text-[#93A8FF] mb-2">RankMySEO</h3>
          <p className="text-sm text-white/85 leading-relaxed mb-3">
            <a href="https://rankmyseo.com" className={darkLinkClass} target="_blank" rel="noopener noreferrer">
              RankMySEO
            </a>{' '}
            adalah rank tracker hosted yang menyimpan riwayat peringkat Google setiap hari. Ada tampilan Overview, Keywords,
            Competitors, dan Insights. Pengecekan peringkat berjalan sebagai background job, jadi dashboard tetap responsif.
          </p>
          <p className="text-sm text-white/80 leading-relaxed">
            Sistemnya saya uji lewat demo diurusin.id, lalu beta publik dibuka pada 31 Agustus 2026. Ada juga{' '}
            <a href="https://github.com/madebyaris/rankmyseo" className={darkLinkClass} target="_blank" rel="noopener noreferrer">
              toolkit open source
            </a>{' '}
            yang bisa kamu lihat kodenya. Ceritanya ada di{' '}
            <Link href="/blog/introducing-rankmyseo-saas" className={darkLinkClass}>
              Introducing RankMySEO
            </Link>{' '}
            (Bahasa Inggris).
          </p>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="cocok">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Kesesuaian</span>
          <h2 id="cocok" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Cocok atau <span className="gradient-text">kurang cocok?</span>
          </h2>
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

      <section className="mb-16" aria-labelledby="cara-kerja">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Alur pengerjaan</span>
          <h2 id="cara-kerja" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Cara kerja <span className="gradient-text">dari diskusi sampai online</span>
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

      <section className="mb-16" aria-labelledby="bacaan">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Bacaan lanjutan</span>
          <h2 id="bacaan" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Bacaan <span className="gradient-text">dan layanan terkait</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 group"
            >
              <h3 className="font-display font-bold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors mb-1.5 flex items-center justify-between gap-3">
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#3A57FC] group-hover:translate-x-1 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="aplikasi-web-faq" title="Pertanyaan soal jasa pembuatan aplikasi web" faqs={faqs} />

      <CtaBand
        badge="Diskusi langsung · Balas dalam 24 jam"
        title="Ceritakan aplikasi yang kamu butuhkan"
        body="Kirim gambaran singkat: masalah yang mau diselesaikan, siapa penggunanya, dan target waktunya. Saya balas dengan pertanyaan lanjutan atau gambaran awal stack dan biaya servernya. Kalau aplikasi siap pakai yang sudah ada ternyata cukup, saya bilang terus terang."
        primary={{ href: contactHref('saas'), label: 'Kirim ide aplikasi kamu' }}
        secondary={{ href: '/services/saas-development', label: 'SaaS development (English)' }}
      />
    </div>
  )
}
