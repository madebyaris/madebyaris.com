import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  FileSearch,
  LineChart,
  Search,
  Wrench,
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

const pagePath = '/services/seo/jasa-seo'
const pageTitle = 'Jasa SEO Website: Audit, Riset & SEO Bulanan'
const pageDescription =
  'Jasa SEO oleh AI software engineer senior dan pembuat RankMySEO: audit teknis, riset keyword, perbaikan langsung di kode, dan SEO bulanan untuk bisnis.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/seo.jpg',
  locale: 'id_ID',
  keywords: [
    'jasa SEO',
    'jasa SEO website',
    'jasa SEO profesional',
    'konsultan SEO',
    'jasa konsultan SEO',
    'jasa SEO bulanan',
    'jasa SEO Surabaya',
    'jasa audit SEO',
    'riset keyword',
    'jasa optimasi website',
    'jasa SEO WordPress',
    'harga jasa SEO',
  ],
})

const offers = [
  {
    title: 'Audit SEO teknis',
    description:
      'Saya crawl seluruh website, membaca Search Console, dan mengecek kodenya. Hasilnya daftar perbaikan yang diurutkan dari trafik yang paling terancam, lengkap dengan file atau pengaturan penyebab tiap masalah.',
    icon: FileSearch,
  },
  {
    title: 'Riset keyword dan kompetitor',
    description:
      'Pencarian apa yang diketik calon pembeli, seberapa besar nilainya, dan halaman kompetitor mana yang sekarang menang. Kamu dapat satu keyword utama per halaman dan daftar halaman yang perlu ditulis. Bisa dipesan terpisah.',
    icon: Search,
  },
  {
    title: 'Perbaikan langsung di kode',
    description:
      'Saya pimpin dan kerjakan langsung di kode: redirect, canonical, schema, sitemap, internal link, dan Core Web Vitals. Kalau kamu punya tim developer, mereka menerima pull request yang bisa direview, lengkap dengan catatan perubahan.',
    icon: Wrench,
  },
  {
    title: 'SEO bulanan',
    description:
      'Setiap bulan saya kerjakan perbaikan berikutnya di daftar, menyusun rencana konten, dan memantau keyword kamu di RankMySEO. Laporannya singkat: apa yang saya ubah, apa yang bergerak, dan rencana bulan depan.',
    icon: CalendarClock,
  },
]

const auditChecks = [
  'Crawling dan indexing: robots.txt, tag noindex, dan halaman yang dilewati Google',
  'Redirect dan link rusak, terutama setelah redesign atau pindah platform',
  'Tag canonical dan halaman duplikat yang berebut pencarian yang sama',
  'Judul, meta description, dan heading di halaman yang mendatangkan penjualan',
  'Core Web Vitals di HP sungguhan, dari data lapangan Search Console',
  'Structured data: Organization, Service, Article, FAQ, dan breadcrumb',
  'Sitemap XML, hreflang untuk halaman Bahasa Indonesia dan Inggris, serta pagination',
  'Internal link dan orphan page yang tidak ditautkan dari menu atau artikel mana pun',
  'Rendering JavaScript, supaya Google melihat isi yang sama dengan pengunjung',
  'Akses crawler AI dan file llms.txt untuk mesin pencari berbasis AI',
]

const goodFit = [
  'Trafik turun setelah redesign, ganti tema, atau pindah platform',
  'Search Console menampilkan halaman sudah di-crawl tapi belum diindeks, dan belum ada yang tahu sebabnya',
  'Kamu rutin menulis artikel, tapi peringkatnya untuk pencarian yang salah atau tidak muncul sama sekali',
  'Kamu ingin SEO diperbaiki langsung di kode oleh orang yang bisa membuka pull request',
]

const poorFit = [
  'Kamu ingin jaminan halaman pertama Google pada tanggal tertentu',
  'Yang kamu cari hanya backlink dalam jumlah besar',
  'Kamu butuh puluhan artikel per bulan dengan harga per kata',
]

