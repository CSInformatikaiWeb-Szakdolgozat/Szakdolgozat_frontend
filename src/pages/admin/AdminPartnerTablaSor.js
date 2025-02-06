import { Button, } from "react-bootstrap";
import { useState } from "react";

function AdminPartnerTablaSor(props) {
  const [isOn, setIsOn] = useState(props.elem.allapot);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <tr>
      <td className="text-center">{props.elem.nev}</td>
      <td className="text-center">{props.elem.link}</td>
      <td className="text-center">
        <div>
          <Button variant={isOn ? "outline-success" : "outline-dark"} onClick={toggleSwitch}>
            {isOn ? "Aktiv Partner" : "Inaktív Partner"}
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

export default AdminPartnerTablaSor;
