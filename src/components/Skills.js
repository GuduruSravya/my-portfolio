import React from 'react';
import SectionBanner from './SectionBanner';
import Image from 'react-bootstrap/Image';
import './Skills.css';
import html from '../assets/icons8-source-code-100.png';
import css from '../assets/icons8-css3-100.png'
import js from '../assets/js.png'
import nodejs from '../assets/nodejs.png'
import linux from '../assets/linux.png'
import mongo from '../assets/mongo.png'
import aws from '../assets/aws.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import express from '../assets/express.png'
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';


const Skills = () => {
  const images = [
    {src:html,name:"HTML"},
    {src:css,name:"CSS"},
    {src:js,name:"JavaScript"},
    {src:nodejs,name:"Node JS"},
    {src:express,name:"Express JS"},
    {src:linux,name:"Linux"},
    {src:mongo,name:"Mongo DB"},
    {src:aws,name:"AWS"},
    {src:react,name:"React"},
    {src:bootstrap,name:"Bootstrap"}
    
]

const [showMoreButton,setShowMoreButton] = useState(false);

function showMore(){
  const gridContainer = document.getElementById("my-skills");
  const button = document.getElementById("showButton");
  
  if(!showMoreButton){
    gridContainer.classList.add("showAll");
    button.innerText = "Show Less-";
    setShowMoreButton(!showMoreButton);
  }
  else{
    gridContainer.classList.remove("showAll");
    button.innerText = "Show More+";
    setShowMoreButton(!showMoreButton);
  }
}

  return (
    
    <section id="skills">
      <Container>
        <SectionBanner title="My Skills"/>
        <div id='my-skills'>
          {images.map((obj)=>(<div key={obj.name} className="image-div"><Image src={obj.src} className='image-size'/>
          <p>{obj.name}</p></div>
          ))}
          
        </div>
        <div className='my-button'>
        <button onClick={showMore} id="showButton">Show More+</button>
        </div>
        
      

      </Container>
     
    </section>
  );
};

export default Skills;