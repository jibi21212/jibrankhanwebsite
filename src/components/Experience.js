// src/components/Experience.js
import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      title: "Data Quality Assurance Engineer",
      company: "Outlier.ai",
      period: "Sep 2024 - Present",
      location: "Remote",
      skills: "RLHF, Python, LaTeX, Mathematics",
      points: [
        "Performed model validation by working with AI models, evaluating their problem-solving processes and final answers to ensure accuracy and reliability.",
        "Conducted failure testing by inducing logical errors in models to assess robustness and identify potential weaknesses.",
        "Evaluated models on various dimensions such as instruction following, verbosity, and correctness to enhance overall performance."
      ]
    }
  ];

  const technicalSkills = {
    "Languages": ["Python", "Java", "C++", "JavaScript", "SQL", "Kotlin", "Clojure", 'R', 'Dart'],
    "Frameworks": ["Django", "Flask", "Jakarta EE", 'JDBC', 'Flutter', 'JUnit'],
    "Libraries": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "BeautifulSoup", "React.js", "ggplot2"],
    "Tools/Technologies": ["PgAdmin", "Maven", "WebSocket", "GlassFish", "SQLite", "Firebase", "S3", "ANTLR"]
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period} | {exp.location}</p>
                <p className="skills">{exp.skills}</p>
              </div>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-grid">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <div className="skill-tags">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;