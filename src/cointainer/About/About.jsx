import { Pagination, Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import './About.css';
import '../../App.css';
import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import images from '../../constants/images';
import { urlFor,client} from '../../client';
import Overlay from '../About/Overlay';
import Modal from './Modal';
import Card from './Card';
import {AppWrap,MotionWrap} from '../../wrapper';



const About = () =>{
    let abouts = [
        {title:"Education",type:"edu", imgUrl:images.education},
        {title:"Certifications",type:"honors",imgUrl:images.certificate},
        {title:"Accomplishments",type:"accomplished",imgUrl:images.milestone}
        ]
   
    return(
        <>
        <h2 className='head-text'>I know that<span> Skillful dev
            </span><br/>
            paves the way for <span>prosperous business.
            </span>
        </h2>
        <div className='app__profiles'>
            
            {abouts.map((about,index)=>(
                <Card data={about} index={index} key={index}/>
            ))}
             
            
        </div>
        </>
       
    );
}

export default AppWrap(MotionWrap(About,'app__about'),'about','app__whitebg');