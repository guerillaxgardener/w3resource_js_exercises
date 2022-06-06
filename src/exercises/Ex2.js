import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';

const Ex2 = (props) => {

  let printThePage = () => {
    window.print();
  }

  return (

    <>

      <Card.Title className="exercise-title">
        Ex 2: Print contents of the current window.
      </Card.Title>

      <Card.Body className="exercise-body">
        <Card.Subtitle className="exercise-expected-output">

        </Card.Subtitle>

        <Card.Text className="exercise-solution">
          SOLUTION: <br />
          Click button to print the page!
          <Button onClick={printThePage}>
            Click to print!!
          </Button>
        </Card.Text>
      </Card.Body>

    </>

  )
}

export default (Ex2)