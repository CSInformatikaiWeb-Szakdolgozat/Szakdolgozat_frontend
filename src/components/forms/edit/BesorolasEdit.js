import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function BesorolasEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, postAdat, setClassesLista, classesLista } = useContext(AdatokContext);
  const [formData, setFormData] = useState({
    name: "",
    upper_classification: "", // Felső osztályozás, amit a legördülő menüből választanak
    status: false,
  });

  useEffect(() => {
    if (elemId) {
      getAdat(`/api/class/${elemId}`, (data) => {
        setFormData({
          name: data.name,
          upper_classification: data.upper_classification,
          status: data.status,
        });
      });
    }

    // Frissítjük az osztályok listáját
    getAdat("/api/classes", setClassesLista);
  }, [elemId, getAdat, setClassesLista]);

  // Szűrés, hogy csak azok az osztályozások jelenjenek meg, amelyeknek null az upper_classification értéke
  const filteredClasses = classesLista.filter(classification => classification.upper_classification === null);

  // Klónozás kezelése
  const handleClone = async () => {
    const clonedData = { ...formData }; // Klónozzuk a jelenlegi adatokat
    clonedData.name = `${formData.name} (klónozva)`; // Klónozott elemhez új nevet adunk

    try {
      // POST kérés a klónozott adat mentéséhez
      await postAdat("/api/class", clonedData);
      // Frissítjük az osztálylistát, hogy az új rekord is megjelenjen
      getAdat("/api/classes", setClassesLista);
      handleCloseModal(); // Bezárja a modált
    } catch (error) {
      console.error("Hiba történt a klónozás közben:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    patchAdat(`/api/class`, elemId, formData); // Küldd el az adatokat a backendnek
    getAdat("/api/classes", setClassesLista); // Frissítse az osztálylistát
    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Szerkesztés</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Név"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Form.Group>

          {/* Felső osztályozás legördülő menü */}
          <Form.Group controlId="formClassification">
            <Form.Label>Felső osztályozás</Form.Label>
            <Form.Control
              as="select"
              value={formData.upper_classification}
              onChange={(e) =>
                setFormData({ ...formData, upper_classification: e.target.value })
              }
            >
              <option value="">-- Válassz felső osztályozást --</option>
              {filteredClasses && filteredClasses.map((classification) => (
                <option key={classification.id} value={classification.id}>
                  {classification.name}
                </option>
              ))}
            </Form.Control>
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

export default BesorolasEdit;
