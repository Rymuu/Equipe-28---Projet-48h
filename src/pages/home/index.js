import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";



const Index = () => {

  return (
    <div className="page__home">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;