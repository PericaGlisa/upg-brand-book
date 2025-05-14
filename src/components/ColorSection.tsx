
import React from 'react';
import { Check, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ColorSection = () => {
  const { toast } = useToast();
  
  const colors = [
    { name: 'Charcoal', hex: '#222222', class: 'bg-brand-charcoal', textClass: 'text-white' },
    { name: 'Blue', hex: '#7BD5F5', class: 'bg-brand-blue', textClass: 'text-brand-charcoal' },
    { name: 'Light Gray', hex: '#F3F3F3', class: 'bg-brand-lightgray', textClass: 'text-brand-charcoal' },
    { name: 'Dark Gray', hex: '#333333', class: 'bg-brand-darkgray', textClass: 'text-white' },
    { name: 'Medium Gray', hex: '#999999', class: 'bg-brand-mediumgray', textClass: 'text-white' },
    { name: 'White', hex: '#FFFFFF', class: 'bg-white', textClass: 'text-brand-charcoal' },
  ];
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied to your clipboard.`,
      duration: 3000,
    });
  };
  
  return (
    <section id="colors" className="py-20 bg-brand-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Color Palette</h2>
        
        <p className="text-gray-700 leading-relaxed mb-10 max-w-4xl">
          Our color palette reflects the precision and professionalism of our engineering services. The primary 
          colors of charcoal and blue represent our technical expertise and innovation, while our supporting colors 
          provide flexibility and contrast in our communications.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {colors.map((color, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer`}
              onClick={() => copyToClipboard(color.hex)}
            >
              <div className={`h-32 ${color.class} ${color.name === 'White' ? 'border-dashed border-gray-200' : ''}`}></div>
              <div className={`p-4 ${color.class} ${color.textClass} flex justify-between items-center ${color.name === 'White' ? 'border-t border-gray-200' : ''}`}>
                <div>
                  <h3 className="font-bold">{color.name}</h3>
                  <p>{color.hex}</p>
                </div>
                <Copy size={18} className="opacity-70" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Color Usage Guidelines</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <Check className="text-brand-blue mr-2 mt-1 flex-shrink-0" size={20} />
              <p><span className="font-bold">Primary Colors:</span> Use Charcoal for main text and backgrounds, Blue for accents and call-to-actions.</p>
            </li>
            <li className="flex items-start">
              <Check className="text-brand-blue mr-2 mt-1 flex-shrink-0" size={20} />
              <p><span className="font-bold">Light Gray:</span> Use for backgrounds, dividers, and to create contrast in layouts.</p>
            </li>
            <li className="flex items-start">
              <Check className="text-brand-blue mr-2 mt-1 flex-shrink-0" size={20} />
              <p><span className="font-bold">Contrast:</span> Ensure sufficient contrast between text and background colors to maintain accessibility.</p>
            </li>
            <li className="flex items-start">
              <Check className="text-brand-blue mr-2 mt-1 flex-shrink-0" size={20} />
              <p><span className="font-bold">Color Proportions:</span> Use approximately 60% neutral colors (Charcoal, Grays), 30% primary color (Blue), and 10% for accent highlights.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ColorSection;
