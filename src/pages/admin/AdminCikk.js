import React from "react";
import { Button, Table } from "react-bootstrap";
import AdminRovatokTablaSor from "./AdminRovatokTablaSor";
import AdminCikkTablaSor from "./AdminCikkTablaSor";

function AdminCikk() {
  const teszt = [
    {
      nev: "Cikk név",
      leiras: "teszt leirás",
      partner: "teszt partner",
      megjelenit: true,
    },
    {
      nev: "Cikk név",
      leiras: "teszt leirás",
      partner: "teszt partner",
      megjelenit: false,
    },
    {
      nev: "Cikk név",
      leiras: "teszt leirás",
      partner: "teszt partner",
      megjelenit: true,
    },
    {
      nev: "Cikk név",
      leiras: "teszt leirás",
      partner: "teszt partner",
      megjelenit: false,
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
            <th>Leírás</th>
            <th>Partner</th>
            <th>Megjelenít</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {teszt.map((elem, index) => {
              return (
                <AdminCikkTablaSor elem={elem} key={index} index={index} />
              );
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminCikk;
