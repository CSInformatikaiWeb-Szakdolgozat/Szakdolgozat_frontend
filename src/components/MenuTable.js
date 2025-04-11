import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import MenuTableSor from "./MenuTableSor";
import MenuAdd from "./forms/add/MenuAdd";

function MenuTable() {
  const { menuLista, setMenuLista, getAdat } = useContext(AdatokContext);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (menuLista.length === 0) {
      getAdat("/api/menus", setMenuLista);
    }
  }, [menuLista, getAdat]);

  return (
    <div>
      <div className="text-end">
        <Button variant="success" onClick={handleShowModal}>
          Hozzáadás
        </Button>
        <MenuAdd showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>

      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Menü id</th>
            <th>Név</th>
            <th>Fő menü</th>
            <th>Szint</th>
            <th>Link</th>
            <th>Megjelenít</th>
            <th>Módosít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {menuLista.map((elem, index) => (
            <MenuTableSor elem={elem} key={index} index={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MenuTable;
