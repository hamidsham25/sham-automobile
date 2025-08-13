'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/lib/sanity.image'
import type { Car } from '@/types/car'

export default function CarCard({ car }: { car: Car }) {
  const img = car.thumbnail ?? car.images?.[0]
  const href = `/kaufen/${car.slug.current}`
  const price = car.price 
    ? new Intl.NumberFormat('de-DE').format(car.price) + ' €' 
    : 'Preis auf Anfrage'

  return (
    <Link 
      href={href} 
      className="group block rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1 hover:scale-[1.02]"
      aria-label={`${car.title} - ${price}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        {img && getImageUrl(img, 800) ? (
          <Image
            src={getImageUrl(img, 800)!}
            alt={`${car.title} Bild`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Kein Bild</span>
          </div>
        )}
        
        {/* Hover overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="mt-4 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
          {car.title}
        </h3>
        
        {/* Price - Prominently displayed */}
        <p className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">{price}</p>
        
        {/* Car specifications grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          {/* Baujahr */}
          <div className="flex flex-col space-y-1">
            <span className="text-gray-500 text-xs font-medium">Baujahr</span>
            <span className="font-medium text-gray-900">
              {car.year || 'N/A'}
            </span>
          </div>
          
          {/* Kilometerstand */}
          <div className="flex flex-col space-y-1">
            <span className="text-gray-500 text-xs font-medium">Kilometerstand</span>
            <span className="font-medium text-gray-900 truncate" title={car.mileage ? new Intl.NumberFormat('de-DE').format(car.mileage) + ' km' : 'N/A'}>
              {car.mileage ? new Intl.NumberFormat('de-DE').format(car.mileage) + ' km' : 'N/A'}
            </span>
          </div>
          
          {/* Kraftstoff */}
          <div className="flex flex-col space-y-1">
            <span className="text-gray-500 text-xs font-medium">Kraftstoff</span>
            <span className="font-medium text-gray-900">
              {car.fuelType || 'N/A'}
            </span>
          </div>
          
          {/* Leistung */}
          <div className="flex flex-col space-y-1">
            <span className="text-gray-500 text-xs font-medium">Leistung</span>
            <span className="font-medium text-gray-900">
              {car.power ? car.power + ' PS' : 'N/A'}
            </span>
          </div>
        </div>
        
        {/* Call to action with enhanced hover effect */}
        <div className="pt-2">
          <span className="inline-flex items-center text-sm text-blue-700 group-hover:text-blue-800 transition-colors font-medium group-hover:translate-x-1 transform transition-transform duration-200">
            Details ansehen 
            <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
