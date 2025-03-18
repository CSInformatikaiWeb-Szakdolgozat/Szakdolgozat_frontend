import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import EsemenyEdit from "../components/forms/edit/esemenyEdit";

function EsemenyTableSor(props) {
  const { patchAdat, deletAdat, getAdat, setEsemenyLista } =
    useContext(AdatokContext);

  const [isOn, setIsOn] = useState(props.elem.megjelenit);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <tr>
      <td className="text-center">{props.elem.description}</td>
      <td className="text-center">{props.elem.location}</td>
      <td className="text-center">{props.elem.date}</td>
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
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        <EsemenyEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          esemenyId={props.elem.id} // Az elem id-jét adjuk át
        />
      </td>

      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/api/event", props.elem.id);
            getAdat("/api/events", setEsemenyLista);
          }}
          variant="danger"
        >
          Törlés
        </Button>
      </td>
    </tr>
  );
}

export default EsemenyTableSor;
