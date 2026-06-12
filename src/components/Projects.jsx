
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import './Projects.css';

// Import project images
import ecommerceImg from '../assets/projects/ecommerce.png';
import taskManagerImg from '../assets/projects/task_manager.png';
import blogImg from '../assets/projects/blog.png';
import healthPortalImg from '../assets/projects/health_portal.png';
import dashboardImg from '../assets/projects/figma_dashboard.png';
import lumiereImg from '../assets/projects/lumiere_skincare.png';
import saasKitImg from '../assets/projects/saas_kit.png';
import caresyncImg from '../assets/projects/caresync_dashboard.png';
import mernBoilerplateImg from '../assets/projects/mern_boilerplate.png';

const Projects = () => {
  const projectsList = [
    {
      title: 'Lumiere Skincare Website',
      category: 'E-Commerce / Full Stack',
      description: 'A premium, elegant e-commerce experience for a skincare brand, featuring custom product showcases and an administrative backend dashboard.',
      tags: ['React', 'Vanilla CSS', 'Node.js', 'MongoDB'],
      img: lumiereImg,
      demo: 'https://final-project-website-two.vercel.app/',
      github: '#'
    },
    {
      title: 'CareSync — Smart Clinic System',
      category: 'MERN Stack',
      description: 'A comprehensive healthcare clinic management system with digital appointments, prescription workflows, and secure patient histories.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      img: caresyncImg,
      demo: 'https://care-sync-frontend.vercel.app/dashboard',
      github: '#'
    },
    {
      title: 'Multi-Tenant SaaS Platform',
      category: 'SaaS / Cloud App',
      description: 'A fully live production-ready SaaS application featuring Stripe billing integration, multi-tenant architecture, and secure JWT authorization.',
      tags: ['React', 'Stripe API', 'JWT', 'Node.js'],
      img: saasKitImg,
      demo: 'https://saas-starter-kit-frontend.vercel.app/',
      github: '#'
    },
    {
      title: 'MERN Production Boilerplate',
      category: 'Developer Tools',
      description: 'A production-grade React & Node starter template sold on Payhip, pre-configured to save developers weeks of setup time.',
      tags: ['React', 'Node.js', 'Express', 'Payhip Store'],
      img: mernBoilerplateImg,
      demo: 'https://mern-boilerplate-chi.vercel.app/',
      github: '#'
    },

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
                      target={project.github === '#' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      target={project.demo === '#' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
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
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-cloud">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">#{tag}</span>
                  ))}
                </div>
                
                {/* Mobile action links */}
                <div className="project-actions-mobile">
                  {project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="action-btn-mobile github-btn"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  <a 
                    href={project.demo} 
                    target={project.demo === '#' ? '_self' : '_blank'} 
                    rel="noopener noreferrer" 
                    className="action-btn-mobile demo-btn"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
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
