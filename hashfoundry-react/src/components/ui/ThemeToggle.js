import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
`;

const ToggleButton = styled.button`
  background: ${props => props.theme === 'light' ? 'var(--light-bg-secondary)' : 'var(--dark-bg-secondary)'};
  border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
  color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme === 'light' ? 'var(--light-hover)' : 'var(--dark-hover)'};
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeToggleContainer>
      <ToggleButton onClick={toggleTheme} theme={theme}>
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </ToggleButton>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;
