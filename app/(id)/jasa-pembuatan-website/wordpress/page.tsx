import type { Metadata } from 'next'
import Link from 'next/link'
import { Layout } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): harga mulai untuk jasa pembuatan website WordPress.

export const revalidate = 86400

const path = '/jasa-pembuatan-website/wordpress'
const pageTitle = 'Jasa pembuatan website WordPress'
const pageDescription =
  'Jasa pembuatan website WordPress yang bisa kamu update dari wp-admin. Tema, halaman, dan dasar kecepatannya. Penawaran tertulis sebelum saya mulai.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Apa yang termasuk jasa pembuatan website WordPress?',
    answer:
      'Tema yang sesuai bahan kamu, halaman yang disepakati, dan cara editor mengubah teks tanpa menyentuh kode. Plugin yang tidak perlu saya tidak pasang.',
  },
  {
    question: 'Kapan pindah ke Next.js?',
    answer:
      'Kalau WordPress sudah tidak muat: halaman harus sangat custom, atau kamu mau front end Next.js dengan editor yang tetap di WordPress. Itu pekerjaan headless, dan saya jelaskan sebelum quote.',
  },
  {
    question: 'Berapa harganya?',
    answer:
      'Harga mengikuti jumlah halaman dan apakah ini website baru atau perbaikan. Kamu dapat penawaran sebelum saya mulai. Harga mulai belum saya terbitkan.',
  },
  {
    question: 'Apakah termasuk rawat bulanan?',
    answer:
      'Pembuatan dan perawatan adalah dua pekerjaan. Setelah online, perawatan ada di jasa maintenance website. Optimasi kecepatan sekali jalan ada di halaman WordPress speed optimization.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Jasa pembuatan website', path: '/jasa-pembuatan-website' },
    { name: 'WordPress', path },
  ],
  service: {
    name: 'Jasa pembuatan website WordPress',
    description: pageDescription,
    serviceType: 'Jasa pembuatan website WordPress',
    areaServed: 'Indonesia',
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: ['jasa pembuatan website wordpress', 'jasa wordpress'],
})

export default function JasaWordpressPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={Layout}
        badge="WordPress · wp-admin tetap kamu yang pegang"
        h1="Jasa pembuatan website WordPress"
        h1Accent="yang editornya tidak takut mengubah"
        intro="Untuk bisnis yang ingin timnya mengupdate halaman sendiri. Saya bangun temanya, lalu serahkan cara mengubah teks dan gambar."
        primaryHref={contactHref('wordpress')}
        primaryLabel="Kirim website atau brief-nya"
        secondaryHref="/services/wordpress"
        secondaryLabel="WordPress services in English"
        proof="Saya memakai WordPress sejak kerja di Hongkiat.com. Situs ini sendiri headless WordPress plus Next.js."
        answerTitle="Yang termasuk jasa pembuatan website WordPress"
        answer={
          <p>
            Ini halaman untuk WordPress. Hub-nya tetap{' '}
            <Link href="/jasa-pembuatan-website" className={linkClass}>
              jasa pembuatan website
            </Link>
            . Company profile ada di halaman sendiri. Kalau yang kamu mau adalah Next.js, buka{' '}
            <Link href="/services/nextjs-development/nextjs-indonesia" className={linkClass}>
              jasa pembuatan website Next.js
            </Link>
            .
          </p>
        }
        familiarTitle="Kedengarannya familiar"
        poorFitTitle="Kurang cocok"
        fitIntro="Kirim URL WordPress-nya kalau sudah ada, atau daftar halaman kalau ini baru."
        pains={[
          'Tema beli jadi terasa berat dan susah diubah',
          'Plugin numpuk, dan kamu tidak tahu mana yang masih dipakai',
          'Yang terakhir mengurus website sudah tidak bisa dihubungi',
        ]}
        poorFit={[
          'Kamu butuh aplikasi dengan login rumit dan laporan',
          'Kamu mau saya menulis semua isi halamannya',
          'Hosting tidak bisa dibagi aksesnya',
        ]}
        outcomesTitle="Yang kamu dapat"
        outcomes={[
          {
            title: 'wp-admin yang rapi',
            description: 'Editor mengubah halaman tanpa membuka kode.',
          },
          {
            title: 'Tema dari bahan kamu',
            description: 'Tampilan mengikuti yang kita sepakati di scope.',
          },
          {
            title: 'Plugin yang ada alasannya',
            description: 'Setiap plugin yang terpasang punya tugas. Yang tidak perlu saya lepas.',
          },
          {
            title: 'Catatan serah terima',
            description: 'Cara update, cara backup dasar, dan siapa yang pegang hosting.',
          },
        ]}
        stepsTitle="Cara kerjanya"
        steps={[
          { title: 'Lihat', description: 'Website lama atau referensi yang kamu kirim.' },
          { title: 'Rencana', description: 'Halaman, tema, dan penawaran.' },
          { title: 'Bangun', description: 'Kamu cek teksnya di pratinjau.' },
          { title: 'Serah', description: 'Akses, catatan editor, dan redirect kalau domain pindah.' },
        ]}
        priceTitle="Harga"
        priceBody={
          <p>
            Harga mengikuti scope. Kamu dapat penawaran tertulis sebelum saya mulai. Harga mulai
            untuk website WordPress belum saya terbitkan.
          </p>
        }
        stackTitle="Kapan saya sarankan pindah dari WordPress"
        stackBody={
          <p>
            Kalau editor harus tetap di WordPress tapi pengunjung butuh front end yang lebih cepat,
            saya bahas headless WordPress dengan Next.js. Kalau yang rusak cuma kecepatannya, itu
            optimasi sekali jalan. Pembuatan website baru saya tulis terpisah di rencana.
          </p>
        }
        faqTitle="Pertanyaan sebelum mulai"
        faqs={faqs}
        relatedTitle="Halaman lain"
        related={[
          {
            title: 'Jasa pembuatan website',
            description: 'Semua jenis website, Next.js termasuk di dalamnya.',
            href: '/jasa-pembuatan-website',
          },
          {
            title: 'Company profile',
            description: 'Kalau yang dibutuhkan halaman perusahaan.',
            href: '/jasa-pembuatan-website/company-profile',
          },
          {
            title: 'Headless WordPress',
            description: 'Editor WordPress, tampilan Next.js.',
            href: '/services/wordpress/headless-development',
          },
          {
            title: 'Maintenance website',
            description: 'Perawatan setelah online.',
            href: '/jasa-maintenance-website',
          },
        ]}
        closingTitle="Kirim URL WordPress-nya"
        closingBody="Kalau belum punya website, kirim daftar halaman. Saya balas dalam 24 jam."
        closingHref={contactHref('wordpress')}
        closingLabel="Kirim website atau brief-nya"
      />
    </>
  )
}
