//5. Write a JavaScript program to calculate days left until next Christmas.
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from 'react';


const Ex5 = (props) => {
  const [xmasDisplay, handleShow] = useState(false)
  let today = new Date()
  let xmas = new Date(today.getFullYear(), 11, 25);
  //create logic to compare to next year's xmas if after dec 25th when visiting
  xmas = (today.getMonth() === 11 && today.getDate() > 25) ? xmas.setFullYear(xmas.getFullYear() + 1) : xmas
  // get milliseconds to current date and to nearest christmas
  let milliToXmas = xmas.getTime()
  let milliToToday = today.getTime()
  // compare difference in dates and use milliseconds in a full day to convert from m/s to days
  let fullDay = 24 * 60 * 60 * 1000
  let days2Xmas = Math.ceil((milliToXmas - milliToToday) / fullDay)


  const handleChristmas = () => handleShow(true)


  return (
    <Card className="exercise-card" style={{ width: '18rem' }}>

      <Card.Title className="exercise-title">
        Exercise 5: Write a JavaScript program to calculate days left until next Christmas.
      </Card.Title>
      <Card.Body className="exercise-body">

        <Card.Text className="exercise-solution">
          SOLUTION: <br />
          {xmasDisplay
            ?
            `🎉 There are ${days2Xmas} days to Christmas! 🎉`
            :
            <Button variant="success" onClick={handleChristmas}> How many days until Christmas?! </Button>
          }
        </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default (Ex5)