'use client';

import { useState } from 'react';
import { ContactForm, ContactInfo, GoogleMaps, ContactHeader } from './index';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: 'kaufen' | 'verkaufen' | 'beratung' | 'sonstiges';
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'beratung',
    message: ''
  });

  const handleFormSubmit = (data: ContactFormData) => {
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', data);
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'beratung',
      message: ''
    });
  };

  return (
    <>
      <main className="min-h-screen pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Breadcrumb Navigation - centered with content */}
          <nav className="mb-8 flex justify-center" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-slate-500">
              <li>
                <a href="/" className="hover:underline text-slate-600">Home</a>
              </li>
              <li>
                <span className="mx-1">&#8250;</span>
              </li>
              <li className="text-slate-700 font-medium">Kontakt</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <div className="space-y-8">
              <ContactForm 
                formData={formData}
                onSubmit={handleFormSubmit}
              />
              {/* Callback Request Card */}
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

            {/* Right Column - Google Maps + Contact Info as one unified card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col gap-8 h-full">
              <GoogleMaps />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
