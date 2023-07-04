import { Pagination, Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import './About.css';
import React,{useState} from 'react';

import Image from 'react-bootstrap/Image';



const About = () =>{
    const [activePage, setActivePage] = useState(1);
    const [stats,setStats]=useState(false);
    const style = {
        color: "#14192d",
        fontFamily:"Acme",
        textDecoration:"underline",
        textAlign:"center"
       
    };

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
    setActivePage(pageNumber);
    // You can perform additional actions based on the clicked page
  };
    
    return(
        <div>


        </div>
        /*
        <section id="about" className="about-section">
            <Container className="about-container" fluid>
            <SectionBanner  title="About" color="#151a2e"/>
                <Row className="about-row">
                <Col xs={12} sm={12} md={5} lg={5} className='image-col'>
                   <Image src={profile} className='picture'/>
                </Col>
                <Col xs={12} sm={12} md={1} lg={1} className="col-line">
                    <div class="div-line">
                        
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}className='content-col'>
                    <Row className="content-row">
                        
                    <Col xs={12} sm={12}>
                    <div className={(stats)?"stats-content":"about-content"} id="about-content">
                        {
                            (activePage===1)? <div><h2 style={style}>ABOUT ME</h2><span class='welcome-message'> Hello!</span>&nbsp;I'm a passionate software developer, I am fortunate that I have had the opportunity to delve into various aspects of software development, with a particular focus on web development, Java with spring BOOT, and exploring the exciting world of Python. I have successfully completed numerous projects.</div>
                            :(activePage===2)?<RoundedSection skillCount={10} dsaCount={50} projectCount={5}/>
                            :(activePage===3)?<Education/>
                            :<Education/>
                        }</div></Col> 
                    

                    </Row>
                    <Row className='pagination-row'>
                    <Col xs={12} sm={12}>
                    <div className="pagination-div">
                        <Pagination className='pagination-sm '>
                            <Pagination.Item active={activePage===1} onClick={()=>handlePageSelect(1)}>About</Pagination.Item>
                            <Pagination.Item active={activePage===2} onClick={()=>handlePageSelect(2)}>Statistics</Pagination.Item>
                            <Pagination.Item active={activePage===3} onClick={()=>handlePageSelect(3)}>Education</Pagination.Item>
                            <Pagination.Item active={activePage===4} onClick={()=>handlePageSelect(4)}>Experience</Pagination.Item>
                        </Pagination>
                    </div>
                    </Col>

                    </Row>
                   
                    
                </Col>
               </Row> 
            </Container>
        </section>*/
       
    );
}

export default About;