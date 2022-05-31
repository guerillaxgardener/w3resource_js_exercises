import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Ex1 from "./exercises/Ex1";
import Ex2 from "./exercises/Ex2";
import Ex3 from "./exercises/Ex3";
// import { useState } from 'react'


const Main = (props) => {
  // STATE**************************************
  // const [show, setShow] = useState(false);


  //EVENTHANDLER********************************



  //**************************************************
  return (

    <>
      <Row xs={1} sm={1} md={2} lg={3} xl={4}>
        <Col xs={1} sm={1} md={2} lg={3} xl={4}>

          <Ex1/>
          <Ex2/>
          <Ex3/>

        </Col>
      </Row>
    </>

  )
}
export default (Main)