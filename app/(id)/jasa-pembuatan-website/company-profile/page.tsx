import type { Metadata } from 'next'
import Link from 'next/link'
import { Building } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): harga mulai untuk website company profile.
// TODO(aris): tautan dari tulisan /blog/jasa-website-company-profile-nextjs-vs-template ke halaman ini (CMS).

export const revalidate = 86400

const path = '/jasa-pembuatan-website/company-profile'
const pageTitle = 'Jasa pembuatan website company profile'
const pageDescription =
  'Jasa pembuatan website company profile: halaman perusahaan, layanan, dan kontak yang cepat di HP. WordPress atau Next.js, penawaran tertulis sebelum mulai.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'Apa isi website company profile?',
    answer:
      'Biasanya beranda, tentang perusahaan, layanan, dan kontak. Kalau kamu punya halaman lain yang memang dipakai sales, itu masuk scope. Saya tidak menambahkan belasan halaman yang tidak ada isinya.',
  },
  {
    question: 'WordPress atau Next.js untuk company profile?',
    answer:
      'WordPress kalau tim kamu yang akan mengubah teks dan foto. Next.js kalau halaman harus custom dan kamu siap saya yang mengurus perubahannya, atau ada editor headless. Pilihannya ada di rencana.',
  },
  {
    question: 'Berapa harga website company profile?',
    answer:
      'Harga mengikuti jumlah halaman dan siapa yang mengupdate isinya. Kamu dapat penawaran tertulis sebelum saya mulai. Harga mulai belum saya terbitkan.',
  },
  {
    question: 'Apakah template lebih murah?',
    answer:
      'Sering iya, kalau template sudah memuat yang kamu jual. Saya tulis kapan template cukup di panduan template atau custom, supaya kamu tidak membayar custom untuk halaman yang sederhana.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Jasa pembuatan website', path: '/jasa-pembuatan-website' },
    { name: 'Company profile', path },
  ],
  service: {
    name: 'Jasa pembuatan website company profile',
    description: pageDescription,
    serviceType: 'Jasa pembuatan website company profile',
    areaServed: 'Indonesia',
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  locale: 'id_ID',
  keywords: ['jasa pembuatan website company profile'],
})

export default function CompanyProfilePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={Building}
        badge="Company profile · satu developer"
        h1="Jasa pembuatan website company profile"
        h1Accent="yang sales bisa kirim ke klien"
        intro="Untuk perusahaan yang butuh halaman tentang, layanan, dan kontak. Pengunjung bisa membacanya di HP. Tim kamu tahu siapa yang mengubah teksnya."
        primaryHref={contactHref('build')}
        primaryLabel="Kirim daftar halaman"
        secondaryHref="/blog/jasa-website-company-profile-nextjs-vs-template"
        secondaryLabel="Template atau custom?"
        proof="13+ tahun · Bahasa Indonesia dan English · Remote dari Sidoarjo"
        answerTitle="Yang termasuk jasa pembuatan website company profile"
        answer={
          <p>
            Halaman induknya{' '}
            <Link href="/jasa-pembuatan-website" className={linkClass}>
              jasa pembuatan website
            </Link>
            . Kalau situsnya harus custom dan interaktif, lihat{' '}
            <Link href="/services/nextjs-development/nextjs-indonesia" className={linkClass}>
              jasa pembuatan website Next.js
            </Link>
            . Versi English untuk WordPress ada di{' '}
            <Link href="/services/wordpress" className={linkClass}>
              hire a WordPress developer
            </Link>
            .
          </p>
        }
        familiarTitle="Kedengarannya familiar"
        poorFitTitle="Kurang cocok"
        fitIntro="Kirim daftar halaman dan siapa yang akan mengubahnya setelah online."
        pains={[
          'Profil perusahaan masih PDF, dan klien minta link',
          'Website ada, tapi berantakan di HP',
          'Tema beli jadi, dan tidak ada yang berani mengubahnya',
        ]}
        poorFit={[
          'Kamu butuh toko online dengan ratusan produk dan stok',
          'Kamu butuh aplikasi dengan login untuk pelanggan',
          'Isi halaman belum ada sama sekali dan tidak ada yang menuliskannya',
        ]}
        outcomesTitle="Yang kamu dapat"
        outcomes={[
          {
            title: 'Halaman yang memang dipakai',
            description: 'Beranda, tentang, layanan, dan kontak. Halaman lain hanya kalau ada isinya.',
          },
          {
            title: 'Cepat dibuka di HP',
            description: 'Gambar dan huruf diatur supaya halaman tidak menunggu lama.',
          },
          {
            title: 'Editor yang jelas',
            description: 'WordPress kalau tim kamu yang update. Next.js kalau situsnya custom.',
          },
          {
            title: 'Siap dibaca Google',
            description: 'Judul, deskripsi, dan sitemap dasar. Audit SEO terpisah kalau kamu memintanya.',
          },
        ]}
        stepsTitle="Cara kerjanya"
        steps={[
          { title: 'Bahan', description: 'Logo, layanan, dan contoh website yang kamu suka.' },
          { title: 'Rencana', description: 'Daftar halaman, stack, dan penawaran.' },
          { title: 'Bangun', description: 'Pratinjau untuk kamu cek isinya.' },
          { title: 'Serah', description: 'Cara mengubah teks, plus domain dan redirect kalau ini pindahan.' },
        ]}
        priceTitle="Harga"
        priceBody={
          <p>
            Harga mengikuti jumlah halaman dan stack-nya. Kamu dapat penawaran tertulis sebelum saya
            mulai. Harga mulai untuk company profile belum saya terbitkan.
          </p>
        }
        stackTitle="Kapan Next.js lebih pas"
        stackBody={
          <p>
            Company profile yang isinya teks dan foto biasanya WordPress. Next.js saya sarankan
            kalau halaman harus custom, atau company profile ini bagian dari aplikasi yang lebih
            besar. Saya tulis alasannya di rencana, sebelum kamu memilih.
          </p>
        }
        faqTitle="Pertanyaan yang sering muncul"
        faqs={faqs}
        relatedTitle="Halaman lain"
        related={[
          {
            title: 'Jasa pembuatan website',
            description: 'Hub untuk semua jenis website.',
            href: '/jasa-pembuatan-website',
          },
          {
            title: 'Website WordPress',
            description: 'Kalau editornya harus tetap di WordPress.',
            href: '/jasa-pembuatan-website/wordpress',
          },
          {
            title: 'Template atau custom',
            description: 'Panduan sebelum kamu membayar DP.',
            href: '/blog/jasa-website-company-profile-nextjs-vs-template',
          },
          {
            title: 'SEO WordPress',
            description: 'Audit teknis, mulai Rp1.500.000.',
            href: '/jasa-seo-wordpress',
          },
        ]}
        closingTitle="Kirim daftar halamannya"
        closingBody="Nama perusahaan dan empat judul halaman sudah cukup untuk balasan pertama. Saya balas dalam 24 jam."
        closingHref={contactHref('build')}
        closingLabel="Kirim daftar halaman"
      />
    </>
  )
}
