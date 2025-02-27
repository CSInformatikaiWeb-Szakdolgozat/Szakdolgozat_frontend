import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";

function PartnerTableSor(props) {
  const { patchAdat, deletAdat } = useContext(AdatokContext);
  const [isOn, setIsOn] = useState(props.elem.status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <tr>
      <td className="text-center">{props.elem.name}</td>
      <td className="text-center">{props.elem.page}</td>
      <td className="text-center">
        <div>
          <Button
            variant={isOn ? "outline-success" : "outline-danger"}
            onClick={toggleSwitch}
          >
            {isOn ? "Megjelenítve" : "Nincs Megjelenítve"}
          </Button>
        </div>
      </td>
      <td className="text-center">
        <Button
          //nem mükszik még!
          onClick={() => {
            patchAdat("/api/partner", props.elem.id);
          }}
          variant="warning"
        >
          Szerkesztés
        </Button>
      </td>
      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/api/partner", props.elem.id);
          }}
          variant="danger"
        >
          Törlés
        </Button>
      </td>
    </tr>
  );
}

export default PartnerTableSor;
