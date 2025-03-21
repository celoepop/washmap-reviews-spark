
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-white">UNO</h2>
              <span className="ml-1 text-sm text-uno-300 font-light">автомойка</span>
            </div>
            <p className="text-gray-400 mb-6">
              Профессиональный уход за вашим автомобилем. Качество, которое видно.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#map" className="text-gray-400 hover:text-white transition-colors">Карта</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Комплексная мойка</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Детейлинг</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Защитное покрытие</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Химчистка салона</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Экспресс-мойка</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-uno-400 mr-3 mt-1" />
                <span className="text-gray-400">вул. Гната Юри, 20, Киев, парковка Сильпо</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-uno-400 mr-3 mt-1" />
                <span className="text-gray-400">+380 93 318 5444</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-uno-400 mr-3 mt-1" />
                <span className="text-gray-400">Ежедневно: 09:00 - 19:00</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {year} UNO Автомойка. Все права защищены.
            </p>
            <div className="mt-4 sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm mr-4">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
