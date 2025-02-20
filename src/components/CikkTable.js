import React, { useContext } from "react";
import useAdatokContext from "../contexts/AdatokContext";
import CikkTablaSor from "./CikkTableSor";
import { Button, Table } from "react-bootstrap";

function CikkTable() {
  const { cikkLista, postAdat, deletAdat } = useContext(useAdatokContext);
  return (
    <div>
      <div className="text-end">
        <Button variant="success">Felfesz</Button>
      </div>

      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Név</th>
            <th>Leírás</th>
            <th>Partner</th>
            <th>Besorolás</th>
            <th>Megjelenít</th>
            <th>Link</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {cikkLista.map((elem, index) => {
              return <CikkTablaSor elem={elem} key={index} index={index} />;
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default CikkTable;
