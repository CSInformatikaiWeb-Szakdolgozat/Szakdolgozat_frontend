import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import MenuEdit from "./forms/edit/MenuEdit";

function MenuTableSor(props) {
  const {  deletAdat, getAdat, setMenuLista } = useContext(AdatokContext);

  const [isOn, setIsOn] = useState(props.elem.status);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <tr>
      <td className="text-center">{props.elem.id}</td>
      <td className="text-center">{props.elem.name}</td>
      <td className="text-center">{props.elem.main_menu}</td>
      <td className="text-center">{props.elem.level}</td>
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
        {/* Gomb a modal megnyitásához */}
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        {/* MenuEdit komponens megjelenítése, átadva csak a menuId-t */}
        <MenuEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          menuId={props.elem.id} // Most csak a menuId-t adjuk át
        />
      </td>

      <td className="text-center">
        <Button
          onClick={() => {
            console.log("ID a törlés előtt:", props.elem.id); // Ellenőrizd, hogy az ID rendelkezésre áll-e

            deletAdat("/api/menu", props.elem.id);
            getAdat("/api/menus", setMenuLista);
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
