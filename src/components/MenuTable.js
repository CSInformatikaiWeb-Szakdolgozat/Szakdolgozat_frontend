import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import MenuTableSor from "./MenuTableSor";


function MenuTable() {
  const { menuLista } = useContext(AdatokContext);

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
   

      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Id</th>
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
