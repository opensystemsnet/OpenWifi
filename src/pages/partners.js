import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/partners.css';

const PartnersPage = () => {
  const hardwarePartners = [
    {
      name: "CIG / Actiontec",
      description: "Leading provider of OpenWifi-certified access points and network equipment.",
      link: "#cig"
    },
    {
      name: "Edgecore / Accton",
      description: "Premium enterprise networking solutions with OpenWifi certification.",
      link: "#edgecore"
    },
    {
      name: "HFCL",
      description: "Innovative network infrastructure solutions for diverse deployment scenarios.",
      link: "#hfcl"
    },
    {
      name: "Cybertan",
      description: "Specialized in high-performance wireless networking equipment.",
      link: "#cybertan"
    },
    {
      name: "Open Systems",
      description: "Enterprise-grade networking solutions with OpenWifi integration.",
      link: "#open-systems"
    }
  ];

  const benefits = [
    {
      title: "Market Access",
      items: [
        "Access to enterprise customers",
        "Joint marketing opportunities",
        "Lead sharing program",
        "Co-branded materials"
      ]
    },
    {
      title: "Technical Support",
      items: [
        "Priority support access",
        "Integration assistance",
        "Technical documentation",
        "Development resources"
      ]
    },
    {
      title: "Certification Program",
      items: [
        "Hardware certification",
        "Compatibility validation",
        "Performance testing",
        "Security assessment"
      ]
    },
    {
      title: "Business Growth",
      items: [
        "Revenue sharing models",
        "Market expansion",
        "Joint ventures",
        "Strategic alliances"
      ]
    }
  ];

  const programs = [
    {
      title: "Hardware Manufacturers",
      items: [
        "Certification program",
        "Design consultation",
        "Integration support",
        "Market access"
      ]
    },
    {
      title: "System Integrators",
      items: [
        "Implementation training",
        "Technical resources",
        "Project support",
        "Revenue sharing"
      ]
    },
    {
      title: "Service Providers",
      items: [
        "White-label solutions",
        "Custom deployment",
        "Managed services",
        "Revenue optimization"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Global Airport Deployment",
      description: "Partnership with leading hardware manufacturers for large-scale deployment.",
      link: "#case-study-1"
    },
    {
      title: "Enterprise Campus Solution",
      description: "Collaboration with system integrators for campus-wide coverage.",
      link: "#case-study-2"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Our Partners | OpenWifi.com" 
        description="Join our growing ecosystem of OpenWifi partners"
      />
      <div className="partners-page">
        <div className="container">
          <div className="partners-header">
            <h1>OpenWifi Partner Ecosystem</h1>
            <p className="lead">
              Join our growing network of hardware manufacturers, system integrators, and service 
              providers delivering enterprise-grade OpenWifi solutions.
            </p>
          </div>

          <section className="hardware-partners">
            <h2>Hardware Partners</h2>
            <div className="partners-grid">
              {hardwarePartners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                  <Link to={partner.link} className="learn-more">Learn More</Link>
                </div>
              ))}
            </div>
          </section>

          <section className="partner-benefits">
            <h2>Partner Benefits</h2>
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

          <section className="partner-programs">
            <h2>Partner Programs</h2>
            <div className="programs-grid">
              {programs.map((program, index) => (
                <div key={index} className="program-card">
                  <h3>{program.title}</h3>
                  <ul>
                    {program.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="become-partner">
            <h2>Become a Partner</h2>
            <p>Join our ecosystem and help shape the future of enterprise WiFi.</p>
            <div className="cta-buttons">
              <Link to="/apply" className="button button-primary">Apply Now</Link>
              <Link to="/contact" className="button button-secondary">Contact Us</Link>
            </div>
          </section>

          <section className="case-studies">
            <h2>Featured Case Studies</h2>
            <div className="case-studies-grid">
              {caseStudies.map((study, index) => (
                <div key={index} className="case-study-card">
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <Link to={study.link} className="learn-more">Read More</Link>
                </div>
              ))}
            </div>
          </section>

          <section className="partner-resources">
            <h2>Partner Resources</h2>
            <ul className="resources-list">
              <li>Technical Documentation</li>
              <li>Marketing Materials</li>
              <li>Support Portal</li>
              <li>Training Programs</li>
            </ul>
            <div className="resources-cta">
              <Link to="#portal" className="button button-primary">Access Partner Portal</Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PartnersPage; 