const topics = [
  {
    title: 'Technical SEO services (English)',
    description: 'The same SEO services explained for English readers.',
    href: '/services/seo',
    lang: 'en',
  },
  {
    title: 'Checklist audit SEO teknis',
    description: 'Urutan pengecekan yang saya jalankan sebelum menyentuh website klien. Ditulis dalam bahasa Inggris.',
    href: '/blog/technical-seo-audit-checklist',
  },
  {
    title: 'SEO untuk AI search dan GEO',
    description: 'Apa yang berubah saat ChatGPT dan AI Overviews menjawab lebih dulu dari hasil pencarian biasa.',
    href: '/blog/seo-for-ai-vs-geo',
  },
  {
    title: 'Jasa pembuatan website Next.js',
    description: 'Kalau websitenya perlu dibangun ulang supaya cepat dan mudah dibaca Google.',
    href: '/services/nextjs-development/nextjs-indonesia',
  },
  {
    title: 'Jasa WordPress',
    description: 'Layanan WordPress dalam Bahasa Indonesia, untuk website yang tetap memakai WordPress.',
    href: '/services/wordpress/jasa-wordpress',
  },
  {
    title: 'Optimasi kecepatan WordPress',
    description: 'Saat WordPress yang lambat jadi alasan halaman kamu tidak naik di Google.',
    href: '/services/wordpress/optimization',
  },
  {
    title: 'Migrasi WordPress ke Next.js untuk bisnis',
    description: 'Panduan pindah dari WordPress ke Next.js untuk website bisnis.',
    href: '/blog/migrasi-wordpress-ke-nextjs-bisnis',
  },
  {
    title: 'RankMySEO: hosted atau open source',
    description: 'Rank tracker yang saya buat, dan versi mana yang cocok untuk tim kamu.',
    href: '/blog/rankmyseo-saas-vs-open-source',
  },
]

const processSteps = [
  { step: 1, title: 'Baca data', desc: 'Search Console, analytics, dan crawl seluruh website' },
  { step: 2, title: 'Urutkan perbaikan', desc: 'Tiap masalah diurutkan dari trafik atau penjualan yang paling terancam' },
  { step: 3, title: 'Perbaiki dan rilis', desc: 'Dicoba di staging dulu, lalu live dengan catatan perubahan singkat' },
  { step: 4, title: 'Pantau', desc: 'Keyword dipantau di RankMySEO, jadi kamu lihat apa yang bergerak' },
]

const clientResults = [
  {
    title: 'Website konten dengan trafik besar',
    description:
      'Impression Google naik dari 700 ribu ke 1,8 juta per 28 hari, dengan CTR rata-rata 2%. Kalau semua website klien digabung, totalnya sekitar 20 juta impression per bulan. Waktu muat halaman turun dari sekitar 4 detik ke bawah 1 detik.',
  },
  {
    title: 'Brand mesin industri internasional',
    description:
      'Niche yang sangat sempit, dengan pembeli di Singapura, Tiongkok, Italia, Jerman, dan Amerika Serikat. Impression naik dari 2 ribu ke 20 ribu, dan CTR naik dari 0,1% ke 1%.',
  },
  {
    title: 'Manajemen reputasi di hasil pencarian',
    description:
      'Untuk klien privat, saya menata apa yang muncul saat orang mencari nama brand atau pribadi klien: halaman resmi yang akurat dibangun dan dinaikkan peringkatnya agar hasil negatif turun dari halaman depan.',
  },
]

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'
const darkLinkClass =
  'text-[#93A8FF] underline decoration-[#93A8FF]/40 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors font-medium'

