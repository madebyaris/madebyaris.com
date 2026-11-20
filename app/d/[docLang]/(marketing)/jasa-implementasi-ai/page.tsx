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
const pageTitle = 'Jasa Pembuatan AI & Konsultan AI Indonesia'
const pageDescription =
  'Jasa pembuatan AI, implementasi AI, dan konsultan AI di Indonesia. Dipimpin AI engineer senior 13+ tahun: AI agent, chatbot data internal, dan sistem LLM.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/ai-integration.jpg',
  locale: 'id_ID',
  keywords: [
    'jasa pembuatan AI',
    'jasa AI',
    'konsultan AI',
    'konsultan AI Indonesia',
    'AI engineer Indonesia',
    'jasa implementasi AI',
    'implementasi AI perusahaan',
    'jasa AI agent',
    'AI hukum Indonesia',
  ],
})

const offers = [
  {
    icon: Rocket,
    title: 'Pilot AI ke produksi',
    body: 'Pilot AI sudah berjalan di tahap demo, sekarang waktunya naik ke produksi. Saya lengkapi dengan test case dari data asli kamu, logging, error handling, dan batas biaya token, lalu saya serahkan rapi ke tim kamu.',
  },
  {
    icon: Plug,
    title: 'Fitur AI di produk yang sudah ada',
    body: 'Asisten yang menjawab berbasis data internal perusahaan, pencarian pintar, ringkasan dokumen, hingga AI agent yang terhubung ke sistem kamu. Dikerjakan langsung di repo yang ada tanpa perlu menulis ulang aplikasi.',
  },
  {
    icon: Server,
    title: 'Arsitektur dan infrastruktur',
    body: 'Software, stack, jaringan, dan VPS dirancang sekaligus agar sistem AI tetap stabil saat volume data dan trafik meningkat. Saya juga membenahi harness LLM, yaitu layer kode di sekitar model yang mengatur prompt, tool, dan retry.',
  },
  {
    icon: Building2,
    title: 'Retainer engineering',
    body: 'Kuota kerja bulanan khusus untuk pengembangan fitur AI lanjutan, pembaruan model, dan perbaikan pasca-rilis.',
  },
]

const projectNotes = [
  {
    title: 'AI SEO yang meriset, menulis, dan menguji sendiri',
    problem:
      'Tim konten harus menebak topik dan judul yang berpeluang naik, sementara proses evaluasinya lambat karena setiap eksperimen dikerjakan manual.',
    built:
      'Sistem AI yang meriset topik sendiri, menyusun draf konten, menjalankan A/B test pada beberapa variasi, lalu memakai hasil pengujian tersebut untuk mengambil keputusan lebih tepat di konten berikutnya.',
  },
  {
    title: 'AI hukum Indonesia berbasis pengetahuan pakar',
    problem:
      'Model AI umum hanya menjawab pertanyaan hukum Indonesia berdasarkan pengetahuan bawaannya, yang terlalu berisiko untuk kebutuhan hukum nyata.',
    built:
      'Aplikasi AI yang dibangun bersama masukan dosen dan guru besar hukum Indonesia, sehingga jawabannya berpijak pada referensi pakar selain kapabilitas bawaan model.',
  },
  {
    title: 'Arsitektur lengkap untuk produk AI bervolume tinggi',
    problem:
      'Produk AI yang lancar saat diuji dengan beberapa sampel sering tumbang ketika harus memproses ribuan data sekaligus.',
    built:
      'Seluruh arsitekturnya, mulai dari software, stack, jaringan, hingga VPS, saya setel ulang agar sanggup memproses ribuan data dalam satu kali proses, sekaligus membenahi harness LLM-nya.',
  },
]

