# NARAÈ

> Bath Soak Aromaterapi Premium - Clean Neutral Luxury

[![Vercel](https://img.shields.io/badge/Vercel-Terdeploy-black?logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

[English](README.md) | **Bahasa Indonesia** | [中文](README_zh.md)

---

## 🌸 Tentang

NARAÈ adalah brand bath soak aromaterapi lokal dengan konsep **clean neutral luxury**. Website ini berfungsi sebagai katalog produk yang mengarahkan pelanggan ke marketplace (Shopee) untuk pembelian. Dibangun dengan teknologi web modern, website ini menawarkan pengalaman berbelanja yang premium dan intuitif yang mencerminkan kualitas produk NARAÈ.

NARAÈ hadir untuk memberikan pengalaman relaksasi yang mewah namun tetap terjangkau. Setiap varian bath soak diformulasikan dengan bahan-bahan alami berkualitas tinggi yang menenangkan pikiran dan menutrisi kulit. Dengan desain kemasan yang elegan dan aroma yang memukau, NARAÈ menghadirkan ritual perawatan diri yang layak dinikmati setiap hari.

### Produk

| Varian | Ukuran | Harga | Link |
|--------|--------|-------|------|
| Mini | 30g | Rp 25.000 | [Shopee](https://shopee.co.id) |
| Medium | 100g | Rp 50.000 | [Shopee](https://shopee.co.id) |
| Premium | 250g | Rp 99.000 | [Shopee](https://shopee.co.id) |

---

## 🚀 Demo Langsung

**URL Produksi:** `https://narae.vercel.app`

---

## ✨ Fitur

- **Desain Glassmorphism Modern** - UI premium dengan efek kaca buram yang memberikan kesan mewah dan elegan
- **Layout Responsif** - Mobile-first, berfungsi di semua perangkat dengan pengalaman yang konsisten
- **Loading Cepat** - Static site generation dengan Next.js memastikan halaman dimuat dalam hitungan detik
- **SEO Optimal** - Meta tags, Open Graph, dan semantic HTML untuk visibilitas mesin pencari yang baik
- **Tanpa Backend** - 100% static, tidak memerlukan database sehingga biaya operasional minimal
- **Integrasi Marketplace Langsung** - Tombol Beli mengarah ke Shopee & WhatsApp untuk kemudahan transaksi

---

## 🛠️ Teknologi

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) — Framework React full-featured dengan server-side rendering
- **Runtime:** [React 19](https://react.dev/) — Library UI terbaru dengan performa yang ditingkatkan
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS framework untuk styling yang cepat dan konsisten
- **Ikon:** [Lucide React](https://lucide.dev/) — Set ikon modern yang ringan dan dapat dikustomisasi
- **Font:** Cormorant Garamond, Inter, Playfair Display — Kombinasi font serif dan sans-serif yang elegan
- **Hosting:** [Vercel](https://vercel.com) (Free Tier) — Platform deployment dengan CDN global dan SSL otomatis

---

## 📦 Instalasi

```bash
# Clone repositori
git clone https://github.com/mulkymalikuldhrs/narae.git
cd narae/website

# Install dependensi
npm install

# Jalankan development server
npm run dev

# Build untuk produksi
npm run build
```

---

## 🎨 Sistem Desain

### Warna
- **Cream:** `#F5F0E8` - Latar belakang utama yang hangat dan menenangkan
- **Gold:** `#C9B896` - Aksen dan tombol CTA yang memberikan kesan mewah
- **Charcoal:** `#2D2D2D` - Teks utama yang elegan dan mudah dibaca
- **Lavender:** `#E8DFE8` - Aksen sekunder yang lembut dan feminin
- **Gray Warm:** `#6B6B6B` - Teks sekunder yang tidak mengganggu

### Tipografi
- **Heading:** Cormorant Garamond (Serif) — Font serif klasik yang memberikan kesan luxury
- **Body:** Inter (Sans-serif) — Font sans-serif modern yang mudah dibaca
- **Aksen:** Playfair Display (Serif) — Font serif dekoratif untuk elemen khusus

### Komponen
- Kartu kaca dengan efek backdrop blur yang memukau
- Efek teks gradien yang elegan
- Animasi hover yang halus dan responsif
- Grid responsif yang adaptif di semua ukuran layar

---

## 📁 Struktur Proyek

```
NARAE/
├── website/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout utama dengan font
│   │   ├── page.tsx            # Halaman utama
│   │   ├── products/
│   │   │   └── page.tsx        # Halaman katalog produk
│   │   └── globals.css         # Gaya global & glassmorphism
│   ├── components/             # Komponen React
│   │   ├── Header.tsx          # Navigasi
│   │   ├── Hero.tsx            # Bagian hero
│   │   ├── ProductCard.tsx     # Kartu showcase produk
│   │   ├── ProductGrid.tsx     # Grid produk
│   │   ├── Benefits.tsx        # Bagian fitur
│   │   ├── Testimonials.tsx    # Carousel testimoni
│   │   ├── Footer.tsx          # Footer
│   │   └── Button.tsx          # Tombol yang dapat digunakan kembali
│   ├── lib/
│   │   └── products.ts         # Data produk
│   └── public/images/          # Aset statis
├── NARAE.md                    # Rencana bisnis
├── SPEC.md                     # Spesifikasi website
├── AGENTS.md                   # Panduan pengembangan
├── CHANGELOG.md                # Riwayat versi
└── README.md                   # File ini
```

---

## 🚀 Deployment

### Vercel (Rekomendasi)

1. Push kode ke GitHub
2. Import proyek di [Vercel](https://vercel.com)
3. Deploy secara otomatis

### Build Manual

```bash
cd website
npm run build
# Upload folder .next ke hosting
```

---

## 📱 Performa

- **Skor Lighthouse:** 95+ (estimasi)
- **Waktu Build:** ~30 detik
- **Ukuran Bundel:** Minimal (tanpa library berat)
- **Gambar:** Teroptimasi (182KB hero vs 16MB asli)

---

## 📄 Lisensi

MIT License - silakan gunakan template ini untuk proyek Anda sendiri. Lihat [LICENSE](LICENSE) untuk detail.

---

## 👤 Penulis

**Mulky Malikul Dhaher**

- 📧 Email: [mulkymalikuldhaher@email.com](mailto:mulkymalikuldhaher@email.com)
- 💬 WhatsApp: [+6285322624048](https://wa.me/6285322624048)
- 🌐 Website: [NARAÈ](https://narae.vercel.app)
- 🐙 GitHub: [@mulkymalikuldhrs](https://github.com/mulkymalikuldhrs)

---

<p align="center">
  <strong>Tenangkan pikiran, manjakan diri.</strong>
</p>

<p align="center">
  Dibuat dengan ❤️ di Jakarta
</p>
