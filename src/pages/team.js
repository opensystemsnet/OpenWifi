import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/team.css';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Robert Muller",
      role: "Chief Executive Officer",
      description: "Entrepreneur in digital infrastructure, built multiple ISPs and SaaS companies.",
      expertise: [
        "Strategic Business Development",
        "Digital Infrastructure",
        "Technology Innovation",
        "Enterprise Solutions",
        "Market Strategy"
      ],
      linkedin: "https://www.linkedin.com/in/robertmuller/",
      path: "/team/robert-muller"
    },
    {
      name: "Zachary Sterngold",
      role: "Chief Commercial Officer",
      description: "Former General Manager of Boingo, led the world's largest managed Wi-Fi offering.",
      expertise: [
        "Commercial Strategy",
        "Market Development",
        "Enterprise Sales",
        "Partner Relations",
        "Business Growth"
      ],
      linkedin: "https://www.linkedin.com/in/zacharys/",
      path: "/team/zachary-sterngold"
    },
    {
      name: "Jack Raynor",
      role: "Chief Technology Officer",
      description: "Chair of OpenWifi and OpenLan community, former Senior Director of Software Engineering at CommScope and Arris.",
      expertise: [
        "Software Architecture",
        "Network Engineering",
        "Open Source",
        "System Design",
        "Technical Leadership"
      ],
      linkedin: "https://www.linkedin.com/in/jackraynor/",
      path: "/team/jack-raynor"
    },
    {
      name: "Imre Kaloz",
      role: "VP of Engineering",
      description: "Co-founder of OpenWRT, created the base platform for hundreds of millions of access points and devices.",
      expertise: [
        "Embedded Systems",
        "Network Protocols",
        "System Architecture",
        "Open Source Development",
        "Platform Engineering"
      ],
      linkedin: "https://www.linkedin.com/in/imrekaloz/",
      path: "/team/imre-kaloz"
    },
    {
      name: "Firas Shaari",
      role: "VP of Solutions",
      description: "Co-founder of 802.11 Networks, focused on Wi-Fi testing and deployment.",
      expertise: [
        "Network Testing",
        "Deployment Strategy",
        "Solution Architecture",
        "Performance Optimization",
        "Quality Assurance"
      ],
      linkedin: "https://www.linkedin.com/in/firasshaari/",
      path: "/team/firas-shaari"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Our Team | OpenWifi.com" 
        description="Meet the industry experts leading OpenWifi.com's innovation in enterprise WiFi solutions."
      />
      <div className="team-page">
        <div className="container">
          <div className="team-header">
            <h1>Leadership Team</h1>
            <p className="lead">
              Meet the experts driving innovation in enterprise WiFi technology. Our leadership team 
              brings decades of experience from industry-leading companies.
            </p>
          </div>

          <section className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-info">
                  <h2>{member.name}</h2>
                  <h3>{member.role}</h3>
                  <p>{member.description}</p>
                </div>
                <div className="member-expertise">
                  <h4>Areas of Expertise</h4>
                  <ul>
                    {member.expertise.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="member-links">
                  <Link to={member.path} className="button button-secondary">View Profile</Link>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </section>

          <section className="join-team">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for talented individuals who share our passion for innovation 
              and excellence in enterprise WiFi solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/careers" className="button button-primary">View Career Opportunities</Link>
              <Link to="/contact" className="button button-secondary">Contact Us</Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage; 