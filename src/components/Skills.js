import React from 'react';
import './Skills.css';
import html from '../assets/html.png';

const Skills = () => {
  const skills = [
    { name: 'HTML', logo: {html} },
    { name: 'CSS', logo: 'css-logo.png' },
    { name: 'JavaScript', logo: 'javascript-logo.png' },
    { name: 'React', logo: 'react-logo.png' },
    { name: 'Responsive Web Design', logo: 'rwd-logo.png' },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="hexagon"></div>
            
            <img src={html}/>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;