import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AnalyticsWrapper from "@/components/providers/analytics-wrapper";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import { productionUrl, siteConfig } from "@/lib/seo/config";
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

export const metadata: Metadata = {
  title: {
    default: "Senior Full-Stack Developer | Next.js & WordPress | MadeByAris",
    template: "%s | Aris Setiawan"
  },
  description: "12+ years building enterprise apps with Next.js, React, WordPress, and PHP. Headless CMS and scalable architecture. Indonesia-based, worldwide clients.",
  keywords: [
    "Senior Next.js Developer",
    "Enterprise React Development",
    "Headless WordPress Expert",
    "Full-Stack PHP Developer",
    "Web Architecture Specialist",
    "Enterprise Web Solutions",
    "React Application Architect",
    "WordPress Development Expert",
    "API Integration Specialist",
    "Performance Optimization",
    "Scalable Web Applications",
    "Technical Leadership",
    "Modern Web Development",
    "Custom WordPress Solutions",
    "Next.js Architecture",
    "Enterprise CMS Solutions"
  ],
  authors: [{ name: "Aris Setiawan" }],
  creator: "Aris Setiawan",
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
    title: "Senior Full-Stack Developer | Next.js & WordPress | MadeByAris",
    description: "12+ years building enterprise apps with Next.js, React, WordPress, and PHP. Headless CMS and scalable architecture.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Aris Setiawan - Senior Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Full-Stack Developer | Next.js & WordPress",
    description: "12+ years building enterprise apps with Next.js, React, WordPress, and PHP.",
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  metadataBase: new URL(productionUrl),
  alternates: {
    canonical: '/',
  },
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
    google: process.env.GOOGLE_VERIFICATION_CODE || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.vercel-insights.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        
        {/* DNS Prefetch for performance optimization */}
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        
        {/* Preconnect to WordPress API if available */}
        {process.env.NEXT_PUBLIC_WP_API_URL && (
          <link rel="preconnect" href={process.env.NEXT_PUBLIC_WP_API_URL} />
        )}
        
        {/* Preload critical assets with priority hints */}
        <link rel="preload" href="/aris.png" as="image" fetchPriority="high" />
        
        {/* Prefetch likely next pages */}
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/blog" />
        <link rel="prefetch" href="/projects" />
        
      </head>
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
