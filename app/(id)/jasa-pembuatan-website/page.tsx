import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): harga mulai untuk jasa pembuatan website. Belum ada angka yang disetujui.
// TODO(aris): tautan dari dua tulisan panduan di WordPress ke halaman ini (kontennya ada di CMS).

export const revalidate = 86400

const path = '/jasa-pembuatan-website'
const pageTitle = 'Jasa pembuatan website'
const pageDescription =
  'Jasa pembuatan website dari satu senior developer. Next.js untuk yang custom, WordPress untuk editor, plus PHP, maintenance, dan SEO teknis.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Jasa pembuatan website di sini dikerjakan siapa?',
    answer:
      'Saya sendiri, Aris Setiawan. Dari obrolan pertama sampai website online, kamu bicara dengan orang yang menulis kodenya. Saya di Sidoarjo dan kerja remote.',
  },
  {
    question: 'Next.js atau WordPress?',
    answer:
      'Next.js saya pakai untuk website custom dan aplikasi. WordPress lebih pas kalau tim kamu yang akan mengubah halaman tiap minggu. Saya bilang pilihannya di rencana tertulis.',
  },
  {
    question: 'Berapa harga jasa pembuatan website?',
    answer:
      'Harga mengikuti scope. Kamu dapat rencana tertulis dan penawaran sebelum saya mulai. Harga mulai untuk pembuatan website belum saya terbitkan.',
  },
  {
    question: 'Apakah termasuk SEO?',
    answer:
      'Struktur dasar, judul, dan sitemap saya siapkan supaya website bisa dibaca Google. Audit SEO WordPress yang terpisah ada di halaman jasa SEO WordPress, mulai Rp1.500.000.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [{ name: 'Jasa pembuatan website', path }],
  service: {
    name: 'Jasa pembuatan website',
    description: pageDescription,
    serviceType: 'Jasa pembuatan website',
    areaServed: 'Indonesia',
    offers: [
      { name: 'Website company profile', description: 'Halaman perusahaan, layanan, dan kontak.' },
      { name: 'Website WordPress', description: 'Editor WordPress yang tim kamu sudah kenal.' },
      { name: 'Website custom Next.js', description: 'Next.js untuk website yang butuh custom.' },
    ],
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: [
    'jasa pembuatan website',
    'jasa website',
    'jasa pembuatan website terbaik di indonesia',
    'jasa web developer',
  ],
})

export default function JasaPembuatanWebsitePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={Globe}
        badge="Satu developer · remote dari Sidoarjo"
        h1="Jasa pembuatan website"
        h1Accent="yang bisa dipakai pelanggan"
        intro="Untuk pemilik bisnis yang butuh website online, cepat di HP, dan bisa diubah setelah launch. Next.js adalah stack andalan saya, satu layanan di antara yang lain."
        primaryHref={contactHref('build')}
        primaryLabel="Kirim kebutuhan website kamu"
        secondaryHref="/services"
        secondaryLabel="Web development services (English)"
        proof="13+ tahun · Independen sejak 2015 · Cursor Ambassador pertama di Indonesia"
        answerTitle="Jasa pembuatan website, diurutkan dari masalahnya"
        answer={
          <>
            <p>
              Halaman ini untuk kata pencarian jasa pembuatan website. Website custom Next.js ada
              di{' '}
              <Link href="/services/nextjs-development/nextjs-indonesia" className={linkClass}>
                jasa pembuatan website Next.js
              </Link>
              . Panduan sebelum DP ada di{' '}
              <Link href="/blog/jasa-pembuatan-website-jakarta-nextjs" className={linkClass}>
                checklist sebelum DP
              </Link>{' '}
              dan{' '}
              <Link href="/blog/jasa-website-company-profile-nextjs-vs-template" className={linkClass}>
                template atau custom
              </Link>
              .
            </p>
            <p>
              Kalau pekerjaan utamanya aplikasi dengan login, buka jasa pembuatan aplikasi web.
              Aplikasi native Android dan iOS tidak saya kerjakan.
            </p>
          </>
        }
        familiarTitle="Kedengarannya familiar"
        poorFitTitle="Kurang cocok"
        fitIntro="Kirim URL lama kalau ada, atau jelaskan halaman yang kamu butuhkan. Saya balas dalam 24 jam."
        pains={[
          'Website lama lambat di HP dan susah ditemukan di Google',
          'Tim marketing butuh halaman baru, tapi yang terakhir pegang kodenya sudah tidak ada',
          'Template jadi, tapi tidak muat dengan cara jualan kamu',
        ]}
        poorFit={[
          'Kamu butuh aplikasi native di Play Store atau App Store',
          'Kamu butuh banyak developer yang kerja bareng dari minggu pertama',
          'Belum ada yang bisa jawab pertanyaan soal isi halaman',
        ]}
        outcomesTitle="Yang kamu dapat"
        outcomes={[
          {
            title: 'Website yang bisa dibuka di HP',
            description: 'Halaman yang ringan, dengan teks yang bisa dibaca tanpa zoom.',
          },
          {
            title: 'Cara mengubah isinya',
            description: 'WordPress kalau editor harus sering update. Next.js kalau situsnya custom.',
          },
          {
            title: 'URL lama yang dijaga',
            description: 'Kalau ini pindahan, URL lama saya pertahankan atau saya alihkan dengan redirect 301.',
          },
          {
            title: 'Satu orang dari awal sampai online',
            description: 'Scope, kode, dan balasan chat datang dari saya.',
          },
        ]}
        stepsTitle="Cara kerjanya"
        steps={[
          { title: 'Cerita', description: 'Kamu kirim tujuan dan contoh yang disukai.' },
          { title: 'Rencana', description: 'Saya tulis scope dan penawaran sebelum mulai.' },
          { title: 'Bangun', description: 'Ada pratinjau yang bisa kamu klik.' },
          { title: 'Online', description: 'Domain, redirect, dan catatan untuk yang lanjut mengurusnya.' },
        ]}
        priceTitle="Harga"
        priceBody={
          <p>
            Harga mengikuti scope. Kamu dapat rencana tertulis dan penawaran sebelum saya mulai.
            Harga mulai untuk pembuatan website belum saya terbitkan. Audit SEO WordPress mulai
            Rp1.500.000, di halaman jasa SEO WordPress.
          </p>
        }
        stackTitle="Kapan stack lain lebih pas"
        stackBody={
          <p>
            Company profile yang isinya sering diubah biasanya lebih pas di WordPress. Produk baru
            dengan banyak halaman interaktif biasanya Next.js. Aplikasi lama yang sudah PHP lebih
            sering butuh perbaikan atau API, lalu baru dipikirkan pindahnya. Saya tulis pilihannya
            di rencana.
          </p>
        }
        faqTitle="Pertanyaan sebelum mulai"
        faqs={faqs}
        relatedTitle="Pilih jenis pekerjaannya"
        related={[
          {
            title: 'Website company profile',
            description: 'Halaman perusahaan, layanan, dan kontak.',
            href: '/jasa-pembuatan-website/company-profile',
          },
          {
            title: 'Website WordPress',
            description: 'Jasa pembuatan website WordPress, editor tetap di wp-admin.',
            href: '/jasa-pembuatan-website/wordpress',
          },
          {
            title: 'Website custom Next.js',
            description: 'Flagship stack, untuk website yang butuh custom.',
            href: '/services/nextjs-development/nextjs-indonesia',
          },
          {
            title: 'Aplikasi web',
            description: 'Login, dashboard, dan data di browser.',
            href: '/jasa-pembuatan-aplikasi-web',
          },
          {
            title: 'Maintenance website',
            description: 'Perawatan setelah website online.',
            href: '/jasa-maintenance-website',
          },
          {
            title: 'SEO WordPress',
            description: 'Audit teknis, mulai Rp1.500.000.',
            href: '/jasa-seo-wordpress',
          },
        ]}
        closingTitle="Kirim kebutuhan websitenya"
        closingBody="Dua kalimat dan contoh website yang kamu suka sudah cukup. Saya balas dalam 24 jam dan bilang terus terang kalau pekerjaannya kurang cocok."
        closingHref={contactHref('build')}
        closingLabel="Kirim kebutuhan website kamu"
      />
    </>
  )
}
