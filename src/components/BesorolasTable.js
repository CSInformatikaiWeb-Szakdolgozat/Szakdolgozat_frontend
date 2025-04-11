import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import BesorolasTableSor from "./BesorolasTableSor";
import BesorolasAdd from "./forms/add/BesorolasAdd";

function BesorolasTable() {
  const { classLista, setClassLista, getAdat } = useContext(AdatokContext);
  useEffect(() => {
    getAdat("/api/classes", setClassLista);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <div className="text-end">
        {/* Gomb a modal megnyitásához */}
        <Button variant="success" onClick={handleShowModal}>
          Hozzáadás
        </Button>

        {/* BesorolasAdd komponens megjelenítése, átadva a modal vezérlését */}
        <BesorolasAdd showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>

      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Id</th>
            <th className="d-none d-sm-table-cell">Felső besorolás</th>
            <th className="d-none d-md-table-cell">Neve</th>
            <th className="d-none d-md-table-cell">Módosít</th>
            <th className="d-none d-md-table-cell">Törlés</th>
          </tr>
        </thead>
        <tbody>
          {classLista.map((elem, index) => {
            return <BesorolasTableSor elem={elem} key={index} index={index} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default BesorolasTable;
