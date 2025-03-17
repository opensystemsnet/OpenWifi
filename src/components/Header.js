import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <Link to="/solutions">Solutions</Link>
              <ul className="submenu">
                <li><Link to="/services/enterprise">Enterprise</Link></li>
                <li><Link to="/services/certification">Certification</Link></li>
                <li><Link to="/services/hosted-commercial-openwifi">Hosted Commercial</Link></li>
              </ul>
            </li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/hardware">Hardware</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" className="cta-button">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 