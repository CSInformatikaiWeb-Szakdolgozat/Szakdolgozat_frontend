import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../../contexts/AdatokContext";
import UserEdit from "./UserEdit";

function CikkTablaSor(props) {
  const { deletAdat, getAdat, setUserLista } = useContext(AdatokContext);

  const [isOn, setIsOn] = useState(props.elem.visibility_status);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <tr>
      <td className="text-center">{props.elem.name}</td>
      <td className="d-none d-sm-table-cell text-center">{props.elem.email}</td>
      <td className="d-none d-md-table-cell text-center">{props.elem.password}</td>
      <td className="text-center">{props.elem.classification}</td>
      
      <td className="d-none d-lg-table-cell text-center">
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        <UserEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          elemId={props.elem.id} // Ez kell, mert a CikkEdit ezt várja
        />
      </td>

      <td className="d-none d-lg-table-cell text-center">
        <Button
          onClick={() => {
            deletAdat("/api/user", props.elem.id);
            getAdat("/api/users", setUserLista);
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
