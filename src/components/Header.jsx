import React, { useState, useRef } from 'react';
import { ChevronDown, Menu, X, ShieldCheck } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const products = [
    { name: 'Corporate Insurance', href: '#' },
    { name: 'Personal Insurance', href: '#' },
    { name: 'All Products', href: '#' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // Small delay to allow moving mouse to the menu
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-neutral">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 group">
              <img 
                src="/scoreline logo.png" 
                alt="Scoreline Insurance Brokers Ltd" 
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
            
          <div className="hidden lg:flex flex-1 justify-center space-x-8">
            <a href="#" className="text-base font-medium text-primary hover:text-secondary transition-colors relative group font-poppins">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="text-base font-medium text-primary hover:text-secondary transition-colors relative group font-poppins">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </a>

            {/* Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-base font-medium text-primary hover:text-secondary transition-colors relative group font-poppins"
              >
                Our Products
                <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 z-50">
                  {/* Hidden bridge to prevent closing when moving mouse */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-transparent" />
                  
                  <div className="bg-white border border-neutral/50 rounded-2xl shadow-2xl py-2 overflow-hidden transform origin-top animate-in fade-in slide-in-from-top-2 duration-200">
                    {products.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center justify-between px-4 py-3 text-sm text-primary hover:bg-primary hover:text-white transition-all duration-200 font-poppins"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown size="14" className="-rotate-90 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-base font-medium text-primary hover:text-secondary transition-colors relative group font-poppins">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex-shrink-0 ml-10 space-x-4 flex items-center">
            <a
              href="#"
              className="hidden sm:inline-block bg-primary py-3 px-8 rounded-full text-sm font-bold text-white hover:bg-secondary hover:text-primary transition-all shadow-lg shadow-primary/20 hover:shadow-secondary/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
            >
              Get a Quote
            </a>
            <div className="lg:hidden">
              <button
                type="button"
                className="bg-neutral p-2 rounded-lg text-primary hover:bg-secondary hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-neutral">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-base font-medium text-primary hover:text-secondary py-2">
                Home
              </a>
              <a href="#" className="text-base font-medium text-primary hover:text-secondary py-2">
                About
              </a>
              <div className="space-y-2">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Our Products
                </span>
                {products.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block pl-4 py-2 text-base text-primary hover:text-secondary border-l-2 border-neutral hover:border-secondary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a href="#" className="text-base font-medium text-primary hover:text-secondary py-2">
                Contact
              </a>
              <a
                href="#"
                className="block w-full text-center bg-primary py-3 px-6 border border-transparent rounded-full text-base font-semibold text-white shadow-md"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
