import { JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SiteMain } from '@/components/site-main'
import AnalyticsWrapper from '@/components/providers/analytics-wrapper'
import { ServiceWorkerRegistration } from '@/components/service-worker-registration'
import { buildSiteGraph } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { cn } from '@/lib/utils'
import type { DocumentLang } from '@/lib/document-lang'

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export function documentBodyClassName() {
  return cn(
    'min-h-screen bg-white text-[#0B0C0E] antialiased selection:bg-[#3A57FC] selection:text-white',
    plusJakarta.variable,
    spaceGrotesk.variable,
    jetbrainsMono.variable,
    'font-sans',
  )
}

/** Full-bleed site shell with adaptive Ahrefs-inspired header, main container, and dark footer. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildSiteGraph()} />

      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <div className="min-h-screen flex flex-col bg-white text-[#0B0C0E] relative">
        <Header />
        <SiteMain>{children}</SiteMain>
        <Footer />
      </div>

      <AnalyticsWrapper />
      <ServiceWorkerRegistration />
    </>
  )
}

/** Full document for global-not-found (no root layout in this app). */
export function DocumentShell({
  docLang,
  children,
}: {
  docLang: DocumentLang
  children: React.ReactNode
}) {
  return (
    <html lang={docLang} suppressHydrationWarning>
      <body suppressHydrationWarning className={documentBodyClassName()}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
