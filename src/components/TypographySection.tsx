
import React from 'react';

const TypographySection = () => {
  return (
    <section id="typography" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-6 sm:mb-8">Typography</h2>
        
        <p className="text-gray-700 leading-relaxed mb-8 sm:mb-10 max-w-4xl text-sm sm:text-base">
          Our typography system is designed to convey clarity, professionalism, and technical precision. 
          We use a modern sans-serif typeface that is both legible and sophisticated, reflecting our 
          engineering expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Primary Font: Aktiv Grotesk</h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="border-b pb-4 sm:pb-6">
                <p className="text-brand-mediumgray mb-2 text-sm">Bold (700)</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">ABCDEFGHIJKLMNO</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">abcdefghijklmno</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">1234567890</p>
              </div>
              
              <div className="border-b pb-4 sm:pb-6">
                <p className="text-brand-mediumgray mb-2 text-sm">Medium (500)</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-medium">ABCDEFGHIJKLMNO</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-medium">abcdefghijklmno</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-medium">1234567890</p>
              </div>
              
              <div>
                <p className="text-brand-mediumgray mb-2 text-sm">Regular (400)</p>
                <p className="text-3xl sm:text-4xl md:text-5xl">ABCDEFGHIJKLMNO</p>
                <p className="text-3xl sm:text-4xl md:text-5xl">abcdefghijklmno</p>
                <p className="text-3xl sm:text-4xl md:text-5xl">1234567890</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Typography Hierarchy</h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="border-b pb-3 sm:pb-4">
                <p className="text-brand-mediumgray mb-1 text-xs sm:text-sm">Heading 1</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Engineering Excellence</h1>
              </div>
              
              <div className="border-b pb-3 sm:pb-4">
                <p className="text-brand-mediumgray mb-1 text-xs sm:text-sm">Heading 2</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Technical Precision</h2>
              </div>
              
              <div className="border-b pb-3 sm:pb-4">
                <p className="text-brand-mediumgray mb-1 text-xs sm:text-sm">Heading 3</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Innovative Solutions</h3>
              </div>
              
              <div className="border-b pb-3 sm:pb-4">
                <p className="text-brand-mediumgray mb-1 text-xs sm:text-sm">Subtitle</p>
                <h4 className="text-lg sm:text-xl font-medium">Urban Planning & Civil Engineering</h4>
              </div>
              
              <div className="border-b pb-3 sm:pb-4">
                <p className="text-brand-mediumgray mb-1 text-xs sm:text-sm">Body</p>
                <p className="text-sm sm:text-base">
                  Our engineering approach combines technical expertise with creative problem-solving, 
                  resulting in solutions that are both practical and innovative.
                </p>
              </div>
              
              <div>
                <p className="text-brand-mediumgray mb-1 text-xs sm:text-sm">Caption / Small</p>
                <p className="text-xs sm:text-sm text-brand-mediumgray">
                  Engineering specifications and technical details (2023)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 bg-brand-lightgray p-6 sm:p-8 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Typography Guidelines</h3>
          <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base text-gray-700">
            <li>
              <strong>Font Family:</strong> Use Aktiv Grotesk as the primary typeface across all 
              communications. For web and digital applications where Aktiv Grotesk is unavailable, 
              use system sans-serif fonts as fallbacks.
            </li>
            <li>
              <strong>Text Alignment:</strong> Left-align body text for optimal readability. Center alignment 
              may be used for headlines and short statements when appropriate.
            </li>
            <li>
              <strong>Line Height:</strong> Use generous line spacing for body text (1.5-1.6 times the font size) 
              to ensure readability.
            </li>
            <li>
              <strong>Font Sizes:</strong> Maintain appropriate scaling between different levels of typographic hierarchy.
            </li>
            <li>
              <strong>Font Weight Usage:</strong> Reserve Bold (700) for headlines and important callouts. 
              Use Medium (500) for subheadings and Regular (400) for body copy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TypographySection;
