
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { translations } from '../contexts/LanguageContext';

interface FooterProps {
  language: 'ru' | 'ua';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const year = new Date().getFullYear();
  
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

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
              {t('tagline')}
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
            <h3 className="text-lg font-semibold mb-6">{t('navigation')}</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">{t('main')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('services')}</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">{t('reviews')}</a></li>
              <li><a href="#map" className="text-gray-400 hover:text-white transition-colors">{t('map')}</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('carWash')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('detailing')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('protectiveCoating')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('interiorCleaning')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('expressWash')}</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6">{t('contacts')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-uno-400 mr-3 mt-1" />
                <span className="text-gray-400">{t('addressText')}</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-uno-400 mr-3 mt-1" />
                <span className="text-gray-400">+380 93 318 5444</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-uno-400 mr-3 mt-1" />
                <span className="text-gray-400">{t('dailyHours')}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {year} UNO Автомойка. {t('allRightsReserved')}
            </p>
            <div className="mt-4 sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm mr-4">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                {t('termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