const faqs: FaqItem[] = [
  {
    question: 'Berapa harga jasa SEO?',
    answer:
      'Harga saya hitung per pekerjaan setelah melihat websitenya dulu. Audit untuk company profile kecil dan perbaikan SEO menyeluruh di toko online pasca-migrasi tentu berbeda kompleksitasnya. Kirim URL website kamu dan ceritakan apa yang berubah belakangan ini. Saya balas dengan hal pertama yang akan saya cek dan harga untuk auditnya.',
  },
  {
    question: 'Kenapa paket jasa SEO murah sering tidak terasa hasilnya?',
    answer:
      'Kerja teknis butuh waktu: membaca data, mencari penyebab, lalu memperbaiki kode. Paket dengan harga sangat rendah jarang menyisakan waktu untuk itu, jadi isinya cenderung backlink massal atau laporan otomatis. Backlink seperti itu bisa merugikan kalau Google menganggapnya spam. Kalau budget terbatas, mulai dari audit, lalu kerjakan perbaikan yang paling penting lebih dulu.',
  },
  {
    question: 'Bisa bantu kalau ada berita negatif soal brand saya di Google?',
    answer:
      'Bisa. Manajemen reputasi di hasil pencarian artinya membangun dan menaikkan halaman akurat milik kamu, seperti website, profil, dan artikel, supaya muncul di atas hasil negatif atau yang sudah usang. Saya tidak bisa menghapus halaman milik orang lain dari Google, kecuali halaman itu melanggar kebijakan penghapusan Google.',
  },
  {
    question: 'Apa bedanya jasa konsultan SEO dengan jasa SEO yang langsung dikerjakan?',
    answer:
      'Konsultan SEO biasanya memberi diagnosis dan saran: apa yang salah dan kenapa. Perbaikannya diserahkan ke developer kamu. Saya bisa mengerjakan keduanya. Kamu bisa pesan audit dan riset keyword saja, atau sekalian minta saya memperbaiki kodenya.',
  },
  {
    question: 'Apa saja isi jasa SEO bulanan?',
    answer:
      'Setiap bulan saya kerjakan perbaikan berikutnya dari daftar audit, menyusun rencana atau brief konten dari hasil riset keyword, lalu mengecek peringkat dan Search Console. Keyword kamu dipantau di RankMySEO. Di akhir bulan kamu dapat laporan singkat berisi apa yang saya ubah, apa yang bergerak, dan rencana bulan berikutnya.',
  },
  {
    question: 'Apakah peringkat di Google dijamin?',
    answer:
      'Tidak. Google yang menentukan peringkat, dan tidak ada orang yang bisa mengendalikannya. Yang bisa saya janjikan: website kamu mudah di-crawl Google, cepat dibuka, dan jelas tujuan tiap halamannya. Kamu juga bisa memantau riwayat peringkat setiap keyword yang dilacak.',
  },
  {
    question: 'Bisnis saya di Surabaya. Bisa ketemu langsung?',
    answer:
      'Bisa diatur. Saya tinggal di Sidoarjo, sebelah Surabaya, jadi ketemu di Surabaya, Sidoarjo, atau sekitarnya masih masuk akal kalau memang perlu. Pekerjaannya sendiri tetap berjalan remote, karena audit dan perbaikan dikerjakan langsung di website dan Search Console kamu.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Layanan', path: '/services' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'Jasa SEO', path: pagePath },
  ],
  service: {
    name: 'Jasa SEO',
    description: pageDescription,
    serviceType: 'Search Engine Optimization',
    areaServed: 'Indonesia',
    offers: [
      { name: 'Audit SEO teknis' },
      { name: 'Riset keyword dan kompetitor' },
      { name: 'Perbaikan SEO langsung di kode' },
      { name: 'Jasa SEO bulanan' },
    ],
  },
})

