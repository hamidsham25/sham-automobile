export default function SellSection() {
  return (
    <section id="verkaufen" className="pt-24 pb-16 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 right-20 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium mb-6">
            Fahrzeug verkaufen
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
            Verkaufen Sie Ihr
            <span className="block font-bold text-slate-900">
              Fahrzeug
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Sham Automobile bietet Ihnen einen fairen und transparenten Verkaufsprozess 
            mit professioneller Bewertung und schneller Abwicklung. 
            Ihr Vertrauen ist unser Kapital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Sofortige Bewertung</h3>
                <p className="text-slate-600 text-sm">Erhalten Sie eine faire Bewertung Ihres Fahrzeugs innerhalb von 24 Stunden</p>
              </div>

              <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Faire Preise</h3>
                <p className="text-slate-600 text-sm">Wir bieten marktgerechte Preise basierend auf aktuellen Marktwerten</p>
              </div>

              <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Schnelle Abwicklung</h3>
                <p className="text-slate-600 text-sm">Vom Verkaufsvertrag bis zur Übergabe in nur wenigen Tagen</p>
              </div>

              <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Professioneller Service</h3>
                <p className="text-slate-600 text-sm">Unser erfahrenes Team kümmert sich um alle Formalitäten</p>
              </div>
            </div>

            {/* Trust Box */}
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Warum Sham Automobile?</h4>
              <p className="text-slate-600 leading-relaxed">
                Als etablierter Gebrauchtwagenhändler in Hannover kennen wir den lokalen Markt 
                und können Ihnen den besten Preis für Ihr Fahrzeug garantieren. 
                Über 2000 zufriedene Kunden vertrauen uns bereits.
              </p>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="relative">
            <div className="bg-white border border-slate-200 p-12 rounded-xl shadow-lg text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-10 h-10 text-slate-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Bereit für den Verkauf?
                </h3>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Erfahren Sie mehr über unseren Verkaufsprozess und lassen Sie Ihr Fahrzeug 
                  kostenlos und unverbindlich bewerten. Wir garantieren faire Preise und 
                  eine professionelle Abwicklung.
                </p>
                
                <a
                  href="/verkaufen"
                  className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-slate-800 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  Jetzt Fahrzeug verkaufen
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
                
                <p className="text-slate-500 text-sm mt-4">
                  Kostenlose und unverbindliche Bewertung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
