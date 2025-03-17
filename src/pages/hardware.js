import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hardware from '../components/Hardware';
import '../styles/hardware.css';

const HardwarePage = () => {
  return (
    <Layout>
      <SEO 
        title="Hardware - OpenWifi.com" 
        description="Explore our certified hardware ecosystem. OpenWifi.com offers a wide range of validated access points and network equipment from leading manufacturers."
      />
      
      <div className="hardware-page">
        <Hardware />
      </div>
    </Layout>
  );
};

export default HardwarePage; 