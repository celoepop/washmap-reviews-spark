
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const Map = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLIFrameElement>(null);

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
      id="map"
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
            <MapPin size={16} className="mr-2" />
            <span>Как нас найти</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Наше расположение
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Мы находимся в удобном месте с отличной транспортной доступностью
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 glass p-8 rounded-xl h-fit"
          >
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-start mb-3">
                  <MapPin size={24} className="text-uno-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-gray-700">вул. Гната Юри, 20, Киев, парковка Сильпо</p>
                    <a 
                      href="https://maps.app.goo.gl/TcNTq6kpBk4NiPVn8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-uno-600 hover:text-uno-700 font-medium mt-2 inline-block"
                    >
                      Открыть в Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <Clock size={24} className="text-uno-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Часы работы</h3>
                    <p className="text-gray-700">Ежедневно: 09:00 - 19:00</p>
                    <p className="text-gray-700">Без выходных</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <Phone size={24} className="text-uno-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Контакты</h3>
                    <p className="text-gray-700">+380 93 318 5444</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 relative overflow-hidden rounded-xl shadow-soft"
          >
            <iframe 
              ref={mapRef}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d534.2907288957294!2d30.382662411801796!3d50.43124009906472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbb44dede51f%3A0x84b792231c1c6215!2z0JDQstGC0L7QvNC-0LnQutCwIFVOTw!5e0!3m2!1sru!2sua!4v1742581880347!5m2!1sru!2sua" 
              className="w-full h-[400px] md:h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UNO Автомойка на карте"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
