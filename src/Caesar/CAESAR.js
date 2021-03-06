import React, {useState} from 'react';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function shift(letter, offset){
  let ascii = letter.charCodeAt(0);
  offset = offset % 26;
  if(offset < 0){ offset += 26;}
  if(ascii >= 65 && ascii <= 90){
    ascii = ((ascii - 65 + offset)%26)+65;
  }
  if(ascii >= 97 && ascii <= 122){
    ascii = ((ascii - 97 + offset)%26)+97;
  }
  return String.fromCharCode(ascii);
}

function Caesar(){
  const [rawText,setRawText]=useState('')
  const [encodedText,setEncodedText]=useState('')
  const [key,setKey]=useState(3)
  const [copied,setCopied]=useState(false)

  function encode(){
    let text = ''
    for(let i = 0; i < rawText.length; i++){
      text += shift(rawText[i],key);
    }
    setEncodedText(text)
  }
  function decode(){
    let text = ''
    for(let i = 0; i < rawText.length; i++){
      text += shift(rawText[i],-key);
    }
    setEncodedText(text)
  }

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
            <Col xs={5} md={3} lg={2}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>key</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl min="1" max="100" type="number" value={key} onClick={(e) => e.target.select()} onChange={(e) => setKey(Number(e.target.value))}/>
              </InputGroup>
            </Col>
            <Col className="text-right">
              <Button variant="outline-primary mx-1" onClick={() => encode()}>Encode</Button>
              <Button variant="outline-primary ml-1" onClick={() => decode()}>Decode</Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="my-5">
          <textarea placeholder="Result..." rows="5" name="encodedText" value={encodedText}></textarea>
          <Row>
            <Col className="text-right">
              <Button variant='outline-primary'
                onClick={() => {
                    navigator.clipboard.writeText(encodedText)
                    .then(setCopied(true))
                    .then(setTimeout(()=>setCopied(false),2000))
                  }
                }
              >
                {copied ? <span aria-label="done" role="img">&#x2714;</span> : <span>Copy</span>}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Caesar;
