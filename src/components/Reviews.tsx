
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

// Define the review type
interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
}

// Sample reviews data
const reviewsData: Review[] = [
  {
    name: "Алексей М.",
    date: "10.05.2023",
    rating: 5,
    text: "Отличная автомойка! Результат превзошел мои ожидания, машина как новая. Вежливый персонал и приятная атмосфера. Однозначно буду приезжать снова.",
  },
  {
    name: "Елена С.",
    date: "03.06.2023",
    rating: 5,
    text: "Регулярно пользуюсь услугами этой автомойки. Всегда качественно и по разумной цене. Особенно нравится химчистка салона, делают на совесть!",
  },
  {
    name: "Дмитрий К.",
    date: "18.07.2023",
    rating: 5,
    text: "Наконец-то нашел достойную автомойку рядом с домом. Профессиональный подход к работе, внимание к деталям. Рекомендую всем!",
  },
  {
    name: "Марина В.",
    date: "22.08.2023",
    rating: 5,
    text: "Воспользовалась услугой детейлинга. Машина выглядит просто потрясающе! Спасибо команде UNO за такой результат.",
  },
  {
    name: "Игорь П.",
    date: "15.09.2023",
    rating: 5,
    text: "Быстро, качественно и с душой. Видно, что люди любят свою работу. Приятно иметь дело с профессионалами!",
  },
  {
    name: "Ольга Н.",
    date: "07.10.2023",
    rating: 5,
    text: "Удобное расположение, отличный сервис. Порадовала система скидок для постоянных клиентов. Машина сияет чистотой после каждого посещения.",
  },
];

const Reviews = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const reviewsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  const nextReviews = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + reviewsPerPage >= reviewsData.length ? 0 : prevIndex + reviewsPerPage
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - reviewsPerPage < 0 ? Math.max(0, reviewsData.length - reviewsPerPage) : prevIndex - reviewsPerPage
    );
  };

  const visibleReviews = reviewsData.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="section-animate py-24 md:py-32 px-6 md:px-12 relative bg-gray-50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center bg-uno-50 text-uno-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <MessageSquare size={16} className="mr-2" />
            <span>Отзывы клиентов</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Что говорят наши клиенты
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Наша репутация говорит сама за себя. Узнайте, почему клиенты выбирают UNO.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-8 rounded-xl"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-4">
              <button
                onClick={prevReviews}
                className="p-2 rounded-full bg-white shadow-soft hover:bg-gray-50 transition-colors"
                aria-label="Previous reviews"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>
              <button
                onClick={nextReviews}
                className="p-2 rounded-full bg-white shadow-soft hover:bg-gray-50 transition-colors"
                aria-label="Next reviews"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
