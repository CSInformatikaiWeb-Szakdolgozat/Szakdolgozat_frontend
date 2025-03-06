import React, { useContext, useEffect } from "react";
import AdatokContext from "../contexts/AdatokContext";
import { Button, Table } from "react-bootstrap";
import CeginfoTableSor from "./CeginfoTableSor";

function CeginfoTable() {
  const { companyInfoLista, setCompanyInfoLista, getAdat } =
    useContext(AdatokContext);
  useEffect(() => {
    getAdat("/api/companyinfos", setCompanyInfoLista);
  }, []);
  return (
    <div>
      <div className="text-end">
        <Button variant="success">Felvesz</Button>
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
            {companyInfoLista.map((elem, index) => {
              console.log("belépet a ciklusba");
              return <CeginfoTableSor elem={elem} key={index} index={index} />;
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default CeginfoTable;
