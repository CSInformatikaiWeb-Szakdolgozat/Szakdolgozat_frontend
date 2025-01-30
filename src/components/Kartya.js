function Kartya() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={element.kep} />
      <Card.Body>
        <Card.Title>{element.nev}</Card.Title>
        <Card.Text>
          {element.leiras}
        </Card.Text>
        <Button variant="primary">Részletek</Button>
      </Card.Body>
    </Card>
  );
}

export default Kartya;
