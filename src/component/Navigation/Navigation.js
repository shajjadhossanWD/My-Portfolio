import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand href="#home">WEB DEV</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="navigation">
           <Nav.Link as={Link} to="home">Home</Nav.Link>
           <Nav.Link as={Link} to="about">About</Nav.Link>
           <Nav.Link as={Link} to="project">Projects</Nav.Link>
           <Nav.Link as={Link} to="blog">Blog</Nav.Link>
           <Nav.Link as={Link} to="skill">Skills</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;