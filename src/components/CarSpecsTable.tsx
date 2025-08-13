import type { Car } from '@/types/car'

export default function CarSpecsTable({ car }: { car: Car }) {
  const rows = [
    ['Preis', car.price ? `${new Intl.NumberFormat('de-DE').format(car.price)} €` : 'Auf Anfrage'],
    ['Baujahr', car.year ?? '—'],
    ['Kilometerstand', car.mileage ? `${new Intl.NumberFormat('de-DE').format(car.mileage)} km` : '—'],
    ['Kraftstoff', car.fuelType ?? '—'],
    ['Getriebe', car.transmission ?? '—'],
    ['Leistung', car.power ? `${car.power} PS` : '—'],
    ['Farbe', car.color ?? '—'],
    ['Türen', car.doors ?? '—'],
    ['Standort', car.location ?? '—'],
  ] as const

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <table className="w-full text-sm" role="table" aria-label="Fahrzeugspezifikationen">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b last:border-0">
              <th 
                className="w-1/3 bg-gray-50 px-4 py-3 text-left font-medium text-gray-600"
                scope="row"
              >
                {label}
              </th>
              <td className="px-4 py-3 text-gray-900">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
