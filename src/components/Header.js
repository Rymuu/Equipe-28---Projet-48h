import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState()

  const getAccessToken = () => {
    if (typeof window !== 'undefined')
      return localStorage.getItem('jwt');
  };

  const accessToken = getAccessToken();
  useEffect(() => {
    {
      accessToken === null ?
        (
          setIsLogged(false)
        )
        :
        (
          setIsLogged(true)
        )
    }
  }, []);


  const logoff = () => {
    localStorage.removeItem("jwt");
    router.push("/login");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YnovEvent</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <NavDropdown title="Events" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Create an event</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2">My events</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {isLogged ? (
              <>
                <Nav.Link href="/account"><AccountCircleOutlinedIcon /></Nav.Link>
                <Nav.Link href="/login"><LogoutOutlinedIcon onClick={() => logoff()} /></Nav.Link>
              </>
            )
              : (
                <>
                  <Nav.Link href="login">Login</Nav.Link>
                  <Nav.Link href="register">Register</Nav.Link>
                </>
              )
            }


          </Nav>
        </Container>
      </Navbar >
      <br />
    </>
  );
};

export default Header;