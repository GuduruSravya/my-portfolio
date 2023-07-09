import React from 'react';
import './rounded.css';
import { Container } from 'react-bootstrap';

const RoundedSection = ({ skillCount, dsaCount, projectCount }) => {
  const style = {
    color: "#14192d",
    fontFamily:"Acme",
    textDecoration:"underline",
    textAlign:"center",
};

  return (
    <Container>
      <h2 style={style}>
        STATISTICS
      </h2><br/>
    <div className="rounded-section">
      <div className="count-card">
        <h3>{skillCount}</h3>
        <p>VERIFIED SKILLS</p>
      </div>
      <div className="vertical-line"></div>
      <div className="count-card">
        <h3>{dsaCount}</h3>
        <p>DSA PROBLEMS SOLVED</p>
      </div>
      <div className="vertical-line"></div>
      <div className="count-card">
        <h3>{projectCount}</h3>
        <p>PROFESSIONAL PROJECTS</p>
      </div>
    </div>
    </Container>
  );
};

export default RoundedSection;
