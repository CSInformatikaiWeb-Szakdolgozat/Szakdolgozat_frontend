import React, { useContext, useEffect, useState } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
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
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="text-end">
          <Button variant="success" onClick={handleShowModal}>
            Hozzáadás
          </Button>
        </Col>
      </Row>

      {/* Modal hozzáadás */}
      <BesorolasAdd
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />

      {/* Tábla megjelenítése */}
      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Id</th>
            <th>Felső besorolás</th>
            <th>Neve</th>
            <th>Módosít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {classLista.map((elem, index) => (
            <tr key={index}>
            <BesorolasTableSor elem={elem}  index={index} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default BesorolasTable;
