import { Pagination, Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import './About.css';
import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import images from '../../constants/images';
import { urlFor,client} from '../../client';
import Overlay from '../About/Overlay';
import Modal from './Modal';
import Card from './Card';



const About = () =>{
   
    const [abouts, setAbouts] = useState([])
    let about = [
        {title:"Education",type:"edu", imgUrl:images.education},
        {title:"Certifications",type:"honors",imgUrl:images.certificate},
        {title:"Accomplishments",type:"accomplished",imgUrl:images.milestone}
]
    useEffect(() => {
      const query = '*[_type == "abouts"]'
    
      client.fetch(query)
      .then((data) =>{
        setAbouts(data)
      })
    }, [])
    
    
    return(
        <>
        <h2 className='head-text'>I know that<span> Skillful dev
            </span><br/>
            paves the way for <span>prosperous business.
            </span>
        </h2>
        <div className='app__profiles'>
            
            {about.map((about,index)=>(
                <Card data={about}/>
            ))}
             
            
        </div>
        </>
       
    );
}

export default About;