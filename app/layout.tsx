import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ThemeProvider from "@/components/providers/theme-provider";
import AnalyticsWrapper from "@/components/providers/analytics-wrapper";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import { cn } from "@/lib/utils";
import { criticalCSS } from "@/lib/critical-css";
import "./globals.css";

// Optimize font loading with display swap and strategic preload
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  adjustFontFallback: false, // Let Next.js handle fallback optimization
  fallback: [
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'BlinkMacSystemFont', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'sans-serif'
  ]
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false, // Only preload primary font
  adjustFontFallback: false,
  fallback: [
    'ui-monospace',
    'SFMono-Regular', 
    'Menlo', 
    'Monaco', 
    'Consolas', 
    'Liberation Mono', 
    'Courier New', 
    'monospace'
  ]
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  preload: false, // Only preload primary font
  weight: ["400", "500", "600", "700"], // Include medium weight for better hierarchy
  adjustFontFallback: true, // Let Google Fonts optimize fallback
  fallback: [
    'ui-sans-serif',
    'system-ui', 
    '-apple-system', 
    'BlinkMacSystemFont', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'sans-serif'
  ]
});

export const metadata: Metadata = {
  title: {
    default: "Senior Full-Stack Developer | Next.js, React & WordPress Architect | Aris Setiawan",
    template: "%s | Aris Setiawan"
  },
  description: "Expert Full-Stack Developer specializing in enterprise-scale applications. Delivering high-performance solutions with Next.js, React, and WordPress. 12+ years of experience in architecting scalable web systems and headless CMS solutions.",
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
    locale: "en_US",
    url: "https://madebyaris.com",
    title: "Senior Full-Stack Developer | Next.js, React & WordPress Architect | Aris Setiawan",
    description: "Senior Full-Stack Developer with 12+ years of experience specializing in Next.js, React, WordPress, and enterprise-scale web applications. Expert in headless CMS architecture and high-performance systems.",
    siteName: "Aris Setiawan - Senior Full-Stack Developer",
    images: [
      {
        url: '/favicon.ico',
        width: 800,
        height: 800,
        alt: 'Aris Setiawan - Senior Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Full-Stack Developer | Next.js & WordPress Architect",
    description: "12+ years of experience building enterprise-scale web applications with Next.js, React, and WordPress.",
    creator: "@madebyaris",
    images: ['/favicon.ico'],
  },
  metadataBase: new URL('https://madebyaris.com'),
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
        {/* Preconnect to critical domains (Google Fonts handled automatically by Next.js) */}
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
        <link rel="preload" href="/astro.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/aris.png" as="image" fetchPriority="high" />
        
        {/* Preload critical font files */}
        <link 
          rel="preload" 
          href="/fonts/GeistVF.woff" 
          as="font" 
          type="font/woff" 
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        
        {/* Prefetch likely next pages */}
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/blog" />
        <link rel="prefetch" href="/projects" />
        
        {/* Meta tags for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        
        {/* Core Web Vitals optimization hint */}
        <meta name="renderMode" content="simultaneously" />
        
        {/* Critical CSS inlined for faster rendering */}
        <style id="critical-css" dangerouslySetInnerHTML={{ 
          __html: criticalCSS.replace(/\s+/g, ' ').trim() 
        }} />
      </head>
      <body 
        suppressHydrationWarning
        className={cn(
          "min-h-screen font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          jakarta.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {/* Main content - prioritize this */}
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>

          {/* Light mode gradient - Optimized with will-change and contain */}
          <div 
            className="fixed inset-0 -z-10 h-full w-full opacity-0 animate-fade-in dark:hidden"
            style={{
              background: "radial-gradient(100% 50% at 50% 0%, rgba(0,163,255,0.13) 0, rgba(0,163,255,0) 50%, rgba(0,163,255,0) 100%)",
              willChange: "opacity",
              contain: "paint",
            }}
            aria-hidden="true"
          />
          
          {/* Dark mode gradient - Optimized with will-change and contain */}
          <div 
            className="fixed inset-0 -z-10 hidden h-full w-full bg-neutral-950 opacity-0 animate-fade-in dark:block"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))",
              willChange: "opacity",
              contain: "paint",
            }}
            aria-hidden="true"
          />
        </ThemeProvider>
        <AnalyticsWrapper />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
