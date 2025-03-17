import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import '../styles/features.css';

const Features = () => {
  const features = [
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Advanced security features including WPA3, RADIUS integration, and role-based access control.',
      details: [
        'WPA3-Enterprise support',
        'RADIUS integration',
        'Client isolation',
        'Rogue AP detection',
        'Security event logging'
      ]
    },
    {
      icon: '🚀',
      title: 'High Performance',
      description: 'Support for WiFi 6/6E with multi-gigabit throughput and advanced QoS capabilities.',
      details: [
        'WiFi 6/6E support',
        'Multi-gigabit throughput',
        'Advanced QoS',
        'Load balancing',
        'Band steering'
      ]
    },
    {
      icon: '🌐',
      title: 'Cloud Management',
      description: 'Centralized cloud-based management platform with real-time monitoring and analytics.',
      details: [
        'Real-time monitoring',
        'Centralized management',
        'Multi-tenant support',
        'API access',
        'Automated updates'
      ]
    },
    {
      icon: '🔄',
      title: 'Zero-Touch Provisioning',
      description: 'Automated device provisioning and configuration for rapid deployment.',
      details: [
        'Automatic device discovery',
        'Template-based configuration',
        'Bulk device management',
        'Configuration validation',
        'Deployment tracking'
      ]
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'AI-powered insights for network optimization and troubleshooting.',
      details: [
        'Performance analytics',
        'Client experience monitoring',
        'Capacity planning',
        'Predictive maintenance',
        'Custom reporting'
      ]
    },
    {
      icon: '🔌',
      title: 'Multi-Vendor Support',
      description: 'Compatible with a wide range of OpenWiFi.com validated hardware.',
      details: [
        'Vendor independence',
        'Hardware validation',
        'Interoperability testing',
        'Performance certification',
        'Future-proof design'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="features-container">
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1>Platform Features</h1>
        <p>Everything you need for enterprise-grade WiFi management</p>
      </motion.div>

      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={itemVariants}
          >
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <ul className="feature-details">
              {feature.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="features-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>Ready to get started?</h2>
        <p>Join the future of enterprise WiFi management</p>
        <div className="cta-buttons">
          <Link to="/contact" className="primary-button">Schedule a Demo</Link>
          <Link to="/documentation" className="secondary-button">View Documentation</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Features; 