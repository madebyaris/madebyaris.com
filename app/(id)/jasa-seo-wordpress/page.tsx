import type { Metadata } from 'next'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): harga retainer bulanan SEO, dan batas jumlah klien yang mau ditampilkan.
// Harga yang sudah disetujui hanya audit: mulai Rp1.500.000.

export const revalidate = 86400

const path = '/jasa-seo-wordpress'
const pageTitle = 'Jasa SEO WordPress'
const pageDescription =
  'Jasa SEO WordPress untuk audit teknis: crawl, index, metadata, dan kecepatan. Mulai Rp1.500.000. Tanpa tulis konten dan tanpa jasa backlink.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Apa yang termasuk jasa SEO WordPress?',
    answer:
      'Audit teknis pada website WordPress: cara Google merayapi halaman, judul, canonical, sitemap, schema, redirect, dan kecepatan. Kamu dapat daftar perbaikan tertulis.',
  },
  {
    question: 'Apakah kamu menulis artikel atau membangun backlink?',
    answer:
      'Tidak. Saya mengerjakan bagian teknis. Tulis konten dan backlink tetap di kamu atau penulis yang sudah kamu percaya. Saya jelaskan tiap perbaikan supaya mereka bisa melanjutkan.',
  },
  {
    question: 'Apakah peringkat dijamin?',
    answer:
      'Tidak. Saya memperbaiki hal teknis yang bisa diukur. Peringkat juga bergantung pada konten, tautan, dan pesaing. Saya tidak menjanjikan posisi tertentu.',
  },
  {
    question: 'Berapa harga audit SEO?',
    answer:
      'Audit SEO WordPress mulai Rp1.500.000. Itu harga awal. Penawaran akhir mengikuti scope setelah saya melihat websitenya.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [{ name: 'Jasa SEO WordPress', path }],
  service: {
    name: 'Jasa SEO WordPress',
    description: pageDescription,
    serviceType: 'Jasa SEO WordPress',
    areaServed: 'Indonesia',
    offers: [
      {
        name: 'Audit SEO WordPress',
        description: 'Audit teknis WordPress, mulai Rp1.500.000. Harga akhir mengikuti scope.',
      },
    ],
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: ['jasa seo wordpress', 'jasa audit seo'],
})

export default function JasaSeoWordpressPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={Search}
        badge="Audit teknis · mulai Rp1.500.000"
        h1="Jasa SEO WordPress"
        h1Accent="untuk yang bisa saya ukur"
        intro="Untuk pemilik website WordPress yang butuh bagian teknisnya beres: crawl, index, metadata, redirect, dan kecepatan. Saya kerjakan sendiri."
        primaryHref={contactHref('technical-seo')}
        primaryLabel="Kirim URL WordPress-nya"
        secondaryHref="/services/technical-seo"
        secondaryLabel="Technical SEO in English"
        proof="Situs ini headless WordPress dan Next.js, dengan sitemap, schema, dan llms.txt."
        answerTitle="Yang termasuk jasa SEO WordPress"
        answer={
          <p>
            Halaman ini untuk WordPress. SEO untuk situs Next.js ada di{' '}
            <Link href="/services/nextjs-development/nextjs-seo" className={linkClass}>
              Next.js SEO services
            </Link>
            . Pintu umum untuk SEO teknis, semua stack, ada di{' '}
            <Link href="/services/technical-seo" className={linkClass}>
              technical SEO services
            </Link>
            . Saya cek peringkat setelah perbaikan dengan RankMySEO, alat yang saya buat.
          </p>
        }
        familiarTitle="Kedengarannya familiar"
        poorFitTitle="Kurang cocok"
        fitIntro="Kirim URL dan apa yang berubah terakhir: pindah tema, pindah domain, atau laporan kecepatan."
        pains={[
          'Ganti tema lalu trafik dari Google turun',
          'Search Console penuh 404 dan judul yang kembar',
          'Website lambat di HP',
        ]}
        poorFit={[
          'Kamu mau saya menulis artikel atau halaman penjualan',
          'Kamu mau kampanye backlink',
          'Kamu mau janji halaman pertama pada tanggal tertentu',
        ]}
        outcomesTitle="Yang kamu dapat"
        outcomes={[
          {
            title: 'Audit tertulis',
            description: 'Apa yang rusak, kenapa itu mengganggu, dan urutan yang saya sarankan.',
          },
          {
            title: 'Perbaikan di website',
            description: 'Metadata, canonical, redirect, sitemap, schema, dan item kecepatan yang bisa saya ubah.',
          },
          {
            title: 'Cek setelahnya',
            description: 'Search Console saya lihat lagi supaya 404 tidak dibiarkan.',
          },
          {
            title: 'Batas yang jelas',
            description: 'Tanpa tulis konten dan tanpa backlink. Kamu tahu apa yang tidak saya kerjakan.',
          },
        ]}
        stepsTitle="Cara audit berjalan"
        steps={[
          { title: 'Akses', description: 'URL, Search Console, dan wp-admin atau repository.' },
          { title: 'Audit', description: 'Daftar tertulis sebelum saya mengubah yang live.' },
          { title: 'Perbaikan', description: 'Item yang kamu setujui, dikerjakan di tempat situs berjalan.' },
          { title: 'Cek', description: 'Search Console setelah perubahan.' },
        ]}
        priceTitle="Harga"
        priceBody={
          <p>
            Audit SEO WordPress mulai Rp1.500.000. Itu harga awal, dan penawaran akhir mengikuti
            scope. Harga retainer bulanan belum saya terbitkan.
          </p>
        }
        stackTitle="Kapan halamannya yang lain"
        stackBody={
          <p>
            Situs App Router mulai dari halaman Next.js SEO. Kalau stack-nya belum WordPress, mulai
            dari technical SEO services. Halaman ini tetap untuk audit WordPress dan harga mulai
            yang sudah saya terbitkan.
          </p>
        }
        faqTitle="Pertanyaan sebelum audit"
        faqs={faqs}
        relatedTitle="Halaman lain"
        related={[
          {
            title: 'Jasa pembuatan website',
            description: 'Kalau yang dibutuhkan website baru, lalu SEO dasarnya.',
            href: '/jasa-pembuatan-website',
          },
          {
            title: 'Next.js SEO',
            description: 'Metadata, schema, dan Core Web Vitals untuk App Router.',
            href: '/services/nextjs-development/nextjs-seo',
          },
          {
            title: 'Technical SEO',
            description: 'Halaman English untuk SEO teknis lintas stack.',
            href: '/services/technical-seo',
          },
          {
            title: 'Maintenance website',
            description: 'Perawatan setelah perbaikan selesai.',
            href: '/jasa-maintenance-website',
          },
        ]}
        closingTitle="Kirim URL WordPress-nya"
        closingBody="Saya balas dalam 24 jam. Kalau masalahnya konten, saya bilang sebelum ada invoice. Pekerjaan ini bagian teknis."
        closingHref={contactHref('technical-seo')}
        closingLabel="Kirim URL WordPress-nya"
      />
    </>
  )
}
