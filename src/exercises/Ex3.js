//3. Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
import React from "react";
import { Card } from "react-bootstrap";
import '../exercise.css';

const Ex3 = (props) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  return (
    <Card className="exercise-card" style={{ width: '18rem' }}>
        <Card.Title className="exercise-title">
          Exercise 3: Display the current date.
        </Card.Title>

        <Card.Body className="exercise-body">
          <Card.Subtitle className="exercise-expected-output">
            Expected Output : <br />
            mm-dd-yyyy, mm/dd/yyyy
          </Card.Subtitle>

          <Card.Text className="exercise-solution">
            SOLUTION: <br />
            `{mm}-{dd}-{yyyy}, {mm}/{dd}/{yyyy}`
          </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default (Ex3)