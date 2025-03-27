import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdatokContext from "../../../contexts/AdatokContext";

function CegInfoEdit({ showModal, handleCloseModal, elemId }) {
  const { patchAdat, getAdat, setCompanyInfoLista } = useContext(AdatokContext);
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

  useEffect(() => {
    if (elemId) {
      getAdat(`/api/companyinfo/${elemId}`, (data) => {
        setFormData({
          company_name: data.company_name,
          company_manager: data.company_manager,
          cm_email: data.cm_email,
          cm_telefon: data.cm_telefon,
          premise: data.premise,
          mailing_address: data.mailing_address,
          head_office: data.head_office,
          tax_number: data.tax_number,
          trade_register: data.trade_register,
          availability_email: data.availability_email,
          availability_phone: data.availability_phone,
          report_email: data.report_email,
          report_phone: data.report_phone,
          price_offer_email: data.price_offer_email,
          google_map: data.google_map,
        });
      });
    }
  }, [elemId, getAdat]);

  const handleSubmit = (event) => {
    event.preventDefault();
    patchAdat(`/api/companyinfo`, elemId, formData); // Küldd el az adatokat
    getAdat("/api/companyinfos", setCompanyInfoLista); // Frissíti a cégek listáját
    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Cég információ szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Cég neve</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cég neve"
              value={formData.company_name}
              onChange={(e) =>
                setFormData({ ...formData, company_name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formCompanyManager">
            <Form.Label>Cégvezető</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cégvezető"
              value={formData.company_manager}
              onChange={(e) =>
                setFormData({ ...formData, company_manager: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formCmEmail">
            <Form.Label>Cégvezető email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Cégvezető email"
              value={formData.cm_email}
              onChange={(e) =>
                setFormData({ ...formData, cm_email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formCmTelefon">
            <Form.Label>Cégvezető telefon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cégvezető telefon"
              value={formData.cm_telefon}
              onChange={(e) =>
                setFormData({ ...formData, cm_telefon: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formPremise">
            <Form.Label>Telephely</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telephely"
              value={formData.premise}
              onChange={(e) =>
                setFormData({ ...formData, premise: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formMailingAddress">
            <Form.Label>Levelezési cím</Form.Label>
            <Form.Control
              type="text"
              placeholder="Levelezési cím"
              value={formData.mailing_address}
              onChange={(e) =>
                setFormData({ ...formData, mailing_address: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formHeadOffice">
            <Form.Label>Székhely</Form.Label>
            <Form.Control
              type="text"
              placeholder="Székhely"
              value={formData.head_office}
              onChange={(e) =>
                setFormData({ ...formData, head_office: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formTaxNumber">
            <Form.Label>Adószám</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adószám"
              value={formData.tax_number}
              onChange={(e) =>
                setFormData({ ...formData, tax_number: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formTradeRegister">
            <Form.Label>Cégjegyzék szám</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cégjegyzék szám"
              value={formData.trade_register}
              onChange={(e) =>
                setFormData({ ...formData, trade_register: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formAvailabilityEmail">
            <Form.Label>Elérhetőség email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Elérhetőség email"
              value={formData.availability_email}
              onChange={(e) =>
                setFormData({ ...formData, availability_email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formAvailabilityPhone">
            <Form.Label>Elérhetőség telefon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Elérhetőség telefon"
              value={formData.availability_phone}
              onChange={(e) =>
                setFormData({ ...formData, availability_phone: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formReportEmail">
            <Form.Label>Jelentés email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Jelentés email"
              value={formData.report_email}
              onChange={(e) =>
                setFormData({ ...formData, report_email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formReportPhone">
            <Form.Label>Jelentés telefon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Jelentés telefon"
              value={formData.report_phone}
              onChange={(e) =>
                setFormData({ ...formData, report_phone: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formPriceOfferEmail">
            <Form.Label>Árajánlat email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Árajánlat email"
              value={formData.price_offer_email}
              onChange={(e) =>
                setFormData({ ...formData, price_offer_email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formGoogleMap">
            <Form.Label>Google Map</Form.Label>
            <Form.Control
              type="text"
              placeholder="Google Map link"
              value={formData.google_map}
              onChange={(e) =>
                setFormData({ ...formData, google_map: e.target.value })
              }
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* Módosítás gomb */}
        <Button variant="success" onClick={handleSubmit}>
          Módosítás
        </Button>

        {/* Mégse gomb */}
        <Button variant="danger" onClick={handleCloseModal}>
          Mégse
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CegInfoEdit;
