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

  const navigationItems = [
    {
      label: 'Services',
      path: '/services',
      submenu: [
        { label: 'Hosted Commercial OpenWifi', path: '/services/hosted-openwifi' },
        { label: 'Hardware Certification', path: '/services/hardware-certification' },
        { label: 'Testing and Planning', path: '/services/testing-planning' },
        { label: 'Enterprise Solutions', path: '/services/enterprise' },
        { label: 'Carrier Solutions', path: '/services/carrier' },
        { label: 'White Label Solutions', path: '/services/white-label' },
      ]
    },
    {
      label: 'Partners',
      path: '/partners',
      submenu: [
        { label: 'Hardware Partners', path: '/partners/hardware' },
        { label: 'Technology Partners', path: '/partners/technology' },
      ]
    },
    { label: 'Team', path: '/team' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="OpenWifi Logo" />
        </Link>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-items">
            {navigationItems.map((item) => (
              <li key={item.path} className={item.submenu ? 'has-submenu' : ''}>
                <Link to={item.path} activeClassName="active">
                  {item.label}
                </Link>
                {item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.path}>
                        <Link to={subItem.path} activeClassName="active">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <form className="search-form" action="/search" method="GET">
            <input 
              type="search" 
              placeholder="Search..." 
              name="q"
              aria-label="Search"
            />
          </form>
          <a href="/contact" className="button primary">
            Get Started
          </a>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 