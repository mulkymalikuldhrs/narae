import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NARAÈ | Bath Soak Aromaterapi Premium",
  description: "Tenangkan pikiran, manjakan diri. Bath soak aromaterapi premium lokal dengan bahan alami.",
  keywords: ["bath soak", "aromaterapi", "garam mandi", "relaksasi", "spa", "mandi", "essential oil", "indonesia"],
  openGraph: {
    title: "NARAÈ | Bath Soak Aromaterapi Premium",
    description: "Tenangkan pikiran, manjakan diri. Bath soak aromaterapi premium lokal dengan bahan alami.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} ${playfair.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
