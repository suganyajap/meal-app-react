import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Meals</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default AppNavbar