

// Sample car data - in a real app, this would come from an API or database
const sampleCars = [
  {
    id: 1,
    make: 'BMW',
    model: '3er Serie',
    year: 2020,
    mileage: '45.000 km',
    price: '€28.500',
    fuel: 'Diesel',
    transmission: 'Automatik',
    image: '/api/placeholder/400/300',
    condition: 'Sehr gut',
    features: ['Klimaanlage', 'Sitzheizung', 'Einparkhilfe', 'LED-Scheinwerfer']
  },
  {
    id: 2,
    make: 'Mercedes-Benz',
    model: 'C-Klasse',
    year: 2019,
    mileage: '62.000 km',
    price: '€32.800',
    fuel: 'Benzin',
    transmission: 'Manuell',
    image: '/api/placeholder/400/300',
    condition: 'Gut',
    features: ['Panoramadach', 'Lederausstattung', 'Navigation', 'Tempomat']
  },
  {
    id: 3,
    make: 'Audi',
    model: 'A4',
    year: 2021,
    mileage: '38.000 km',
    price: '€35.200',
    fuel: 'Diesel',
    transmission: 'Automatik',
    image: '/api/placeholder/400/300',
    condition: 'Ausgezeichnet',
    features: ['Quattro', 'Matrix-LED', 'Virtual Cockpit', 'Adaptive Cruise Control']
  },
  {
    id: 4,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2018,
    mileage: '78.000 km',
    price: '€18.900',
    fuel: 'Benzin',
    transmission: 'Manuell',
    image: '/api/placeholder/400/300',
    condition: 'Gut',
    features: ['Klimaanlage', 'Bluetooth', 'ESP', 'ABS']
  }
];

export default function BuySection() {
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



        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleCars.map((car) => (
            <div key={car.id} className="group bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Car Image with Overlay */}
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-semibold shadow-sm">
                  {car.price}
                </div>
                
                {/* Condition Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {car.condition}
                </div>
                
                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 text-slate-900 px-2 py-1 rounded text-sm font-semibold">
                  {car.year}
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                  {car.make} {car.model}
                </h3>
                
                {/* Key Specs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span>{car.transmission}</span>
                  </div>
                </div>
                
                {/* Features */}
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

                {/* Price and CTA */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div className="text-2xl font-bold text-slate-900">{car.price}</div>
                  <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="flex items-center">
              Alle Fahrzeuge anzeigen
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
