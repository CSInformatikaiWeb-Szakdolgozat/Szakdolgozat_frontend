import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function CikkAdd({ showModal, handleCloseModal }) {
  const { postAdat, getAdat, setArticleLista } = useContext(AdatokContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [partner, setPartner] = useState("");
  const [visibilityStatus, setVisibilityStatus] = useState(false);
  const [pageLink, setPageLink] = useState("");

  // Űrlap elküldése
  const handleSubmit = (event) => {
    event.preventDefault();
    const newArticle = {
      name,
      description,
      partner,
      visibility_status: visibilityStatus,
      page_link: pageLink,
    };
    console.log(newArticle); // Az adatok naplózása a küldés előtt

    // Az új cikk adatainak elküldése a szerverre
    postAdat("/api/article", newArticle)
      .then(() => {
        // Sikeres cikk hozzáadása után frissítjük a cikkek listáját
        getAdat("/api/articles", setArticleLista);
        handleCloseModal(); // A modal bezárása
      })
      .catch((error) => {
        console.error("Hiba történt a cikk hozzáadása során:", error);
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
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
              type="text"
              placeholder="Partner"
              value={partner}
              onChange={(e) => setPartner(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
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
