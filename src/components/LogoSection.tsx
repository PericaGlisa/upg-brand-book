
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const LogoSection = () => {
  const [activeTab, setActiveTab] = useState('guidelines');

  return (
    <section id="logo" className="py-20 bg-brand-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Logo Usage</h2>
        
        <p className="text-gray-700 leading-relaxed mb-10 max-w-4xl">
          Our logo represents the core of our brand identity. It combines geometric precision with 
          fluid design elements, symbolizing both our technical expertise and our innovative approach 
          to engineering challenges.
        </p>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-wrap border-b">
            <button 
              onClick={() => setActiveTab('guidelines')}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base flex-grow sm:flex-grow-0 ${activeTab === 'guidelines' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500'}`}
            >
              Guidelines
            </button>
            <button 
              onClick={() => setActiveTab('variations')}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base flex-grow sm:flex-grow-0 ${activeTab === 'variations' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500'}`}
            >
              Logo Variations
            </button>
            <button 
              onClick={() => setActiveTab('clearspace')}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base flex-grow sm:flex-grow-0 ${activeTab === 'clearspace' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500'}`}
            >
              Clear Space & Sizing
            </button>
            <button 
              onClick={() => setActiveTab('donts')}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base flex-grow sm:flex-grow-0 ${activeTab === 'donts' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500'}`}
            >
              Do's & Don'ts
            </button>
          </div>
          
          <div className="p-4 sm:p-8">
            {activeTab === 'guidelines' && (
              <div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
                  <div className="bg-brand-charcoal p-6 sm:p-8 rounded-lg flex items-center justify-center w-full max-w-[16rem] aspect-square">
                    <img 
                      src="/lovable-uploads/0525dc31-baff-4438-b404-d48cbf2bf0dd.png" 
                      alt="UPG Engineering Logo" 
                      className="w-full max-w-[12rem]"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Logo Elements</h3>
                    <p className="text-gray-700 mb-4">
                      Our logo consists of two key elements:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Check className="text-brand-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <p><span className="font-bold">Circular Motifs:</span> Representing our holistic approach to engineering challenges and the interconnectedness of our services.</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-brand-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <p><span className="font-bold">Light Blue Accent:</span> Symbolizing innovation, clarity, and our forward-thinking mindset.</p>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      The logo combines precision engineering aesthetics with modern design principles, reflecting our position as industry leaders who combine technical expertise with innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'variations' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Logo Variations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <div className="bg-brand-charcoal p-6 sm:p-8 rounded-lg flex items-center justify-center h-40 sm:h-48 mb-3">
                      <img 
                        src="/lovable-uploads/0525dc31-baff-4438-b404-d48cbf2bf0dd.png" 
                        alt="UPG Engineering Logo - Primary" 
                        className="h-12 sm:h-16"
                      />
                    </div>
                    <h4 className="font-bold mt-2 text-base sm:text-lg">Primary - Dark Background</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Use on dark backgrounds and for primary applications</p>
                  </div>
                  
                  <div>
                    <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-lg flex items-center justify-center h-40 sm:h-48 mb-3">
                      <img 
                        src="/lovable-uploads/9a8c22e0-8901-4c46-a008-4c07d70e2318.png" 
                        alt="UPG Engineering Logo - Light Background" 
                        className="h-12 sm:h-16"
                      />
                    </div>
                    <h4 className="font-bold mt-2 text-base sm:text-lg">Primary - Light Background</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Use on light or white backgrounds</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'clearspace' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Clear Space & Minimum Size</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Clear Space</h4>
                    <div className="border border-gray-300 border-dashed p-8 rounded-lg">
                      <div className="relative">
                        <img 
                          src="/lovable-uploads/9a8c22e0-8901-4c46-a008-4c07d70e2318.png" 
                          alt="UPG Engineering Logo - Clear Space" 
                          className="mx-auto w-40"
                        />
                        <div className="absolute inset-0 border-2 border-brand-blue border-dashed m-8"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-3">
                      Always maintain a minimum clear space equal to the height of the logo's 
                      "U" character around all sides of the logo.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3">Minimum Size</h4>
                    <div className="flex items-end gap-8">
                      <div className="text-center">
                        <img 
                          src="/lovable-uploads/9a8c22e0-8901-4c46-a008-4c07d70e2318.png" 
                          alt="UPG Engineering Logo - Minimum Size Digital" 
                          className="w-24 mx-auto"
                        />
                        <p className="text-sm text-gray-600 mt-2">Digital: 100px wide</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/lovable-uploads/9a8c22e0-8901-4c46-a008-4c07d70e2318.png" 
                          alt="UPG Engineering Logo - Minimum Size Print" 
                          className="w-16 mx-auto"
                        />
                        <p className="text-sm text-gray-600 mt-2">Print: 1 inch wide</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-6">
                      To ensure legibility, never use the logo at sizes smaller than the minimums specified above.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'donts' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Logo Do's & Don'ts</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="border border-green-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-4 flex items-center justify-center h-36">
                      <img 
                        src="/lovable-uploads/9a8c22e0-8901-4c46-a008-4c07d70e2318.png" 
                        alt="UPG Engineering Logo - Correct Usage" 
                        className="h-16"
                      />
                    </div>
                    <div className="p-3 bg-green-50 flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0" size={18} />
                      <p className="text-sm text-gray-700">Use the logo as provided without modifications</p>
                    </div>
                  </div>
                  
                  <div className="border border-red-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-4 flex items-center justify-center h-36">
                      <img 
                        src="/lovable-uploads/9a8c22e0-8901-4c46-a008-4c07d70e2318.png" 
                        alt="UPG Engineering Logo - Incorrect Usage" 
                        className="h-16 transform rotate-45"
                      />
                    </div>
                    <div className="p-3 bg-red-50 flex items-start">
                      <X className="text-red-600 mr-2 flex-shrink-0" size={18} />
                      <p className="text-sm text-gray-700">Don't rotate or tilt the logo</p>
                    </div>
                  </div>
                  
                  <div className="border border-green-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-4 flex items-center justify-center h-36">
                      <div className="flex flex-col items-center">
                        <img 
                          src="/lovable-uploads/9a8c22e0-8901-4c46-a008-4c07d70e2318.png" 
                          alt="UPG Engineering Logo - Correct Usage" 
                          className="h-16 mb-2"
                          style={{ filter: 'hue-rotate(240deg)' }}
                        />
                        <p className="text-xs text-gray-500">Urban Planning Dept.</p>
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0" size={18} />
                      <p className="text-sm text-gray-700">Approved departmental color variations are allowed</p>
                    </div>
                  </div>
                  
                  <div className="border border-green-200 rounded-lg overflow-hidden">
                    <div className="bg-brand-charcoal p-4 flex items-center justify-center h-36">
                      <img 
                        src="/lovable-uploads/0525dc31-baff-4438-b404-d48cbf2bf0dd.png" 
                        alt="UPG Engineering Logo - Correct Usage" 
                        className="h-16"
                      />
                    </div>
                    <div className="p-3 bg-green-50 flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0" size={18} />
                      <p className="text-sm text-gray-700">Use the logo on approved background colors</p>
                    </div>
                  </div>
                  
                  <div className="border border-red-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-4 flex items-center justify-center h-36">
                      <img 
                        src="/lovable-uploads/9a8c22e0-8901-4c46-a008-4c07d70e2318.png" 
                        alt="UPG Engineering Logo - Incorrect Usage" 
                        className="h-16 opacity-30"
                      />
                    </div>
                    <div className="p-3 bg-red-50 flex items-start">
                      <X className="text-red-600 mr-2 flex-shrink-0" size={18} />
                      <p className="text-sm text-gray-700">Don't make the logo semi-transparent</p>
                    </div>
                  </div>
                  
                  <div className="border border-red-200 rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 flex items-center justify-center h-36">
                      <img 
                        src="/lovable-uploads/0525dc31-baff-4438-b404-d48cbf2bf0dd.png" 
                        alt="UPG Engineering Logo - Incorrect Usage" 
                        className="h-16"
                      />
                    </div>
                    <div className="p-3 bg-red-50 flex items-start">
                      <X className="text-red-600 mr-2 flex-shrink-0" size={18} />
                      <p className="text-sm text-gray-700">Don't place the logo on busy or distracting backgrounds</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
