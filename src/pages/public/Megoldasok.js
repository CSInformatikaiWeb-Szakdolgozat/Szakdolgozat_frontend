import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import Footer from '../../components/Footer';

function Megoldasok() {
    return (
        <>
          <Container>
            <Row>
              <h1 className="text-primary">Megoldasok</h1>
              <Col>
                
                <Col>
                  <p>
                    A szerverkonszolidáció hatékonyságát tovább növelhetjük, ha egy
                    <a href="#">tároló konszolidációval</a> egybekötve valósítjuk
                    meg. Erre az IBM két fő megoldáshalmazt kínál. Az egyik a
                    kisvállalatok számára elérhető <a href="#">IBM Blade S keret</a>{" "}
                    ami a szerverek mellett központosított tárolókapacitást is
                    biztosít egy kereten belül. A közép és nagyvállalatok számára az
                    IBM valamely <a href="#">központi tároló megoldása</a>teheti még
                    hatékonyabbá a konszolidációt.
                  </p>
                </Col>
                <Col>
                  <p>
                    Egy példán keresztül bemutatva: tételezzük fel, hogy szükségünk
                    van 14 darab új szerverre. Minden szerverben szükség van 2
                    ethernet portra a szerver szolgáltatásainak redundáns elérésére,
                    2 ethernet portra a redundáns menedzsment számára, 2 FC portra a
                    redundáns központi tároló elérés miatt, és végül de nem utolsó
                    sorban 2 darab tápkábelre a redundáns tápellátás biztosítására.
                  </p>
                </Col>
                <Col>
                  <p>
                    Gyors összeadás és szorzás alapján a 14 szerver hagyományos 1U-s
                    komponensekből építkezve valamint az
                    <a href="#">LENOVO Flex technológiáját</a>
                    alkalmazva az alábbi adatokat kapjuk
                  </p>
                </Col>
              </Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Konszolidáció előtt</th>
                    <th>Konszolidáció után</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>helyfoglalás</td>
                    <td>14U</td>
                    <td>10U</td>
                  </tr>
                  <tr>
                    <td>külső etherent csatlakozás</td>
                    <td>56 db 1GB uplink</td>
                    <td>2 db 1/10/25GB uplink</td>
                  </tr>
                  <tr>
                    <td>FC csatlakozás</td>
                    <td>28 db</td>
                    <td>2 db</td>
                  </tr>
                  <tr>
                    <td>Táp</td>
                    <td>28 db</td>
                    <td>6 db</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
    
            <Row>
              <h2 className="fw-bold">Néhány példa a blade/flex termékekre:</h2>
              <Col>
                <figure className="figure">
                  <figcaption class="figure-caption">
                    <a href="#">Lenovo Flex System Enterprise Chassis</a>
                  </figcaption>
                  <img
                    className="figure-img img-fluid rounded"
                    src="./kepek/F_S_E_C.jpg"
                    alt="kép"
                  />
                </figure>
              </Col>
              <Col>
                <figure className="figure">
                  <figcaption class="figure-caption">
                    <a href="#">Blade center E keret*</a>
                    <p>visszavont termék</p>
                  </figcaption>
                  <img
                    className="figure-img img-fluid rounded"
                    src="./kepek/BladeCenter_E.jpg"
                    alt="kép"
                  />
                </figure>
              </Col>
              <Col>
                <figure className="figure">
                  <figcaption class="figure-caption">
                    <a href="#">Blade center H keret*</a>
                    <p>visszavont termék</p>
                  </figcaption>
                  <img
                    className="figure-img img-fluid rounded"
                    src="./kepek/BladeCenter_H.jpg"
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

export default Megoldasok