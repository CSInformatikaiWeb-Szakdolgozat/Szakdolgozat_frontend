import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";

function Kapcsolat() {
  return (
    <>
      <Container>
        <h2>Elérhetőségeink</h2>
        <Row className="p-4 border">
          <Col lg="auto" className="m-5">
            <p>Telephely és levelezési cím:</p>
            <p>C.S. Informatikai Rendszerek Kft.</p>
            <p>1021 Budapest Széher út 13/a I/6</p>
          </Col>
          <Col lg="auto" className="m-5">
            <p>Székhely:</p>
            <p>1021 Budapest Széher út 13/a I/6</p>
          </Col>
          <Col lg="auto" className="m-5">
            <p>Adószám: 12383948-2-41</p>
            <p>Cégjegyzék: 01-09-374824</p>
          </Col>
        </Row>
        <Row className="p-4 border">
          <Col lg="auto" className="m-5">
            <p>E-mail:</p>
            <a href="mail@csinfo.hu">mail@csinfo.hu</a>
          </Col>
          <Col lg="auto" className="m-5">
            <p>Telefon:</p>
            <p>+36 20 924 1462</p>
          </Col>
          <Col lg="auto" className="m-5">
            <p>Hibabejelentés:</p>
            <a href="bejelentes@csinfo.hu">bejelentes@csinfo.hu</a>
            <p>+36 20 9241 462</p>
          </Col>
        </Row>
        <Row className="p-4 border">
          <Col lg="auto" className="m-5">
            <p>Árajánlatkérés:</p>
            <a href="mail@csinfo.hu">mail@csinfo.hu</a>
            <a href="https://www.google.hu/maps/place/C.S.+Informatikai+Rendszerek+Kft./@47.5218425,18.9853578,17z/data=!3m1!4b1!4m6!3m5!1s0x4741df7d1f895323:0xccdcf53fd338c334!8m2!3d47.5218425!4d18.9853578!16s%2Fg%2F11qzcv7296?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
              C.S. Informatikai Rendszerek Kft. – Google Térkép
            </a>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Kapcsolat;
