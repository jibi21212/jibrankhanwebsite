// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-text">
            <p>
              I'm currently looking for Summer 2025 internship opportunities. 
              If you have any questions or would like to discuss potential opportunities, 
              feel free to reach out!
            </p>
          </div>
          <div className="contact-links">
            <a 
              href="mailto:jibkhan209@gmail.com" 
              className="contact-item email-link"
            >
              <span className="contact-label">Email Me</span>
              <span className="contact-value">jibkhan209@gmail.com</span>
            </a>
            <a 
              href="https://github.com/jibi21212" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item github-link"
            >
              <span className="contact-label">Check Out My Work</span>
              <span className="contact-value">GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;