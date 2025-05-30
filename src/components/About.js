// src/components/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p className="introduction">
              I am a Computer Science student at Ontario Tech University, passionate about exploring the intersections of data science and software development.
            </p>
            
            <div className="about-details">
              <div className="technical-background">
                <h3>Technical Background</h3>
                <p>
                My journey in computer science has given me a versatile perspective on software development, from high-level scripting in Python to low-level programming in C++. I embrace both object-oriented and functional programming paradigms, allowing me to approach problems with different architectural mindsets.
                </p>
              </div>

              <div className="interests">
                <h3>Areas of Interest</h3>
                <div className="interests-grid">
                  <div className="interest-card">
                    <h4>Data Science</h4>
                    <p>Passionate about extracting meaningful insights from complex datasets, with experience in data analysis using Python libraries like Pandas and NumPy. Currently exploring machine learning applications and statistical analysis techniques.</p>
                  </div>
                  
                  <div className="interest-card">
                    <h4>Software Development</h4>
                    <p>Focused on building efficient, scalable applications. Experienced in both frontend and backend development, with particular interest in creating data-driven web applications using frameworks like Django and React.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-goals">
              <h3>Current Focus</h3>
              <p>
                Actively seeking internship and part-time opportunities for Fall 2025, where I can both apply and expand my technical skills in real-world scenarios. Particularly interested in roles of Data Science & Software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;