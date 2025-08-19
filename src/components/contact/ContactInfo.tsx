export default function ContactInfo() {
  return (
    <>
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
          </div>
        </div>

        {/* Phone & Email Section Combined */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Kontakt</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <a 
                href="tel:+491725413020"
                className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 172 5413020
              </a>
              <a 
                href="mailto:noorsham@web.de"
                className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                noorsham@web.de
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 mt-2">
              <p className="text-sm text-slate-500">Mo-Fr: 9:00-18:00 Uhr</p>
              <p className="text-sm text-slate-500">Antwort innerhalb von 2-4 Stunden</p>
            </div>
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
      </div>
    </>
  );
}
