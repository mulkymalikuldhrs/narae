'use client'

import { useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/products'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('testimonials')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[800px] h-[800px] bg-lavender/20 rounded-full blur-[120px]" />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Testimoni
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Apa Kata <span className="italic">Mereka</span>
          </h2>
          <p className="text-gray-warm text-sm italic">
            *Contoh pengalaman pelanggan
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="relative">
            {/* Main Card */}
            <div className="relative glass-premium rounded-[2.5rem] p-8 md:p-16
              shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
              
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2
                w-12 h-12 rounded-full bg-gold text-white
                flex items-center justify-center
                shadow-[0_10px_30px_-10px_rgba(201,184,150,0.5)]">
                <Quote size={20} />
              </div>

              <div 
                className={`text-center pt-4 transition-all duration-500
                  ${isAnimating ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`}
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < currentTestimonial.rating
                          ? 'text-gold fill-gold'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal 
                  leading-relaxed mb-10 italic">
                  &ldquo;{currentTestimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/30 to-gold/10
                    flex items-center justify-center mb-4
                    border-2 border-gold/20">
                    <span className="font-serif text-2xl text-charcoal">
                      {currentTestimonial.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl text-charcoal mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-warm text-sm">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2
                  w-12 h-12 rounded-full glass
                  flex items-center justify-center
                  text-gray-warm hover:text-charcoal hover:bg-white/60
                  transition-all duration-300
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2
                  w-12 h-12 rounded-full glass
                  flex items-center justify-center
                  text-gray-warm hover:text-charcoal hover:bg-white/60
                  transition-all duration-300
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-gold w-8'
                      : 'bg-charcoal/10 w-2 hover:bg-charcoal/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
