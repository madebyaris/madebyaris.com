import type { Metadata } from 'next'
import { Zap } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/jasa-vite'
const pageTitle = 'Jasa migrasi dan pengembangan Vite'
const pageDescription =
  'Pindahkan aplikasi React ke Vite, atau bangun proyek baru di atas Vite: build lebih cepat, dev server lebih ringan, dan setup yang rapi untuk tim. Mulai USD 5.000.'

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
      eyebrow={{ icon: <Zap className="w-4 h-4 text-[#FFB866]" />, label: 'Jasa Vite' }}
      title="Pindah ke Vite,"
      accent="dan dapatkan build yang cepat lagi"
      intro={
        <p>
          Vite adalah build tool dan dev server yang dipakai banyak aplikasi React saat ini. Kalau proses build kamu lambat,
          dev server tersendat, atau tidak ada yang berani menyentuh konfigurasi build lama, saya bantu pindahkan ke Vite atau
          bangun proyek baru di atasnya, dengan setup yang rapi dan mudah dipahami tim kamu.
        </p>
      }
      signsTitle="Tanda sudah waktunya pindah ke Vite"
      signs={[
        'Proses build atau dev server butuh waktu bermenit-menit',
        'Aplikasi masih berjalan di Create React App atau setup Webpack lama',
        'File konfigurasi build sudah terlalu rumit sampai tidak ada yang berani mengubahnya',
        'Kamu ingin fondasi yang cepat dan rapi untuk aplikasi React baru',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'Migrasi ke Vite',
          body: 'Memindahkan aplikasi dari Create React App atau Webpack ke Vite di branch terpisah, dengan seluruh test berjalan sebelum dan sesudah migrasi.',
        },
        {
          title: 'Optimasi build dan dev server',
          body: 'Mengatur chunking, manajemen dependency, dan konfigurasi build agar proses kompilasi cepat dan ukuran bundle tetap ringan.',
        },
        {
          title: 'Rapikan konfigurasi dan environment',
          body: 'Satu setup yang jelas untuk environment variable, path alias, dan script, lengkap dengan dokumentasi untuk tim.',
        },
        {
          title: 'Aplikasi baru di atas Vite',
          body: 'Membangun aplikasi React dan TypeScript baru dengan test, linting, dan deployment siap pakai sejak commit pertama.',
        },
        {
          title: 'Sekalian optimasi aplikasi React-nya',
          body: 'Build yang cepat belum tentu membuat aplikasinya cepat. Performa runtime juga bisa saya ukur dan perbaiki.',
          href: '/services/jasa-optimasi-react',
          cta: 'Lihat optimasi React',
        },
        {
          title: 'API Node.js di sampingnya',
          body: 'Kalau aplikasi kamu butuh backend yang cepat, saya bangun di atas Fastify.',
          href: '/services/jasa-fastify',
          cta: 'Lihat jasa Fastify',
        },
      ]}
      sourceNote="Web app baru x.com dilaporkan dibangun di atas React, Vite, Fastify, dan TypeScript (laporan teknik X, diberitakan iTechPost, 5 November 2026)."
      steps={[
        { title: 'Tinjau', desc: 'Saya audit setup build saat ini dan menyusun daftar bagian yang perlu disesuaikan.' },
        { title: 'Migrasi', desc: 'Saya pindahkan aplikasi ke Vite di branch terpisah sambil memastikan test kamu lulus.' },
        { title: 'Bandingkan', desc: 'Kita bandingkan waktu build, ukuran bundle, dan perilaku aplikasi sebelum rilis.' },
        { title: 'Serah terima', desc: 'Kamu menerima catatan konfigurasi baru yang mudah diikuti seluruh tim.' },
      ]}
      faqTitle="Pertanyaan soal Vite"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/vite-development' }}
      related={[
        { href: '/services/jasa-optimasi-react', label: 'Optimasi React' },
        { href: '/services/jasa-fastify', label: 'Jasa Fastify' },
        { href: '/services/nextjs-development/nextjs-indonesia', label: 'Jasa Next.js' },
      ]}
      ctaTitle="Diskusikan setup build kamu"
      ctaBody="Ceritakan setup yang kamu pakai sekarang dan kendala utamanya. Saya balas dalam 24 jam dengan beberapa pertanyaan lanjutan, atau jawaban jujur apakah Vite langkah yang paling tepat."
      ctaLabel="Konsultasi migrasi Vite"
    />
  )
}
