'use client'

import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { Footer } from '@/components/Footer'
import { products } from '@/lib/products'
import { ArrowLeft, Filter } from 'lucide-react'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page header */}
        <section className="bg-[#F5F0E8] py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Home
                </Link>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D2D2D]">
                  Katalog Produk
                </h1>
                <p className="text-[#6B6B6B] mt-2">
                  Temukan varian bath soak yang sesuai dengan kebutuhan Anda
                </p>
              </div>
              
              {/* Filter button (placeholder for future filter functionality) */}
              <button 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8DFE8] rounded-lg text-[#6B6B6B] hover:border-[#9B8AA0] transition-colors sm:self-start"
                aria-label="Filter products"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Additional info section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-[#F5F0E8] rounded-xl">
                <div className="w-12 h-12 bg-[#E8DFE8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#9B8AA0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">100% Alami</h3>
                <p className="text-[#6B6B6B] text-sm">
                  Bahan-bahan murni tanpa bahan kimia berbahaya
                </p>
              </div>

              <div className="text-center p-6 bg-[#F5F0E8] rounded-xl">
                <div className="w-12 h-12 bg-[#E8DFE8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#9B8AA0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">Gratis Ongkir</h3>
                <p className="text-[#6B6B6B] text-sm">
                  Untuk pembelian di atas Rp 100.000
                </p>
              </div>

              <div className="text-center p-6 bg-[#F5F0E8] rounded-xl">
                <div className="w-12 h-12 bg-[#E8DFE8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#9B8AA0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">Pengiriman Cepat</h3>
                <p className="text-[#6B6B6B] text-sm">
                  1-3 hari kerja untuk area Jabodetabek
                </p>
              </div>
            </div>

            {/* CTA section */}
            <div className="mt-16 text-center">
              <div className="bg-[#E8DFE8] rounded-2xl p-8 lg:p-12">
                <h2 className="font-serif text-2xl lg:text-3xl text-[#2D2D2D] mb-4">
                  Punya Pertanyaan?
                </h2>
                <p className="text-[#6B6B6B] mb-6 max-w-xl mx-auto">
                  Tim kami siap membantu Anda memilih produk yang tepat. 
                  Hubungi kami kapan saja.
                </p>
                <a 
                  href="https://wa.me/6285322624048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
