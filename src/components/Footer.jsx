import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Medical Insurance', href: '#' },
      { name: 'Motor Insurance', href: '#' },
      { name: 'Property Insurance', href: '#' },
      { name: 'Corporate Risk', href: '#' },
      { name: 'Personal Cover', href: '#' },
    ],
    services: [
      { name: 'Insurance Audit', href: '#' },
      { name: 'Risk Management', href: '#' },
      { name: 'Claims Management', href: '#' },
      { name: 'Renewal Reviews', href: '#' },
    ],
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '#' },
      { name: 'Our Products', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Get a Quote', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Regulatory Info', href: '#' },
    ]
  };

  return (
    <footer className="bg-primary text-white pt-10 pb-6 overflow-hidden relative font-sans">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-8 gap-y-10 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-5">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight font-poppins">SCORELINE</span>
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] -mt-1">
                Insurance Brokers Ltd
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-neutral/60 text-[13px] leading-relaxed max-w-sm">
               Scoreline Insurance Brokers Ltd is one of the leading insurance service providers in Kenya, offering comprehensive insurance solutions and risk management services 
              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-secondary">
                <ShieldCheck size={12} />
                <span>Licensed By IRA Kenya</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              {/* Social Icons */}
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 border border-white/10" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 border border-white/10" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 border border-white/10" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-poppins text-[11px] uppercase tracking-[0.2em]">Our Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-poppins text-[11px] uppercase tracking-[0.2em]">Our Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-poppins text-[11px] uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold mb-5 font-poppins text-[11px] uppercase tracking-[0.2em]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="text-[13px] text-neutral/60 leading-snug">
                  <p className="font-bold text-white mb-0.5">Nairobi Office</p>
                  <p>6th Floor, Prudential Building,</p>
                  <p>Wabera Street</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div className="text-[13px] text-neutral/60">
                  <p className="font-bold text-white mb-0.5">Direct Line</p>
                  <a href="tel:+254724473073" className="hover:text-secondary transition-colors font-medium">+254 724 473 073</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div className="text-[13px] text-neutral/60">
                  <p className="font-bold text-white mb-0.5">Email Address</p>
                  <a href="mailto:info@scorelineinsurance.co.ke" className="hover:text-secondary transition-colors break-all">info@scorelineinsurance.co.ke</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-neutral/50 hover:text-secondary text-[11px] uppercase tracking-widest transition-colors font-bold">
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-neutral/50 text-[11px] font-bold uppercase tracking-widest text-center">
            © {currentYear} Scoreline Insurance Brokers Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
