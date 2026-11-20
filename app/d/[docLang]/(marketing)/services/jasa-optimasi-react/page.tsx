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

const linkClass = 'underline decoration-[#CBD5E1] underline-offset-4 hover:text-[#3A57FC] transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya optimasi performa React?',
    answer:
      'Tergantung ukuran aplikasi dan jumlah halaman yang lambat. Proyek mulai dari USD 5.000. Setelah konsultasi singkat, kamu akan menerima rencana kerja tertulis dan penawaran harga sebelum ada kode yang diubah.',
  },
  {
    question: 'Apakah aplikasinya ditulis ulang?',
    answer:
      'Biasanya tidak. Saya perbaiki penyebab terbesar lebih dulu di kode yang sudah ada, lalu kita fokus sampai performanya benar-benar terasa cepat bagi pengguna kamu.',
  },
  {
    question: 'Bagaimana kita tahu perbaikannya berhasil?',
    answer:
      'Saya jalankan pengujian yang sama sebelum dan sesudah pada koneksi yang dibatasi, lalu menunjukkan perbandingan angkanya. Kalau sebuah perubahan ternyata tidak berdampak signifikan, saya beri tahu terus terang.',
  },
  {
    question: 'Apakah bisa untuk aplikasi Next.js juga?',
    answer: 'Bisa. Lihat halaman jasa Next.js, atau kirim link aplikasinya dan saya jelaskan perbaikan mana yang paling relevan.',
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
      eyebrow={{ icon: <Gauge className="w-4 h-4 text-[#FFB866]" />, label: 'Optimasi aplikasi React' }}
      title="Bikin aplikasi React kamu lebih cepat,"
      accent="dan lebih mudah dirawat"
      intro={
        <p>
          Aplikasi React kamu lambat dimuat, terasa berat saat dipakai, atau makin sulit diubah tim? Saya telusuri sumber
          bottleneck utamanya, memperbaiki penyebab terbesar lebih dulu, lalu menunjukkan perbandingan angka sebelum dan
          sesudah. Semua dikerjakan langsung di repo kamu, jadi kodenya tetap milik kamu.
        </p>
      }
      signsTitle="Tanda aplikasi React kamu perlu dibenahi"
      signs={[
        'Halaman butuh beberapa detik untuk tampil di HP atau koneksi lambat',
        'Ukuran bundle JavaScript terus membengkak di setiap rilis',
        'Komponen terus re-render tanpa alasan jelas, sehingga mengetik atau scroll terasa patah-patah',
        'Setiap perubahan kecil sering merusak fitur lain secara tak terduga',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'Ukur bottleneck lebih dulu',
          body: 'Pengujian pada koneksi lambat dan analisis bundle agar perbaikan tepat sasaran pada bagian yang benar-benar menghambat performa.',
        },
        {
          title: 'Perkecil ukuran JavaScript',
          body: 'Pecah kode per route, muat modul berat hanya saat dibutuhkan, dan bersihkan library yang sudah tidak terpakai.',
        },
        {
          title: 'Benahi proses render',
          body: 'Menemukan komponen yang re-render terlalu sering serta penempatan state yang membebani tampilan.',
        },
        {
          title: 'Sederhanakan struktur kode',
          body: 'Memecah komponen yang terlalu gemuk dan menyepakati konvensi agar perubahan fitur berikutnya lebih mudah dan aman.',
        },
        {
          title: 'Migrasi ke Vite kalau perlu',
          body: 'Kalau build tool kamu lambat atau sudah usang, saya bantu memindahkan aplikasi ke Vite.',
          href: '/services/jasa-vite',
          cta: 'Lihat jasa Vite',
        },
        {
          title: 'Clean code untuk tim dan AI',
          body: 'Aturan dan pengecekan otomatis yang menjaga aplikasi tetap rapi saat developer dan AI agent menambah fitur.',
          href: '/services/jasa-clean-code',
          cta: 'Lihat jasa clean code',
        },
      ]}
      proof={{
        title: 'Hasil dari produk saya sendiri',
        body: (
          <p>
            Di salah satu produk saya sendiri, First Contentful Paint halaman sign-in turun dari 7,4 ke 1,6 detik pada tes lab
            Slow 4G berkat lazy route dan optimasi ukuran gambar. Ini angka lab dari satu aplikasi, sehingga hasil di aplikasi
            kamu akan berbeda.{' '}
            <Link href="/blog/how-we-made-a-dashboard-fast-on-slow-networks" className={linkClass}>
              Baca studi kasusnya (bahasa Inggris)
            </Link>
            .
          </p>
        ),
      }}
      steps={[
        { title: 'Audit', desc: 'Saya ukur waktu muat, ukuran bundle, dan proses render langsung di aplikasi kamu.' },
        { title: 'Rencana', desc: 'Kamu menerima daftar perbaikan berurutan beserta perkiraan dampaknya.' },
        { title: 'Perbaiki', desc: 'Saya ubah kode di repo kamu satu per satu, lalu uji ulang.' },
        { title: 'Serah terima', desc: 'Kamu mendapat perbandingan angka sebelum dan sesudah, plus catatan teknis untuk tim.' },
      ]}
      faqTitle="Pertanyaan soal optimasi React"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/react-app-improvement' }}
      related={[
        { href: '/services/jasa-vite', label: 'Jasa Vite' },
        { href: '/services/nextjs-development/nextjs-indonesia', label: 'Jasa Next.js' },
        { href: '/jasa-pengembangan-produk', label: 'Pengembangan produk' },
      ]}
      ctaTitle="Diskusikan aplikasi React kamu"
      ctaBody="Kirim link atau gambaran repo dan ceritakan bagian yang terasa lambat. Saya balas dalam 24 jam dengan beberapa pertanyaan lanjutan dan langkah pertama yang akan saya cek."
      ctaLabel="Konsultasi optimasi React"
    />
  )
}
