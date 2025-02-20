import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useAdatokContext from "../contexts/AdatokContext";

function MenuTableSor(props) {
  const [patchAdat, deletAdat] = useAdatokContext;
  const [isOn, setIsOn] = useState(props.elem.status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <tr>
      <td className="text-center">{props.elem.name}</td>
      <td className="text-center">{props.elem.main_menu}</td>
      <td className="text-center">{props.elem.link}</td>
      <td className="text-center">
        <div>
          <Button
            variant={isOn ? "success" : "outline-danger"}
            onClick={toggleSwitch}
          >
            {isOn ? "Megjelenítve" : "Nincs Megjelenítve"}
          </Button>
        </div>
      </td>
      <td className="text-center">
        <Button
          onClick={() => {
            patchAdat("/menu", props.elem.id);
          }}
          variant="warning"
        >
          Szerkesztés
        </Button>
      </td>
      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/menu", props.elem.id);
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
