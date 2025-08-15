export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Unsere Geschichte
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Sham-Automobile wurde im Jahr 2009 mit einer klaren Vision gegründet: 
                Jeden Kunden mit dem perfekten Gebrauchtwagen zu fairen Preisen zu versorgen.
              </p>
              
              <p>
                Was als kleiner Familienbetrieb begann, hat sich zu einem der vertrauensvollsten 
                Gebrauchtwagen-Händler in der Region Langenhagen entwickelt. Unser Erfolg basiert 
                auf dem Prinzip, dass Qualität und Kundenzufriedenheit an erster Stelle stehen.
              </p>

              <p>
                Über die Jahre hinweg haben wir uns einen exzellenten Ruf erarbeitet, 
                indem wir nur die besten Fahrzeuge auswählen und unseren Kunden 
                einen erstklassigen Service bieten.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Unsere Mission
              </h3>
              <p className="text-slate-700 leading-relaxed">
                &ldquo;Unser Ziel ist es, jedem Kunden das perfekte Fahrzeug zu fairen Preisen anzubieten. 
                Wir glauben daran, dass Qualität, Transparenz und persönlicher Service der Schlüssel 
                zu langfristigen Kundenbeziehungen sind.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">15+ Jahre</h4>
                    <p className="text-slate-600">Erfahrung im Automobilhandel</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-200 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Unsere Werte
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diese Grundprinzipien leiten uns bei allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Vertrauen',
                description: 'Wir bauen auf langfristige, ehrliche Beziehungen zu unseren Kunden',
                icon: '🤝'
              },
              {
                title: 'Qualität',
                description: 'Jedes Fahrzeug durchläuft eine strenge Qualitätsprüfung',
                icon: '⭐'
              },
              {
                title: 'Kundenservice',
                description: 'Ihr Zufriedenheit steht im Mittelpunkt unseres Handelns',
                icon: '🎯'
              },
              {
                title: 'Fairness',
                description: 'Transparente Preise und ehrliche Beratung bei jedem Geschäft',
                icon: '⚖️'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
