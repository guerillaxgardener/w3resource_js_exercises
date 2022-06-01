import React from "react";
import { Card, Container } from "react-bootstrap";
import Ex1 from "./exercises/Ex1";
import Ex2 from "./exercises/Ex2";
import Ex3 from "./exercises/Ex3";
import Ex4 from "./exercises/Ex4";
import "../src/Main.css";
// import { useState } from 'react'


const Main = (props) => {

  return (

    <>
      <Container className="contained-exercises" >

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex1 />
        </Card>

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex2 />
        </Card>

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex3 />
        </Card>

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex4 />
        </Card>

      </Container >

      

    </>

  )
}
export default (Main)