import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Plug,
  Rocket,
  Server,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/jasa-implementasi-ai'
const pageTitle = 'Implementasi AI untuk perusahaan di Indonesia'
const pageDescription =
  'Bawa pilot AI perusahaan kamu ke produksi, atau tambah fitur AI di sistem yang sudah ada. Dipimpin langsung oleh engineer senior, 13+ tahun.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/ai-integration.jpg',
  locale: 'id_ID',
  keywords: [
    'jasa implementasi AI',
    'implementasi AI perusahaan',
    'konsultan AI Indonesia',
    'jasa pembuatan AI',
    'jasa AI agent',
    'AI hukum Indonesia',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const offers = [
  {
    icon: Rocket,
    title: 'Pilot AI ke produksi',
    body: 'Pilot kamu jalan di demo. Saya tambahkan test case dari data kamu sendiri, logging, penanganan error, dan batas biaya model, lalu serahkan ke tim kamu.',
  },
  {
    icon: Plug,
    title: 'Fitur AI di produk yang sudah ada',
    body: 'Asisten yang menjawab dari data perusahaan, pencarian, ringkasan, atau agent yang memanggil sistem kamu. Dikerjakan di repo kamu, tanpa menulis ulang aplikasi.',
  },
  {
    icon: Server,
    title: 'Arsitektur dan infrastruktur',
    body: 'Software, stack, jaringan, dan VPS dirancang sekaligus, supaya sistem AI tetap kuat saat datanya banyak. Saya juga memperbaiki harness LLM, yaitu kode di sekitar model yang mengatur prompt, tool, dan retry.',
  },
  {
    icon: Building2,
    title: 'Retainer engineering',
    body: 'Blok kerja bulanan tetap untuk pekerjaan fitur AI, update model, dan perbaikan setelah rilis.',
  },
]

const projectNotes = [
  {
    title: 'AI SEO yang meriset, menulis, dan menguji sendiri',
    problem:
      'Tim konten menebak topik dan judul yang akan berhasil, dan belajarnya lambat karena setiap uji coba butuh kerja manual.',
    built:
      'Sistem AI yang meriset topik sendiri, menulis kontennya, menjalankan A/B test pada beberapa versi, lalu memakai hasil setiap uji untuk memilih lebih baik di konten berikutnya.',
  },
  {
    title: 'AI hukum Indonesia yang berpijak pada pengetahuan pakar',
    problem:
      'Model umum menjawab pertanyaan hukum Indonesia dari apa yang ia ingat saja. Itu belum cukup untuk pekerjaan hukum.',
    built:
      'Aplikasi AI yang dilatih dengan masukan dosen dan guru besar hukum Indonesia, sehingga jawabannya memakai pengetahuan pakar, selain pengetahuan bawaan model.',
  },
  {
    title: 'Arsitektur lengkap untuk produk AI bervolume tinggi',
    problem:
      'Produk AI yang lancar untuk beberapa data bisa tumbang saat harus memproses seribu data sekaligus.',
    built:
      'Seluruh arsitekturnya: software, stack, jaringan, dan VPS, disetel supaya sanggup memproses seribu data dalam satu kali jalan. Harness LLM-nya juga saya perbaiki.',
  },
]

const procurementAnswers = [
  {
    question: 'Siapa yang mengerjakan?',
    answer: 'Saya memimpin setiap proyek dan kamu berbicara langsung dengan saya. Partner tepercaya bergabung saat proyek butuh lebih banyak tangan, dan agen AI mengerjakan banyak bagian pembangunan, sehingga kami bisa bergerak cepat. Saya memberi tahu kamu sebelum partner bergabung, dan siapa yang boleh mengakses kode dan data kamu, termasuk partner dan alat AI, kita sepakati tertulis sebelum pekerjaan dimulai.',
  },
  {
    question: 'Apakah bisa di bawah NDA?',
    answer: 'Bisa. Semua proyek saya sebelumnya juga berjalan di bawah NDA, jadi nama klien tidak saya tampilkan di mana pun.',
  },
  {
    question: 'Siapa pemilik kodenya?',
    answer:
      'Kode, prompt, dan test case ada di repositori kamu. Sesuai ketentuan saya, hasil kerja yang dibuat untuk proyek kamu menjadi milik kamu setelah pembayaran lunas.',
  },
  {
    question: 'Bagaimana serah terimanya?',
    answer: 'Kamu mendapat catatan cara sistem tersusun, dalam kode yang bisa dibaca dan dikembangkan tim kamu. Retainer untuk update model dan perbaikan bersifat opsional.',
  },
  {
    question: 'Bagaimana dengan biaya dan risiko?',
    answer: 'Logging dan batas biaya model dipasang sejak rilis pertama, jadi kamu bisa melihat biaya tiap fitur dan membatasinya. Langkah berisiko menunggu persetujuan orang.',
  },
  {
    question: 'Bagaimana cara kita menilai hasilnya?',
    answer: 'Di tahap scope kita sepakati data apa yang boleh dilihat model dan seperti apa jawaban yang baik. Test case dari data kamu sendiri disimpan di repo.',
  },
]

const goodFit = [
  'Kamu punya produk atau pilot AI dan ingin satu fitur AI yang benar-benar dipakai pengguna',
  'Asisten internal atau chatbot harus menjawab dari dokumen dan data perusahaan',
  'Pilot kamu jalan di demo, dan sekarang harus kuat dipakai banyak pengguna',
  'Kamu ingin berbicara langsung dengan orang yang memimpin pengerjaannya',
]

const poorFit = [
  'Kamu butuh model yang dilatih dari nol, atau riset machine learning',
  'Belum ada produk atau data, baru rencana untuk menambah AI',
  'Kamu butuh tim yang bekerja di kantor kamu',
]

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya implementasi AI?',
    answer:
      'Tergantung kasus penggunaan, datanya, dan jumlah sistem yang terhubung. Proyek umumnya mulai dari USD 5.000. Setelah konsultasi singkat, kamu menerima rencana tertulis dengan milestone dan penawaran harga sebelum ada kode yang ditulis.',
  },
  {
    question: 'Apakah bisa bekerja di dalam sistem kami yang sudah ada?',
    answer:
      'Bisa, dan itu kasus yang paling sering. Saya bekerja di repo kamu, paling sering Next.js dan TypeScript, dan menambahkan fitur AI di samping kode yang ada.',
  },
  {
    question: 'Model apa yang dipakai?',
    answer:
      'OpenAI, Anthropic, atau API yang kompatibel, di belakang satu lapisan server. Dengan begitu model bisa diganti nanti tanpa menyentuh setiap fitur.',
  },
  {
    question: 'Apakah bisa bertemu langsung?',
    answer:
      'Bisa diatur. Saya tinggal di Sidoarjo, sebelah Surabaya. Pekerjaannya sendiri berjalan remote, dalam Bahasa Indonesia atau Inggris, Senin sampai Sabtu pukul 9.00 sampai 17.00 WIB.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Layanan', path: '/services' },
    { name: 'AI implementation', path: '/ai-implementation' },
    { name: 'Implementasi AI untuk perusahaan', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'AI implementation',
    areaServed: 'Indonesia',
  },
})

