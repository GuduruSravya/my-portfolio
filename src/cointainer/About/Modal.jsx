import React from 'react';
import images from '../../constants/images';
import {IoCloseCircleOutline} from "react-icons/io5";
import {motion} from 'framer-motion';
import './modal.css';

const Modal = ({data,close}) => {
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
  
  return (
    
    <div className='modal'>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="model__img-div"
      >

        
      <img className='modal__image' alt="about_data" src={data.imgUrl}></img>
      </motion.div>
      
      <div className="modal__info">
       {(data.type==="edu")?
       <div className="modal__row">
       <h2 className='head-text' style={{fontSize:"2rem"}}>Bachelors</h2>
       <div>
       <span className='p-text' style={{color:"#004aad"}}>University</span><p className='p-text'>Jawaharlal Nehru Technological<br/>University</p>
       <span className='p-text' style={{color:"#004aad"}}>Year</span><p className='p-text'>2018</p>
       <span className='p-text' style={{color:"#004aad"}}>Major</span><p className='p-text'>Information Technology</p>
       <span className='p-text' style={{color:"#004aad"}}>CGPA</span><p className='p-text'>9.3/10.0</p>
       
       </div>
       <h2 className='head-text' style={{fontSize:"2rem"}}>Masters</h2>
       <div>
       <span className='p-text' style={{color:"#004aad"}}>University</span><p className='p-text'>University of Texas at Arlington</p>
       <span className='p-text' style={{color:"#004aad"}}>Year</span><p className='p-text'>2023</p>
       <span className='p-text' style={{color:"#004aad"}}>Major</span><p className='p-text'>Computer Science</p>
       <span className='p-text' style={{color:"#004aad"}}>GPA</span><p className='p-text'>4.0/4.0</p>
       
       </div>
       
       </div>
       
       :(data.type==="honors")?<div className="modal__row">
        <h2 className='head-text' style={{fontSize:"2rem"}}>Certifications</h2>
       <ul>
        <li><span className='p-text' style={{color:"#004aad"}}>AWS</span><p className='p-text'> Certified Cloud Practitioner- April 23</p>
        <a href="https://www.credly.com/badges/561365e7-e0f7-4998-a7e3-87af9b06d0f3/public_url" className='p-text' target="_blank">View Certificate</a>
        </li>
        <li><span className='p-text' style={{color:"#004aad"}}>AWS</span><p className='p-text'> Certified Cloud Practitioner- April 23</p>
        <a href="https://www.credly.com/badges/561365e7-e0f7-4998-a7e3-87af9b06d0f3/public_url" className='p-text' target="_blank">View Certificate</a>
        </li>
        <li><span className='p-text' style={{color:"#004aad"}}>AWS</span><p className='p-text'> Certified Cloud Practitioner- April 23</p>
        <a href="https://www.credly.com/badges/561365e7-e0f7-4998-a7e3-87af9b06d0f3/public_url" className='p-text' target="_blank">View Certificate</a>
        </li>
        <li><span className='p-text' style={{color:"#004aad"}}>AWS</span><p className='p-text'> Certified Cloud Practitioner- April 23</p>
        <a href="https://www.credly.com/badges/561365e7-e0f7-4998-a7e3-87af9b06d0f3/public_url" className='p-text' target="_blank">View Certificate</a>
        </li>
       </ul>
       
       </div>
       :<div>
        <h2 className='head-text' style={{fontSize:"2rem"}}>Accomplishments</h2>
        <span className='p-text' style={{color:"#004aad"}}>Goldmedalist:</span><span className='p-text'> University Topper-Bachelors</span><br/><br/>
        <span className='p-text' style={{color:"#004aad"}}>DSA Problems Solved: </span><span className='p-text'>250+</span><br/><br/>
        <span className='p-text' style={{color:"#004aad"}}>Projects Completed: </span><span className='p-text'>7+</span><br/><br/>
        <span className='p-text' style={{color:"#004aad"}}>Verified Skills: </span><span className='p-text'>10+</span><br/>

       </div>
       
       }
       
       </div>
       <button className='modal__close-wrapper' onClick={close}>
        <IoCloseCircleOutline className='model__close-icon'/>
       </button>
       
       
       

      </div>
    
  )
}

export default Modal