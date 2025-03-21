
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Droplets } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section-animate min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0" />
      
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-uno-200 rounded-full filter blur-3xl opacity-20 animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-uno-100 rounded-full filter blur-3xl opacity-20 animate-float" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center bg-uno-100 text-uno-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Droplets size={16} className="mr-2" />
              <span>Премиум автомойка UNO</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl"
          >
            Идеальная чистота вашего автомобиля — наша <span className="text-uno-600">забота</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl"
          >
            Доверьте свой автомобиль профессионалам UNO. Мы используем только высококачественные материалы и современное оборудование для безупречного результата.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="bg-uno-600 hover:bg-uno-700 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-soft"
            >
              Наши услуги
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-lg font-medium transition-all shadow-soft"
            >
              Связаться с нами
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-gray-500 hover:text-uno-600 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
