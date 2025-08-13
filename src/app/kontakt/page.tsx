import { Metadata } from 'next';
import { ContactPage, ContactStructuredData } from '@/components';

export const metadata: Metadata = {
  title: 'Kontakt - Sham-Automobile | Gebrauchtwagen Händler',
  description: 'Kontaktieren Sie Sham-Automobile - Ihr vertrauensvoller Partner für Gebrauchtwagen. Telefon, E-Mail und persönliche Beratung.',
  keywords: ['Kontakt', 'Sham-Automobile', 'Gebrauchtwagen', 'Autohändler', 'Beratung', 'Hannover'],
  openGraph: {
    title: 'Kontakt - Sham-Automobile',
    description: 'Kontaktieren Sie uns für Gebrauchtwagen, Beratung und Service',
    url: 'https://sham-automobile.com/kontakt'
  },
  alternates: {
    canonical: 'https://sham-automobile.com/kontakt'
  }
};

export default function KontaktPage() {
  return (
    <>
      <ContactStructuredData />
      <ContactPage />
    </>
  );
}
