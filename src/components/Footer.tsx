
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/449540a8-92c1-4182-bc6e-8b0ea07cf847.png" 
              alt="UPG Engineering Logo" 
              className="h-12 mb-4 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <p className="text-gray-400 mt-4">
              Simple, innovative solutions for all your engineering inspirations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Brand Book Sections</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-brand-blue transition-colors bg-transparent border-0 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('colors')} 
                  className="text-gray-400 hover:text-brand-blue transition-colors bg-transparent border-0 cursor-pointer"
                >
                  Color Palette
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('typography')} 
                  className="text-gray-400 hover:text-brand-blue transition-colors bg-transparent border-0 cursor-pointer"
                >
                  Typography
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('logo')} 
                  className="text-gray-400 hover:text-brand-blue transition-colors bg-transparent border-0 cursor-pointer"
                >
                  Logo Usage
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>UPG Engineering</p>
              <p>Emirates Hospitality Center Building, Al Muroor، Road, Al Nahyan Camp Area</p>
              <p>Abu Dhabi, PO Box 46915</p>
              <p>United Arab Emirates</p>
              <p className="mt-2">
                <a href="mailto:abudhabioffice@upgeng.com" className="hover:text-brand-blue transition-colors">
                  abudhabioffice@upgeng.com
                </a>
              </p>
              <p>
                <a href="tel:+97126431328" className="hover:text-brand-blue transition-colors">
                  +971 (0)2 643 13 28
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-gray-400 mt-4 md:mt-0">© {currentYear} Urban Planing Guide Engineering L.L.C. All rights reserved.</p>
          <div>
            <ul className="flex space-x-6">
              <li>
                <Dialog>
                  <DialogTrigger className="text-gray-400 hover:text-brand-blue transition-colors">Privacy Policy</DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl mb-4">Privacy Policy</DialogTitle>
                    </DialogHeader>
                    <div className="text-sm space-y-4">
                      <p>Last updated: May 14, 2025</p>
                      
                      <h3 className="text-lg font-semibold">1. Introduction</h3>
                      <p>Urban Planing Guide Engineering L.L.C. ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                      
                      <h3 className="text-lg font-semibold">2. The Data We Collect About You</h3>
                      <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped as follows:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Identity Data includes first name, last name, username or similar identifier.</li>
                        <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                        <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
                        <li>Usage Data includes information about how you use our website, products and services.</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold">3. How We Use Your Personal Data</h3>
                      <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold">4. Data Security</h3>
                      <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
                      
                      <h3 className="text-lg font-semibold">5. Your Legal Rights</h3>
                      <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
                      
                      <h3 className="text-lg font-semibold">6. Contact</h3>
                      <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: abudhabioffice@upgeng.com</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger className="text-gray-400 hover:text-brand-blue transition-colors">Terms of Use</DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl mb-4">Terms of Use</DialogTitle>
                    </DialogHeader>
                    <div className="text-sm space-y-4">
                      <p>Last updated: May 14, 2025</p>
                      
                      <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
                      <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the these terms of use, please do not use this website.</p>
                      
                      <h3 className="text-lg font-semibold">2. Use License</h3>
                      <p>Permission is granted to temporarily download one copy of the materials on Urban Planing Guide Engineering L.L.C.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Modify or copy the materials;</li>
                        <li>Use the materials for any commercial purpose;</li>
                        <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                        <li>Remove any copyright or other proprietary notations from the materials;</li>
                        <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold">3. Disclaimer</h3>
                      <p>The materials on Urban Planing Guide Engineering L.L.C.'s website are provided on an 'as is' basis. Urban Planing Guide Engineering L.L.C. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                      
                      <h3 className="text-lg font-semibold">4. Limitations</h3>
                      <p>In no event shall Urban Planing Guide Engineering L.L.C. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Urban Planing Guide Engineering L.L.C.'s website, even if Urban Planing Guide Engineering L.L.C. or a authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                      
                      <h3 className="text-lg font-semibold">5. Governing Law</h3>
                      <p>These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
