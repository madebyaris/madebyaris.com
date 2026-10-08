import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): harga mulai per bulan untuk jasa maintenance website.
// TODO(aris): batas jam respon selain balasan 24 jam, dan apa yang termasuk backup.

export const revalidate = 86400

const path = '/jasa-maintenance-website'
const pageTitle = 'Jasa maintenance website'
const pageDescription =
  'Jasa maintenance website untuk update, perbaikan, dan perubahan kecil. WordPress, Next.js, atau PHP. Terpisah dari optimasi kecepatan sekali jalan.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Apa yang dikerjakan di jasa maintenance website?',
    answer:
      'Update yang aman, perbaikan kalau sesuatu rusak, dan perubahan kecil yang kamu kirim tertulis. Daftar pastinya ada di scope sebelum kita mulai.',
  },
  {
    question: 'Apakah sama dengan optimasi kecepatan?',
    answer:
      'Tidak. Maintenance adalah perawatan berjalan. Optimasi kecepatan sekali jalan ada di halaman WordPress speed optimization. Perbaikan besar yang butuh ulang bangun saya pisahkan dari retainer.',
  },
  {
    question: 'Website apa yang bisa dirawat?',
    answer:
      'WordPress, Next.js, dan PHP yang kodenya bisa saya baca dan saya deploy. Kalau hosting atau repository tidak bisa diakses, saya bilang sebelum quote.',
  },
  {
    question: 'Berapa biaya maintenance?',
    answer:
      'Harga mengikuti kondisi situsnya. Kamu dapat penawaran sebelum saya mulai. Harga mulai per bulan belum saya terbitkan.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [{ name: 'Jasa maintenance website', path }],
  service: {
    name: 'Jasa maintenance website',
    description: pageDescription,
    serviceType: 'Jasa maintenance website',
    areaServed: 'Indonesia',
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: [
    'jasa maintenance website',
    'jasa maintenance wordpress',
    'jasa perbaikan website',
    'jasa perbaikan wordpress',
  ],
})

export default function JasaMaintenancePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={Wrench}
        badge="Perawatan · setelah website online"
        h1="Jasa maintenance website"
        h1Accent="supaya situs tetap bisa dibuka"
        intro="Untuk pemilik website yang butuh satu orang mengupdate, memperbaiki yang rusak, dan mengerjakan perubahan kecil."
        primaryHref={contactHref('maintenance')}
        primaryLabel="Kirim URL websitenya"
        secondaryHref="/services/website-maintenance"
        secondaryLabel="Website maintenance in English"
        proof="13+ tahun · WordPress, Next.js, dan PHP · Balasan dalam 24 jam"
        answerTitle="Yang termasuk jasa maintenance website"
        answer={
          <p>
            Halaman ini untuk perawatan berjalan, termasuk jasa perbaikan website yang sifatnya
            merawat. Optimasi sekali jalan ada di{' '}
            <Link href="/services/wordpress/optimization" className={linkClass}>
              WordPress speed optimization
            </Link>
            . Pembuatan baru ada di{' '}
            <Link href="/jasa-pembuatan-website" className={linkClass}>
              jasa pembuatan website
            </Link>
            . Pindahan antar sistem, misalnya WordPress ke Next.js, saya bahas terpisah di{' '}
            <Link href="/blog/migrasi-wordpress-ke-nextjs-bisnis" className={linkClass}>
              panduan migrasi
            </Link>
            .
          </p>
        }
        familiarTitle="Kedengarannya familiar"
        poorFitTitle="Kurang cocok"
        fitIntro="Kirim URL dan kejadian terakhir yang bikin website bermasalah."
        pains={[
          'Update plugin membuat website tidak bisa dibuka',
          'Perubahan teks kecil mengantre karena developer sebelumnya hilang',
          'Kamu takut masuk ke hosting karena takut website mati',
        ]}
        poorFit={[
          'Kamu mau website baru dari nol',
          'Kamu butuh tim jaga 24 jam dengan beberapa orang',
          'Tidak ada yang bisa membagikan akses hosting atau repository',
        ]}
        outcomesTitle="Yang kamu dapat"
        outcomes={[
          {
            title: 'Update yang bisa dikembalikan',
            description: 'Saya update yang aman, dan saya bisa undo kalau hasilnya merusak situs.',
          },
          {
            title: 'Jalur untuk perubahan kecil',
            description: 'Kamu tulis permintaannya. Saya kerjakan dan beri tahu saat sudah live.',
          },
          {
            title: 'Batas yang tertulis',
            description: 'Fitur baru tidak menyelinap sebagai perbaikan. Itu masuk scope terpisah.',
          },
          {
            title: 'Situs tetap milik kamu',
            description: 'Hosting dan kode tetap di akun kamu. Retainer bisa berhenti tanpa sandera.',
          },
        ]}
        stepsTitle="Cara mulainya"
        steps={[
          { title: 'Lihat', description: 'Saya baca situs, hosting, dan kerusakan terakhir.' },
          { title: 'Scope', description: 'Daftar yang termasuk perawatan, plus penawaran.' },
          { title: 'Rawat', description: 'Update dan perbaikan sesuai irama yang kita sepakati.' },
          { title: 'Berhenti rapi', description: 'Kamu bisa stop. Akses tetap di kamu.' },
        ]}
        priceTitle="Harga"
        priceBody={
          <p>
            Harga mengikuti kondisi website. Kamu dapat rencana dan penawaran sebelum saya mulai.
            Harga mulai per bulan belum saya terbitkan.
          </p>
        }
        stackTitle="Kapan pekerjaannya sekali jalan"
        stackBody={
          <p>
            Kalau halaman lambat dan kamu mau itu dibereskan sekali, mulai dari optimasi kecepatan.
            Kalau kode tidak bisa di-deploy dengan aman, pekerjaan pertama adalah bereskan atau
            migrasi, baru maintenance. Saya tulis yang mana di balasan pertama.
          </p>
        }
        faqTitle="Pertanyaan sebelum rawat"
        faqs={faqs}
        relatedTitle="Halaman lain"
        related={[
          {
            title: 'Jasa pembuatan website',
            description: 'Kalau yang dibutuhkan website baru.',
            href: '/jasa-pembuatan-website',
          },
          {
            title: 'Optimasi kecepatan WordPress',
            description: 'Sekali jalan, terpisah dari perawatan bulanan.',
            href: '/services/wordpress/optimization',
          },
          {
            title: 'PHP development',
            description: 'Aplikasi PHP yang masih menjalankan bisnis.',
            href: '/services/php-development',
          },
          {
            title: 'Website maintenance (English)',
            description: 'Halaman yang sama untuk klien English.',
            href: '/services/website-maintenance',
          },
        ]}
        closingTitle="Kirim URL dan apa yang rusak terakhir"
        closingBody="Saya balas dalam 24 jam. Kalau situsnya lebih butuh bangun ulang daripada dirawat, saya bilang."
        closingHref={contactHref('maintenance')}
        closingLabel="Kirim URL websitenya"
      />
    </>
  )
}
