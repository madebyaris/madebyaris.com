---
title: "Next.js 16.4: apa yang baru dan kapan kamu perlu upgrade"
slug: next-js-16-4-apa-yang-baru
meta_description: "Next.js 16.4 rilis 6 Oktober 2026. Panduan sederhana: apa yang berubah, kapan kamu perlu upgrade, dan hasil upgrade di madebyaris.com."
---

# Next.js 16.4: apa yang baru dan kapan kamu perlu upgrade

Pada 7 Oktober 2026, cloud agent (program AI) melakukan upgrade kode madebyaris.com ke Next.js 16.4 di salinan yang belum live. Tidak ada kode yang perlu diubah, semua tes otomatis lolos, dan 14 halaman yang dites bisa dibuka di server uji.

Hasil di satu website belum tentu sama di website lain, jadi minta developer kamu tes dulu. Sumber: log upgrade madebyaris.com, 7 Oktober 2026. Kecepatan sebelum dan sesudah upgrade tidak diukur.

![Halaman utama madebyaris.com setelah upgrade ke Next.js 16.4.0](screenshot_home_after_next_16_4.webp)

Halaman utama setelah upgrade, di server uji lokal.

![Halaman services madebyaris.com setelah upgrade ke Next.js 16.4.0](screenshot_services_after_next_16_4.webp)

Halaman services, dari server uji yang sama.

## Jawaban singkat

- Next.js adalah framework untuk membuat website. Versi 16.4.0 adalah versi terbaru sampai 7 Oktober 2026.
- Perubahan terbesar: tim Next.js menyarankan Cache Components. Ini cara baru untuk menyimpan bagian halaman yang sudah jadi. Website lama tidak otomatis pindah.
- Blog resmi tidak menyebut perubahan yang merusak kode lama.
- Kalau versi kamu di bawah 16.3.8, naikkan ke 16.3.8 sekarang untuk perbaikan keamanan 30 September 2026. Kalau sudah di 16.3.8, upgrade ke 16.4 boleh menunggu.

Berlaku untuk Next.js 16.4.0. Rilis 6 Oktober 2026 menurut blog resmi, atau 7 Oktober 2026 WIB. Dicek terakhir 7 Oktober 2026.

## Apa yang berubah di Next.js 16.4

