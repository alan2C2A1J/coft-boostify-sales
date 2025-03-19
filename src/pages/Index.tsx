
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NecessitySection from '@/components/NecessitySection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import ResultsSection from '@/components/ResultsSection';
import StepsSection from '@/components/StepsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "COFT - Aumentamos Suas Vendas";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <HeroSection />
      <NecessitySection />
      <AboutSection />
      <BenefitsSection />
      <ResultsSection />
      <StepsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
