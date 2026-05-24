# NARAÈ - AI Agent Guidelines

## Project Overview
NARAÈ adalah brand bath soak aromaterapi lokal dengan konsep clean neutral luxury. Website e-commerce dibangun dengan Next.js untuk menjual 3 varian produk: Mini (30g), Medium (100g), Premium (250g).

---

## Build, Lint, Test Commands

### Development
```bash
cd /home/mulky/Desktop/NARAE/website
npm run dev          # Start Next.js dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Type Checking
```bash
npx tsc --noEmit     # TypeScript check without emitting files
```

### Testing
No test framework configured yet. When adding tests:
```bash
npm install -D vitest @testing-library/react
npm run test         # Will run vitest
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Runtime | React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 |
| State | Zustand (to be installed) |
| Icons | Lucide React (to be installed) |

---

## Code Style Guidelines

### TypeScript Rules
- Strict mode enabled (`"strict": true`)
- Use explicit types, avoid `any` - use `unknown` when type uncertain
- All props must be typed with interfaces
- Use `type` for unions/primitives, `interface` for objects/components

### File Conventions
```
/app          - Next.js App Router pages
/components   - Reusable React components
/lib          - Utilities, store, constants
/types        - TypeScript type definitions
/public       - Static assets (images, icons)
```

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ProductCard.tsx` |
| Utilities | camelCase | `formatPrice.ts` |
| Constants | UPPER_SNAKE | `BRAND_COLORS` |
| Types/Interfaces | PascalCase | `Product`, `CartProps` |
| CSS classes | kebab-case via Tailwind | `bg-cream-100` |

### Import Order
```typescript
// 1. React/Next
import { useState, useEffect } from 'react'
import Image from 'next/image'

// 2. External packages
import { ShoppingCart } from 'lucide-react'

// 3. Internal components
import { Button } from '@/components/Button'

// 4. Utilities/Store
import { useCartStore } from '@/lib/store'

// 5. Types
import type { Product } from '@/types'

// 6. Styles
import styles from './styles.module.css'
```

### Component Pattern
```typescript
// Named export, not default
interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    // JSX
  )
}
```

### Error Handling
```typescript
// Use try/catch for async operations
async function fetchData() {
  try {
    const response = await fetch('/api/data')
    if (!response.ok) throw new Error('Failed to fetch')
    return response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    return null
  }
}
```

---

## Brand Identity (from SPEC.md)

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Pure White | #FFFFFF | Background |
| Cream | #F5F0E8 | Cards, secondary bg |
| Soft Lavender | #E8DFE8 | Accent |
| Dusty Purple | #9B8AA0 | Secondary accent |
| Charcoal | #2D2D2D | Primary text |
| Warm Gray | #6B6B6B | Secondary text |
| Soft Gold | #C9B896 | Buttons, premium |

### Typography
- **Headings:** Cormorant Garamond (serif)
- **Body:** Inter (sans-serif)
- **Accent:** Playfair Display (serif)

### Tailwind Custom Theme (add to globals.css)
```css
@theme inline {
  --color-cream: #F5F0E8;
  --color-lavender: #E8DFE8;
  --color-purple-dusty: #9B8AA0;
  --color-charcoal: #2D2D2D;
  --color-gray-warm: #6B6B6B;
  --color-gold: #C9B896;
}
```

---

## File Structure (Target)

```
/website
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── products/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── Footer.tsx
│   ├── CartDrawer.tsx
│   └── Button.tsx
├── lib/
│   ├── products.ts
│   └── store.ts
├── types/
│   └── index.ts
└── public/
    └── images/
```

---

## Current Progress

### Completed
- [x] Project structure initialized
- [x] SPEC.md (website blueprint)
- [x] Business plan (NARAE.md)

### Pending
- [ ] Landing page implementation
- [ ] Product catalog
- [ ] Shopping cart with Zustand
- [ ] Install missing deps: `zustand`, `lucide-react`

---

## Dependencies to Install

```bash
cd /home/mulky/Desktop/NARAE/website
npm install zustand lucide-react
```

---

## Agent Communication Style

- **Direct & concise** - No fluff, get to solution
- **Indonesian acceptable** - Brand copy in Indonesian
- **Production-ready code** - Include error handling
- **Follow SPEC.md** - All UI decisions reference specification

---

*Last Updated: February 20, 2026*

---

> **Contact:** Mulky Malikul Dhaher — [mulkymalikuldhaher@email.com](mailto:mulkymalikuldhaher@email.com)
>
> **Disclaimer:** This project is for Education Purpose only. Risiko apapun tidak kita tanggung. (We are not responsible for any risks or damages.)
