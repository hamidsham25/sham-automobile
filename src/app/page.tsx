import { Navbar, Hero, BuySection, SellSection, AboutSection, ContactSection, Footer } from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <BuySection />
        <SellSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
