
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Close menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (isOpen && mobileMenu && mobileMenuButton) {
        if (!mobileMenu.contains(event.target as Node) && 
            !mobileMenuButton.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        if (isOpen) {
          setIsOpen(false);
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobile, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: 'top', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'logo', label: 'Logo' }
  ];

  return (
    <nav className="bg-brand-charcoal text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/449540a8-92c1-4182-bc6e-8b0ea07cf847.png" 
            alt="UPG Engineering Logo" 
            className="h-8 sm:h-10 md:h-12 mr-3 cursor-pointer"
            onClick={() => scrollToSection('top')}
          />
          <span 
            className="font-bold text-lg md:text-xl hidden sm:inline-block cursor-pointer hover:text-brand-blue transition-colors"
            onClick={() => scrollToSection('top')}
          >UPG Engineering</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map(item => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-brand-blue transition-colors bg-transparent border-0 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            id="mobile-menu-button"
            onClick={toggleMenu} 
            className="text-white focus:outline-none p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-brand-charcoal py-4 px-4 absolute w-full shadow-lg border-t border-gray-800 animate-fade-in"
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-left hover:text-brand-blue transition-colors bg-transparent border-0 cursor-pointer py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
