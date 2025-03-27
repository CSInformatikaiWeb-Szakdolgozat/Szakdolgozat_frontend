import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function EsemenyEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, postAdat, setEsemenyLista } = useContext(AdatokContext);
  const [formData, setFormData] = useState({
    description: "",
    location: "",
    date: "",
    status: false,
  });

  useEffect(() => {
    if (elemId) {
      getAdat(`/api/event/${elemId}`, (data) => {
        setFormData({
          description: data.description,
          location: data.location,
          date: data.date,
          status: data.status,
        });
      });
    }
  }, [elemId, getAdat]);

  const handleSubmit = (event) => {
    event.preventDefault();
    patchAdat(`/api/event`, elemId, formData); // Küldd el az adatokat
    getAdat("/api/events", setEsemenyLista); // Frissíti az eseményeket
    handleCloseModal();
  };

  // Klónozás kezelése
  const handleClone = async () => {
    const clonedData = { ...formData }; // Klónozzuk a jelenlegi adatokat
    clonedData.description = `${formData.description} (klónozva)`; // Klónozott elemhez új leírást adunk

    try {
      // POST kérés a klónozott adat mentéséhez
      await postAdat("/api/event", clonedData);
      // Frissítjük az események listáját, hogy az új rekord is megjelenjen
      getAdat("/api/events", setEsemenyLista);
      handleCloseModal(); // Bezárja a modált
    } catch (error) {
      console.error("Hiba történt a klónozás közben:", error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Esemény szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esemény leírás"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Helyszín</Form.Label>
            <Form.Control
              type="text"
              placeholder="Helyszín"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Dátum</Form.Label>
            <Form.Control
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
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

export default EsemenyEdit;