Sumber tabel: [blog resmi Next.js 16.4](https://nextjs.org/blog/next-16-4), [indeks blog Next.js](https://nextjs.org/blog), dokumentasi Next.js, dan registry npm, diakses 7 Oktober 2026.

| Apa yang berubah | Versi | Artinya untuk website kamu | Sumber |
|---|---|---|---|
| Cache Components disarankan untuk semua website. Project baru dari create-next-app, tool pembuat project Next.js, langsung memakainya. | 16.4. Di 16.3, Cache Components masih opsional lewat pengaturan. | Website lama tidak otomatis pindah. Menurut blog resmi, cara ini akan menjadi default di Next.js 17. | [blog](https://nextjs.org/blog/next-16-4), [docs cacheComponents](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents), [docs create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app) |
| Menurut blog, file yang dikirim ke browser lebih kecil | 16.4 | Tidak perlu pengaturan tambahan. | [blog](https://nextjs.org/blog/next-16-4#smaller-production-bundles) |
| React, library yang dipakai Next.js untuk tampilan | Next.js 16.4 memakai React 19.3 | React 19 disarankan. React 18 masih didukung tapi sudah deprecated, artinya tidak didukung lagi di Next.js 17. | [docs React Version Support](https://nextjs.org/docs/messages/react-version), [blog index](https://nextjs.org/blog) |
| Perubahan yang merusak kode lama (breaking change) | 16.4 | Blog tidak mencantumkannya. Tetap tes sebelum dipakai. | [blog](https://nextjs.org/blog/next-16-4) |
| Node.js minimal 20.9 | Sama untuk 16.4 dan 16.3 terakhir | Node.js adalah program yang menjalankan Next.js di server. Server yang menjalankan 16.3 tidak perlu ganti versi Node.js. | [npm](https://www.npmjs.com/package/next) |
| Patch terbaru (rilis perbaikan kecil) | 16.3.8 dan 15.5.27, dari security release 30 September 2026. 16.4.0 belum punya patch. | Website Next.js 16 di bawah 16.3.8 perlu naik ke 16.3.8. Website Next.js 15 perlu naik ke 15.5.27. | [blog index](https://nextjs.org/blog), [npm](https://www.npmjs.com/package/next?activeTab=versions) |

## Kapan kamu perlu upgrade

Sumber bagian ini: security release di [indeks blog Next.js](https://nextjs.org/blog) dan halaman [support policy Next.js](https://nextjs.org/support-policy), diakses 7 Oktober 2026.

Kalau website kamu pakai Next.js 16 di bawah 16.3.8, naikkan ke 16.3.8 sekarang. Versi itu memuat perbaikan keamanan 30 September 2026. Sebagai contoh, madebyaris.com masih di 16.3.6 sebelum upgrade ini.

Kalau website kamu pakai Next.js 15, naikkan ke 15.5.27 untuk perbaikan keamanan yang sama. Untuk pindah ke 16.4 dari versi 15 atau lebih lama, kerjakan migrasi dulu lewat [panduan upgrade ke versi 16](https://nextjs.org/docs/app/guides/upgrading/version-16).

Kalau website kamu sudah di 16.3.8, upgrade ke 16.4 boleh menunggu sampai tim siap. Support policy Next.js tetap menyarankan versi terbaru kalau memungkinkan.

Kalau website kamu punya pengaturan cache khusus atau server sendiri, tes dulu di salinan uji yang belum live.

## Kalau kamu developer: cara upgrade Next.js ke 16.4

Perintah dan fakta di bawah merujuk ke dokumentasi Upgrading Next.js, blog Next.js 16.4, dan npm. Semua diakses 7 Oktober 2026. Codemod adalah tool dari tim Next.js untuk memperbarui paket dan kode secara otomatis.

Langkah 1, 2, 5, dan 6 dites pada 7 Oktober 2026 di project baru dari create-next-app 16.3. Project itu punya satu halaman dan satu route handler.

Di langkah 3, yang dites hanya `npx next upgrade` dan perintah manual `npm i`. Perintah pnpm, yarn, bun, codemod, dan `--agent` berasal dari dokumentasi. Perintah itu tidak dijalankan di project uji.

1. Cek versi Next.js dan Node.js. Next.js 16.4.0 butuh Node.js 20.9 ke atas.

```bash
npx next --version
node -v
```

2. Buat branch baru dari main.

```bash
git checkout -b upgrade-next-16-4
```

3. Jalankan perintah upgrade dari [dokumentasi Next.js](https://nextjs.org/docs/app/getting-started/upgrading), sesuai package manager kamu.

```bash
pnpm next upgrade
npx next upgrade
yarn next upgrade
bunx next upgrade
```

Versi sebelum 16.1.0 tidak punya perintah `upgrade`, jadi dokumentasi memakai codemod:

```bash
npx @next/codemod@canary upgrade latest
```

Atau, pilih cara manual ini:

```bash
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

4. Opsional: coding agent mengerjakan dan mengecek upgrade. Fitur ini experimental.

```bash
npx next@canary upgrade --agent=latest
```

5. Cek diff sebelum commit. Di project uji, `npx next upgrade` mengunci versi `@types/react`. Perintah itu juga menambah blok `overrides` di `package.json`.

6. Jalankan `npm run build` dan `npm run lint`. Baca semua warning. Di project uji, keduanya lolos di 16.4.0. Pages Router dengan React 18 memberi warning saat build ([PR #97689](https://github.com/vercel/next.js/pull/97689)). Untuk pindah router, baca [migrasi Pages Router ke App Router](https://madebyaris.com/blog/migrating-a-pages-app-to-app-router).

7. Deploy ke preview dulu. Cek halaman utama, form, dan route data sebelum merge.

Perubahan teknis lain, termasuk fitur experimental, ada di [blog resmi Next.js 16.4](https://nextjs.org/blog/next-16-4) (diakses 7 Oktober 2026).

Di madebyaris.com, cloud agent memakai codemod Next.js. Agent itu tidak memakai `npx next upgrade`. Agent itu bekerja di branch `chore/nextjs-16-4`. Perubahannya masuk lewat draft pull request yang belum di-merge. Jadi perubahan ini belum live. Lingkungannya Node.js 22.14.0 dan pnpm 9.15.3.

```bash
pnpm dlx @next/codemod@latest upgrade 16.4.0 --yes --verbose
```

![Terminal: upgrade madebyaris.com dari Next.js 16.3.6 ke 16.4.0 dengan codemod Next.js](screenshot_terminal_upgrade_sanitized.webp)

Output terminal upgrade, sudah disanitasi sebelum dipublikasikan.

Paket `next`, `eslint-config-next`, dan `@next/bundle-analyzer` naik dari 16.3.6 ke 16.4.0. React tetap 19.3.0. Codemod hanya mengubah `package.json` dan `pnpm-lock.yaml`. Install selesai dalam 5.8s. Build, lint, dan dua tes lain selesai dengan exit 0. Route utama di server lokal mengembalikan 200.

Di madebyaris.com, Cache Components tetap mati. Catatan di `next.config.js` menyebut bentrok dengan `export const revalidate` per route. Log mencatat beberapa warning, tapi semuanya sudah ada di 16.3.6 atau tidak terkait upgrade. Sumber: log upgrade madebyaris.com, 7 Oktober 2026.

## Pertanyaan soal Next.js 16.4

### Apakah website kamu harus langsung upgrade ke Next.js 16.4?

Tidak harus, kalau website kamu sudah di 16.3.8, karena versi itu sudah memuat perbaikan keamanan 30 September 2026. Info ini dari security release di indeks blog Next.js, yang diakses 7 Oktober 2026. Kalau versi kamu masih di bawah 16.3.8, naikkan ke 16.3.8 sekarang. Jadwalkan upgrade ke 16.4 setelah dites di salinan terpisah.

### Apakah upgrade ke Next.js 16.4 bisa membuat website rusak?

Belum ada tanda seperti itu, karena blog resmi Next.js 16.4 tidak mencantumkan breaking change per 7 Oktober 2026. Breaking change adalah perubahan yang merusak kode lama atau mengharuskan perubahan kode dulu. File website yang dihasilkan tetap berubah. Jadi minta developer kamu tes dulu di versi uji sebelum dipakai di website live.

### Apa itu Cache Components, dan apakah wajib?

Tidak wajib untuk website lama, karena upgrade ke 16.4 tidak menyalakan Cache Components secara otomatis. Cache Components adalah cara baru Next.js menyimpan bagian halaman yang sudah jadi, supaya tidak dibuat ulang setiap kali dibuka. Menurut blog resmi (diakses 7 Oktober 2026), cara ini akan menjadi default di Next.js 17. Jadi rencanakan perpindahannya dari sekarang.

### Apakah hosting atau server website perlu diganti?

Tidak perlu, kalau server kamu sudah menjalankan Next.js 16.3 dengan baik. Next.js 16.4 butuh Node.js 20.9 atau lebih baru, sama dengan rilis 16.3 terakhir, menurut npm (diakses 7 Oktober 2026). Node.js adalah program yang menjalankan Next.js di server. Jadi hosting yang cocok untuk 16.3 tetap bisa dipakai untuk 16.4.

## Butuh bantuan upgrade Next.js?

Kalau website kamu masih pakai versi di bawah 16.3.8, mulai dari patch keamanan 30 September 2026. Kalau website kamu sudah di 16.3.8, upgrade ke 16.4 bisa masuk jadwal kerja tim kamu. Baru setelah itu, rencanakan perpindahan ke Cache Components sebelum Next.js 17.

Mau website Next.js kamu diperbarui dan lebih cepat? [Hubungi madebyaris](https://madebyaris.com/services/nextjs-development/nextjs-indonesia). Saya balas dalam 24 jam.
