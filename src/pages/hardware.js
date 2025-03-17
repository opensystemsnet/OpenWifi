import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import '../styles/hardware.css';

const hardwareCategories = [
  {
    title: 'Indoor Access Points',
    description: 'High-performance indoor WiFi 6 access points certified for enterprise deployments.',
    devices: [
      {
        manufacturer: 'Edgecore',
        model: 'EAP101',
        certificationLevel: 'Enterprise Certified',
        features: [
          'WiFi 6 (802.11ax)',
          '2.4 GHz + 5 GHz',
          'Up to 1.8 Gbps',
          'OFDMA & MU-MIMO',
          'Advanced Security Features'
        ]
      },
      {
        manufacturer: 'CIG',
        model: 'WF-610',
        certificationLevel: 'Enterprise Certified',
        features: [
          'WiFi 6 (802.11ax)',
          'Dual-band Operation',
          '2x2 MIMO',
          'Integrated BLE',
          'Cloud Management Ready'
        ]
      }
    ]
  },
  {
    title: 'Outdoor Access Points',
    description: 'Weather-resistant outdoor access points for wide-area coverage.',
    devices: [
      {
        manufacturer: 'Edgecore',
        model: 'OAP100',
        certificationLevel: 'Enterprise Certified',
        features: [
          'IP67 Rated',
          'WiFi 6 Support',
          '-40°C to 65°C',
          'Dual-band Radio',
          'Advanced Mesh Support'
        ]
      },
      {
        manufacturer: 'HFCL',
        model: 'IO-2100',
        certificationLevel: 'Enterprise Certified',
        features: [
          'Ruggedized Design',
          'High Power Radio',
          'Extended Range',
          'Mesh Support',
          'Enterprise Security'
        ]
      }
    ]
  },
  {
    title: 'Wall Plate Access Points',
    description: 'Compact in-wall access points ideal for hospitality and MDUs.',
    devices: [
      {
        manufacturer: 'CIG',
        model: 'WF-520',
        certificationLevel: 'Enterprise Certified',
        features: [
          'In-wall Design',
          'WiFi 6 Ready',
          'Ethernet Ports',
          'PoE Passthrough',
          'Cloud Management'
        ]
      },
      {
        manufacturer: 'Edgecore',
        model: 'WAP100',
        certificationLevel: 'Enterprise Certified',
        features: [
          'Slim Profile',
          'Dual-band WiFi',
          'Multiple SSIDs',
          'QoS Support',
          'Enterprise Security'
        ]
      }
    ]
  }
];

const HardwarePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Certified Hardware - OpenWifi.com</title>
        <meta name="description" content="Explore our range of OpenWifi.com certified hardware including indoor and outdoor access points designed for enterprise deployments." />
      </Helmet>

      <div className="hardware-page">
        <div className="hardware-header">
          <h1>OpenWifi.com Certified Hardware</h1>
          <p>
            Choose from our selection of enterprise-grade access points, rigorously tested
            and certified to meet OpenWifi.com's high standards for performance, security,
            and reliability.
          </p>
        </div>

        <div className="certification-info">
          <div className="cert-badge">
            <span className="cert-icon">✓</span>
            <div className="cert-details">
              <h3>OpenWifi.com Enterprise Certified</h3>
              <p>
                All listed devices have passed our comprehensive certification process,
                ensuring seamless integration with our cloud platform and enterprise-grade
                performance.
              </p>
            </div>
          </div>
        </div>

        <div className="hardware-categories">
          {hardwareCategories.map((category, index) => (
            <div key={index} className="hardware-category">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              
              <div className="devices-grid">
                {category.devices.map((device, deviceIndex) => (
                  <div key={deviceIndex} className="device-card">
                    <div className="device-header">
                      <h3>{device.model}</h3>
                      <span className="manufacturer">{device.manufacturer}</span>
                      <span className="certification-badge">
                        {device.certificationLevel}
                      </span>
                    </div>
                    <ul className="device-features">
                      {device.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                    <div className="device-actions">
                      <a href="/contact" className="primary-button">
                        Request Quote
                      </a>
                      <a href={`/hardware/${device.model.toLowerCase()}`} className="secondary-button">
                        Specifications
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hardware-cta">
          <h2>Get Your Hardware Certified</h2>
          <p>
            Are you a hardware manufacturer interested in getting your access points
            certified for OpenWifi.com? Our certification program ensures your devices
            meet enterprise standards and work seamlessly with our cloud platform.
          </p>
          <div className="cta-buttons">
            <a href="/certification" className="primary-button">
              Certification Program
            </a>
            <a href="/contact" className="secondary-button">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HardwarePage;

export const Head = () => (
  <Helmet>
    <html lang="en" />
  </Helmet>
); 