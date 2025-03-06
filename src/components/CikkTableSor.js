import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";

function CikkTablaSor(props) {
  const { patchAdat, deletAdat,getAdat,setArticleLista } = useContext(AdatokContext);
  const [isOn, setIsOn] = useState(props.elem.megjelenit);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <tr>
      <td className="text-center">{props.elem.name}</td>
      <td className="text-center">{props.elem.description}</td>
      <td className="text-center">{props.elem.partner}</td>
      <td className="text-center">{props.elem.classification}</td>
      <td className="text-center">{props.elem.visibility_status}</td>
      <td className="text-center">{props.elem.page_link}</td>
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
          //nem mükszik még!
          onClick={() => {
            patchAdat("/api/article", props.elem.id);
          }}
          variant="warning"
        >
          Szerkesztés
        </Button>
      </td>
      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/api/article", props.elem.id);
            getAdat("/api/articles", setArticleLista);
          }}
          variant="danger"
        >
          Törlés
        </Button>
      </td>
    </tr>
  );
}

export default CikkTablaSor;
