import React from "react";
import Footer from "../../components/Footer";
import { Col, Container, Row } from "react-bootstrap";

function Rendezvenyek() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-primary">Rendezvények</h1>
        </Row>
        <Row>
          <Col>
            <figure className="figure">
              <figcaption class="figure-caption">
                <h4 className="text-primary">
                  <a href="#">
                    2024.04.11 AI. Mesteréges Intelligencia IBM alapokon Aki
                    kimarad, lemarad…
                  </a>
                </h4>
              </figcaption>
              <img
                className="figure-img img-fluid rounded"
                src="./kepek/AI22.jpg"
                alt="kép"
              />
            </figure>
          </Col>
          <Col>
            <figure className="figure">
              <figcaption class="figure-caption">
                <h4>
                  <a href="#">
                    2023.10.05 Cyber Resilience. Hogyan tegyük ellenállóvá az IT
                    rendszereinket?
                  </a>
                </h4>
              </figcaption>
              <img
                className="figure-img img-fluid rounded"
                src="./kepek/CyberResiliency.jpg"
                alt="kép"
              />
            </figure>
          </Col>
        </Row>
        <Row>
          <Col>
            <figure className="figure">
              <figcaption class="figure-caption">
                <h4>
                  <a href="#">
                    2023.03.30 Home Office. Biztonságos adatkezelés és tárolás
                    otthonról
                  </a>
                </h4>
              </figcaption>
              <img
                className="figure-img img-fluid rounded"
                src="./kepek/homeoffice.jpeg"
                alt="kép"
              />
            </figure>
          </Col>
          <Col>
            <figure className="figure">
              <figcaption class="figure-caption">
                <h4>
                  <a href="#">2023.03.25 IBM FS5200 Hands On Workshop </a>
                </h4>
              </figcaption>
              <img
                className="figure-img img-fluid rounded"
                src="./kepek/IBM_FS5200_shop.jpg"
                alt="kép"
              />
            </figure>
          </Col>
        </Row>
        <Row>
          <Col>
            <figure className="figure">
              <figcaption class="figure-caption">
                <h4>
                  <a href="#">
                    2022.12.01 Cost Cut. Vágjuk meg az IT költségeket
                  </a>
                </h4>
              </figcaption>
              <img
                className="figure-img img-fluid rounded"
                src="./kepek/OIP.jpeg"
                alt="kép"
              />
            </figure>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Rendezvenyek;
