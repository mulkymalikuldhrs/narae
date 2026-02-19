# NARAÈ Bath Soak - Website Specification

## 1. Project Overview

**Project Name:** NARAÈ Official Website  
**Project Type:** E-commerce Website  
**Core Functionality:** Landing page dan catalog untuk brand bath soak aromaterapi lokal dengan konsep clean neutral luxury  
**Target Users:** Women aged 20-45 yang mencari produk self-care premium, urban professionals yang butuh relaksasi di rumah

---

## 2. Brand Identity

### Color Palette
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Pure White | #FFFFFF | Background, primary text |
| Cream | #F5F0E8 | Secondary background, cards |
| Soft Lavender | #E8DFE8 | Accent, hover states |
| Dusty Purple | #9B8AA0 | Secondary accent |
| Charcoal | #2D2D2D | Primary text |
| Warm Gray | #6B6B6B | Secondary text |
| Soft Gold | #C9B896 | Premium accent, buttons |

### Typography
- **Primary Font:** Cormorant Garamond (serif) - untuk heading
- **Secondary Font:** Inter (sans-serif) - untuk body text
- **Accent Font:** Playfair Display (serif) - untuk quotes/taglines

### Visual Style
- Clean minimalist dengan whitespace yang cukup
- Gentle gradients (bukan bold)
- Subtle shadows untuk depth
- Natural photography style
- Floral elements (lavender, chamomile)

---

## 3. UI/UX Specification

### Layout Structure

#### Header (Fixed)
- Logo (left): "NARAÈ" dalam elegant serif
- Navigation (center): Home, Products, About, Contact
- Actions (right): Search icon, Cart icon dengan badge count
- Height: 72px desktop, 60px mobile
- Background: Semi-transparent white dengan blur

#### Hero Section
- Full viewport height (100vh minus header)
- Split layout: 60% image, 40% text
- Headline: "Tenangkan pikiran, manjakan diri"
- Subheadline: Deskripsi singkat produk
- CTA Button: "Lihat Koleksi" dengan soft gold background
- Background: Subtle gradient cream ke white

#### Featured Products Section
- Title: "Koleksi Kami"
- 3 product cards dalam grid
- Product card: Image, name, size, price, "Tambah ke Cart" button
- Hover: Subtle lift effect

#### Benefits Section
- 3 columns dengan icons
- Benefits: "100% Alami", "Handmade with Love", "Eco-Friendly"
- Soft lavender background

#### Testimonials Section
- Carousel dengan 3 testimonials
- Photo, name, review text
- Gentle fade animation

#### Instagram Feed Section
- Title: "Follow @narae.official"
- 4-column grid dengan placeholder images
- Link to Instagram

#### Footer
- 4 columns: About, Quick Links, Contact, Newsletter
- Newsletter signup form
- Social media icons
- Copyright text

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Components

#### Product Card
- Image container: 1:1 aspect ratio
- Product name: Cormorant Garamond, 18px
- Size indicator: "30g / 100g / 250g"
- Price: Bold, charcoal
- Add to Cart button: Soft gold, rounded
- States: Default, Hover (lift + shadow), Active (pressed)

#### Button Variants
- Primary: Soft gold background, white text, rounded corners
- Secondary: Transparent, dusty purple border
- Ghost: No border, text only with underline on hover

#### Input Fields
- Rounded corners (8px)
- Cream background
- Charcoal border on focus
- Placeholder dalam warm gray

---

## 4. Functionality Specification

### Core Features

#### Product Catalog
- 3 produk: Mini (30g), Medium (100g), Premium (250g)
- Product detail modal/page
- Size selector
- Quantity selector

#### Shopping Cart
- Slide-in cart drawer dari right
- Add/remove items
- Update quantity
- Subtotal calculation
- Checkout button

#### Navigation
- Smooth scroll ke sections
- Mobile hamburger menu
- Sticky header on scroll

### User Interactions
- Hover effects pada semua interactive elements
- Smooth transitions (300ms ease)
- Loading states untuk cart actions
- Toast notifications untuk feedback

### Data Handling
- Local state management dengan Zustand
- Cart data persisted di localStorage
- Mock product data dalam JSON format

---

## 5. Page Structure

```
/                    - Landing page (Home)
/products           - Full product catalog
/products/[id]      - Product detail page
/cart               - Cart page (optional, can be drawer)
/about              - Brand story page
/contact            - Contact page
```

---

## 6. Product Data

### Products
```json
[
  {
    "id": "mini",
    "name": "NARAÈ Mini",
    "size": "30g",
    "price": 25000,
    "description": "Paket pemula untuk mencoba sensasi spa di rumah",
    "benefits": ["Entry level", "Coba-coba", "Gift ready"]
  },
  {
    "id": "medium",
    "name": "NARAÈ Medium",
    "size": "100g",
    "price": 50000,
    "description": "Paket standar dengan nilai terbaik untuk penggunaan regular",
    "benefits": ["Best seller", "Regular use", "Value pack"]
  },
  {
    "id": "premium",
    "name": "NARAÈ Premium",
    "size": "250g",
    "price": 99000,
    "description": "Paket eksklusif dengan kemasan premium dan sendok kayu",
    "benefits": ["Exclusive box", "Wooden spoon", "Perfect gift"]
  }
]
```

---

## 7. Technical Implementation

### Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (state management)
- Lucide React (icons)

### File Structure
```
/app
  /layout.tsx
  /page.tsx
  /globals.css
/components
  /Header.tsx
  /Hero.tsx
  /ProductCard.tsx
  /ProductGrid.tsx
  /Benefits.tsx
  /Testimonials.tsx
  /Footer.tsx
  /CartDrawer.tsx
  /Button.tsx
/lib
  /products.ts
  /store.ts
/public
  /images
```

---

## 8. Acceptance Criteria

### Visual
- [ ] Brand colors konsisten di semua halaman
- [ ] Typography sesuai specification
- [ ] Responsive di semua breakpoints
- [ ] Smooth animations dan transitions
- [ ] Clean, minimal aesthetic

### Functional
- [ ] Cart dapat menambah/menghapus produk
- [ ] Quantity dapat diupdate
- [ ] Cart total dihitung dengan benar
- [ ] Navigation works correctly
- [ ] Mobile menu berfungsi

### Performance
- [ ] Page load < 3 detik
- [ ] Smooth scrolling
- [ ] No layout shifts
- [ ] Images optimized

---

## 9. Future Enhancements (Phase 2)
- Admin dashboard
- Real payment gateway integration
- User authentication
- Order management system
- Blog/content section
- Instagram feed integration

---

*Last Updated: February 20, 2026*
