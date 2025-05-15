import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const translate = (enText, ruText) => {
    if (language === 'ru' && ruText) {
      return ruText;
    }
    return enText;
  };

  return translate;
};

export default useTranslation;
