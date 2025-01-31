import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavJobbOldal() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary right-nav"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
          <NavDropdown
            title="Nyelvek"
            id="collapsible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              {" "}
              <a className="nav-link" href="javascript:void(0)">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/48/hungary-circular.png"
                  alt="hungary-circular"
                />
              </a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <a className="nav-link" href="javascript:void(0)">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/48/great-britain-circular.png"
                  alt="great-britain-circular"
                />
              </a>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavJobbOldal;
