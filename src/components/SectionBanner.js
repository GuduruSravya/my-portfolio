import React from 'react';

const SectionBanner = ({ title,color}) => {
  return (
    <div className="section-banner">
      <h3 style={{color}}>{title}</h3>
      <div className="line-div">
        <div className="line" style={{backgroundColor:color}}></div>
      </div>
    </div>
  );
};

export default SectionBanner;
