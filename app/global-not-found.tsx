export { metadata } from './not-found-metadata'
import { headers } from 'next/headers'
import { SiteChrome, documentBodyClassName } from '@/components/document-shell'
import { NotFoundPage } from '@/components/not-found-page'
import { PUBLIC_PATHNAME_HEADER, documentLangFromPathname } from '@/lib/document-lang'
import './globals.css'

export default async function GlobalNotFound() {
  const headerList = await headers()
  const publicPathname = headerList.get(PUBLIC_PATHNAME_HEADER) ?? '/'
  const docLang = documentLangFromPathname(publicPathname)

  return (
    <html lang={docLang} suppressHydrationWarning>
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
