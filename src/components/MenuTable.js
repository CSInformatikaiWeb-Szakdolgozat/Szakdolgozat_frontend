import React, { useContext, useEffect, useState } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import MenuTableSor from "./MenuTableSor";
import MenuAdd from "./forms/add/MenuAdd";

function MenuTable() {
  const { menuLista, setMenuLista, getAdat } = useContext(AdatokContext);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (menuLista.length === 0) {
      getAdat("/api/menus", setMenuLista);
    }
  }, [menuLista, getAdat]);

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="text-end">
          {/* Gomb a modal megnyitásához */}
          <Button variant="success" onClick={handleShowModal}>
            Hozzáadás
          </Button>
          {/* MenuAdd komponens megjelenítése, átadva a modal vezérlését */}
          <MenuAdd showModal={showModal} handleCloseModal={handleCloseModal} />
        </Col>
      </Row>

      {/* Menü táblázata */}
      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Menü id</th>
            <th>Név</th>
            <th>Fő menü</th>
            <th>Szint</th>
            <th>Link</th>
            <th>Megjelenít</th>
            <th className="d-none d-lg-table-cell">Módosít</th>
            <th className="d-none d-lg-table-cell">Törlés</th>
          </tr>
        </thead>
        <tbody>
          {menuLista.map((elem, index) => (
            <tr key={index}>
              <MenuTableSor elem={elem} index={index} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default MenuTable;
