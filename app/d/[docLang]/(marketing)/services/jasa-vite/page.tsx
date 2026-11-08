import type { Metadata } from 'next'
import { Zap } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/jasa-vite'
const pageTitle = 'Jasa migrasi dan pengembangan Vite'
const pageDescription =
  'Pindahkan aplikasi React ke Vite, atau mulai dari awal dengannya: build lebih cepat, dev server lebih ringan, dan setup yang bisa dirawat tim. Mulai USD 5.000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: ['Vite adalah', 'migrasi ke Vite', 'jasa Vite', 'Create React App ke Vite', 'Vite React'],
})

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya migrasi ke Vite?',
    answer:
      'Tergantung ukuran aplikasi dan seberapa khusus setup build saat ini. Proyek mulai dari USD 5.000. Setelah konsultasi singkat, kamu menerima rencana tertulis dan penawaran harga sebelum ada kode yang diubah.',
  },
  {
    question: 'Apakah ada yang rusak saat pindah ke Vite?',
    answer:
      'Ada beberapa hal yang perlu diperhatikan, seperti environment variable, import, dan langkah build khusus. Saya migrasi di branch terpisah, menjalankan test kamu, dan membandingkan hasil build sebelum apa pun live.',
  },
  {
    question: 'Pilih Vite atau Next.js?',
    answer:
      'Vite cocok untuk aplikasi dan dashboard yang tidak bergantung pada trafik pencarian. Next.js cocok untuk situs yang butuh server rendering dan SEO kuat. Ceritakan apa yang kamu bangun dan saya beri jawaban terus terang.',
  },
]

export default function JasaVitePage() {
  return (
    <SpecialistLanding
      locale="id"
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="Vite development"
      breadcrumbName="Jasa Vite"
      eyebrow={{ icon: <Zap className="w-4 h-4 text-orange-500" />, label: 'Jasa Vite' }}
      title="Pindah ke Vite,"
      accent="dan dapatkan build yang cepat lagi"
      intro={
        <p>
          Vite adalah build tool dan dev server yang dipakai banyak aplikasi React modern. Kalau build kamu lambat, dev server
          tersendat, atau tidak ada yang berani menyentuh setup build lama, saya pindahkan aplikasinya ke Vite, atau mulai yang
          baru di atasnya. Hasilnya setup yang bisa dibaca tim kamu.
        </p>
      }
      signsTitle="Tanda sudah waktunya pindah ke Vite"
      signs={[
        'Build atau dev server butuh waktu berminit-menit',
        'Aplikasi masih berjalan di Create React App atau setup Webpack lama',
        'File konfigurasi build yang tidak ada yang berani mengubah',
        'Kamu ingin fondasi modern untuk aplikasi React baru',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'Migrasi ke Vite',
          body: 'Memindahkan aplikasi dari Create React App atau Webpack ke Vite, di branch terpisah, dengan test kamu berjalan sebelum dan sesudah.',
        },
        {
          title: 'Penyetelan build dan dev server',
          body: 'Chunking, penanganan dependency, dan pengaturan build, supaya build cepat dan bundle tetap kecil.',
        },
        {
          title: 'Rapikan konfigurasi dan environment',
          body: 'Satu setup yang jelas untuk environment variable, alias, dan script, ditulis untuk tim.',
        },
        {
          title: 'Aplikasi baru di atas Vite',
          body: 'Aplikasi React dan TypeScript baru dengan test, linting, dan deployment yang siap sejak commit pertama.',
        },
        {
          title: 'Sekalian perbaiki aplikasi React-nya',
          body: 'Build yang cepat tidak memperbaiki aplikasi yang lambat. Itu juga bisa saya ukur dan perbaiki.',
          href: '/services/jasa-optimasi-react',
          cta: 'Lihat optimasi React',
        },
        {
          title: 'API Node.js di sampingnya',
          body: 'Kalau aplikasi butuh back end, saya bangun di atas Fastify.',
          href: '/services/jasa-fastify',
          cta: 'Lihat jasa Fastify',
        },
      ]}
      sourceNote="Web app baru x.com dilaporkan dibangun di atas React, Vite, Fastify, dan TypeScript (laporan teknik X, diberitakan iTechPost, 5 November 2026)."
      steps={[
        { title: 'Tinjau', desc: 'Saya baca setup build saat ini dan mendaftar apa saja yang akan berubah.' },
        { title: 'Migrasi', desc: 'Saya pindahkan aplikasi ke Vite di branch terpisah dan menjalankan test kamu.' },
        { title: 'Bandingkan', desc: 'Kita bandingkan waktu build, ukuran bundle, dan perilaku sebelum live.' },
        { title: 'Serah terima', desc: 'Kamu menerima catatan setup baru yang bisa diikuti tim.' },
      ]}
      faqTitle="Pertanyaan soal Vite"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/vite-development' }}
      related={[
        { href: '/services/jasa-optimasi-react', label: 'Optimasi React' },
        { href: '/services/jasa-fastify', label: 'Jasa Fastify' },
        { href: '/services/nextjs-development/nextjs-indonesia', label: 'Jasa Next.js' },
      ]}
      ctaTitle="Kirim setup build kamu"
      ctaBody="Ceritakan apa yang kamu pakai sekarang dan apa yang bermasalah. Saya balas dalam 24 jam dengan pertanyaan atau jawaban jujur apakah Vite langkah yang tepat."
      ctaLabel="Kirim setup build kamu"
    />
  )
}
