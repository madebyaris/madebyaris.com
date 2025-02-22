import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsWrapper } from "@/components/providers/analytics-wrapper";
import { cn } from "@/lib/utils";
import "./globals.css";

// Optimize font loading
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
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
    icon: '/aris.png',
    shortcut: '/aris.png',
    apple: '/aris.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/aris.png',
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
        url: '/aris.png',
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
    images: ['/aris.png'],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://madebyaris.com'),
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
    google: 'your-google-verification-code', // Add your Google verification code
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
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Other preconnects */}
        <link rel="preconnect" href="https://cdn.vercel-insights.com" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/aris.png" as="image" />
        
        {/* Meta tags for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body 
        className={cn(
          "min-h-screen font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          jakarta.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Gradients - Moved to after main content */}
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>

          {/* Light mode gradient - Deferred loading */}
          <div 
            className="fixed inset-0 -z-10 h-full w-full opacity-0 animate-fade-in dark:hidden"
            style={{
              background: "radial-gradient(100% 50% at 50% 0%, rgba(0,163,255,0.13) 0, rgba(0,163,255,0) 50%, rgba(0,163,255,0) 100%)",
              willChange: "transform",
              transform: "translateZ(0)"
            }}
            aria-hidden="true"
          />
          
          {/* Dark mode gradient - Deferred loading */}
          <div 
            className="fixed inset-0 -z-10 hidden h-full w-full bg-neutral-950 opacity-0 animate-fade-in dark:block"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))",
              willChange: "transform",
              transform: "translateZ(0)"
            }}
            aria-hidden="true"
          />
        </ThemeProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
