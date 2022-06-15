//11. Write a JavaScript program to get the website URL (loading page) 

import React from "react";
import { Card } from "react-bootstrap";
import '../exercise.css';

const Ex11 = (props) => {
  
  return (
    <>
      <Card.Title className="exercise-title">
        Exercise 11: Write a JavaScript program to get the website URL (loading page)
      </Card.Title>

      <Card.Body className="exercise-body">
        The current webpage is {document.URL}
      </Card.Body>
    </>
  )
}

export default (Ex11)