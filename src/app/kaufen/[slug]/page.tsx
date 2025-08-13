import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getCarBySlug, getAllCars } from '@/lib/sanity.queries'
import { getImageUrl } from '@/lib/sanity.image'
import CarSpecsTable from '@/components/CarSpecsTable'
import PriceTag from '@/components/PriceTag'
import type { Car } from '@/types/car'
import { notFound } from 'next/navigation'
import { Navbar, Footer } from '@/components/layout'

export const revalidate = 60

export async function generateStaticParams() {
  const cars: Car[] = await getAllCars()
  return cars
    .filter(c => c.slug?.current)
    .map(c => ({ slug: c.slug.current }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const car: Car | null = await getCarBySlug(params.slug)
  
  if (!car) {
    return { 
      title: 'Fahrzeug nicht gefunden – Sham-Automobile' 
    }
  }

  const title = `${car.title}${car.year ? ` (${car.year})` : ''} – Sham-Automobile`
  const description = car.description || 'Qualitäts-Gebrauchtwagen von Sham-Automobile in Hannover.'
  const image = car.images?.[0] 
    ? getImageUrl(car.images[0], 1200)
    : '/images/og-default.jpg'

  return {
    title,
    description,
    openGraph: { 
      title, 
      description, 
      images: [{ 
        url: image || '/images/og-default.jpg', 
        width: 1200, 
        height: 630 
      }] 
    },
    alternates: { 
      canonical: `https://sham-automobile.com/kaufen/${params.slug}` 
    }
  }
}

export default async function CarDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const car: Car | null = await getCarBySlug(params.slug)
  
  if (!car) return notFound()

  const images = car.images ?? []

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Link 
            href="/kaufen" 
            className="inline-flex items-center text-sm text-blue-700 hover:text-blue-800 mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Übersicht
          </Link>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 mb-4">
                {images[0] && getImageUrl(images[0], 1200) ? (
                  <Image
                    src={getImageUrl(images[0], 1200)!}
                    alt={`${car.title} – Hauptbild`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Kein Bild verfügbar</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Grid */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.slice(1, 5).map((img, i) => {
                    const imageUrl = getImageUrl(img, 400)
                    return imageUrl ? (
                      <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image
                          src={imageUrl}
                          alt={`${car.title} – Bild ${i + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform cursor-pointer"
                          sizes="(max-width: 1024px) 25vw, 12.5vw"
                        />
                      </div>
                    ) : null
                  })}
                </div>
              )}
            </div>

            {/* Car Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {car.title}
              </h1>
              
              <div className="mb-6">
                <PriceTag price={car.price} size="lg" />
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {car.year && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm text-blue-600 font-medium">Baujahr</div>
                    <div className="text-lg font-semibold text-blue-900">{car.year}</div>
                  </div>
                )}
                {car.mileage && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm text-green-600 font-medium">Kilometerstand</div>
                    <div className="text-lg font-semibold text-green-900">
                      {new Intl.NumberFormat('de-DE').format(car.mileage)} km
                    </div>
                  </div>
                )}
                {car.fuelType && (
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-sm text-purple-600 font-medium">Kraftstoff</div>
                    <div className="text-lg font-semibold text-purple-900">{car.fuelType}</div>
                  </div>
                )}
                {car.transmission && (
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-sm text-orange-600 font-medium">Getriebe</div>
                    <div className="text-lg font-semibold text-orange-900">{car.transmission}</div>
                  </div>
                )}
              </div>

              {/* Specifications Table */}
              <div className="mb-6">
                <CarSpecsTable car={car} />
              </div>

              {/* Features */}
              {car.features?.length ? (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Ausstattung</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Description */}
              {car.description ? (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Beschreibung</h2>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {car.description}
                  </div>
                </div>
              ) : null}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/kontakt"
                  className="flex-1 text-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Kontakt aufnehmen
                </Link>
                <Link 
                  href="/verkaufen" 
                  className="flex-1 text-center px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Fahrzeug tauschen/verkaufen
                </Link>
              </div>
            </div>
          </div>

          {/* JSON-LD Structured Data */}
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Vehicle',
                'name': car.title,
                'vehicleModelDate': car.year,
                'mileageFromOdometer': car.mileage ? {
                  '@type': 'QuantitativeValue',
                  'value': car.mileage,
                  'unitCode': 'SMI'
                } : undefined,
                'fuelType': car.fuelType,
                'vehicleTransmission': car.transmission,
                'brand': '—',
                'offers': car.price ? {
                  '@type': 'Offer',
                  'price': car.price,
                  'priceCurrency': 'EUR',
                  'availability': 'https://schema.org/InStock'
                } : undefined
              })
            }} 
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
