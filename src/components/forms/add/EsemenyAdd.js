import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext.js";

function EsesmenyAdd({ showModal, handleCloseModal, postAdat }) {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const kuld = (event) => {
    event.preventDefault();

    // A dátum formázása, hogy biztosan 'YYYY-MM-DD' formátumú string legyen
    const adat = {
      description,
      location,
      date: new Date(date).toISOString().split('T')[0], // 'YYYY-MM-DD' formátum
    };

    console.log(adat); // Ellenőrzés

    postAdat("/api/event", adat)
      .then(() => {
        handleCloseModal(); // Modal bezárása
      })
      .catch((error) => {
        console.error("Hiba az esemény hozzáadásakor:", error);
        // Hibakezelés itt
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Új Esemény Hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={kuld}>
          {/* Leírás */}
          <Form.Group controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esemény leírása"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          {/* Helyszín */}
          <Form.Group controlId="formLocation">
            <Form.Label>Helyszín</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esemény helyszíne"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          {/* Dátum */}
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
