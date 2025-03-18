import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import MenuTableSor from "./MenuTableSor";
import MenuAdd from "../components/forms/add/menuAdd"; // Importáljuk a menuAdd komponenst

function MenuTable() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const { menuLista, setMenuLista, getAdat } = useContext(AdatokContext);
  useEffect(() => {
    getAdat("/api/menus", setMenuLista);
  }, []);
  return (
    <div>
      <div className="text-end">
        {/* Gomb a modal megnyitásához */}
        <Button variant="success" onClick={handleShowModal}>
          Hozzáadás
        </Button>

        {/* MenuAdd komponens megjelenítése, átadva a modal vezérlését */}
        <MenuAdd showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>

      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Menü id</th>
            <th>Név</th>
            <th>Fő menü</th>
            <th>Link</th>
            <th>Megjelenít</th>
            <th>Módosít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {menuLista.map((elem, index) => {
              console.log("Belépett a ciklusba");
              return <MenuTableSor elem={elem} key={index} index={index} />;
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default MenuTable;
