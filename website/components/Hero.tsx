'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    // Small delay to avoid cascading renders
    const timer = setTimeout(() => setIsLoaded(true), 0)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[15%] left-[10%] w-[500px] h-[500px] 
            bg-lavender/60 rounded-full blur-[100px] mix-blend-multiply animate-float"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
          }}
        />
        <div 
          className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] 
            bg-gold/30 rounded-full blur-[120px] mix-blend-multiply animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`
          }}
        />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] 
          bg-cream/80 rounded-full blur-[80px] mix-blend-overlay" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#2D2D2D 1px, transparent 1px),
                           linear-gradient(90deg, #2D2D2D 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div 
        className={`relative z-10 container-luxury pt-32 pb-20 transition-all duration-1000
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 mb-6 px-5 py-2.5 
                rounded-full glass border border-gold/20
                shadow-[0_10px_30px_-10px_rgba(201,184,150,0.2)]
                transition-all duration-700 delay-300
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <Sparkles size={14} className="text-gold" />
              <span className="text-charcoal text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium">
                Aromaterapi Lokal Premium
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
                text-charcoal mb-6 leading-[0.95] tracking-tight
                transition-all duration-1000 delay-500
                ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'}`}
            >
              Tenangkan
              <br />
              <span className="italic text-gold">pikiran,</span>
              <br />
              manjakan diri
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-gray-warm text-lg md:text-xl leading-relaxed mb-10 
                max-w-xl mx-auto lg:mx-0 font-light
                transition-all duration-700 delay-700
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              NARAÈ menghadirkan pengalaman spa premium di rumah Anda. 
              Formula bath soak aromaterapi dengan bahan alami pilihan.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start
                transition-all duration-700 delay-900
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <a
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2
                  px-8 py-4 bg-[#EE4D2D] text-white rounded-full font-bold uppercase tracking-wider text-sm
                  shadow-[0_20px_40px_-10px_rgba(238,77,45,0.4)]
                  hover:shadow-[0_30px_60px_-10px_rgba(238,77,45,0.5)]
                  transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Beli di Shopee
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 
                  border-2 border-charcoal text-charcoal rounded-full 
                  font-bold uppercase tracking-wider text-sm
                  hover:bg-charcoal hover:text-white transition-all duration-500"
              >
                Lihat Produk
              </a>
            </div>

            {/* Stats */}
            <div 
              className={`mt-16 flex items-center justify-center lg:justify-start gap-8 md:gap-12
                transition-all duration-700 delay-1000
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              {[
                { value: '100%', label: 'Alami' },
                { value: 'Handmade', label: 'with Love' },
                { value: 'Eco', label: 'Friendly' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl text-charcoal mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-warm tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div 
              className="relative aspect-square max-w-lg mx-auto transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-[80px] scale-75" />
              
              {/* Glass Frame */}
              <div 
                className={`relative glass-premium rounded-[2.5rem] p-4 md:p-6
                  shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]
                  transition-all duration-1000 delay-300
                  ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-cream">
                  <Image
                    src="/images/mockup.jpg"
                    alt="NARAÈ Bath Soak Collection"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t 
                    from-charcoal/10 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div 
                  className={`absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6
                    glass px-4 py-3 md:px-6 md:py-4 rounded-2xl
                    shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]
                    transition-all duration-700 delay-1000
                    ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                >
                  <p className="font-serif text-xl md:text-2xl text-charcoal">Rp 25rb</p>
                  <p className="text-[10px] text-gray-warm uppercase tracking-wider">Mulai dari</p>
                </div>

                {/* Star Badge */}
                <div 
                  className={`absolute -top-3 -right-3 md:-top-4 md:-right-4
                    w-16 h-16 md:w-20 md:h-20 rounded-full
                    bg-gold text-white flex items-center justify-center
                    shadow-[0_10px_30px_-10px_rgba(201,184,150,0.5)]
                    animate-pulse-glow
                    transition-all duration-700 delay-1200
                    ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                >
                  <div className="text-center">
                    <Sparkles size={20} className="mx-auto mb-0.5" />
                    <span className="text-[8px] font-bold uppercase tracking-wider">Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 
        bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
