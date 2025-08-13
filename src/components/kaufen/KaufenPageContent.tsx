import type { Car } from '@/types/car'
import CarGrid from '@/components/CarGrid'
import KaufenCTA from './KaufenCTA'

interface KaufenPageContentProps {
  cars: Car[]
}

export default function KaufenPageContent({ cars }: KaufenPageContentProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere Fahrzeuge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aktuelle Auswahl an Qualitäts-Gebrauchtwagen. Jedes Fahrzeug wird von unseren Experten sorgfältig geprüft.
          </p>
        </header>

        {/* Car Grid */}
        <CarGrid 
          cars={cars} 
          emptyLabel="Aktuell sind keine Fahrzeuge verfügbar. Bitte schauen Sie später wieder vorbei oder kontaktieren Sie uns direkt." 
        />

        {/* CTA Section */}
        <KaufenCTA />
      </div>
    </main>
  )
}
