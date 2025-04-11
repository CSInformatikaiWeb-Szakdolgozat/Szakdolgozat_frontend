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

  const [loading, setLoading] = useState(false);

  // Adatok betöltése ha van elemId
  useEffect(() => {
    if (elemId) {
      setLoading(true);
      getAdat(`/api/partner/${elemId}`, (data) => {
        setLoading(false);
        if (data) {
          setFormData({
            name: data.name || "",
            page: data.page || "",
            status: data.status || false,
          });
        }
      });
    }
  }, [elemId]);

  // Input mezők kezelése
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Checkbox kezelése
  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      status: e.target.checked,
    }));
  };

  // Mentés
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.page) return;

    setLoading(true);
    patchAdat(`/api/partner/${elemId}`, formData)
      .then(() => {
        getAdat("/api/partners", setPartnerLista);
        handleCloseModal();
      })
      .finally(() => setLoading(false));
  };

  // Klónozás
  const handleClone = async () => {
    const clonedData = { ...formData, name: `${formData.name} (klónozva)` };

    setLoading(true);
    await postAdat("/api/partner", clonedData);
    getAdat("/api/partners", setPartnerLista);
    setLoading(false);
    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Partner szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div>Betöltés...</div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Név</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Név"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPage">
              <Form.Label>Oldal</Form.Label>
              <Form.Control
                type="text"
                name="page"
                placeholder="Weboldal"
                value={formData.page}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formStatus">
              <Form.Check
                type="checkbox"
                label="Aktív"
                checked={formData.status}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSubmit}>
          Módosítás
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

export default PartnerEdit;
