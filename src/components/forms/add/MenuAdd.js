import React, { useContext, useState, useEffect } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function MenuAdd({ showModal, handleCloseModal }) {
  const { postAdat, menuLista, getAdat, setMenuLista } = useContext(AdatokContext);

  const [name, setName] = useState("");
  const [main_menu, setMainMenu] = useState(""); // Kezdő érték: ""
  const [link, setLink] = useState("");
  const [status, setStatus] = useState(false); // Default érték: false
  const [szint, setSzint] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false); // Nyomon követjük, hogy le vannak-e kérve az adatok
  const [showAlert, setShowAlert] = useState(false); // Az alert megjelenítéséhez szükséges állapot
  const [alertMessage, setAlertMessage] = useState(""); // Az alert üzenetének tárolása
  const [errors, setErrors] = useState({}); // Hibák tárolása, kezdő érték üres objektum

  // Szűrés, hogy csak azok a menük jelenjenek meg, amelyek main_menu értéke null
  const filteredMenuList = menuLista.filter((menu) => menu.main_menu === null);

  // Menülista lekérése csak akkor, amikor a modal megjelenik és még nem lett lekérve
  useEffect(() => {
    if (showModal && !dataLoaded) {
      // Ha a modal megjelenik és még nem lett lekérve az adat
      getAdat("/api/menus", setMenuLista); // Menülista lekérése
      setDataLoaded(true); // Jelöljük, hogy az adatok le lettek kérve
    }
  }, [showModal, dataLoaded, getAdat, setMenuLista]); // Csak akkor frissül, amikor a modal látható

  // Main menu változtatása
  const handleMainMenuChange = (e) => {
    const selectedValue = e.target.value;
    // Csak akkor állítjuk be a változásokat, ha nem akarjuk, hogy az alert megjelenjen
    if (selectedValue === "") {
      setMainMenu(null);
    } else if (selectedValue === "new") {
      setMainMenu("new");
    } else {
      setMainMenu(selectedValue);
    }
  };

  // Szint változtatása
  const handleSzintChange = (e) => {
    const selectedValue = e.target.value;
    setSzint(selectedValue); // Az opciók váltásakor nem szükséges alertet generálni
  };

  const handleLinkChange = (e) => {
    let newLink = e.target.value;
    if (newLink && !newLink.startsWith("/")) {
      newLink = "/" + newLink; // Ha nem kezdődik "/"-rel, hozzáadjuk
    }
    setLink(newLink);
  };

  // Menü hozzáadásának kezelése
  const kuld = (event) => {
    event.preventDefault();

    // Hibaüzenetek állapota
    let tempErrors = {};
    let isValid = true;

    // Validáció: Ha nincs kiválasztva a főmenü vagy a szint
    if (main_menu === "") {
      tempErrors.main_menu = "A főmenü kiválasztása kötelező!";
      isValid = false;
    }

    if (szint === "") {
      tempErrors.szint = "A szint kiválasztása kötelező!";
      isValid = false;
    }

    if (!isValid) {
      setErrors(tempErrors); // A hibák beállítása
      setAlertMessage("Kérjük, válasszon érvényes főmenüt és szintet!");
      setShowAlert(true); // Ha bármelyik hiba van, akkor megjelenítjük az alertet
      return;
    }

    // Ha minden validációs szabály teljesül, akkor készítjük el az adatokat
    let adat = {
      name: name,
      main_menu: main_menu === "new" ? null : main_menu, // Ha "Új főmenü"-t választanak, akkor null-ra állítjuk
      link: link,
      szint: szint,
      status: status,
    };

    console.log(adat); // Logoljuk a küldés előtt

    // Küldjük az adatokat
    postAdat("/api/menu", adat)
      .then(() => {
        // Hozzáadott menüpont frissítése a listában
        setMenuLista((prevLista) => [...prevLista, adat]); // Frissítjük a menüt
        handleCloseModal(); // Bezárja a modal-t a küldés után
      })
      .catch((error) => {
        console.error("Hiba történt a menü hozzáadásakor:", error);
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Form Küldése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Alert megjelenítése, ha a formot próbáljuk elküldeni */}
        {showAlert && (
          <Alert
            variant="danger"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            <Alert.Heading>Hiba!</Alert.Heading>
            {alertMessage}
          </Alert>
        )}

        <Form onSubmit={kuld}>
          <Form.Group controlId="formName">
            <Form.Label>Menü név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formMainMenu">
            <Form.Label>Főmenü pont</Form.Label>
            <Form.Control
              as="select"
              value={main_menu === null ? "" : main_menu} // Ha null, akkor az alapértelmezett "-- Válassz főmenüt --" érték legyen
              onChange={handleMainMenuChange}
            >
              <option value="">-- Válassz főmenüt --</option>
              <option value="new">Új főmenü</option> {/* Ezt választhatják */}
              {filteredMenuList.map((menu) => (
                <option key={menu.id} value={menu.id}>
                  {menu.name}
                </option>
              ))}
            </Form.Control>
            {errors.main_menu && (
              <div style={{ color: "red" }}>{errors.main_menu}</div>
            )}
          </Form.Group>

          <Form.Group controlId="formSzint">
            <Form.Label>Szint</Form.Label>
            <Form.Control
              as="select"
              value={szint}
              onChange={handleSzintChange}
            >
              <option value="">-- Válassz szintet --</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
            {errors.szint && (
              <div style={{ color: "red" }}>{errors.szint}</div>
            )}
          </Form.Group>

          <Form.Group controlId="formLink">
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link (pl. /menuoldal)"
              value={link}
              onChange={handleLinkChange}
            />
          </Form.Group>

          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Check
              type="checkbox"
              label="Aktív"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
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

export default MenuAdd;
