import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import '../styles/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'general'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - OpenWifi.com</title>
        <meta name="description" content="Get in touch with OpenWifi.com for enterprise WiFi solutions, hardware certification, and technical support." />
      </Helmet>

      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Ready to transform your wireless network? Our team is here to help you
            get started with OpenWifi.com's enterprise solutions.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h2>Sales Inquiries</h2>
              <p>
                Interested in our enterprise solutions or hardware certification?
                Our sales team is ready to assist you.
              </p>
              <a href="mailto:sales@openwifi.com" className="contact-link">
                sales@openwifi.com
              </a>
            </div>

            <div className="info-section">
              <h2>Technical Support</h2>
              <p>
                Need help with your OpenWifi.com deployment? Our support team is
                available 24/7.
              </p>
              <a href="mailto:support@openwifi.com" className="contact-link">
                support@openwifi.com
              </a>
            </div>

            <div className="info-section">
              <h2>Office Location</h2>
              <p>
                123 Tech Plaza<br />
                Suite 400<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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
                <label htmlFor="email">Email Address *</label>
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
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest">I'm interested in:</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="certification">Hardware Certification</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => (
  <Helmet>
    <html lang="en" />
  </Helmet>
); 