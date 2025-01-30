import { Carousel } from "react-bootstrap";
import React from "react";

function Silder() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="../kepek/AI22.jpg" alt="egy teszt kép" className="d-block w-100 img-fluid" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../kepek/teszt2.jpg" alt="egy teszt kép" className="d-block w-100 img-fluid" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../kepek/IBM_villany.jpg" alt="egy teszt kép" className="d-block w-100 img-fluid" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Silder;
