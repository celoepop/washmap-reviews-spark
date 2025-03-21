
import React from 'react';
import { Button } from './ui/button';
import { translations } from '../contexts/LanguageContext';

interface LanguageToggleProps {
  language: 'ru' | 'ua';
  toggleLanguage: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, toggleLanguage }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="ml-4 text-sm font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-800"
    >
      {translations.language[language]}
    </Button>
  );
};

export default LanguageToggle;