export default function JasaImplementasiAiPage() {
  return (
    <div lang="id">
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Layanan</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Implementasi AI untuk perusahaan</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Rocket className="w-4 h-4 text-orange-500" />, label: 'Implementasi AI untuk perusahaan' }}
        title="Implementasi AI untuk perusahaan besar,"
        accent="dipimpin langsung oleh engineer senior"
        actions={
          <Link
            href={contactHref('ai-implementation')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Kirim kebutuhan AI perusahaan kamu</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        }
      >
        <p className="mb-4">
          Untuk tim teknologi, kepala produk, dan CTO di perusahaan besar Indonesia yang pilot AI-nya jalan di demo tetapi belum
          siap dipakai banyak pengguna. Saya Aris Setiawan, dengan pengalaman 13+ tahun membangun produk web.
          Saya bekerja di dalam sistem kamu, jadi hasilnya kode yang bisa dibaca dan dikembangkan tim kamu sendiri.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          English version:{' '}
          <Link href="/ai-implementation" className={linkClass}>
            AI implementation for engineering teams
          </Link>
          .
        </p>
      </PageHero>

      <section className="mb-16" aria-labelledby="yang-saya-kerjakan">
        <div className="text-center mb-10">
          <h2 id="yang-saya-kerjakan" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Yang saya kerjakan
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {offers.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="p-2 bg-zinc-100 rounded-lg inline-flex mb-3">
                <item.icon className="w-4 h-4 text-zinc-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="catatan-proyek">
        <div className="max-w-2xl mb-8">
          <h2 id="catatan-proyek" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Catatan proyek
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Semua proyek klien saya berada di bawah NDA. Catatan ini disampaikan secara umum: tanpa nama klien, sektor, atau angka.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectNotes.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-4">{item.title}</h3>
              <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">Masalahnya</p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">{item.problem}</p>
              <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">Yang saya bangun</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.built}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="pertanyaan-pengadaan">
        <h2 id="pertanyaan-pengadaan" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
          Jawaban untuk tim IT dan pengadaan
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed mb-8">
          Ini pertanyaan yang biasanya diajukan sebelum memilih mitra AI.
        </p>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {procurementAnswers.map((item) => (
            <div key={item.question} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <dt className="font-semibold text-zinc-900 mb-2">{item.question}</dt>
              <dd className="text-sm text-zinc-600 leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-16" aria-labelledby="cocok">
        <div className="text-center mb-10">
          <h2 id="cocok" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cocok dan kurang cocok
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Cocok kalau:</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Kurang cocok kalau:</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <XCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq id="implementasi-ai-faq" title="Pertanyaan soal implementasi AI" faqs={faqs} />

      <CtaBand
        title="Ceritakan kebutuhan AI perusahaan kamu"
        body="Kirim gambaran singkat: apa yang dilakukan pilot sekarang, di mana ia tersendat, dan siapa penggunanya. Saya balas dengan pertanyaan atau jawaban jujur apakah saya cocok untuk proyek ini."
        primary={{ href: contactHref('ai-implementation'), label: 'Kirim kebutuhan AI perusahaan kamu' }}
        secondary={{ href: '/ai-implementation', label: 'English version' }}
      />
    </div>
  )
}
