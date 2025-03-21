
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'ru' | 'ua'>('ru');

  useEffect(() => {
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the section-animate class
    document.querySelectorAll('.section-animate').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Cleanup
      document.querySelectorAll('.section-animate').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'ua' : 'ru');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overflow-hidden"
      >
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Hero language={language} />
        <Services language={language} />
        <Reviews language={language} />
        <Map language={language} />
        <Footer language={language} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
