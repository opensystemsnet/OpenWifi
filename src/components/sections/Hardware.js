import React from 'react';
import './Hardware.css';

const Hardware = () => {
  const hardware = [
    {
      category: 'Indoor Access Points',
      devices: [
        {
          manufacturer: 'Edgecore',
          model: 'EAP101',
          features: [
            'Enterprise-grade',
            '2×2 Wi-Fi 6',
            'Indoor AP',
            'Cloud-managed'
          ]
        },
        {
          manufacturer: 'Actiontec',
          model: 'WF-188N',
          features: [
            'Dual-band',
            '2×2 MU-MIMO',
            'Wi-Fi 6',
            'Indoor AP'
          ]
        }
      ]
    },
    {
      category: 'Outdoor Access Points',
      devices: [
        {
          manufacturer: 'Actiontec',
          model: 'WF-660AG',
          features: [
            'IP67 rated',
            'Dual-band',
            '2×2 MU-MIMO',
            'WiFi 6'
          ]
        },
        {
          manufacturer: 'Edgecore',
          model: 'OAP101-6E',
          features: [
            'IP66/68 rated',
            'Tri-band',
            'Wi-Fi 6E',
            'Enterprise-grade'
          ]
        }
      ]
    },
    {
      category: 'Wall Plate Access Points',
      devices: [
        {
          manufacturer: 'Cybertan',
          model: 'AX3000',
          features: [
            'Wi-Fi 6',
            'PoE support',
            'In-wall design',
            'High performance'
          ]
        }
      ]
    }
  ];

  return (
    <section className="hardware">
      <div className="hardware-container">
        <div className="hardware-header">
          <span className="overline">Certified Hardware</span>
          <h2>OpenWiFi Certified Devices</h2>
          <p>Enterprise-grade access points from leading manufacturers, all certified for OpenWiFi compatibility.</p>
        </div>

        <div className="hardware-grid">
          {hardware.map((category, index) => (
            <div key={index} className="category-section">
              <h3 className="category-title">{category.category}</h3>
              <div className="devices-grid">
                {category.devices.map((device, i) => (
                  <div key={i} className="device-card">
                    <div className="device-header">
                      <h4>{device.model}</h4>
                      <span className="manufacturer">{device.manufacturer}</span>
                    </div>
                    <ul className="device-features">
                      {device.features.map((feature, j) => (
                        <li key={j}>{feature}</li>
                      ))}
                    </ul>
                    <button className="learn-more">Learn More</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hardware-cta">
          <div className="cta-content">
            <h3>Need help choosing the right hardware?</h3>
            <p>Our experts can help you select the perfect devices for your deployment.</p>
            <button className="button primary">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware; 