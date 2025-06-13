import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme === 'light' ? 'var(--light-divider)' : 'var(--dark-divider)'};
  margin: 0;
  padding: 0;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 15px;
    pointer-events: none;
  }
  
  &::before {
    top: -15px;
    background: linear-gradient(
      to top,
      ${props => props.theme === 'light' ? 'var(--light-divider)' : 'var(--dark-divider)'} 0%,
      transparent 100%
    );
  }
  
  &::after {
    bottom: -15px;
    background: linear-gradient(
      to bottom,
      ${props => props.theme === 'light' ? 'var(--light-divider)' : 'var(--dark-divider)'} 0%,
      transparent 100%
    );
  }
`;

const SectionDivider = () => {
  const { theme } = useContext(ThemeContext);
  
  return <Divider theme={theme} />;
};

export default SectionDivider;
