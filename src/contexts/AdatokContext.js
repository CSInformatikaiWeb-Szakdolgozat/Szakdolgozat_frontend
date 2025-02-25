import React, { createContext, useContext, useState, useEffect } from "react";
import { myAxios } from "../api/axios";

const AdatokContext = createContext();

export const AdatokProvider = ({ children }) => {
  const [cikkLista, setCikkLista] = useState([]);

  const [menuLista, setMenuLista] = useState([]);

  const [partnerLista, setPartnerLista] = useState([]);

  const [classLista, setClassLista] = useState([]);

  const [userLista, setUserLista] = useState([]);

  const [eventLista, setEventLista] = useState([]);

  const [companyInfoLista, setCompanyInfoLista] = useState([]);

  const getAdat = async (vegpont, callbackFv) => {
    try {
      const response = await myAxios.get(vegpont);
      //console.log("adat:", response.data);
      callbackFv(response.data);
    } catch (err) {
      console.log("Hiba történt az adat elküldésekor.");
    } finally {
    }
  };

  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat);
      console.log("adat:", response.data);
    } catch (err) {
      console.log("Hiba történt az adat küldéskor!", err);
    }
  };

  const patchAdat = async (vegpont, id) => {
    try {
      const response = await myAxios.patch(vegpont + "/" + id);
      console.log("adat:", response.data);
    } catch (err) {
      console.log("Hiba történt az adat küldéskor!", err);
    }
  };

  const deletAdat = async (vegpont, id) => {
    try {
      const response = await myAxios.delete(vegpont + "/" + id);
      console.log("adat:", response.data);
    } catch (err) {
      console.log("Hiba történt az adat küldéskor!", err);
    }
  };
  useEffect(() => {
    getAdat("/api/articles", setCikkLista);
    getAdat("/api/partners", setPartnerLista);
    getAdat("/api/menus", setMenuLista);
    getAdat("/api/events", setEventLista);
    getAdat("/api/companyinfos", setCompanyInfoLista);
    getAdat("/api/classes", setClassLista);
    getAdat("/api/users", setUserLista);
  }, []);

  return (
    <AdatokContext.Provider
      value={{
        deletAdat,
        postAdat,
        patchAdat,
        cikkLista,
        menuLista,
        partnerLista,
        classLista,
        userLista,
        eventLista,
        companyInfoLista,
      }}
    >
      {children}
    </AdatokContext.Provider>
  );
};

export default AdatokContext;
