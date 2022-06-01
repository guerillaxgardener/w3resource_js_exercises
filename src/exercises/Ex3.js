//3. Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

import React from "react";
import { Card } from "react-bootstrap";
// import { useState } from 'react'


const ex3 = (props) => {

  let today = new Date();

  let dd = today.getDate();

  let mm = today.getMonth() + 1;

  let yyyy = today.getFullYear();

  console.log(`${mm}-${dd}-${yyyy}, ${mm}/${dd}/${yyyy}`)


  return (

    <>
 
        <Card.Title>Exercise 3: Write a JavaScript program to get the current date.
        </Card.Title>

        <Card.Body>
          <Card.Subtitle>
            Expected Output : <br />
            mm-dd-yyyy, mm/dd/yyyy
          </Card.Subtitle>

          <Card.Text>
            SOLUTION: <br />
            `{mm}-{dd}-{yyyy}, {mm}/{dd}/{yyyy}`
          </Card.Text>
        </Card.Body>
   
    </>

  )
}

export default (ex3)