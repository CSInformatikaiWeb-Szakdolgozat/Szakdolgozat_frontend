import React, { useContext, useState, useEffect } from "react"; 
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext.js";
import Ckeditor from "./ckeditor/Ckeditor.jsx";

function CikkAdd({ showModal, handleCloseModal }) {
  const { postAdat, getAdat, setCikkLista } = useContext(AdatokContext);

  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [partner, setPartner] = useState(""); // Partner lista tárolása
  const [besorolas, setBesorolas] = useState(""); // Besorolás lista tárolása
  const [tartalom, setTartalom] = useState(""); // Tartalom (CKEditor) tárolása
  const [lathatosag, setLathatosag] = useState(false);
  const [oldalLink, setOldalLink] = useState("");
  const [partnerek, setPartnerek] = useState([]); // Partnerek lista
  const [besorolasok, setBesorolasok] = useState([]); // Besorolások lista
  const [dataLoaded, setDataLoaded] = useState(false); // Adatok betöltése

  // A partnerek és besorolások lekérése
  useEffect(() => {
    if (showModal && !dataLoaded) {
      // Partnerek lekérése és szűrése aktív állapotra
      getAdat("/api/partners", (data) => {
        console.log("Partnerek adatai:", data); // Ellenőrizd az API válaszát
        const activePartners = data.filter(partner => partner.status === true);
        setPartnerek(activePartners); // Csak az aktív partnerek
      });
      
      // Besorolások lekérése és szűrése az upper_classification nem null értékűekre
      getAdat("/api/classes", (data) => {
        const validBesorolasok = data.filter(besorolas => besorolas.upper_classification !== null); // Csak a valid besorolások
        setBesorolasok(validBesorolasok); // Csak a valid besorolások
      });

      setDataLoaded(true);
    }
  }, [showModal, dataLoaded]); // Csak akkor fut le, ha a modal megjelenik és még nem töltődtek be az adatok

  const handleLinkChange = (e) => {
    let newLink = e.target.value;
    if (newLink && !newLink.startsWith("/")) {
      newLink = "/" + newLink;
    }
    setOldalLink(newLink);
  };

  const kuld = (event) => {
    event.preventDefault();

    let adat = {
      nev,
      leiras,
      partner,
      besorolas,
      tartalom,
      lathatosag,
      oldalLink,
    };

    console.log(adat);

    postAdat("/articles", adat)
      .then(() => {
        setCikkLista((prevLista) => [...prevLista, adat]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Hiba történt a cikk hozzáadásakor:", error);
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Új Cikk Hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={kuld}>
          <Form.Group controlId="formNev">
            <Form.Label>Név</Form.Label>
            <Form.Control type="text" value={nev} onChange={(e) => setNev(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formLeiras">
            <Form.Label>Leírás</Form.Label>
            <Form.Control as="textarea" value={leiras} onChange={(e) => setLeiras(e.target.value)} required />
          </Form.Group>

          {/* Partner választás lenyíló menü */}
          <Form.Group controlId="formPartner">
            <Form.Label>Partner</Form.Label>
            <Form.Control as="select" value={partner} onChange={(e) => setPartner(e.target.value)} required>
              <option value="">-- Válassz partnert --</option>
              {partnerek.length > 0 ? (
                partnerek.map((partner) => (
                  <option key={partner.id} value={partner.id}>
                    {partner.name} {/* Partner neve */}
                  </option>
                ))
              ) : (
                <option disabled>Partnerek betöltése...</option>
              )}
            </Form.Control>
          </Form.Group>

          {/* Besorolás választás lenyíló menü */}
          <Form.Group controlId="formBesorolas">
            <Form.Label>Besorolás</Form.Label>
            <Form.Control as="select" value={besorolas} onChange={(e) => setBesorolas(e.target.value)} required>
              <option value="">-- Válassz besorolást --</option>
              {besorolasok.length > 0 ? (
                besorolasok.map((besorolas) => (
                  <option key={besorolas.id} value={besorolas.id}>
                    {besorolas.name} {/* Besorolás neve */}
                  </option>
                ))
              ) : (
                <option disabled>Besorolások betöltése...</option>
              )}
            </Form.Control>
          </Form.Group>

          {/* Tartalom (CKEditor) */}
          <Form.Group controlId="formTartalom">
            <Form.Label>Tartalom</Form.Label>
            <Ckeditor value={tartalom} onChange={setTartalom} />
          </Form.Group>

          {/* Láthatóság checkbox */}
          <Form.Group controlId="formLathatosag">
            <Form.Check type="checkbox" label="Láthatóság" checked={lathatosag} onChange={(e) => setLathatosag(e.target.checked)} />
          </Form.Group>

          {/* Oldal link */}
          <Form.Group controlId="formOldalLink">
            <Form.Label>Oldal Link</Form.Label>
            <Form.Control type="text" value={oldalLink} onChange={handleLinkChange} required />
          </Form.Group>

          <Button variant="primary" type="submit">Küld</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CikkAdd;
