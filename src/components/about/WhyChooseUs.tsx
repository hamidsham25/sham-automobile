import { CompanyStats } from './AboutPageContent';

interface WhyChooseUsProps {
  stats: CompanyStats;
  statsRef: React.RefObject<HTMLDivElement | null>;
}

export default function WhyChooseUs({ stats, statsRef }: WhyChooseUsProps) {
  const advantages = [
    {
      title: "Über 15 Jahre Erfahrung im Automobilhandel",
      description: "Langjährige Expertise und tiefes Verständnis der Branche",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Strenge Qualitätsprüfung aller Fahrzeuge",
      description: "Jedes Fahrzeug wird von unseren Experten gründlich geprüft",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Faire und transparente Preisgestaltung",
      description: "Keine versteckten Kosten - Sie wissen immer, was Sie bezahlen",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Umfassende Beratung und Service",
      description: "Von der ersten Beratung bis zum After-Sales Service",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Garantie auf alle verkauften Fahrzeuge",
      description: "Sicherheit und Vertrauen für jeden Kauf",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Persönlicher Kundenservice",
      description: "Individuelle Betreuung und maßgeschneiderte Lösungen für Ihre Bedürfnisse",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Warum Sham-Automobile?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Entdecken Sie, was uns zu Ihrem vertrauensvollen Partner für Gebrauchtwagen macht
          </p>
        </div>

        {/* Statistics Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { label: 'Jahre Erfahrung', value: stats.yearsInBusiness, suffix: '+' },
            { label: 'Fahrzeuge verkauft', value: stats.carsSold, suffix: '+' },
            { label: 'Zufriedene Kunden', value: stats.satisfiedCustomers, suffix: '+' },

          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value.toLocaleString('de-DE')}{stat.suffix}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
