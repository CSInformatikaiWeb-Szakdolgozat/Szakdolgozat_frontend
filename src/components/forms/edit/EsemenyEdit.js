import React, { useState, useEffect, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function EsemenyEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, setEsemenyLista } = useContext(AdatokContext);

  const [formData, setFormData] = useState({
    description: "",
    location: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  // Esemény adatainak betöltése szerkesztés előtt (ha elemId van)
  useEffect(() => {
    if (elemId) {
      setLoading(true);
      getAdat(`/api/event/${elemId}`, (data) => {
        setLoading(false);
        if (data) {
          setFormData({
            description: data.description || "",
            location: data.location || "",
            date: data.date || "", // Az esemény dátuma
          });
        }
      });
    }
  }, [elemId, getAdat]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Az esemény adatainak szerkesztése (PATCH /api/event/{id})
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.description || !formData.location || !formData.date) {
      console.log("Hiányzó mezők, nem küldünk adatot.");
      return;
    }

    setLoading(true);
    try {
      await patchAdat(`/api/event/${elemId}`, formData); // Esemény szerkesztése
      getAdat("/api/events", setEsemenyLista); // Esemény lista frissítése
      handleCloseModal(); // Modal bezárása
    } catch (error) {
      console.error("Hiba történt az esemény szerkesztésekor:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Esemény szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <p>Betöltés...</p> // Betöltési üzenet
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDescription">
              <Form.Label>Leírás</Form.Label>
              <Form.Control
                type="text"
                placeholder="Leírás"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Helyszín</Form.Label>
              <Form.Control
                type="text"
                placeholder="Helyszín"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Dátum</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSubmit}>
          Módosítás
        </Button>
        <Button variant="secondary" onClick={handleCloseModal}>
          Mégse
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EsemenyEdit;
