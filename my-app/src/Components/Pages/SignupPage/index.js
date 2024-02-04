import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Signupform} from "../SignupPage/Signupform";
import { Sideimage } from "./Sideimage";
import { Navbar } from "../../Navbar";


export function SignupPage() {
  return (
  
    <Container >
      <section>
        <br/>
        <Navbar/>
      </section>
      <Row className="mx-auto p-3">
        <Col>
          <Sideimage/>
        </Col>
        <Col>
          <Signupform/>
        </Col>
      </Row>
    </Container>
  );
}