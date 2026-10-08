import type { Metadata } from "next";
import { SiteDocument } from "@/components/site-document";
import { NotFoundView } from "@/components/not-found-view";
import "./globals.css";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Aris Setiawan" },
  description:
    "That page is not on madebyaris.com. It may have moved. Try the homepage, services, or send the project you had in mind.",
};

export default function GlobalNotFound() {
  return (
    <SiteDocument lang="en">
      <NotFoundView />
    </SiteDocument>
  );
}
