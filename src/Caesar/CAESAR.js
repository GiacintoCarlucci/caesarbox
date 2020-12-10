import React, {useState} from 'react';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Caesar(){
  const [rawText,setRawText]=useState('')
  const [encodedText,seEencodedText]=useState('')


  return(
    <Container className="mt-5">
      <Row>
        <Col sm={12} className="cipher-title">
          Caesar Cipher
        </Col>
        <Col sm={12} className="cipher-description">
          The Caesar cipher, also known as shift cipher, is one of the oldest and famous ciphers in history.
          While being very simple to crack, it has been used historically for important secrets.
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={12} className="my-3">
          <textarea placeholder="Insert here your text." rows="5" name="rawText" value={rawText} onChange={e => setRawText(e.target.value)}></textarea>
          <Row>
            <Col sm={3}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>key</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number"/>
              </InputGroup>
            </Col>
            <Col>
              <Button variant="outline-primary">Encode</Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="my-3">
          <textarea placeholder="Result..." rows="5" name="encodedText" value={encodedText}></textarea>
        </Col>
      </Row>
    </Container>
  );
}

export default Caesar;
