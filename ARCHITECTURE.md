# Arsitektur NARAÈ

> Dokumentasi arsitektur sistem untuk website NARAÈ

---

## Ikhtisar Arsitektur

NARAÈ adalah website statis yang dibangun dengan Next.js 16 dan di-deploy melalui Vercel. Arsitektur dipilih untuk memaksimalkan performa, meminimalkan biaya operasional, dan menyediakan pengalaman pengguna yang premium. Karena ini adalah situs katalog produk tanpa backend, seluruh konten di-generate saat build time dan disajikan sebagai file statis melalui CDN global Vercel.

```
┌─────────────────────────────────────────────────────────┐
│                    NARAÈ WEBSITE                         │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              PRESENTATION LAYER                    │  │
│  │  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │  │
│  │  │ Next.js  │  │ Tailwind │  │ Framer Motion  │  │  │
│  │  │ App      │  │ CSS 4    │  │ Animations     │  │  │
│  │  │ Router   │  │          │  │                │  │  │
│  │  └──────────┘  └──────────┘  └────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
│                         │                                │
│  ┌───────────────────────────────────────────────────┐  │
│  │              COMPONENT LAYER                       │  │
│  │  Header · Hero · ProductGrid · Benefits           │  │
│  │  Testimonials · Footer · Button · ProductCard     │  │
│  └───────────────────────────────────────────────────┘  │
│                         │                                │
│  ┌───────────────────────────────────────────────────┐  │
│  │              DATA LAYER                            │  │
│  │  products.ts (Static Data) · public/images/       │  │
│  └───────────────────────────────────────────────────┘  │
│                         │                                │
│  ┌───────────────────────────────────────────────────┐  │
│  │              DEPLOYMENT LAYER                      │  │
│  │  Vercel CDN · SSL Auto · Edge Caching             │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              EXTERNAL INTEGRATIONS                 │  │
│  │  Shopee (Purchase) · WhatsApp (Contact)           │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Lapisan Presentasi

### Next.js 16 (App Router)

Website menggunakan Next.js 16 dengan App Router, memanfaatkan fitur-fitur berikut:

- **Static Site Generation (SSG)**: Semua halaman di-generate saat build time untuk performa optimal. Tidak ada server-side rendering runtime yang diperlukan.
- **App Router**: Sistem routing berbasis file yang intuitif, di mana setiap folder dalam `app/` menjadi route dan setiap `page.tsx` menjadi halaman.
- **Layout System**: Layout bersama (`layout.tsx`) yang membungkus semua halaman dengan font, metadata, dan elemen UI yang konsisten.
- **Image Optimization**: Komponen `next/image` digunakan untuk optimasi otomatis gambar (format WebP, lazy loading, responsive sizing).

### Tailwind CSS 4

Sistem styling utility-first yang menyediakan:

- **Design Tokens**: Warna, font, dan spacing yang terdefinisi sebagai CSS custom properties untuk konsistensi global
- **Glassmorphism Utilities**: Class utility khusus untuk efek kaca buram (`backdrop-blur`, `bg-white/10`, `border-white/20`)
- **Responsive Design**: Breakpoints mobile-first (`sm:`, `md:`, `lg:`, `xl:`) untuk adaptasi layout yang mulus
- **Dark Mode Ready**: Konfigurasi Tailwind yang mendukung tema gelap jika diperlukan di masa depan

### Animasi

Animasi menggunakan pendekatan CSS-first dengan Tailwind:

- **Hover Transitions**: `transition-all duration-300` untuk efek hover yang halus
- **Scroll Animations**: CSS `@keyframes` dan `animation` untuk efek muncul saat scroll
- **Gradient Animations**: Animasi background gradient untuk efek visual yang dinamis

---

## Lapisan Komponen

### Struktur Komponen

Komponen React diorganisir berdasarkan fungsionalitas:

| Komponen | Tanggung Jawab |
|----------|---------------|
| `Header.tsx` | Navigasi utama dengan logo, menu, dan CTA button |
| `Hero.tsx` | Bagian hero dengan headline, subheadline, dan gambar produk utama |
| `ProductCard.tsx` | Kartu produk dengan gambar, deskripsi, harga, dan tombol beli |
| `ProductGrid.tsx` | Grid responsif yang menampilkan semua kartu produk |
| `Benefits.tsx` | Bagian manfaat produk dengan ikon dan deskripsi |
| `Testimonials.tsx` | Carousel testimoni pelanggan |
| `Footer.tsx` | Footer dengan link, informasi kontak, dan social media |
| `Button.tsx` | Komponen tombol yang dapat digunakan kembali dengan varian |

### Pola Desain Komponen

Setiap komponen mengikuti pola yang konsisten:

1. **TypeScript Interface**: Props didefinisikan dengan TypeScript untuk keamanan tipe
2. **Tailwind Classes**: Styling menggunakan Tailwind utility classes
3. **Responsive Props**: Komponen menerima props untuk kustomisasi tanpa mengubah kode internal
4. **Accessibility**: Semua komponen mengikuti panduan aksesibilitas (ARIA labels, keyboard navigation)

---

## Lapisan Data

### Data Produk

Data produk disimpan dalam file TypeScript statis (`lib/products.ts`):

```typescript
export interface Product {
  id: string;
  name: string;
  variant: string;
  size: string;
  price: string;
  description: string;
  image: string;
  shopeeLink: string;
}
```

Pendekatan ini dipilih karena:
- Tidak memerlukan database
- Data dapat diupdate dengan mudah melalui pull request
- Build-time validation memastikan konsistensi data
- Perubahan data memicu rebuild otomatis di Vercel

### Aset Statis

Gambar dan aset lainnya disimpan dalam `public/images/`:

- Logo dan branding materials
- Foto produk (optimized untuk web)
- Hero images (dengan kompresi dan format modern)
- Mockup produk untuk showcase

---

## Lapisan Deployment

### Vercel

Website di-deploy menggunakan Vercel dengan konfigurasi berikut:

- **Build Command**: `npm run build` (Next.js production build)
- **Output Directory**: `.next/` (Next.js build output)
- **Node.js Version**: 18.x (Vercel default)
- **Region**: Singapore (terdekat dengan target pasar Indonesia)

### Fitur Vercel yang Digunakan

- **Edge Network**: CDN global dengan 100+ edge locations
- **SSL Otomatis**: Sertifikat SSL gratis yang diperbarui otomatis
- **Preview Deployments**: Setiap pull request mendapat URL preview unik
- **Analytics**: Web Analytics dan Web Vitals monitoring
- **Image Optimization**: On-the-fly image optimization melalui Vercel Image CDN

### Performa

Target performa website:

- **First Contentful Paint (FCP)**: < 1.5 detik
- **Largest Contentful Paint (LCP)**: < 2.5 detik
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Lighthouse Score**: 95+

---

## Integrasi Eksternal

### Shopee

Tautan pembelian mengarah ke toko Shopee NARAÈ:

- Setiap produk memiliki tautan Shopee unik
- Tautan dikonfigurasi dalam data produk (`shopeeLink`)
- Tracking UTM dapat ditambahkan untuk analisis konversi

### WhatsApp

Tombol kontak mengarah ke WhatsApp:

- Nomor WhatsApp: +6285322624048
- Pesan otomatis yang ramah ketika pelanggan mengklik tombol
- Digunakan untuk pertanyaan produk dan pemesanan kustom

---

## Keamanan

Karena website ini sepenuhnya statis, permukaan serangan sangat minimal:

- Tidak ada database yang dapat dikompromikan
- Tidak ada API endpoint yang dapat dieksploitasi
- Tidak ada autentikasi pengguna yang dapat diserang
- Vercel menangani DDoS protection dan SSL
- Content Security Policy dapat dikonfigurasi jika diperlukan

---

## Skalabilitas

### Skalabilitas Saat Ini

- Vercel CDN secara otomatis menangani peningkatan traffic
- Static files disajikan dari edge locations terdekat
- Tidak ada batasan concurrent users karena tidak ada server-side processing

### Pertimbangan Masa Depan

Jika diperlukan fitur dinamis di masa depan:

- **Database**: Integrate dengan Vercel KV atau PlanetScale untuk data dinamis
- **Authentication**: NextAuth.js untuk fitur akun pelanggan
- **E-commerce**: Integrasi dengan payment gateway untuk transaksi langsung
- **CMS**: Headless CMS (Sanity, Contentful) untuk manajemen konten yang mudah

---

## Kontak

Untuk pertanyaan arsitektur atau kontribusi teknis, hubungi:

**Mulky Malikul Dhaher** — [mulkymalikuldhaher@email.com](mailto:mulkymalikuldhaher@email.com)
