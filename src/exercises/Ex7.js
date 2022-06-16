//7. Write a JavaScript program to find which 01 January is going to be a Sunday between 2014 and 2050.

import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import '../exercise.css';

const Ex7 = (props) => {
  let yearsAccepted = [];
  for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      yearsAccepted.push(year);
    }
  }

  let mappedYears = yearsAccepted.map((year, index) => {
    return <ListGroup.Item key={index}>{year}</ListGroup.Item>
  })
  return (
    <Card className="exercise-card" style={{ width: '18rem' }}>
      <Card.Title className="exercise-title">
        Exercise 7: Write a JavaScript program to find which 01 January's are going to be a Sunday between 2014 and 2050.
      </Card.Title>

      <Card.Body className="exercise-body">
        <Card.Text className="exercise-solution">
          SOLUTION: <br />

          The following years will have Jan 1st on a Sunday:
          <ListGroup>
           {mappedYears}
          </ListGroup>
        </Card.Text>
      </Card.Body>

    </Card>
  )
}

export default (Ex7)