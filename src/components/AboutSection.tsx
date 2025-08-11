export default function AboutSection() {
  return (
    <section id="uber-uns" className="py-16 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-3">
        <div className="absolute top-20 right-20 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium mb-6">
            Über Sham Automobile
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
            Ihr vertrauensvoller Partner
            <span className="block font-bold text-slate-900">
              seit über 15 Jahren
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Sham Automobile wurde 2008 in Hannover gegründet und hat sich seitdem zu einem 
            der führenden Gebrauchtwagenhändler in der Region entwickelt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Left side - Company story */}
          <div>
            <h3 className="text-3xl font-light text-slate-900 mb-8">
              <span className="font-bold text-slate-900">
                Unsere Geschichte
              </span>
            </h3>
            
            <div className="space-y-6">
              <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-semibold text-lg">2008</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Gründung in Hannover</h4>
                    <p className="text-slate-600">Mit der Vision, den Gebrauchtwagenmarkt zu revolutionieren und Kunden einen transparenten, fairen Service zu bieten.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-semibold text-lg">2015</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Expansion & Wachstum</h4>
                    <p className="text-slate-600">Erweiterung des Geschäfts und Aufbau eines starken Teams aus Automobilexperten.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-semibold text-lg">2024</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Marktführer</h4>
                    <p className="text-slate-600">Etablierung als einer der führenden Gebrauchtwagenhändler in Hannover mit über 2000 zufriedenen Kunden.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Mission and values */}
          <div className="space-y-6">
            <div className="group bg-slate-900 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-4">Unsere Mission</h4>
              <p className="text-slate-200 leading-relaxed">
                Wir möchten jedem Kunden den perfekten Gebrauchtwagen zu einem fairen Preis 
                anbieten und dabei höchste Qualitätsstandards einhalten.
              </p>
            </div>

            <div className="group bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-semibold text-slate-900 mb-4">Unsere Werte</h4>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span>Transparenz in allen Geschäftsprozessen</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span>Faire Preise und ehrliche Bewertungen</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span>Qualität und Sicherheit an erster Stelle</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span>Persönlicher Service und Beratung</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span>Langfristige Kundenbeziehungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center group">
            <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
            <div className="text-slate-600 font-medium">Jahre Erfahrung</div>
          </div>
          
          <div className="text-center group">
            <div className="text-4xl font-bold text-slate-900 mb-2">2000+</div>
            <div className="text-slate-600 font-medium">Verkaufte Fahrzeuge</div>
          </div>
          
          <div className="text-center group">
            <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
            <div className="text-slate-600 font-medium">Zufriedene Kunden</div>
          </div>
          
          <div className="text-center group">
            <div className="text-4xl font-bold text-slate-900 mb-2">24h</div>
            <div className="text-slate-600 font-medium">Reaktionszeit</div>
          </div>
        </div>




      </div>
    </section>
  );
}
