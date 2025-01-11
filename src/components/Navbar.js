import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Options for the observer
    const options = {
      root: null, // relative to viewport
      rootMargin: '-50% 0px', // trigger at middle of viewport
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    setActiveSection(sectionId); // Set active immediately on click

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { 
      id: 'resume', 
      label: 'Resume',
      isExternal: true,
      href: '/files/MJK_winter2025_resume.pdf'
    }
  ];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1>Jibran Khan</h1>
        <div className="nav-right">
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    className="nav-resume-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.id, item.isExternal, item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.id, false);
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a 
            href="https://www.linkedin.com/in/jibran-khan-927b6a270/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;