import React from "react";
import { Button, Table } from "react-bootstrap";
import AdminOldatTablaSor from "./AdminOldatTablaSor";

function AdminOldalak() {
  const teszt = [
    {
      foOldal: "Fő oldal teszt",
      id: "Aloldal teszt",
      tartalom: "teszt tartalom",
    },
    {
      foOldal: "Fő oldal teszt",
      id: "Aloldal teszt",
      tartalom: "teszt tartalom",
    },
    {
      foOldal: "Fő oldal teszt",
      id: "Aloldal teszt",
      tartalom: "teszt tartalom",
    },
  ];
  return (
    <div>
      <div className="text-end">
        <Button variant="success">Felfesz</Button>
      </div>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Név</th>
            <th>Aloldalak</th>
            <th>Tartalom</th>
            <th>Szerkesztés</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {teszt.map((elem, index) => {
              return (
                <AdminOldatTablaSor elem={elem} key={index} index={index} />
              );
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminOldalak;
