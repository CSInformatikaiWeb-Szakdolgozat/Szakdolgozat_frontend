import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function PartnerEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, postAdat, setPartnerLista } = useContext(AdatokContext);
  const [formData, setFormData] = useState({
    name: "",
    page: "",
    status: false,
  });

  useEffect(() => {
    if (elemId) {
      getAdat(`/api/partner/${elemId}`, (data) => {
        setFormData({
          name: data.name,
          page: data.page,
          status: data.status,
        });
      });
    }
  }, [elemId, getAdat]);

  const handleSubmit = (event) => {
    event.preventDefault();
    patchAdat(`/api/partner`, elemId, formData); // Küldd el az adatokat
    getAdat("/api/partners", setPartnerLista); // Frissíti a partnerek listáját
    handleCloseModal();
  };

  // Klónozás kezelése
  const handleClone = async () => {
    const clonedData = { ...formData }; // Klónozzuk a jelenlegi adatokat
    clonedData.name = `${formData.name} (klónozva)`; // Klónozott partnerhez új nevet adunk

    try {
      // POST kérés a klónozott adat mentéséhez
      await postAdat("/api/partner", clonedData);
      // Frissítjük a partnerek listáját, hogy az új rekord is megjelenjen
      getAdat("/api/partners", setPartnerLista);
      handleCloseModal(); // Bezárja a modált
    } catch (error) {
      console.error("Hiba történt a klónozás közben:", error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Partner szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Partner neve"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formPage">
            <Form.Label>Weboldal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Weboldal"
              value={formData.page}
              onChange={(e) => setFormData({ ...formData, page: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Check
              type="checkbox"
              label="Aktív"
              checked={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
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

export default PartnerEdit;
