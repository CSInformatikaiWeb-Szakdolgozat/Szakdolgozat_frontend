import { Button, } from "react-bootstrap";
import { useState } from "react";

function AdminCikkTablaSor(props) {
  const [isOn, setIsOn] = useState(props.elem.megjelenit);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <tr>
      <td className="text-center">{props.elem.nev}</td>
      <td className="text-center">{props.elem.leiras}</td>
      <td className="text-center">{props.elem.partner}</td>
      <td className="text-center">
        <div>
          <Button variant={isOn ? "success" : "outline-danger"} onClick={toggleSwitch}>
            {isOn ? "Megjelenítve" : "Nincs Megjelenítve"}
          </Button>
        </div>
      </td>
      <td className="text-center">
        <Button variant="warning">Szerkesztés</Button>
      </td>
      <td className="text-center">
        <Button variant="danger">Törlés</Button>
      </td>
    </tr>
  );
}

export default AdminCikkTablaSor;
