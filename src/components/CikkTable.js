import React, { useContext, useEffect, useState } from "react";
import useAdatokContext from "../contexts/AdatokContext";
import CikkTablaSor from "./CikkTableSor";
import { Button, Table } from "react-bootstrap";
import CikkAdd from "./forms/add/cikkAdd";

function CikkTable() {
  const { cikkLista, setCikkLista, getAdat } = useContext(useAdatokContext);
  useEffect(() => {
    getAdat("/api/articles", setCikkLista);
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

        {/* CikkAdd komponens megjelenítése, átadva a modal vezérlését */}
        <CikkAdd showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>

      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Név</th>
            <th>Leírás</th>
            <th>Partner</th>
            <th>Besorolás</th>
            <th>Megjelenít</th>
            <th>Link</th>
            <th>Módosít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {cikkLista.map((elem, index) => {
              return <CikkTablaSor elem={elem} key={index} index={index} />;
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default CikkTable;