const procurementAnswers = [
  {
    question: 'Siapa yang mengerjakan?',
    answer:
      'Saya memimpin setiap proyek dan kamu berdiskusi langsung dengan saya. Engineer partner tepercaya ikut bergabung saat proyek membutuhkan kapasitas tambahan, dan AI agent membantu mempercepat pengerjaan teknis. Saya selalu mengabari kamu sebelum partner bergabung, dan siapa saja yang boleh mengakses kode maupun data kamu kita sepakati tertulis sebelum proyek dimulai.',
  },
  {
    question: 'Apakah bisa di bawah NDA?',
    answer: 'Bisa. Semua proyek saya sebelumnya berjalan di bawah NDA, jadi nama klien tidak pernah saya publikasikan di mana pun.',
  },
  {
    question: 'Siapa pemilik kodenya?',
    answer:
      'Kode, prompt, dan test case langsung tersimpan di repository kamu. Setelah pembayaran lunas, seluruh hak milik kode dan aset proyek sepenuhnya menjadi milik kamu.',
  },
  {
    question: 'Bagaimana serah terimanya?',
    answer:
      'Kamu mendapat dokumentasi arsitektur yang jelas serta kode yang rapi agar tim internal bisa langsung membaca dan mengembangkannya. Retainer untuk pembaruan model dan perbaikan bersifat opsional.',
  },
  {
    question: 'Bagaimana dengan biaya dan risiko?',
    answer:
      'Logging dan batas biaya token dipasang sejak rilis pertama, jadi kamu bisa memantau biaya tiap fitur dan membatasinya. Untuk aksi yang berisiko, sistem selalu meminta persetujuan tim kamu terlebih dahulu.',
  },
  {
    question: 'Bagaimana cara kita menilai hasilnya?',
    answer:
      'Di tahap scoping, kita sepakati batasan data yang boleh diakses model serta standar jawaban yang dianggap akurat. Test case dari data asli kamu juga disimpan langsung di repo.',
  },
]

const goodFit = [
  'Kamu punya produk atau pilot AI dan ingin satu fitur AI yang benar-benar dipakai pengguna',
  'Asisten internal atau chatbot harus menjawab akurat dari dokumen dan data perusahaan',
  'Pilot AI sudah berhasil di tahap demo dan sekarang harus siap dipakai banyak pengguna di produksi',
  'Kamu ingin berdiskusi langsung dengan engineer yang memimpin pengerjaannya',
]

const poorFit = [
  'Kamu butuh melatih model dari nol, atau riset machine learning murni',
  'Belum ada produk maupun data, baru sebatas ide ingin memasang AI',
  'Kamu membutuhkan tim yang bekerja penuh waktu di kantor (on-site)',
]

