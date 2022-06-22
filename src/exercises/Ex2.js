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
        Ex 2: Print window
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
        This code shall print current window.
      </Card.Subtitle>

      <Card.Body className="exercise-body">

        <Card.Text className="exercise-solution">
          <Button onClick={printThePage}>
            Click to print!!
          </Button>
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default (Ex2)