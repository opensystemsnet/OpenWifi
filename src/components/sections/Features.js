import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'WLAN Controller',
      description: 'Enterprise-grade wireless network management with advanced controls.',
      icon: '📡',
      details: [
        'Auto Channel & Cell Size',
        'Client & Band Steering',
        'Mesh Network Support',
        'QoS & App Detection'
      ]
    },
    {
      title: 'Network Management',
      description: 'Comprehensive tools for efficient network operations.',
      icon: '🔄',
      details: [
        'Location Hierarchy',
        'Profile Management',
        'Firmware Control',
        'Real-time Analytics'
      ]
    },
    {
      title: 'Remote Troubleshooting',
      description: 'Advanced diagnostic tools for rapid issue resolution.',
      icon: '🔍',
      details: [
        'Historical Analysis',
        'Event Tracking',
        'Remote AP Access',
        'PCAP Tracing'
      ]
    },
    {
      title: 'Enterprise Applications',
      description: 'Business-focused features for enhanced control.',
      icon: '💼',
      details: [
        'Tenant Management',
        'OpenRoaming Support',
        'Radius PSK for MDUs',
        'Custom Policies'
      ]
    }
  ];

  const marketSegments = [
    {
      title: 'Hospitality',
      icon: '🏨',
      description: 'Seamless guest WiFi experiences with advanced management capabilities.'
    },
    {
      title: 'MDU & Senior Living',
      icon: '🏢',
      description: 'Reliable, secure connectivity solutions for residential communities.'
    },
    {
      title: 'Education',
      icon: '🎓',
      description: 'Campus-wide coverage with advanced security and control.'
    },
    {
      title: 'SMB',
      icon: '💼',
      description: 'Enterprise-grade solutions scaled for growing businesses.'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Enterprise-Grade Capabilities</h2>
          <p>Complete control over your wireless network infrastructure with advanced management tools.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul className="feature-details">
                {feature.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="market-segments">
          <h2>Industries We Serve</h2>
          <div className="segments-grid">
            {marketSegments.map((segment, index) => (
              <div key={index} className="segment-card">
                <div className="segment-icon">{segment.icon}</div>
                <h3>{segment.title}</h3>
                <p>{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 