import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AnalyticsWrapper from "@/components/providers/analytics-wrapper";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import { productionUrl, siteConfig } from "@/lib/seo/config";
import { buildSiteGraph } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";
import "./globals.css";

// Inter font - matching reference design
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const verificationOther: Record<string, string> = {}
if (process.env.BING_VERIFICATION_CODE) verificationOther['msvalidate.01'] = process.env.BING_VERIFICATION_CODE
if (process.env.YANDEX_VERIFICATION_CODE) verificationOther['yandex-verification'] = process.env.YANDEX_VERIFICATION_CODE

export const metadata: Metadata = {
  title: {
    default: "Hire a Next.js & AI Developer | Aris Setiawan",
    template: `%s${siteConfig.titleSuffix}`
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: `${productionUrl}/about` }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.ico',
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: productionUrl,
    title: "Hire a Next.js & AI Developer | Aris Setiawan",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Aris Setiawan - Next.js, AI & WordPress Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Next.js & AI Developer | Aris Setiawan",
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  metadataBase: new URL(productionUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    ...(process.env.GOOGLE_VERIFICATION_CODE ? { google: process.env.GOOGLE_VERIFICATION_CODE } : {}),
    ...(Object.keys(verificationOther).length ? { other: verificationOther } : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        suppressHydrationWarning
        className={cn(
          "min-h-screen antialiased selection:bg-slate-900 selection:text-white",
          inter.variable,
          "font-sans"
        )}
        style={{
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        }}
      >
        <JsonLd data={buildSiteGraph()} />

        {/* Background - matching reference design */}
        <div 
          className="fixed inset-0 -z-10 bg-zinc-400"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 55%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(161,161,170,1) 0%, rgba(212,212,216,1) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Main Glass Panel Container */}
        <div className="flex justify-center items-start min-h-screen px-0 py-0 xl:p-8">
          <main className="glass-panel overflow-hidden flex flex-col xl:max-w-[1300px] z-10 xl:border-white/50 border-none xl:border xl:rounded-[2.5rem] min-h-screen xl:min-h-[700px] w-full rounded-none relative xl:shadow-2xl">
            
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-10 xl:px-12 w-full h-full">
              <div className="h-full w-px bg-zinc-950/5"></div>
              <div className="h-full w-px bg-zinc-950/5 hidden md:block"></div>
              <div className="h-full w-px bg-zinc-950/5 hidden lg:block"></div>
              <div className="h-full w-px bg-zinc-950/5 hidden xl:block"></div>
              <div className="h-full w-px bg-zinc-950/5"></div>
            </div>

            <Header />
            <div className="flex-1 relative z-10 px-6 md:px-10 xl:px-12 pb-8">
              {children}
            </div>
            <Footer />
          </main>
        </div>

        <AnalyticsWrapper />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
