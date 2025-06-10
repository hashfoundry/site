import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';

const HeroSectionWrapper = styled.section`
  padding: 5rem 0;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 85vh;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  margin-bottom: 2rem;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  &.primary {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(108, 99, 255, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
    border: 2px solid var(--primary-color);
    
    &:hover {
      background: rgba(108, 99, 255, 0.1);
      transform: translateY(-2px);
    }
  }
`;

const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

const DesktopPlaceholder = styled.div`
  position: absolute;
  padding: 0.4rem 0.8rem;
  background: rgba(0, 255, 255, 0.1);
  color: #0ff;
  border: 1px solid #0ff;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;

  display: none;
  @media (min-width: 993px) {
    display: block;
  }
`;

const MobilePlaceholder = styled.div`
  padding: 0.4rem 0.8rem;
  background: rgba(0, 255, 255, 0.1);
  color: #0ff;
  border: 1px solid #0ff;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;

  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;

const MobilePlaceholders = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1rem;
  }
`;

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();

  const placeholderTexts = [
    translate('Fast', 'Быстро'),
    translate('Secure', 'Надёжно'),
    translate('Decentralized', 'Децентрализовано'),
    translate('Scalable', 'Масштабируемо'),
  ];

  const positions = [
    { top: '40%', left: '50%' },
    { top: '40%', right: '20%' },
    { bottom: '20%', left: '50%' },
    { bottom: '20%', right: '20%' },
  ];
  
  return (
    <HeroSectionWrapper>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            {translate('Building the Future of Web3 Infrastructure', 'Создаем будущее инфраструктуры Web3')}
          </HeroTitle>
          <HeroSubtitle theme={theme}>
            {translate('Pioneering the intersection of blockchain, AI, and decentralized applications.', 'Передовые технологии на стыке блокчейна, ИИ и децентрализованных приложений.')}
          </HeroSubtitle>
          <HeroButtons>
            <Button href="#solutions" className="primary">
              {translate('Explore Solutions', 'Изучить решения')}
            </Button>
            <Button href="#contact" className="secondary" theme={theme}>
              {translate('Connect With Us', 'Связаться с нами')}
            </Button>
          </HeroButtons>
          <MobilePlaceholders>
            {placeholderTexts.map((text, idx) => (
              <MobilePlaceholder key={idx}>{text}</MobilePlaceholder>
            ))}
          </MobilePlaceholders>
        </HeroContent>
        <HeroVisual>
          <img src="https://fast.image.delivery/vuhdjrx.png" alt="Hero illustration" />
          {placeholderTexts.map((text, idx) => (
            <DesktopPlaceholder key={idx} style={positions[idx]}>
              {text}
            </DesktopPlaceholder>
          ))}
        </HeroVisual>
      </HeroContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
