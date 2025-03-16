import React from 'react';
import { Link } from 'gatsby';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Total Control.
            <br />
            Flexible.
            <br />
            Future Proof.
          </h1>
          <p className="hero-description">
            Enterprise-grade OpenWifi platform that puts you in control. No vendor lock-ins, fast deployments, and customizable management for higher ROI and lower TCO.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="button button-primary">
              Schedule Demo
            </Link>
            <Link to="/services" className="button button-secondary">
              Learn More
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">23+</span>
              <span className="stat-label">Countries Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">55K+</span>
              <span className="stat-label">Connected Devices</span>
            </div>
            <div className="stat">
              <span className="stat-number">250+</span>
              <span className="stat-label">Enterprise Deployments</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="placeholder-image">
              <div className="network-grid"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-gradient"></div>
    </section>
  );
};

export default Hero; 