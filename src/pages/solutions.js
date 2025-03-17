import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import '../styles/solutions.css';

const solutions = [
  {
    title: 'Cloud Platform',
    description: 'Enterprise-grade cloud management platform for your WiFi infrastructure.',
    features: [
      'Multi-vendor device support',
      'Real-time monitoring and analytics',
      'AI-powered network optimization',
      'Automated firmware updates',
      'Role-based access control'
    ],
    icon: '☁️'
  },
  {
    title: 'Hardware Certification',
    description: 'Get your hardware certified for TIP OpenWiFi compatibility.',
    features: [
      'Comprehensive testing suite',
      'Performance validation',
      'Security assessment',
      'Interoperability testing',
      'Certification support'
    ],
    icon: '🛡️'
  },
  {
    title: 'Enterprise Solutions',
    description: 'Custom WiFi solutions for enterprise deployments.',
    features: [
      'Network design and planning',
      'Site surveys and RF optimization',
      'High-density deployments',
      'Guest network management',
      '24/7 support'
    ],
    icon: '🏢'
  }
];

const SolutionsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Solutions - OpenWiFi</title>
        <meta name="description" content="Explore our enterprise WiFi solutions including cloud platform, hardware certification, and custom deployments." />
      </Helmet>

      <div className="solutions-page">
        <div className="solutions-header">
          <h1>Enterprise WiFi Solutions</h1>
          <p>
            Transform your network infrastructure with our comprehensive suite of
            OpenWiFi solutions designed for enterprise needs.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h2>{solution.title}</h2>
              <p>{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <a href="/contact" className="learn-more">
                Learn More
              </a>
            </div>
          ))}
        </div>

        <div className="solutions-cta">
          <h2>Ready to Transform Your Network?</h2>
          <p>
            Contact our team to discuss your specific requirements and find the
            perfect solution for your organization.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="primary-button">
              Schedule Consultation
            </a>
            <a href="/hardware" className="secondary-button">
              View Compatible Hardware
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SolutionsPage;

export const Head = () => (
  <Helmet>
    <html lang="en" />
  </Helmet>
); 