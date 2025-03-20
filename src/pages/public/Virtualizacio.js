import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";

function Virtulazitacio() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-primary">Virtualizáció</h1>
          <Col>
            <h4 className="text-primary">Mit lehet virtualizálni?</h4>
            <Col>
              <div className="p-4 float-start">
                <img src="./kepek/virtualization.jpg" alt="kép" />
              </div>
              <p>
                Komplett szervereket, munkaállomásokat, hardver eszközöket,
                programokat. Hardver szinten tipikus példa a tárolók Thin
                provisioning képessége aminek a lényege, hogy a tárolóra kötött
                szerver adott tároló területet lát, valójában azonban a tárolón
                csak annyi terület van lefoglalva ami éppen aktuálisan adattal
                fel van töltve. Például egy Windows 2008 szervernek általában
                40GB tároló területet adunk az operációs rendszer számára. A
                tároló ezt a 40GB-ot mutatja a szerver felé, valójában azonban
                csak a 2GB tárhely van foglalva, amit a szerver telepítésekor
                felmásol a rendszerkötetre. A fennmaradó 38GB terület szabadon
                kiosztható a többi szerver között. Ethernet switchek esetén
                hasonló példa lehet a hardver virtualizációjára a VLAN, ahol egy
                porton keresztül akár több alhálózat is megjelenhet. Vagy a
                szerver virtualizáció, ahol egy fizikai szerveren akár több
                különböző operációs rendszer is futhat egy időben egymás mellet,
                de egymástól teljesen elszigetelten. Vagy itt van az alkalmazás
                virtualizáció, amikor egy központi operációs rendszeren akár 100
                felhasználó is futtathatja az SAP klienst, az MS Office
                programcsomag összetevőit, vagy a levelező kliensét.
              </p>
              <p>
                A virtualizáció hozománya a felhő alapú alkalmazások, illetve
                szolgáltatások megjelenése, ahol a virtualizációs technológiának
                köszönhetően a felhasználó, amikor megnyit egy MS Word, vagy
                Outlook alkalmazást, azt nem helyileg teszi a cég szerverein,
                hanem a Microsoft által biztosított{" "}
                <a href="#">MS Office 365</a>
                szolgáltatást használva, a világhálón keresztül valamelyik
                Microsoft adatközpontban futó szerverről.
              </p>
            </Col>
            <Col>
              <p>
                Nem célunk a virtualizáció teljes palettáját lefedni. Cégünk
                jellemzően az Infrastruktúra elemek, tárolók, szerverek
                virtualizációval foglakozik, e mellett az alkalmazás
                virtualizációból a központosított alkalmazás kiszolgálás,
                valamint VDI megoldások területén tud együttműködési lehetőséget
                biztosítani.
              </p>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="text-primary">Miért jó virtualizálni?</h4>
            <Col>
              <div className="mb-10 me-15 float-start">
                <img src="./kepek/virtualization2.jpg" alt="kép" />
              </div>
              <p>
                A virtualizáció lényege, hogy megszabaduljunk a hardver adta
                kötöttségektől, illetve, hogy hardvereink kihasználtságát
                növeljük. A technológia nyújtotta előnyök közé tartozik a magas
                fokú rugalmasság, skálázhatóság. Ezen felül az egyes gyártók
                fizetős megoldásai magukban hordozzák a nagy rendelkezésre
                állás, a folyamatos üzem, illetve a háttér rendszerek gyors,
                egyszerű és rugalmas kialakításának lehetőségét is. Bizonyos
                további komponensek hatékony megoldást nyújthatnak a mentési
                megoldások támogatásához is.
              </p>
              <p>
                A virtualizáció lehet szoftveres és hardveres megoldás. A
                hardveres megoldások körét már néhány szóban itt is
                megemlítettük, bővebben azonban a <a href="#">Megoldások</a>{" "}
                menüpont alatt kerülnek részletezésre, az adott technológiához
                kötődve.
              </p>
            </Col>
            <Col>
              <p>
                A virtualizáció szoftveres megoldása, amikor egy általános célú
                hardver eszközre egy közbenső, úgynevezett Hypervisor réteget
                beiktatva egy univerzális hardver felületet kapunk, ezáltal
                elfedjük a hardverünk speciális tulajdonságait. Ez a Hypervisor
                réteg teremt lehetőséget arra is, hogy egy fizikai hardveren
                több, az erőforrásokat hatékonyabban kihasználó virtuális
                környezet, például több Windows szerver 2008 példány fusson.
              </p>
              <p>
                Amikor szervervásárlásra kerül a sor ma már nehéz olyan
                konfigurációt összeállítani ahol egy operációsrendszer és az
                azon futó alkalmazás optimálisan használná ki a rendelkezésre
                álló erőforrásokat. Célszerű elgondolkozni azon, hogy csekély
                többlet ráfordítással, kicsit több RAM-ot véve a gépbe egy
                ingyenes Hipervisort feltelepítve, megszabadulhatunk az
                operációs rendszer hardver specifikus telepítési nyűgjeitől, nem
                beszélve arról a mobilitásról amit a technológia nyújt abban az
                esetben, ha esetleges hardver meghibásodás, vagy költözés esetén
                egy másik, akár más gyártótól származó hardverre kell
                átmozgassuk a meglévő telepítésünket.
              </p>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#">Szerver viztualizáció</a>
            <p>VMware vSphare</p>
          </Col>
          <Col>
            <a href="#">Deszktop virtualizáció</a>
            <p>VMware VDI, Microsoft RDS</p>
          </Col>
          <Col>
            <a href="#">Alkalmazás virtualizáció</a>
            <p>MS Office 365</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Virtulazitacio;
