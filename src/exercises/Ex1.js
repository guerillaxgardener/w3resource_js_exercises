//Write a JavaScript program to display the current day and time in the following format.  Go to the editor
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';

const Ex1 = (props) => {
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let date = new Date()
  let dayOfWeek = weekdays[date.getDay()]
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  //create a ternary for am/pm determination
  let prepand = (hours <= 12) ? 'am' : 'pm'
  //manipulate hours from 24 hr to 12 hr clock with ternary
  hours = (hours >= 12) ? hours - 12 : hours
  minutes = (minutes < 10) ? `0${minutes}` : minutes
  seconds = (seconds < 10) ? `0${seconds}` : seconds

  const pageRefresh = () => window.location.reload(false);

  return (

    <>

      <Card.Title className="exercise-title">
        Exercise 1: Current Date and Time.
      </Card.Title>

      <Card.Body className="exercise-body">
        <Card.Subtitle className="exercise-expected-output">
          Desired Output : <br />
          Today is : Tuesday. <br />
          Current time is : 10 PM : 30 : 38
        </Card.Subtitle>

        <Card.Text className="exercise-solution">
          SOLUTION: <br />
          Today is : {dayOfWeek} <br />
          Current time is {hours} : {minutes} : {seconds} {prepand}
          <Button variant="success" onClick={pageRefresh}> update time </Button>
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default (Ex1)