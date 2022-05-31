//3. Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

import React from "react";
import { Card, Button } from "react-bootstrap";
// import { useState } from 'react'


const ex3 = (props) => {
  // STATE**************************************
  // const [show, setShow] = useState(false);


  //EVENTHANDLER********************************


  //**************************************************
  return (

    <>
      <Card className="beastCards h-100" style={{ width: '18rem' }}>
        <Card.Title>Exercise 3: Write a JavaScript program to get the current date.
        </Card.Title>

        <Card.Body>
          <Card.Subtitle>
            Expected Output : <br/>
            mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.
          </Card.Subtitle>

          <Card.Text>
            SOLUTION: <br />
          
          </Card.Text>
        </Card.Body>
      </Card>
    </>

  )
}

export default (ex3)