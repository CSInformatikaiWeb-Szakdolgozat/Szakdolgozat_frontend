import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import Kartya from "./Kartya";

function Kartyak() {
  return (
    <Container>
    <Row className="p-4">
    <Col><Kartya /></Col>
    <Col><Kartya /></Col>
    </Row>
    <Row className="p-4">
    <Col><Kartya /></Col>
    <Col><Kartya /></Col>
    </Row>
    <Row className="p-4">
    <Col><Kartya /></Col>
    <Col><Kartya /></Col>
    </Row>
    <Row className="p-4">
    <Col><Kartya /></Col>
    <Col><Kartya /></Col>
    </Row>
    </Container>
  );
}

export default Kartyak;
