import React from 'react';

const SectionBanner = ({ title }) => {
  return (
    <div className="section-banner">
      <h3 style={{color: "#141456"}}>{title}</h3>
      <div className="line"></div>
    </div>
  );
};

export default SectionBanner;
