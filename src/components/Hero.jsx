import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import healthImage from '../assets/life2.jpg';

const Hero = () => {
  const carouselItems = [
    {
      title: 'Comprehensive',
      highlight: 'Motor Insurance',
      description: 'Protect your vehicles with our comprehensive motor insurance plans. Coverage for accidents, theft, and third-party liabilities.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1920',
    },
    {
      title: 'Secure',
      highlight: 'Life Insurance Plans',
      description: "Ensure your family's financial security with our life insurance policies. Investment and protection combined for long-term security.",
      image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1920',
    },
    {
      title: 'Comprehensive',
      highlight: 'Health Insurance',
      description: 'Complete health coverage for individuals and families. Access to premium healthcare facilities nationwide with cashless treatments.',
      image: healthImage,
    },
    {
      title: 'Personal Injury',
      highlight: 'Protection',
      description: 'Financial protection against accidents and injuries. Comprehensive coverage for medical expenses, rehabilitation, and lost income.',
      image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=1920',
    },
    {
      title: 'Agricultural Insurance',
      highlight: 'Solutions',
      description: 'Protect your farming investments against natural disasters, crop failure, and livestock losses. Tailored solutions for farmers.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    carouselItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === carouselItems.length) {
          setImagesLoaded(true);
        }
      };
      // Also handle error so we don't wait forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === carouselItems.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [carouselItems]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Auto rotate every 5 seconds
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentItem = carouselItems[currentSlide];

  return (
    <section className="relative bg-neutral-900 rounded-b-[2rem] sm:rounded-b-[3rem] shadow-2xl overflow-hidden py-16 lg:py-24 mx-2 sm:mx-4 mt-2">
      {/* Background Image with Transition */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${currentItem.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full">
        <div className="flex flex-col h-full min-h-[350px]">
          {/* Spacer to push content down */}
          <div className="flex-grow"></div>

          {/* Content positioned at bottom-left */}
          <motion.div 
            className="max-w-2xl mb-8 sm:mb-12 mt-30 sm:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.2] mb-3 sm:mb-4 font-poppins"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {currentItem.title} <br />
              <motion.span 
                className="text-secondary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {currentItem.highlight}
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xs sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed font-sans max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {currentItem.description}
            </motion.p>

            <motion.div 
              className="flex flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button 
                className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-sm sm:text-sm shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group font-poppins w-fit"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(4, 21, 69, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} className="sm:size-18" />
                </motion.div>
              </motion.button>
              <motion.button 
                className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-sm sm:text-sm transition-all flex items-center justify-center font-poppins w-fit border border-white/30"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.35)' }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Carousel Controls - Spread to ends */}
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Left Arrow */}
            <motion.button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all backdrop-blur border border-white/30"
              aria-label="Previous slide"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dot Indicators - Center */}
            <div className="flex gap-2">
              {carouselItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentSlide
                      ? 'bg-secondary w-8 h-2'
                      : 'bg-white/40 w-2 h-2 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: index === currentSlide ? 32 : 8,
                    backgroundColor: index === currentSlide ? '#00D2FF' : 'rgba(255, 255, 255, 0.4)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all backdrop-blur border border-white/30"
              aria-label="Next slide"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
