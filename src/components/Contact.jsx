
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ loading: false, success: false, error: data.msg || 'Something went wrong' });
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setStatus({ loading: false, success: false, error: 'Could not connect to server' });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>Contact Details</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-box"><FaPhone /></div>
                <div>
                  <h4>Call Me</h4>
                  <p>+92 300 0000000</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><FaEnvelope /></div>
                <div>
                  <h4>Email Me</h4>
                  <p>ramshakomal880@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Location</h4>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${status.loading ? 'loading' : ''}`}
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </button>

            {status.success && (
              <motion.div 
                className="status-message success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaCheckCircle /> Message sent successfully!
              </motion.div>
            )}

            {status.error && (
              <motion.div 
                className="status-message error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaExclamationCircle /> {status.error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
