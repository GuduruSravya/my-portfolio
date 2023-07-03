import { Pagination, Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import './About.css';
import React,{useState} from 'react';
import profile from '../assets/profile-pic.png';
import Image from 'react-bootstrap/Image';
import SectionBanner from './SectionBanner';
import arrow from '../assets/arrow.png'
import downarrow from '../assets/downward-arrow.png';
import RoundedSection from './RoundedSection';

const About = () =>{
    const [activePage, setActivePage] = useState(1);
    const [stats,setStats]=useState(false);

  const handlePageSelect = (pageNumber) => {
    
    const element = document.getElementById("about-content");

    switch(pageNumber){
        case 1:
            setStats(false);
            break
        case 2:
            setStats(true);
            break
        case 3:
            setStats(false);
            break

    }
    if(pageNumber === 1){
       
    }

    

    setActivePage(pageNumber);
    // You can perform additional actions based on the clicked page
  };
    
    return(
        <section id="about" className="about-section">
            <Container className="about-container" fluid="lg">
            <SectionBanner  title="About" />
                <Row className='row'>
                <Col xs={12} sm={12} md={4} lg={4} className='image-col col'>
                    <img className="picture"src={profile}/>
                    </Col>
                    <Col xs={12} md={2} lg={2} className='col'>
                        <div class="div-line">

                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="content-col col">
                        
                            <div className="about-content" id="about-content">
                            {(activePage===2)?<RoundedSection skillCount={10} dsaCount={50} projectCount={5}/>:<div><span class='welcome-message'> Hey There!</span><br/>I'm a passionate software developer, I am fortunate that I have had the opportunity to delve into various aspects of software development, with a particular focus on web development, Java projects, and exploring the exciting world of Python. I have successfully completed numerous projects.</div>}
                            </div>
                         <div className="pagination-div">
                         <Pagination >
                            <Pagination.Item active={activePage===1} onClick={()=>handlePageSelect(1)}>Quick Intro</Pagination.Item>
                            <Pagination.Item active={activePage===2} onClick={()=>handlePageSelect(2)}>Statistics</Pagination.Item>
                            <Pagination.Item active={activePage===3} onClick={()=>handlePageSelect(3)}>Education</Pagination.Item>
                         </Pagination>
                         </div>

                         
                        
                    </Col>
                    
                </Row> 
            </Container>
        </section>
       
    );
}

export default About;