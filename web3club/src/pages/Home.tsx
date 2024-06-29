import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import mediumIcon from './medium.svg';
import instagramIcon from './instagram.svg';
import linkedinIcon from './linkedin.svg';
import telegramIcon from './telegram.svg';
import githubIcon from './github.svg';
import twitterIcon from './twitter.svg';
import discordIcon from './discord.svg';
import gmailIcon from './gmail.svg';
import '../fonts/fonts.css';
import bg1 from './bg1.png'; // Import the background image
import WhatsInIt from './WhatsInIt';

const Home: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.brand}>Wallstreet DAO</div>
        <button onClick={toggleDropdown} style={styles.menuButton}>
          ☰
        </button>
        {isDropdownOpen && (
          <div style={styles.dropdownMenu}>
            <Link to="/blog" style={styles.dropdownItem} className="dropdown-item">Blogs</Link>
            <Link to="/events-calendar" style={styles.dropdownItem} className="dropdown-item">Events Calendar</Link>
            <Link to="/project-showcase" style={styles.dropdownItem} className="dropdown-item">Project Showcase</Link>
            <Link to="/news" style={styles.dropdownItem} className="dropdown-item">News</Link>
            <Link to="/mint-nft" style={styles.dropdownItem} className="dropdown-item">Mint NFT</Link>
            <Link to="/digiboard" style={styles.dropdownItem} className="dropdown-item">Digiboard</Link>
            <Link to="/reviews" style={styles.dropdownItem} className="dropdown-item">Review</Link>
            <Link to="/stress-test" style={styles.dropdownItem} className="dropdown-item">Stress Test</Link>
          </div>
        )}
        <div style={styles.socialLinks}>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discordIcon} alt="Discord" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" style={styles.icon} className="social-icon" />
          </a>
          <a href="mailto:example@gmail.com">
            <img src={gmailIcon} alt="Gmail" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://github.com/">
            <img src={githubIcon} alt="GitHub" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" style={styles.icon} className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" style={styles.icon} className="social-icon" />
          </a>
        </div>
      </nav>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.whiteText}>the </span>
            <span style={styles.gradientText}>Wallstreet DAO</span>
          </h1>
          <p style={styles.heroSubtitle}>The first of its kind university DAO community, based KLH Uni</p>
        </div>
      </div>
      <WhatsInIt />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Audiowide', sans-serif",
    minHeight: '100vh',
  } as React.CSSProperties,
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Slightly transparent background
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    position: 'fixed', // Change to fixed to overlay on top of the hero section
    width: '100%', // Make navbar full width
    top: 0,
    zIndex: 1000,
  } as React.CSSProperties,
  brand: {
    fontFamily: 'Moonhouse, sans-serif', // Apply custom font here
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#90f542',
  } as React.CSSProperties,
  menuButton: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    marginLeft: '0.5rem',
  } as React.CSSProperties,
  dropdownMenu: {
    position: 'absolute',
    top: '3.5rem', // Position the dropdown below the menu button
    right: '0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    minWidth: '10rem', // Set minimum width for dropdown
  } as React.CSSProperties,
  dropdownItem: {
    color: '#ffffff',
    textDecoration: 'none',
    display: 'block',
    padding: '0.5rem 1rem',
    textAlign: 'left',
  } as React.CSSProperties,
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem', // Add padding for spacing
  } as React.CSSProperties,
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    margin: '0 0.3rem',
    transition: 'transform 0.3s ease-in-out',
  } as React.CSSProperties,
  heroSection: {
    backgroundImage: `url(${bg1})`, // Set bg1.png as background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Take full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Relative positioning for absolute children
    marginTop: '3.5rem', // Adjust for fixed navbar overlap
  } as React.CSSProperties,
  heroContent: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '80%',
  } as React.CSSProperties,
  heroTitle: {
    fontFamily: 'Glitch Goblin, sans-serif', // Apply custom font here
    fontSize: '3rem',
    marginBottom: '0.5rem',
    display: 'inline-block',
  } as React.CSSProperties,
  gradientText: {
    background: `linear-gradient(90deg, #90f542, lime)`, // Lime yellow gradient background
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } as React.CSSProperties,
  whiteText: {
    color: '#ffffff',
  } as React.CSSProperties,
  heroSubtitle: {
    fontSize: '1rem', // Increase font size for readability
  } as React.CSSProperties,
};

const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Audiowide', sans-serif;
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .visible {
    opacity: 1 !important;
  }
  .nav-link:hover {
    color: #cafc5d !important;
  }
      .dropdown-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }
    .social-icon:hover {
      transform: scale(1.2);
    }

    @media screen and (max-width: 336px) {
      /* Adjustments for very small screens */
      .navbar {
        flex-direction: column;
        padding: 0.3rem;
      }
      .brand {
        font-size: 0.8rem;
      }
      .menuButton {
        font-size: 1rem;
        margin-left: 0.3rem;
      }
      .dropdownMenu {
        top: 2rem; /* Position the dropdown below the menu button */
        right: 0;
        min-width: 8rem; /* Set minimum width for dropdown */
      }
      .socialLinks {
        padding: 0.3rem; /* Add padding for spacing */
      }
      .icon {
        width: 1rem;
        height: 1rem;
        margin: 0 0.2rem;
      }
      .heroTitle {
        font-size: 2rem;
      }
      .heroSubtitle {
        font-size: 0.8rem; /* Increase font size for readability */
      }
    }
`;
document.head.appendChild(globalStyles);

export default Home;

