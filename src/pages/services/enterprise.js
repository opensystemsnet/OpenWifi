import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import '../../styles/services.css';

const EnterprisePage = () => {
  const businessSolutions = [
    {
      title: "Custom Implementation",
      items: [
        "Tailored deployment strategy",
        "Infrastructure optimization",
        "Legacy system integration",
        "Custom security policies"
      ]
    },
    {
      title: "Dedicated Support",
      items: [
        "24/7 enterprise support",
        "Dedicated account manager",
        "Priority issue resolution",
        "Regular performance reviews"
      ]
    },
    {
      title: "Advanced Features",
      items: [
        "Custom analytics dashboard",
        "Advanced security controls",
        "Network orchestration",
        "Automated workflows"
      ]
    },
    {
      title: "SLA Guarantees",
      items: [
        "Performance guarantees",
        "Uptime commitments",
        "Response time SLAs",
        "Resolution time SLAs"
      ]
    }
  ];

  const providerSolutions = [
    {
      title: "White-Label Platform",
      items: [
        "Brand customization",
        "Custom portal design",
        "Flexible deployment options",
        "Revenue sharing models"
      ]
    },
    {
      title: "Multi-Tenant Management",
      items: [
        "Centralized control",
        "Client segmentation",
        "Resource allocation",
        "Usage monitoring"
      ]
    },
    {
      title: "Revenue Optimization",
      items: [
        "Flexible pricing models",
        "Value-added services",
        "Usage-based billing",
        "Customer analytics"
      ]
    },
    {
      title: "Automated Operations",
      items: [
        "Zero-touch provisioning",
        "Automated maintenance",
        "Scheduled updates",
        "Performance optimization"
      ]
    }
  ];

  const features = [
    {
      title: "Security",
      items: [
        "Enterprise-grade encryption",
        "Advanced threat protection",
        "Network segmentation",
        "Compliance management"
      ]
    },
    {
      title: "Analytics",
      items: [
        "Real-time monitoring",
        "Custom reporting",
        "Predictive analytics",
        "Capacity planning"
      ]
    },
    {
      title: "Integration",
      items: [
        "API access",
        "Custom integrations",
        "Third-party systems",
        "Legacy infrastructure"
      ]
    },
    {
      title: "Support",
      items: [
        "Enterprise SLA",
        "Technical account management",
        "Training programs",
        "Documentation"
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Enterprise Solutions | OpenWifi.com" 
        description="Custom OpenWifi solutions for large-scale deployments"
      />
      <div className="service-page">
        <div className="container">
          <div className="service-header">
            <h1>Enterprise OpenWifi Solutions</h1>
            <p className="lead">
              Tailored OpenWifi solutions designed for large businesses and service providers, 
              delivering unmatched performance, security, and control.
            </p>
          </div>

          <section className="solutions-section">
            <h2>Solutions for Large Businesses</h2>
            <div className="solutions-grid">
              {businessSolutions.map((solution, index) => (
                <div key={index} className="solution-card">
                  <h3>{solution.title}</h3>
                  <ul>
                    {solution.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="solutions-section">
            <h2>Solutions for Service Providers</h2>
            <div className="solutions-grid">
              {providerSolutions.map((solution, index) => (
                <div key={index} className="solution-card">
                  <h3>{solution.title}</h3>
                  <ul>
                    {solution.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="features-section">
            <h2>Enterprise Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature.title}</h3>
                  <ul>
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Scale?</h2>
            <p>Transform your enterprise network infrastructure with our custom solutions.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="button button-primary">Schedule Consultation</Link>
              <Link to="/case-studies" className="button button-secondary">View Case Studies</Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default EnterprisePage; 