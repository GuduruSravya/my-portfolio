import React from 'react';
import {motion} from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

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
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>💁‍♀️</span>
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
        {[{img:images.github,imgUrl:"https://github.com/GuduruSravya"},
          {img:images.linkedin,imgUrl:"https://www.linkedin.com/in/sravya-guduru/"},
          {img:images.leetcode,imgUrl:"https://leetcode.com/Sravya_guduru/"}].map((obj,index)=>(
          <a href={obj.imgUrl} target="_blank" key={`logo-${index}`}>
          <div className='logo-cmp app__flex'>
          <img src={obj.img} alt="logo"/>
          </div></a> 
        ))}
      </motion.div>
    </div>
  )
};

export default AppWrap(Header,'home');

