'use client';

import { useState } from 'react';
import { SellForm, SellHeader, SellProcess, SellAdvantages, SellTestimonials, SellContactCTA } from './index';
import { SellFormData } from './types';

export default function SellPageContent() {
  const [formData, setFormData] = useState<SellFormData>({
    brand: '',
    model: '',
    year: 0,
    mileage: 0,
    fuelType: '',
    condition: '',
    images: [],
    name: '',
    email: '',
    phone: ''
  });

  const handleFormSubmit = (data: SellFormData) => {
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', data);
    // Reset form after successful submission
    setFormData({
      brand: '',
      model: '',
      year: 0,
      mileage: 0,
      fuelType: '',
      condition: '',
      images: [],
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <>
      <SellHeader />
      <main className="min-h-screen">
        {/* Process Section */}
        <SellProcess />
        
        {/* Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SellForm 
                formData={formData}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </section>
        
        {/* Advantages Section */}
        <SellAdvantages />
        
        {/* Testimonials Section */}
        <SellTestimonials />
        
        {/* Contact CTA Section */}
        <SellContactCTA />
      </main>
    </>
  );
}
