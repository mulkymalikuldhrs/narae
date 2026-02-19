import type { Product, Testimonial } from '@/types'

export const products: Product[] = [
  {
    id: 'mini',
    name: 'NARAÈ Mini',
    description: 'Pengalaman relaksasi pertama yang sempurna untuk dicoba. Ideal untuk perjalanan atau hadiah kecil.',
    price: 25000,
    size: 'Mini',
    weight: '30g',
    image: '/images/product-mini.svg',
    features: [
      'Cukup untuk 1x penggunaan',
      'Kemasan sachet praktis',
      'Aroma terapi premium',
      'Ideal untuk perjalanan'
    ],
    ingredients: [
      'Epsom Salt',
      'Dead Sea Salt',
      'Essential Oils',
      'Dried Flowers'
    ],
    scent: 'Lavender' // Chamomile variant coming soon
  },
  {
    id: 'medium',
    name: 'NARAÈ Medium',
    description: 'Pilihan populer untuk penggunaan rutin. Memberikan relaksasi mendalam setelah hari yang panjang.',
    price: 50000,
    size: 'Medium',
    weight: '100g',
    image: '/images/product-medium.svg',
    features: [
      'Cukup untuk 3-4x penggunaan',
      'Resealable pouch',
      'Kualitas premium',
      'Paling banyak dibeli'
    ],
    ingredients: [
      'Epsom Salt',
      'Dead Sea Salt',
      'Essential Oils',
      'Dried Flowers',
      'Vitamin E'
    ],
    scent: 'Lavender' // Chamomile variant coming soon
  },
  {
    id: 'premium',
    name: 'NARAÈ Premium',
    description: 'Pengalaman spa mewah di rumah. Ukuran besar untuk sesi relaksasi berkualitas tinggi.',
    price: 99000,
    size: 'Premium',
    weight: '250g',
    image: '/images/product-premium.svg',
    features: [
      'Cukup untuk 8-10x penggunaan',
      'Kemasan eksklusif',
      'Bonus wooden spoon',
      'Premium gift box'
    ],
    ingredients: [
      'Epsom Salt',
      'Dead Sea Salt',
      'Himalayan Pink Salt',
      'Premium Essential Oils',
      'Organic Dried Flowers',
      'Vitamin E',
      'Jojoba Oil'
    ],
    scent: 'Lavender' // Chamomile variant coming soon
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Wijaya',
    location: 'Jakarta',
    rating: 5,
    text: 'Setelah menggunakan NARAÈ, tidur saya jadi lebih nyenyak. Aromanya benar-benar menenangkan!'
  },
  {
    id: '2',
    name: 'Diana Kusuma',
    location: 'Bandung',
    rating: 5,
    text: 'Kualitas premium dengan harga yang sangat reasonable. Sudah repurchase 3 kali!'
  },
  {
    id: '3',
    name: 'Maya Putri',
    location: 'Surabaya',
    rating: 5,
    text: 'Packagingnya sangat elegan, cocok untuk hadiah. Teman saya sangat suka!'
  }
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}
