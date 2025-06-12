import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

const Divider = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${props => props.theme === 'light' ? 'var(--light-divider)' : 'var(--dark-divider)'};
  margin: 0;
  padding: 0;
`;

const SectionDivider = () => {
  const { theme } = useContext(ThemeContext);
  
  return <Divider theme={theme} />;
};

export default SectionDivider;
