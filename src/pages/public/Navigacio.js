import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";

export default function Navigacio() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top background"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="./kepek/test_logo.png"
            width={100}
            className="img-fluid"
            alt="Logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-white text-uppercase" href="/bemutato">
              Cégbemutató
            </Nav.Link>
            <Nav.Link className="text-white text-uppercase" href="/virtualizácio">
              Virtualizáció
            </Nav.Link>
            <Nav.Link className="text-white text-uppercase" href="/tarolo">
              Tároló Konszolidáció
            </Nav.Link>
            <Nav.Link className="text-white text-uppercase" href="/szerverkonszolidacio">
              Szerverkonszolidáció
            </Nav.Link>
            <NavDropdown title="Szolgáltatások" id="collapsible-nav-dropdown" className="text-uppercase">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tároló Konszolidáció
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-white text-uppercase" href="/rendezvenyek">
              Rendezvények
            </Nav.Link>
            <Nav.Link className="text-white text-uppercase" href="/letoltesek">
              Letöltések
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
