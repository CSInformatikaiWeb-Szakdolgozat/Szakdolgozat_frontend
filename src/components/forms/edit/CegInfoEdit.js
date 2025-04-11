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
      getAdat(`/api/company/${elemId}`, (data) => {
        setLoading(false);
        if (data) {
          setFormData(data);
        }
      });
    }
  }, [elemId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.company_name || !formData.company_manager) {
      console.log("Hiányzó mezők!");
      return;
    }

    setLoading(true);
    patchAdat(`/api/company/${elemId}`, formData)
      .then(() => {
        setCeginfoLista((prevList) =>
          prevList.map((item) =>
            item.id === elemId ? { ...item, ...formData } : item
          )
        );
        handleCloseModal();
      })
      .finally(() => setLoading(false));
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Cég Információ Szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div>Betöltés...</div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCompanyName">
              <Form.Label>Cég Név</Form.Label>
              <Form.Control
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCompanyManager">
              <Form.Label>Cég Vezető</Form.Label>
              <Form.Control
                type="text"
                name="company_manager"
                value={formData.company_manager}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCmEmail">
              <Form.Label>Cég Vezető Email</Form.Label>
              <Form.Control
                type="email"
                name="cm_email"
                value={formData.cm_email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCmTelefon">
              <Form.Label>Cég Vezető Telefonszám</Form.Label>
              <Form.Control
                type="text"
                name="cm_telefon"
                value={formData.cm_telefon}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPremise">
              <Form.Label>Telephely</Form.Label>
              <Form.Control
                type="text"
                name="premise"
                value={formData.premise}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formMailingAddress">
              <Form.Label>Postai Cím</Form.Label>
              <Form.Control
                type="text"
                name="mailing_address"
                value={formData.mailing_address}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formHeadOffice">
              <Form.Label>Székhely</Form.Label>
              <Form.Control
                type="text"
                name="head_office"
                value={formData.head_office}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTaxNumber">
              <Form.Label>Adószám</Form.Label>
              <Form.Control
                type="text"
                name="tax_number"
                value={formData.tax_number}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTradeRegister">
              <Form.Label>Cégbírósági Nyilvántartás</Form.Label>
              <Form.Control
                type="text"
                name="trade_register"
                value={formData.trade_register}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formAvailabilityEmail">
              <Form.Label>Elérhetőségi Email</Form.Label>
              <Form.Control
                type="email"
                name="availability_email"
                value={formData.availability_email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formAvailabilityPhone">
              <Form.Label>Elérhetőségi Telefonszám</Form.Label>
              <Form.Control
                type="text"
                name="availability_phone"
                value={formData.availability_phone}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formReportEmail">
              <Form.Label>Jelentési Email</Form.Label>
              <Form.Control
                type="email"
                name="report_email"
                value={formData.report_email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formReportPhone">
              <Form.Label>Jelentési Telefonszám</Form.Label>
              <Form.Control
                type="text"
                name="report_phone"
                value={formData.report_phone}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPriceOfferEmail">
              <Form.Label>Árajánlat Kérő Email</Form.Label>
              <Form.Control
                type="email"
                name="price_offer_email"
                value={formData.price_offer_email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formGoogleMap">
              <Form.Label>Google Map Link</Form.Label>
              <Form.Control
                type="text"
                name="google_map"
                value={formData.google_map}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="success" type="submit">Mentés</Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default CeginfoEdit;
