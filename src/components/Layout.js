import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Solutions from './Solutions';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>OpenWiFi - Enterprise-Grade Cloud-Managed WiFi Solutions</title>
        <meta name="description" content="Deploy and manage secure, high-performance wireless networks with our cloud-based OpenWiFi platform. Experience the future of enterprise WiFi." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Header />
      
      <main>
        <Hero />
        <Features />
        <Solutions />
        {children}
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Layout; 