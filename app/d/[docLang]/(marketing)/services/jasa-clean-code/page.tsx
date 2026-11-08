import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/jasa-clean-code'
const pageTitle = 'Jasa clean code untuk tim dan AI agent'
const pageDescription =
  'Buat codebase mudah dibaca dan diubah oleh developer dan AI agent: struktur, konvensi, test, dan aturan Cursor, tanpa menulis ulang semuanya. Mulai USD 5.000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: [
    'clean code adalah',
    'jasa clean code',
    'merapikan codebase',
    'AGENTS.md',
    'aturan Cursor',
    'review kode hasil AI',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya merapikan codebase?',
    answer:
      'Tergantung ukuran codebase dan seberapa banyak bagian yang berantakan. Proyek mulai dari USD 5.000. Setelah konsultasi singkat, kamu menerima rencana tertulis dan penawaran harga sebelum ada kode yang diubah.',
  },
  {
    question: 'Apa bedanya dengan mentoring Cursor?',
    answer:
      'Mentoring Cursor melatih developer kamu memakai alatnya. Layanan ini mengubah codebase-nya sendiri: struktur, aturan tertulis, dan pengecekannya.',
  },
  {
    question: 'Apakah kode kami ditulis ulang?',
    answer:
      'Tidak. Saya rapikan bagian yang paling bermasalah, menambah aturan dan pengecekan, dan membiarkan sisanya. Seberapa jauh kita melangkah, kamu yang putuskan.',
  },
  {
    question: 'Kami punya kekacauan tertentu dari kode hasil AI. Bisa diperbaiki saja yang itu?',
    answer: 'Bisa. Tanyakan layanan perbaikan terfokus untuk kode hasil AI, yang ada di tautan terkait di bawah.',
  },
]

export default function JasaCleanCodePage() {
  return (
    <SpecialistLanding
      locale="id"
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="Codebase cleanup and AI coding standards"
      breadcrumbName="Clean code"
      eyebrow={{ icon: <Sparkles className="w-4 h-4 text-orange-500" />, label: 'Clean code untuk tim dan AI' }}
      title="Clean code yang bisa diikuti tim"
      accent="dan AI agent kamu"
      intro={
        <p>
          Alat coding AI menulis lebih banyak kode, dan kode yang berantakan membuatnya makin buruk. Saya rapikan strukturnya,
          menyusun konvensi yang diikuti developer dan agent kamu, dan memasang aturan serta pengecekan yang menjaga codebase
          tetap rapi selagi kamu merilis lebih cepat.
        </p>
      }
      signsTitle="Tanda codebase kamu butuh ini"
      signs={[
        'Pull request yang ditulis dengan AI susah di-review',
        'Agent mengulang kesalahan yang sama atau mengarang kode yang tidak ada',
        'Tidak ada yang sepakat di mana sesuatu harus diletakkan',
        'Developer takut mengubah kode lama',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'Petakan dan sederhanakan struktur',
          body: 'Susunan folder dan batas yang jelas, supaya orang atau agent bisa menemukan di mana sebuah perubahan seharusnya masuk.',
        },
        {
          title: 'Konvensi tertulis',
          body: 'AGENTS.md dan aturan proyek yang memberi tahu tim dan agent kamu bagaimana kode ditulis di sini.',
        },
        {
          title: 'Pagar pengaman',
          body: 'Linting, tipe, dan test yang menangkap kesalahan sebelum review, baik kodenya ditulis orang maupun agent.',
        },
        {
          title: 'Checklist review untuk kode AI',
          body: 'Checklist singkat yang dipakai reviewer pada pull request hasil AI.',
          href: '/blog/pr-review-checklist-for-ai-generated-code',
          cta: 'Baca checklist (bahasa Inggris)',
        },
        {
          title: 'Rapikan bagian terburuk',
          body: 'Merapikan beberapa file yang menyebabkan kebanyakan masalah dan membiarkan sisanya.',
        },
        {
          title: 'Latih tim',
          body: 'Sesi di mana developer kamu mempelajari aturan baru di repo kamu sendiri.',
          href: '/services/vibe-code-friend',
          cta: 'Lihat mentoring Cursor',
        },
      ]}
      proof={{
        title: 'Karya publik yang bisa kamu baca',
        body: (
          <p>
            Saya mempublikasikan aturan Cursor dan toolkit spec-driven untuk Cursor secara terbuka:{' '}
            <Link href="https://github.com/madebyaris/spec-kit-command-cursor" className={linkClass}>
              spec-kit-command-cursor
            </Link>
            . Untuk perbaikan terfokus pada kode hasil AI, lihat{' '}
            <Link href="/services/vibe-code-friend/code-fixing" className={linkClass}>
              memperbaiki kode hasil AI
            </Link>
            .
          </p>
        ),
      }}
      steps={[
        { title: 'Tinjau', desc: 'Saya baca codebase dan mendaftar apa yang memperlambat orang dan agent.' },
        { title: 'Sepakati', desc: 'Kamu memilih perbaikan mana yang layak dikerjakan, dan kita menulis konvensinya.' },
        { title: 'Terapkan', desc: 'Saya rapikan bagian terburuk dan memasang aturan serta pengecekan.' },
        { title: 'Serah terima', desc: 'Tim kamu memegang aturannya, dan saya tunjukkan cara kerjanya.' },
      ]}
      faqTitle="Pertanyaan soal clean code dan AI"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/clean-code-for-teams-and-ai' }}
      related={[
        { href: '/services/vibe-code-friend', label: 'Mentoring Cursor' },
        { href: '/services/vibe-code-friend/code-fixing', label: 'Perbaiki kode hasil AI' },
        { href: '/services/jasa-optimasi-react', label: 'Optimasi React' },
      ]}
      ctaTitle="Kirim repo kamu"
      ctaBody="Ceritakan codebase-nya dan bagian yang bermasalah. Saya balas dalam 24 jam dengan pertanyaan atau jawaban jujur tentang apa yang akan saya rapikan lebih dulu."
      ctaLabel="Kirim repo kamu"
    />
  )
}
