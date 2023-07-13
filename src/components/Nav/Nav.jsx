import React,{useState} from 'react';
import { images } from '../../constants';
import {HiX} from 'react-icons/hi';
import {LuMenu} from 'react-icons/lu'
import {motion} from 'framer-motion';
import './Nav.css'

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (e) =>{
    e.stopPropagation();
    setToggle(prevState => !prevState);
  }
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} className="image" alt="logo"></img>
        </div>
        <ul className='app__navbar-links'>
          {['home','about','projects','skills','contact'].map((section) => (
            <li className="app__flex p-text"key={`link-${section}`}>
              <div className='circle'/>
              <a href={`#${section}`}>{section}</a>
            </li>
          ))}
        </ul>
        <div className='app__navbar-menu'>
            <LuMenu onClick={handleOnClick}/>
            {toggle && (
              <motion.div
              initial={{width:0}}
              animate={{width:300}}
              transition={{duration:0.85,ease:'easeInOut'}}
              className='motion-div'
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 70 }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                >

                </motion.span>
                <HiX onClick={handleOnClick}/>
                <ul>
                {['home','about','projects','skills','contact'].map((section) => (
            <li key={section}>
              <div/>
              <a href={`#${section}`} onClick={()=>setToggle(false)}>{section}</a>
            </li>
            ))}</ul>
              </motion.div>
            )}
        </div>
    </nav>
    
  )
}

export default Nav