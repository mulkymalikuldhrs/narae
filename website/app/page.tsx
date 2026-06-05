import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProductGrid } from '@/components/ProductGrid'
import { Benefits } from '@/components/Benefits'
import { Testimonials } from '@/components/Testimonials'
import { Gallery } from '@/components/Gallery'
import { Footer } from '@/components/Footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <main role="main">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProductGrid />
        </ErrorBoundary>
        <ErrorBoundary>
          <Benefits />
        </ErrorBoundary>
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary>
          <Gallery />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  )
}
