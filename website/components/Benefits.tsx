'use client'

import { useEffect, useState } from 'react'
import { Leaf, Heart, Recycle } from 'lucide-react'

const benefits = [
  {
    icon: Leaf,
    title: '100% Alami',
    description: 'Formulasi bath soak dengan bahan-bahan pilihan alami. Bebas dari bahan kimia berbahaya untuk kulit yang lembut dan sehat.',
    color: 'from-emerald-400/20 to-emerald-600/20'
  },
  {
    icon: Heart,
    title: 'Handmade',
    description: 'Setiap batch diproduksi secara manual dengan penuh ketelitian. Tidak ada produksi massal, hanya kualitas artisan.',
    color: 'from-rose-400/20 to-rose-600/20'
  },
  {
    icon: Recycle,
    title: 'Eco Friendly',
    description: 'Kemasan ramah lingkungan yang dapat didaur ulang. Berkomitmen mengurangi jejak karbon demi bumi yang lebih baik.',
    color: 'from-sky-400/20 to-sky-600/20'
  }
]

export function Benefits() {
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

    const section = document.getElementById('about')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] 
          bg-lavender/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] 
          bg-gold/10 rounded-full blur-[80px]" />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-24
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Keunggulan Kami
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Mengapa <span className="italic">NARAÈ</span>?
          </h2>
          <p className="text-gray-warm text-lg leading-relaxed">
            Kami percaya pada kekuatan alam dan keaslian. Setiap produk dirancang 
            dengan penuh perhatian untuk pengalaman relaksasi terbaik.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="relative h-full glass-card p-8 md:p-10 
                hover:bg-white/70 transition-all duration-700">
                {/* Icon */}
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-6 
                    flex items-center justify-center
                    bg-gradient-to-br ${benefit.color}
                    group-hover:shadow-lg transition-shadow duration-500
                    group-hover:scale-110 group-hover:rotate-3`}
                >
                  <benefit.icon size={28} className="text-charcoal" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4
                  group-hover:text-gold transition-colors duration-500">
                  {benefit.title}
                </h3>
                <p className="text-gray-warm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative Number */}
                <span className="absolute top-6 right-6 font-serif text-6xl text-charcoal/5
                  group-hover:text-gold/10 transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
