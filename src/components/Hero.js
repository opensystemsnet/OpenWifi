import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import '../styles/hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <h1>Enterprise-Grade OpenWiFi Solutions</h1>
          <p>
            Deploy and manage secure, high-performance wireless networks with our 
            cloud-based OpenWiFi platform. Experience the future of enterprise WiFi.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="primary-button">
              Schedule Demo
            </Link>
            <Link to="/solutions" className="secondary-button">
              Explore Solutions
            </Link>
          </div>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Enterprise Deployments</p>
          </div>
          <div className="stat-item">
            <h3>99.9%</h3>
            <p>Network Uptime</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Expert Support</p>
          </div>
        </motion.div>

        <motion.div className="hero-badges" variants={itemVariants}>
          <div className="badge">
            <span className="badge-icon">✓</span>
            <span>OpenWiFi.com validated hardware</span>
          </div>
          <div className="badge">
            <span className="badge-icon">🛡️</span>
            <span>Enterprise Security</span>
          </div>
          <div className="badge">
            <span className="badge-icon">☁️</span>
            <span>Cloud-Native</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 