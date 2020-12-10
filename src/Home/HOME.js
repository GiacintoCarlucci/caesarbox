import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
  return(
    <Container className="mt-0 mt-md-5">
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
        <Row className="p-4">
          <Col md={12} lg={6} className="resume">
            <p>
              CAESARBOX is a collection of classic ciphers algorithms
              written in <b>Javascript.</b>
            </p>
          </Col>
          <Col>
            <Link to='/caesar'><Button variant="outline-primary">CAESAR</Button></Link>
          </Col>
        </Row>
      </Col>
    </Row>
    </Container>
  );
}

export default Home;
