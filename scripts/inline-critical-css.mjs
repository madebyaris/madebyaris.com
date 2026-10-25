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

function extractStylesheetLinks(html) {
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)
  if (!headMatch) return ''
  return headMatch[1].match(/<link[^>]+rel="stylesheet"[^>]*>/gi)?.join('\n') ?? ''
}

function injectStylesheets(html, links) {
  if (!links || html.includes('rel="stylesheet"')) return html
  return html.replace(/<head([^>]*)>/i, `<head$1>\n${links}`)
}

function ensureHtmlLangEn(html) {
  if (/<html[^>]*\blang=/i.test(html)) return html
  return html.replace(/<html/i, '<html lang="en"')
}

const files = await htmlFiles(appDir)
const notFoundPath = path.join(appDir, '_not-found.html')
const homeReferencePath = path.join(appDir, 'd/en.html')
let homeStylesheetLinks = null

let inlined = 0

for (const file of files) {
  let html = await readFile(file, 'utf8')
  if (!html.includes('rel="stylesheet"')) {
    if (file === notFoundPath) {
      if (homeStylesheetLinks === null) {
        try {
          const homeHtml = await readFile(homeReferencePath, 'utf8')
          homeStylesheetLinks = extractStylesheetLinks(homeHtml)
        } catch {
          homeStylesheetLinks = ''
        }
      }
      html = injectStylesheets(html, homeStylesheetLinks)
      html = ensureHtmlLangEn(html)
    }
    if (!html.includes('rel="stylesheet"')) continue
  }
  let processed = await critters.process(html)
  if (file === notFoundPath) {
    processed = ensureHtmlLangEn(processed)
  }
  if (processed !== html) {
    await writeFile(file, processed)
    inlined += 1
  }
}

console.log(`Inlined critical CSS in ${inlined} of ${files.length} prerendered pages`)
