import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import useAdatokContext from "../contexts/AdatokContext";
import MenuTableSor from "./MenuTableSor";

function MenuTable() {
  const { menuLista, postAdat } = useContext(useAdatokContext);
  return (
    <div>
      <div className="text-end">
        <Button
          onClick={() => {
            // postAdat("/menu",);
            console.log("felvett új menüt");
          }}
          variant="success"
        >
          Felfesz
        </Button>
      </div>

      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Név</th>
            <th>Fő menü</th>
            <th>Link</th>
            <th>Megjelenít</th>
            <th>Link</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {menuLista.map((elem, index) => {
              return <MenuTableSor elem={elem} key={index} index={index} />;
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default MenuTable;
