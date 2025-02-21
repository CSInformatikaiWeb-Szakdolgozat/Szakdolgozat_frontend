import React, { useContext, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap"; // Importáljuk a szükséges React-Bootstrap komponenseket
import AdatokContext from "../contexts/AdatokContext";

function MenuUj({ onFormSubmit }) {
  const { postAdat, getLastMenuId } = useContext(AdatokContext); // getLastMenuId API-t hívunk az adatbázisból
  const [menu, setMenu] = useState({
    name: "",
    main_menu: null,
    link: "",
    status: false,
  });
  const [lastMenuId, setLastMenuId] = useState(null); // Legutolsó menüpont ID

  useEffect(() => {
    // Az API hívás a legutolsó menüpont ID-jáért
    async function fetchLastMenuId() {
      const id = await getLastMenuId(); // Feltételezve, hogy van egy getLastMenuId metódus
      setLastMenuId(id);
    }

    fetchLastMenuId();
  }, []);

  function handleChange(event) {
    const { id, value, type, checked } = event.target;
    let updatedValue = type === "checkbox" ? checked : value;

    // Ha a link mezőt módosítjuk, akkor ellenőrizzük, hogy a link ne kezdődjön /-al
    if (id === "link") {
      updatedValue = updatedValue.startsWith("/")
        ? updatedValue
        : `/${updatedValue}`;
    }

    // Ha a fő menü (main_menu) értékét módosítjuk, ellenőrizzük, hogy ne legyen negatív
    if (id === "main_menu") {
      updatedValue = Math.max(lastMenuId, updatedValue); // A legutolsó menüpont ID-ját állítjuk be minimumként
    }

    setMenu({
      ...menu,
      [id]:
        id === "main_menu"
          ? updatedValue === "" || isNaN(updatedValue)
            ? null
            : parseFloat(updatedValue)
          : updatedValue,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    postAdat("/products", menu);

    if (onFormSubmit) {
      onFormSubmit(); // Form bezárása
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Menú név</Form.Label>
        <Form.Control
          type="text"
          required
          placeholder="Menü neve"
          value={menu.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="main_menu">
        <Form.Label>Fő menü</Form.Label>
        <Form.Control
          type="number"
          min={lastMenuId} // A minimum érték beállítása
          placeholder="Fő menü (null is lehet, ha fő menüpont)"
          value={menu.main_menu || ""}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="link">
        <Form.Label>Link</Form.Label>
        <Form.Control
          type="text"
          required
          placeholder="Link (automatikusan /-al kezdődik)"
          value={menu.link}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Megjelenítés</Form.Label>
        <Form.Check
          type="switch"
          id="status"
          label="Aktív"
          checked={menu.status}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Küld
      </Button>
    </Form>
  );
}

export default MenuUj;
