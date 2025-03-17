import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import TeamGrid from './TeamGrid'
import heroImage from '../images/hero-network.svg'
import Hero from './Hero'
import Solutions from './Solutions'
import Features from './Features'
import Hardware from './Hardware'
import Documentation from './Documentation'
import Contact from './Contact'
import '../styles/home.css'

const HomePage = ({ data }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="home-page">
      <Hero />
      <section id="solutions" className="section">
        <Solutions />
      </section>
      <section id="features" className="section">
        <Features />
      </section>
      <section id="hardware" className="section">
        <Hardware />
      </section>
      <section id="documentation" className="section">
        <Documentation />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  )
}

export default HomePage 