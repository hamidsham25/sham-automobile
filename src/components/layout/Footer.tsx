import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-96 h-96 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-sm">
                <svg 
                  className="w-8 h-8 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold">Sham Automobile</span>
                <div className="text-slate-400 text-sm font-medium">Premium Gebrauchtwagen</div>
              </div>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
              Ihr vertrauensvoller Partner für Gebrauchtwagen in Langenhagen. 
              Faire Preise, transparente Beratung und erstklassiger Service seit 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Schnellzugriff
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#kaufen" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  Fahrzeuge kaufen
                </Link>
              </li>
              <li>
                <Link href="#verkaufen" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  Fahrzeug verkaufen
                </Link>
              </li>
              <li>
                <Link href="#uber-uns" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Kontakt
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex flex-col">
                <span className="font-semibold">Adresse:</span>
                <span>Walsroder Straße 237, 30855 Langenhagen</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold">Telefon:</span>
                <a href="tel:+491725413020" className="hover:underline">+49 172 5413020</a>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold">E-Mail:</span>
                <a href="mailto:noorsham@web.de" className="hover:underline">noorsham@web.de</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Sham Automobile. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-8">
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Datenschutz
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Impressum
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
