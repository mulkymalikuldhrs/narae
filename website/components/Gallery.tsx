'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'NARAÈ Bath Soak Experience' },
  { src: '/images/gallery-2.png', alt: 'Aromatherapy Relaxation' },
  { src: '/images/gallery-3.png', alt: 'Premium Bath Soak Collection' },
]

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('gallery')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] 
          bg-lavender/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] 
          bg-gold/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Galeri
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Momen <span className="italic">Relaksasi</span>
          </h2>
          <p className="text-gray-warm text-lg leading-relaxed">
            Nikmati pengalaman spa elegan di rumah Anda bersama NARAÈ
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl
                shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 
                    group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20
                  transition-all duration-500" />
                
                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent 
                  group-hover:border-gold/30 rounded-2xl transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-warm text-lg italic max-w-2xl mx-auto">
            &ldquo;Biarkan udara harum lavender membawa pikiranmu melayang. 
            Dengan NARAÈ Bath Soak, setiap rendaman adalah pelukan hangat dari alam.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
