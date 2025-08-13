import { Testimonial } from './types';

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Michael Schmidt',
    feedback: 'Ich war sehr zufrieden mit dem Verkauf meines BMW. Das Angebot war fair und die Abwicklung verlief reibungslos. Innerhalb von 2 Tagen hatte ich das Geld auf dem Konto.',
    image: '/public/hero-backgroundpicture-insignia.jpg'
  },
  {
    id: 'testimonial-2',
    name: 'Sarah Müller',
    feedback: 'Sham-Automobile hat mir einen sehr guten Preis für meinen VW Golf geboten. Die Kommunikation war transparent und ich fühlte mich gut beraten. Sehr empfehlenswert!',
    image: '/public/hero-backgroundpicture-insignia.jpg'
  },
  {
    id: 'testimonial-3',
    name: 'Thomas Weber',
    feedback: 'Nachdem ich bei anderen Händlern enttäuschende Angebote erhalten hatte, war ich positiv überrascht von Sham-Automobile. Faire Bewertung und schnelle Abwicklung.',
    image: '/public/hero-backgroundpicture-insignia.jpg'
  }
];

export default function SellTestimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Überzeugen Sie sich selbst von der Qualität unseres Services. 
            Unsere zufriedenen Kunden sprechen für sich.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-4xl text-blue-600 mb-4">
                "
              </div>
              
              {/* Feedback Text */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                {testimonial.feedback}
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-slate-600 font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">Zufriedener Kunde</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-slate-600">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Über 500 zufriedene Kunden</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">15+ Jahre Erfahrung</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">100% transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
