import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk | NARAÈ",
  description: "Koleksi NARAÈ Bath Soak Aromaterapi — Mini, Medium, dan Premium.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
