import React, { useContext } from "react";
import { AdatokProvider } from "../contexts/AdatokContext";
import PublicNavElem from "./PublicNavElem";

function PublicNavFelTolt() {
  const { menuLista } = useContext(AdatokProvider);
  return (
    <>
      {menuLista.map((elem, index) => {
        <PublicNavElem elem={elem} key={index} index={index} />;
      })}
    </>
  );
}

export default PublicNavFelTolt;
