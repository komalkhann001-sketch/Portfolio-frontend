
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="about-border">
              <div className="about-bg-box"></div>
              <div className="about-text-content">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>Professional <span>Bio</span></h3>
            <p>
              I am a dedicated <strong>Frontend Developer</strong> and <strong>UI/UX Designer</strong> who specializes in building exceptional digital experiences. With a deep understanding of <strong>React.js</strong> and modern web technologies, I transform complex ideas into elegant, responsive, and user-centric interfaces.
            </p>
            <p>
              My goal is to combine technical expertise with creative vision to deliver high-quality web solutions. Whether it's a simple landing page or a complex full-stack application with MongoDB, I ensure every pixel is perfect and every interaction is seamless.
            </p>
            <div className="personal-details">
              <div className="detail">
                <span>Name:</span> Ramsha Komal
              </div>
              <div className="detail">
                <span>Email:</span> ramshakomal880@gmail.com
              </div>
              <div className="detail">
                <span>Location:</span> Pakistan, Remote
              </div>
              <div className="detail">
                <span>Type:</span> Freelance / Full Time
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">Download Resume</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
