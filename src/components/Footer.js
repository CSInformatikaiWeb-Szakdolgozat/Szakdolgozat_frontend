import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="col-lg-12 text-center">
      <Container>
        <Row className="m-3 text-center align-items-center">
          <Col>
            <a href="">
              <Image src="./kepek/partnerek/logo1.jpg" rounded fluid />
            </a>
          </Col>
          <Col>
            <a href=""><Image src="./kepek/partnerek/logo2.png" rounded fluid /></a>
          </Col>
          <Col>
          <a href=""> <Image src="./kepek/partnerek/logo3.jpg" rounded fluid /></a>
          </Col>
          <Col>
          <a href=""><Image src="./kepek/partnerek/logo4.png" rounded fluid /></a>
          </Col>
          <Col>
          <a href=""><Image src="./kepek/partnerek/logo5.png" rounded fluid /></a>
          </Col>
        </Row>
        <Row className="p-2 m-3 align-items-center">
          <a href="#" class="text-black col-lg-3 p-2">
            Rendezvények
          </a>
          <a href="#" class="text-black col-lg-3 p-2">
            Referenciák
          </a>
          <a href="#" class="text-black col-lg-3 p-2">
            Partnereink
          </a>
          <a href="#" class="text-black col-lg-3 p-2">
            Állásajánlatok
          </a>
        </Row>
        <div className="text-center text-black p-2 m-3">
          &copy; 2024 - CS. Informatikai Rendszerek Kft.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
