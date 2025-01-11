// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "UFC Stats Tracker",
      github: "https://github.com/jibi21212/UFC_WEBSITE",
      period: "Nov 2024 - Present",
      technologies: "Django, BeautifulSoup, PostgreSQL",
      points: [
        "Developed a Django-based front end with an advanced query tool, enabling users to search the database by fighter names or statistics and navigate seamlessly to individual fighter and bout pages for detailed information.",
        "Python script to web scrape using Requests, Regex, and BeautifulSoup to automate the extraction of UFC fighter and bout data, storing structured statistics in a SQL database.",
        "Designed an efficient data pipeline to automate the scraping, cleaning, and loading of data into the database, ensuring accuracy and consistency."
      ],
      showFuturePlans: true,
      futurePlans: [
        "Deploy and host the application using Docker containers, ensuring consistent performance across different environments and enabling easier scaling and maintenance",
        "Implement machine learning models to predict fight outcomes based on historical data",
        "Add interactive data visualizations for fighter statistics and career trajectories",
        "Develop an API to make the UFC statistics database accessible to other developers",
        "Create a feature for users to simulate hypothetical matchups between fighters"
      ]
    },
    {
      title: "Crime Statistics in Canada (Data Analysis)",
      github: "https://github.com/jibi21212/Crime-Statistics-in-Canada---Data-Analysis",
      period: "May 2024",
      technologies: "Pandas, NumPy, Matplotlib, Seaborn",
      points: [
        "Demonstrated proficiency in data manipulation and cleaning using Pandas, enhancing the quality and reliability of the dataset for analysis.",
        "Developed clear and informative visualizations using Matplotlib to effectively communicate findings to both technical and non-technical audiences.",
        "Authored a comprehensive report summarizing insights on crime dynamics, contributing valuable information for potential policy development and public awareness."
      ],
      showFuturePlans: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  View on GitHub
                </a>
              </div>
              <p className="technologies">{project.technologies}</p>
              <div className="project-details">
                <div className="current-features">
                   {project.futurePlans && <h4>Current Features</h4>}
                    <ul className="project-points">
                      {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                </div>
                {project.showFuturePlans && project.futurePlans && (
                  <div className="future-plans">
                    <h4>Future Development Plans</h4>
                    <ul className="project-points">
                      {project.futurePlans.map((plan, i) => (
                        <li key={i}>{plan}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;