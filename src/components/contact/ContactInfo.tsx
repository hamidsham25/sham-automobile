export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Kontaktinformationen
        </h2>
        <p className="text-slate-600 text-lg">
          Wir freuen uns darauf, von Ihnen zu hören
        </p>
      </div>

      <div className="space-y-8">
        {/* Address Section */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Adresse</h3>
            <div className="text-slate-600 space-y-1">
              <p className="font-medium">Sham Automobile GmbH</p>
              <p>Walsroder Straße 237</p>
              <p>30855 Langenhagen</p>
              <p>Deutschland</p>
            </div>
            <a 
              href="https://maps.google.com/?q=Walsroder+Straße+237,+30855+Langenhagen,+Deutschland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium mt-3 transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Route planen
            </a>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Telefon</h3>
            <div className="space-y-2">
              <a 
                href="tel:+491725413020"
                className="block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300"
              >
                +49 172 5413020
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-2">
              Mo-Fr: 9:00-18:00 Uhr
            </p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">E-Mail</h3>
            <div className="space-y-2">
              <a 
                href="mailto:noorsham@web.de"
                className="block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300"
              >
                noorsham@web.de
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-2">
              Antwort innerhalb von 2-4 Stunden
            </p>
          </div>
        </div>

        {/* WhatsApp Section */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.242.489 1.665.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">WhatsApp</h3>
            <a 
              href="https://wa.me/491725413020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300"
            >
              +49 172 5413020
            </a>
            <p className="text-sm text-slate-500 mt-2">
              Schnelle Antwort über WhatsApp
            </p>
          </div>
        </div>

        {/* Business Hours Section */}
        <div className="bg-slate-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
            Öffnungszeiten
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Montag - Freitag</span>
              <span className="font-semibold text-slate-900">9:00 - 18:00 Uhr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Samstag</span>
              <span className="font-semibold text-slate-900">9:00 - 14:00 Uhr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Sonntag</span>
              <span className="font-semibold text-slate-900 text-red-600">Geschlossen</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center">
              Außerhalb der Öffnungszeiten können Sie uns gerne eine Nachricht hinterlassen
            </p>
          </div>
        </div>

        {/* Callback Request */}
        <div className="bg-slate-900 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Rückruf anfordern
          </h3>
          <p className="text-slate-300 mb-4">
            Wir rufen Sie gerne zurück, wenn es Ihnen passt
          </p>
          <a 
            href="tel:+49511123456"
            className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Jetzt anrufen
          </a>
        </div>
      </div>
    </div>
  );
}
