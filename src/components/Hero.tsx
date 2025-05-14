
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  const scrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden bg-brand-charcoal grid-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 to-brand-charcoal/70"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <img 
            src="/lovable-uploads/449540a8-92c1-4182-bc6e-8b0ea07cf847.png" 
            alt="UPG Engineering Logo" 
            className="h-20 sm:h-24 md:h-32 lg:h-40 animate-fade-in"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 animate-fade-up">
          Brand Guidelines
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Simple, innovative solutions for all your engineering inspirations.
        </p>
        
        <button 
          onClick={scrollDown}
          className="mt-8 sm:mt-12 bg-transparent border-2 border-brand-blue text-brand-blue px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                   hover:bg-brand-blue hover:text-white transition-colors flex items-center mx-auto animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Explore Brand
          <ChevronDown className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
