export default function KaufenCTA() {
  return (
    <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-sm border">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Nicht das Richtige gefunden?
      </h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Wir haben ständig neue Fahrzeuge im Angebot. Lassen Sie uns wissen, was Sie suchen, 
        und wir finden das passende Fahrzeug für Sie.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="/kontakt" 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Kontakt aufnehmen
        </a>
        <a 
          href="/verkaufen" 
          className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Fahrzeug verkaufen
        </a>
      </div>
    </div>
  )
}
