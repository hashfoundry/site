import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';
import SectionDivider from '../ui/SectionDivider';
import lightBg from '../../assets/images/HeroSectionLightBG.png';
import darkBg from '../../assets/images/HeroSectionDarkBG.png';

const HeroSectionWrapper = styled.section`
  padding: 2rem 0;
  background-color: ${props => props.theme === 'light' ? 'var(--light-hero-bg)' : 'var(--dark-hero-bg)'};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${props => props.theme === 'light' 
      ? `url(${lightBg})`
      : `url(${darkBg})`
    };
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    z-index: 0;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 60vh;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 1rem;
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

/*
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
*/

const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1.5fr 1fr;
    margin-top: 0;
  }
`;

const MetricItem = styled.div`
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 0.9rem;
  color: #a0a0b0;
`;

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();
  
  return (
    <>
      <HeroSectionWrapper theme={theme}>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>
              {translate('Production-Ready Web3 Infrastructure for Enterprise Scale', 'Production-Ready Web3 инфраструктура корпоративного уровня')}
            </HeroTitle>
            <HeroSubtitle>
              {translate('Building the critical foundation for decentralized applications with uncompromising security', 'Создаем критически важный фундамент для децентрализованных приложений с бескомпромиссной безопасностью')}
            </HeroSubtitle>
            <HeroButtons>
              <Button href="#solutions" className="primary" theme={theme}>
                {translate('Explore solutions', 'Изучить решения')}
              </Button>
              <Button href="#contact" className="secondary" theme={theme}>
                {translate('Contact Us', 'Связаться с нами')}
              </Button>
            </HeroButtons>
          </HeroContent>
          <HeroVisual>
            <MetricsContainer>
              <MetricItem>
                <MetricValue>99.99%</MetricValue>
                <MetricLabel>{translate('Uptime', 'Время работы')}</MetricLabel>
              </MetricItem>
              <MetricItem>
                <MetricValue>125</MetricValue>
                <MetricLabel>{translate('Active nodes count', 'Количество активных нод')}</MetricLabel>
              </MetricItem>
              <MetricItem>
                <MetricValue>15,000 TPS</MetricValue>
                <MetricLabel>{translate('Transactions per second', 'Транзакций в секунду')}</MetricLabel>
              </MetricItem>
              <MetricItem>
                <MetricValue>25 ms</MetricValue>
                <MetricLabel>{translate('Latency', 'Задержка')}</MetricLabel>
              </MetricItem>
            </MetricsContainer>
          </HeroVisual>
        </HeroContainer>
      </HeroSectionWrapper>
      <SectionDivider />
    </>
  );
};

export default HeroSection;
