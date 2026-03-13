
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import './Projects.css';

// Import project images
import ecommerceImg from '../assets/projects/ecommerce.png';
import figmaFoodImg from '../assets/projects/figma_food.png';
import figmaDashImg from '../assets/projects/figma_dashboard.png';
import healthPortalImg from '../assets/projects/health_portal.png';
import { FaFigma } from 'react-icons/fa';

const Projects = () => {
  const projectsList = [
    {
      title: 'Global E-Commerce',
      category: 'MERN Stack',
      description: 'A full-scale online marketplace with real-time payments and inventory.',
      tags: ['React', 'Node', 'MongoDB'],
      img: ecommerceImg,
      demo: '#',
      github: '#'
    },
    {
      title: 'Foodie Express UI',
      category: 'Figma Design',
      description: 'Modern mobile app UI/UX design for food delivery with vibrant aesthetics.',
      tags: ['Figma', 'UI/UX', 'Mobile'],
      img: figmaFoodImg,
      demo: '#',
      github: '#',
      icon: <FaFigma />
    },
    {
      title: 'Crypto Pulse Dashboard',
      category: 'UI/UX Specialization',
      description: 'Advanced financial dashboard design with cyberpunk glassmorphic elements.',
      tags: ['Figma', 'Prototyping', 'Modern UI'],
      img: figmaDashImg,
      demo: '#',
      github: '#',
      icon: <FaFigma />
    },
    {
      title: 'Healthy Living Portal',
      category: 'Landing Page',
      description: 'A high-conversion landing page for wellness brands with parallax effects.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      img: healthPortalImg,
      demo: '#',
      github: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Impressive <span>Projects</span></h2>
        </motion.div>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="project-img-container">
                <img src={project.img} alt={project.title} />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="overlay-links">
                    <motion.a 
                      href={project.github} 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </motion.div>
                <div className="project-category-tag">{project.category}</div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.icon && <span className="category-icon">{project.icon}</span>}
                </div>
                <p>{project.description}</p>
                <div className="tag-cloud">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-chip">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="more-work"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button className="btn btn-outline footer-btn">
            View All Projects <FaRocket />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
