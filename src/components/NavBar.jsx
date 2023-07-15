import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Brand href="#home">
        <span className="my-brand">Derek Williams</span>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#completed">Completed Projects</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#wip">Works in Progress</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;