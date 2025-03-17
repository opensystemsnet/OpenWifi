import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/about.css';

const AboutPage = () => {
  return (
    <Layout>
      <SEO 
        title="About Us | OpenWifi.com" 
        description="Learn about OpenWifi.com's mission to democratize premium Wi-Fi experiences through open-source technology."
      />
      <div className="about-page">
        <div className="container">
          <div className="about-header">
            <h1>About OpenWifi.com</h1>
          </div>

          <div className="about-content">
            <section className="about-section">
              <h2>Company History</h2>
              <p>
                Founded in [Year], OpenWifi.com was established to commercialize the OpenWifi initiative, 
                providing businesses with open-source, disaggregated Wi-Fi solutions.
              </p>
            </section>

            <section className="about-section">
              <h2>Mission and Values</h2>
              <div className="mission">
                <h3>Our Mission</h3>
                <p>
                  To democratize premium Wi-Fi experiences through open-source technology, 
                  fostering innovation and collaboration in the industry.
                </p>
              </div>
              <div className="values">
                <h3>Our Values</h3>
                <ul>
                  <li>Transparency</li>
                  <li>Customer-centricity</li>
                  <li>Continuous improvement</li>
                </ul>
                <p>
                  ensuring our solutions meet the highest standards of quality and reliability.
                </p>
              </div>
            </section>

            <section className="about-section">
              <h2>Our Team</h2>
              <div className="team-grid">
                <div className="team-member">
                  <h3>Robert Muller</h3>
                  <p>Entrepreneur in digital infrastructure, built multiple ISPs and SaaS companies.</p>
                </div>
                <div className="team-member">
                  <h3>Zachary Sterngold</h3>
                  <p>Former General Manager of Boingo, led the world's largest managed Wi-Fi offering.</p>
                </div>
                <div className="team-member">
                  <h3>Jack Raynor</h3>
                  <p>Chair of OpenWifi and OpenLan community, former Senior Director of Software Engineering at CommScope and Arris.</p>
                </div>
                <div className="team-member">
                  <h3>Imre Kaloz</h3>
                  <p>Co-founder of OpenWRT, created the base platform for hundreds of millions of access points and devices.</p>
                </div>
                <div className="team-member">
                  <h3>Firas Shaari</h3>
                  <p>Co-founder of 802.11 Networks, focused on Wi-Fi testing and deployment.</p>
                </div>
              </div>
            </section>

            <section className="about-section cta-section">
              <h2>Get in Touch</h2>
              <div className="cta-buttons">
                <Link to="/contact" className="button button-primary">Contact Us</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 