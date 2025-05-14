import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";
import Ckeditor from "../add/ckeditor/Ckeditor";

function CikkEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, postAdat, setCikkLista, classLista } =
    useContext(AdatokContext);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    partner: "",
    classification: "",
    content: "",
    visibility_status: false,
    page_link: "",
  });
  const [loading, setLoading] = useState(false);

  // Cikk adatainak betöltése, ha elemId van
  useEffect(() => {
    if (elemId) {
      setLoading(true); // Betöltés kezdete
      getAdat(`/api/article/${elemId}`, (data) => {
        setLoading(false); // Betöltés befejezése
        if (data) {
          setFormData({
            name: data.name || "",
            description: data.description || "",
            partner: data.partner,
            classification: data.classification,
            content: data.content,
            visibility_status: data.visibility_status || false,
            page_link: data.page_link || "",
          });
        }
      });
    }
  }, [elemId]);

  // Űrlap mezők változásának kezelése
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Itt történik meg a módosítás
    }));
  };
  

  // Checkbox változásának kezelése
  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      visibility_status: e.target.checked,
    }));
  };

  // Űrlap beküldése
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ellenőrzés, hogy ne küldjünk üres adatokat
    if (!formData.name || !formData.description || !formData.content) {
      console.log("Hiányzó mezők, nem küldünk adatot.");
      return;
    }

    setLoading(true); // Betöltés kezdete
    patchAdat(`/api/article/${elemId}`, formData)
      .then(() => {
        getAdat("/api/articles", setCikkLista); // Cikk lista frissítése
        handleCloseModal(); // Modal bezárása
      })
      .finally(() => setLoading(false)); // Betöltés befejezése
  };

  // Klónozás kezelése
  const handleClone = async () => {
    const clonedData = { ...formData, name: `${formData.name} (klónozva)` };

    try {
      setLoading(true); // Klónozás kezdete
      await postAdat("/api/article", clonedData);
      getAdat("/api/articles", setCikkLista); // Cikk lista frissítése
      handleCloseModal(); // Modal bezárása
    } catch (error) {
      console.error("Hiba történt a klónozás közben:", error);
    } finally {
      setLoading(false); // Klónozás befejezése
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Cikk szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div>Betöltés...</div> // Betöltési üzenet
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Név</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={formData.name} // Itt jelenik meg az aktuális név
                onChange={
                  (e) => setFormData({ ...formData, name: e.target.value }) // Ha módosítják, frissítjük a formData-t
                }
              />
            </Form.Group>

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

            <Form.Group controlId="formPartner">
              <Form.Label>Partner</Form.Label>
              <Form.Control
                type="text"
                placeholder="Partner"
                name="partner"
                value={formData.partner}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formClass">
              <Form.Label>Besorolás</Form.Label>
              <Form.Control
                as="select"
                name="classification"
                value={formData.classification}
                onChange={handleInputChange}
              >
                <option value="">-- Válassz besorolást --</option>
                {classLista.length > 0 ? (
                  classLista.map((besorolas) => (
                    <option key={besorolas.id} value={besorolas.id}>
                      {besorolas.name}
                    </option>
                  ))
                ) : (
                  <option disabled>Nincs besorolás</option>
                )}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formContent">
              <Form.Label>Tartalom</Form.Label>
              <Ckeditor
                content={formData.content}
                onChange={(newContent) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    content: newContent,
                  }))
                }
              />
            </Form.Group>

            <Form.Group controlId="formStatus">
              <Form.Label>Státusz</Form.Label>
              <Form.Check
                type="checkbox"
                label="Aktív"
                checked={formData.visibility_status}
                onChange={handleCheckboxChange}
              />
            </Form.Group>

            <Form.Group controlId="formPageLink">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link"
                name="page_link"
                value={formData.page_link}
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

export default CikkEdit;
