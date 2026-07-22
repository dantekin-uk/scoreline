import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import cap1Image from '../assets/cap1.jpg';
import cap2Image from '../assets/cap2.jpeg';
import cap6Image from '../assets/cap6.jpeg';
import pill4Image from '../assets/pill4.jpeg';
import pill5Image from '../assets/pill5.jpeg';

const capabilities = {
  treaty: {
    id: 'treaty',
    title: 'Treaty Reinsurance',
    description: 'Optimized programs to protect your balance sheet and capital.',
    buttonText: 'Explore Treaty',
    href: '/capabilities/treaty#treaty',
    image: cap6Image,
  },
  facultative: {
    id: 'facultative',
    title: 'Facultative Reinsurance',
    description: 'Targeted capacity for complex and high-value individual risks.',
    buttonText: 'Explore Facultative',
    href: '/capabilities/facultative#facultative',
    image: cap2Image,
  },
  advisory: {
    id: 'advisory',
    title: 'Risk Advisory',
    description: 'Data-driven analytics to anticipate and mitigate emerging risks.',
    buttonText: 'Explore Advisory',
    href: '/advisory',
    image: cap1Image,
  },
  claims: {
    id: 'claims',
    title: 'Claims Consultancy',
    description: 'Expert advocacy for equitable recoveries on complex losses.',
    buttonText: 'Explore Claims',
    href: '/capabilities/claims#claims',
    image: pill4Image,
  },
};

const CapabilityCard = ({ item, className = '', delay = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`group relative isolate flex overflow-hidden rounded-xl sm:rounded-2xl ${className}`}
  >
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
      style={{ backgroundImage: `url(${item.image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <div className="relative z-10 mt-auto flex w-full flex-col justify-end px-4 pb-2 sm:px-5 sm:pb-3 lg:px-6 lg:pb-4 bg-gradient-to-t from-black/40 via-transparent to-transparent pt-8">
      <h3
        className="mb-0 font-display text-base font-bold normal-case tracking-tight text-[#F4F6F8] transition-colors duration-300 group-hover:text-secondary sm:text-lg"
        style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
      >
        {item.title}
      </h3>

      <p className="mb-2 max-w-md font-sans text-[11px] leading-relaxed text-white/70 sm:text-xs">
        {item.description}
      </p>

      <div className="h-0 overflow-hidden transition-all duration-500 ease-out group-hover:h-7 group-hover:mb-1">
        <Link
          to={item.href}
          className="inline-flex w-fit translate-y-4 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 backdrop-blur-sm transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:border-secondary/50 hover:bg-secondary/20 hover:text-secondary"
        >
          {item.buttonText}
          <ArrowUpRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>
  </motion.article>
);

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-neutral py-12 sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-6 max-w-3xl sm:mb-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
            <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
            Core Capabilities
          </p>
          <h2
            className="font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl"
            style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
          >
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Providing innovative, technically sound reinsurance solutions tailored to your unique
              business objectives and risk profile.
            </span>
          </h2>
          <p className="mt-3 max-w-xl font-sans text-xs leading-relaxed text-accent/65 sm:text-[13px]">
            From treaty structures to facultative placements, we deliver capacity and insight that
            protect your portfolio and fuel sustainable growth.
          </p>
        </motion.div>

        {/* Bento — wider Risk Advisory left; tighter cards on the right */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-4">
          {/* Left: wider tall Risk Advisory */}
          <div className="col-span-2 row-span-2 lg:col-span-5 lg:row-span-2">
            <CapabilityCard
              item={capabilities.advisory}
              className="h-full min-h-[200px] sm:min-h-[250px] lg:min-h-full"
              delay={0}
            />
          </div>

          {/* Top-right: narrower Treaty */}
          <div className="col-span-2 lg:col-span-7">
            <CapabilityCard
              item={capabilities.treaty}
              className="min-h-[160px] sm:min-h-[200px] lg:min-h-[210px]"
              delay={0.08}
            />
          </div>

          {/* Bottom-right: two compact cards */}
          <div className="col-span-1 lg:col-span-3">
            <CapabilityCard
              item={capabilities.facultative}
              className="min-h-[160px] sm:min-h-[190px] lg:min-h-[200px]"
              delay={0.16}
            />
          </div>

          <div className="col-span-1 lg:col-span-4">
            <CapabilityCard
              item={capabilities.claims}
              className="min-h-[160px] sm:min-h-[190px] lg:min-h-[200px]"
              delay={0.22}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
