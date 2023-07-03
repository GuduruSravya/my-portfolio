import './home.css';
import RoundedSection from './RoundedSection';
import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import {BsGithub,BsLinkedin} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'

const Home = () =>{
    
    return(
        <Container  id="home" className="custom-container" fluid="xxxl">
            <Row className="d-flex justify-content-center align-items-center row">
                <Col xs={12} sm={12} md={12} lg={6} xl={4} className="d-flex flex-column align-items-center justify-content-center col-width">
                    <div className="my-section">
                        <div className="my-content"> 
                            <h3 className="intro-text">Hello, I am <span className='name'>SRAVYA GUDURU </span>
                            </h3>
                       </div>
                       <div className="round">
                           {/*
                            <RoundedSection
                            skillCount={10}
                            dsaCount={50}
                            projectCount={5}
                           />*/}
                        <a href="https://github.com/GuduruSravya"><BsGithub className="social-icons" /></a>
                        <BsLinkedin className="social-icons"/>
                        <SiLeetcode className='social-icons'/>
                        </div>
            
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;