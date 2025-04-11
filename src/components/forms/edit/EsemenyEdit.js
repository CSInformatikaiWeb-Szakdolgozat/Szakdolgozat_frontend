import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function EsemenyekEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, setEsemenyLista } = useContext(AdatokContext);

  const [formData, setFormData] = useState({
    description: "",
    location: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (elemId) {
      setLoading(true);
      getAdat(`/api/event/${elemId}`, (data) => {
        setLoading(false);
        if (data) {
          setFormData(data);
        }
      });
    }
  }, [elemId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    patchAdat(`/api/event/${elemId}`, formData)
      .then(() => {
        setEsemenyLista((prevList) =>
          prevList.map((item) =>
            item.id === elemId ? { ...item, ...formData } : item
          )
        );
        handleCloseModal();
      })
      .finally(() => setLoading(false));
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Esemény Szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div>Betöltés...</div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDescription">
              <Form.Label>Leírás</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Helyszín</Form.Label>
              <Form.Control
                type="text"
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

            <Button variant="success" type="submit">Mentés</Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default EsemenyekEdit;
