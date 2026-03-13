
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPenNib, FaSearch, FaBook, FaTerminal, FaWind } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const devSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26', percentage: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4', percentage: 90 },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', percentage: 85 },
    { name: 'React.js', icon: <FaReact />, color: '#61dbfb', percentage: 90 },
    { name: 'Tailwind CSS', icon: <FaWind />, color: '#38bdf8', percentage: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', percentage: 75 },
    { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', percentage: 70 },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', percentage: 80 },
    { name: 'Git & Terminal', icon: <FaTerminal />, color: '#f1502f', percentage: 85 },
  ];

  const writingSkills = [
    { name: 'Content Writing', icon: <FaPenNib />, color: '#ff9f43', percentage: 95 },
    { name: 'Technical Writing', icon: <FaBook />, color: '#00d2ff', percentage: 85 },
    { name: 'SEO Optimization', icon: <FaSearch />, color: '#2ecc71', percentage: 90 },
    { name: 'Creative Storytelling', icon: <FaPenNib />, color: '#e84393', percentage: 80 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Professional <span>Skills</span></h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="category-title"
            >
              Development <span>Expertise</span>
            </motion.h3>
            <div className="skills-grid">
              {devSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="skill-info">
                    <div className="skill-icon-wrapper" style={{ '--icon-color': skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-details">
                      <h3>{skill.name}</h3>
                      <div className="progress-bar-wrapper">
                        <div className="progress-bar">
                          <motion.div 
                            className="progress-fill" 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ backgroundColor: skill.color }}
                          ></motion.div>
                        </div>
                        <span className="percentage">{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="skills-category mt-5">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="category-title"
            >
              Writing & <span>Creativity</span>
            </motion.h3>
            <div className="skills-grid">
              {writingSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="skill-info">
                    <div className="skill-icon-wrapper" style={{ '--icon-color': skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-details">
                      <h3>{skill.name}</h3>
                      <div className="progress-bar-wrapper">
                        <div className="progress-bar">
                          <motion.div 
                            className="progress-fill" 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ backgroundColor: skill.color }}
                          ></motion.div>
                        </div>
                        <span className="percentage">{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
