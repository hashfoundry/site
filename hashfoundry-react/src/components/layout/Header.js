import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';
import useTranslation from '../../hooks/useTranslation';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme === 'light' ? 'var(--light-bg)' : 'var(--dark-bg)'};
  color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    color: var(--primary-color);
  }
`;

const LanguageSelectorContainer = styled.div`
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

const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
`;

const LogoText = styled.span`
  color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
`;

const Highlight = styled.span`
  color: var(--primary-color);
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: ${props => props.theme === 'light' ? 'var(--light-bg-secondary)' : 'var(--dark-bg-secondary)'};
    border-radius: 0 0 8px 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    z-index: 100;
    opacity: ${props => props.isOpen ? '1' : '0'};
    pointer-events: ${props => props.isOpen ? 'all' : 'none'};
    transform: translateY(${props => props.isOpen ? '0' : '-20px'});
    transition: all 0.3s ease;
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled.a`
  margin: 0 1.25rem;
  color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  font-weight: 500;
  position: relative;
  
  &:hover {
    color: var(--primary-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0.75rem 0;
    margin: 0;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  transition: all 0.3s ease;
  
  &:nth-child(1) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'};
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const translate = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer theme={theme}>
      <div className="container">
        <HeaderContent>
          <Nav>
            <a href="/" style={{ textDecoration: 'none' }}>
              <Logo>
                <LogoText theme={theme}>Hash<Highlight>Foundry</Highlight></LogoText>
              </Logo>
            </a>
            
            <NavMenu isOpen={isMenuOpen} theme={theme}>
              <NavItem>
                <NavLink href="#about" onClick={closeMenu} theme={theme}>
                  {translate('About', 'О нас')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#solutions" onClick={closeMenu} theme={theme}>
                  {translate('Solutions', 'Решения')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#technology" onClick={closeMenu} theme={theme}>
                  {translate('Technology', 'Технологии')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#ecosystem" onClick={closeMenu} theme={theme}>
                  {translate('Ecosystem', 'Экосистема')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" onClick={closeMenu} theme={theme}>
                  {translate('Contact', 'Контакты')}
                </NavLink>
              </NavItem>
            </NavMenu>
            
            <NavControls>
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
              
              <ThemeToggleButton onClick={toggleTheme} theme={theme}>
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
              </ThemeToggleButton>
              
              <MenuToggle onClick={toggleMenu} isOpen={isMenuOpen}>
                <Bar theme={theme} isOpen={isMenuOpen} />
                <Bar theme={theme} isOpen={isMenuOpen} />
                <Bar theme={theme} isOpen={isMenuOpen} />
              </MenuToggle>
            </NavControls>
          </Nav>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;
