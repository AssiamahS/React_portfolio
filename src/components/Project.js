import React from 'react';

const Project = ({ title, description, image, demoLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Project;
