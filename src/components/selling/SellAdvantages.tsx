import { SellingAdvantage } from './types';

const advantages: SellingAdvantage[] = [
  {
    id: 'advantage-1',
    title: 'Schnelle und faire Angebote',
    description: 'Innerhalb von 24 Stunden erhalten Sie ein transparentes und faires Angebot für Ihr Fahrzeug.',
    icon: '⚡'
  },
  {
    id: 'advantage-2',
    title: 'Transparente Abwicklung',
    description: 'Keine versteckten Kosten oder Überraschungen. Wir kommunizieren offen und ehrlich.',
    icon: '🔍'
  },
  {
    id: 'advantage-3',
    title: 'Direkte Zahlung',
    description: 'Sofortige Auszahlung nach Vertragsabschluss. Kein Warten auf Banküberweisungen.',
    icon: '💳'
  },
  {
    id: 'advantage-4',
    title: 'Keine versteckten Gebühren',
    description: 'Was wir Ihnen anbieten, ist der finale Preis. Keine zusätzlichen Kosten für Sie.',
    icon: '💰'
  },
  {
    id: 'advantage-5',
    title: 'Langjährige Erfahrung',
    description: 'Über 15 Jahre Erfahrung im Automobilhandel. Wir kennen den Markt und Ihre Bedürfnisse.',
    icon: '🏆'
  },
  {
    id: 'advantage-6',
    title: 'Persönliche Beratung',
    description: 'Unser erfahrenes Team steht Ihnen persönlich zur Seite und beantwortet alle Ihre Fragen.',
    icon: '👥'
  }
];

export default function SellAdvantages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Warum bei uns verkaufen?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sham-Automobile ist Ihr vertrauensvoller Partner beim Verkauf Ihres Fahrzeugs. 
            Wir bieten Ihnen faire Preise und einen professionellen Service.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div 
              key={advantage.id} 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 text-center">
                {advantage.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                {advantage.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 text-center leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für den nächsten Schritt?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns Ihr Fahrzeug bewerten und erhalten Sie ein faires Angebot. 
              Der Prozess dauert nur wenige Minuten und ist völlig kostenlos.
            </p>
            <a 
              href="#bewertungsformular"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Jetzt bewerten lassen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
