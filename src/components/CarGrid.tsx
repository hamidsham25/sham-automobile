import CarCard from './CarCard'
import type { Car } from '@/types/car'

export default function CarGrid({ 
  cars, 
  emptyLabel = 'Keine Fahrzeuge gefunden.',
  vertical = false
}: { 
  cars: Car[]; 
  emptyLabel?: string,
  vertical?: boolean
}) {
  if (!cars?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{emptyLabel}</p>
      </div>
    )
  }

  return (
    <div 
      className={vertical ? "flex flex-col gap-4 w-full max-w-3xl mx-auto" : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}
      role={vertical ? "list" : "grid"}
      aria-label="Fahrzeugliste"
    >
      {cars.map((car) => (
        <CarCard key={car._id} car={car} horizontal={vertical} />
      ))}
    </div>
  )
}
