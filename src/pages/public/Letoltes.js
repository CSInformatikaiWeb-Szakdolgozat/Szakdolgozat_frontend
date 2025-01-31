import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Letoltes() {
  return (
    <>
      <Container>
        <h2>Letöltések</h2>
        <p>
          Rövid és fájdalommentes regisztráció kitöltése után 60 napos VMware
          software próbaverziók tölthetőek le:
        </p>
        <Row className="p-4 border">
          <h3>Szerver oldali software –ek:</h3>
          <ListGroup className="my-2">
            <ListGroup.Item>
              <Link>VMware vSphere</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware vSphere Hypervisor</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware Server</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware vCenter Server</Link>
            </ListGroup.Item>
          </ListGroup>
        </Row>
        <Row className="p-4 border">
          <h3>Kliens oldali software –ek:</h3>
          <ListGroup className="my-2">
            <ListGroup.Item>
              <Link> VMware Fusion</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware View 5</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware ThinApp</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware Workstation</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware Player</Link>
            </ListGroup.Item>
          </ListGroup>
        </Row>
        <Row className="p-4 border">
          <h3>Biztonsági software –ek:</h3>
          <ListGroup className="my-2">
            <ListGroup.Item>
              <Link>VMware vShield App</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware vShield Edge</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>VMware vShield Endpoint</Link>
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Letoltes;
