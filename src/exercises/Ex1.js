import React from "react";
import { Card } from "react-bootstrap";
// import { useState } from 'react'


const ex1 = (props) => {
  // STATE**************************************
  // const [show, setShow] = useState(false);


  //EVENTHANDLER********************************

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


  //**************************************************
  return (

    <>

      <Card.Title>Exercise 1: Display Current Date and Time.</Card.Title>
      {/* <Card.Img
              src={this.props.beast.image_url}
              onClick={this.handleBeastClick}
              alt={this.props.beast.description}
            /> */}
      <Card.Body>
        <Card.Subtitle>
          Static Sample Output : <br />
          Today is : Tuesday. <br />
          Current time is : 10 PM : 30 : 38
        </Card.Subtitle>

        <Card.Text>
          SOLUTION: <br />
          Today is : {dayOfWeek} <br />
          Current time is {hours} : {minutes} : {seconds} {prepand}
        </Card.Text>
      </Card.Body>

    </>

  )
}

export default (ex1)