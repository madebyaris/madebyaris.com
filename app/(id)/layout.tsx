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

const defaultTitle = "Jasa pembuatan website | Aris Setiawan";
const defaultDescription =
  "Jasa pembuatan website dari satu senior developer di Indonesia. Next.js untuk website custom. WordPress, PHP, maintenance, dan SEO teknis juga tersedia.";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s${siteConfig.titleSuffix}`,
  },
  description: defaultDescription,
  authors: [{ name: siteConfig.author, url: `${productionUrl}/about` }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  metadataBase: new URL(productionUrl),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: productionUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: siteConfig.name,
  },
};

export default function IndonesianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteDocument lang="id">{children}</SiteDocument>;
}
