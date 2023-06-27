import './home.css';
import RoundedSection from './RoundedSection';
import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png'

const Home = () =>{
    
    return(
        <Container  id="home" className="custom-container">
           
            <Row className="d-flex justify-content-center">
            <Col xs={12} sm={12} md={12} lg={6} xl={4} className="d-flex flex-column align-items-center justify-content-center">
            <div className='my-section'>
            <Image src={profile} className="profile-picture" alt="Candidate profile picture" roundedCircle /></div>

            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={4} className="d-flex flex-column align-items-center justify-content-center">
            <div className="my-section">
            <div className="my-content"> 
            
            <h2>Hello!</h2><br/> I am Sravya Guduru<br/>
            
            </div>
            <RoundedSection
              skillCount={10}
              dsaCount={50}
              projectCount={5}
            />
            </div>
            
            </Col>

           

            </Row>
            
            
        
        </Container>
    )
}

export default Home;