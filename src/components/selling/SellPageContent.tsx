'use client';

import { SellHeader, SellProcess, SellAdvantages, SellTestimonials, SellContactCTA } from './index';

export default function SellPageContent() {
  return (
    <>
      <SellHeader />
      <main className="min-h-screen">
        {/* Process Section with Integrated Form */}
        <SellProcess />
        
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
