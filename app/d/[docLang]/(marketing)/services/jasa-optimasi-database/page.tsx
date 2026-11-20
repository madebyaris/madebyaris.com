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

const linkClass = 'underline decoration-[#CBD5E1] underline-offset-4 hover:text-[#3A57FC] transition-colors'

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
      eyebrow={{ icon: <Database className="w-4 h-4 text-[#FFB866]" />, label: 'Optimasi database' }}
      title="Database yang tetap cepat"
      accent="saat datanya bertambah"
      intro={
        <p>
          Aplikasi kamu makin lambat seiring data bertambah, atau satu halaman laporan membuat seluruh sistem tersendat? Saya
          telusuri query yang lambat lewat pengukuran nyata, memperbaikinya dengan indeks, penulisan ulang query, dan pembenahan
          skema, lalu memverifikasi hasilnya pada beban kerja yang sama.
        </p>
      }
      signsTitle="Tanda database kamu perlu dioptimasi"
      signs={[
        'Halaman dan laporan makin lambat seiring tabel membesar',
        'Satu query berat ikut memperlambat seluruh aplikasi',
        'Server database sibuk walau trafik sedang sepi',
        'Batch job untuk memproses ribuan data sekaligus berjalan terlalu lama atau sering timeout',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'Temukan query yang lambat',
          body: 'Saya analisis query plan dan slow-query log untuk melihat query mana yang paling membebani server, supaya itu yang dibereskan lebih dulu.',
        },
        {
          title: 'Indeks dan penulisan ulang query',
          body: 'Memasang indeks yang tepat dan menulis ulang query yang eksekusinya tidak efisien berdasarkan hasil query plan.',
        },
        {
          title: 'Skema dan tipe data',
          body: 'Memperbaiki desain tabel dan tipe kolom yang membuat query bekerja lebih lambat dari seharusnya.',
        },
        {
          title: 'Koneksi dan caching',
          body: 'Connection pooling dan caching di titik yang tepat agar database tidak terus-menerus memproses beban berulang.',
        },
        {
          title: 'Optimasi batch job dan proses massal',
          body: 'Menyetel job yang memproses ribuan data sekaligus agar selesai lebih cepat dan stabil.',
        },
        {
          title: 'API di lapisannya',
          body: 'Database yang cepat butuh API yang cepat pula. Saya membangun dan mengoptimasi API Node.js di atas Fastify.',
          href: '/services/jasa-fastify',
          cta: 'Lihat jasa Fastify',
        },
      ]}
      steps={[
        { title: 'Ukur', desc: 'Saya catat query lambat dan beban kerja langsung dari penggunaan nyata aplikasi kamu.' },
        { title: 'Urutkan', desc: 'Kamu menerima daftar perbaikan yang diurutkan berdasarkan dampak tercepat.' },
        { title: 'Perbaiki', desc: 'Setiap perubahan diuji dulu di database staging, lalu diterapkan dengan backup lengkap.' },
        { title: 'Verifikasi', desc: 'Kita jalankan ulang beban kerja yang sama dan membandingkan angka sebelum dan sesudahnya.' },
      ]}
      proof={{
        title: 'Menjalankan aplikasi PHP di MySQL?',
        body: (
          <p>
            Saya juga punya halaman khusus untuk optimasi MySQL di aplikasi PHP, termasuk WordPress dan Laravel:{' '}
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
      ctaTitle="Diskusikan masalah database kamu"
      ctaBody="Ceritakan query atau halaman yang lambat serta database yang kamu pakai. Saya balas dalam 24 jam dengan beberapa pertanyaan lanjutan dan hal pertama yang akan saya ukur."
      ctaLabel="Konsultasi optimasi database"
    />
  )
}
