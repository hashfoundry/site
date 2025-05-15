import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';

const HeroSectionWrapper = styled.section`
  padding: 5rem 0;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 85vh;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
  margin-bottom: 2rem;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  &.primary {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(108, 99, 255, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
    border: 2px solid var(--primary-color);
    
    &:hover {
      background: rgba(108, 99, 255, 0.1);
      transform: translateY(-2px);
    }
  }
`;

const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BlockchainVisualization = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();
  const canvasRef = useRef(null);
  const visualizationRef = useRef(null);

  useEffect(() => {
    if (visualizationRef.current) {
      createBlockchainVisualization();
    }
  }, []);

  const createBlockchainVisualization = () => {
    const canvas = document.createElement('canvas');
    if (!visualizationRef.current) return;
    
    canvas.width = visualizationRef.current.offsetWidth;
    canvas.height = visualizationRef.current.offsetHeight;
    visualizationRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const blocks = [];
    const connections = [];
    const numBlocks = 8;
    
    // Create blocks
    for (let i = 0; i < numBlocks; i++) {
      blocks.push({
        x: Math.random() * (canvas.width - 100) + 50,
        y: Math.random() * (canvas.height - 100) + 50,
        size: 40 + Math.random() * 20,
        color: `hsl(${240 + i * 15}, 80%, 65%)`,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }
    
    // Create connections between blocks
    for (let i = 0; i < numBlocks - 1; i++) {
      connections.push({
        from: i,
        to: i + 1
      });
      
      // Add some random connections
      if (Math.random() > 0.5 && i > 1) {
        connections.push({
          from: i,
          to: Math.floor(Math.random() * i)
        });
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.lineWidth = 2;
      connections.forEach(conn => {
        const fromBlock = blocks[conn.from];
        const toBlock = blocks[conn.to];
        
        ctx.beginPath();
        ctx.moveTo(fromBlock.x, fromBlock.y);
        ctx.lineTo(toBlock.x, toBlock.y);
        
        const gradient = ctx.createLinearGradient(
          fromBlock.x, fromBlock.y, toBlock.x, toBlock.y
        );
        gradient.addColorStop(0, fromBlock.color);
        gradient.addColorStop(1, toBlock.color);
        
        ctx.strokeStyle = gradient;
        ctx.stroke();
        
        // Draw data packet animation
        const now = Date.now() / 1000;
        const speed = 0.2; // Speed of packet
        const t = (now * speed) % 1;
        
        const packetX = fromBlock.x + (toBlock.x - fromBlock.x) * t;
        const packetY = fromBlock.y + (toBlock.y - fromBlock.y) * t;
        
        ctx.beginPath();
        ctx.arc(packetX, packetY, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      });
      
      // Draw blocks
      blocks.forEach((block, index) => {
        // Update position
        block.x += block.vx;
        block.y += block.vy;
        
        // Bounce off edges
        if (block.x < block.size/2 || block.x > canvas.width - block.size/2) {
          block.vx *= -1;
        }
        if (block.y < block.size/2 || block.y > canvas.height - block.size/2) {
          block.vy *= -1;
        }
        
        // Draw block
        ctx.beginPath();
        ctx.rect(block.x - block.size/2, block.y - block.size/2, block.size, block.size);
        ctx.fillStyle = block.color;
        ctx.fill();
        
        // Add hash-like text
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '10px monospace';
        ctx.fillText(`#${index}`, block.x - 10, block.y + 4);
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
  };

  return (
    <HeroSectionWrapper>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            {translate('Building the Future of Web3 Infrastructure', 'Создаем будущее инфраструктуры Web3')}
          </HeroTitle>
          <HeroSubtitle theme={theme}>
            {translate('Pioneering the intersection of blockchain, AI, and decentralized applications.', 'Передовые технологии на стыке блокчейна, ИИ и децентрализованных приложений.')}
          </HeroSubtitle>
          <HeroButtons>
            <Button href="#solutions" className="primary">
              {translate('Explore Solutions', 'Изучить решения')}
            </Button>
            <Button href="#contact" className="secondary" theme={theme}>
              {translate('Connect With Us', 'Связаться с нами')}
            </Button>
          </HeroButtons>
        </HeroContent>
        <HeroVisual>
          <BlockchainVisualization ref={visualizationRef} />
        </HeroVisual>
      </HeroContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
