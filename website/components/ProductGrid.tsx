'use client'

import { useEffect, useState } from 'react'
import { Truck } from 'lucide-react'
import { products } from '@/lib/products'
import { ProductCard } from './ProductCard'

export function ProductGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('products')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] 
        bg-lavender/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] 
        bg-gold/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Produk
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Koleksi <span className="italic">NARAÈ</span>
          </h2>
          <p className="text-gray-warm text-lg leading-relaxed">
            Tiga varian ukuran untuk memenuhi kebutuhan relaksasi Anda. 
            Dari ukuran trial hingga premium untuk pengalaman spa di rumah.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Free Shipping Banner */}
        <div 
          className={`mt-16 md:mt-20 text-center transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full
            shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)]">
            <Truck size={20} className="text-gold" />
            <span className="text-charcoal text-sm font-medium">
              Gratis ongkir untuk pembelian di atas Rp 100.000
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
