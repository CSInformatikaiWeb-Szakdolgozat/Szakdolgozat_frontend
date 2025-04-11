import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function BesorolasAdd({ showModal, handleCloseModal }) {
  const { postAdat, getAdat, setClassLista, classLista } = useContext(AdatokContext);

  const [nev, setNev] = useState(""); // Besorolás név
  const [upperClassification, setUpperClassification] = useState(""); // Felsőbb besorolás
  const [dataLoaded, setDataLoaded] = useState(false); // Adatok betöltése

  // Szűrés, hogy csak azok a besorolások jelenjenek meg, amelyek upper_classification értéke null
  const filteredBesorolasList = classLista.filter((besorolas) => besorolas.upper_classification !== null);

  // Felsőbb besorolások lekérése csak akkor, amikor a modal megjelenik és még nem lett lekérve
  useEffect(() => {
    if (showModal && !dataLoaded) {
      getAdat("/api/classes", (data) => {
        setClassLista(data); // Menülista lekérése
      });
      setDataLoaded(true); // Adatok le lettek kérve
    }
  }, [showModal, dataLoaded]);

  // Upper Classification változtatása
  const handleUpperClassificationChange = (e) => {
    setUpperClassification(e.target.value);
  };

  // Menü hozzáadásának kezelése
  const kuld = (event) => {
    event.preventDefault();

    // Ha minden validációs szabály teljesül, akkor készítjük el az adatokat
    let adat = {
      name: nev,
      upper_classification: upperClassification === "new" ? null : upperClassification, // Ha "Új főbesorolás"-t választanak, akkor null-ra állítjuk
    };

    // Küldjük az adatokat
    postAdat("/api/class", adat)
      .then(() => {
        setClassLista((prevLista) => [...prevLista, adat]); // Hozzáadott besorolás frissítése a listában
        handleCloseModal(); // Modal bezárása
      })
      .catch((error) => {
        console.error("Hiba történt a besorolás hozzáadásakor:", error);
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Új Besorolás Hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={kuld}>
          <Form.Group controlId="formNev">
            <Form.Label>Besorolás neve</Form.Label>
            <Form.Control
              type="text"
              value={nev}
              onChange={(e) => setNev(e.target.value)}
              required
            />
          </Form.Group>

          {/* Felsőbb besorolás választás lenyíló menü */}
          <Form.Group controlId="formUpperClassification">
            <Form.Label>Felsőbb Besorolás</Form.Label>
            <Form.Control
              as="select"
              value={upperClassification}
              onChange={handleUpperClassificationChange}
            >
              <option value="">-- Válassz felsőbb besorolást --</option>
              <option value="new">Új főbesorolás</option> {/* Ezt választhatják */}
              {filteredBesorolasList.length > 0 ? (
                filteredBesorolasList.map((besorolas) => (
                  <option key={besorolas.id} value={besorolas.id}>
                    {besorolas.name} {/* Felsőbb besorolás neve */}
                  </option>
                ))
              ) : (
                <option disabled>Besorolások betöltése...</option>
              )}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Küld
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default BesorolasAdd;
