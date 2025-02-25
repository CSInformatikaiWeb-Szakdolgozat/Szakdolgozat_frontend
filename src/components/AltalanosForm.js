import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext"; // Feltételezve, hogy van useApi hook

const AltalanosForm = ({ apiEndpoint, formTitle, onFormSubmit }) => {
  const { getAdat, postAdat, patchAdat, loading, error } = AdatokContext();

  const [formData, setFormData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (apiEndpoint && !isEditMode) {
      // Ha a form editálás módban van, akkor nem töltjük újra az adatokat
      getAdat(apiEndpoint, (data) => {
        setFormData(data); // Feltételezzük, hogy az adat egy objektum
      });
    }
  }, [apiEndpoint, isEditMode, getAdat]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditMode) {
      // Ha editálás mód van, frissítjük az adatot
      await patchAdat(apiEndpoint, formData.id, formData);
    } else {
      // Ha új adat, akkor POST-tal küldjük el
      await postAdat(apiEndpoint, formData);
    }

    if (onFormSubmit) onFormSubmit();
  };

  return (
    <Modal show onHide={() => {}} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{formTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <Form.Group key={key} controlId={key} className="mb-3">
              <Form.Label>{key}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter ${key}`}
                value={formData[key]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Küldés..." : "Küld"}
          </Button>
        </Form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Modal.Body>
    </Modal>
  );
};

export default AltalanosForm;
