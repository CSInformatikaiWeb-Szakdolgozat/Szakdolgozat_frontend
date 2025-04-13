import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CeginfoEdit from "./forms/edit/CegInfoEdit";

function CeginfoTableSor({ elem }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <td className="text-center">{elem.company_name}</td>
      <td className="text-center">{elem.company_manager}</td>
      <td className="text-center">{elem.cm_email}</td>
      <td className="text-center">{elem.cm_telefon}</td>
      <td className="text-center">{elem.premise}</td>
      <td className="text-center">{elem.mailing_address}</td>
      <td className="text-center">{elem.head_office}</td>
      <td className="text-center">{elem.tax_number}</td>
      <td className="text-center">{elem.trade_register}</td>
      <td className="text-center">{elem.availability_email}</td>
      <td className="text-center">{elem.availability_phone}</td>
      <td className="text-center">{elem.report_email}</td>
      <td className="text-center">{elem.report_phone}</td>
      <td className="text-center">{elem.price_offer_email}</td>
      <td className="text-center">{elem.google_map}</td>
      <td className="text-center">
        <Button variant="warning" onClick={handleShowModal}>
          Módosítás
        </Button>
        <CeginfoEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          elemId={elem.id}
        />
      </td>
    </>
  );
}

export default CeginfoTableSor;
