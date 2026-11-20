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
      'Biasanya bisa. Saya pindahkan route demi route sambil menjaga seluruh test tetap lulus, sehingga API tetap berjalan normal selama proses migrasi berlangsung.',
  },
  {
    question: 'Bisakah database-nya sekalian dibenahi?',
    answer: 'Bisa. API yang cepat butuh query yang cepat pula, dan optimasi database saya tawarkan sebagai layanan terpisah.',
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
      eyebrow={{ icon: <Server className="w-4 h-4 text-[#FFB866]" />, label: 'Jasa Fastify' }}
      title="API Node.js yang cepat"
      accent="dan mudah dikembangkan tim"
      intro={
        <p>
          Fastify adalah framework Node.js dengan validasi input bawaan, logging terstruktur, dan sistem plugin yang rapi. Saya
          membangun API baru di atas Fastify maupun memigrasikan aplikasi Express, lengkap dengan test dan struktur kode yang
          tetap mudah dirawat seiring API berkembang.
        </p>
      }
      signsTitle="Tanda kamu butuh jasa Fastify"
      signs={[
        'API Node.js kamu melambat saat beban naik, atau waktu responsnya tidak stabil',
        'Data request tidak tervalidasi dengan ketat sehingga input rusak sampai ke database',
        'Struktur route dan middleware sudah terlalu rumit sampai tim ragu menyentuhnya',
        'Kamu sedang memulai backend baru dan butuh fondasi yang solid sejak awal',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'API baru di atas Fastify',
          body: 'Route dengan validasi schema, plugin untuk logika bersama, logging terstruktur, dan test sejak endpoint pertama.',
        },
        {
          title: 'Migrasi dari Express',
          body: 'Memindahkan route demi route sambil menjaga test tetap lulus, sehingga API tetap live tanpa gangguan.',
        },
        {
          title: 'Performa dan load test',
          body: 'Mencari endpoint yang melambat di bawah beban realistis lalu memperbaikinya, termasuk query database di belakangnya.',
          href: '/services/jasa-optimasi-database',
          cta: 'Lihat optimasi database',
        },
        {
          title: 'TypeScript dan struktur kode',
          body: 'Route dengan tipe TypeScript yang ketat, susunan folder rapi, dan konvensi kode yang jelas untuk tim kamu.',
        },
        {
          title: 'Frontend React yang terintegrasi',
          body: 'Aplikasi Vite dan React yang tersambung rapi ke API, dibangun dan di-deploy bersama.',
          href: '/services/jasa-vite',
          cta: 'Lihat jasa Vite',
        },
        {
          title: 'Clean code untuk tim dan AI',
          body: 'Aturan dan pengecekan otomatis yang menjaga API tetap rapi saat developer dan AI agent menambah route baru.',
          href: '/services/jasa-clean-code',
          cta: 'Lihat jasa clean code',
        },
      ]}
      sourceNote="Server web app baru x.com dilaporkan berjalan di atas Fastify (laporan teknik X, diberitakan iTechPost, 5 November 2026)."
      steps={[
        { title: 'Scope', desc: 'Kita sepakati daftar endpoint, struktur data, dan target kecepatan respons yang kamu butuhkan.' },
        { title: 'Bangun atau migrasi', desc: 'Saya bangun API-nya, atau memindahkan sistem lama route demi route dengan test.' },
        { title: 'Load test', desc: 'Saya uji di bawah simulasi trafik realistis dan memperbaiki bagian yang lambat.' },
        { title: 'Serah terima', desc: 'Kamu menerima kode langsung di repo kamu lengkap dengan catatan teknis untuk tim.' },
      ]}
      faqTitle="Pertanyaan soal Fastify"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/fastify-development' }}
      related={[
        { href: '/services/jasa-optimasi-database', label: 'Optimasi database' },
        { href: '/services/jasa-vite', label: 'Jasa Vite' },
        { href: '/jasa-pengembangan-produk', label: 'Pengembangan produk' },
      ]}
      ctaTitle="Diskusikan API Node.js kamu"
      ctaBody="Ceritakan fungsi API kamu dan kendala utamanya. Saya balas dalam 24 jam dengan beberapa pertanyaan lanjutan dan langkah pertama yang akan saya benahi."
      ctaLabel="Konsultasi jasa Fastify"
    />
  )
}
