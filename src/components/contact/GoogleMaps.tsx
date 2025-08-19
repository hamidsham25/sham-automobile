export default function GoogleMaps() {
  return (
    <>
      {/* Map Container */}
      <div className="relative">
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.964232!2d9.7386!3d52.4467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b073e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2sWalsroder+Straße+237,+30855+Langenhagen,+Deutschland!5e0!3m2!1sde!2sde!4v1234567890&hl=de"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sham Automobile Standort in Hannover"
            className="rounded-xl"
          />
        </div>

      </div>

      {/* Google Maps Button */}
      <div className="mt-2">
        <a 
          href="https://maps.google.com/?q=Walsroder+Straße+237,+30855+Langenhagen,+Deutschland"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
          </svg>
          In Google Maps öffnen
        </a>
      </div>
    </>
  );
}
