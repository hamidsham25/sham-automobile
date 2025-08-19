'use client'
import { useState, useMemo, useEffect } from 'react'
import type { Car } from '@/types/car'
import CarGrid from '@/components/CarGrid'
import KaufenCTA from './KaufenCTA'

interface KaufenPageContentProps {
  cars: Car[]
}

const CARS_PER_PAGE = 8

export default function KaufenPageContent({ cars }: KaufenPageContentProps) {
  // Filter/search state
  const [search, setSearch] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [minMileage, setMinMileage] = useState('')
  const [maxMileage, setMaxMileage] = useState('')
  const [minYear, setMinYear] = useState('')
  const [maxYear, setMaxYear] = useState('')
  const [fuelType, setFuelType] = useState('')
  const [transmission, setTransmission] = useState('')
  const [minPower, setMinPower] = useState('')
  const [maxPower, setMaxPower] = useState('')
  const [color, setColor] = useState('')
  const [minDoors, setMinDoors] = useState('')
  const [maxDoors, setMaxDoors] = useState('')
  const [visibleCount, setVisibleCount] = useState(CARS_PER_PAGE)

  // Filtering logic
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (search && !car.title.toLowerCase().includes(search.toLowerCase())) return false
      if (minPrice && car.price < Number(minPrice)) return false
      if (maxPrice && car.price > Number(maxPrice)) return false
      if (minMileage && car.mileage < Number(minMileage)) return false
      if (maxMileage && car.mileage > Number(maxMileage)) return false
      if (minYear && car.year < Number(minYear)) return false
      if (maxYear && car.year > Number(maxYear)) return false
      if (fuelType && car.fuelType !== fuelType) return false
      if (transmission && car.transmission !== transmission) return false
      if (minPower && (!car.power || car.power < Number(minPower))) return false
      if (maxPower && (!car.power || car.power > Number(maxPower))) return false
      if (color && (!car.color || !car.color.toLowerCase().includes(color.toLowerCase()))) return false
      if (minDoors && (!car.doors || car.doors < Number(minDoors))) return false
      if (maxDoors && (!car.doors || car.doors > Number(maxDoors))) return false
      return true
    })
  }, [cars, search, minPrice, maxPrice, minMileage, maxMileage, minYear, maxYear, fuelType, transmission, minPower, maxPower, color, minDoors, maxDoors])

  // Only show up to visibleCount cars
  const carsToShow = filteredCars.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCars.length

  // Reset visibleCount when filters/search change
  useEffect(() => {
    setVisibleCount(CARS_PER_PAGE)
  }, [search, minPrice, maxPrice, minMileage, maxMileage, minYear, maxYear, fuelType, transmission, minPower, maxPower, color, minDoors, maxDoors])

  // Helper to reset all filters
  const resetFilters = () => {
    setSearch('');
    setMinPrice('');
    setMaxPrice('');
    setMinMileage('');
    setMaxMileage('');
    setMinYear('');
    setMaxYear('');
    setFuelType('');
    setTransmission('');
    setMinPower('');
    setMaxPower('');
    setColor('');
    setMinDoors('');
    setMaxDoors('');
  }

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

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter/Search Sidebar */}
          <aside className="w-full md:w-80 flex-shrink-0 mb-8 md:mb-0">
            <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-4">Fahrzeuge filtern & suchen</h2>
              <div className="space-y-4">
                {/* Search by title */}
                <input type="text" placeholder="Suchen nach Modell, Marke..." className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={search} onChange={e => setSearch(e.target.value)} />
                {/* Price range */}
                <div className="flex gap-2">
                  <input type="number" placeholder="Min. Preis" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                  <input type="number" placeholder="Max. Preis" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                </div>
                {/* Mileage range */}
                <div className="flex gap-2">
                  <input type="number" placeholder="Min. Kilometer" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={minMileage} onChange={e => setMinMileage(e.target.value)} />
                  <input type="number" placeholder="Max. Kilometer" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={maxMileage} onChange={e => setMaxMileage(e.target.value)} />
                </div>
                {/* Year range */}
                <div className="flex gap-2">
                  <input type="number" placeholder="Ab Baujahr" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={minYear} onChange={e => setMinYear(e.target.value)} />
                  <input type="number" placeholder="Bis Baujahr" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={maxYear} onChange={e => setMaxYear(e.target.value)} />
                </div>
                {/* Fuel type */}
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={fuelType} onChange={e => setFuelType(e.target.value)}>
                  <option value="">Kraftstoff (alle)</option>
                  <option value="Benzin">Benzin</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Elektro">Elektro</option>
                  <option value="LPG">LPG</option>
                  <option value="CNG">CNG</option>
                  <option value="Andere">Andere</option>
                </select>
                {/* Transmission */}
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={transmission} onChange={e => setTransmission(e.target.value)}>
                  <option value="">Getriebe (alle)</option>
                  <option value="Manuell">Manuell</option>
                  <option value="Automatik">Automatik</option>
                </select>
                {/* Power range */}
                <div className="flex gap-2">
                  <input type="number" placeholder="Min. PS" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={minPower} onChange={e => setMinPower(e.target.value)} />
                  <input type="number" placeholder="Max. PS" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={maxPower} onChange={e => setMaxPower(e.target.value)} />
                </div>
                {/* Color */}
                <input type="text" placeholder="Farbe" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={color} onChange={e => setColor(e.target.value)} />
                {/* Doors */}
                <div className="flex gap-2">
                  <input type="number" placeholder="Min. Türen" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={minDoors} onChange={e => setMinDoors(e.target.value)} />
                  <input type="number" placeholder="Max. Türen" className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={maxDoors} onChange={e => setMaxDoors(e.target.value)} />
                </div>
              </div>
            </div>
          </aside>
          {/* Car Grid */}
          <section className="flex-1">
            {filteredCars.length === 0 && (
              <div className="mb-8 p-8 bg-yellow-50 border border-yellow-200 rounded-2xl text-center shadow-sm">
                <div className="text-3xl mb-2">🚗</div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-2">Keine Fahrzeuge gefunden</h3>
                <p className="text-yellow-800 mb-4">Wir konnten leider keine Fahrzeuge finden, die zu Ihren Suchkriterien passen.<br/>Passen Sie die Filter an oder setzen Sie sie zurück, um mehr Fahrzeuge zu sehen.</p>
                <button
                  className="inline-block px-6 py-2 bg-yellow-400 text-yellow-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                  onClick={resetFilters}
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
            <CarGrid 
              cars={carsToShow} 
              emptyLabel="Aktuell sind keine Fahrzeuge verfügbar. Bitte schauen Sie später wieder vorbei oder kontaktieren Sie uns direkt."
              vertical
            />
            {hasMore && filteredCars.length > 0 && (
              <div className="flex justify-center mt-8">
                <button
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow"
                  onClick={() => setVisibleCount(v => v + CARS_PER_PAGE)}
                >
                  Mehr Fahrzeuge laden
                </button>
              </div>
            )}
          </section>
        </div>

        {/* CTA Section */}
        <KaufenCTA />
      </div>
    </main>
  )
}
