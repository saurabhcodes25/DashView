import { Container, Row, Col } from "react-bootstrap";

function Grid() {
  return (
    <Container>
      <Row className="border border-1">
        <Col xs={6} md={4} className="border border-1">
          Header Logo
        </Col>
        <Col xs={12} md={8} className="border border-1">
          Header Banner
        </Col>
        <Col className="border border-1">Header Bar</Col>
      </Row>

      <br></br>
      <Row className="border border-1">
        <Col className="border border-1">Left Blocks</Col>

        <Col className="border border-1">
          <Row className="border border-1 ">
            <div className="text-center">Center-Center Blocks</div>
          </Row>

          <Row className="border border-1">
            <Col className="border border-1">Center-Left Blocks</Col>
            <Col className="border border-1">Center-Right Blocks</Col>
          </Row>

          <Row className="border border-1">
            <div className="text-center">Module Contents</div>
          </Row>
        </Col>

        <Col className="border border-1">Right Blocks</Col>
      </Row>

      <br></br>
      <Row className="border border-1">
        <Col className="border border-1">Footer Bar</Col>
      </Row>
    </Container>
  );
}
export default Grid;
