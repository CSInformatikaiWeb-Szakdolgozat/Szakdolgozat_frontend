import React, { useContext, useEffect, useState } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap"; // Container és Row hozzáadása
import CikkTablaSor from "./CikkTableSor";
import CikkAdd from "./forms/add/CikkAdd";
import AdatokContext from "../contexts/AdatokContext";

function CikkTable() {
  const { cikkLista, setCikkLista, getAdat } = useContext(AdatokContext);

  useEffect(() => {
    getAdat("/api/articles", setCikkLista);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="text-end">
          {/* Gomb a modal megnyitásához */}
          <Button variant="success" onClick={handleShowModal}>
            Hozzáadás
          </Button>
          {/* CikkAdd komponens megjelenítése, átadva a modal vezérlését */}
          <CikkAdd showModal={showModal} handleCloseModal={handleCloseModal} />
        </Col>
      </Row>

      {/* Cikkek táblázata */}
      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Név</th>
            <th>Leírás</th>
            <th>Partner</th>
            <th>Besorolás</th>
            <th>Tartalom</th>
            <th>Megjelenít</th>
            <th>Link</th>
            <th>Módosít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {cikkLista.map((elem,index) => (
            <tr key={index}>
              <CikkTablaSor elem={elem} index={index}/>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default CikkTable;
