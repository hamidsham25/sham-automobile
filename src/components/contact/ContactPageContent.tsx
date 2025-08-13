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
      <ContactHeader />
      <main className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form & Map */}
            <div className="space-y-8">
              <ContactForm 
                formData={formData}
                onSubmit={handleFormSubmit}
              />
              
              {/* Google Maps - Under Contact Form */}
              <GoogleMaps />
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
