// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const techTabs = document.querySelectorAll('.tech-tab');
const techPanels = document.querySelectorAll('.tech-panel');
const langEnBtn = document.getElementById('lang-en');
const langRuBtn = document.getElementById('lang-ru');
const elementsWithLang = document.querySelectorAll('[data-en]');

// Theme Toggle
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLightTheme = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.remove('active');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Technology Tabs
techTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and panels
        techTabs.forEach(t => t.classList.remove('active'));
        techPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        document.getElementById(`${target}-panel`).classList.add('active');
    });
});

// Language Switcher
langEnBtn.addEventListener('click', () => {
    setLanguage('en');
    langEnBtn.classList.add('active');
    langRuBtn.classList.remove('active');
    localStorage.setItem('language', 'en');
});

langRuBtn.addEventListener('click', () => {
    setLanguage('ru');
    langRuBtn.classList.add('active');
    langEnBtn.classList.remove('active');
    localStorage.setItem('language', 'ru');
});

function setLanguage(lang) {
    elementsWithLang.forEach(el => {
        if (el.hasAttribute(`data-${lang}`)) {
            el.innerText = el.getAttribute(`data-${lang}`);
        }
    });
}

// Check for saved language preference
const savedLanguage = localStorage.getItem('language');
if (savedLanguage === 'ru') {
    setLanguage('ru');
    langRuBtn.classList.add('active');
    langEnBtn.classList.remove('active');
} else {
    setLanguage('en');
    langEnBtn.classList.add('active');
    langRuBtn.classList.remove('active');
}

// Blockchain Visualization
function createBlockchainVisualization() {
    const canvas = document.createElement('canvas');
    canvas.width = document.getElementById('blockchain-visualization').offsetWidth;
    canvas.height = document.getElementById('blockchain-visualization').offsetHeight;
    document.getElementById('blockchain-visualization').appendChild(canvas);
    
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
}

// Technology Visualization
function createTechVisualization() {
    const container = document.getElementById('tech-visualization');
    
    // Create elements for the visualization
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = `hsl(${240 + Math.random() * 60}, 80%, 65%)`;
        particle.style.opacity = Math.random() * 0.7 + 0.3;
        
        // Random initial position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation properties
        const duration = 15 + Math.random() * 30;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ${delay}s infinite linear`;
        
        container.appendChild(particle);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(${Math.random() * 100}px, ${Math.random() * 100}px);
            }
            50% {
                transform: translate(${Math.random() * -100}px, ${Math.random() * 100}px);
            }
            75% {
                transform: translate(${Math.random() * -100}px, ${Math.random() * -100}px);
            }
            100% {
                transform: translate(0, 0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create network lines
    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.className = 'tech-line';
        line.style.position = 'absolute';
        line.style.height = '1px';
        line.style.width = `${30 + Math.random() * 40}%`;
        line.style.backgroundColor = `hsl(${240 + Math.random() * 60}, 60%, 50%, 0.3)`;
        
        // Random position and rotation
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(line);
    }
}

// Initialize visualizations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    createBlockchainVisualization();
    createTechVisualization();
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.solution-card, .case-study-card, .about-image, .about-content');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Apply initial styles
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Check once on load
    revealOnScroll();
});