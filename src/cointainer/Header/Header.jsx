import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-scroll';

import {motion} from 'framer-motion';
import { images } from '../../constants';

import './header.css';
const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
 

  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>🙋‍♀️</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'><span>Sravya</span></h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className="p-text">Full Stack Developer</p>
            <p className="p-text">Software Developer</p>
            <p className="p-text">Programmer</p>
          </div>
        </div>

      </motion.div>
      <motion.div
       whileInView={{opacity:[0,1]}}
       transition={{duration:0.5,delayChildren:0.5}}
       className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg"></img>
        

      </motion.div>
      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[images.node,images.react,images.python,images.amazon].map((logo,index)=>(
          <div className='logo-cmp app__flex' key={`logo-${index}`}>
            <img src={logo} alt="logo"/>

          </div>
        ))}
        
      </motion.div>
    </div>
  )
};

export default Header;

