import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BuySection from '@/components/BuySection';
import SellSection from '@/components/SellSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
