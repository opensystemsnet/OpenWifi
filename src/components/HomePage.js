import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import TeamGrid from './TeamGrid'
import heroImage from '../images/hero-network.svg'

const HomePage = ({ data }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Enterprise WiFi Without Compromise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Open-source, enterprise-grade WiFi solutions for service providers and large organizations
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="primary">Schedule a Demo</button>
            <button className="secondary">View Solutions</button>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={heroImage} alt="Network Visualization" />
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <motion.h2 
          {...fadeIn}
          viewport={{ once: true }}
        >
          Our Solutions
        </motion.h2>
        <div className="solutions-grid">
          <motion.div 
            className="solution-card"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            <h3>Hosted Commercial OpenWifi</h3>
            <p>Deploy enterprise WiFi networks without the complexity of hardware management. Scale effortlessly, secure inherently.</p>
            <ul>
              <li>Seamless scalability</li>
              <li>Zero-touch provisioning</li>
              <li>Enterprise-grade security</li>
              <li>24/7 expert support</li>
            </ul>
          </motion.div>
          <motion.div 
            className="solution-card"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            <h3>Hardware Certification</h3>
            <p>Ensure your devices meet the highest OpenWifi standards with our comprehensive certification program.</p>
            <Link to="/services/certification" className="learn-more">Learn More →</Link>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="enterprise-solutions">
        <motion.h2 
          {...fadeIn}
          viewport={{ once: true }}
        >
          Enterprise Solutions
        </motion.h2>
        <div className="solutions-grid">
          <motion.div 
            className="solution-card"
            whileHover={{ scale: 1.02 }}
          >
            <h3>For Large Businesses</h3>
            <ul>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
              <li>Advanced analytics</li>
              <li>SLA guarantees</li>
            </ul>
          </motion.div>
          <motion.div 
            className="solution-card"
            whileHover={{ scale: 1.02 }}
          >
            <h3>For Service Providers</h3>
            <ul>
              <li>Brand customization</li>
              <li>Multi-tenant management</li>
              <li>Revenue optimization</li>
              <li>Automated deployment</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <motion.h2 
          {...fadeIn}
          viewport={{ once: true }}
        >
          Featured Partners
        </motion.h2>
        <div className="partner-logos">
          {/* Add partner logos */}
        </div>
        <motion.div 
          className="partners-cta"
          {...fadeIn}
          viewport={{ once: true }}
        >
          <Link to="/partners" className="button secondary">View All Partners</Link>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <motion.div 
          className="testimonial"
          {...fadeIn}
          viewport={{ once: true }}
        >
          <blockquote>
            "OpenWifi.com transformed our passenger connectivity experience while reducing operational costs by 40%."
          </blockquote>
          <cite>- International Airport Authority</cite>
        </motion.div>
      </section>

      {/* Team Section Preview */}
      <section className="team-preview">
        <motion.h2 
          {...fadeIn}
          viewport={{ once: true }}
        >
          Leadership Team
        </motion.h2>
        <TeamGrid preview={true} />
        <motion.div 
          className="team-cta"
          {...fadeIn}
          viewport={{ once: true }}
        >
          <Link to="/team" className="button secondary">View Full Team</Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="cta"
        {...fadeIn}
        viewport={{ once: true }}
      >
        <h2>Ready to revolutionize your WiFi infrastructure?</h2>
        <div className="cta-buttons">
          <Link to="/contact" className="button primary">Contact Our Team</Link>
          <Link to="/solutions" className="button secondary">View Solutions</Link>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage 