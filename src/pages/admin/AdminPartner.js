import React from "react";
import { Button, Table } from "react-bootstrap";
import AdminPartnerTablaSor from "./AdminPartnerTablaSor";

function AdminPartner() {
  const teszt = [
    {
      nev: "Partner név",
      link: "teszt link",
      allapot: true,
    },
    {
      nev: "Partner név",
      link: "teszt link",
      allapot: false,
    },
    {
      nev: "Partner név",
      link: "teszt link",
      allapot: true,
    },
    {
      nev: "Partner név",
      link: "teszt link",
      allapot: false,
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
            <th>Link</th>
            <th>Aktívítás</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <>
            {teszt.map((elem, index) => {
              return (
                <AdminPartnerTablaSor elem={elem} key={index} index={index} />
              );
            })}
          </>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminPartner;
