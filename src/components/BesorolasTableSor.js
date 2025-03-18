import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import BesorolasEdit from "../components/forms/edit/besorolasEdit";


function BesorolasTableSor(props) {
  const { patchAdat, deletAdat,getAdat,setClassesLista } = useContext(AdatokContext);
  const [isOn, setIsOn] = useState(props.elem.status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <tr>
      <td className="text-center">{props.elem.id}</td>
      <td className="text-center">{props.elem.upper_classification}</td>
      <td className="text-center">{props.elem.name}</td>
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
        {/* Gomb a modal megnyitásához */}
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        {/* BesorolasEdit komponens megjelenítése, átadva csak a besorolasId-t */}
        <BesorolasEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          besorolasId={props.elem.id} // Az elem id-jét adjuk át
        />
      </td>

      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/api/class", props.elem.id);
            getAdat("/api/classes", setClassesLista);
          }}
          variant="danger"
        >
          Törlés
        </Button>
      </td>
    </tr>
  );
}

export default BesorolasTableSor;
