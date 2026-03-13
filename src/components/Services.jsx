
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaPaintBrush, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Web Development',
      icon: <FaCode />,
      desc: 'Building robust and scalable web applications using the latest technologies.'
    },
    {
      title: 'Frontend Development',
      icon: <FaLaptopCode />,
      desc: 'Creating interactive and dynamic user interfaces with React.js and modern CSS.'
    },
    {
      title: 'MERN Stack Development',
      icon: <FaDatabase />,
      desc: 'Developing full-stack applications using MongoDB, Express, React, and Node.js.'
    },
    {
      title: 'Landing Page Developer',
      icon: <FaRocket />,
      desc: 'Designing high-converting landing pages that capture attention and drive results.'
    },
    {
      title: 'UI/UX Designer',
      icon: <FaPaintBrush />,
      desc: 'Crafting beautiful and intuitive designs that provide a seamless user experience.'
    },
    {
      title: 'Responsive Design',
      icon: <FaMobileAlt />,
      desc: 'Ensuring your website looks perfect on all devices, from desktops to smartphones.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">My <span>Services</span></h2>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contact" className="read-more">Learn More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
