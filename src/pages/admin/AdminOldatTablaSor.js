import React from "react";
import { Button } from "react-bootstrap";

function AdminOldatTablaSor(props) {
  return (
    <tr>
      <td className="text-center">{props.elem.foOldal}</td>
      <td className="text-center">{props.elem.id}</td>
      <td className="text-center">{props.elem.tartalom}</td>
      <td className="text-center">
        <Button variant="warning">Szerkesztés</Button>
      </td>
      <td className="text-center">
        <Button variant="danger">Törlés</Button>
      </td>
    </tr>
  );
}

export default AdminOldatTablaSor;
