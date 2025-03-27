import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import CikkEdit from "./forms/edit/CikkEdit";

function CikkTablaSor(props) {
  const { patchAdat, deletAdat,getAdat,setCikkLista } = useContext(AdatokContext);
  const [isOn, setIsOn] = useState(props.elem.visibility_status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [showModal, setShowModal] = useState(false);

  // A modal megjelenítéséhez szükséges funkciók
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <tr>
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
        {/* Gomb a modal megnyitásához */}
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        {/* CikkEdit komponens megjelenítése, átadva csak a cikkId-t */}
        <CikkEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          cikkId={props.elem.id} // Most csak a cikkId-t adjuk át
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
    </tr>
  );
}

export default CikkTablaSor;
