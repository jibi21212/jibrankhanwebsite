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
    },
    {
      title: "Full-Stack Multiplatform Web App developer",
      company: "Wennovate Consulting",
      period: "Feb 2025 - April 2025",
      location: "Remote (Based in BC, Canada)",
      skills: "Flutter, Dart, Firebase, Firestore",
      points: [
        "Designed and implemented a three-tiered user architecture (Farmer, Consumer, Delivery Agent), enabling distinct platform interactions and workflows.",
"Leveraged Firebase Firestore to architect the backend infrastructure, managing data relationships and transactions for product listings, order processing, and delivery assignments.",
"Integrated Firebase Firestore to provide robust backend support for user authentication, data storage, and real-time updates across the application.",
],
    },
{
  title: "Front-end Developer",
  company: "Woeussi Inc.",
  period: "Mar 2025 - April 2025",
  location: "Toronto, ON",
  skills: "TypeScript, React, Kubernetes, Docker, Grafana",
  points: [
    "Contributed to the front-end development of a tender discovery platform, specializing in component design and implementation using TypeScript and React.",
    "Actively participated in DevOps initiatives, assisting with the setup and configuration of Kubernetes and Docker environments to support cloud infrastructure.",
    "Successfully established a Grafana dashboard for monitoring system performance, enhancing observability for the development team."
  ]
}
  ];

  const technicalSkills = {
    "Languages": ["Python", "Java", "C++", "JavaScript", "SQL", "Kotlin", "Clojure", 'R', 'Dart', 'Typescript'],
    "Frameworks": ["Django", "Flask", "Jakarta EE", 'JDBC', 'Flutter', 'JUnit', 'Leiningen', 'Shadow-cljs', "React.js"], // Moved React.js here as it's often considered a framework
    "Libraries": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "BeautifulSoup", "ggplot2", 'Scikit-learn', 'tensorflow'],
    "Tools/Technologies": ["PgAdmin", "Maven", "WebSocket", "GlassFish", "SQLite", "Firebase", "S3", "ANTLR", "Docker", "Kubernetes", "Grafana"]
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