import type { Product, Testimonial } from '@/types'

export const products: Product[] = [
  {
    id: 'mini',
    name: 'NARAÈ Mini',
    description: 'Paket pemula dengan harga terjangkau. Psikologi harga entry-level membuat pembelian terasa ringan dan impulsif. Ideal untuk menarik pelanggan baru yang ingin mencoba.',
    price: 24900,
    size: 'Mini',
    weight: '30g',
    image: '/images/product-mini.svg',
    features: [
      'Entry price, coba-coba',
      'Cukup untuk 1x penggunaan',
      'Kemasan sachet praktis',
      'Ideal untuk perjalanan'
    ],
    ingredients: [
      'Garam Epsom murni',
      'Bunga lavender kering',
      'Bunga chamomile kering',
      'Essential oils premium'
    ],
    scent: 'Lavender & Chamomile'
  },
  {
    id: 'medium',
    name: 'NARAÈ Medium',
    description: 'Paket standar dengan harga menengah. Menunjukkan nilai lebih (setara spa di rumah) tanpa terlalu tinggi. Pilihan populer untuk penggunaan rutin.',
    price: 49900,
    size: 'Medium',
    weight: '100g',
    image: '/images/product-medium.svg',
    features: [
      'Nilai standar, populer',
      'Cukup untuk 3-4x penggunaan',
      'Resealable pouch matte',
      'Paling banyak dibeli'
    ],
    ingredients: [
      'Garam Epsom murni',
      'Bunga lavender kering',
      'Bunga chamomile kering',
      'Essential oils premium',
      'Vitamin E'
    ],
    scent: 'Lavender & Chamomile'
  },
  {
    id: 'premium',
    name: 'NARAÈ Premium',
    description: 'Paket terbaik dengan kemasan eksklusif termasuk dus kecil dan sendok kayu. Strategi harga aspirasi menarik pelanggan yang mencari kemewahan. Cocok sebagai hadiah.',
    price: 99900,
    size: 'Premium',
    weight: '250g',
    image: '/images/product-premium.svg',
    features: [
      'Eksklusif, sebagai hadiah',
      'Cukup untuk 8-10x penggunaan',
      'Kemasan dus kecil premium',
      'Bonus sendok kayu mini'
    ],
    ingredients: [
      'Garam Epsom murni',
      'Himalayan Pink Salt',
      'Bunga lavender kering',
      'Bunga chamomile kering',
      'Premium essential oils',
      'Vitamin E',
      'Jojoba Oil'
    ],
    scent: 'Lavender & Chamomile'
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
