import React from "react";
import { Button, Table } from "react-bootstrap";
import AdminEsemenyTablaSor from "./AdminEsemenyTablaSor";

function AdminEsemeny() {
  const teszt = [
    {
      nev: "Esemény név",
      leiras: "teszt leirás",
      idopont: "10:30",
      helyszin: "teszt hely",
    },
    {
      nev: "Esemény név",
      leiras: "teszt leirás",
      idopont: "10:30",
      helyszin: "teszt hely",
    },
    {
      nev: "Esemény név",
      leiras: "teszt leirás",
      idopont: "10:30",
      helyszin: "teszt hely",
    },
    {
      nev: "Esemény név",
      leiras: "teszt leirás",
      idopont: "10:30",
      helyszin: "teszt hely",
    },
  ];
  return (
    <div>
      <div className="text-end">
        <Button variant="success">Felfesz</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Név</th>
            <th>Leírás</th>
            <th>Időpont</th>
            <th>Helyszín</th>
            <th>Szerkesztés</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {teszt.map((elem, index) => {
              return (
                <AdminEsemenyTablaSor elem={elem} key={index} index={index} />
              );
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminEsemeny;
