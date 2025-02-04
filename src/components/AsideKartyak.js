import React from "react";
import Kartya from "./Kartya";
import { Row } from "react-bootstrap";

function AsideKartyak() {
  const aside = [];

  for (let index = 0; index < 3; index++) {
    aside.push(
      <Row className="p-4" key={index}>
        <Kartya />
      </Row>
    );
  }
  return <>{aside}</>;
}

export default AsideKartyak;
