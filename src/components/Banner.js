import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container fluid>
        <Row>
          <Col>
            <h1>Hello</h1>
          </Col>
          <Col>
            <h1>some image here maybe</h1>
          </Col>
        </Row>
        
      </Container>
    </section>
  )
}

export default Banner