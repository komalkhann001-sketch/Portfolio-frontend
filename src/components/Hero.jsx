
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import profileImg from '../assets/ramsha_profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <motion.h4 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to my portfolio
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span>Ramsha Komal</span>
          </motion.h1>
          <motion.div 
            className="typing-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typewriter
              options={{
                strings: ['HTML Expert', 'CSS Specialist', 'JavaScript Developer', 'React.js Enthusiast', 'MongoDB Designer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Crafting high-performance, visually stunning, and responsive web applications with precision and passion.
          </motion.p>
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="image-circle">
            <img src={profileImg} alt="Ramsha Komal" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
