import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { capabilityGroups } from '../data/capabilities';

const navItems = [
  { label: 'Firm', to: '/firm' },
  { label: 'Advisory', to: '/advisory' },
  { label: 'Insights', to: '/insights' },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCapabilitiesMenuOpen, setIsCapabilitiesMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 1024;
  });
  const timeoutRef = useRef(null);

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    const update = () => {
      const isHome = location.pathname === '/';
      const hero = document.querySelector('[data-hero]');

      if (!isHome || !hero) {
        setPastHero(true);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      // Use a smaller threshold for mobile to trigger the white header sooner
      const threshold = isDesktop ? 88 : 44;
      setPastHero(heroBottom <= threshold);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [location.pathname, isDesktop]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsCapabilitiesMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen && !isDropdownOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        setIsCapabilitiesMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, isDropdownOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 120);
  };

  // Header is fixed on desktop always, and on mobile only when past hero (sticky white bar)
  const headerIsFixed = isDesktop || pastHero;

  // For mobile, we use the scroll-dependent filter just like desktop
  const logoFilter = !pastHero
    ? [
        'brightness(1.12)',
        'contrast(1.18)',
        'drop-shadow(0 0 2px rgba(255,255,255,0.95))',
        'drop-shadow(0 0 6px rgba(255,255,255,0.65))',
        'drop-shadow(0 2px 8px rgba(0,0,0,0.45))',
      ].join(' ')
    : 'drop-shadow(0 1px 3px rgba(15, 23, 42, 0.1))';

  const navLinkClass = pastHero
    ? 'text-primary hover:bg-primary/5'
    : 'text-white hover:bg-white/10';

  const renderDesktopCapabilityLinks = (textToneClass) =>
    capabilityGroups.map((group) => (
      <div
        key={group.title}
        className="rounded-[22px] border border-primary/8 bg-gradient-to-br from-white to-neutral/60 p-4"
      >
        <div className="mb-4">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">
            {group.title}
          </p>
          <p className="mt-2 max-w-xs font-sans text-xs leading-relaxed text-accent/60">
            {group.description}
          </p>
        </div>

        <div className="space-y-2">
          {group.items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group block rounded-2xl border border-primary/8 bg-white px-4 py-3 transition-all duration-300 hover:border-secondary/25 hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5"
              onClick={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className={`font-sans text-sm font-semibold transition-colors duration-300 group-hover:text-secondary ${textToneClass}`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-1 font-sans text-[11px] leading-relaxed text-accent/55">
                    {item.subtext}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-primary/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-secondary"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    ));

  return (
    <header
      className={`pointer-events-none inset-x-0 top-0 z-50 transition-[padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        headerIsFixed ? 'fixed' : 'absolute'
      } ${
        pastHero
          ? 'px-0 pt-0'
          : 'px-3 pt-2 sm:px-4 sm:pt-2.5 lg:px-6'
      }`}
    >
      <nav
        aria-label="Top"
        className={`pointer-events-auto mx-auto overflow-visible border transition-[max-width,border-radius,background-color,border-color,box-shadow,backdrop-filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          pastHero
            ? 'max-w-none rounded-none border-x-0 border-t-0 border-b border-primary/10 bg-white/95 shadow-md shadow-primary/5 backdrop-blur-xl'
            : 'max-w-7xl rounded-2xl border-white/25 bg-white/[0.12] shadow-lg shadow-black/20 backdrop-blur-2xl'
        }`}
      >
        <div
          className={`flex items-center justify-between gap-3 transition-[padding,gap] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            pastHero
              ? 'mx-auto max-w-7xl px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4 lg:px-8'
              : 'px-3 py-1.5 sm:gap-4 sm:px-4 sm:py-2 lg:px-5'
          }`}
        >
          <Link
            to="/"
            className="group flex flex-shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src="/scoreline logo.png"
              alt="Scoreline Insurance Brokers Ltd"
              className={`w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                pastHero ? 'h-10 sm:h-12' : 'h-8 sm:h-10'
              }`}
              style={{ filter: logoFilter }}
            />
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`relative group rounded-full px-4 py-1.5 text-sm font-semibold font-sans transition-all duration-300 ${navLinkClass}`}
              >
                <span className="relative inline-block transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                  {item.label}
                </span>
                <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              onFocus={openDropdown}
              onBlur={closeDropdown}
            >
              <button
                type="button"
                aria-expanded={isDropdownOpen}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold font-sans transition-all duration-300 ${navLinkClass}`}
              >
                <span className="relative inline-block transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                  Reinsurance
                </span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-3/4" />
              </button>

              <div
                className={`absolute left-1/2 top-full mt-4 w-[40rem] max-w-[calc(100vw-3rem)] -translate-x-1/2 transition-all duration-300 ${
                  isDropdownOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible translate-y-2 opacity-0'
                }`}
              >
                <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/95 p-2 shadow-[0_34px_90px_-32px_rgba(15,23,42,0.5)] ring-1 ring-primary/5 backdrop-blur-2xl">
                  <div className="grid gap-2 lg:grid-cols-2">
                    {renderDesktopCapabilityLinks('text-primary')}
                  </div>
                </div>
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`relative group rounded-full px-4 py-1.5 text-sm font-semibold font-sans transition-all duration-300 ${navLinkClass}`}
              >
                <span className="relative inline-block transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                  {item.label}
                </span>
                <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </div>

          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className={`hidden rounded-full font-semibold normal-case tracking-normal shadow-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 sm:inline-block ${
                pastHero
                  ? 'bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm text-white shadow-primary/20 hover:from-secondary hover:to-primary hover:shadow-secondary/30 sm:px-6'
                  : 'bg-gradient-to-r from-white to-white/90 px-4 py-2 text-sm text-primary shadow-white/20 hover:from-primary hover:to-secondary hover:text-white hover:shadow-secondary/30 sm:px-5'
              }`}
            >
              Client Portal
            </Link>

            <button
              type="button"
              className="rounded-xl bg-neutral p-2.5 text-primary transition-colors duration-300 hover:bg-secondary hover:text-white lg:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="pointer-events-auto px-3 pb-1 pt-2 lg:hidden">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_26px_70px_-32px_rgba(15,23,42,0.45)]">
              <div className="max-h-[min(68vh,30rem)] overflow-y-auto p-3 scrollbar-hide">
                <div className="flex flex-col gap-2">
              {navItems.slice(0, 1).map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold font-sans text-primary transition-all duration-300 hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative inline-block transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                    {item.label}
                  </span>
                </Link>
              ))}

              <div
                className="overflow-hidden rounded-2xl border border-primary/10 bg-neutral/40"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold font-sans text-primary transition-all duration-300 hover:bg-primary/5"
                  aria-expanded={isCapabilitiesMenuOpen}
                  onClick={() => setIsCapabilitiesMenuOpen((current) => !current)}
                >
                  <span>Reinsurance</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isCapabilitiesMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isCapabilitiesMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 px-3 pb-3">
                      {capabilityGroups.map((group) => (
                        <div
                          key={group.title}
                          className="rounded-2xl border border-primary/10 bg-white px-3 py-3"
                        >
                          <p className="font-display text-[9px] font-semibold uppercase tracking-[0.26em] text-secondary">
                            {group.title}
                          </p>
                          <div className="mt-2.5 space-y-1.5">
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                to={item.href}
                                className="block rounded-xl bg-neutral px-3 py-2 text-[13px] font-medium text-primary transition-all duration-300 hover:bg-primary/5 hover:text-secondary"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.mobileLabel || item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navItems.slice(1).map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold font-sans text-primary transition-all duration-300 hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative inline-block transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                    {item.label}
                  </span>
                </Link>
              ))}

              <Link
                to="/contact"
                className="mt-2 block w-full rounded-full bg-gradient-to-r from-primary to-secondary py-3 text-center text-sm font-semibold text-white shadow-md hover:from-secondary hover:to-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Portal
              </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
