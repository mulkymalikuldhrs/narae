'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, MessageCircle } from 'lucide-react'
import type { Product } from '@/types'
import { formatPrice } from '@/lib/products'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Shopee link (placeholder - replace with actual link)
  const shopeeLink = `https://shopee.co.id/search?keyword=narae%20bath%20soak%20${product.size.toLowerCase()}`
  
  // WhatsApp inquiry link
  const waMessage = encodeURIComponent(
    `Halo NARAÈ, saya tertarik dengan ${product.name} (${product.weight}). Apakah masih tersedia?`
  )
  const waLink = `https://wa.me/6285322624048?text=${waMessage}`

  return (
    <div
      className={`group relative transition-all duration-700
        ${isHovered ? 'z-10' : 'z-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Aura Glow on Hover */}
      <div 
        className={`absolute inset-0 bg-gold/10 blur-[80px] rounded-full pointer-events-none
          transition-all duration-700 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-75'}`}
      />

      {/* Card Container */}
      <div className="relative glass-card overflow-hidden hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <div 
            className={`absolute inset-0 transition-all duration-700 ease-out
              ${isHovered ? 'scale-110' : 'scale-100'}`}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Gradient Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent
              transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Size Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider
              ${product.size === 'Premium' 
                ? 'bg-gold text-white' 
                : product.size === 'Medium'
                ? 'bg-charcoal text-cream'
                : 'bg-white/90 text-charcoal backdrop-blur-sm'
              }`}
            >
              {product.size}
            </span>
          </div>

          {/* Weight Badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1.5 rounded-full text-[10px] font-medium
              bg-white/80 text-charcoal backdrop-blur-sm">
              {product.weight}
            </span>
          </div>

          {/* Quick Action Buttons - Show on Hover */}
          <div 
            className={`absolute bottom-4 left-4 right-4 flex flex-col gap-2
              transition-all duration-500 ease-out
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <a
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 
                bg-[#EE4D2D] text-white rounded-xl font-semibold text-sm
                hover:bg-[#D7441F] transition-colors shadow-lg"
            >
              <ExternalLink size={16} />
              Beli di Shopee
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 
                bg-green-500 text-white rounded-xl font-semibold text-sm
                hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle size={16} />
              Tanya via WhatsApp
            </a>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Category */}
          <span className="text-[9px] tracking-[0.15em] text-gray-warm uppercase block mb-2">
            Bath Soak
          </span>

          {/* Name */}
          <h3 className="font-serif text-2xl text-charcoal mb-3
            group-hover:text-gold transition-colors duration-500">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-warm text-sm leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="text-[10px] text-gray-warm bg-cream px-3 py-1.5 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
            <div>
              <p className="font-serif text-3xl text-charcoal">
                {formatPrice(product.price)}
              </p>
              <p className="text-[10px] text-gray-warm mt-1">
                {product.weight} • Termasuk ongkir
              </p>
            </div>
          </div>

          {/* CTA Buttons - Always visible on mobile */}
          <div className="mt-5 space-y-2 md:hidden">
            <a
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 
                bg-[#EE4D2D] text-white rounded-xl font-semibold text-sm"
            >
              <ExternalLink size={16} />
              Beli di Shopee
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 
                bg-green-500 text-white rounded-xl font-semibold text-sm"
            >
              <MessageCircle size={16} />
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
