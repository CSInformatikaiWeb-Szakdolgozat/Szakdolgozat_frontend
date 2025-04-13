import React, { useContext, useEffect, useState } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
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
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="text-end">
          {/* Gomb a modal megnyitásához */}
          <Button variant="success" onClick={handleShowModal}>
            Hozzáadás
          </Button>
          {/* EsemenyAdd komponens megjelenítése, átadva a modal vezérlését */}
          <EsemenyAdd showModal={showModal} handleCloseModal={handleCloseModal} />
        </Col>
      </Row>

      {/* Események táblázata */}
      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Leírás</th>
            <th>Helyszín</th>
            <th>Időpont</th>
            <th className="d-none d-lg-table-cell">Módosít</th>
            <th className="d-none d-lg-table-cell">Törlés</th>
          </tr>
        </thead>
        <tbody>
          {eventLista.map((elem, index) => (
            <tr key={index}>
              <EsemenyTableSor elem={elem} index={index} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default EsemenyTable;
