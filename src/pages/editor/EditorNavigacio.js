import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../contexts/AuthContext";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

export default function EditorNavigacio() {
  const { logout } = useAuthContext();

  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link className="nav-link" to="/cikkoldal">
                Cikkek
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/esemenyekoldal">
                Események
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/besorolasoldal">
                Besorolások
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/menuoldal">
                Menük
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/partneroldal">
                Partnerek
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/ceginfooldal">
                Cég infok
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="link" className="nav-link" onClick={logout}>
                Kijelentkezés
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
