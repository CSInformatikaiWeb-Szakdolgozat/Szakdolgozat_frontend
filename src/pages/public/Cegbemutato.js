import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";

function Cegbemutato() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-primary">Cégbemutató</h1>
          <Col>
            <h3 className="text-primary">Célkitűzés:</h3>
            <Col>
              <p>
                Cégünk elsősorban vállalatoknak kínál hatékony informatikai
                megoldásokat a napi üzletvitelük biztonságos és folyamatos
                ellátásához. Neves hardver és szoftvergyártók elkötelezett
                partnereiként, kiváló minőségű termékekből, professzionális,
                üzemeltetési környezetek kialakítására törekszünk.
              </p>
              <p>
                Kollégáink nagy tapasztalattal rendelkeznek, hibatűrő, magas
                rendelkezésre állású, nagyvállalati informatikai rendszerek
                tervezésében, kivitelezésében, támogatásában.
              </p>
            </Col>
            <Col>
              <p>
                Célunk a hosszú távú, magas színvonalú együttműködések
                kialakítása, rugalmas és dinamikus munkastílusban, ügyfeleink
                maximális elégedettségére.
              </p>
            </Col>
            <h3 className="text-primary">A cég története:</h3>
            <Col>
              <p>
                1992-ben mint egyéni vállalkozás indult. A fő profil,
                programozás és utazási irodák, valamint gyógyszer ipari cégek
                informatikai támogatása.
              </p>
            </Col>
            <Col>
              <p>
                1998-ban a piaci igényeknek és a növekedésnek megfelelően Copas
                Soft néven átalakult korlátolt felelősségű társasággá, a profil
                a rendszertámogatás és az üzemeltetés mellett kibővült HP és
                DELL informatikai eszközök és Microsoft Szerver operációs
                rendszerek értékesítésével, Microsoft SBS alapú komplett irodai
                megoldások tervezésével, kivitelezésével kis és
                középvállalkozások számára.
              </p>
            </Col>
            <Col>
              <p>
                2005-ben fordulópont következett a cég életében, az eddigi
                profil háttérbeszorítása mellett IBM Blade és IBM tároló
                technológiákon alapuló közép és nagyvállalati megoldások
                kerültek előtérbe. Alvállalkozóként jelentős részt vállaltunk
                neves magyarországi bankok IBM Blade, IBM tároló, valamint
                VMware technológiáinak tervezésénél implementálásánál.
              </p>
            </Col>
            <Col>
              <p>
                2011-től a cég C.S. Informatikai Rendszerek Kft. néven az eddigi
                IBM és VMware profilt megtartva, mint komplett infrastruktúra
                megoldásszállító, az informatikai piac hangsúlyosabb
                szereplőjeként tevékenykedik.
              </p>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="figure-img img-fluid rounded"
              src="./kepek/UV2.jpg"
              alt="kép"
            />
          </Col>

          <Col>
            <p className="fw-bold">Tar György István</p>
            <p>Ügyvezető</p>
            <p>+36 30 229 4079</p>
            <a href="mailto:tar.gyorgy@csinfo.hu">tar.gyorgy@csinfo.hu</a>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Cegbemutato;
