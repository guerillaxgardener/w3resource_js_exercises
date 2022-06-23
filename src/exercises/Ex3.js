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
    <>
      <Card.Title className="exercise-title">
        Ex 3: Reformat date
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
        Code shall fetch date and display in the following formats: <br />
        mm-dd-yyyy, mm/dd/yyyy
      </Card.Subtitle>

      <Card.Body className="exercise-body">

        <Card.Text className="exercise-solution">
          `{mm}-{dd}-{yyyy}, {mm}/{dd}/{yyyy}`
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default (Ex3)