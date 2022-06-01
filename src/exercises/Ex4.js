//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

import React from "react";
import { Card } from "react-bootstrap";
// import { useState } from 'react'


const ex4 = (props) => {

  let a = 5;
  let b = 6;
  let c = 7;

  let s = ((a + b + c) / 2);
  console.log(s);

  let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

  return (
    <>

      <Card.Title>Exercise 4: Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
      </Card.Title>


      <Card.Body>
        <Card.Text>
          SOLUTION: <br />
          area of triangle = {area}
        </Card.Text>
      </Card.Body>

    </>

  )
}

export default (ex4)