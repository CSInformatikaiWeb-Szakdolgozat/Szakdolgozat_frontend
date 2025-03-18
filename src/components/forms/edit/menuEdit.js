import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function MenuEdit({ showModal, handleCloseModal, menuId }) {
  const { getAdat, patchAdat, menuLista, setMenuLista } = useContext(AdatokContext);

  const [menu, setMenu] = useState({
    name: '',
    main_menu: null,
    link: '',
    status: false
  });

  useEffect(() => {
    // Ha van menuId, betöltjük a menüt
    if (menuId) {
      getAdat(`/api/menu/${menuId}`, (data) => setMenu(data));
    }
  }, [menuId, getAdat]);

  const handleMainMenuChange = (e) => {
    const selectedValue = e.target.value === "null" ? null : e.target.value;
    setMenu((prevMenu) => ({
      ...prevMenu,
      main_menu: selectedValue
    }));
  };

  const handleLinkChange = (e) => {
    let newLink = e.target.value;
    if (newLink && !newLink.startsWith("/")) {
      newLink = "/" + newLink; // Ha nem kezdődik "/"-rel, hozzáadjuk
    }
    setMenu((prevMenu) => ({
      ...prevMenu,
      link: newLink
    }));
  };

  const handleStatusChange = (e) => {
    setMenu((prevMenu) => ({
      ...prevMenu,
      status: e.target.checked
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!menu.id) {
      console.error("Nincs érvényes menü ID!");
      return;
    }
  
    // Frissített adat küldése
    patchAdat(`/api/menu`, menu.id, menu);  // API végpont és adat küldése
  
    // A menü lista frissítése
    setMenuLista((prevMenuLista) => {
      const updatedMenuLista = prevMenuLista.map((item) =>
        item.id === menuId ? { ...item, ...menu } : item
      );
      return updatedMenuLista;
    });
  
    handleCloseModal(); // Modal bezárása
  };
  

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Menü Szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Menü név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={menu.name}
              onChange={(e) => setMenu({ ...menu, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formMainMenu">
            <Form.Label>Főmenü pont</Form.Label>
            <Form.Control
              as="select"
              value={menu.main_menu === null ? "null" : menu.main_menu} 
              onChange={handleMainMenuChange}
            >
              <option>-- Válassz főmenüt --</option>
              <option value="null">Új főmenü</option>
              {menuLista
                .filter((menu) => menu.main_menu === null)
                .map((menu) => (
                  <option key={menu.id} value={menu.id}>
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
              value={menu.link}
              onChange={handleLinkChange}
            />
          </Form.Group>

          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Check
              type="checkbox"
              label="Aktív"
              checked={menu.status}
              onChange={handleStatusChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Mentés
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MenuEdit;
