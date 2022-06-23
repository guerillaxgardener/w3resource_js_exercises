//11. Write a JavaScript program to get the website URL (loading page) 

import React from "react";
import { Card } from "react-bootstrap";
import '../exercise.css';

const Ex11 = (props) => {

  return (
    <>
      <Card.Title className="exercise-title">
        Ex 11: Display URL
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
        Displays current user web address
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        The current webpage is {document.URL}
      </Card.Body>
    </>
  )
}

export default (Ex11)