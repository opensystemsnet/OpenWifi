import * as React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import '../styles/solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: 'Hosted Commercial OpenWifi',
      description: 'Enterprise-grade cloud-managed WiFi solution with zero touch provisioning and centralized management.',
      features: [
        'Zero-touch provisioning',
        'Multi-tenant architecture',
        'Real-time monitoring',
        'AI-powered optimization'
      ],
      link: '/solutions/hosted'
    },
    {
      title: 'Hardware Certification',
      description: 'Get your hardware certified for OpenWifi compatibility and join our growing ecosystem.',
      features: [
        'TIP OpenWiFi certification',
        'Interoperability testing',
        'Performance validation',
        'Security compliance'
      ],
      link: '/solutions/hardware'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Custom WiFi solutions for large businesses and service providers with dedicated support.',
      features: [
        'Custom deployment options',
        'Advanced security features',
        'SLA guarantees',
        'Dedicated support team'
      ],
      link: '/solutions/enterprise'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="solutions">
      <div className="solutions-container">
        <motion.div
          className="solutions-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Solutions</h2>
          <p>Comprehensive WiFi solutions for every enterprise need</p>
        </motion.div>

        <motion.div
          className="solutions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              variants={itemVariants}
            >
              <h3>{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Link to={solution.link} className="solution-link">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions; 