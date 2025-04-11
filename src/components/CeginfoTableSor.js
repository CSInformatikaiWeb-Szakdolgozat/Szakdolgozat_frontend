import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CeginfoEdit from "./forms/edit/CegInfoEdit";

function CeginfoTableSor(props) {
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
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>
        <CeginfoEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          companyId={props.elem.id}
        />
      </td>
    </tr>
  );
}

export default CeginfoTableSor;
