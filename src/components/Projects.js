// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "UFC Data webscraper",
      github: "https://github.com/jibi21212/UFC_web_scraper",
      period: "Nov 2024 - Present",
      technologies: "BeautifulSoup, SQLite, Selenium",
      points: [
        "Python script to web scrape using Requests, Regex, and BeautifulSoup to automate the extraction of UFC fighter and bout data, storing structured statistics in a SQL database."
      ],
      showFuturePlans: false,
    },
    {
      title: "UFC Stats Tracker",
      github: "https://github.com/jibi21212/UFC_WEBSITE",
      period: "Nov 2024 - Present",
      technologies: "Django, SQLite",
      points: [
        "Developed a Django-based front end with an advanced query tool, enabling users to search the database by fighter names or statistics and navigate seamlessly to individual fighter and bout pages for detailed information.",
        "Designed an efficient data pipeline to automate the scraping, cleaning, and loading of data into the database, ensuring accuracy and consistency."
      ],
      showFuturePlans: false,
      futurePlans: [
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
    },
    {
      title: "Clueless",
      github: "https://github.com/jibi21212/clueless",
      period: "Feb 7-9 2025",
      technologies: "Firebase, React.js, Flask, GPT-2",
      points:[
        "Clueless is a hackathon project designed to simplify outfit selection using AI.",
        "The app allows users to upload pictures of their wardrobe, categorize items with tags, and sync events from their calendar.",
        "Based on user preferences, weather conditions, and event types, Clueless intelligently suggests outfit combinations to streamline daily dressing decisions."
      ],
      showFuturePlans: false
    },
    {
      title: "Stock Market Prediction",
      github: "https://github.com/SajidAnas/Stock-Market-Prediction",
      period: "May 2025 - Present",
      technologies: "tensorflow, scikit-learn, yfinance, streamlit, panadas, numpy, matplotlib",
      points: [
        "Developed a predictive analytics tool to forecast stock market prices by leveraging historical data fetched dynamically using the yfinance library.",
        "Implemented an LSTM (Long Short-Term Memory) neural network using TensorFlow and Keras to model temporal dependencies in stock price data, processing closing prices to predict future trends.",
        "Designed an interactive web application prototype with Streamlit, enabling users to input stock symbols, trigger model training, and visualize actual versus predicted stock prices with Matplotlib.",
        "Incorporated data preprocessing techniques such as MinMax scaling (scikit-learn) for optimizing model input and evaluated prediction accuracy using Root Mean Squared Error (RMSE).",
        "This project is currently a functional prototype demonstrating core prediction and visualization capabilities." 
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