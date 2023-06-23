import React from 'react';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './header.css';
const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavCollapse = () => {
    setIsNavExpanded(false);
  };
  
  return (
    <Navbar className="custom-navbar"  fixed="top" expand="lg" expanded={isNavExpanded}>
    <Container>
      <Navbar.Brand href="#home">Sravya Guduru</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>{setIsNavExpanded(!isNavExpanded)}}/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto justify-content-center text-center">
          <Nav.Link href="#home" className='custom-nav' onClick={handleNavCollapse}>Home</Nav.Link>
          <Nav.Link href="#about" className='custom-nav'onClick={handleNavCollapse}>About</Nav.Link>
          <Nav.Link href="#skills" className='custom-nav'onClick={handleNavCollapse}>Skills</Nav.Link>
          <Nav.Link href="#projects" className='custom-nav'onClick={handleNavCollapse}>Projects</Nav.Link>
          <Nav.Link href="#contact" className='custom-nav'onClick={handleNavCollapse}>HireME!</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  );
};

export default Header;