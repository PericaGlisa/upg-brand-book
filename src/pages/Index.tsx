
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ColorSection from '@/components/ColorSection';
import TypographySection from '@/components/TypographySection';
import LogoSection from '@/components/LogoSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <div id="about">
          <AboutSection />
        </div>
        <div id="colors">
          <ColorSection />
        </div>
        <div id="typography">
          <TypographySection />
        </div>
        <div id="logo">
          <LogoSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
