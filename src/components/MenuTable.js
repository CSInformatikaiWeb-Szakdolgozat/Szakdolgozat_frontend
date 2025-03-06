import React, { useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import MenuTableSor from "./MenuTableSor";

function MenuTable() {
  const { menuLista,setMenuLista,getAdat } = useContext(AdatokContext);
  useEffect(() => {
    getAdat("/api/menus", setMenuLista);
  }, []);
  return (
    <div>
      <div className="text-end">
          <Button variant="success">Felvesz</Button>
        </div>

      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Menü id</th>
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
