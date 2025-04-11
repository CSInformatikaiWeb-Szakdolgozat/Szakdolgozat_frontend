import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import EsemenyTableSor from "./EsemenyTableSor";
import EsemenyAdd from "./forms/add/EsemenyAdd";

function EsemenyTable() {
  const { eventLista, setEventLista, getAdat } = useContext(AdatokContext);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    getAdat("/api/events", setEventLista);
  }, []);

  return (
    <div>
      <div className="text-end">
        <Button variant="success" onClick={handleShowModal}>
          Hozzáadás
        </Button>
        <EsemenyAdd showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>

      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Leírás</th>
            <th>Helyszín</th>
            <th>Időpont</th>
            <th>Módosít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {eventLista.map((elem, index) => (
            <EsemenyTableSor elem={elem} key={index} index={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EsemenyTable;
