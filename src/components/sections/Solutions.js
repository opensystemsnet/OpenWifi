import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: 'Cloud Platform',
      description: 'Enterprise-grade cloud networking with vendor-neutral flexibility.',
      features: [
        'Multi-vendor hardware support',
        'Zero-touch provisioning',
        'Unified management interface',
        'Real-time performance monitoring'
      ],
      metrics: {
        value: '70%',
        label: 'Faster Deployment'
      }
    },
    {
      title: 'Hardware Certification',
      description: 'OpenWiFi.com validated hardware from leading manufacturers.',
      features: [
        'Enterprise-grade access points',
        'Indoor and outdoor options',
        'WiFi 6/6E support',
        'Mesh networking capability'
      ],
      metrics: {
        value: '50%',
        label: 'Cost Reduction'
      }
    },
    {
      title: 'Network Intelligence',
      description: 'Advanced analytics and automation for optimal performance.',
      features: [
        'AI-powered optimization',
        'Predictive maintenance',
        'Automated troubleshooting',
        'Custom reporting'
      ],
      metrics: {
        value: '24/7',
        label: 'Proactive Monitoring'
      }
    }
  ];

  const deploymentTypes = [
    {
      title: 'Multi-Dwelling Units',
      count: '250+',
      description: 'Properties managed across residential and senior living communities'
    },
    {
      title: 'Enterprise Campus',
      count: '55K+',
      description: 'Connected devices under management'
    },
    {
      title: 'Global Coverage',
      count: '23+',
      description: 'Countries with active deployments'
    }
  ];

  return (
    <section className="solutions">
      <div className="solutions-container">
        <div className="solutions-header">
          <span className="overline">Enterprise Solutions</span>
          <h2>Open WiFi Platform for Modern Networks</h2>
          <p>Deploy and manage enterprise networks with complete control and flexibility</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <h3>{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="solution-metric">
                <span className="metric-value">{solution.metrics.value}</span>
                <span className="metric-label">{solution.metrics.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="deployment-stats">
          {deploymentTypes.map((type, index) => (
            <div key={index} className="stat-card">
              <span className="stat-number">{type.count}</span>
              <h4>{type.title}</h4>
              <p>{type.description}</p>
            </div>
          ))}
        </div>

        <div className="solutions-cta">
          <h3>Ready to modernize your network?</h3>
          <div className="cta-buttons">
            <button className="button primary">Schedule Demo</button>
            <button className="button secondary">View Hardware</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions; 