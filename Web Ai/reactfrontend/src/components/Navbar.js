import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'; // Ensure you import the CSS file for custom styles

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        {/* Brand (Web Ai) aligned to the left */}
        <Navbar.Brand as={Link} to="/" className="brand">
          Web Ai
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {/* Navigation Links aligned to the right */}
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/ai10" className="nav-item">
              Top 10 AI
            </Nav.Link>
            <Nav.Link as={Link} to="/usefulai" className="nav-item">
              Useful AI
            </Nav.Link>
            <Nav.Link as={Link} to="/singup" className="nav-item">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-item">
              Log In
            </Nav.Link>
             {/* <Nav.Link as={Link} to="" className="nav-item">
              Login
            </Nav.Link>  */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
