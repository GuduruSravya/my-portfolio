import React from 'react';

const SectionBanner = ({ title }) => {
  return (
    <div className="section-banner">
      <h3 style={{color: " rgb(20, 25, 45)"}}>{title}</h3>
      <div className="line-div">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default SectionBanner;
