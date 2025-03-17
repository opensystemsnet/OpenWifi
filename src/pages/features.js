import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import '../styles/features.css';

const features = [
  {
    category: 'Network Management',
    items: [
      {
        title: 'Cloud-Based Control',
        description: 'Manage your entire network from a single, intuitive dashboard.',
        details: [
          'Real-time device monitoring',
          'Centralized configuration management',
          'Role-based access control',
          'Multi-tenant architecture',
          'API-first design'
        ],
        icon: '☁️'
      },
      {
        title: 'Zero-Touch Provisioning',
        description: 'Automate device deployment and configuration at scale.',
        details: [
          'Automatic device discovery',
          'Template-based configuration',
          'Bulk device management',
          'Configuration validation',
          'Deployment tracking'
        ],
        icon: '🔄'
      }
    ]
  },
  {
    category: 'Security & Compliance',
    items: [
      {
        title: 'Enterprise Security',
        description: 'Comprehensive security features to protect your network.',
        details: [
          'WPA3-Enterprise support',
          'RADIUS integration',
          'Client isolation',
          'Rogue AP detection',
          'Security event logging'
        ],
        icon: '🛡️'
      },
      {
        title: 'Policy Management',
        description: 'Define and enforce network policies across your organization.',
        details: [
          'Granular access control',
          'QoS policies',
          'Bandwidth management',
          'Application control',
          'Content filtering'
        ],
        icon: '📋'
      }
    ]
  },
  {
    category: 'Analytics & Insights',
    items: [
      {
        title: 'Network Analytics',
        description: 'Gain deep insights into your network performance.',
        details: [
          'Real-time performance metrics',
          'Historical data analysis',
          'Client experience monitoring',
          'Capacity planning tools',
          'Custom reporting'
        ],
        icon: '📊'
      },
      {
        title: 'AI-Powered Optimization',
        description: 'Automatic network optimization using machine learning.',
        details: [
          'RF optimization',
          'Channel selection',
          'Load balancing',
          'Client steering',
          'Predictive analytics'
        ],
        icon: '🤖'
      }
    ]
  }
];

const FeaturesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Platform Features - OpenWifi.com</title>
        <meta name="description" content="Explore the powerful features of OpenWifi.com's cloud-based network management platform." />
      </Helmet>

      <div className="features-page">
        <div className="features-header">
          <h1>Platform Features</h1>
          <p>
            Our enterprise-grade platform provides comprehensive tools for managing,
            securing, and optimizing your wireless network infrastructure.
          </p>
        </div>

        <div className="features-content">
          {features.map((category, index) => (
            <div key={index} className="feature-category">
              <h2>{category.category}</h2>
              
              <div className="feature-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="feature-card">
                    <div className="feature-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul className="feature-details">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <h2>Ready to Experience These Features?</h2>
          <p>
            Schedule a demo to see how our platform can transform your network
            management experience.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="primary-button">
              Schedule Demo
            </a>
            <a href="/documentation" className="secondary-button">
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturesPage;

export const Head = () => (
  <Helmet>
    <html lang="en" />
  </Helmet>
); 