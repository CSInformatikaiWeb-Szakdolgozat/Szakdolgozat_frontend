import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function MenuEdit({ showModal, handleCloseModal, menuId }) {
  const { menuLista, getAdat, setMenuLista, patchAdat } = useContext(AdatokContext);

  const [formData, setFormData] = useState({
    name: "",
    main_menu: null,
    link: "",
    status: false,
  });

  // Szűrés, hogy csak azok a menük jelenjenek meg, amelyek main_menu értéke null
  const filteredMenuList = menuLista.filter((menu) => menu.main_menu === null);

  useEffect(() => {
    if (menuId) {
      // Ha van menuId, betöltjük az adatokat és frissítjük a formot
      getAdat(`/api/menu/${menuId}`, (data) => {
        if (data) {
          setFormData({
            name: data.name || "", // Ha nincs név, akkor alapértelmezett üres string
            main_menu: data.main_menu !== undefined ? data.main_menu : null, // Ha nincs main_menu, akkor null
            link: data.link || "", // Ha nincs link, akkor alapértelmezett üres string
            status: data.status || false, // Ha nincs status, akkor alapértelmezett false
          });
        } else {
          console.error("Nem sikerült betölteni a menüt");
        }
      });
    }
  }, [menuId, getAdat]);
  

  const handleMainMenuChange = (e) => {
    const selectedValue = e.target.value;
    const newMainMenu = selectedValue === "null" ? null : selectedValue;
  
    setFormData((prevData) => ({
      ...prevData,
      main_menu: newMainMenu, // Ha az új főmenüt választja, akkor null lesz
    }));
  };

  const handleLinkChange = (e) => {
    let newLink = e.target.value;
    if (newLink && !newLink.startsWith("/")) {
      newLink = "/" + newLink; // Ha nem kezdődik "/"-rel, hozzáadjuk
    }
    setFormData((prevData) => ({
      ...prevData,
      link: newLink,
    }));
  };

  const handleStatusChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      status: e.target.checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Ha nem történt változás, ne küldjünk adatot
    if (
      formData.name === "" ||
      formData.main_menu === null ||
      formData.link === "" ||
      formData.status === false
    ) {
      console.log("Nincs változás, nem küldünk adatot.");
      handleCloseModal();
      return; // Nincs szükség adatküldésre
    }
  
    // Ha módosultak az adatok, akkor elküldjük őket
    console.log("Küldött adat a backend-re:", formData);
  
    // A PATCH kérés a módosításokkal
    patchAdat(`/api/menu/${menuId}`, formData);
  
    // Frissítjük a menülistát a legújabb adatokkal
    getAdat("/api/menus", setMenuLista);
  
    handleCloseModal(); // Bezárja a modal-t a küldés után
  };
  

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Módosítás</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Menü név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formMainMenu">
            <Form.Label>Főmenü pont</Form.Label>
            <Form.Control
              as="select"
              value={formData.main_menu === null ? "null" : formData.main_menu} // Ha null, akkor az új főmenü lesz kiválasztva
              onChange={handleMainMenuChange}
            >
              <option value="null">-- Válassz főmenüt --</option>
              <option value="null">Új főmenü</option> {/* null érték lehetőség új főmenü esetén */}
              {filteredMenuList.map((menu) => (
                <option key={menu.id} value={menu.id}>
                  {menu.name} {/* A főmenü neve */}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formLink">
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link (pl. /menuoldal)"
              value={formData.link}
              onChange={handleLinkChange}
            />
          </Form.Group>

          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Check
              type="checkbox"
              label="Aktív"
              checked={formData.status}
              onChange={handleStatusChange} // Checkbox állapot módosítása
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Módosít
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MenuEdit;
