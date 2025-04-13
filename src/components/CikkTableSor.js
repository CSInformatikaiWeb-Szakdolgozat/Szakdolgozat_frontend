import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import CikkEdit from "./forms/edit/CikkEdit";

function CikkTablaSor(props) {
  const { deletAdat, getAdat, setCikkLista } = useContext(AdatokContext);

  const [isOn, setIsOn] = useState(props.elem.visibility_status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <td className="text-center">{props.elem.name}</td>
      <td className="text-center">{props.elem.description}</td>
      <td className="text-center">{props.elem.partner}</td>
      <td className="text-center">{props.elem.classification}</td>
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
      <td className="text-center">{props.elem.page_link}</td>
      <td className="text-center">
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        <CikkEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          elemId={props.elem.id} // Ez kell, mert a CikkEdit ezt várja
        />
      </td>

      <td className="text-center">
        <Button
          onClick={() => {
            deletAdat("/api/article", props.elem.id);
            getAdat("/api/articles", setCikkLista);
          }}
          variant="danger"
        >
          Törlés
        </Button>
      </td>
    </>
  );
}

export default CikkTablaSor;
