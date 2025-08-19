import { Metadata } from 'next';
import { AboutPage, AboutStructuredData } from '@/components';

export const metadata: Metadata = {
  title: 'Über Uns - Sham-Automobile | Erfahrener Gebrauchtwagen Händler',
  description: 'Erfahren Sie mehr über Sham-Automobile - Ihr vertrauensvoller Partner für Qualitäts-Gebrauchtwagen. Über 15 Jahre Erfahrung und zufriedene Kunden.',
  keywords: ['Über uns', 'Sham-Automobile', 'Gebrauchtwagen Händler', 'Firmengeschichte', 'Qualität', 'Erfahrung', 'Hannover'],
  openGraph: {
    title: 'Über Uns - Sham-Automobile',
    description: 'Lernen Sie Sham-Automobile kennen - Ihr Partner für Qualitäts-Gebrauchtwagen',
    url: '/images/img1.jpg',
    images: [
      {
        url: '/images/hero-backgroundpicture-insignia.jpg',
        width: 1200,
        height: 630,
        alt: 'Sham-Automobile Team und Firmengebäude'
      }
    ]
  },
  alternates: {
    canonical: 'https://sham-automobile.com/ueber-uns'
  }
};

export default function UeberUnsPage() {
  return (
    <>
      <AboutStructuredData />
      <AboutPage />
    </>
  );
}
