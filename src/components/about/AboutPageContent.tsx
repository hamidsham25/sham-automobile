'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { AboutHeader, CompanyStory, WhyChooseUs, ServicesSection, QualityPromise } from './index';
import { Navbar, Footer } from '@/components';

export interface CompanyStats {
  yearsInBusiness: number;
  carsSold: number;
  satisfiedCustomers: number;
}



export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export default function AboutPage() {
  const stats = useMemo<CompanyStats>(() => ({
    yearsInBusiness: 15,
    carsSold: 2500,
    satisfiedCustomers: 2300
  }), []);

  const [animatedStats, setAnimatedStats] = useState<CompanyStats>({
    yearsInBusiness: 0,
    carsSold: 0,
    satisfiedCustomers: 0
  });

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedStats({
          yearsInBusiness: Math.floor(stats.yearsInBusiness * progress),
          carsSold: Math.floor(stats.carsSold * progress),
          satisfiedCustomers: Math.floor(stats.satisfiedCustomers * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedStats(stats);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats when section comes into view
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [stats]);

  return (
    <>
      <Navbar />
      <AboutHeader />
      <main className="min-h-screen pt-20">
        <CompanyStory />
        <WhyChooseUs stats={animatedStats} statsRef={statsRef} />
        <ServicesSection />
        <QualityPromise />
      </main>
      <Footer />
    </>
  );
}
