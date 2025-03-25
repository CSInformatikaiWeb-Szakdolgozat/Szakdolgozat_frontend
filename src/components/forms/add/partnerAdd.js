import React from 'react'

function PartnerAdd() {
  const { postAdat, menuLista, getAdat, setMenuLista } =
  useContext(AdatokContext);

const [name, setName] = useState("");
const [main_menu, setMainMenu] = useState("");
const [link, setLink] = useState("");
const [status, setStatus] = useState("");
const [dataLoaded, setDataLoaded] = useState(false); // Nyomon követjük, hogy le vannak-e kérve az adatok

// Szűrés, hogy csak azok a menük jelenjenek meg, amelyek main_menu értéke null
const filteredMenuList = menuLista.filter((menu) => menu.main_menu === null);

// Menülista lekérése csak akkor, amikor a modal megjelenik és még nem lett lekérve
useEffect(() => {
  if (showModal && !dataLoaded) { // Ha a modal megjelenik és még nem lett lekérve az adat
    getAdat("/api/menus", setMenuLista); // Menülista lekérése
    setDataLoaded(true); // Jelöljük, hogy az adatok le lettek kérve
  }
}, [showModal, dataLoaded, getAdat, setMenuLista]); // Csak akkor frissül, amikor a modal látható

// Main menu kiválasztása és automatikusan új főmenü beállítása
const handleMainMenuChange = (e) => {
  const selectedValue = e.target.value;
  if (selectedValue === "null") {
    setMainMenu(null); // Ha az új főmenüt választja, a main_menu értéke null lesz
  } else {
    setMainMenu(selectedValue); // Ha egy meglévő főmenüt választ, annak id-jét beállítjuk
  }
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
  let adat = {
    name: name,
    main_menu: main_menu,
    link: link,
    status: status,
  };
  console.log(adat); // Logoljuk a küldés előtt

  // Küldjük az adatokat
  postAdat("/api/menu", adat)
    .then(() => {
      // Hozzáadott menüpont frissítése a listában
      setMenuLista((prevLista) => [...prevLista, adat]);  // Frissítjük a menüt
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
            value={main_menu === null ? "null" : main_menu} // Ha null, akkor az új főmenü lesz kiválasztva
            onChange={handleMainMenuChange}
          >
            <option>-- Válassz főmenüt --</option>
            <option value="null">Új főmenü</option>{" "}
            {/* null érték lehetőség új főmenü esetén */}
            {filteredMenuList.map((menu) => (
              <option key={menu.id} value={menu.id}>
                {" "}
                {/* A főmenü id-jére hivatkozunk */}
                {menu.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formLink">
          <Form.Label>Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter link (pl. /menuoldal)"
            value={link}
            onChange={handleLinkChange} // Link változtatás kezelése
          />
        </Form.Group>

        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Check
            type="checkbox"
            label="Aktív"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)} // Checkbox állapot módosítása
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

export default PartnerAdd