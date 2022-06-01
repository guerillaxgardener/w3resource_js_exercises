import React from "react";
import { Card, Button } from "react-bootstrap";
// import { useState } from 'react'


const ex2 = (props) => {

let printThePage = () => {
  window.print();
}

  return (

    <>
     
        <Card.Title>Exercise 2: Write a JavaScript program to print the contents of the current window.</Card.Title>

        <Card.Body>
          <Card.Subtitle>

          </Card.Subtitle>

          <Card.Text>
            SOLUTION: <br />
            Click the button to print the page!!
            <Button onClick={printThePage}>
              Click t0o print!!!
            </Button>
          </Card.Text>
        </Card.Body>
 
    </>

  )
}

export default (ex2)