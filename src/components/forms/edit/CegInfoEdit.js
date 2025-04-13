import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function CeginfoEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, setCeginfoLista } = useContext(AdatokContext);

  const [formData, setFormData] = useState({
    company_name: "",
    company_manager: "",
    cm_email: "",
    cm_telefon: "",
    premise: "",
    mailing_address: "",
    head_office: "",
    tax_number: "",
    trade_register: "",
    availability_email: "",
    availability_phone: "",
    report_email: "",
    report_phone: "",
    price_offer_email: "",
    google_map: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (elemId) {
      setLoading(true);
      getAdat(`/api/companyinfo/${elemId}`, (data) => {  // <-- EZ LETT JAVÍTVA
        setLoading(false);
        if (data) {
          setFormData({
            company_name: data.company_name || "",
            company_manager: data.company_manager || "",
            cm_email: data.cm_email || "",
            cm_telefon: data.cm_telefon || "",
            premise: data.premise || "",
            mailing_address: data.mailing_address || "",
            head_office: data.head_office || "",
            tax_number: data.tax_number || "",
            trade_register: data.trade_register || "",
            availability_email: data.availability_email || "",
            availability_phone: data.availability_phone || "",
            report_email: data.report_email || "",
            report_phone: data.report_phone || "",
            price_offer_email: data.price_offer_email || "",
            google_map: data.google_map || "",
          });
        }
      });
    }
  }, [elemId]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!formData.company_name || !formData.company_manager) {
      console.log("Hiányzó mezők!");
      return;
    }
  
    setLoading(true);
    patchAdat(`/api/companyinfo/${elemId}`, formData)  // <-- EZ LETT JAVÍTVA
      .then(() => {
        getAdat("/api/companyinfos", setCeginfoLista);
        handleCloseModal();
      })
      .finally(() => setLoading(false));
  };
  

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Cég Információ Szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div>Betöltés...</div>
        ) : (
          <Form onSubmit={handleSubmit}>
            {[
              ["Cég Név", "company_name"],
              ["Cég Vezető", "company_manager"],
              ["Cég Vezető Email", "cm_email", "email"],
              ["Cég Vezető Telefonszám", "cm_telefon"],
              ["Telephely", "premise"],
              ["Postai Cím", "mailing_address"],
              ["Székhely", "head_office"],
              ["Adószám", "tax_number"],
              ["Cégbírósági Nyilvántartás", "trade_register"],
              ["Elérhetőségi Email", "availability_email", "email"],
              ["Elérhetőségi Telefonszám", "availability_phone"],
              ["Jelentési Email", "report_email", "email"],
              ["Jelentési Telefonszám", "report_phone"],
              ["Árajánlat Kérő Email", "price_offer_email", "email"],
              ["Google Map Link", "google_map"],
            ].map(([label, name, type = "text"]) => (
              <Form.Group key={name} controlId={`form-${name}`}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={(e) =>
                    setFormData({ ...formData, [name]: e.target.value })
                  }
                />
              </Form.Group>
            ))}

            <Button variant="success" type="submit">
              Mentés
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default CeginfoEdit;
