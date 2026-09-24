// Validates titles, descriptions, canonicals, headings, and JSON-LD in every
// prerendered page under .next/server/app. Run after `pnpm build`.
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const PROD = 'https://madebyaris.com'
const appDir = path.resolve('.next/server/app')

const REQUIRED = {
  Person: ['name', 'url'],
  Organization: ['name', 'url', 'logo'],
  WebSite: ['name', 'url', 'publisher'],
  WebPage: ['name', 'url', 'isPartOf'],
  AboutPage: ['name', 'url', 'mainEntity'],
  ProfilePage: ['name', 'url', 'mainEntity'],
  ContactPage: ['name', 'url'],
  CollectionPage: ['name', 'url'],
  BlogPosting: ['headline', 'author', 'publisher', 'datePublished', 'image', 'mainEntityOfPage'],
  Article: ['headline', 'author', 'publisher', 'datePublished', 'image'],
  BreadcrumbList: ['itemListElement'],
  Service: ['name', 'provider', 'description'],
  FAQPage: ['mainEntity'],
  ItemList: ['itemListElement'],
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))

async function htmlFiles(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)))
    else if (entry.name.endsWith('.html')) out.push(full)
  }
  return out
}

function routeOf(file) {
  const rel = path.relative(appDir, file).replace(/\.html$/, '')
  if (rel === 'index') return '/'
  return `/${rel}`
}

function collectNodes(value, nodes = []) {
  if (Array.isArray(value)) value.forEach((v) => collectNodes(v, nodes))
  else if (value && typeof value === 'object') {
    if (value['@type']) nodes.push(value)
    Object.values(value).forEach((v) => collectNodes(v, nodes))
  }
  return nodes
}

function collectRefs(value, refs = []) {
  if (Array.isArray(value)) value.forEach((v) => collectRefs(v, refs))
  else if (value && typeof value === 'object') {
    const keys = Object.keys(value)
    if (keys.length === 1 && keys[0] === '@id') refs.push(value['@id'])
    Object.values(value).forEach((v) => collectRefs(v, refs))
  }
  return refs
}

const problems = []
const report = (route, msg) => problems.push(`${route}: ${msg}`)

const files = (await htmlFiles(appDir)).filter((f) => !/\/_(not-found|global-error)/.test(f))

for (const file of files) {
  const route = routeOf(file)
  const html = await readFile(file, 'utf8')

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '')
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '')
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1]
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length

  if (!title) report(route, 'missing <title>')
  else if (title.length > 60) report(route, `title ${title.length} chars: "${title}"`)
  if (!description) report(route, 'missing meta description')
  else if (description.length < 70 || description.length > 160)
    report(route, `description ${description.length} chars`)
  if (!canonical) report(route, 'missing canonical')
  else if (!canonical.startsWith(PROD)) report(route, `canonical not on production host: ${canonical}`)
  if (h1Count !== 1) report(route, `${h1Count} <h1> elements`)
  if (/noindex/i.test(html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? ''))
    report(route, 'noindex')

  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1])
  if (!blocks.length) report(route, 'no JSON-LD')

  const allNodes = []
  const allRefs = []
  for (const raw of blocks) {
    let data
    try {
      data = JSON.parse(raw)
    } catch (error) {
      report(route, `JSON-LD parse error: ${error.message}`)
      continue
    }
    if (data['@context'] !== 'https://schema.org') report(route, 'JSON-LD block missing https://schema.org @context')
    allNodes.push(...collectNodes(data))
    allRefs.push(...collectRefs(data))
  }

  const ids = new Set(allNodes.map((n) => n['@id']).filter(Boolean))
  for (const ref of allRefs) if (!ids.has(ref)) report(route, `unresolved @id ${ref}`)

  const counts = {}
  for (const node of allNodes) {
    const types = [].concat(node['@type'])
    const isEntity = Boolean(node['@id'])
    if (isEntity) counts[node['@id']] = (counts[node['@id']] ?? 0) + 1
    for (const type of types) {
      // Nested items (offer catalog entries, list items) only need to be
      // well-formed; required-property rules apply to @id entities.
      for (const prop of isEntity ? REQUIRED[type] ?? [] : []) {
        if (node[prop] === undefined || node[prop] === '' || (Array.isArray(node[prop]) && !node[prop].length))
          report(route, `${type} missing ${prop}`)
      }
      if (type === 'BreadcrumbList') {
        node.itemListElement.forEach((item, i) => {
          if (item.position !== i + 1 || !item.name || !item.item) report(route, `breadcrumb item ${i + 1} incomplete`)
        })
      }
      if (type === 'FAQPage') {
        const text = decode(html.replace(/<script[\s\S]*?<\/script>/g, ''))
        for (const q of node.mainEntity) {
          if (!q.acceptedAnswer?.text) report(route, `FAQ "${q.name}" has no answer`)
          if (!text.includes(q.name)) report(route, `FAQ "${q.name}" is not visible on the page`)
        }
      }
    }
    for (const [key, value] of Object.entries(node)) {
      if (typeof value === 'string' && /localhost|127\.0\.0\.1|vercel\.app/.test(value))
        report(route, `${node['@type']}.${key} points at a non-production host: ${value}`)
    }
  }
  for (const [id, n] of Object.entries(counts)) if (n > 1) report(route, `@id ${id} is defined ${n} times`)
}

console.log(`Checked ${files.length} prerendered pages`)
if (problems.length) {
  console.log(`\n${problems.length} problems:\n${problems.map((p) => `  - ${p}`).join('\n')}`)
  process.exit(1)
}
console.log('No SEO or structured data problems found')
