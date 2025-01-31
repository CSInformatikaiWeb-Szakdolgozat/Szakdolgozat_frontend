import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigacio() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top"
    >
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Virtulizáció</Nav.Link>
            <Nav.Link href="#pricing">Tároló Konszolidáció</Nav.Link>
            <NavDropdown
              title="Szerverkonszolidáció"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tároló Konszolidáció
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/rendezvenyek">Rendezvények</Nav.Link>
            <Nav.Link href="/letöltesek">Letöltések</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
