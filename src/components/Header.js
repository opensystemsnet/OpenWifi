import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          OpenWifi.com
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('solutions')}
              >
                Solutions
              </button>
              <ul className="submenu">
                <li><Link to="/services/enterprise">Enterprise</Link></li>
                <li><Link to="/services/certification">Certification</Link></li>
                <li><Link to="/services/hosted-commercial-openwifi">Hosted Commercial</Link></li>
              </ul>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('features')}
              >
                Features
              </button>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('hardware')}
              >
                Hardware
              </button>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('documentation')}
              >
                Documentation
              </button>
            </li>
            <li><Link to="/about">About</Link></li>
            <li>
              <button 
                className="nav-link cta-button"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
            <li>
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 