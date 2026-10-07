# M10 v4 wording notes: 10 biggest fixes

Rewrite of `draft.md` (M10 v2 ELI5 + rounds 4-8) into natural, conversational Indonesian. No fact, number, date, version, URL, command, or image changed. All fixes below keep the same meaning with shorter sentences (most under 20 words), active voice, and English kept for technical terms.

## 1. Opening: hyphenated verb + awkward "terbuka normal"

Before:
> Pada 7 Oktober 2026, cloud agent, yaitu program AI, meng-upgrade kode madebyaris.com ke Next.js 16.4 di salinan yang belum live. Tidak ada kode yang perlu diubah, semua pengecekan otomatis lolos, dan 14 halaman yang dites terbuka normal di server uji.

After:
> Pada 7 Oktober 2026, cloud agent (program AI) melakukan upgrade kode madebyaris.com ke Next.js 16.4 di salinan yang belum live. Tidak ada kode yang perlu diubah, semua tes otomatis lolos, dan 14 halaman yang dites bisa dibuka di server uji.

Why: "meng-upgrade" with prefix + hyphen reads like translated English. "Melakukan upgrade" keeps "upgrade" in English and sounds natural. "Terbuka normal" is awkward; "bisa dibuka" is how a developer speaks. "Pengecekan" becomes "tes" for consistency with the rest of the post.

## 2. Framework definition: dropped awkward translation

Before:
> Next.js adalah framework, atau kerangka kerja siap pakai, untuk membuat website.

After:
> Next.js adalah framework untuk membuat website.

Why: "Kerangka kerja siap pakai" is a literal translation no Indonesian developer uses. The rule is to keep technical terms in English, so the appositive goes and the sentence drops from 11 words to 6.

## 3. Passive "dipindahkan" becomes active "pindah"

Before:
> Website lama tidak dipindahkan otomatis.

After:
> Website lama tidak otomatis pindah.

Why: Same fact, active word order. Applied in "Jawaban singkat" and in the Cache Components table row. Shorter and closer to spoken Indonesian.

## 4. "Mencantumkan perubahan yang membuat kode lama rusak" tightened

Before:
> Blog resmi tidak mencantumkan perubahan yang membuat kode lama rusak.

After:
> Blog resmi tidak menyebut perubahan yang merusak kode lama.

Why: "Mencantumkan" is formal-list language; "menyebut" is conversational. "Membuat ... rusak" (3 words) becomes "merusak" (1 word). Same fact: the blog lists no breaking change.

## 5. Long "Kapan" sentence split, "di" becomes "pakai"

Before:
> Kalau website kamu di Next.js 16 tapi di bawah 16.3.8, naikkan ke 16.3.8 sekarang untuk perbaikan keamanan 30 September 2026.

After:
> Kalau website kamu pakai Next.js 16 di bawah 16.3.8, naikkan ke 16.3.8 sekarang. Versi itu memuat perbaikan keamanan 30 September 2026.

Why: The original packs condition + action + reason into one 20-word sentence. The rewrite gives the reason its own sentence (one meaning per sentence). "Di Next.js 16" becomes "pakai Next.js 16", which names the reader as the actor. Same pattern applied to the Next.js 15 paragraph.

## 6. "Per dokumentasi" (English "per") rewritten

Before:
> Perintah dan fakta di bawah per dokumentasi Upgrading Next.js, blog Next.js 16.4, dan npm, diakses 7 Oktober 2026.

After:
> Perintah dan fakta di bawah merujuk ke dokumentasi Upgrading Next.js, blog Next.js 16.4, dan npm. Semua diakses 7 Oktober 2026.

Why: "Per dokumentasi" copies English "per the docs". "Merujuk ke dokumentasi" is natural Indonesian. The access date gets its own short sentence instead of dangling at the end.

## 7. Passive "diberi" becomes "punya", test scope split

Before:
> Project itu diberi satu halaman dan satu route handler.

After:
> Project itu punya satu halaman dan satu route handler.

Why: "Diberi" (was given) hides the actor for no reason. "Punya" (has) is direct and conversational. In the same block, the step-3 note was split so "berasal dari dokumentasi" and "tidak dijalankan di project uji" each get their own sentence.

Before:
> Perintah pnpm, yarn, bun, codemod, dan `--agent` diambil dari dokumentasi dan tidak dijalankan di project uji.

After:
> Perintah pnpm, yarn, bun, codemod, dan `--agent` berasal dari dokumentasi. Perintah itu tidak dijalankan di project uji.

## 8. "Lalu" compounds split into separate imperatives (steps 5-7)

Before:
> Jalankan `npm run build` dan `npm run lint`, lalu baca semua warning.
> Deploy ke preview dulu, lalu cek halaman utama, form, dan route data sebelum merge.

After:
> Jalankan `npm run build` dan `npm run lint`. Baca semua warning.
> Deploy ke preview dulu. Cek halaman utama, form, dan route data sebelum merge.

Why: Simplified-English style gives each instruction its own sentence. Same for step 5 ("mengunci versi ... dan menambah blok ..." split into two sentences). Nothing added; each sentence now carries one action.

## 9. madebyaris.com comma splices split into short sentences

Before:
> Di madebyaris.com, cloud agent memakai codemod Next.js, tanpa `npx next upgrade`. Agent itu bekerja di branch `chore/nextjs-16-4`, lewat draft pull request yang belum di-merge.

After:
> Di madebyaris.com, cloud agent memakai codemod Next.js. Agent itu tidak memakai `npx next upgrade`. Agent itu bekerja di branch `chore/nextjs-16-4`. Perubahannya masuk lewat draft pull request yang belum di-merge.

Why: The original attaches fragments with commas ("tanpa ...", "lewat ..."). The rewrite uses full short sentences, each with one fact. Same versions, branch name, PR status, and environment facts preserved in the following sentences (unchanged meanings).

## 10. FAQ answers: stiff connectors smoothed, subjects made explicit

Before:
> Itu menurut security release di indeks blog Next.js, yang diakses 7 Oktober 2026. Kalau masih di bawah 16.3.8, naikkan ke 16.3.8 sekarang, lalu jadwalkan upgrade ke 16.4 setelah dites di salinan terpisah.

After:
> Info ini dari security release di indeks blog Next.js, yang diakses 7 Oktober 2026. Kalau versi kamu masih di bawah 16.3.8, naikkan ke 16.3.8 sekarang. Jadwalkan upgrade ke 16.4 setelah dites di salinan terpisah.

Why: "Itu menurut" is stiff; "Info ini dari" is conversational. "Kalau masih di bawah" leaves the subject implicit; "kalau versi kamu masih di bawah" names it. The 21-word closing sentence is split in two so every FAQ sentence stays under 20 words. All four FAQ answers stay at 49-54 words. Same fixes applied in FAQ 2 ("minta developer" becomes "minta developer kamu"), FAQ 3 (action split from the "default di Next.js 17" sentence), and FAQ 4 (hosting sentence split from the Node.js definition).

---

Other small, consistent touches (not counted above): H1 "kapan website kamu perlu upgrade" becomes "kapan kamu perlu upgrade" (the reader upgrades, not the website); H2 "Kapan website kamu perlu di-upgrade" becomes "Kapan kamu perlu upgrade" (active, no hyphen); "alat" becomes "tool" for create-next-app and codemod; "belum dilihat pengunjung" becomes "yang belum live" for consistency with the opening; meta description rewritten to 134 characters with the same facts.
