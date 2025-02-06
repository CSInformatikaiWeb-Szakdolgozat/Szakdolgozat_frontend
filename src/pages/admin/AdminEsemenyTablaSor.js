import React from "react";
import { Button } from "react-bootstrap";

function AdminEsemenyTablaSor(props) {
  return (
    <tr>
      <td className="text-center">{props.elem.nev}</td>
      <td className="text-center">{props.elem.leiras}</td>
      <td className="text-center">{props.elem.idopont}</td>
      <td className="text-center">{props.elem.helyszin}</td>
      <td className="text-center">
        <Button variant="warning">Szerkesztés</Button>
      </td>
      <td className="text-center">
        <Button variant="danger">Törlés</Button>
      </td>
    </tr>
  );
}

export default AdminEsemenyTablaSor;
