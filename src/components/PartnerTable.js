import React, { useContext, useEffect, useState } from "react";
import AdatokContext from "../contexts/AdatokContext";
import { Button, Table } from "react-bootstrap";
import PartnerTableSor from "./PartnerTableSor";
import PartnerAdd from "./forms/add/PartnerAdd";

function PartnerTable() {
  const { partnerLista, setPartnerLista, getAdat } = useContext(AdatokContext);
  useEffect(() => {
    getAdat("/api/partners", setPartnerLista);
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

        {/* PartnerAdd komponens megjelenítése, átadva a modal vezérlését */}
        <PartnerAdd showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>

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
              console.log("belépet a ciklusba");
              return <PartnerTableSor elem={elem} key={index} index={index} />;
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default PartnerTable;
