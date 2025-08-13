import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Fahrzeug nicht gefunden
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Das gesuchte Fahrzeug ist leider nicht mehr verfügbar oder wurde entfernt. 
            Möglicherweise wurde es bereits verkauft.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link 
              href="/kaufen" 
              className="inline-block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Alle Fahrzeuge ansehen
            </Link>
            
            <Link 
              href="/kontakt" 
              className="inline-block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-800">
              <strong>Tipp:</strong> Nutzen Sie unsere Suchfunktion oder kontaktieren Sie uns direkt. 
              Wir haben möglicherweise ähnliche Fahrzeuge im Angebot.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
