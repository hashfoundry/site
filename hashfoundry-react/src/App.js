import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import GlobalStyles from './assets/css/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SolutionsSection from './components/sections/SolutionsSection';
import TechnologySection from './components/sections/TechnologySection';
import ContactSection from './components/sections/ContactSection';

const MainContent = styled.main`
  padding-top: 80px; /* Add padding to account for fixed header */
`;

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GlobalStyles />
        <Header />
        <MainContent>
          <HeroSection />
          <AboutSection />
          <SolutionsSection />
          <TechnologySection />
          <ContactSection />
        </MainContent>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
