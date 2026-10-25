import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import NotFoundView from './not-found-view'
import './globals.css'

export { metadata } from './not-found-metadata'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

/** Full document 404 for unmatched routes (no root layout after docLang split). */
export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans min-h-screen antialiased`}
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        <NotFoundView />
      </body>
    </html>
  )
}
