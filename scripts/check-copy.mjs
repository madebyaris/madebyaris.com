// Flags AI-writing tells in user-facing copy. See .cursor/rules/site-copy.mdc.
// Usage: node scripts/check-copy.mjs [paths...]   (defaults to app/ and components/)
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const BANNED = [
  'seamless', 'leverage', 'robust', 'cutting-edge', 'pixel-perfect', 'comprehensive',
  'innovative', 'world-class', 'unlock', 'elevate', 'empower', 'supercharge', 'blazing',
  'next-level', 'utilize', 'peak performance', 'delve', 'game-changer', 'best-in-class',
  'state-of-the-art', 'synergy', 'holistic',
]

const CHECKS = [
  { name: 'dash', test: (text) => /[—–]/.test(text) },
  { name: 'not-x-but-y', test: (text) => /(,|—|–)\s*not\s+(just\s+)?[a-z]/i.test(text) || /\bnot (just|only|merely)\b/i.test(text) || /\bbukan (sekadar|hanya)?\s*\w+/i.test(text) },
  { name: 'banned word', test: (text) => BANNED.some((word) => new RegExp(`\\b${word}\\b`, 'i').test(text)) },
  { name: 'weak CTA', test: (text) => /^(get in touch|learn more|click here|submit|get started|contact me)$/i.test(text.trim()) },
]

// Copy is JSX text or a quoted string that reads like prose (has a space and a letter).
function copyFragments(source) {
  const fragments = []
  const lines = source.split('\n')
  lines.forEach((line, index) => {
    const trimmed = line.trim()
    if (/^(\/\/|\*|\/\*|\{\/\*|import )/.test(trimmed)) return
    const pieces = [
      ...[...line.matchAll(/>([^<>{}]+)</g)].map((m) => m[1]),
      ...[...line.matchAll(/(?<!\b(?:type|className|href|id|name|rel|target|key|htmlFor|autoComplete|src)=)(?:'([^']{2,})'|"([^"]{2,})"|`([^`]{2,})`)/g)].map((m) => m[1] ?? m[2] ?? m[3]),
    ]
    if (!/[<'"`]/.test(line) && /[a-z]/i.test(trimmed)) pieces.push(trimmed)
    for (const piece of pieces) {
      const text = piece.trim()
      if (!text || !/[a-z]/i.test(text)) continue
      if (/^[\w-]+(\s+[\w:/[\]().%-]+)*$/.test(text) && /\b(flex|grid|text-|bg-|px-|py-|rounded|w-|h-|mb-|mt-|gap-)/.test(text)) continue
      if (/^(https?:|\/|@\/|\.\/|#)/.test(text)) continue
      fragments.push({ line: index + 1, text })
    }
  })
  return fragments
}

async function walk(target) {
  const info = await stat(target)
  if (info.isFile()) return /\.(tsx|ts)$/.test(target) ? [target] : []
  const out = []
  for (const entry of await readdir(target, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
    out.push(...(await walk(path.join(target, entry.name))))
  }
  return out
}

const targets = process.argv.slice(2).length ? process.argv.slice(2) : ['app', 'components']
const files = (await Promise.all(targets.map(walk))).flat().filter((file) => !/icons\//.test(file))

const hits = []
for (const file of files) {
  const source = await readFile(file, 'utf8')
  const seen = new Set()
  for (const { line, text } of copyFragments(source)) {
    for (const check of CHECKS) {
      const key = `${line}:${check.name}`
      if (!seen.has(key) && check.test(text)) {
        seen.add(key)
        hits.push(`${file}:${line}  [${check.name}]  ${text.slice(0, 110)}`)
      }
    }
  }
}

if (hits.length) {
  console.log(hits.join('\n'))
  console.log(`\n${hits.length} copy issues in ${new Set(hits.map((h) => h.split(':')[0])).size} files`)
  process.exit(1)
}
console.log(`No copy issues in ${files.length} files`)
