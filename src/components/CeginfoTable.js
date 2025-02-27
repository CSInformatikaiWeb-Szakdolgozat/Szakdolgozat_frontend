import React, { useContext } from "react";
import AdatokContext from "../contexts/AdatokContext";
import { Button } from "react-bootstrap";

function CeginfoTable() {
  const { companyInfoLista } = useContext(AdatokContext);

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
            <th>Cég neve</th>
            <th>Cég vezető</th>
            <th>Cég vezető email</th>
            <th>Cég vezető telefonszám</th>
            <th>Telephely</th>
            <th>Levelezési cím</th>
            <th>Székhely</th>
            <th>Adószám</th>
            <th>Cégjegyzék</th>
            <th>Elérhetőségi email</th>
            <th>Elérhetőségi telefonszám</th>
            <th>Hibabejelentési email</th>
            <th>Hibabejelentési telefonszám</th>
            <th>Árajánlatkérés</th>
            <th>Google maps</th>
            <th>Modosít</th>
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

export default CeginfoTable;
