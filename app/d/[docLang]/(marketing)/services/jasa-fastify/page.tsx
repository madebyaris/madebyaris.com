import type { Metadata } from 'next'
import { Server } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/jasa-fastify'
const pageTitle = 'Jasa pengembangan API Node.js dengan Fastify'
const pageDescription =
  'Bangun API Node.js baru dengan Fastify, atau pindahkan aplikasi Express: route tervalidasi, plugin, logging, dan test, dalam struktur yang mudah dikembangkan.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: ['jasa Fastify', 'Fastify vs Express', 'jasa pembuatan API Node.js', 'Express ke Fastify', 'developer Fastify'],
})

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya API dengan Fastify?',
    answer:
      'Tergantung jumlah endpoint dan sistem yang terhubung. Proyek mulai dari USD 5.000. Setelah konsultasi singkat, kamu menerima rencana tertulis dan penawaran harga sebelum ada kode yang ditulis.',
  },
  {
    question: 'Fastify atau Express?',
    answer:
      'Express cukup untuk API kecil. Fastify jadi fondasi yang lebih baik saat kamu ingin input tervalidasi, logging terstruktur, dan struktur plugin yang jelas seiring API tumbuh. Ceritakan apa yang kamu punya dan saya bilang mana yang cocok.',
  },
  {
    question: 'Bisakah aplikasi Express dipindahkan tanpa menulis ulang?',
    answer:
      'Biasanya bisa. Saya pindahkan route demi route dan menjaga test tetap lulus, jadi API tetap berjalan sementara isinya berubah.',
  },
  {
    question: 'Bisakah database-nya sekalian dibenahi?',
    answer: 'Bisa. API yang cepat butuh query yang cepat, dan optimasi database saya tawarkan sebagai layanan terpisah.',
  },
]

export default function JasaFastifyPage() {
  return (
    <SpecialistLanding
      locale="id"
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="Fastify development"
      breadcrumbName="Jasa Fastify"
      eyebrow={{ icon: <Server className="w-4 h-4 text-orange-500" />, label: 'Jasa Fastify' }}
      title="API Node.js yang cepat"
      accent="dan mudah dikembangkan tim"
      intro={
        <p>
          Fastify adalah framework Node.js dengan validasi input bawaan, logging terstruktur, dan sistem plugin. Saya membangun
          API baru di atasnya dan memindahkan aplikasi Express ke sana, lengkap dengan test dan struktur yang menjaga kode tetap
          terbaca seiring API tumbuh.
        </p>
      }
      signsTitle="Tanda kamu butuh ini"
      signs={[
        'API Node kamu lambat saat beban naik, atau waktu responsnya naik turun',
        'Data request tidak divalidasi, dan input buruk sampai ke database',
        'Route dan middleware sudah jadi sesuatu yang tidak ada yang mau sentuh',
        'Kamu memulai back end baru dan ingin fondasi yang kokoh',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'API baru di atas Fastify',
          body: 'Route dengan validasi schema, plugin untuk logika bersama, logging terstruktur, dan test sejak endpoint pertama.',
        },
        {
          title: 'Pindah dari Express',
          body: 'Migrasi route demi route selagi test tetap lulus, jadi API tetap live.',
        },
        {
          title: 'Performa dan load test',
          body: 'Cari endpoint yang lambat di bawah beban realistis dan perbaiki, termasuk query di belakangnya.',
          href: '/services/jasa-optimasi-database',
          cta: 'Lihat optimasi database',
        },
        {
          title: 'TypeScript dan struktur',
          body: 'Route bertipe, susunan folder yang jelas, dan konvensi yang ditulis untuk tim kamu.',
        },
        {
          title: 'Front end React yang serasi',
          body: 'Aplikasi Vite dan React yang terhubung ke API, dibangun dan di-deploy bersama.',
          href: '/services/jasa-vite',
          cta: 'Lihat jasa Vite',
        },
        {
          title: 'Clean code untuk tim dan AI',
          body: 'Aturan dan pengecekan yang menjaga API tetap rapi saat developer dan AI agent menambah route.',
          href: '/services/jasa-clean-code',
          cta: 'Lihat jasa clean code',
        },
      ]}
      sourceNote="Server web app baru x.com dilaporkan berjalan di atas Fastify (laporan teknik X, diberitakan iTechPost, 5 November 2026)."
      steps={[
        { title: 'Scope', desc: 'Kita sepakati endpoint, datanya, dan arti respons cepat bagi kamu.' },
        { title: 'Bangun atau pindah', desc: 'Saya bangun API-nya, atau memindahkan milik kamu route demi route, dengan test.' },
        { title: 'Load test', desc: 'Saya uji di bawah trafik realistis dan memperbaiki yang lambat.' },
        { title: 'Serah terima', desc: 'Kamu menerima kode di repo kamu dan catatan yang bisa diikuti tim.' },
      ]}
      faqTitle="Pertanyaan soal Fastify"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/fastify-development' }}
      related={[
        { href: '/services/jasa-optimasi-database', label: 'Optimasi database' },
        { href: '/services/jasa-vite', label: 'Jasa Vite' },
        { href: '/jasa-pengembangan-produk', label: 'Pengembangan produk' },
      ]}
      ctaTitle="Kirim API kamu"
      ctaBody="Ceritakan apa yang dikerjakan API itu dan di mana masalahnya. Saya balas dalam 24 jam dengan pertanyaan atau jawaban jujur tentang apa yang akan saya ubah lebih dulu."
      ctaLabel="Kirim API kamu"
    />
  )
}
