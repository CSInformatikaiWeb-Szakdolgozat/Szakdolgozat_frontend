import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import PartnerEdit from "../components/forms/edit/partnerEdit";

function PartnerTableSor(props) {
  const { patchAdat, deletAdat, getAdat, setPartnerLista } = useContext(AdatokContext);
  const [isOn, setIsOn] = useState(props.elem.status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        {/* PartnerEdit komponens */}
        <PartnerEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          partnerId={props.elem.id} // Az elem id-jét adjuk át
        />
      </td>

      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/api/partner", props.elem.id);
            getAdat("/api/partners", setPartnerLista);
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
