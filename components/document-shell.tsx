import { JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
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
    'min-h-screen bg-[#FAF9F6] text-[#0B0C0E] antialiased selection:bg-[#0B0C0E] selection:text-[#FAF9F6]',
    plusJakarta.variable,
    spaceGrotesk.variable,
    jetbrainsMono.variable,
    'font-sans',
  )
}

/** Full-bleed architectural site shell (sticky header, framed 1px hairline rail container, footer). */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildSiteGraph()} />

      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0B0C0E] relative">
        {/* Subtle top ambient architectural wash */}
        <div
          className="pointer-events-none fixed inset-x-0 top-0 h-[420px] -z-10"
          style={{
            backgroundImage:
              'radial-gradient(60% 60% at 50% 0%, rgba(217, 72, 30, 0.045) 0%, rgba(250, 249, 246, 0) 100%)',
          }}
          aria-hidden="true"
        />

        <Header />

        <main
          id="main-content"
          className="flex-1 w-full max-w-[1280px] mx-auto border-x border-[#E6E4DD]/80 bg-[#FAF9F6] relative"
        >
          {/* Architectural vertical guide rails */}
          <div
            className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-10 xl:px-14"
            aria-hidden="true"
          >
            <div className="h-full w-px bg-[#0B0C0E]/[0.035]" />
            <div className="h-full w-px bg-[#0B0C0E]/[0.035] hidden md:block" />
            <div className="h-full w-px bg-[#0B0C0E]/[0.035] hidden lg:block" />
            <div className="h-full w-px bg-[#0B0C0E]/[0.035]" />
          </div>

          <div className="relative z-10 px-6 md:px-10 xl:px-14 pt-8 md:pt-12 pb-16">
            {children}
          </div>
        </main>

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
