import React, { createContext, useContext, useState, useEffect } from "react";
import useApi from "./useApi"; // Importáljuk a useApi hookot

const AdatokContext = createContext();

export const AdatokProvider = ({ children }) => {
  // Hook használata
  const { getAdat, postAdat, patchAdat, deleteAdat, loading, error } = useApi();

  const [cikkLista, setCikkLista] = useState([]);
  const [menuLista, setMenuLista] = useState([]);
  const [partnerLista, setPartnerLista] = useState([]);
  const [classLista, setClassLista] = useState([]);
  const [userLista, setUserLista] = useState([]);
  const [eventLista, setEventLista] = useState([]);
  const [companyInfoLista, setCompanyInfoLista] = useState([]);

  // API adatok lekérése az oldal betöltésekor
  useEffect(() => {
    getAdat("/api/articles", setCikkLista);
    getAdat("/api/partners", setPartnerLista);
    getAdat("/api/menus", setMenuLista);
    getAdat("/api/events", setEventLista);
    getAdat("/api/companyinfos", setCompanyInfoLista);
    getAdat("/api/classes", setClassLista);
    getAdat("/api/users", setUserLista);
  }, [getAdat]);

  return (
    <AdatokContext.Provider
      value={{
        loading,
        error,
        postAdat,
        patchAdat,
        deleteAdat,
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
