import { Metadata } from 'next';
import { SellPage, SellStructuredData, Navbar, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Auto verkaufen - Sham-Automobile | Schnell & fair in Hannover',
  description: 'Verkaufen Sie Ihr Auto schnell und unkompliziert bei Sham-Automobile in Hannover. Faire Preise, transparente Abwicklung und sichere Zahlung.',
  keywords: ['Auto verkaufen Hannover', 'Gebrauchtwagen verkaufen', 'Fahrzeugbewertung', 'Sham-Automobile', 'Autoankauf'],
  openGraph: {
    title: 'Auto verkaufen - Sham-Automobile',
    description: 'Schnell, fair und sicher – Ihr Auto verkaufen bei Sham-Automobile Hannover.',
    url: '/images/img3.jpg',
    images: [
      {
        url: '/images/hero-backgroundpicture-insignia.jpg',
        width: 1200,
        height: 630,
        alt: 'Auto verkaufen bei Sham-Automobile'
      }
    ]
  },
  alternates: {
    canonical: 'https://sham-automobile.com/verkaufen'
  }
};

export default function VerkaufenPage() {
  return (
    <>
      <SellStructuredData />
      <Navbar />
      <SellPage />
      <Footer />
    </>
  );
}
