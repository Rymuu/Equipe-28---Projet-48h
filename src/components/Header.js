import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YnovEvent</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="event">Event</Nav.Link>
            <Nav.Link href="admin">Admin</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <NavDropdown title="Organiser" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">créer un évènement</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2">Valider des participants</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.3">Moderation des participants</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Header;