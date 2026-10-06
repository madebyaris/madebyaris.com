import type { Metadata, Viewport } from "next";
import { SiteDocument } from "@/components/site-document";
import { productionUrl, siteConfig } from "@/lib/seo/config";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const verificationOther: Record<string, string> = {};
if (process.env.BING_VERIFICATION_CODE) verificationOther["msvalidate.01"] = process.env.BING_VERIFICATION_CODE;
if (process.env.YANDEX_VERIFICATION_CODE) verificationOther["yandex-verification"] = process.env.YANDEX_VERIFICATION_CODE;

const defaultTitle = "Hire a full stack developer | Aris Setiawan";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s${siteConfig.titleSuffix}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: `${productionUrl}/about` }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: productionUrl,
    title: defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Aris Setiawan, full stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
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

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
