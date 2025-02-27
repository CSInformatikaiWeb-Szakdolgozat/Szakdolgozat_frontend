import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import BesorolasTableSor from "./BesorolasTableSor";

function BesorolasTable() {
  const { classLista } = useContext(AdatokContext);

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
