import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigacio() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top background "
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./kepek/test_logo.png"
            className="img-fluid"
            alt="Logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/virtualizáció">
              Virtulizáció
            </Nav.Link>
            <Nav.Link className="text-white" href="/tároló">
              Tároló Konszolidáció
            </Nav.Link>
            <Nav.Link className="text-white" href="/szerverkonszolidáció">Szerverkonszolidáció</Nav.Link>
            <NavDropdown
              title="Szolgáltatások"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tároló Konszolidáció
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-white" href="/rendezvenyek">
              Rendezvények
            </Nav.Link>
            <Nav.Link className="text-white" href="/letöltesek">
              Letöltések
            </Nav.Link>
            <Nav.Link className="text-white" href="/kapcsolat">
              Kapcsolat
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
