import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';

const FooterContainer = styled.footer`
  background: ${props => props.theme === 'light' ? 'var(--light-bg-secondary)' : 'var(--dark-bg-secondary)'};
  padding: 4rem 0 2rem;
  border-top: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterBrand = styled.div`
  .logo {
    font-size: 1.75rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
  
  p {
    color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
    margin-top: 1rem;
  }
`;

const LogoText = styled.span`
  color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
`;

const Highlight = styled.span`
  color: var(--primary-color);
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLinkGroup = styled.div`
  h4 {
    margin-bottom: 1.5rem;
    color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  }
  
  ul {
    list-style: none;
  }
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
`;

const Copyright = styled.p`
  color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  font-size: 0.9rem;
`;

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();

  return (
    <FooterContainer theme={theme}>
      <div className="container">
        <FooterGrid>
          <FooterBrand theme={theme}>
            <div className="logo">
              <LogoText theme={theme}>Hash<Highlight>Foundry</Highlight></LogoText>
            </div>
            <p>{translate('Building the critical infrastructure for the decentralized future.', 'Создаем критически важную инфраструктуру для децентрализованного будущего.')}</p>
          </FooterBrand>
          
          <FooterLinks>
            <FooterLinkGroup theme={theme}>
              <h4>{translate('Solutions', 'Решения')}</h4>
              <ul>
                <li><a href="#solutions">{translate('Node Infrastructure', 'Инфраструктура нод')}</a></li>
                <li><a href="#solutions">{translate('AI Analytics', 'ИИ-аналитика')}</a></li>
                <li><a href="#solutions">{translate('DApp Development', 'Разработка DApp')}</a></li>
                <li><a href="#solutions">{translate('Security Solutions', 'Решения безопасности')}</a></li>
              </ul>
            </FooterLinkGroup>
            
            <FooterLinkGroup theme={theme}>
              <h4>{translate('Company', 'Компания')}</h4>
              <ul>
                <li><a href="#about">{translate('About Us', 'О нас')}</a></li>
                <li><a href="#contact">{translate('Contact', 'Контакты')}</a></li>
              </ul>
            </FooterLinkGroup>
          </FooterLinks>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright theme={theme}>
            {translate('© 2025 HashFoundry Technologies, Inc. All rights reserved.', '© 2025 HashFoundry Technologies, Inc. Все права защищены.')}
          </Copyright>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
