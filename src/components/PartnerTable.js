import React, { useContext, useEffect, useState } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import PartnerTableSor from "./PartnerTableSor";
import PartnerAdd from "./forms/add/PartnerAdd"; // Importáljuk a PartnerAdd komponenst

function PartnerTable() {
  const { partnerLista, setPartnerLista, getAdat } = useContext(AdatokContext);

  // Partnerek lekérése a kezdetekor
  useEffect(() => {
    getAdat("/api/partners", setPartnerLista);
  }, []);

  const [showModal, setShowModal] = useState(false);

  // Modal megjelenítése és eltüntetése
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container>
      <Row className="my-3">
        <Col className="text-end">
          {/* Gomb a modal megnyitásához */}
          <Button variant="success" onClick={handleShowModal}>
            Hozzáadás
          </Button>

          {/* PartnerAdd komponens megjelenítése, átadva a modal vezérlését */}
          <PartnerAdd showModal={showModal} handleCloseModal={handleCloseModal} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead className="text-center">
              <tr>
                <th>Név</th>
                <th>Oldal</th>
                <th>Megjelenítés</th>
                <th>Módosít</th>
                <th>Törlés</th>
              </tr>
            </thead>
            <tbody>
              <>
                {partnerLista.map((elem, index) => {
                  return <PartnerTableSor elem={elem} key={index} index={index} />;
                })}
              </>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default PartnerTable;
