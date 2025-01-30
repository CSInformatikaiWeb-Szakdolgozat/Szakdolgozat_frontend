import {  } from "react-bootstrap";
import React from "react";

function AsideKartyak() {
  return (
    <div className="container mt-3">
    
      {asideLista.map((kep, index) => {
        <></>
        return <Kartya kep={kep} key={index} />;
      })}
  </div>
  )
}

export default AsideKartyak;
