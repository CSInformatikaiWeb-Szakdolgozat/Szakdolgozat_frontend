import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";

function MenuTableSor(props) {
  const { patchAdat, deletAdat } = useContext(AdatokContext);
  const [isOn, setIsOn] = useState(props.elem.status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <tr>
      <td className="text-center">{props.elem.id}</td>
      <td className="text-center">{props.elem.name}</td>
      <td className="text-center">{props.elem.main_menu}</td>
      <td className="text-center">{props.elem.link}</td>
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
            patchAdat("/menu/", props.elem.id);
          }}
          variant="warning"
        >
          Szerkesztés
        </Button>
      </td>
      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/api/menu", props.elem.id);
          }}
          variant="danger"
        >
          Törlés
        </Button>
      </td>
    </tr>
  );
}

export default MenuTableSor;
