
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'ua';

type Translations = {
  [key: string]: {
    ru: string;
    ua: string;
  };
};

export const translations: Translations = {
  // General
  findUs: {
    ru: 'Как нас найти',
    ua: 'Як нас знайти',
  },
  ourLocation: {
    ru: 'Наше расположение',
    ua: 'Наше розташування',
  },
  locationDescription: {
    ru: 'Мы находимся в удобном месте с отличной транспортной доступностью',
    ua: 'Ми знаходимося у зручному місці з відмінною транспортною доступністю',
  },
  
  // Map
  address: {
    ru: 'Адрес',
    ua: 'Адреса',
  },
  addressText: {
    ru: 'вул. Гната Юри, 20, Киев, паркинг ТЦ Квадрат',
    ua: 'вул. Гната Юри, 20, Київ, паркінг ТЦ Квадрат',
  },
  openInGoogleMaps: {
    ru: 'Открыть в Google Maps',
    ua: 'Відкрити в Google Maps',
  },
  workingHours: {
    ru: 'Часы работы',
    ua: 'Години роботи',
  },
  dailyHours: {
    ru: 'Ежедневно: 09:00 - 19:00',
    ua: 'Щоденно: 09:00 - 19:00',
  },
  noWeekends: {
    ru: 'Без выходных',
    ua: 'Без вихідних',
  },
  contacts: {
    ru: 'Контакты',
    ua: 'Контакти',
  },
  
  // Footer
  tagline: {
    ru: 'Профессиональный уход за вашим автомобилем. Качество, которое видно.',
    ua: 'Професійний догляд за вашим автомобілем. Якість, яку видно.',
  },
  navigation: {
    ru: 'Навигация',
    ua: 'Навігація',
  },
  main: {
    ru: 'Главная',
    ua: 'Головна',
  },
  services: {
    ru: 'Услуги',
    ua: 'Послуги',
  },
  reviews: {
    ru: 'Отзывы',
    ua: 'Відгуки',
  },
  map: {
    ru: 'Карта',
    ua: 'Карта',
  },
  carWash: {
    ru: 'Комплексная мойка',
    ua: 'Комплексна мийка',
  },
  detailing: {
    ru: 'Детейлинг',
    ua: 'Детейлінг',
  },
  protectiveCoating: {
    ru: 'Защитное покрытие',
    ua: 'Захисне покриття',
  },
  interiorCleaning: {
    ru: 'Химчистка салона',
    ua: 'Хімчистка салону',
  },
  expressWash: {
    ru: 'Экспресс-мойка',
    ua: 'Експрес-мийка',
  },
  allRightsReserved: {
    ru: 'Все права защищены',
    ua: 'Всі права захищені',
  },
  privacyPolicy: {
    ru: 'Политика конфиденциальности',
    ua: 'Політика конфіденційності',
  },
  termsOfService: {
    ru: 'Пользовательское соглашение',
    ua: 'Угода користувача',
  },
  language: {
    ru: 'UA',
    ua: 'RU',
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
