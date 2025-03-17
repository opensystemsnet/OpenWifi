import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/home.css';

const IndexPage = () => {
  const solutions = [
    {
      title: "Hosted Commercial OpenWifi",
      description: "Deploy enterprise WiFi networks without the complexity of hardware management. Scale effortlessly, secure inherently.",
      features: [
        "Seamless scalability",
        "Zero-touch provisioning",
        "Enterprise-grade security",
        "24/7 expert support"
      ],
      link: "/services/hosted-commercial"
    },
    {
      title: "Hardware Certification",
      description: "Ensure your devices meet the highest OpenWifi standards with our comprehensive certification program.",
      link: "/services/certification"
    }
  ];

  const enterpriseSolutions = [
    {
      title: "For Large Businesses",
      description: "Custom implementations tailored for enterprise environments.",
      features: [
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "SLA guarantees"
      ]
    },
    {
      title: "For Service Providers",
      description: "White-label solutions designed for MSPs and carriers.",
      features: [
        "Brand customization",
        "Multi-tenant management",
        "Revenue optimization",
        "Automated deployment"
      ]
    }
  ];

  const partners = [
    "CIG / Actiontec",
    "Edgecore / Accton",
    "HFCL",
    "Cybertan",
    "Open Systems"
  ];

  const deployments = [
    {
      title: "Global Airport Network",
      quote: "OpenWifi.com transformed our passenger connectivity experience while reducing operational costs by 40%.",
      author: "International Airport Authority"
    },
    {
      title: "Enterprise Campus",
      quote: "Zero vendor lock-in and enterprise-grade features made OpenWifi.com the clear choice for our campus deployment.",
      author: "Fortune 500 Technology Company"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="OpenWifi.com - Enterprise-Grade OpenWifi Solutions" 
        description="Transform your network infrastructure with commercial-grade OpenWifi solutions. Built by industry veterans, trusted by leading enterprises."
      />
      
      <section className="hero">
        <div className="container">
          <h1>Enterprise WiFi Without Compromise</h1>
          <p className="lead">
            Transform your network infrastructure with commercial-grade OpenWifi solutions. 
            Built by industry veterans, trusted by leading enterprises.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="button button-primary">Schedule a Demo</Link>
            <Link to="/solutions" className="button button-secondary">View Solutions</Link>
          </div>
        </div>
      </section>

      <section className="solutions">
        <div className="container">
          <h2>Our Solutions</h2>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                {solution.features && (
                  <ul>
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                )}
                <Link to={solution.link} className="learn-more">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-solutions">
        <div className="container">
          <h2>Enterprise Solutions</h2>
          <div className="enterprise-grid">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="enterprise-card">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <h2>Why OpenWifi.com?</h2>
          <div className="why-us-grid">
            <div className="why-us-card">
              <h3>Industry Expertise</h3>
              <p>Led by pioneers who shaped WiFi technology at Boingo, Qualcomm, and Meta.</p>
            </div>
            <div className="why-us-card">
              <h3>Open Source Foundation</h3>
              <p>Built on TIP OpenWiFi, ensuring vendor independence and continuous innovation.</p>
            </div>
            <div className="why-us-card">
              <h3>Enterprise-Grade</h3>
              <p>Commercial support and features that match or exceed proprietary solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <h2>Featured Partners</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                {partner}
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/partners" className="button button-secondary">View All Partners</Link>
          </div>
        </div>
      </section>

      <section className="deployments">
        <div className="container">
          <h2>Latest Deployments</h2>
          <div className="deployments-grid">
            {deployments.map((deployment, index) => (
              <div key={index} className="deployment-card">
                <h3>{deployment.title}</h3>
                <blockquote>
                  <p>{deployment.quote}</p>
                  <cite>- {deployment.author}</cite>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to revolutionize your WiFi infrastructure?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="button button-primary">Contact Our Team</Link>
            <Link to="/solutions" className="button button-secondary">View Solutions</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage; 