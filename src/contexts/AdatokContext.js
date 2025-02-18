import React, { createContext, useContext, useEffect, useState } from "react";
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
  const deletAdat = async (vegpont, id) => {
    try {
      const response = await myAxios.delete(vegpont + "/" + id);
      console.log("adat:", response.data);
    } catch (err) {
      console.log("Hiba történt az adat küldéskor!", err);
    }
  };
  useEffect(() => {
    getAdat("/articles", setCikkLista);
    getAdat("/partners", setPartnerLista);
    getAdat("/menus", setMenuLista);
    getAdat("/events", setEventLista);
    getAdat("/companyinfos", setCompanyInfoLista);
    getAdat("/classes", setClassLista);
    getAdat("/users", setUserLista);
  }, []);
  return (
    <AdatokContext.Provider
      value={{
        postAdat,
        deletAdat,
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
export default function useAdatokContext() {
  return useContext(AdatokContext);
}
