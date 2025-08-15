import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Cinematic car background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-backgroundpicture-insignia.jpg"
          alt="Opel Insignia Limousine"
          fill
          className="object-cover object-bottom opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-slate-900/70"></div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      {/* Minimal accent elements */}
      <div className="absolute top-32 right-32 w-64 h-64 bg-slate-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-48 h-48 bg-slate-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Professional badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-12">
          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
          Seit 2008 Ihr vertrauensvoller Partner
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
          <span className="block font-bold">Sham Automobile</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 mt-6">
            Premium Gebrauchtwagen in Langenhagen
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          Entdecken Sie unsere exklusive Auswahl an qualitätsgeprüften Fahrzeugen. 
          Faire Preise, transparente Beratung und ein erstklassiger Service, 
          der Sie überzeugt.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link 
            href="#kaufen"
            className="inline-block px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center">
              Fahrzeuge entdecken
              <svg className="ml-3 w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          
          <Link 
            href="#verkaufen"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center">
              Fahrzeug verkaufen
              <svg className="ml-3 w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-slate-300 font-medium">Zufriedene Kunden</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-slate-300 font-medium">Verfügbare Fahrzeuge</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-slate-300 font-medium">Jahre Erfahrung</div>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
