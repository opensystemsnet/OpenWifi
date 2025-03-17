import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import '../../styles/services.css';

const CertificationPage = () => {
  const benefits = [
    {
      title: "Market Trust",
      items: [
        "Official OpenWifi certification badge",
        "Verified compatibility status",
        "Enhanced market credibility",
        "Customer confidence boost"
      ]
    },
    {
      title: "Quality Assurance",
      items: [
        "Rigorous testing protocols",
        "Performance validation",
        "Compatibility verification",
        "Security assessment"
      ]
    },
    {
      title: "Industry Standards",
      items: [
        "OpenWifi compliance",
        "TIP OpenWiFi alignment",
        "Industry best practices",
        "Future-proof design"
      ]
    }
  ];

  const process = [
    {
      title: "1. Initial Assessment",
      items: [
        "Hardware specifications review",
        "Preliminary compatibility check",
        "Requirements documentation",
        "Timeline planning"
      ]
    },
    {
      title: "2. Testing Phase",
      items: [
        "Performance benchmarking",
        "Security testing",
        "Interoperability validation",
        "Stress testing"
      ]
    },
    {
      title: "3. Compliance Verification",
      items: [
        "Standards compliance check",
        "Documentation review",
        "Security audit",
        "Performance validation"
      ]
    },
    {
      title: "4. Certification",
      items: [
        "Official certification issuance",
        "Documentation package",
        "Marketing materials",
        "Support resources"
      ]
    }
  ];

  const advantages = [
    {
      title: "Increased Marketability",
      items: [
        "Access to OpenWifi ecosystem",
        "Enhanced product visibility",
        "Market differentiation",
        "Customer trust"
      ]
    },
    {
      title: "Technical Benefits",
      items: [
        "Verified compatibility",
        "Optimized performance",
        "Reliable operation",
        "Future compatibility"
      ]
    },
    {
      title: "Support Benefits",
      items: [
        "Priority technical support",
        "Regular updates",
        "Integration assistance",
        "Documentation access"
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="OpenWifi Hardware Certification | OpenWifi.com" 
        description="Ensure your hardware meets the highest standards with our certification process"
      />
      <div className="service-page">
        <div className="container">
          <div className="service-header">
            <h1>OpenWifi Hardware Certification</h1>
            <p className="lead">
              Our certification process ensures that your hardware is compatible with OpenWifi standards, 
              guaranteeing optimal performance and reliability for your customers.
            </p>
          </div>

          <section className="benefits-section">
            <h2>Certification Benefits</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3>{benefit.title}</h3>
                  <ul>
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="process-section">
            <h2>Certification Process</h2>
            <div className="process-grid">
              {process.map((step, index) => (
                <div key={index} className="process-card">
                  <h3>{step.title}</h3>
                  <ul>
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="advantages-section">
            <h2>Why Get Certified?</h2>
            <div className="advantages-grid">
              {advantages.map((advantage, index) => (
                <div key={index} className="advantage-card">
                  <h3>{advantage.title}</h3>
                  <ul>
                    {advantage.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Get Certified?</h2>
            <p>Start the certification process for your hardware today.</p>
            <div className="cta-buttons">
              <Link to="/apply" className="button button-primary">Apply for Certification</Link>
              <Link to="/contact" className="button button-secondary">Contact Sales</Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CertificationPage; 