export default function JasaSeoPage() {
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
            <Link href="/services/seo" className="hover:text-[#3A57FC] transition-colors">
              SEO
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li className="text-[#0B0C0E] font-semibold">Jasa SEO</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <LineChart className="w-3.5 h-3.5" />, label: 'Jasa SEO teknis dan riset keyword' }}
        title="Jasa SEO"
        accent="yang dikerjakan langsung oleh developer"
        actions={
          <>
            <Link
              href={contactHref('seo')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Kirim website kamu untuk diaudit</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#audit"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>Lihat apa saja yang dicek</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          Untuk pemilik bisnis dan tim marketing yang trafik Google-nya jalan di tempat, atau malah turun setelah ganti
          desain. Saya mengaudit website kamu, meriset keyword yang diketik calon pembeli, lalu memimpin perbaikannya di kode.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          AI software engineer senior 13+ tahun di Sidoarjo dekat Surabaya, dan pembuat RankMySEO, rank tracker yang menyimpan riwayat peringkat Google setiap hari.
        </p>
      </PageHero>

      <HeroImage src="/images/services/seo.jpg" alt="Ilustrasi halaman hasil pencarian dengan hasil teratas ditandai, kaca pembesar, dan grafik peringkat yang naik" />

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Ringkasan</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Apa yang kamu dapat dari jasa SEO ini
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          Jasa SEO yang saya kerjakan berangkat dari satu pertanyaan: kenapa halaman yang penting untuk bisnis kamu belum
          muncul di Google? Saya cek websitenya, membaca data Search Console, lalu menulis daftar masalah yang diurutkan dari
          yang paling banyak membuang trafik. Setelah itu saya pimpin perbaikannya di kode. Riset keyword menentukan halaman mana
          menargetkan pencarian apa.
        </p>
        <p className="text-[#374151] leading-relaxed">
          Kalau kamu sedang membandingkan beberapa jasa SEO profesional, tanyakan siapa yang akan memperbaiki kodenya. Sering
          kali audit berhenti di laporan PDF yang tidak pernah dikerjakan. Di sini saya developernya, jadi redirect, schema, dan
          template yang lambat dibereskan dalam pekerjaan yang sama. Saya paling sering memegang WordPress, Next.js, dan PHP,
          jadi jasa SEO WordPress dan jasa optimasi website yang lambat termasuk pekerjaan sehari-hari saya.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="layanan">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Pilihan layanan</span>
          <h2 id="layanan" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Jasa audit SEO, riset keyword, <span className="gradient-text">sampai SEO bulanan</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Mulai dari satu dulu. Audit adalah cara paling murah untuk tahu apakah layanan lainnya layak kamu bayar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((item) => (
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

      <section id="audit" className="mb-16 max-w-3xl mx-auto scroll-mt-32">
        <span className="section-index block mb-2">Cakupan audit</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Yang saya cek saat audit SEO
        </h2>
        <p className="text-[#374151] leading-relaxed mb-6">
          Urutannya selalu sama, karena sebagus apa pun judul halaman, Google tetap tidak bisa menampilkannya kalau halaman tersebut gagal di-crawl.
          Daftar lengkap beserta tool yang saya pakai ada di{' '}
          <Link href="/blog/technical-seo-audit-checklist" className={linkClass}>
            checklist audit SEO teknis
          </Link>{' '}
          (bahasa Inggris).
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <ul className="space-y-3.5">
            {auditChecks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="bukti">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-10 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
            Rekam jejak
          </span>
          <h2 id="bukti" className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
            Bukti yang bisa kamu cek sebelum kerja sama
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display font-bold text-white mb-1">Hasil untuk klien</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-white/60 mb-4">
                Nama klien saya rahasiakan untuk melindungi data mereka.
              </p>
              <ul className="space-y-4">
                {clientResults.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFB866] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display font-bold text-white mb-2">Saya membuat RankMySEO</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  RankMySEO menyimpan peringkat Google setiap hari untuk tiap keyword, jadi kamu bisa lihat posisi sebuah halaman
                  minggu lalu dan bulan lalu, lewat tampilan Overview, Keywords, Competitors, dan Insights. Ada{' '}
                  <a href="https://github.com/madebyaris/rankmyseo" className={darkLinkClass} target="_blank" rel="noopener noreferrer">
                    toolkit open source
                  </a>{' '}
                  yang bisa dibaca siapa saja, dan{' '}
                  <a href="https://rankmyseo.com" className={darkLinkClass} target="_blank" rel="noopener noreferrer">
                    versi hosted
                  </a>{' '}
                  yang open beta sejak 31 Agustus 2026. Di paket SEO bulanan, keyword kamu dipantau di sana.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display font-bold text-white mb-2">24 Agent Skills SEO, GEO &amp; AEO</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Alur kerja SEO, GEO, dan AEO saya juga dipublikasikan sebagai 24 agent skills open source di{' '}
                  <a href="https://github.com/rankmyseo/skills" className={darkLinkClass} target="_blank" rel="noopener noreferrer">
                    github.com/rankmyseo/skills
                  </a>
                  , mencakup audit visibilitas AI, agent readiness, Search Console, dan GA4 yang bisa kamu cek langsung.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display font-bold text-white mb-2">Website ini contohnya</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Website ini memakai WordPress headless dan Next.js di Vercel. Buka source halaman mana pun: setiap halaman punya
                  satu graph structured data, URL canonical, dan judul yang muat di hasil Google. Ada juga sitemap XML, RSS feed,
                  dan{' '}
                  <a href="/llms.txt" className={darkLinkClass}>
                    llms.txt
                  </a>{' '}
                  untuk mesin pencari AI. Artikel baru masuk cache dalam hitungan detik setelah terbit, lewat webhook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="cocok">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Kesesuaian</span>
          <h2 id="cocok" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Apakah kamu butuh <span className="gradient-text">konsultan SEO?</span>
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

      <section className="mb-16" aria-labelledby="cara-kerja">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Alur kerja</span>
          <h2 id="cara-kerja" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Cara kerja saya, <span className="gradient-text">dari audit sampai perbaikan</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B0C0E] text-[#FFB866] font-mono text-xs font-bold mb-4">
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-1.5">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="surabaya">
        <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF]/60 p-6 md:p-8">
          <span className="section-index block mb-2">Lokasi &amp; kolaborasi</span>
          <h2 id="surabaya" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Jasa SEO untuk bisnis di Surabaya dan Jawa Timur
          </h2>
          <p className="text-[#374151] leading-relaxed">
            Saya tinggal dan bekerja di Sidoarjo, sebelah Surabaya. Audit, perbaikan, dan laporan semuanya bisa dikerjakan
            remote, jadi lokasi kamu tidak mengubah cara kerjanya. Kalau bisnis kamu di Surabaya, Sidoarjo, atau kota lain di
            Jawa Timur dan lebih nyaman ngobrol tatap muka di awal, itu bisa kita atur. Klien di luar Jawa Timur dan luar negeri
            saya layani dengan cara yang sama, lewat tulisan atau call, dalam Bahasa Indonesia atau Inggris.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="panduan">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Bacaan lanjutan</span>
          <h2 id="panduan" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Panduan SEO <span className="gradient-text">dan layanan terkait</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Tulisan saya soal SEO, plus layanan yang menjalankannya. Sebagian ditulis dalam bahasa Inggris.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              lang={item.lang}
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

      <Faq id="jasa-seo-faq" title="Pertanyaan soal jasa SEO" faqs={faqs} />

      <CtaBand
        badge="Diskusi langsung · Balas dalam 24 jam"
        title="Mau tahu apa yang menahan peringkat website kamu?"
        body="Kirim URL dan ceritakan apa yang berubah belakangan ini. Saya balas dengan tiga hal pertama yang akan saya cek dan harga untuk auditnya. Kalau SEO kamu ternyata sudah baik, saya bilang terus terang."
        primary={{ href: contactHref('seo'), label: 'Kirim website kamu untuk diaudit' }}
        secondary={{ href: '/services/seo', label: 'Technical SEO services (English)' }}
      />
    </div>
  )
}
