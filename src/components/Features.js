import * as React from 'react';
import { motion } from 'framer-motion';
import '../styles/features.css';

const Features = () => {
  const features = [
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Advanced security features including WPA3, RADIUS integration, and role-based access control.'
    },
    {
      icon: '🚀',
      title: 'High Performance',
      description: 'Support for WiFi 6/6E with multi-gigabit throughput and advanced QoS capabilities.'
    },
    {
      icon: '🌐',
      title: 'Cloud Management',
      description: 'Centralized cloud-based management platform with real-time monitoring and analytics.'
    },
    {
      icon: '🔄',
      title: 'Zero-Touch Provisioning',
      description: 'Automated device provisioning and configuration for rapid deployment.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'AI-powered insights for network optimization and troubleshooting.'
    },
    {
      icon: '🔌',
      title: 'Multi-Vendor Support',
      description: 'Compatible with a wide range of TIP OpenWiFi certified hardware.'
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
    <section className="features">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Key Features</h2>
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
          <h3>Ready to get started?</h3>
          <p>Join the future of enterprise WiFi management</p>
          <button className="cta-button">Schedule a Demo</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 