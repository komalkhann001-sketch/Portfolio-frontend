
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          RAMSHA<span>KOMAL</span>
        </div>
        <p className="footer-text">
          Building the web of tomorrow, today. Follow me on my journey.
        </p>
        <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Ramsha Komal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
