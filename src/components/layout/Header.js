import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          OpenWifi.com
        </Link>
        
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="nav-group">
            <Link to="/services/hosted-commercial">Hosted Commercial</Link>
            <Link to="/services/certification">Hardware Certification</Link>
            <Link to="/services/enterprise">Enterprise</Link>
          </div>
          <div className="nav-group">
            <Link to="/partners">Partners</Link>
            <Link to="/about">About</Link>
            <Link to="/contact" className="cta-button">Contact Us</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 