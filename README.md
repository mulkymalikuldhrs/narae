# NARAÈ

> Premium Bath Soak Aromatherapy - Clean Neutral Luxury

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 🌸 About

NARAÈ adalah brand bath soak aromaterapi lokal dengan konsep **clean neutral luxury**. Website ini berfungsi sebagai katalog produk yang mengarahkan pelanggan ke marketplace (Shopee) untuk pembelian.

### Produk

| Variant | Size | Price | Link |
|---------|------|-------|------|
| Mini | 30g | Rp 25.000 | [Shopee](https://shopee.co.id) |
| Medium | 100g | Rp 50.000 | [Shopee](https://shopee.co.id) |
| Premium | 250g | Rp 99.000 | [Shopee](https://shopee.co.id) |

## 🚀 Live Demo

**Production URL:** `https://narae.vercel.app` (update after deploy)

## ✨ Features

- **Modern Glassmorphism Design** - Premium UI with frosted glass effects
- **Responsive Layout** - Mobile-first, works on all devices
- **Fast Loading** - Static site generation with Next.js
- **SEO Optimized** - Meta tags, Open Graph, semantic HTML
- **Zero Backend** - 100% static, no database needed
- **Direct Marketplace Integration** - Tombol Beli ke Shopee & WhatsApp

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Cormorant Garamond, Inter, Playfair Display
- **Hosting:** [Vercel](https://vercel.com) (Free Tier)

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/username/narae.git
cd narae/website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎨 Design System

### Colors
- **Cream:** `#F5F0E8` - Primary background
- **Gold:** `#C9B896` - Accent & CTAs
- **Charcoal:** `#2D2D2D` - Primary text
- **Lavender:** `#E8DFE8` - Secondary accent
- **Gray Warm:** `#6B6B6B` - Secondary text

### Typography
- **Headings:** Cormorant Garamond (Serif)
- **Body:** Inter (Sans-serif)
- **Accent:** Playfair Display (Serif)

### Components
- Glass cards with backdrop blur
- Gradient text effects
- Smooth hover animations
- Mobile-responsive grids

## 📁 Project Structure

```
NARAE/
├── website/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx            # Home page
│   │   ├── products/
│   │   │   └── page.tsx        # Product catalog page
│   │   └── globals.css         # Global styles & glassmorphism
│   ├── components/             # React components
│   │   ├── Header.tsx          # Navigation
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ProductCard.tsx     # Product showcase card
│   │   ├── ProductGrid.tsx     # Products grid
│   │   ├── Benefits.tsx        # Features section
│   │   ├── Testimonials.tsx    # Testimonials carousel
│   │   ├── Footer.tsx          # Footer
│   │   └── Button.tsx          # Reusable button
│   ├── lib/
│   │   └── products.ts         # Product data
│   └── public/images/          # Static assets
├── NARAE.md                    # Business plan
├── SPEC.md                     # Website specification
├── AGENTS.md                   # Development guidelines
├── CHANGELOG.md                # Version history
└── README.md                   # This file
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Build

```bash
cd website
npm run build
# Upload .next folder to hosting
```

## 📝 Environment Variables

No environment variables needed for basic operation.

Optional:
```env
# For analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📱 Performance

- **Lighthouse Score:** 95+ (estimated)
- **Build Time:** ~30 seconds
- **Bundle Size:** Minimal (no heavy libraries)
- **Images:** Optimized (182KB hero vs 16MB original)

## 🔧 Customization

### Update Shopee Links
Edit `components/ProductCard.tsx`:
```typescript
const shopeeLink = "https://shopee.co.id/your-store/..."
```

### Update WhatsApp Number
Edit components dengan WhatsApp link:
```typescript
const waLink = `https://wa.me/6285322624048?text=${message}`
```

### Change Products
Edit `lib/products.ts`:
```typescript
export const products: Product[] = [
  // Add/Edit products here
]
```

## 📄 License

MIT License - feel free to use this template for your own projects.

## 👤 Author

**Mulky Malikul Dhaher**

- 📧 Email: [mulkymalikuldhr@mail.com](mailto:mulkymalikuldhr@mail.com)
- 💬 WhatsApp: [+6285322624048](https://wa.me/6285322624048)
- 🌐 Website: [NARAÈ](https://narae.vercel.app)

---

<p align="center">
  <strong>Tenangkan pikiran, manjakan diri.</strong>
</p>

<p align="center">
  Made with ❤️ in Jakarta
</p>
---

## 🤝 Contributing

Contributions are welcome! We encourage the community to help improve this project.

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. Open a **Pull Request**

Please make sure to update tests as appropriate and follow the existing code style.

---

## 📬 Contact

**Mulky Malikul Dhaher** — [mulkymalikuldhaher@email.com](mailto:mulkymalikuldhaher@email.com)

GitHub: [https://github.com/mulkymalikuldhrs](https://github.com/mulkymalikuldhrs)

---

## ⚠️ Disclaimer

**This project is for Education Purpose only.**

All content, code, and documentation provided in this repository are intended solely for educational and research purposes. Nothing in this repository constitutes financial, investment, legal, or professional advice.

**Risiko apapun tidak kita tanggung.** (We are not responsible for any risks or damages.)

Use at your own risk. The authors and contributors assume no liability for any losses, damages, or consequences arising from the use of this software or information provided herein.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

Copyright © Mulky Malikul Dhaher. All rights reserved.

