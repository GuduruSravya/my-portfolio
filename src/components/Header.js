import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-scroll';

import './header.css';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleNavCollapse = () => {
    setIsNavExpanded(false);
  };

  const handleToggleClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSectionId = '';

      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();

        if (top <= 0 && bottom > 0) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      className="custom-navbar"
      fixed="top"
      expand="lg"
      expanded={isNavExpanded}
      onToggle={handleToggleClick}
    >
      <Container fluid="lg">
        <Navbar.Brand href="#home" className="brand">
          SG
        </Navbar.Brand>

        <div
          role="button"
          tabIndex={0}
          aria-controls="basic-navbar-nav"
          className="navbar-toggler icon"
          onClick={handleToggleClick}
          onKeyDown={handleToggleClick}
        >
          {isNavExpanded ? (
            <CloseButton />
          ) : (
            <span className="navbar-toggler-icon" />
          )}
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto justify-content-center text-center">
            <Nav.Link
              as={Link}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className={`custom-nav ${
                activeSection === 'home' ? 'active' : ''
              }`}
              onClick={handleNavCollapse}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className={`custom-nav ${
                activeSection === 'about' ? 'active' : ''
              }`}
              onClick={handleNavCollapse}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className={`custom-nav ${
                activeSection === 'skills' ? 'active' : ''
              }`}
              onClick={handleNavCollapse}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className={`custom-nav ${
                activeSection === 'projects' ? 'active' : ''
              }`}
              onClick={handleNavCollapse}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className={`custom-nav ${
                activeSection === 'contact' ? 'active' : ''
              }`}
              onClick={handleNavCollapse}
            >
              HireME!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
