import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../../context/LanguageContext';

const LanguageSelectorContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 80px;
  z-index: 100;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.theme === 'light' ? 'var(--light-bg-secondary)' : 'var(--dark-bg-secondary)'};
  border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => 
    props.active 
      ? 'white' 
      : props.theme === 'light' 
        ? 'var(--light-text-secondary)' 
        : 'var(--dark-text-secondary)'
  };
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover:not(.active) {
    color: var(--primary-color);
  }
`;

const LanguageSelector = ({ theme }) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <LanguageSelectorContainer theme={theme}>
      <LanguageButton 
        onClick={() => changeLanguage('en')} 
        active={language === 'en'} 
        theme={theme}
      >
        EN
      </LanguageButton>
      <LanguageButton 
        onClick={() => changeLanguage('ru')} 
        active={language === 'ru'} 
        theme={theme}
      >
        RU
      </LanguageButton>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
