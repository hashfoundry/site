import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';

const SectionContainer = styled.section`
  padding: 5rem 0;
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

const EcosystemContent = styled.div``;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PartnerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: ${props => props.theme === 'light' ? 'var(--light-card-bg)' : 'var(--dark-card-bg)'};
  border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  img {
    max-width: 100%;
    height: auto;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  &:hover img {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const CaseStudies = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CaseStudyCard = styled.div`
  background: ${props => props.theme === 'light' ? 'var(--light-card-bg)' : 'var(--dark-card-bg)'};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  h4 {
    padding: 1.5rem 1.5rem 0.5rem;
  }
  
  p {
    padding: 0 1.5rem;
    color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  }
`;

const ButtonLink = styled.a`
  color: var(--primary-color);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  padding: 0 1.5rem 1.5rem;
  
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

const EcosystemSection = () => {
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();

  const partners = [
    { id: 1, imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/58c1fb92-0e74-4bff-6da7-b837ba263800/public', alt: 'Major blockchain enterprise partner logo with HashFoundry integration' },
    { id: 2, imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/6a8d3a45-c8a0-45dd-41d2-9a0b96fc3d00/public', alt: 'Financial technology partner collaborating with HashFoundry' },
    { id: 3, imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/8d18b57f-89bf-47af-557f-1d3a49a95000/public', alt: 'Web3 foundation partner working with HashFoundry' },
    { id: 4, imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/a22ebd92-6094-4d49-6252-289c4b740d00/public', alt: 'Cryptocurrency exchange integrated with HashFoundry infrastructure' },
    { id: 5, imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/ff3a7c9f-6411-4847-d974-3339b8656200/public', alt: 'DeFi protocol built on HashFoundry technology' },
    { id: 6, imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/156841c0-51dc-4834-f927-5b14ad340d00/public', alt: 'Enterprise blockchain solution provider partnered with HashFoundry' }
  ];

  const caseStudies = [
    {
      id: 1,
      imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/fe39422d-9f91-4294-6d71-91b500ea4d00/public',
      alt: 'Enterprise blockchain implementation for financial services company showing HashFoundry technology',
      title: translate('Global Payment Network', 'Глобальная платежная сеть'),
      description: translate(
        'Helped a leading financial institution reduce cross-border transaction settlement times from days to seconds while cutting costs by 62%.',
        'Помогли ведущему финансовому учреждению сократить время расчетов по трансграничным транзакциям с дней до секунд при снижении затрат на 62%.'
      )
    },
    {
      id: 2,
      imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/96d2b0da-bf40-4300-bcec-591cc590ad00/public',
      alt: 'Supply chain blockchain solution developed by HashFoundry showing real-time tracking interface',
      title: translate('Supply Chain Transformation', 'Трансформация цепочки поставок'),
      description: translate(
        'Built an end-to-end transparent supply chain solution for a Fortune 500 retailer, increasing inventory accuracy by 99.8% and reducing fraud by 92%.',
        'Создали полностью прозрачное решение для цепочки поставок для ритейлера из списка Fortune 500, повысив точность инвентаризации до 99,8% и сократив мошенничество на 92%.'
      )
    },
    {
      id: 3,
      imgSrc: 'https://imagedelivery.net/xMnwd1aoy-PQ8Klk2JdGdw/3a0e0a6c-695b-4a36-420d-77c68642b600/public',
      alt: 'DeFi platform built with HashFoundry technology showing user dashboard and analytics',
      title: translate('DeFi Platform Scaling', 'Масштабирование DeFi-платформы'),
      description: translate(
        'Enabled a popular DeFi protocol to scale to 2M+ daily users with 99.99% uptime, resulting in $4.2B in total value locked within 6 months of launch.',
        'Позволили популярному протоколу DeFi масштабироваться до 2 млн+ ежедневных пользователей с доступностью 99,99%, что привело к блокировке общей стоимости в размере 4,2 млрд долларов в течение 6 месяцев после запуска.'
      )
    }
  ];

  return (
    <SectionContainer id="ecosystem">
      <div className="container">
        <SectionHeader>
          <SectionTitle>
            {translate('Our Ecosystem', 'Наша экосистема')}
          </SectionTitle>
          <SectionSubtitle theme={theme}>
            {translate('A growing network of partners and integrations', 'Растущая сеть партнеров и интеграций')}
          </SectionSubtitle>
        </SectionHeader>
        
        <EcosystemContent>
          <PartnersGrid>
            {partners.map(partner => (
              <PartnerLogo key={partner.id} theme={theme}>
                <img src={partner.imgSrc} alt={partner.alt} width="180" height="144" />
              </PartnerLogo>
            ))}
          </PartnersGrid>
          
          <CaseStudies>
            <h3>{translate('Success Stories', 'Истории успеха')}</h3>
            <CaseStudiesGrid>
              {caseStudies.map(study => (
                <CaseStudyCard key={study.id} theme={theme}>
                  <img src={study.imgSrc} alt={study.alt} width="340" height="191" />
                  <h4>{study.title}</h4>
                  <p>{study.description}</p>
                  <ButtonLink href="#">
                    {translate('Read Case Study', 'Читать кейс')}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </ButtonLink>
                </CaseStudyCard>
              ))}
            </CaseStudiesGrid>
          </CaseStudies>
        </EcosystemContent>
      </div>
    </SectionContainer>
  );
};

export default EcosystemSection;
