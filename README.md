
<!-- CAPSULE-RENDER HEADER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0a1a0a,50:1a2d1a,100:2a402a&fontColor=a3e635&descColor=bef264&height=220&section=header&text=Narae&fontSize=70&desc=Aromatherapy%20Brand%20Website&animation=fadeIn" />

<!-- TYPING SVG -->
<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=A3E635&center=true&vCenter=true&width=600&lines=Natural+Aromatherapy+Experience;TypeScript+%2B+React;Calm+%2C+Clean+%2C+Natural+Design;Pure+Essence+of+Nature" alt="Typing SVG" />
  </a>
</div>

<br/>

<!-- BADGES -->
<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

</div>

---

## Overview

**Narae** is an elegant brand website for an aromatherapy product line. Built with TypeScript and React, it features a nature-inspired design language, product catalog, educational content about essential oils, and a seamless shopping experience — all wrapped in a calming, earthy aesthetic that reflects the brand's natural philosophy and commitment to pure, sustainable ingredients.

## Visual Architecture

### E-Commerce Flow

```mermaid
flowchart LR
    subgraph Browse["Browse"]
        A["Home Page"] --> B["Product Catalog"]
        B --> C["Product Detail"]
        C --> D["Scent Profile Guide"]
    end

    subgraph Cart["Cart"]
        D --> E["Add to Cart"]
        E --> F["Review Cart"]
        F --> G["Adjust Quantities"]
    end

    subgraph Checkout["Checkout"]
        G --> H["Shipping Info"]
        H --> I["Payment - Stripe"]
    end

    subgraph Complete["Complete"]
        I --> J["Order Confirmed"]
        J --> K["Tracking and Updates"]
    end

    style A fill:#1a2d1a,color:#a3e635
    style I fill:#635bff,color:#fff
    style J fill:#22c55e,color:#fff
```

### Scent Profile Guide

```mermaid
flowchart TB
    subgraph Quiz["Quiz Experience"]
        Start["Start Scent Quiz"] --> Q1["Q1: Mood Preference"]
        Q1 --> Q2["Q2: Environment"]
        Q2 --> Q3["Q3: Scent Intensity"]
        Q3 --> Q4["Q4: Season and Occasion"]
    end

    subgraph Engine["Matching Engine"]
        Q4 --> Analyze["Analyze Responses"]
        Analyze --> Match["Match Scent Profiles"]
        Match --> Rank["Rank Product Fits"]
    end

    subgraph Rec["Recommendation"]
        Rank --> Primary["Primary Recommendation"]
        Rank --> Secondary["Alternative Scents"]
        Rank --> Bundle["Curated Bundle Suggestion"]
    end

    style Start fill:#2a402a,color:#bef264
    style Analyze fill:#1a2d1a,color:#a3e635
    style Primary fill:#22c55e,color:#fff
```

### Architecture — Lightweight Next.js + Stripe Stack

```mermaid
graph TB
    subgraph Frontend["Frontend - Next.js 16"]
        App["App Router"]
        Pages["Page Components"]
        Zustand["Zustand Store"]
        TW["Tailwind CSS 4"]
    end

    subgraph Commerce["E-Commerce Layer"]
        Catalog["Product Catalog"]
        Cart["Shopping Cart"]
        Stripe["Stripe Checkout"]
    end

    subgraph Static["Static and Hosting"]
        SSG["Static Site Generation"]
        CDN["CDN Delivery"]
    end

    App --> Pages
    Pages --> Zustand
    Pages --> TW
    Catalog --> Cart
    Cart --> Stripe
    App --> SSG
    SSG --> CDN

    style App fill:#000,color:#fff
    style Zustand fill:#764abc,color:#fff
    style Stripe fill:#635bff,color:#fff
    style TW fill:#06B6D4,color:#fff
```

> **Stack Note**: Narae uses a deliberately lighter stack than typical e-commerce apps — no Prisma ORM, no Radix UI, no heavy component library. Next.js 16 handles SSR/SSG, Zustand manages cart state, and Tailwind CSS 4 provides styling. Stripe handles checkout via hosted payment flow.

---

## Features

### Product Experience
- **Product Catalog** — Browse essential oils, diffusers, and curated blends with detailed descriptions
- **Scent Profile Guide** — Interactive quiz to find your perfect scent match
- **Product Reviews** — Customer ratings and detailed reviews
- **Gift Sets** — Curated gift collections for every occasion

### Educational Content
- **Essential Oil Guide** — Comprehensive information on each oil's properties and uses
- **Usage Instructions** — Diffusion, topical, and inhalation safety guidelines
- **Blog** — Wellness tips, seasonal blends, and lifestyle content
- **FAQ** — Common questions about aromatherapy practices

### Shopping and Subscription
- **Shopping Cart** — Add to cart, checkout, and order tracking
- **Subscription Boxes** — Monthly aromatherapy subscription with customizable preferences
- **Wishlist** — Save favorite products for later
- **Loyalty Program** — Points and rewards for repeat customers

### Design and UX
- **Nature-Inspired Aesthetic** — Earth tones, organic shapes, and botanical imagery
- **Responsive Design** — Beautiful across all devices
- **Dark/Light Mode** — Theme switching for comfortable browsing
- **Accessibility** — WCAG-compliant design for all users

## Quick Start

### Prerequisites
- Node.js 18+
- Payment provider account for shopping features

### Installation

```bash
git clone https://github.com/mulkymalikuldhrs/narae.git
cd narae
npm install
cp .env.example .env
```

### Configuration

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_PUBLIC_KEY=your_key
STRIPE_SECRET_KEY=your_key
DATABASE_URL=your_database_url
```

### Running

```bash
npm run dev
```

## Project Structure

```
narae/
├── src/
│   ├── components/
│   │   ├── products/     # Product catalog & detail views
│   │   ├── scent-guide/  # Interactive scent finder
│   │   ├── cart/         # Shopping cart & checkout
│   │   ├── blog/         # Educational content
│   │   └── subscription/ # Subscription management
│   ├── lib/
│   │   ├── products/     # Product data & filtering
│   │   ├── cart/         # Cart logic & checkout
│   │   ├── scent/        # Scent matching algorithm
│   │   └── payments/     # Payment processing
│   └── types/            # TypeScript definitions
├── content/              # Blog posts & educational content
└── public/               # Static assets & product images
```

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

Design enhancements, accessibility improvements, and new educational content welcome.

## License

**MIT License** — see [LICENSE](./LICENSE) for details.

## Author

<div align="center">

**Mulky Malikul Dhaher**

[![GitHub](https://img.shields.io/badge/GitHub-mulkymalikuldhrs-181717?style=flat-square&logo=github)](https://github.com/mulkymalikuldhrs)
[![Email](https://img.shields.io/badge/Email-mulkymalikudhr@mail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:mulkymalikudhr@mail.com)

</div>

---

<!-- FOOTER BANNER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0a1a0a,50:1a2d1a,100:2a402a&fontColor=a3e635&descColor=bef264&height=120&section=footer&text=&fontSize=0" />
