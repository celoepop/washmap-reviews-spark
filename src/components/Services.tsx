
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Car, Droplets, Sparkles, Shield, Timer, Medal } from 'lucide-react';

const ServicesData = [
  {
    icon: <Car className="text-uno-600" size={28} />,
    title: 'Комплексная мойка',
    description: 'Полная очистка кузова, колес, дисков и стекол от любых загрязнений.',
  },
  {
    icon: <Sparkles className="text-uno-600" size={28} />,
    title: 'Детейлинг',
    description: 'Тщательная очистка и полировка всех деталей автомобиля до идеального состояния.',
  },
  {
    icon: <Shield className="text-uno-600" size={28} />,
    title: 'Защитное покрытие',
    description: 'Нанесение защитных составов для долговременной защиты лакокрасочного покрытия.',
  },
  {
    icon: <Droplets className="text-uno-600" size={28} />,
    title: 'Химчистка салона',
    description: 'Глубокая очистка всех поверхностей салона от пятен и загрязнений.',
  },
  {
    icon: <Timer className="text-uno-600" size={28} />,
    title: 'Экспресс-мойка',
    description: 'Быстрая и качественная мойка автомобиля за 15-20 минут.',
  },
  {
    icon: <Medal className="text-uno-600" size={28} />,
    title: 'Премиум-обслуживание',
    description: 'Персональный подход и особое внимание к деталям для самых требовательных клиентов.',
  },
];

const Services = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-animate py-24 md:py-32 px-6 md:px-12 relative bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center bg-uno-50 text-uno-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Droplets size={16} className="mr-2" />
            <span>Наши услуги</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Весь спектр услуг для вашего автомобиля
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Мы предлагаем полный комплекс услуг по уходу за вашим автомобилем — от быстрой мойки до премиум-детейлинга.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ServicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-glass transition-all duration-300 border border-gray-100"
            >
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-uno-50 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
