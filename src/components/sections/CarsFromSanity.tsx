'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getAllCars } from '@/lib/sanity.queries'
import { Car } from '@/types/car'
import { getImageUrl } from '@/lib/sanity.image'

export default function CarsFromSanity() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCars() {
      try {
        setLoading(true)
        const data = await getAllCars()
        setCars(data)
      } catch (err) {
        console.error('Error fetching cars:', err)
        setError('Fehler beim Laden der Fahrzeuge')
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-slate-200 rounded-t-xl"></div>
            <div className="p-6 space-y-4">
              <div className="h-6 bg-slate-200 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 text-lg mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          Erneut versuchen
        </button>
      </div>
    )
  }

  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-600 text-lg mb-4">Keine Fahrzeuge verfügbar</div>
        <p className="text-slate-500">Bitte fügen Sie Fahrzeuge über das Sanity CMS hinzu.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {cars.map((car) => {
        const imageUrl = car.thumbnail 
          ? getImageUrl(car.thumbnail, 400)
          : car.images?.[0] 
            ? getImageUrl(car.images[0], 400)
            : null

        return (
          <div key={car._id} className="group bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Car Image with Overlay */}
            <div className="relative h-48 bg-slate-200 overflow-hidden">
              {imageUrl ? (
                <Image 
                  src={imageUrl} 
                  alt={car.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Kein Bild</span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-semibold shadow-sm">
                {car.price.toLocaleString('de-DE')} €
              </div>
              
              {/* Year Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 text-slate-900 px-2 py-1 rounded text-sm font-semibold">
                {car.year}
              </div>
            </div>

            {/* Car Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                {car.title}
              </h3>
              
              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span>{car.mileage.toLocaleString('de-DE')} km</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span>{car.fuelType}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span>{car.transmission}</span>
                </div>
                {car.power && (
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span>{car.power} PS</span>
                  </div>
                )}
              </div>
              
              {/* Features */}
              {car.features && car.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Ausstattung:</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span className="px-2 py-1 bg-slate-50 text-slate-500 text-xs rounded">
                        +{car.features.length - 3} mehr
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Price and CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <div className="text-2xl font-bold text-slate-900">
                  {car.price.toLocaleString('de-DE')} €
                </div>
                <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-300">
                  Details
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
