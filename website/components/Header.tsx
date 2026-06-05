'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 0)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const navLinks = [
    { href: '#products', label: 'Produk' },
    { href: '#about', label: 'Tentang' },
    { href: '#testimonials', label: 'Testimoni' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'py-3' : 'py-6'
        } ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container-luxury">
          <nav
            className={`flex items-center justify-between px-6 py-4 rounded-full
              transition-all duration-700 ${
                scrolled
                  ? 'glass shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)]'
                  : 'bg-transparent'
              }`}
          >
            {/* Logo */}
            <a 
              href="#" 
              className="font-serif text-2xl md:text-3xl font-bold tracking-[0.05em] text-charcoal
                hover:text-gold transition-colors duration-500"
            >
              NARAÈ
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase
                    text-gray-warm hover:text-charcoal transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-5 right-5 h-[1px] bg-gold 
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://shopee.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-2.5 bg-[#EE4D2D] text-white rounded-full
                text-xs font-bold uppercase tracking-wider
                hover:bg-[#D7441F] transition-colors duration-300"
            >
              Beli di Shopee
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-full bg-cream text-charcoal
                hover:bg-lavender transition-colors duration-300"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-2xl md:hidden
          transition-all duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container-luxury pt-32 pb-12 flex flex-col h-full">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-4xl font-bold text-cream py-4
                  border-b border-cream/10 hover:text-gold transition-colors
                  opacity-0 animate-reveal-up"
                style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto pt-8">
            <a
              href="https://shopee.co.id"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 
                bg-[#EE4D2D] text-white rounded-xl font-bold uppercase tracking-wider"
            >
              Beli di Shopee
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
