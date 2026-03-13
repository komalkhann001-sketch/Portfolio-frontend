
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import './Projects.css';

// Import project images
import ecommerceImg from '../assets/projects/ecommerce.png';
import taskManagerImg from '../assets/projects/task_manager.png';
import blogImg from '../assets/projects/blog.png';
import healthPortalImg from '../assets/projects/health_portal.png';

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
      title: 'Smart Task Manager',
      category: 'Frontend Development',
      description: 'AI-powered task management with drag-and-drop and team collaboration.',
      tags: ['React', 'Framer Motion', 'Firebase'],
      img: taskManagerImg,
      demo: '#',
      github: '#'
    },
    {
      title: 'Creative Studio Blog',
      category: 'UI/UX Design',
      description: 'A visually immersive blog for designers with smooth page transitions.',
      tags: ['Next.js', 'Tailwind', 'Sanity'],
      img: blogImg,
      demo: '#',
      github: '#'
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
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-cloud">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">#{tag}</span>
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
