import React from 'react';
import { Link } from 'gatsby';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Hosted Commercial OpenWifi', path: '/services/hosted-openwifi' },
      { label: 'Hardware Certification', path: '/services/hardware-certification' },
      { label: 'Testing and Planning', path: '/services/testing-planning' },
      { label: 'Enterprise Solutions', path: '/services/enterprise' },
      { label: 'Carrier Solutions', path: '/services/carrier' },
      { label: 'White Label Solutions', path: '/services/white-label' },
    ],
    partners: [
      { label: 'CIG / Actiontec', path: '/partners/cig-actiontec' },
      { label: 'Edgecore / Accton', path: '/partners/edgecore-accton' },
      { label: 'HFCL', path: '/partners/hfcl' },
      { label: 'Cybertan', path: '/partners/cybertan' },
      { label: 'Open Systems', path: '/partners/open-systems' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Team', path: '/team' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/careers' },
    ],
  };

  const socialLinks = [
    { label: 'LinkedIn', icon: 'linkedin.svg', url: 'https://linkedin.com/company/openwifi' },
    { label: 'Twitter', icon: 'twitter.svg', url: 'https://twitter.com/openwifi' },
    { label: 'GitHub', icon: 'github.svg', url: 'https://github.com/openwifi' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/images/logo.svg" alt="OpenWifi Logo" />
            </Link>
            <p className="footer-tagline">
              Empowering Connectivity with Commercial-Grade OpenWifi Solutions
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <img src={`/images/social/${social.icon}`} alt={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Partners</h3>
              <ul>
                {footerLinks.partners.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section contact">
              <h3>Contact Us</h3>
              <p>Get in touch with our team to learn more about our Commercial-Grade OpenWifi solutions.</p>
              <a href="/contact" className="button primary">
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} OpenWifi.com. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 