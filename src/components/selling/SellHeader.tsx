import Link from 'next/link';

export default function SellHeader() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen">
      {/* Background image */}
      <img src="/images/img3.jpg" alt="Verkaufen Hero Background" className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0" />
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex items-center justify-center">
        <div className="text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium">Auto verkaufen</span>
              </li>
            </ol>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-12">
            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
            Seit 2008 Ihr vertrauensvoller Partner
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] font-bold">
            <span className="block font-bold">Auto verkaufen</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              schnell, sicher und fair
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Erhalten Sie ein faires Angebot für Ihr Fahrzeug – unkompliziert und transparent
          </p>

          {/* Description */}
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Verkaufen Sie Ihr Auto bei Sham-Automobile und profitieren Sie von unserem fairen 
            Bewertungssystem und der sicheren Abwicklung. Keine versteckten Kosten, nur ehrliche Preise.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a 
              href="#bewertungsformular"
              className="inline-block px-10 py-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center">
                Jetzt Fahrzeug bewerten
                <svg className="ml-3 w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            
            <a 
              href="tel:+491725413020"
              className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center">
                +49 172 5413020
                <svg className="ml-3 w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>
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
