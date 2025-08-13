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

          {/* Right side - CTA and form */}
          <div className="relative">
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  Kostenlos bewerten lassen!
                </h3>
                <p className="text-slate-600">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label htmlFor="car-info" className="block text-sm font-medium text-slate-700 mb-2">
                    Fahrzeugdetails
                  </label>
                  <textarea
                    id="car-info"
                    name="car-info"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 resize-none"
                    placeholder="Marke, Modell, Baujahr, Kilometerstand, Ausstattung..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kostenlose Bewertung anfordern
                </button>

                <p className="text-slate-500 text-sm text-center">
                  * Pflichtfelder. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
