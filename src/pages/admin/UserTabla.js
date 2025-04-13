import React, { useContext, useEffect, useState } from "react";
import AdatokContext from "../../contexts/AdatokContext";
import UserTablaSor from "./UserTablaSor";
import UserAdd from "./UserAdd";
import { Button, Table } from "react-bootstrap";


function UserTable() {
  const { setUserLista,userLista, getAdat } = useContext(AdatokContext);
  useEffect(() => {
    getAdat("/api/users",setUserLista );
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

        {/* UserAdd komponens megjelenítése, átadva a modal vezérlését */}
        <UserAdd showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>

      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th className="d-none d-sm-table-cell">Név</th>
            <th className="d-none d-md-table-cell">Email</th>
            <th className="d-none d-md-table-cell">Jelszó</th>
            <th className="d-none d-lg-table-cell">Módosít</th>
            <th className="d-none d-lg-table-cell">Törlés</th>
          </tr>
        </thead>
        <tbody>
          {userLista.map((elem, index) => {
            return <UserTablaSor elem={elem} key={index} index={index} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