const faqs: FaqItem[] = [
  {
    question: 'Berapa biaya implementasi AI?',
    answer:
      'Tergantung use case, kondisi data, dan jumlah sistem yang terhubung. Proyek umumnya mulai dari USD 5.000. Setelah konsultasi singkat, kamu akan menerima rencana kerja tertulis lengkap dengan milestone dan penawaran harga sebelum satu baris kode pun ditulis.',
  },
  {
    question: 'Apakah bisa bekerja di dalam sistem kami yang sudah ada?',
    answer:
      'Bisa, dan itu kasus yang paling sering. Saya bekerja langsung di repo kamu, paling sering Next.js dan TypeScript, lalu menambahkan fitur AI berdampingan dengan kode yang sudah ada.',
  },
  {
    question: 'Model apa yang dipakai?',
    answer:
      'OpenAI, Anthropic, atau API lain yang kompatibel, semuanya dibungkus di balik satu layer backend. Jadi kalau nanti ingin ganti model, kamu tidak perlu mengubah kode di setiap fitur.',
  },
  {
    question: 'Apakah bisa bertemu langsung?',
    answer:
      'Bisa diatur. Saya berdomisili di Sidoarjo, dekat Surabaya. Pekerjaannya sendiri berjalan remote, dalam Bahasa Indonesia atau Inggris, Senin sampai Sabtu pukul 09.00 sampai 17.00 WIB.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  inLanguage: 'id',
  breadcrumbs: [
    { name: 'Layanan', path: '/services' },
    { name: 'Implementasi AI', path: '/ai-implementation' },
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

      <PageHero
        variant="obsidian"
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-white/65">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Layanan
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/35">/</li>
              <li className="text-white">Implementasi AI untuk perusahaan</li>
            </ol>
          </nav>
        }
        eyebrow={{ icon: <Rocket className="w-3.5 h-3.5" />, label: 'Jasa AI & konsultan AI Indonesia' }}
        title="Jasa pembuatan AI dan"
        accent="konsultan AI Indonesia"
        actions={
          <>
            <Link
              href={contactHref('ai-implementation')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 group"
            >
              <span>Kirim kebutuhan AI perusahaan kamu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#catatan-proyek"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/45 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all"
            >
              <span>Lihat catatan proyek</span>
            </a>
          </>
        }
        bottomStrip={
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs text-white/75">
            <span>13+ tahun membangun sistem produksi · Siap NDA · Sidoarjo, Indonesia (WIB)</span>
            <Link
              href="/ai-implementation"
              className="text-[#FFB866] hover:text-white underline decoration-[#FFB866]/40 underline-offset-4 transition-colors"
            >
              English version: AI implementation for engineering teams
            </Link>
          </div>
        }
      >
        <p>
          Untuk CTO, Head of Product, dan tim engineering di perusahaan Indonesia yang membutuhkan jasa pembuatan AI atau konsultan AI berpengalaman untuk membawa pilot ke produksi. Saya Aris Setiawan, AI engineer Indonesia dengan pengalaman 13+ tahun membangun sistem web, AI agent, dan infrastruktur produksi.
        </p>
      </PageHero>

      {/* Band 1: White: Yang saya kerjakan */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="yang-saya-kerjakan">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">01 / Ruang lingkup</span>
            <h2
              id="yang-saya-kerjakan"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              Yang saya kerjakan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 2: Dark Proof Band: Catatan proyek */}
      <section
        id="catatan-proyek-band"
        className="w-full ahrefs-dark-band text-white py-16 md:py-24"
        aria-labelledby="catatan-proyek"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
              02 / Catatan produksi
            </span>
            <h2
              id="catatan-proyek"
              className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3 scroll-mt-24"
            >
              Catatan proyek
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Semua proyek klien saya berada di bawah NDA. Catatan ini disampaikan secara umum: tanpa nama klien, sektor, atau angka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectNotes.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#3A57FC]/70 p-6 md:p-7 transition-all flex flex-col"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] mb-3">
                  Catatan {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-5">
                  {item.title}
                </h3>
                <div className="space-y-4 mt-auto">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#93A8FF] mb-1.5">
                      Masalahnya
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{item.problem}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-400 mb-1.5">
                      Yang saya bangun
                    </p>
                    <p className="text-sm text-zinc-200 leading-relaxed">{item.built}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Band 3: Subtle Gray: Jawaban untuk tim IT dan pengadaan */}
      <section
        className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24"
        aria-labelledby="pertanyaan-pengadaan"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">03 / IT dan pengadaan</span>
            <h2
              id="pertanyaan-pengadaan"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              Jawaban untuk tim IT dan pengadaan
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Ini pertanyaan yang biasanya diajukan sebelum memilih mitra AI.
            </p>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {procurementAnswers.map((item, idx) => (
              <div
                key={item.question}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all"
              >
                <span className="font-mono text-xs font-bold text-[#3A57FC] block mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <dt className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2">
                  {item.question}
                </dt>
                <dd className="text-sm text-[#4B5563] leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Band 4: White: Cocok dan kurang cocok */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="cocok">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">04 / Kecocokan proyek</span>
            <h2 id="cocok" className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
              Cocok dan kurang cocok
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#DDE4FF] bg-white p-6 md:p-7 shadow-xs">
              <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-4">Cocok kalau:</h3>
              <ul className="space-y-3.5">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563] leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
              <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-4">Kurang cocok kalau:</h3>
              <ul className="space-y-3.5">
                {poorFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563] leading-relaxed">
                    <XCircle className="w-5 h-5 text-[#6B7280] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Band 5: Subtle Gray: FAQ */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Faq
            id="implementasi-ai-faq"
            title="Pertanyaan soal implementasi AI"
            faqs={faqs}
            className="mb-0"
          />
        </div>
      </section>

      {/* Band 6: White: CTA Band */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            badge="Diskusi langsung · Balas dalam 24 jam"
            title="Ceritakan kebutuhan AI perusahaan kamu"
            body="Kirim gambaran singkat mengenai kondisi pilot saat ini, kendala utamanya, dan siapa penggunanya. Saya balas dengan beberapa pertanyaan lanjutan, atau jawaban jujur jika proyek ini kurang pas saya kerjakan."
            primary={{ href: contactHref('ai-implementation'), label: 'Kirim kebutuhan AI perusahaan kamu' }}
            secondary={{ href: '/ai-implementation', label: 'English version' }}
          />
        </div>
      </section>
    </div>
  )
}
