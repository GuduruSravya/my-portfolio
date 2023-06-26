import { Container } from 'react-bootstrap';
import './About.css';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import nodejs from '../assets/nodejs.png'
import linux from '../assets/linux.png'
import mongo from '../assets/mongo.png'
import aws from '../assets/aws.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import SectionBanner from './SectionBanner';
import arrow from '../assets/arrow.png'
import Image from 'react-bootstrap/Image';
import downarrow from '../assets/downward-arrow.png';

const About = () =>{
    const images = [
        {src:html,styleClass:"html-image"},
        {src:css,styleClass:"css-image"},
        {src:js,styleClass:"js-image"},
        {src:nodejs,styleClass:"nodejs-image"},
        {src:linux,styleClass:"linux-image"},
        {src:mongo,styleClass:"mongo-image"},
        {src:aws,styleClass:"aws-image"},
        {src:react,styleClass:"react-image"},
        {src:bootstrap,styleClass:"bootstrap-image"}
        
    ]
    return(
        <section id="about">
            <Container className='my-about-section'>
                <SectionBanner title="About Me" />
                <div className="my-description">
                <Image src={arrow} className='animated-image-up'/>
                <Image src={downarrow} className='animated-image-down'/>
                    <div className="centered-content">
                    <p><b>Welcome to my portfolio!</b><br/><br/>I am passionate about Software Developement and creating innovative web applications. 
                    With a strong foundation in HTML, CSS, and JavaScript, I specialize in frontend development using modern frameworks like React. <br></br><br></br>I believe that great user experiences are built on clean and elegant code.

                    Throughout my journey, I've had the opportunity to work on various projects that have honed my skills and expanded my knowledge.

                    In addition to frontend development, I have gained valuable experience in backend technologies like Java, NodeJS and ExpressJS.<br/><br/> Collaborating with clients such as CNHi Industrial and Microsoft during my three-year tenure at Infosys has provided me with a deep understanding of software development processes and the ability to tackle complex challenges head-on.

                    Beyond my professional experience, I have pursued personal projects that demonstrate my adaptability and quick learning capabilities. These projects showcase my ability to thrive in dynamic environments and tackle unfamiliar technologies with enthusiasm and efficiency.

                    I'm constantly seeking opportunities to grow, collaborate, and contribute to exciting projects. 
                    <br/><br/>If you're looking for a dedicated and versatile developer who is passionate about crafting exceptional user experiences, I'd love to connect with you.

                    <br/><br/><b>Let's build something amazing together!</b>

                    </p></div>
                </div>
            </Container>
        </section>
       
    );
}

export default About;