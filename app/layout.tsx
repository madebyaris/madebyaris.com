import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

// Optimize font loading
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Add display swap for better performance
  preload: true,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "MadeByAris - Portfolio",
  description: "Personal portfolio and blog of Aris, showcasing projects and thoughts on web development.",
  keywords: ["portfolio", "web development", "frontend", "react", "nextjs"],
  authors: [{ name: "Aris" }],
  creator: "Aris",
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
    title: "MadeByAris - Portfolio",
    description: "Personal portfolio and blog of Aris, showcasing projects and thoughts on web development.",
    siteName: "MadeByAris",
    images: [
      {
        url: '/aris.png',
        width: 800,
        height: 800,
        alt: 'MadeByAris',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MadeByAris - Portfolio",
    description: "Personal portfolio and blog of Aris, showcasing projects and thoughts on web development.",
    creator: "@madebyaris",
    images: ['/aris.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", geistSans.variable, geistMono.variable, jakarta.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Light mode gradient - Optimized */}
          <div 
            className="fixed inset-0 -z-10 h-full w-full dark:hidden"
            style={{
              background: "radial-gradient(100% 50% at 50% 0%, rgba(0,163,255,0.13) 0, rgba(0,163,255,0) 50%, rgba(0,163,255,0) 100%)"
            }}
            aria-hidden="true"
          />
          
          {/* Dark mode gradient - Optimized */}
          <div 
            className="fixed inset-0 -z-10 hidden h-full w-full bg-neutral-950 dark:block"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))"
            }}
            aria-hidden="true"
          />

          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <AnalyticsProvider />
      </body>
    </html>
  );
}
