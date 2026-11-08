import type { Metadata } from 'next'
import Link from 'next/link'
import { Database } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/jasa-optimasi-database'
const pageTitle = 'Jasa optimasi database dan query lambat'
const pageDescription =
  'Temukan query yang lambat, pasang indeks yang tepat, dan benahi skema serta koneksi supaya database tetap cepat saat data bertambah. Proyek mulai USD 5.000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: [
    'jasa optimasi database',
    'optimasi database',
    'query lambat',
    'tuning performa database',
    'optimasi PostgreSQL',
    'optimasi MySQL',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya optimasi database?',
    answer:
      'Tergantung ukuran database dan jumlah query yang lambat. Proyek mulai dari USD 5.000. Setelah konsultasi singkat, kamu menerima rencana tertulis dan penawaran harga sebelum ada yang diubah.',
  },
  {
    question: 'Database apa saja yang dikerjakan?',
    answer: 'PostgreSQL dan MySQL. Kalau kamu memakai yang lain, ceritakan dan saya bilang apakah saya cocok.',
  },
  {
    question: 'Apakah pekerjaannya menyebabkan downtime?',
    answer:
      'Setiap perubahan saya uji di salinan dulu dan saya buat backup sebelum menyentuh produksi. Kebanyakan perubahan indeks dan query tidak butuh downtime. Kalau ada yang butuh, saya beri tahu sebelum mulai.',
  },
  {
    question: 'Bagaimana kita tahu hasilnya berhasil?',
    answer: 'Saya ukur query dan beban kerja yang sama sebelum dan sesudah, lalu memberi kamu kedua set angkanya.',
  },
]

export default function JasaOptimasiDatabasePage() {
  return (
    <SpecialistLanding
      locale="id"
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="Database optimization"
      breadcrumbName="Optimasi database"
      eyebrow={{ icon: <Database className="w-4 h-4 text-orange-500" />, label: 'Optimasi database' }}
      title="Database yang tetap cepat"
      accent="saat datanya bertambah"
      intro={
        <p>
          Aplikasi kamu melambat saat data bertambah, atau satu laporan menahan semuanya. Saya cari query yang lambat dengan
          pengukuran nyata, memperbaikinya lewat indeks, perubahan query, dan perbaikan skema, lalu memeriksa hasilnya pada beban
          kerja yang sama.
        </p>
      }
      signsTitle="Tanda database kamu perlu disetel"
      signs={[
        'Halaman dan laporan makin lambat seiring tabel membesar',
        'Satu query berat memperlambat seluruh aplikasi',
        'Server database sibuk walau trafik sedang sepi',
        'Job batch yang memproses seribu data sekali jalan terlalu lama atau gagal',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'Temukan query yang lambat',
          body: 'Saya baca query plan dan slow-query log untuk melihat query mana yang paling mahal, supaya itu yang diperbaiki lebih dulu.',
        },
        {
          title: 'Indeks dan penulisan ulang query',
          body: 'Indeks yang tepat, dan query yang ditulis ulang di bagian yang planning-nya memperlihatkan kerja sia-sia.',
        },
        {
          title: 'Skema dan tipe data',
          body: 'Memperbaiki desain tabel dan tipe kolom yang membuat query lebih lambat dari seharusnya.',
        },
        {
          title: 'Koneksi dan caching',
          body: 'Connection pooling dan caching di tempat yang tepat, supaya database mengerjakan lebih sedikit pekerjaan berulang.',
        },
        {
          title: 'Pekerjaan batch dan massal',
          body: 'Menyetel job yang memproses banyak data sekaligus, misalnya seribu data per jalan.',
        },
        {
          title: 'API di depannya',
          body: 'Database yang cepat butuh API yang cepat. Saya membangun dan menyetel API Node.js di atas Fastify.',
          href: '/services/jasa-fastify',
          cta: 'Lihat jasa Fastify',
        },
      ]}
      steps={[
        { title: 'Ukur', desc: 'Saya tangkap query lambat dan beban pada kerja nyata kamu.' },
        { title: 'Urutkan', desc: 'Kamu menerima daftar perbaikan berurutan menurut waktu yang dihemat.' },
        { title: 'Perbaiki', desc: 'Saya uji tiap perubahan di salinan, lalu menerapkannya dengan backup siap.' },
        { title: 'Verifikasi', desc: 'Kita jalankan ulang beban kerja yang sama dan membandingkan angkanya.' },
      ]}
      proof={{
        title: 'Menjalankan aplikasi PHP di MySQL?',
        body: (
          <p>
            Saya juga punya halaman untuk penyetelan MySQL di aplikasi PHP, termasuk WordPress dan Laravel:{' '}
            <Link href="/services/php-development/database-solutions" className={linkClass}>
              optimasi database MySQL untuk aplikasi PHP (bahasa Inggris)
            </Link>
            .
          </p>
        ),
      }}
      faqTitle="Pertanyaan soal optimasi database"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/database-optimization' }}
      related={[
        { href: '/services/jasa-fastify', label: 'Jasa Fastify' },
        { href: '/services/php-development/database-solutions', label: 'MySQL untuk aplikasi PHP' },
        { href: '/jasa-pengembangan-produk', label: 'Pengembangan produk' },
      ]}
      ctaTitle="Kirim query lambat kamu"
      ctaBody="Ceritakan apa yang lambat dan database apa yang kamu pakai. Saya balas dalam 24 jam dengan pertanyaan atau jawaban jujur tentang apa yang akan saya ukur lebih dulu."
      ctaLabel="Kirim query lambat kamu"
    />
  )
}
