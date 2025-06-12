import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faBrain, faCodeBranch, faShieldAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';
import SectionDivider from '../ui/SectionDivider';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme === 'light' ? 'var(--light-solutions-bg)' : 'var(--dark-solutions-bg)'};
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

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const SolutionCard = styled.div`
  background: ${props => props.theme === 'light' ? 'var(--light-card-bg)' : 'var(--dark-card-bg)'};
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const SolutionIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const SolutionTitle = styled.h3`
  margin-bottom: 1rem;
`;

const SolutionDescription = styled.p`
  color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  margin-bottom: 1.5rem;
`;

const ButtonLink = styled.a`
  color: var(--primary-color);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--primary-light);
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const SolutionsSection = () => {
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();

  const solutions = [
    {
      icon: faServer,
      title: translate('HashNode Infrastructure', 'Инфраструктура HashNode'),
      description: translate(
        'High-performance node infrastructure with 99.99% uptime and industry-leading security protocols. Support for all major blockchain networks with dedicated APIs and robust SDK integration.',
        'Высокопроизводительная инфраструктура нод с 99,99% времени безотказной работы и передовыми протоколами безопасности. Поддержка всех основных блокчейн-сетей с выделенными API и надежной интеграцией SDK.'
      )
    },
    {
      icon: faBrain,
      title: translate('AI-Powered Analytics', 'Аналитика с ИИ'),
      description: translate(
        'Advanced blockchain analytics powered by our proprietary AI models. Real-time insights, anomaly detection, and predictive intelligence for optimizing your Web3 operations and security posture.',
        'Продвинутая блокчейн-аналитика на основе наших проприетарных моделей ИИ. Аналитика в реальном времени, обнаружение аномалий и предиктивный интеллект для оптимизации ваших операций Web3 и обеспечения безопасности.'
      )
    },
    {
      icon: faCodeBranch,
      title: translate('DApp Development Suite', 'Набор для разработки DApp'),
      description: translate(
        'Comprehensive toolkit for building scalable decentralized applications. Smart contract templates, testing environments, and deployment pipelines that reduce time-to-market by up to 60%.',
        'Комплексный набор инструментов для создания масштабируемых децентрализованных приложений. Шаблоны смарт-контрактов, среды тестирования и конвейеры развертывания, сокращающие время выхода на рынок до 60%.'
      )
    },
    {
      icon: faShieldAlt,
      title: translate('Security Solutions', 'Решения безопасности'),
      description: translate(
        'Enterprise-grade security for your blockchain infrastructure. Smart contract auditing, real-time threat monitoring, and automated incident response to protect your assets and user data.',
        'Безопасность корпоративного уровня для вашей блокчейн-инфраструктуры. Аудит смарт-контрактов, мониторинг угроз в реальном времени и автоматизированное реагирование на инциденты для защиты ваших активов и данных пользователей.'
      )
    }
  ];

  return (
    <>
      <SectionContainer id="solutions" theme={theme}>
        <div className="container">
          <SectionHeader>
            <SectionTitle>
              {translate('Our Solutions', 'Наши решения')}
            </SectionTitle>
            <SectionSubtitle theme={theme}>
              {translate('Cutting-edge infrastructure for the decentralized ecosystem', 'Передовая инфраструктура для децентрализованной экосистемы')}
            </SectionSubtitle>
          </SectionHeader>
          
          <SolutionsGrid>
            {solutions.map((solution, index) => (
              <SolutionCard key={index} theme={theme}>
                <SolutionIcon>
                  <FontAwesomeIcon icon={solution.icon} />
                </SolutionIcon>
                <SolutionTitle>{solution.title}</SolutionTitle>
                <SolutionDescription theme={theme}>{solution.description}</SolutionDescription>
              </SolutionCard>
            ))}
          </SolutionsGrid>
        </div>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default SolutionsSection;
