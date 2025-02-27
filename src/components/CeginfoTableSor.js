import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import AdatokContext from "../contexts/AdatokContext";

function CeginfoTableSor(props) {
  const { patchAdat } = useContext(AdatokContext);

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
        <Button
          //nem mükszik még!
          onClick={() => {
            patchAdat("/api/companyinfo", props.elem.id);
          }}
          variant="warning"
        >
          Szerkesztés
        </Button>
      </td>
    </tr>
  );
}

export default CeginfoTableSor;
