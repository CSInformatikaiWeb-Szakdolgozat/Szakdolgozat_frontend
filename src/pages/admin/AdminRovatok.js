import React from "react";
import { Button, Table } from "react-bootstrap";
import AdminRovatokTablaSor from "./AdminRovatokTablaSor";

function AdminRovatok() {
  const teszt = [
    {
      nev: "Rovat név",
      leiras: "teszt leirás",
    },
    {
      nev: "Rovat név",
      leiras: "teszt leirás",
    },
    {
      nev: "Rovat név",
      leiras: "teszt leirás",
    },
    {
      nev: "Rovat név",
      leiras: "teszt leirás",
    },
  ];
  return (
    <div>
      <div className="text-end">
        <Button variant="success">Felfesz</Button>
      </div>

      <Table striped bordered hover >
        <thead className="text-center">
          <tr>
            <th>Név</th>
            <th>Leírás</th>
            <th>Szerkesztés</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {teszt.map((elem, index) => {
              return (
                <AdminRovatokTablaSor elem={elem} key={index} index={index} />
              );
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminRovatok;
