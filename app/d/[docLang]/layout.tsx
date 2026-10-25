import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { productionUrl, siteConfig } from "@/lib/seo/config";
import { isDocumentLang, type DocumentLang } from "@/lib/document-lang";
import { SiteChrome, documentBodyClassName } from "@/components/document-shell";
import "../../globals.css";

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
  verification: {
    ...(process.env.GOOGLE_VERIFICATION_CODE ? { google: process.env.GOOGLE_VERIFICATION_CODE } : {}),
    ...(Object.keys(verificationOther).length ? { other: verificationOther } : {}),
  },
};

export async function generateStaticParams() {
  return [{ docLang: 'en' satisfies DocumentLang }]
}

export default async function DocumentLangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ docLang: string }>;
}) {
  const { docLang } = await params;
  if (!isDocumentLang(docLang)) {
    notFound();
  }

  return (
    <html lang={docLang} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={documentBodyClassName()}
        style={{
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        }}
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
