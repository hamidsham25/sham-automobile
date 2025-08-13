

import Link from 'next/link'
import { getFeaturedCars, getAllCars } from '@/lib/sanity.queries'
import CarGrid from '@/components/CarGrid'
import type { Car } from '@/types/car'

export const revalidate = 60 // ISR

export default async function BuySection() {
  let cars: Car[] = await getFeaturedCars()
  if (!cars?.length) {
    cars = await getAllCars()
  }

  return (
    <section id="kaufen" className="pt-24 pb-16 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-3">
        <div className="absolute top-20 left-10 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium mb-6">
            Verfügbare Fahrzeuge
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
            Entdecken Sie unsere
            <span className="block font-bold text-slate-900">
              Premium Fahrzeuge
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Jedes Fahrzeug wird von unseren Experten sorgfältig geprüft und ist bereit für den Straßenverkehr. 
            Qualität garantiert.
          </p>
        </div>

        {/* Car Grid from Sanity */}
        <CarGrid cars={cars.slice(0, 6)} emptyLabel="Aktuell sind keine Fahrzeuge verfügbar." />

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Link 
            href="/kaufen" 
            className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Alle Fahrzeuge anzeigen
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
