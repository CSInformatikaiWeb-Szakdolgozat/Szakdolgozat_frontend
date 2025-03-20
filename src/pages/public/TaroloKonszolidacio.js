import React from "react";
import Footer from "../../components/Footer";
import { Col, Container, Row } from "react-bootstrap";

function TaroloKonszolidacio() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-primary">Tároló konszolidáció</h1>
          <Col>
            <Col>
              <div className="p-4 float-start">
                <img src="./kepek/tarolokonszolidacio.jpg" alt="kép" />
              </div>
              <p>
                Az egyedi, szerverekben elhelyezett diszkes alrendszerek
                hátránya, hogy rugalmatlanul kezelik a tárolókapacitást. Blokkos
                gyors hozzáféréssel minden szerver csak a saját, önmagába
                épített diszk alrendszert látja.
              </p>
              <p>
                Minden szervernek önálló raid vezérlőre van szüksége, ami
                költségessé és gazdaságtalanná teszi nagyobb mennyiségű szerver
                üzemeltetését. Problémát okoz az is, ha a RAID vezérlő
                meghibásodik, mivel ebben az esetben a teljes diszk alrendszer
                kiesik a szerver alól.
              </p>
            </Col>
            <Col>
              <p>
                A lokális diszkek további hátránya, hogy nem nyújtanak
                támogatást a cluster megoldások számára. Amennyiben a
                szervereinken futó szolgáltatásokat hibatűrővé szeretnénk tenni,
                mindenképpen szükségessé válik egy közös tárolóterület
                biztosítása.
              </p>
            </Col>
            <Col>
              <p>
                A fenti problémák hatékony megoldása, ha a szerverekbe épített
                tárolókról áttérünk a gazdaságos, hatékony és hibatűrő központi
                tároló megoldásokra.
              </p>
            </Col>
            <Col>
              <p>
                Az IBM ezen téren kiemelkedően széles választékot kínál a belépő
                szintű <a href="#">IBM FlashSystem 5200-es</a> tárolótól kezdve
                a <a href="#">IBM Flash System 7300</a> tárolón keresztül a High
                End IBM DS8000 tárolóig. Ezek a tárolók minden elemükben
                redundáns felépítéssel rendelkeznek ami lehetővé teszi az
                üzemszünet nélküli karbantartást és esetleges hibaelhárítást.
              </p>
            </Col>
            <Col>
              <p>
                A tároló konszolidáció lényege, hogy a szerverek nem saját
                egyedi lokális diszk alrendszereket használnak az adatok
                tárolására, hanem valamilyen külső, központi, magas
                rendelkezésre állású tárolón tartják az adatokat. Ezt a
                tárolóterületet egy FC, ISCSI, FCoE, vagy infiniband hálózaton
                keresztül érik, így a tárolóterületek dinamikusan és rugalmasan
                oszthatóak a szerverek között.
              </p>
            </Col>
            <Col>
              <p>
                Lehetőség nyílik a Thin Provisioning és a Deduplikáció hatékony
                használatára.
              </p>
            </Col>
            <Col>
              <p>
                Estleges szerverhibák esetén az adott tároló terület gyorsan
                hozzárendelhető egy másik szerverhez, így az állási idő
                minimalizálható.
              </p>
            </Col>
            <Col>
              <p>
                Támogatottá válnak a Clusteres alkalmazások, is mivel bizonyos
                speciális beállításokkal az adott tárolóterület több gép számára
                is hozzáférhetővé tehető.
              </p>
            </Col>
          </Col>
        </Row>

        <Row>
          <h2 className="fw-bold">Néhány példa a blade/flex termékekre:</h2>
          <Col>
            <figure className="figure">
              <figcaption class="figure-caption">
                <a href="#">LENOVO DE sorozatú tárolók  </a>
              </figcaption>
              <img
                className="figure-img img-fluid rounded"
                src="./kepek/DE6000H_1.png"
                alt="kép"
              />
            </figure>
          </Col>
          <Col>
            <figure className="figure">
              <figcaption class="figure-caption">
                <a href="#">IBM FlashSystem tárolók</a>
              </figcaption>
              <img
                className="figure-img img-fluid rounded"
                src="./kepek/IBM_5000.png"
                alt="kép"
              />
            </figure>
          </Col>
          <Col>
            <figure className="figure">
              <figcaption class="figure-caption">
                <a href="#">IBM mentési eszközök</a>
              </figcaption>
              <img
                className="figure-img img-fluid rounded"
                src="./kepek/IBM_System_Storage_TS2900_Tape_Autoloader.jpg"
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

export default TaroloKonszolidacio;
