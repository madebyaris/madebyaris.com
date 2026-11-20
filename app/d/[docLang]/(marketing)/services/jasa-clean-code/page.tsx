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

const linkClass = 'underline decoration-[#CBD5E1] underline-offset-4 hover:text-[#3A57FC] transition-colors'

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
    question: 'Kami punya bug atau bagian berantakan tertentu dari kode hasil AI. Bisa perbaiki bagian itu saja?',
    answer: 'Bisa. Tanyakan layanan perbaikan terfokus untuk kode hasil AI yang ada di tautan terkait di bawah.',
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
      eyebrow={{ icon: <Sparkles className="w-4 h-4 text-[#FFB866]" />, label: 'Clean code untuk tim dan AI' }}
      title="Clean code yang bisa diikuti tim"
      accent="dan AI agent kamu"
      intro={
        <p>
          Tool coding AI membuat volume kode bertambah jauh lebih cepat, dan codebase yang berantakan memperparah masalahnya.
          Saya rapikan strukturnya, menyusun konvensi yang dipatuhi developer maupun AI agent, dan memasang aturan serta
          pengecekan otomatis agar codebase tetap bersih saat tim kamu merilis lebih cepat.
        </p>
      }
      signsTitle="Tanda codebase kamu butuh clean code"
      signs={[
        'Pull request yang ditulis dengan bantuan AI susah di-review',
        'AI agent terus mengulang kesalahan yang sama atau mengarang fungsi yang sebenarnya tidak ada',
        'Belum ada kesepakatan jelas di tim soal di mana file atau logika baru harus diletakkan',
        'Developer ragu mengubah kode lama karena takut merusak bagian lain',
      ]}
      offersTitle="Yang saya kerjakan"
      offers={[
        {
          title: 'Petakan dan sederhanakan struktur',
          body: 'Susunan folder dan batas modul yang jelas agar developer maupun AI agent langsung tahu di mana perubahan kode seharusnya masuk.',
        },
        {
          title: 'Konvensi tertulis',
          body: 'Menyusun AGENTS.md dan project rules yang menjelaskan standar penulisan kode di repo kamu untuk tim maupun AI agent.',
        },
        {
          title: 'Pagar pengaman otomatis',
          body: 'Linting, type checking, dan automated test yang menangkap kesalahan sebelum tahap review, baik untuk kode tulisan manusia maupun AI.',
        },
        {
          title: 'Checklist review untuk kode AI',
          body: 'Checklist singkat yang dipakai reviewer pada pull request hasil AI.',
          href: '/blog/pr-review-checklist-for-ai-generated-code',
          cta: 'Baca checklist (bahasa Inggris)',
        },
        {
          title: 'Rapikan titik paling bermasalah',
          body: 'Membenahi file-file yang paling sering menimbulkan bug tanpa membongkar bagian yang sudah stabil.',
        },
        {
          title: 'Latih tim',
          body: 'Sesi praktis di mana developer kamu mempelajari aturan baru langsung di repo kamu sendiri.',
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
        { title: 'Tinjau', desc: 'Saya baca codebase kamu dan mencatat apa saja yang memperlambat developer serta AI agent.' },
        { title: 'Sepakati', desc: 'Kamu memilih perbaikan mana yang paling prioritas, lalu kita susun konvensinya bersama.' },
        { title: 'Terapkan', desc: 'Saya rapikan bagian yang paling bermasalah lalu memasang aturan serta pengecekan otomatis.' },
        { title: 'Serah terima', desc: 'Tim kamu memegang aturannya secara penuh, dan saya jelaskan cara memakainya.' },
      ]}
      faqTitle="Pertanyaan soal clean code dan AI"
      faqs={faqs}
      alternate={{ prefix: 'English version:', label: 'see the English page', href: '/services/clean-code-for-teams-and-ai' }}
      related={[
        { href: '/services/vibe-code-friend', label: 'Mentoring Cursor' },
        { href: '/services/vibe-code-friend/code-fixing', label: 'Perbaiki kode hasil AI' },
        { href: '/services/jasa-optimasi-react', label: 'Optimasi React' },
      ]}
      ctaTitle="Diskusikan kondisi repo kamu"
      ctaBody="Ceritakan stack codebase kamu dan bagian yang paling sering bermasalah. Saya balas dalam 24 jam dengan beberapa pertanyaan lanjutan dan prioritas perbaikan yang saya sarankan."
      ctaLabel="Konsultasi clean code"
    />
  )
}
