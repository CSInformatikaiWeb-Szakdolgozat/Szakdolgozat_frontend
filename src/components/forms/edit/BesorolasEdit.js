import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function BesorolasEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, postAdat, setClassesLista } =
    useContext(AdatokContext);

  const [formData, setFormData] = useState({
    name: "",
    upper_classification: "",
  });
  const [loading, setLoading] = useState(false);
  const [classLista, setClassLista] = useState([]); // Felsőbb besorolások listája

  // Besorolás adatainak betöltése, ha elemId van
  useEffect(() => {
    if (elemId) {
      setLoading(true); // Betöltés kezdete
      getAdat(`/api/class/${elemId}`, (data) => {
        setLoading(false); // Betöltés befejezése
        if (data) {
          setFormData({
            name: data.name || "",
            upper_classification: data.upper_classification || "",
          });
        }
      });
    }

    // Felsőbb besorolások betöltése a select elemhez
    getAdat("/api/classes", (data) => {
      setClassLista(
        data.filter((besorolas) => besorolas.upper_classification !== null)
      ); // Csak a valid besorolások
    });
  }, [elemId]); // Csak akkor fut le, ha elemId változik

  // Űrlap mezők változásának kezelése
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Itt történik meg a módosítás
    }));
  };

  // Klónozás kezelése
  const handleClone = async () => {
    const clonedData = { ...formData, name: `${formData.name} (klónozva)` };

    try {
      setLoading(true); // Klónozás kezdete
      await postAdat("/api/class", clonedData);
      getAdat("/api/classes", setClassesLista); // Cikk lista frissítése
      handleCloseModal(); // Modal bezárása
    } catch (error) {
      console.error("Hiba történt a klónozás közben:", error);
    } finally {
      setLoading(false); // Klónozás befejezése
    }
  };

  // Űrlap beküldése
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ellenőrzés, hogy ne küldjünk üres adatokat
    if (!formData.name) {
      console.log("Hiányzó mezők, nem küldünk adatot.");
      return;
    }

    setLoading(true); // Betöltés kezdete
    patchAdat(`/api/class/${elemId}`, formData)
      .then(() => {
        getAdat("/api/classes", setClassesLista); // Besorolások lista frissítése
        handleCloseModal(); // Modal bezárása
      })
      .finally(() => setLoading(false)); // Betöltés befejezése
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Besorolás szerkesztése</Modal.Title>
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

            <Form.Group controlId="formClass">
              <Form.Label>Besorolás</Form.Label>
              <Form.Control
                as="select"
                name="classification"
                value={formData.classification}
                onChange={handleInputChange}
              >
                <option value="">-- Válassz felső besorolást --</option>
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

export default BesorolasEdit;
