import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function EsemenyEdit({ showModal, handleCloseModal, elemId }) {
  const { getAdat, patchAdat, postAdat, setEventLista } = useContext(AdatokContext);

  const [formData, setFormData] = useState({
    description: "",
    location: "",
    date: "",
  });

  // Esemény adat betöltése ha van elemId
  useEffect(() => {
    if (elemId) {
      getAdat(`/api/event/${elemId}`, (data) => {
        if (data) {
          setFormData({
            description: data.description || "",
            location: data.location || "",
            date: data.date || "",
          });
        } else {
          console.log("Nem található esemény.");
        }
      });
    }
  }, [elemId]); // Itt hozzáadjuk az elemId-t a függőség listához

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.description || !formData.location || !formData.date) {
      console.log("Hiányzó mezők.");
      return;
    }

    patchAdat(`/api/event/${elemId}`, formData);
    getAdat("/api/events", setEventLista);
    handleCloseModal();
  };

  const handleClone = async () => {
    const cloned = {
      ...formData,
      description: `${formData.description} (klónozva)`,
    };

    try {
      await postAdat("/api/event", cloned);
      getAdat("/api/events", setEventLista);
      handleCloseModal();
    } catch (error) {
      console.error("Hiba a klónozás közben:", error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Esemény módosítása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formLocation">
            <Form.Label>Helyszín</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Dátum</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSubmit}>
          Mentés
        </Button>
        <Button variant="primary" onClick={handleClone}>
          Klónozás
        </Button>
        <Button variant="danger" onClick={handleCloseModal}>
          Mégse
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EsemenyEdit;
