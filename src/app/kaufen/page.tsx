import { getAllCars } from '@/lib/sanity.queries'
import type { Metadata } from 'next'
import type { Car } from '@/types/car'
import { Navbar, Footer } from '@/components/layout'
import { KaufenHeader, KaufenPageContent } from '@/components/kaufen'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Gebrauchtwagen kaufen – Sham-Automobile Hannover',
  description: 'Finden Sie geprüfte Gebrauchtwagen bei Sham-Automobile in Hannover. Faire Preise, transparente Historie und persönliche Beratung.',
  alternates: { 
    canonical: 'https://sham-automobile.com/kaufen' 
  },
  openGraph: {
    title: 'Gebrauchtwagen kaufen – Sham-Automobile Hannover',
    description: 'Finden Sie geprüfte Gebrauchtwagen bei Sham-Automobile in Hannover. Faire Preise, transparente Historie und persönliche Beratung.',
    type: 'website',
    url: 'https://sham-automobile.com/kaufen',
  }
}

export default async function KaufenPage() {
  const cars: Car[] = await getAllCars()

  return (
    <>
      <Navbar />
      <KaufenHeader />
      <KaufenPageContent cars={cars} />
      <Footer />
    </>
  )
}
