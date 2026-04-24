import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.png';
import './Home.css';

// Simple typewriter hook
const useTypewriter = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

const Home = () => {
  const typedTitle = useTypewriter('MERN Stack Developer', 120);

  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-content animate-fade-in">
          <h2 className="hero-greeting">Hi there, I am</h2>
          <h1 className="hero-name">
            Srishty
          </h1>
          <h2 className="hero-title">
            <span className="gradient-text">{typedTitle}</span>
            <span className="cursor">|</span>
          </h2>
          
          <p className="hero-subtitle">
            Hands-on experience in developing web applications using modern technologies, with a focus on building reliable and efficient solutions while ensuring a smooth user experience
          </p>
          
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="hero-visual animate-slide-in">
          <div className="profile-container glass">
            <img 
              src={profileImg} 
              alt="Developer Profile" 
              className="profile-image" 
            />
            <div className="decoration-circle dev-circle-1"></div>
            <div className="decoration-circle dev-circle-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
