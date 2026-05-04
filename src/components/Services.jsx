import React from 'react';
import { Shield, Car, Home, ArrowRight } from 'lucide-react';
import healthImage from '../assets/life2.jpg';

const Services = () => {
  const products = [
    {
      title: 'Health Insurance',
      description: 'Comprehensive medical cover for individuals, families and corporate groups with access to top-tier facilities.',
      icon: <Shield className="text-secondary" size={24} />,
      image: healthImage,
      tag: 'Healthcare'
    },
    {
      title: 'Motor Insurance',
      description: 'Comprehensive and third party motor insurance for private and commercial vehicles.',
      icon: <Car className="text-secondary" size={24} />,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
      tag: 'Vehicle'
    },
    {
      title: 'Property Insurance',
      description: 'Fire, burglary, and domestic package insurance to protect your property and assets.',
      icon: <Home className="text-secondary" size={24} />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      tag: 'Assets'
    }
  ];

  return (
    <section className="relative py-24 bg-neutral overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-secondary mb-3 font-poppins">
            Recommended Products
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-primary font-poppins">
            Comprehensive Protection <br />
            <span className="text-accent/60">For Every Aspect Of Life</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative flex flex-col h-[380px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral/50 cursor-pointer"
            >
              {/* Image Section - Top 40% */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em] bg-primary/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {product.tag}
                  </span>
                </div>
              </div>
              
              {/* Content Section - Bottom 60% */}
              <div className="flex-1 p-6 flex flex-col justify-between bg-white relative z-10">
                <div>
                  <div className="mb-4 inline-flex text-secondary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {product.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary mb-2 font-poppins group-hover:text-secondary transition-colors">
                    {product.title}
                  </h4>
                  
                  <p className="text-sm text-accent/60 leading-relaxed font-sans line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] group-hover:text-secondary transition-colors">
                  <span>Explore Solution</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Premium Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/30 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-sm shadow-xl shadow-primary/20 transition-all uppercase tracking-widest font-poppins">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
