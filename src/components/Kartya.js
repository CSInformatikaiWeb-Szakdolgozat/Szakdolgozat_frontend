import { Button, Card } from "react-bootstrap";

function Kartya() {
  return (
    <Card>
      <Card.Img variant="top" src="./kepek/kep1.jpg" />
      <Card.Body>
        <Card.Title>oldal/cikk/esemény Név</Card.Title>
        <Card.Text>
          <p>szóveg</p>
        </Card.Text>
        <Button variant="primary">Részletek</Button>
      </Card.Body>
    </Card>
  );
}

export default Kartya;
