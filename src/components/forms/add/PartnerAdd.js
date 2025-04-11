import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function PartnerAdd({ showModal, handleCloseModal }) {
  const { postAdat, setPartnerLista } = useContext(AdatokContext);

  const [nev, setNev] = useState(""); // Partner név
  const [weboldal, setWeboldal] = useState(""); // Weboldal
  const [statusz, setStatusz] = useState(false); // Aktív státusz
  const [partnerek, setPartnerek] = useState([]); // Partnerek lista
  const [dataLoaded, setDataLoaded] = useState(false); // Adatok betöltése

  // Partnerek adatainak betöltése
  useEffect(() => {
    if (showModal && !dataLoaded) {
      // Partnerek lekérése, ha modal megnyílik
      setDataLoaded(true);
    }
  }, [showModal, dataLoaded]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Adatok formázása a backend számára
    let adat = {
      name: nev, // Partner neve
      page: weboldal, // Weboldal
      status: statusz, // Aktív státusz
    };

    console.log(adat); // Ellenőrizzük az adatokat

    // Adatok küldése a backendre
    postAdat("/api/partner", adat)
      .then(() => {
        setPartnerLista((prevLista) => [...prevLista, adat]); // Új partner hozzáadása a listához
        handleCloseModal(); // Modal bezárása
      })
      .catch((error) => {
        console.error("Hiba történt a partner hozzáadásakor:", error);
        // Hibakezelés itt, pl. alert vagy validálás
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Új Partner Hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNev">
            <Form.Label>Név</Form.Label>
            <Form.Control
              type="text"
              value={nev}
              onChange={(e) => setNev(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formWeboldal">
            <Form.Label>Weboldal</Form.Label>
            <Form.Control
              type="text"
              value={weboldal}
              onChange={(e) => setWeboldal(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formStatusz">
            <Form.Label>Aktív</Form.Label>
            <Form.Check
              type="checkbox"
              label="Aktív partner"
              checked={statusz}
              onChange={(e) => setStatusz(e.target.checked)}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Hozzáadás
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default PartnerAdd;
