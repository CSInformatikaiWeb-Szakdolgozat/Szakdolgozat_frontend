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
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link className="text-white text-uppercase" href="/bemutato">
              Cégbemutató
            </Nav.Link>
            <Nav.Link
              className="text-white text-uppercase"
              href="/virtualizacio"
            >
              Virtualizáció
            </Nav.Link>
            <Nav.Link
              className="text-white text-uppercase"
              href="/szerverkonszolidacio"
            >
              Szerverkonszolidáció
            </Nav.Link>
            <Nav.Link className="text-white text-uppercase" href="/tarolo">
              Tároló Konszolidáció
            </Nav.Link>

            {/* Megoldások Dropdown */}
            <NavDropdown
              title="Megoldások"
              id="collapsible-nav-dropdown"
              className="text-uppercase nav-item dropdown"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Tároló Konszolidáció</NavDropdown.Item>

              {/* Al-Menü Dropdown (jobbra tolt menü) */}
              <NavDropdown title="Al-Menü" className="almenu" id="collapsible-nav-dropdown-inner">
                <NavDropdown.Item href="#">Al-Menü Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Al-Menü Action 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Al-Menü Action 3</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item href="#">Consulting</NavDropdown.Item>
              <NavDropdown.Item href="#">Training</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tároló Konszolidáció
              </NavDropdown.Item>
            </NavDropdown>

            {/* Egyéb menüpontok */}
            <NavDropdown
              title="Szolgáltatások"
              id="collapsible-nav-dropdown"
              className="text-uppercase"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tároló Konszolidáció
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Termékek"
              id="collapsible-nav-dropdown"
              className="text-uppercase"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tároló Konszolidáció
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              className="text-white text-uppercase"
              href="/rendezvenyek"
            >
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
