import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YnovEvent</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">List</Nav.Link>
            <Nav.Link href="#pricing">Admin</Nav.Link>
            <Nav.Link href="#pricing">Connexion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Header;