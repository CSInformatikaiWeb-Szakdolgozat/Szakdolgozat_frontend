import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";
import CeginfoEdit from "../components/forms/edit/cegInfoEdit";

function CeginfoTableSor(props) {
  const { patchAdat,setCompanyInfoLista,getAdat } = useContext(AdatokContext);

  const [showModal, setShowModal] = useState(false);
  
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

  return (
    <tr>
      <td className="text-center">{props.elem.company_name}</td>
      <td className="text-center">{props.elem.company_manager}</td>
      <td className="text-center">{props.elem.cm_email}</td>
      <td className="text-center">{props.elem.cm_telefon}</td>
      <td className="text-center">{props.elem.premise}</td>
      <td className="text-center">{props.elem.mailing_address}</td>
      <td className="text-center">{props.elem.head_office}</td>
      <td className="text-center">{props.elem.tax_number}</td>
      <td className="text-center">{props.elem.trade_register}</td>
      <td className="text-center">{props.elem.availability_email}</td>
      <td className="text-center">{props.elem.availability_phone}</td>
      <td className="text-center">{props.elem.report_email}</td>
      <td className="text-center">{props.elem.report_phone}</td>
      <td className="text-center">{props.elem.price_offer_email}</td>
      <td className="text-center">{props.elem.google_map}</td>
      <td className="text-center">
        {/* Gomb a modal megnyitásához */}
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>

        {/* CeginfoEdit komponens megjelenítése, átadva csak a companyId-t */}
        <CeginfoEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          companyId={props.elem.id} // Az elem id-jét adjuk át
        />
      </td>
    </tr>
  );
}

export default CeginfoTableSor;
