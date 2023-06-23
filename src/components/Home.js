import './home.css';
import { Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png'

const Home = () =>{
    return(
        <Container  id="home" className="custom-container">
           
            <Row className="d-flex justify-content-center">
            <Col md lg={4} className="d-flex flex-column align-items-center justify-content-center">
            <Image src={profile} className="profile-picture" roundedCircle/>

            </Col>
            <Col md lg={4} className="d-flex flex-column align-items-center justify-content-center">
            <div class="my-content"> Hello! I am Sravya Guduru<br/>FULL STACK DEVELOPER</div>
            
            </Col>

           

            </Row>
            
            
        
        </Container>
    )
}

export default Home;