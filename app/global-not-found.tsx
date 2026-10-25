export { metadata } from './not-found-metadata'
import { SiteChrome, documentBodyClassName } from '@/components/document-shell'
import { NotFoundPage } from '@/components/not-found-page'
import './globals.css'

export default async function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={documentBodyClassName()}
        style={{
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        }}
      >
        <SiteChrome>
          <NotFoundPage />
        </SiteChrome>
      </body>
    </html>
  )
}
