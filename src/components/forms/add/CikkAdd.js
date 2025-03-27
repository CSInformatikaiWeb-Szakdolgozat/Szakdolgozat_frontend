import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext.js";

import Ckeditor from "./ckeditor/Ckeditor.jsx";

function CikkAdd({ showModal, handleCloseModal }) {
  const {
    postAdat,
    getAdat,
    setCikkLista,
    partnerLista,
    setPartnerLista,
    classLista,
    setClassLista,
  } = useContext(AdatokContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [partnerId, setPartnerId] = useState(""); // Partner ID tárolása
  const [classId, setClassId] = useState(""); // Besorolás ID tárolása
  const [content, setContent] = useState("");
  const [visibilityStatus, setVisibilityStatus] = useState("");
  const [pageLink, setPageLink] = useState("");

  const [dataLoaded, setDataLoaded] = useState(false); // Nyomon követjük, hogy le lettek-e kérve az adatok

  // A partner lista lekérése csak egyszer, ha a modal megjelenik és még nem lett lekérve
  useEffect(() => {
    if (showModal && !dataLoaded) {
      // Ha a modal megjelenik és még nem lettek lekérve az adatok
      getAdat("/api/partners", setPartnerLista); // Lekérjük a partnereket
      getAdat("/api/classes", setClassLista); // Lekérjük a besorolásokat
      setDataLoaded(true); // Jelöljük, hogy az adatok le lettek kérve
    }
  }, [showModal, dataLoaded, getAdat, setPartnerLista, setClassLista]); // Csak akkor frissítjük, ha a modal látható és még nem történt meg a lekérés

  
  /* const handlePageLinkChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "null") {
      setPageLink(null); // Ha az új főmenüt választja, a main_menu értéke null lesz
    } else {
      setPageLink(selectedValue); // Ha egy meglévő főmenüt választ, annak id-jét beállítjuk
    }
  }; */

  // űrlap elküldése
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validáljuk, hogy a partner és besorolás választható értékek
    if (!partnerId || !classId) {
      alert("Kérjük, válasszon partnert és besorolást!");
      return;
    }

    const newArticle = {
      name,
      description,
      partner: partnerId, // Partner ID
      classification: classId, // Besorolás ID
      content: content,
      visibility_status: visibilityStatus,
      page_link: pageLink,
    };
    console.log(newArticle); // Az adatok naplózása a küldés előtt

    // Az új cikk adatainak elküldése a szerverre
    postAdat("/api/article", newArticle);
    getAdat("/api/articles", setCikkLista);
    handleCloseModal(); // A modal bezárása
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Cikk hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cikk neve"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              type="text"
              placeholder="Leírás"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPartner">
            <Form.Label>Partner</Form.Label>
            <Form.Control
              as="select"
              value={partnerId}
              onChange={(e) => setPartnerId(e.target.value)}
            >
              <option value="">-- Válassz partnert --</option>
              {partnerLista && partnerLista.length > 0 ? (
                partnerLista.map((partner) => (
                  <option key={partner.id} value={partner.id}>
                    {partner.name} {/* A partner nevét jelenítjük meg */}
                  </option>
                ))
              ) : (
                <option disabled>Nem található partner</option> // Ha nincs partner, mutassunk egy üzenetet
              )}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formClass">
            <Form.Label>Besorolás</Form.Label>
            <Form.Control
              as="select"
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
            >
              <option value="">-- Válassz besorolást --</option>
              {classLista && classLista.length > 0 ? (
                classLista.map((besorolas) => (
                  <option key={besorolas.id} value={besorolas.id}>
                    {besorolas.name} {/* A besorolás nevét jelenítjük meg */}
                  </option>
                ))
              ) : (
                <option disabled>Nem található besorolás</option> // Ha nincs besorolás, mutassunk egy üzenetet
              )}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formContent">
            <Form.Label>Tartalom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ide helyezd el a CKEditor-ban készített cikk HTML kódját!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            /> 
            <Ckeditor />
          </Form.Group>

          <Form.Group controlId="formStatus">
            <Form.Label>Megjelenítési állapot</Form.Label>
            <Form.Check
              type="checkbox"
              label="Aktív"
              checked={visibilityStatus}
              onChange={(e) => setVisibilityStatus(e.target.checked)}
            />
          </Form.Group>

          <Form.Group controlId="formPageLink">
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link"
              value={pageLink}
              onChange={(e) => setPageLink(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Hozzáadás
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CikkAdd;
