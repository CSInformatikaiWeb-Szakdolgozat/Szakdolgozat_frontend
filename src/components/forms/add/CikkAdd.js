import React, { useContext, useState, useEffect } from "react"; 
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext.js";
import Ckeditor from "./ckeditor/Ckeditor.jsx";

function CikkAdd({ showModal, handleCloseModal }) {
  const { postAdat, getAdat, setCikkLista } = useContext(AdatokContext);

  const [nev, setNev] = useState(""); // Cikk név
  const [leiras, setLeiras] = useState(""); // Cikk leírás
  const [partner, setPartner] = useState(""); // Partner ID
  const [besorolas, setBesorolas] = useState(""); // Besorolás ID
  const [tartalom, setTartalom] = useState(""); // Tartalom (CKEditor)
  const [lathatosag, setLathatosag] = useState(false); // Láthatóság
  const [oldalLink, setOldalLink] = useState(""); // Oldal link
  const [partnerek, setPartnerek] = useState([]); // Partnerek lista
  const [besorolasok, setBesorolasok] = useState([]); // Besorolások lista
  const [dataLoaded, setDataLoaded] = useState(false); // Adatok betöltése

  // A partnerek és besorolások lekérése
  useEffect(() => {
    if (showModal && !dataLoaded) {
      // Partnerek lekérése és szűrése aktív állapotra
      getAdat("/api/partners", (data) => {
        console.log("Partnerek adatai:", data);
        setPartnerek(data); // Csak az aktív partnerek
      });
      
      // Besorolások lekérése és szűrése az upper_classification nem null értékűekre
      getAdat("/api/classes", (data) => {
        const validBesorolasok = data.filter(besorolas => besorolas.upper_classification !== null); // Csak a valid besorolások
        setBesorolasok(validBesorolasok); // Csak a valid besorolások
      });

      setDataLoaded(true);
    }
  }, [showModal, dataLoaded]);

  const handleLinkChange = (e) => {
    let newLink = e.target.value;
    if (newLink && !newLink.startsWith("/")) {
      newLink = "/" + newLink; // Biztosítja, hogy a link /-el kezdődjön
    }
    setOldalLink(newLink);
  };

  const kuld = (event) => {
    event.preventDefault();

    // Adatok formázása a backend számára
    let adat = {
      name: nev, // Cikk neve
      description: leiras, // Cikk leírása
      partner: partner, // Partner ID
      classification: besorolas, // Besorolás ID
      content: tartalom, // CKEditor tartalom
      visibility_status: lathatosag, // Láthatóság
      page_link: oldalLink, // Oldal link
    };

    console.log(adat); // Ellenőrizzük az adatokat

    // Adatok küldése a backendre
    postAdat("/api/article", adat)
      .then(() => {
        setCikkLista((prevLista) => [...prevLista, adat]); // Új cikk hozzáadása a listához
        handleCloseModal(); // Modal bezárása
      })
      .catch((error) => {
        console.error("Hiba történt a cikk hozzáadásakor:", error);
        // Hibakezelés itt, pl. alert vagy validálás
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
            <Form.Control 
              type="text" 
              value={nev} 
              onChange={(e) => setNev(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formLeiras">
            <Form.Label>Leírás</Form.Label>
            <Form.Control 
              as="textarea" 
              value={leiras} 
              onChange={(e) => setLeiras(e.target.value)} 
            />
          </Form.Group>

          {/* Partner választás lenyíló menü */}
          <Form.Group controlId="formPartner">
            <Form.Label>Partner</Form.Label>
            <Form.Control 
              as="select" 
              value={partner} 
              onChange={(e) => setPartner(e.target.value)} 
            >
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
            <Form.Control 
              as="select" 
              value={besorolas} 
              onChange={(e) => setBesorolas(e.target.value)} 
            >
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
            <Form.Check 
              type="checkbox" 
              label="Láthatóság" 
              checked={lathatosag} 
              onChange={(e) => setLathatosag(e.target.checked)} 
            />
          </Form.Group>

          {/* Oldal link */}
          <Form.Group controlId="formOldalLink">
            <Form.Label>Oldal Link</Form.Label>
            <Form.Control 
              type="text" 
              value={oldalLink} 
              onChange={handleLinkChange} 
              required 
            />
          </Form.Group>

          <Button variant="success" type="submit">Küld</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CikkAdd;
