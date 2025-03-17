import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Features from '../components/Features';
import '../styles/features.css';

const FeaturesPage = () => {
  return (
    <Layout>
      <SEO 
        title="Features - OpenWifi.com" 
        description="Explore the comprehensive features of OpenWifi.com's enterprise-grade WiFi solutions. From advanced security to cloud management, discover what makes our platform unique."
      />
      
      <div className="features-page">
        <Features />
      </div>
    </Layout>
  );
};

export default FeaturesPage; 