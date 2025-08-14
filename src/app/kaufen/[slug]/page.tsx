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
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const car: Car | null = await getCarBySlug(slug)
  
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
      canonical: `https://sham-automobile.com/kaufen/${slug}` 
    }
  }
}

export default async function CarDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const car: Car | null = await getCarBySlug(slug)
  
  if (!car) return notFound()

  const images = car.images ?? []

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          {/* Breadcrumb */}
          <Link 
            href="/kaufen" 
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800 mb-8 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Übersicht
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 mb-4 shadow-lg">
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
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-500">Kein Bild verfügbar</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Grid */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {images.slice(1, 5).map((img, i) => {
                    const imageUrl = getImageUrl(img, 400)
                    return imageUrl ? (
                      <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                        <Image
                          src={imageUrl}
                          alt={`${car.title} – Bild ${i + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
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
              {/* Title Section */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 leading-tight">
                  <span className="block font-bold">{car.title}</span>
                  {car.year && (
                    <span className="block text-2xl text-slate-600 font-light mt-2">
                      Baujahr {car.year}
                    </span>
                  )}
                </h1>
                
                <div className="mb-6">
                  <PriceTag price={car.price} size="lg" />
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {car.year && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 shadow-sm">
                    <div className="text-sm text-blue-700 font-medium mb-1">Baujahr</div>
                    <div className="text-xl font-semibold text-blue-900">{car.year}</div>
                  </div>
                )}
                {car.mileage && (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 shadow-sm">
                    <div className="text-sm text-green-700 font-medium mb-1">Kilometerstand</div>
                    <div className="text-xl font-semibold text-green-900">
                      {new Intl.NumberFormat('de-DE').format(car.mileage)} km
                    </div>
                  </div>
                )}
                {car.fuelType && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200 shadow-sm">
                    <div className="text-sm text-amber-700 font-medium mb-1">Kraftstoff</div>
                    <div className="text-xl font-semibold text-amber-900">{car.fuelType}</div>
                  </div>
                )}
                {car.transmission && (
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-200 shadow-sm">
                    <div className="text-sm text-purple-700 font-medium mb-1">Getriebe</div>
                    <div className="text-xl font-semibold text-purple-900">{car.transmission}</div>
                  </div>
                )}
              </div>

              {/* Specifications Table */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Technische Daten</h2>
                <CarSpecsTable car={car} />
              </div>

              {/* Features */}
              {car.features?.length ? (
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">Ausstattung</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">Beschreibung</h2>
                  <div className="text-slate-700 whitespace-pre-line leading-relaxed text-lg">
                    {car.description}
                  </div>
                </div>
              ) : null}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/kontakt"
                  className="flex-1 text-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontakt aufnehmen
                </Link>
                <Link 
                  href="/verkaufen" 
                  className="flex-1 text-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold text-base rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
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
