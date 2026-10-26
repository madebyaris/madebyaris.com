/**
 * Run after `pnpm start`. Verifies rendered HTML for jasa-woocommerce and EN woocommerce hreflang.
 */
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BASE = 'http://localhost:3000'
const ID_PATH = '/services/wordpress/jasa-woocommerce'
const EN_PATH = '/services/wordpress/woocommerce'

const COPY_LINES = readFileSync(path.join(__dirname, 'jasa-woocommerce-copy.txt'), 'utf8')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)

function fail(msg) {
  console.error(`test-jasa-woocommerce-page FAILED: ${msg}`)
  process.exit(1)
}

function normalizeText(html) {
  const dom = new JSDOM(html)
  return dom.window.document.body.textContent.replace(/\s+/g, ' ').trim()
}

async function fetchHtml(path) {
  const res = await fetch(`${BASE}${path}`)
  if (res.status !== 200) fail(`${path} returned ${res.status}`)
  return res.text()
}

const idHtml = await fetchHtml(ID_PATH)
const enHtml = await fetchHtml(EN_PATH)

const idLang = idHtml.match(/<html[^>]*\slang="([^"]+)"/)?.[1]
if (idLang !== 'id') fail(`expected html lang=id on ${ID_PATH}, got ${idLang}`)

const enLang = enHtml.match(/<html[^>]*\slang="([^"]+)"/)?.[1]
if (enLang !== 'en') fail(`expected html lang=en on ${EN_PATH}, got ${enLang}`)

const expectedTitle = 'Jasa pembuatan website ecommerce WooCommerce | Aris Setiawan'
const title = idHtml.match(/<title>([^<]*)<\/title>/)?.[1]
if (title !== expectedTitle) fail(`title mismatch: expected "${expectedTitle}", got "${title}"`)

const expectedDesc =
  'WooCommerce untuk toko online bisnis: katalog produk, checkout, payment gateway dan kurir lokal, dan setiap perubahan dites di staging dulu.'
const desc = idHtml.match(/<meta name="description" content="([^"]*)"/)?.[1]
if (desc !== expectedDesc) fail(`description mismatch`)

const canonical = idHtml.match(/<link rel="canonical" href="([^"]*)"/)?.[1]
if (canonical !== 'https://madebyaris.com/services/wordpress/jasa-woocommerce') {
  fail(`canonical mismatch: ${canonical}`)
}

for (const [lang, url] of [
  ['id', 'https://madebyaris.com/services/wordpress/jasa-woocommerce'],
  ['en', 'https://madebyaris.com/services/wordpress/woocommerce'],
  ['x-default', 'https://madebyaris.com/services/wordpress/woocommerce'],
]) {
  const href = idHtml.match(new RegExp(`<link rel="alternate" hrefLang="${lang}" href="([^"]*)"`))?.[1]
  if (href !== url) fail(`hreflang ${lang} on ID page: expected ${url}, got ${href}`)
}

const enCanonical = enHtml.match(/<link rel="canonical" href="([^"]*)"/)?.[1]
if (enCanonical !== 'https://madebyaris.com/services/wordpress/woocommerce') {
  fail(`EN canonical changed: ${enCanonical}`)
}

if (!enHtml.includes('Jasa WooCommerce') || !enHtml.includes('(in Indonesian)')) {
  fail('EN page missing Indonesian link line')
}

const idDom = new JSDOM(idHtml)
const h1Text = idDom.window.document.querySelector('h1')?.textContent.replace(/\s+/g, ' ').trim()
if (h1Text !== 'Jasa pembuatan website ecommerce dengan WooCommerce, dites di staging dulu') {
  fail(`H1 text mismatch: ${h1Text}`)
}

if (/FAQPage/i.test(idHtml)) fail('FAQPage schema must not be present')

for (const type of ['Service', 'WebPage', 'BreadcrumbList']) {
  if (!idHtml.includes(`"@type":"${type}"`) && !idHtml.includes(`"@type": "${type}"`)) {
    fail(`missing ${type} JSON-LD`)
  }
}

const idText = normalizeText(idHtml)
for (const line of COPY_LINES) {
  if (!idText.includes(line.replace(/\s+/g, ' '))) {
    fail(`copy line missing from page text: ${line.slice(0, 80)}…`)
  }
}

const jasaWp = await fetchHtml('/services/wordpress/jasa-wordpress')
const jasaWpLang = jasaWp.match(/<html[^>]*\slang="([^"]+)"/)?.[1]
if (jasaWpLang !== 'id') fail(`jasa-wordpress lang should stay id, got ${jasaWpLang}`)

const sitemap = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text())
const urlCount = (sitemap.match(/<loc>/g) ?? []).length
if (urlCount !== 113) fail(`sitemap should have 113 URLs, got ${urlCount}`)
if (!sitemap.includes('<loc>https://madebyaris.com/services/wordpress/jasa-woocommerce</loc>')) {
  fail('sitemap missing jasa-woocommerce loc')
}
if (!sitemap.includes('2026-10-26T03:00:00.000Z') && !sitemap.includes('2026-10-26T03:00:00Z')) {
  fail('sitemap missing jasa-woocommerce lastmod 2026-10-26T03:00:00Z')
}

console.log('test-jasa-woocommerce-page OK')
