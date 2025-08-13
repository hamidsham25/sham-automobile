import { SellingStep } from './types';

const sellingSteps: SellingStep[] = [
  {
    id: 'step-1',
    title: 'Fahrzeugdaten eingeben',
    description: 'Füllen Sie unser Bewertungsformular mit den wichtigsten Informationen zu Ihrem Fahrzeug aus.',
    icon: '📝'
  },
  {
    id: 'step-2',
    title: 'Kostenlose Bewertung erhalten',
    description: 'Innerhalb von 24 Stunden erhalten Sie ein faires und transparentes Angebot von uns.',
    icon: '💰'
  },
  {
    id: 'step-3',
    title: 'Angebot annehmen',
    description: 'Sind Sie mit unserem Angebot einverstanden? Dann können wir direkt mit der Abwicklung beginnen.',
    icon: '✅'
  },
  {
    id: 'step-4',
    title: 'Sichere Abwicklung und Zahlung',
    description: 'Wir kümmern uns um die komplette Abwicklung – stressfrei für Sie. Direkte Auszahlung garantiert.',
    icon: '🔒'
  }
];

export default function SellProcess() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            So einfach verkaufen Sie Ihr Auto
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            In nur 4 einfachen Schritten zu Ihrem fairen Angebot. 
            Transparent, schnell und ohne versteckte Kosten.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellingSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                {index + 1}
              </div>
              
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="text-6xl mb-6 text-center">
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar for Mobile */}
        <div className="mt-16 lg:hidden">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="flex items-center justify-between mb-4">
                {sellingSteps.map((_, index) => (
                  <div key={index} className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-1/4 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
