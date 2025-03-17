import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import '../styles/404.css';

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>404: Page Not Found - OpenWiFi</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="not-found">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="primary-button">
              Return Home
            </Link>
            <Link to="/contact" className="secondary-button">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <Helmet>
    <html lang="en" />
  </Helmet>
); 