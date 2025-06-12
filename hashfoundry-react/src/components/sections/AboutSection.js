import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';
import SectionDivider from '../ui/SectionDivider';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme === 'light' ? 'var(--light-about-bg)' : 'var(--dark-about-bg)'};
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const SectionSubtitle = styled.p`
  color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  font-size: 1.25rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: flex-start;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
    
  @media (max-width: 992px) {
    display: none;
  }
`;

const AboutContent = styled.div`
  h3 {
    color: var(--primary-color);
    margin-top: 2rem;
    margin-bottom: 1rem;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  p {
    color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  }
  
  &.main-content {
    padding-right: 2rem;
  }
  
  &.secondary-content {
    border-left: 2px solid var(--primary-color);
    padding-left: 2rem;
  }
  
  @media (max-width: 992px) {
    &.main-content {
      padding-right: 0;
    }
    
    &.secondary-content {
      border-left: none;
      border-top: 2px solid var(--primary-color);
      padding-left: 0;
      padding-top: 2rem;
      margin-top: 2rem;
    }
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: block;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  font-size: 0.9rem;
`;

const AboutSection = () => {
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();

  return (
    <>
      <SectionContainer id="about" theme={theme}>
        <div className="container">
          <SectionHeader>
            <SectionTitle>
              {translate('About HashFoundry', 'О HashFoundry')}
            </SectionTitle>
            <SectionSubtitle theme={theme}>
              {translate('Pioneering the future of decentralized technologies', 'Создаем будущее децентрализованных технологий')}
            </SectionSubtitle>
          </SectionHeader>
          
          <AboutGrid>
            <AboutContent className="main-content" theme={theme}>
              <h3>{translate('Our Vision', 'Наше видение')}</h3>
              <p>
                {translate(
                  'At HashFoundry, we\'re building the critical infrastructure for the decentralized future. Our team of blockchain veterans, AI researchers, and distributed systems engineers is creating the foundation for a more open, secure, and efficient digital world.',
                  'В HashFoundry мы создаем критически важную инфраструктуру для децентрализованного будущего. Наша команда ветеранов блокчейна, исследователей ИИ и инженеров распределенных систем создает фундамент для более открытого, безопасного и эффективного цифрового мира.'
                )}
              </p>
              
              <h3>{translate('Our Mission', 'Наша миссия')}</h3>
              <p>
                {translate(
                  'We\'re on a mission to accelerate Web3 adoption by providing enterprise-grade infrastructure and tools that bridge the gap between traditional systems and decentralized technologies. Our AI-enhanced solutions make blockchain more accessible, scalable, and user-friendly for developers and enterprises alike.',
                  'Наша миссия — ускорить внедрение Web3, предоставляя инфраструктуру и инструменты корпоративного уровня, которые устраняют разрыв между традиционными системами и децентрализованными технологиями. Наши решения, улучшенные с помощью ИИ, делают блокчейн более доступным, масштабируемым и удобным для разработчиков и предприятий.'
                )}
              </p>
            </AboutContent>
            
            <AboutContent className="secondary-content" theme={theme}>
              <h3>{translate('Our Approach', 'Наш подход')}</h3>
              <p>
                {translate(
                  'We combine cutting-edge blockchain technology with artificial intelligence to create solutions that are not just powerful, but also intuitive and adaptable to the evolving needs of the Web3 ecosystem.',
                  'Мы объединяем передовые технологии блокчейна с искусственным интеллектом для создания решений, которые не только мощные, но и интуитивно понятные и адаптируемые к меняющимся потребностям экосистемы Web3.'
                )}
              </p>
            </AboutContent>
          </AboutGrid>
        </div>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default AboutSection;
