import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="contact">
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="contact-content" variants={itemVariants}>
          <h2>Get in Touch</h2>
          <p>
            Ready to transform your wireless network? Our team of experts is here to help
            you implement the perfect OpenWiFi solution for your organization.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </motion.form>

          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Location</h3>
                <p>123 Enterprise Way<br />Silicon Valley, CA 94025</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>contact@openwifi.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Support Hours</h3>
                <p>24/7 Enterprise Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 