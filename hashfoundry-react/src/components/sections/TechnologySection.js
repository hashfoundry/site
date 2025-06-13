import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';
import SectionDivider from '../ui/SectionDivider';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme === 'light' ? 'var(--light-technology-bg)' : 'var(--dark-technology-bg)'};
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

const TechnologyShowcase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1000px;
  margin: 0 auto;
  gap: 2rem;
`;


const TechDetails = styled.div``;

const TechTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
  }
`;

const TechTab = styled.button`
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  color: ${props => props.active 
    ? 'var(--primary-color)' 
    : props.theme === 'light' 
      ? 'var(--light-text-secondary)' 
      : 'var(--dark-text-secondary)'
  };
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  
  &:hover {
    color: var(--primary-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
`;

const TechContent = styled.div``;

const TechPanel = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const TechPanelTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const TechPanelDescription = styled.p`
  color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  margin-bottom: 1.5rem;
`;

const TechFeatures = styled.ul`
  list-style: none;
`;

const TechFeatureItem = styled.li`
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  
  &::before {
    content: '✓';
    color: var(--primary-color);
    position: absolute;
    left: 0;
  }
`;

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState('blockchain');
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();

  const tabs = [
    {
      id: 'blockchain',
      label: translate('Blockchain', 'Блокчейн'),
      title: translate('Next-Gen Blockchain Infrastructure', 'Блокчейн-инфраструктура нового поколения'),
      description: translate(
        'Our proprietary consensus algorithms deliver up to 15,000 transactions per second without compromising security or decentralization. HashFoundry supports all major blockchain protocols including Ethereum, Solana, Polkadot, and custom Layer 2 solutions.',
        'Наши запатентованные алгоритмы консенсуса обеспечивают до 15 000 транзакций в секунду без ущерба для безопасности или децентрализации. HashFoundry поддерживает все основные блокчейн-протоколы, включая Ethereum, Solana, Polkadot и пользовательские решения Layer 2.'
      ),
      features: [
        translate('Multi-chain support across 12+ networks', 'Поддержка нескольких сетей (12+)'),
        translate('Custom sidechain development', 'Разработка пользовательских сайдчейнов'),
        translate('Enterprise-grade validator infrastructure', 'Инфраструктура валидаторов корпоративного уровня'),
        translate('Interoperability protocols for cross-chain transactions', 'Протоколы совместимости для кросс-чейн транзакций')
      ]
    },
    {
      id: 'ai',
      label: translate('AI Integration', 'Интеграция ИИ'),
      title: translate('AI-Enhanced Blockchain Solutions', 'Блокчейн-решения с ИИ'),
      description: translate(
        'Our AI systems continuously analyze blockchain data to optimize performance, detect anomalies, and predict network behavior.',
        'Наши системы ИИ непрерывно анализируют данные блокчейна для оптимизации производительности, обнаружения аномалий и прогнозирования поведения сети.'
      ),
      features: [
        translate('AI based anomaly detection', 'Обнаружение аномалий на основе ИИ'),
        translate('Automated smart contract auditing', 'Автоматизированный аудит смарт-контрактов'),
        translate('AI-driven gas optimization', 'Оптимизация газа на основе ИИ')
      ]
    },
    // {
    //   id: 'security',
    //   label: translate('Security', 'Безопасность'),
    //   title: translate('Military-Grade Security', 'Безопасность военного уровня'),
    //   description: translate(
    //     'Security is in our DNA. HashFoundry implements multi-layered security protocols including zero-knowledge proofs, homomorphic encryption, and quantum-resistant algorithms to protect your blockchain infrastructure against current and future threats.',
    //     'Безопасность в нашей ДНК. HashFoundry реализует многоуровневые протоколы безопасности, включая доказательства с нулевым разглашением, гомоморфное шифрование и квантово-устойчивые алгоритмы для защиты вашей блокчейн-инфраструктуры от текущих и будущих угроз.'
    //   ),
    //   features: [
    //     translate('Real-time threat monitoring and prevention', 'Мониторинг и предотвращение угроз в реальном времени'),
    //     translate('Post-quantum cryptographic solutions', 'Постквантовые криптографические решения'),
    //     translate('Secure multi-party computation', 'Безопасные многосторонние вычисления'),
    //     translate('Hardware security module integration', 'Интеграция с аппаратными модулями безопасности')
    //   ]
    // },
    {
      id: 'scalability',
      label: translate('Scalability', 'Масштабируемость'),
      title: translate('Infinite Scalability Architecture', 'Архитектура бесконечной масштабируемости'),
      description: translate(
        'Our dynamic sharding technology and adaptive consensus mechanisms allow HashFoundry infrastructure to scale horizontally without performance degradation. Your applications grow seamlessly from prototype to global deployment with no downtime.',
        'Наша технология динамического шардинга и адаптивные механизмы консенсуса позволяют инфраструктуре HashFoundry масштабироваться горизонтально без потери производительности. Ваши приложения беспрепятственно растут от прототипа до глобального развертывания без простоев.'
      ),
      features: [
        translate('Elastic computing resources', 'Эластичные вычислительные ресурсы'),
        translate('Dynamic state sharding', 'Динамический шардинг состояния'),
        translate('Load-balanced validator networks', 'Сбалансированные сети валидаторов'),
        translate('Zero-downtime infrastructure upgrades', 'Обновления инфраструктуры без простоев')
      ]
    }
  ];

  return (
    <>
      <SectionContainer id="technology" theme={theme}>
        <div className="container">
          <SectionHeader>
            <SectionTitle>
              {translate('Our Technology', 'Наши технологии')}
            </SectionTitle>
            <SectionSubtitle theme={theme}>
              {translate('Powered by innovation and built for the future', 'Работает на инновациях и создано для будущего')}
            </SectionSubtitle>
          </SectionHeader>
          
          <TechnologyShowcase>
            <TechDetails>
              <TechTabs>
                {tabs.map(tab => (
                  <TechTab 
                    key={tab.id}
                    active={activeTab === tab.id}
                    theme={theme}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </TechTab>
                ))}
              </TechTabs>
              
              <TechContent>
                {tabs.map(tab => (
                  <TechPanel key={tab.id} active={activeTab === tab.id}>
                    <TechPanelTitle>{tab.title}</TechPanelTitle>
                    <TechPanelDescription theme={theme}>{tab.description}</TechPanelDescription>
                    <TechFeatures>
                      {tab.features.map((feature, index) => (
                        <TechFeatureItem key={index} theme={theme}>{feature}</TechFeatureItem>
                      ))}
                    </TechFeatures>
                  </TechPanel>
                ))}
              </TechContent>
            </TechDetails>
          </TechnologyShowcase>
        </div>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default TechnologySection;
