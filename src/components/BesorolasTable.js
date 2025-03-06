import React, { useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import BesorolasTableSor from "./BesorolasTableSor";

function BesorolasTable() {
  const { classLista, setClassLista, getAdat } = useContext(AdatokContext);
  useEffect(() => {
    getAdat("/api/classes", setClassLista);
  }, []);

  return (
    <div>
      <div className="text-end">
        <Button variant="success">Felvesz</Button>
      </div>

      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Id</th>
            <th>Felső besorolás</th>
            <th>Neve</th>
            <th>Modosít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {classLista.map((elem, index) => {
              console.log("belépet a ciklusba");
              return (
                <BesorolasTableSor elem={elem} key={index} index={index} />
              );
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default BesorolasTable;
