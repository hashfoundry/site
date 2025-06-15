import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #6C63FF;
    --primary-light: #9D97FF;
    --primary-dark: #4A43D9;
    --secondary-color: #00E0C7;
    --secondary-light: #5FFFF0;
    --secondary-dark: #00B09E;
    --accent-color: #FF5C87;
    
    /* Light theme */
    --light-bg: #F8F9FC;
    --light-bg-secondary: #FFFFFF;
    --light-text: #1A1A2E;
    --light-text-secondary: #4A4A68;
    --light-border: #E2E8F0;
    --light-card-bg: #DEECF8;
    --light-hover: #F0F2F5;
    
    /* Light theme section backgrounds */
    --light-header-bg: #FFFFFF;
    --light-hero-bg: #E6F0FF;
    --light-about-bg: #EAF4FA;
    --light-solutions-bg: #E2EFF7;
    --light-technology-bg: #DAE9F4;
    --light-contact-bg: #D2E4F1;
    --light-footer-bg: #F5F5F7;
    --light-divider: #FFFFFF;
    
    /* Dark theme */
    --dark-bg: #000d29;
    --dark-bg-secondary: #1A1F2E;
    --dark-text: #F0F2F5;
    --dark-text-secondary: #B4B9C6;
    --dark-border: #2D3748;
    --dark-card-bg: #132042;
    --dark-hover: #2D3748;
    
    /* Dark theme section backgrounds */
    --dark-header-bg: #000519;
    --dark-hero-bg: #0E1B34;
    --dark-about-bg: #001636;
    --dark-solutions-bg: #001b3d;
    --dark-technology-bg: #002040;
    --dark-contact-bg: #002141;
    --dark-footer-bg: #000510;
    --dark-divider: #000519;
    
    /* Common */
    --success: #48BB78;
    --warning: #F6AD55;
    --error: #F56565;
    --info: #4299E1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
  }

  body.light-theme {
    background-color: var(--light-bg);
    color: var(--light-text);
    
    /* Set current theme variables */
    --bg-color: var(--light-bg);
    --bg-secondary: var(--light-bg-secondary);
    --text-color: var(--light-text);
    --text-secondary: var(--light-text-secondary);
    --border-color: var(--light-border);
    --card-bg: var(--light-card-bg);
    --hover-color: var(--light-hover);
  }

  body.dark-theme {
    background-color: var(--dark-bg);
    color: var(--dark-text);
    
    /* Set current theme variables */
    --bg-color: var(--dark-bg);
    --bg-secondary: var(--dark-bg-secondary);
    --text-color: var(--dark-text);
    --text-secondary: var(--dark-text-secondary);
    --border-color: var(--dark-border);
    --card-bg: var(--dark-card-bg);
    --hover-color: var(--dark-hover);
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 2.5rem;
    position: relative;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  /* Add scroll margin to sections for better navigation */
  section[id] {
    scroll-margin-top: 5rem; /* Adjust this value based on your header height */
  }

  /* Responsive Design */
  @media (max-width: 992px) {
    h1 {
      font-size: 2.75rem;
    }
    
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.25rem;
    }
    
    h2 {
      font-size: 1.75rem;
    }
    
    .section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles;
