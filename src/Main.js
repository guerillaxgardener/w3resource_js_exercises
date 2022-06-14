import React from "react";
import { Card, Container } from "react-bootstrap";
import Ex1 from "./exercises/Ex1";
import Ex2 from "./exercises/Ex2";
import Ex3 from "./exercises/Ex3";
import Ex4 from "./exercises/Ex4";
import Ex5 from "./exercises/Ex5";
import Ex6 from "./exercises/Ex6";
import Ex7 from "./exercises/Ex7";
import Ex8 from "./exercises/Ex8";
import Ex9 from "./exercises/Ex9";

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

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex5 />
        </Card>

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex6 />
        </Card>

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex7 />
        </Card>

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex8 />
        </Card>

        <Card className="exercise-card" style={{ width: '18rem' }}>
          <Ex9 />
        </Card>

      </Container >

      

    </>

  )
}
export default (Main)