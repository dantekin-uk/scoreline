import React from 'react';
import { motion } from 'framer-motion';
import aar from '../assets/partners/aar.png';
import britam from '../assets/partners/britam.png';
import madison from '../assets/partners/madison.jpg';
import mua from '../assets/partners/mua.png';
import oldmutual from '../assets/partners/old-mutual-logo.png';

const Partners = () => {
  const partners = [
    { name: 'AAR Insurance', logo: aar },
    { name: 'Britam', logo: britam },
    { name: 'Madison', logo: madison },
    { name: 'MUA', logo: mua },
    { name: 'Old Mutual', logo: oldmutual },
  ];

  // Duplicate the array to create a seamless infinite loop
  const allPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="relative pt-0 pb-12 bg-neutral/20 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50"></div>
        
        {/* Enhanced Modern Patterns */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `
              linear-gradient(45deg, #041a65 0.5px, transparent 0.5px), 
              linear-gradient(-45deg, #041a65 0.5px, transparent 0.5px)
            `, 
            backgroundSize: '40px 40px' 
          }}
        ></div>
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(#041a65 1px, transparent 1px), linear-gradient(90deg, #041a65 1px, transparent 1px)', 
            backgroundSize: '100px 100px' 
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-primary/40 font-poppins">
            Our Trusted Partners
          </h2>
        </motion.div>

        {/* Scrolling logos container */}
        <div className="relative flex overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Continuous CSS Animation Loop */}
          <div className="flex animate-infinite-scroll space-x-16 sm:space-x-24 items-center py-4">
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
