import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function CikkEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, postAdat, setCikkLista } = useContext(AdatokContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    partner: "",
    visibility_status: false,
    page_link: "",
  });

  useEffect(() => {
    if (elemId) {
      getAdat(`/api/article/${elemId}`, (data) => {
        setFormData({
          name: data.name,
          description: data.description,
          partner: data.partner,
          visibility_status: data.visibility_status,
          page_link: data.page_link,
        });
      });
    }
  }, [elemId, getAdat]);

  const handleSubmit = (event) => {
    event.preventDefault();
    patchAdat(`/api/article`, elemId, formData); // Küldd el az adatokat
    getAdat("/api/articles", setCikkLista); // Frissíti az cikkeket
    handleCloseModal();
  };

  // Klónozás kezelése
  const handleClone = async () => {
    const clonedData = { ...formData }; // Klónozzuk a jelenlegi adatokat
    clonedData.name = `${formData.name} (klónozva)`; // Klónozott elemhez új nevet adunk

    try {
      // POST kérés a klónozott adat mentéséhez
      await postAdat("/api/article", clonedData);
      // Frissítjük a cikkek listáját, hogy az új rekord is megjelenjen
      getAdat("/api/articles", setCikkLista);
      handleCloseModal(); // Bezárja a modált
    } catch (error) {
      console.error("Hiba történt a klónozás közben:", error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Cikk szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cikk neve"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              type="text"
              placeholder="Leírás"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formPartner">
            <Form.Label>Partner</Form.Label>
            <Form.Control
              type="text"
              placeholder="Partner"
              value={formData.partner}
              onChange={(e) => setFormData({ ...formData, partner: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Check
              type="checkbox"
              label="Aktív"
              checked={formData.visibility_status}
              onChange={(e) => setFormData({ ...formData, visibility_status: e.target.checked })}
            />
          </Form.Group>
          <Form.Group controlId="formPageLink">
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link"
              value={formData.page_link}
              onChange={(e) => setFormData({ ...formData, page_link: e.target.value })}
            />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* Módosítás gomb */}
        <Button variant="success" onClick={handleSubmit}>
          Módosítás
        </Button>

        {/* Klónozás gomb */}
        <Button variant="primary" onClick={handleClone}>
          Klónozás
        </Button>

        {/* Mégse gomb */}
        <Button variant="danger" onClick={handleCloseModal}>
          Mégse
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CikkEdit;
