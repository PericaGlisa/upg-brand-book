
import React from 'react';
import { Compass, Target, Award, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-6 sm:mb-8">About Our Brand</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 md:mt-12">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Urban Planing Guide Engineering L.L.C. is dedicated to creating innovative, sustainable solutions 
              that transform urban spaces and civil infrastructure. We combine cutting-edge technology with 
              decades of engineering expertise to deliver projects that are not only structurally sound, but 
              also environmentally responsible and aesthetically pleasing.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
              Our brand identity reflects our commitment to precision, innovation, and reliability. Every 
              element of our visual system is designed to communicate our professional values and technical expertise.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-brand-lightgray p-3 sm:p-4 md:p-6 rounded-lg">
                <Compass className="text-brand-blue mb-2 sm:mb-3" size={isMobile ? 20 : 24} />
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Precision</h4>
                <p className="text-gray-700 text-xs sm:text-sm">Meticulous attention to detail in every aspect of our work</p>
              </div>
              
              <div className="bg-brand-lightgray p-3 sm:p-4 md:p-6 rounded-lg">
                <Target className="text-brand-blue mb-2 sm:mb-3" size={isMobile ? 20 : 24} />
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Innovation</h4>
                <p className="text-gray-700 text-xs sm:text-sm">Embracing new technologies and methodologies</p>
              </div>
              
              <div className="bg-brand-lightgray p-3 sm:p-4 md:p-6 rounded-lg">
                <Award className="text-brand-blue mb-2 sm:mb-3" size={isMobile ? 20 : 24} />
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Excellence</h4>
                <p className="text-gray-700 text-xs sm:text-sm">Commitment to the highest standards in engineering</p>
              </div>
              
              <div className="bg-brand-lightgray p-3 sm:p-4 md:p-6 rounded-lg">
                <Zap className="text-brand-blue mb-2 sm:mb-3" size={isMobile ? 20 : 24} />
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Sustainability</h4>
                <p className="text-gray-700 text-xs sm:text-sm">Creating solutions with environmental responsibility</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Brand Essence</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl">
            Our brand essence combines technical precision with creative innovation. The circular motifs in our 
            logo represent our holistic approach to engineering challenges, while the light blue accent symbolizes 
            clarity of thought and a forward-thinking mindset. When using our brand assets, maintain this balance 
            between technical expertise and innovative thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
