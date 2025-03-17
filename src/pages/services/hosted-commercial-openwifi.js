import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import '../../styles/services.css';

const HostedCommercialOpenWifiPage = () => {
  const features = {
    cloudManagement: {
      title: "Cloud Management",
      items: [
        "Centralized dashboard",
        "Real-time analytics",
        "Remote configuration",
        "Performance monitoring"
      ]
    },
    networkControl: {
      title: "Network Control",
      items: [
        "Traffic shaping",
        "QoS management",
        "Bandwidth control",
        "Guest network management"
      ]
    },
    security: {
      title: "Security",
      items: [
        "WPA3-Enterprise",
        "RADIUS integration",
        "Captive portal",
        "Firewall policies"
      ]
    },
    analytics: {
      title: "Analytics",
      items: [
        "User behavior insights",
        "Network usage patterns",
        "Performance metrics",
        "Capacity planning"
      ]
    }
  };

  const benefits = [
    {
      title: "Scalability",
      items: [
        "Grow your network seamlessly",
        "Add access points on demand",
        "Flexible deployment options",
        "Multi-site management"
      ]
    },
    {
      title: "Zero Hardware Overhead",
      items: [
        "No on-premises controller required",
        "Cloud-based management",
        "Automatic updates and maintenance",
        "Reduced operational costs"
      ]
    },
    {
      title: "Enhanced Security",
      items: [
        "Enterprise-grade encryption",
        "Role-based access control",
        "Network segmentation",
        "Real-time threat detection"
      ]
    },
    {
      title: "24/7 Expert Support",
      items: [
        "Dedicated support team",
        "Proactive monitoring",
        "Rapid issue resolution",
        "Performance optimization"
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Hosted Commercial OpenWifi | OpenWifi.com" 
        description="Seamless, scalable Wi-Fi solutions for businesses of all sizes"
      />
      <div className="service-page">
        <div className="container">
          <div className="service-header">
            <h1>Hosted Commercial OpenWifi</h1>
            <p className="lead">
              Deploy enterprise WiFi networks without the complexity of hardware management. Our hosted solution 
              provides businesses with reliable, high-performance Wi-Fi networks without the need for on-premises 
              hardware management.
            </p>
          </div>

          <section className="benefits-section">
            <h2>Key Benefits</h2>
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

          <section className="features-section">
            <h2>Features</h2>
            <div className="features-grid">
              {Object.values(features).map((feature, index) => (
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
            <h2>Getting Started</h2>
            <p>Transform your network infrastructure with our hosted OpenWifi solution.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="button button-primary">Schedule a Demo</Link>
              <Link to="/pricing" className="button button-secondary">View Pricing</Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default HostedCommercialOpenWifiPage; 