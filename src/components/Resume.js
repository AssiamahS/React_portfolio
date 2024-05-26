import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2>Resume</h2>
        <div className="resume-content">
          <h3>Education</h3>
          <div className="education">
            <p>Bachelor's Degree in Computer Science - University Name (Year)</p>
            <p>Master's Degree in Software Engineering - University Name (Year)</p>
          </div>
          <h3>Experience</h3>
          <div className="experience">
            <p>Software Developer - Company Name (Year - Year)</p>
            <p>Frontend Engineer - Company Name (Year - Year)</p>
          </div>
          <h3>Skills</h3>
          <div className="skills">
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL</li>
              <li>Git</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
