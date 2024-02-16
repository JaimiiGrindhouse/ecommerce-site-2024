import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* Center the entire section using a centered Col */}
          <Col xs={12} className="text-center py-3">
            {/* Place your content here, including the copyright symbol */}
            <p>ProShop &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
