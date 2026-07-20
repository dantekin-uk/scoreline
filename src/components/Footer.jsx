import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    capabilities: [
      { name: 'Treaty Reinsurance', href: '/capabilities/treaty' },
      { name: 'Facultative Reinsurance', href: '/capabilities/facultative' },
      { name: 'Claims Consultancy', href: '/capabilities/claims' },
      { name: 'Risk Advisory', href: '/advisory' },
    ],
    company: [
      { name: 'Firm', href: '/firm' },
      { name: 'Advisory', href: '/advisory' },
      { name: 'Insights', href: '/insights' },
      { name: 'Contact', href: '/contact' },
    ],
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#1E3A8A] to-[#0a1628] text-white pt-10 pb-6 overflow-hidden relative font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-8 gap-y-10 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-5">
            <div className="flex flex-col">
              <img src="/scoreline logo.png" alt="Scoreline Logo" className="h-12 w-auto max-w-[200px] object-contain brightness-0 invert" />
            </div>
            <div className="space-y-4">
              <p className="text-white/60 text-[13px] leading-relaxed max-w-sm">
               Scoreline Reinsurance Brokers Limited is a specialized advisory and risk transfer firm, dedicated to safeguarding the long-term stability of insurance markets across Africa and beyond.
              </p> 
            </div>
            <div className="flex gap-3 pt-2">
              {/* Social Icons */}
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </span>
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </span>
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </span>
            </div>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-display text-[11px] uppercase tracking-[0.2em]">Capabilities</h4>
            <ul className="space-y-2.5">
              {footerLinks.capabilities.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-display text-[11px] uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 font-display text-[11px] uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-secondary text-[13px] transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold mb-5 font-display text-[11px] uppercase tracking-[0.2em]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="text-[13px] text-white/60 leading-snug">
                  <p className="font-bold text-white mb-0.5">Nairobi Office</p>
                  <p>6th Floor, Prudential Building,</p>
                  <p>Wabera Street</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div className="text-[13px] text-white/60">
                  <p className="font-bold text-white mb-0.5">Direct Line</p>
                  <a href="tel:+254724473073" className="hover:text-secondary transition-colors font-medium">+254 724 473 073</a>
                </div>
              </li>
              <li className="flex min-w-0 items-start gap-3">
                <div className="bg-secondary/10 p-1.5 rounded-lg text-secondary flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0 text-[13px] text-white/60">
                  <p className="font-bold text-white mb-0.5">Email Address</p>
                  <a href="mailto:info@scorelinereinsurance.com" className="break-all hover:text-secondary transition-colors">info@scorelinereinsurance.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div />
          <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest text-center">
            © {currentYear} Scoreline Reinsurance Brokers Limited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
