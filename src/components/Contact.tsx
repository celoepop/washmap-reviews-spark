
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Simulate success after submission
    setFormStatus('success');
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' });
      setFormStatus('idle');
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-animate py-24 md:py-32 px-6 md:px-12 relative bg-gray-50"
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
            <Phone size={16} className="mr-2" />
            <span>Связаться с нами</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Есть вопросы? Напишите нам
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время
          </motion.p>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-xl p-8 md:p-10"
          >
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-6">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Сообщение отправлено!</h3>
                <p className="text-gray-600 text-center">
                  Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-uno-400 focus:border-transparent outline-none transition-all"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-uno-400 focus:border-transparent outline-none transition-all"
                    placeholder="+380 (___) ___-__-__"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-uno-400 focus:border-transparent outline-none transition-all"
                    placeholder="Напишите ваш вопрос или пожелание"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-uno-600 hover:bg-uno-700 text-white py-4 px-6 rounded-lg font-medium transition-all flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Отправить сообщение
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
