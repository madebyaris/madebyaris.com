import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "MadeByAris - Portfolio",
  description: "Personal portfolio and blog of Aris, showcasing projects and thoughts on web development.",
  keywords: ["portfolio", "web development", "frontend", "react", "nextjs"],
  authors: [{ name: "Aris" }],
  creator: "Aris",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madebyaris.com",
    title: "MadeByAris - Portfolio",
    description: "Personal portfolio and blog of Aris, showcasing projects and thoughts on web development.",
    siteName: "MadeByAris",
  },
  twitter: {
    card: "summary_large_image",
    title: "MadeByAris - Portfolio",
    description: "Personal portfolio and blog of Aris, showcasing projects and thoughts on web development.",
    creator: "@madebyaris",
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
          {/* Light mode gradient */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:hidden"></div>
          
          {/* Dark mode gradient */}
          <div className="fixed inset-0 -z-10 hidden h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:block"></div>

          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights/>
      </body>
    </html>
  );
}
