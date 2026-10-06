import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";

export const metadata: Metadata = {
  title: { absolute: "Halaman tidak ditemukan | Aris Setiawan" },
  description:
    "Halaman itu tidak ada di madebyaris.com. Mungkin sudah pindah. Coba beranda, halaman layanan, atau kirim kebutuhan proyeknya.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundView />;
}
