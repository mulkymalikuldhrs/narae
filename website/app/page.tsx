import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProductGrid } from '@/components/ProductGrid'
import { Benefits } from '@/components/Benefits'
import { Testimonials } from '@/components/Testimonials'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
