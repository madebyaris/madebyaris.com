import type { Metadata } from 'next'
import Link from 'next/link'
import { Gauge } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/jasa-optimasi-react'
const pageTitle = 'Jasa optimasi performa aplikasi React'
const pageDescription =
  'Aplikasi React kamu lambat atau susah diubah? Saya ukur penyebabnya, perbaiki yang terbesar dulu, dan tunjukkan angka sebelum dan sesudah. Mulai USD 5.000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: [
    'jasa optimasi React',
    'optimasi performa React',
    'jasa React JS',
    'aplikasi React lambat',
    'ukuran bundle React',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya optimasi performa React?',
    answer:
      'Tergantung ukuran aplikasi dan jumlah layar yang lambat. Proyek mulai dari USD 5.000. Setelah konsultasi singkat, kamu menerima rencana tertulis dan penawaran harga sebelum ada kode yang diubah.',
  },
  {
    question: 'Apakah aplikasinya ditulis ulang?',
    answer:
      'Biasanya tidak. Saya perbaiki penyebab terbesar dulu di kode yang sudah ada, dan kita berhenti saat angkanya cukup baik untuk pengguna kamu.',
  },
  {
    question: 'Bagaimana kita tahu perbaikannya berhasil?',
    answer:
      'Saya jalankan tes yang sama sebelum dan sesudah, di koneksi yang diperlambat, lalu memberi kamu kedua set angkanya. Kalau satu perubahan tidak membantu, saya bilang.',
  },
  {
    question: 'Apakah bisa untuk aplikasi Next.js juga?',
    answer: 'Bisa. Lihat halaman jasa Next.js, atau kirim aplikasinya dan saya jelaskan perbaikan mana yang berlaku.',
  },
]

export default function JasaOptimasiReactPage() {
  return (
    <SpecialistLanding
      locale="id"
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="React performance optimization"
      breadcrumbName="Optimasi React"
      eyebrow={{ icon: <Gauge className="w-4 h-4 text-orange-500" />, label: 'Optimasi aplikasi React' }}
      title="Bikin aplikasi React kamu lebih cepat,"
      accent="dan lebih mudah diubah"
      intro={
        <p>
          Aplikasi React kamu lambat dibuka, terasa berat dipakai, atau susah diubah tim. Saya ukur ke mana waktunya habis,
          memperbaiki penyebab terbesar lebih dulu, lalu menunjukkan angka sebelum dan sesudah. Saya bekerja di repo kamu, jadi
          kodenya tetap milik kamu.
        </p>
      }
      signsTitle="Tanda aplikasi React kamu perlu dibenahi"
      signs={[
        'Halaman butuh beberapa detik untuk tampil di HP atau koneksi lambat',
        'Ukuran JavaScript terus bertambah di setiap rilis',
        'Layar dirender ulang tanpa alasan jelas, dan mengetik atau scroll terasa patah-patah',
        'Setiap perubahan merusak sesuatu di tempat lain',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'Ukur dulu',
          body: 'Tes di koneksi yang diperlambat dan analisis bundle, supaya kita memperbaiki yang memang lambat dan melewatkan yang tidak.',
        },
        {
          title: 'Kirim lebih sedikit JavaScript',
          body: 'Pecah aplikasi per route, muat kode berat hanya saat dibutuhkan, dan buang library yang tidak terpakai.',
        },
        {
          title: 'Benahi proses render',
          body: 'Cari komponen yang dirender terlalu sering dan state yang diletakkan di tempat yang salah.',
        },
        {
          title: 'Sederhanakan struktur',
          body: 'Pecah komponen yang terlalu besar dan sepakati konvensi, supaya perubahan berikutnya kecil.',
        },
        {
          title: 'Pindah ke Vite kalau perlu',
          body: 'Kalau build tool kamu lambat atau sudah usang, saya bisa memindahkan aplikasi ke Vite.',
          href: '/services/jasa-vite',
          cta: 'Lihat jasa Vite',
        },
        {
          title: 'Clean code untuk tim dan AI',
          body: 'Aturan dan pengecekan yang menjaga aplikasi tetap rapi saat developer dan AI agent menambah kode.',
          href: '/services/jasa-clean-code',
          cta: 'Lihat jasa clean code',
        },
      ]}
      proof={{
        title: 'Hasil dari produk saya sendiri',
        body: (
          <p>
            Di salah satu produk saya sendiri, First Contentful Paint halaman sign-in turun dari 7,4 ke 1,6 detik pada tes lab
            Slow 4G, dengan lazy route dan gambar yang lebih kecil. Ini angka lab dari satu aplikasi, jadi hasil di aplikasi kamu
            akan berbeda.{' '}
            <Link href="/blog/how-we-made-a-dashboard-fast-on-slow-networks" className={linkClass}>
              Baca tulisannya (bahasa Inggris)
            </Link>
            .
          </p>
        ),
      }}
      steps={[
        { title: 'Audit', desc: 'Saya ukur waktu muat, ukuran bundle, dan proses render di aplikasi nyata kamu.' },
        { title: 'Rencana', desc: 'Kamu menerima daftar perbaikan berurutan beserta perkiraan dampaknya.' },
        { title: 'Perbaiki', desc: 'Saya ubah kode di repo kamu satu per satu, lalu tes ulang.' },
        { title: 'Serah terima', desc: 'Kamu mendapat angka sebelum dan sesudah, plus catatan yang bisa diikuti tim.' },
      ]}
      faqTitle="Pertanyaan soal optimasi React"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/react-app-improvement' }}
      related={[
        { href: '/services/jasa-vite', label: 'Jasa Vite' },
        { href: '/services/nextjs-development/nextjs-indonesia', label: 'Jasa Next.js' },
        { href: '/jasa-pengembangan-produk', label: 'Pengembangan produk' },
      ]}
      ctaTitle="Kirim aplikasi React kamu"
      ctaBody="Kirim link atau repo dan ceritakan bagian yang terasa lambat. Saya balas dalam 24 jam dengan pertanyaan atau jawaban jujur tentang apa yang akan saya cek lebih dulu."
      ctaLabel="Kirim aplikasi React kamu"
    />
  )
}
