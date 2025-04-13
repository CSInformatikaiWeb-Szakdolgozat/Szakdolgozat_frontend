import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AdatokContext from "../../contexts/AdatokContext";

function GyujtoOldal() {
  const rack_id = 3;

  const { cikkLista, setCikkLista, getAdat } = useContext(AdatokContext);

  useEffect(() => {
    getAdat("/api/articles", setCikkLista);
  }, []);

  return (
    <Container>
      <Row>
        <h1>Gyűtőoldal (Teszt)</h1>
        <>
          {cikkLista.map((elem) => {
            if (elem.classification === rack_id) {
              return (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="./kepek/kep1.jpg" />
                    <Card.Body>
                      <Card.Title>{elem.name}</Card.Title>
                      <Card.Text>
                        <p>{elem.description}</p>
                      </Card.Text>
                      <Button variant="primary" href={elem.page_link}>
                        Részletek
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
        </>
      </Row>
    </Container>
  );
}

export default GyujtoOldal;
