import React, { useContext, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import MenuTableSor from "./MenuTableSor";
import MenuUj from "./MenuUj";
import AltalanosForm from "./AltalanosForm";

function MenuTable() {
  const { menuLista } = useContext(AdatokContext);
  const [showForm, setShowForm] = useState(false); // Állapot a form megjelenítéséhez

  // Függvény, amely eltünteti a formot
  const handleFormSubmit = () => {
    setShowForm(false); // Form elrejtése
  };
  const handleShow = () => setShowForm(true); // A form megjelenítése
  const handleClose = () => setShowForm(false); // A form bezárása
  return (
    <div>
      <div className="">
        <Button
          onClick={() => {
            // postAdat("/menu",);
            console.log("felvett új menüt");
          }}
          variant="success"
        >
          Mentés
        </Button>
      </div>
      <AltalanosForm
        apiEndpoint="/menus"
        formTitle="Új Menü Felvétele"
        onFormSubmit={() => {
         
        }}
      />

      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <tr>Id</tr>
            <th>Név</th>
            <th>Fő menü</th>
            <th>Link</th>
            <th>Megjelenít</th>
            <th>Modosít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {menuLista.map((elem, index) => {
              console.log("belépet a ciklusba");
              return <MenuTableSor elem={elem} key={index} index={index} />;
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default MenuTable;
