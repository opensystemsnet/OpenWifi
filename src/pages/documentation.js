import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import '../styles/documentation.css';

const documentationSections = [
  {
    title: 'Getting Started',
    icon: '🚀',
    items: [
      {
        title: 'Platform Overview',
        description: 'Learn about OpenWifi.com\'s cloud-based network management platform.',
        link: '/docs/overview'
      },
      {
        title: 'Quick Start Guide',
        description: 'Get your first access point up and running in minutes.',
        link: '/docs/quickstart'
      },
      {
        title: 'System Requirements',
        description: 'Hardware and software requirements for OpenWifi.com deployment.',
        link: '/docs/requirements'
      }
    ]
  },
  {
    title: 'Network Management',
    icon: '🌐',
    items: [
      {
        title: 'Device Configuration',
        description: 'Learn how to configure and manage your network devices.',
        link: '/docs/device-config'
      },
      {
        title: 'Network Policies',
        description: 'Set up and manage network policies and access controls.',
        link: '/docs/policies'
      },
      {
        title: 'Monitoring & Analytics',
        description: 'Monitor network performance and analyze usage patterns.',
        link: '/docs/monitoring'
      }
    ]
  },
  {
    title: 'Security',
    icon: '🔒',
    items: [
      {
        title: 'Security Best Practices',
        description: 'Implement security measures to protect your network.',
        link: '/docs/security'
      },
      {
        title: 'Authentication Setup',
        description: 'Configure user authentication and access control.',
        link: '/docs/authentication'
      },
      {
        title: 'Threat Detection',
        description: 'Monitor and respond to security threats.',
        link: '/docs/threats'
      }
    ]
  },
  {
    title: 'API Reference',
    icon: '⚡',
    items: [
      {
        title: 'REST API Documentation',
        description: 'Complete API reference for developers.',
        link: '/docs/api'
      },
      {
        title: 'Integration Guides',
        description: 'Integrate OpenWifi.com with your existing systems.',
        link: '/docs/integration'
      },
      {
        title: 'SDK Documentation',
        description: 'Build applications using our SDK.',
        link: '/docs/sdk'
      }
    ]
  }
];

const DocumentationPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Documentation - OpenWifi.com</title>
        <meta name="description" content="Technical documentation, guides, and API reference for OpenWifi.com's enterprise WiFi platform." />
      </Helmet>

      <div className="documentation-page">
        <div className="documentation-header">
          <h1>Documentation</h1>
          <p>
            Everything you need to know about deploying and managing your
            OpenWifi.com network. From quick start guides to detailed API
            references.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search documentation..."
              aria-label="Search documentation"
            />
            <button type="button" aria-label="Search">
              🔍
            </button>
          </div>
        </div>

        <div className="documentation-content">
          {documentationSections.map((section, index) => (
            <div key={index} className="doc-section">
              <div className="section-header">
                <span className="section-icon">{section.icon}</span>
                <h2>{section.title}</h2>
              </div>

              <div className="doc-items">
                {section.items.map((item, itemIndex) => (
                  <Link to={item.link} key={itemIndex} className="doc-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="read-more">Read More →</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="documentation-help">
          <div className="help-content">
            <h2>Need Additional Help?</h2>
            <p>
              Can't find what you're looking for? Our support team is here to help
              you 24/7.
            </p>
            <div className="help-buttons">
              <Link to="/contact" className="primary-button">
                Contact Support
              </Link>
              <a
                href="https://github.com/openwifi/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocumentationPage;

export const Head = () => (
  <Helmet>
    <html lang="en" />
  </Helmet>
); 