import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const Critters = require('critters')

const distDir = path.resolve('.next')
const appDir = path.join(distDir, 'server/app')

const critters = new Critters({
  path: distDir,
  publicPath: '/_next/',
  preload: 'media',
  fonts: false,
  pruneSource: false,
  reduceInlineStyles: false,
  logLevel: 'warn',
})

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await htmlFiles(fullPath)))
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }
  return files
}

const files = await htmlFiles(appDir)
let inlined = 0

for (const file of files) {
  const html = await readFile(file, 'utf8')
  if (!html.includes('rel="stylesheet"')) continue
  const processed = await critters.process(html)
  if (processed !== html) {
    await writeFile(file, processed)
    inlined += 1
  }
}

console.log(`Inlined critical CSS in ${inlined} of ${files.length} prerendered pages`)
