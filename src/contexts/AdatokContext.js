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

  // const patchAdat = async (vegpont, id, adat) => {
  //   try {
  //     const response = await myAxios.patch(vegpont + "/" + id, adat); // Adat küldése az API-nak
  //     console.log("adat:", response.data);
  //   } catch (err) {
  //     console.log("Hiba történt az adat küldéskor!", err);
  //   }
  // };
  const patchAdat = async (vegpont, adat) => {
    try {
      console.log("Küldött adat a PATCH kéréshez:", adat); // Logoljuk, mi kerül ki a backendnek
      const response = await myAxios.patch(vegpont, adat);
      console.log("Válasz a backendtől:", response.data); // Válasz kiírása
    } catch (err) {
      console.error("Hiba történt a PATCH kérés során:", err);
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

  return (
    <AdatokContext.Provider
      value={{
        getAdat,
        deletAdat,
        postAdat,
        patchAdat,
        setCikkLista,
        setMenuLista,
        setPartnerLista,
        setClassLista,
        setUserLista,
        setEventLista,
        setCompanyInfoLista,
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
