import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
  return(
    <Container className="mt-5">
    <Row>
      <Col md={12} lg={4}>
        <Row>
          <Col sm={12} className="caesarbox-title">
            <Col>CAE</Col>
            <Col>SAR</Col>
            <Col>BOX</Col>
          </Col>
          <Col sm={12} className="caesarbox-subtitle">
            A Classic Ciphers Collection
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={8}>
        <Row>
          <Col sm={6} className="p-4 resume">
            <p>
              CAESARBOX is a collection of classic ciphers algorithms
              written in <b>Javascript.</b>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
    </Container>
  );
}

export default Home;
