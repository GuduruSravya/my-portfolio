import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

const Education = () => {
  const style = {
    color: "#14192d",
    fontFamily: "Acme",
    textDecoration: "underline",
    textAlign: "center",
  };

  // State to track the visibility and icon of the sections
  const [bachelorsExpanded, setBachelorsExpanded] = useState(false);
  const [mastersExpanded, setMastersExpanded] = useState(false);

  // Function to toggle the visibility and icon of the Bachelors section
  const toggleBachelors = () => {
    setBachelorsExpanded(!bachelorsExpanded);
    
  };

  // Function to toggle the visibility and icon of the Masters section
  const toggleMasters = () => {
    setMastersExpanded(!mastersExpanded);
    
  };

  return (
    <Container>
      <h2 style={style}>EDUCATION HISTORY</h2>
      <Row>
        <Col>
          <ul style={{ listStyleType: "none" }}>
            <span
              onClick={toggleBachelors} // Toggle the visibility and icon of Bachelors section
              style={{ cursor: "pointer" }}
            >
              {bachelorsExpanded ? (
                <BiSolidDownArrow style={{ color: "#ffbe0b" }} />
              ) : (
                <BiSolidRightArrow style={{ color: "#ffbe0b" }} />
              )}
            </span>
            <b style={{ color: "#ffbe0b" }}>BACHELORS</b>
            {/* Bachelors list items */}
            {bachelorsExpanded && (
              <>
                <li>Jawaharlal Nehru Technological University-Kakinada</li>
                <li>Year - 2018</li>
                <li>Major: Information Technology</li>
              </>
            )}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul style={{ listStyleType: "none" }}>
            <span
              onClick={toggleMasters} // Toggle the visibility and icon of Masters section
              style={{ cursor: "pointer" }}
            >
              {mastersExpanded ? (
                <BiSolidDownArrow style={{ color: "#ffbe0b" }} />
              ) : (
                <BiSolidRightArrow style={{ color: "#ffbe0b" }} />
              )}
            </span>
            <b style={{ color: "#ffbe0b" }}>MASTERS</b>
            {/* Masters list items */}
            {mastersExpanded && (
              <>
                <li>University of Texas at Arlington</li>
                <li>Year - 2023</li>
                <li>Major: Computer Science</li>
              </>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
