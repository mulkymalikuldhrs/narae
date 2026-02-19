export interface Product {
  id: string
  name: string
  description: string
  price: number
  size: 'Mini' | 'Medium' | 'Premium'
  weight: string
  image: string
  features: string[]
  ingredients: string[]
  scent: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
}
