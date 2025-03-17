import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/hardware">Hardware</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/support">Documentation</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/knowledge-base">Knowledge Base</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/compliance">Compliance</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} OpenWifi.com. All rights reserved.</p>
          <div className="social-links">
            <a href="https://twitter.com/openwifi" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/company/openwifi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/openwifi" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 