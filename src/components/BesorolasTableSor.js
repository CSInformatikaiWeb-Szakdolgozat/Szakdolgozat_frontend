import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import BesorolasEdit from "./forms/edit/BesorolasEdit";

function BesorolasTableSor(props) {
  const { patchAdat, deletAdat, getAdat, setClassLista } = useContext(AdatokContext);
  const [isOn, setIsOn] = useState(props.elem.status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [showModal, setShowModal] = useState(false);

  // A modal megnyitásához és bezárásához szükséges funkciók
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <tr>
      {/* Besorolás adatai */}
      <td className="text-center">{props.elem.id}</td>
      <td className="text-center">{props.elem.upper_classification}</td>
      <td className="text-center">{props.elem.name}</td>

      {/* Módosítás gomb */}
      <td className="text-center">
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        {/* BesorolasEdit komponens megjelenítése, átadva a besorolás ID-t */}
        <BesorolasEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          elemId={props.elem.id} // Az elem ID-jét adjuk át
        />
      </td>

      {/* Törlés gomb */}
      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/api/class", props.elem.id); // Besorolás törlés
            getAdat("/api/classes", setClassLista); // Besorolások frissítése
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
