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
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
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
            <AboutImage>
              <img 
                src="https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/59c1fd70-2a9d-4993-d3a2-0ed212ba1600/public" 
                alt="HashFoundry team collaborating on cutting-edge blockchain solutions in a modern tech workspace" 
                width="600" 
                height="400"
              />
            </AboutImage>
            
            <AboutContent theme={theme}>
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
          </AboutGrid>
        </div>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default AboutSection;
