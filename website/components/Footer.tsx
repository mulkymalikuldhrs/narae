'use client'

import { useEffect, useState } from 'react'
import { Instagram, Mail, Phone } from 'lucide-react'

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:mulkymalikuldhr@mail.com', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/6285322624048', label: 'WhatsApp' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const footer = document.getElementById('contact')
    if (footer) {
      observer.observe(footer)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="contact" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-luxury relative z-10">
        <div 
          className={`flex flex-col items-center text-center
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Large Brand Logo */}
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold 
            text-gold tracking-[0.1em] uppercase mb-8">
            NARAÈ
          </h2>

          {/* Tagline */}
          <p className="text-cream/60 text-lg md:text-xl font-light mb-12 max-w-md">
            Tenangkan pikiran, manjakan diri.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-8 mb-16">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full border border-cream/20
                  flex items-center justify-center
                  text-cream/60 hover:text-gold hover:border-gold/50
                  transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8
            text-[10px] md:text-xs tracking-[0.2em] text-cream/40 uppercase">
            <span>© {currentYear} NARAÈ</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-cream/20" />
            <span>Aromaterapi Lokal Premium</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-cream/20" />
            <span>Indonesia</span>
          </div>

          {/* Credit */}
          <p className="mt-8 text-[10px] text-cream/20 tracking-wider">
            Crafted with love in Jakarta
          </p>
        </div>
      </div>
    </footer>
  )
}
