import React, { useState, useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext.js";

function EsesmenyAdd({ showModal, handleCloseModal }) {
  const { postAdat, setEventLista } = useContext(AdatokContext);

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const kuld = (event) => {
    event.preventDefault();

    const adat = {
      description,
      location,
      date: new Date(date).toISOString().split("T")[0], // 'YYYY-MM-DD'
    };

    console.log(adat);

    postAdat("/api/event", adat)
      .then(() => {
        setEventLista((prevLista) => [...prevLista, adat]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Hiba történt az esemény hozzáadásakor:", error);
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Új Esemény Hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={kuld}>
          <Form.Group controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esemény leírása"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formLocation">
            <Form.Label>Helyszín</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esemény helyszíne"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Dátum</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Küld
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EsesmenyAdd;
