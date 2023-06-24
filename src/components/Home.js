import './home.css';
import RoundedSection from './RoundedSection';
import { Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png'

const Home = () =>{
    return(
        <Container  id="home" className="custom-container">
           
            <Row className="d-flex justify-content-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="d-flex flex-column align-items-center justify-content-center">
            <div className='my-section'>
            <Image src={profile} className="profile-picture" roundedCircle/></div>

            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="d-flex flex-column align-items-center justify-content-center">
            <div class="my-section">
            <div class="my-content"> Hello! I am Sravya Guduru<br/>FULL STACK DEVELOPER</div>
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