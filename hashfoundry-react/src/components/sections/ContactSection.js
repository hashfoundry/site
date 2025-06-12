import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import useTranslation from '../../hooks/useTranslation';
import SectionDivider from '../ui/SectionDivider';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme === 'light' ? 'var(--light-contact-bg)' : 'var(--dark-contact-bg)'};
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

const ContactGrid = styled.div`
//  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactFormContainer = styled.div`
  background: ${props => props.theme === 'light' ? 'var(--light-card-bg)' : 'var(--dark-card-bg)'};
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  }
  
  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
    border-radius: 4px;
    background: ${props => props.theme === 'light' ? 'var(--light-bg)' : 'var(--dark-bg)'};
    color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
    font-family: 'Inter', sans-serif;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
    }
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: var(--primary-color);
  color: white;
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(108, 99, 255, 0.3);
  }
`;

const ContactInfo = styled.div``;

const ContactCard = styled.div`
  background: ${props => props.theme === 'light' ? 'var(--light-card-bg)' : 'var(--dark-card-bg)'};
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
  
  h3 {
    color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
    margin-top: 2rem;
    margin-bottom: 1rem;
    
    &:first-child {
      margin-top: 0;
    }
  }
`;

const OfficeLocations = styled.div`
  margin-bottom: 2rem;
`;

const Office = styled.div`
  margin-bottom: 1.5rem;
  
  h4 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  }
  
  p {
    color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
    margin-bottom: 0;
  }
`;

const ContactDetails = styled.div`
  p {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
    
    svg {
      margin-right: 1rem;
      color: var(--primary-color);
    }
    
    a {
      color: ${props => props.theme === 'light' ? 'var(--light-text-secondary)' : 'var(--dark-text-secondary)'};
      transition: color 0.3s ease;
      
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme === 'light' ? 'var(--light-bg)' : 'var(--dark-bg)'};
  color: ${props => props.theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'};
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme === 'light' ? 'var(--light-border)' : 'var(--dark-border)'};
  
  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactSection = () => {
  const { theme } = useContext(ThemeContext);
  const translate = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: '',
      message: ''
    });
    // Show success message or redirect
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <SectionContainer id="contact" theme={theme}>
        <div className="container">
          <SectionHeader>
            <SectionTitle>
              {translate('Connect With Us', 'Свяжитесь с нами')}
            </SectionTitle>
            <SectionSubtitle theme={theme}>
              {translate('Let\'s build the decentralized future together', 'Давайте вместе построим децентрализованное будущее')}
            </SectionSubtitle>
          </SectionHeader>

          <ContactGrid>
            <ContactInfo>
              <ContactCard theme={theme}>
                <h3>{translate('Contact Information', 'Контактная информация')}</h3>
                <ContactDetails theme={theme}>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:info@hashfoundry.tech">info@hashfoundry.tech</a>
                  </p>
                </ContactDetails>

                <h3>{translate('Follow Us', 'Подписывайтесь')}</h3>
                <SocialLinks>
                  <SocialLink href="https://x.com/hashfnd" theme={theme}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </SocialLink>
                  <SocialLink href="https://github.com/hashfoundry" theme={theme}>
                    <FontAwesomeIcon icon={faGithub} />
                  </SocialLink>
                </SocialLinks>
              </ContactCard>
            </ContactInfo>
          </ContactGrid>
        </div>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default ContactSection;
