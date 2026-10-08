import type { Metadata } from 'next'
import Link from 'next/link'
import { AppWindow } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): harga mulai untuk jasa pembuatan aplikasi web.

export const revalidate = 86400

const path = '/jasa-pembuatan-aplikasi-web'
const pageTitle = 'Jasa pembuatan aplikasi web'
const pageDescription =
  'Jasa pembuatan aplikasi web dengan login, dashboard, dan data. Next.js atau PHP. Aplikasi native Android dan iOS di luar pekerjaan ini.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Apa bedanya aplikasi web dan website?',
    answer:
      'Website company profile mostly dibaca. Aplikasi web dipakai: ada akun, ada data, ada layar yang berubah menurut penggunanya. Kalau yang kamu butuh halaman profil perusahaan, itu jasa pembuatan website.',
  },
  {
    question: 'Apakah termasuk aplikasi Android?',
    answer:
      'Tidak. Saya membuat aplikasi yang berjalan di browser. Aplikasi native Android dan iOS di luar pekerjaan ini. Kalau itu yang kamu cari, saya bilang di balasan pertama.',
  },
  {
    question: 'Next.js atau PHP?',
    answer:
      'Next.js untuk produk baru. PHP kalau sistem yang ada sudah PHP, atau servernya harus tetap di hosting yang kamu kenal. Pilihannya masuk rencana tertulis.',
  },
  {
    question: 'Berapa harganya?',
    answer:
      'Harga mengikuti alur kerja yang harus dibangun. Kamu dapat penawaran sebelum saya mulai. Harga mulai belum saya terbitkan.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [{ name: 'Jasa pembuatan aplikasi web', path }],
  service: {
    name: 'Jasa pembuatan aplikasi web',
    description: pageDescription,
    serviceType: 'Jasa pembuatan aplikasi web',
    areaServed: 'Indonesia',
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: ['jasa pembuatan aplikasi web', 'jasa pembuatan aplikasi'],
})

export default function JasaAplikasiWebPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={AppWindow}
        badge="Aplikasi web · login dan data"
        h1="Jasa pembuatan aplikasi web"
        h1Accent="yang dipakai setiap hari"
        intro="Untuk bisnis yang butuh alat kerja di browser: akun, dashboard, atau portal. Saya kerjakan sendiri, dari scope sampai serah terima repository."
        primaryHref={contactHref('web-app')}
        primaryLabel="Kirim alur kerjanya"
        secondaryHref="/services/web-application-development"
        secondaryLabel="Web application services (English)"
        proof="13+ tahun · Next.js dan PHP · Remote dari Sidoarjo"
        answerTitle="Yang termasuk jasa pembuatan aplikasi web"
        answer={
          <p>
            Kata yang lebih luas, jasa pembuatan aplikasi, sering mengarah ke aplikasi HP. Halaman
            ini khusus aplikasi web. Versi English-nya{' '}
            <Link href="/services/web-application-development" className={linkClass}>
              web application development services
            </Link>
            . Next.js sebagai stack andalan ada di{' '}
            <Link href="/services/nextjs-development/nextjs-indonesia" className={linkClass}>
              jasa pembuatan website Next.js
            </Link>
            . PHP ada di{' '}
            <Link href="/services/php-development/custom-applications" className={linkClass}>
              custom PHP applications
            </Link>
            .
          </p>
        }
        familiarTitle="Kedengarannya familiar"
        poorFitTitle="Kurang cocok"
        fitIntro="Ceritakan siapa yang login dan apa yang mereka lakukan di layar pertama."
        pains={[
          'Data pelanggan masih di spreadsheet dan chat',
          'Staf butuh dashboard, dan website biasa tidak memuatnya',
          'Aplikasi lama masih jalan, tapi yang pegang kodenya sudah pergi',
        ]}
        poorFit={[
          'Kamu butuh aplikasi di Play Store atau App Store',
          'Alurnya berubah tiap hari dan belum bisa diceritakan',
          'Kamu butuh beberapa developer sekaligus dari minggu pertama',
        ]}
        outcomesTitle="Yang kamu dapat"
        outcomes={[
          {
            title: 'Akun dan peran',
            description: 'Setiap orang melihat layar yang memang untuknya.',
          },
          {
            title: 'Data yang punya tempat',
            description: 'Catatan ada di database, dengan struktur yang developer lain bisa baca.',
          },
          {
            title: 'Repository milik kamu',
            description: 'Kode ada di Git kamu, plus catatan serah terima.',
          },
          {
            title: 'Stack yang sesuai pekerjaan',
            description: 'Next.js untuk yang baru. PHP kalau sistem lama harus tetap di situ.',
          },
        ]}
        stepsTitle="Cara kerjanya"
        steps={[
          { title: 'Alur', description: 'Kamu jelaskan siapa login dan apa yang mereka selesaikan.' },
          { title: 'Rencana', description: 'Scope, stack, dan penawaran sebelum kode.' },
          { title: 'Bangun', description: 'Pratinjau yang bisa dicoba dengan akun contoh.' },
          { title: 'Serah', description: 'Repository, hosting, dan daftar yang sengaja tidak dibuat.' },
        ]}
        priceTitle="Harga"
        priceBody={
          <p>
            Harga mengikuti scope. Kamu dapat rencana tertulis dan penawaran sebelum saya mulai.
            Harga mulai untuk aplikasi web belum saya terbitkan.
          </p>
        }
        stackTitle="Kapan website biasa lebih pas"
        stackBody={
          <p>
            Kalau yang dibutuhkan halaman perusahaan, layanan, dan kontak, itu jasa pembuatan
            website, seringnya WordPress. Aplikasi web saya sarankan kalau ada akun dan data.
            Next.js tetap stack yang saya pilih lebih dulu untuk produk baru.
          </p>
        }
        faqTitle="Pertanyaan sebelum mulai"
        faqs={faqs}
        relatedTitle="Halaman lain"
        related={[
          {
            title: 'Jasa pembuatan website',
            description: 'Untuk company profile dan website yang lebih sederhana.',
            href: '/jasa-pembuatan-website',
          },
          {
            title: 'Next.js di Indonesia',
            description: 'Stack andalan untuk produk dan website custom.',
            href: '/services/nextjs-development/nextjs-indonesia',
          },
          {
            title: 'Aplikasi PHP',
            description: 'Kalau sistemnya harus tetap PHP.',
            href: '/services/php-development/custom-applications',
          },
          {
            title: 'Maintenance website',
            description: 'Perawatan setelah aplikasi online.',
            href: '/jasa-maintenance-website',
          },
        ]}
        closingTitle="Kirim alur kerjanya, meski masih berantakan"
        closingBody="Siapa yang login dan satu layar yang mereka butuhkan sudah cukup. Saya balas dalam 24 jam."
        closingHref={contactHref('web-app')}
        closingLabel="Kirim alur kerjanya"
      />
    </>
  )
}
