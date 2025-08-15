'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="pt-24 pb-16 bg-slate-800 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-16 left-16 w-80 h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800 text-slate-200 rounded-lg text-sm font-medium mb-6">
            Kontakt
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Lassen Sie uns
            <span className="block font-bold text-white">
              ins Gespräch kommen
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
            Kontaktieren Sie uns gerne - wir freuen uns auf Sie!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Senden Sie uns eine Nachricht
              </h3>
              <p className="text-slate-300 text-sm">
                Wir antworten in der Regel innerhalb von 2-4 Stunden.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 resize-none"
                  placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Anliegen..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-slate-100 text-slate-900 py-3 px-6 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Nachricht senden
              </button>

              <p className="text-slate-300 text-xs text-center">
                * Pflichtfelder. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Main Contact Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Kontaktinformationen
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-base">Adresse</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Sham Automobile<br />
                      Walsroder Straße 237<br />
                      30855 Langenhagen<br />
                      Deutschland
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-1 text-base">Telefon</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <a href="tel:+491725413020" className="hover:text-white transition-colors duration-300 block">
                        +49 172 5413020
                      </a>
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-base">E-Mail</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <a href="mailto:noorsham@web.de" className="hover:text-white transition-colors duration-300 block">
                        noorsham@web.de
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-1 text-base">Öffnungszeiten</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <strong>Mo-Fr:</strong> 9:00-18:00<br />
                      <strong>Sa:</strong> 9:00-14:00<br />
                      <strong>So:</strong> Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
              <h4 className="text-base font-semibold text-white mb-3 text-center">Unser Standort</h4>
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.964232!2d9.7386!3d52.4467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b073e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2sWalsroder+Straße+237,+30855+Langenhagen,+Deutschland!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sham Automobile Location"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-slate-300 text-xs text-center mt-2">
                Langenhagen, Deutschland - Ihr genauer Standort wird hier angezeigt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
