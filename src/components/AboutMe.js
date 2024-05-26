import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-me-content">
          <div className="about-me-photo">
            <img src="path/to/your/photo.jpg" alt="Your Name" />
          </div>
          <div className="about-me-bio">
            <p>
              Write a brief bio about yourself here. You can talk about your background, skills, interests, and anything else you think is relevant.
            </p>
            <p>
              Don't forget to include a call-to-action, such as inviting visitors to explore your portfolio, contact you, or connect with you on social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
