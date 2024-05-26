import React from 'react';
import Project from './Project';

const Portfolio = () => {
  // Sample project data (replace with your actual project data)
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "path/to/project1-image.jpg",
      demoLink: "https://example.com/demo1",
      githubLink: "https://github.com/example/project1"
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "path/to/project2-image.jpg",
      demoLink: "https://example.com/demo2",
      githubLink: "https://github.com/example/project2"
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-content">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
